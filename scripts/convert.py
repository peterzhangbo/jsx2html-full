#!/usr/bin/env python3
"""jsx2html v2: Convert a React Artifact JSX file into a self-contained HTML.

v2 changes vs v1:
  - Uses data: URI ESM imports to bind React/ReactDOM to window globals
  - Output works with file:// protocol — no local HTTP server required
  - Transforms React/ReactDOM import statements to window global destructuring
  - Adds `file_protocol_compatible` field to JSON result

Two modes:
  fast  - missing non-React deps degrade to unpkg CDN <script> tags
  full  - missing non-React deps are fetched from unpkg at convert time and inlined
"""
import argparse
import json
import os
import re
import sys
import urllib.request
import zipfile
from pathlib import Path

UNPKG = "https://unpkg.com"
SCRIPT_DIR = Path(__file__).parent.resolve()
ASSETS_DIR = SCRIPT_DIR.parent / "assets"
VENDOR_DIR = Path(os.environ.get("JSX2HTML_VENDOR", ASSETS_DIR / "vendor")).resolve()
TEMPLATE_PATH = ASSETS_DIR / "template.html"

TAILWIND_UTIL_RE = re.compile(
    r"\b(p|m|px|py|mx|my|w|h|flex|grid|rounded|text|font|border|shadow|bg|space|gap|items|justify|hover:|md:|lg:)-?\w"
)

# Generic import line detector
IMPORT_LINE_RE = re.compile(
    r"""^\s*import\b[^'"\n]*?from\s*['"]([^'"]+)['"]\s*;?\s*$"""
    r"""|^\s*import\s+['"]([^'"]+)['"]\s*;?\s*$""",
    re.MULTILINE,
)

# import React from 'react'  OR  import React, { useState } from 'react'
REACT_DEFAULT_RE = re.compile(
    r"""^\s*import\s+React(?:\s*,\s*\{([^}]*)\})?\s+from\s+['"]react['"]\s*;?\s*$""",
    re.MULTILINE,
)

# import { useState, useEffect, ... } from 'react'
REACT_NAMED_RE = re.compile(
    r"""^\s*import\s+\{([^}]+)\}\s+from\s+['"]react['"]\s*;?\s*$""",
    re.MULTILINE,
)

# import ReactDOM / * as ReactDOM from 'react-dom' or 'react-dom/client'
REACT_DOM_DEFAULT_RE = re.compile(
    r"""^\s*import\s+(?:ReactDOM|\*\s+as\s+ReactDOM)\s+from\s+['"]react-dom(?:/client)?['"]\s*;?\s*$""",
    re.MULTILINE,
)

# import { createRoot, ... } from 'react-dom/client'  or  'react-dom'
REACT_DOM_NAMED_RE = re.compile(
    r"""^\s*import\s+\{([^}]+)\}\s+from\s+['"]react-dom(?:/client)?['"]\s*;?\s*$""",
    re.MULTILINE,
)

# import anything from 'react/jsx-runtime' or 'react/jsx-dev-runtime'
JSX_RUNTIME_RE = re.compile(
    r"""^\s*import\s+[^;]*from\s+['"]react/jsx-(?:runtime|dev-runtime)['"]\s*;?\s*$""",
    re.MULTILINE,
)


# ─────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────

def transpile_jsx(jsx_code: str, babel_path: Path) -> str:
    import subprocess
    import tempfile
    import shutil
    
    node_bin = shutil.which("node") or "node"
    
    with tempfile.TemporaryDirectory() as d:
        jsx_file = os.path.join(d, "in.jsx")
        js_file = os.path.join(d, "out.js")
        script_file = os.path.join(d, "run.js")
        
        with open(jsx_file, "w", encoding="utf-8") as f:
            f.write(jsx_code)
            
        script_code = f"""
const Babel = require({repr(str(babel_path))});
const fs = require('fs');
const code = fs.readFileSync({repr(jsx_file)}, 'utf-8');
try {{
    const result = Babel.transform(code, {{ presets: ['react'], filename: 'app.jsx' }});
    fs.writeFileSync({repr(js_file)}, result.code);
}} catch (e) {{
    console.error(e.message);
    process.exit(1);
}}
"""
        with open(script_file, "w", encoding="utf-8") as f:
            f.write(script_code)
            
        try:
            subprocess.run([node_bin, script_file], check=True, capture_output=True, text=True)
        except subprocess.CalledProcessError as e:
            print(f"Babel failed. Return code: {e.returncode}\n{e.stderr}\n{e.stdout}"); sys.exit(1)
        except FileNotFoundError:
            sys.exit("jsx2html: 'node' executable not found. Please install Node.js to use pre-transpilation.")
            
        with open(js_file, "r", encoding="utf-8") as f:
            return f.read()

def detect_tailwind(jsx: str) -> bool:
    return bool(re.search(r'\bclassName\s*=', jsx)) and bool(TAILWIND_UTIL_RE.search(jsx))


def rename_default_export(jsx: str) -> str:
    """Normalize so the converted JSX produces a top-level `App` identifier."""
    m = re.search(r'\bexport\s+default\s+function\s+(\w+)\s*\(', jsx)
    if m:
        name = m.group(1)
        jsx = re.sub(r'\bexport\s+default\s+function\b', 'function', jsx, count=1)
        if name != "App":
            return jsx + f"\nconst App = {name};\n"
        return jsx
    if re.search(r'\bexport\s+default\s+function\s*\(', jsx):
        return re.sub(r'\bexport\s+default\s+function\b', 'const App = function', jsx, count=1)
    m = re.search(r'\bexport\s+default\s+class\s+(\w+)', jsx)
    if m:
        name = m.group(1)
        jsx = re.sub(r'\bexport\s+default\s+class\b', 'class', jsx, count=1)
        if name != "App":
            return jsx + f"\nconst App = {name};\n"
        return jsx
    m = re.search(r'\bexport\s+default\s+([A-Za-z0-9_]+)', jsx)
    if m:
        name = m.group(1)
        jsx = re.sub(r'\bexport\s+default\s+[A-Za-z0-9_]+;?', '', jsx, count=1)
        if name != "App":
            return jsx + f"\nconst App = {name};\n"
        return jsx
    if re.search(r'\bexport\s+default\s+', jsx):
        return re.sub(r'\bexport\s+default\s+', 'const App = ', jsx, count=1)
    return jsx


def _clean_names(s: str) -> list:
    """Parse comma-separated import names, resolving 'foo as bar' -> 'bar'."""
    out = []
    for item in s.split(','):
        item = item.strip()
        if not item:
            continue
        if ' as ' in item:
            alias = item.split(' as ')[-1].strip()
            if alias != 'default':
                out.append(alias)
        else:
            out.append(item)
    return out


def transform_react_imports(jsx: str):
    """
    Replace React/ReactDOM ES import statements with window global destructuring.
    Returns (transformed_jsx, external_pkg_lines).

    Examples:
      import React from 'react'                     -> (removed, React is window.React)
      import { useState } from 'react'              -> const { useState } = React;
      import ReactDOM from 'react-dom/client'       -> (removed, ReactDOM is window.ReactDOM)
      import { createRoot } from 'react-dom/client' -> const { createRoot } = ReactDOM;
    """
    preamble = []
    kept = []
    external_lines = []

    for line in jsx.split('\n'):
        # jsx-runtime — Babel handles internally, just drop
        if JSX_RUNTIME_RE.match(line):
            continue

        # import React[, { named }] from 'react'
        m = REACT_DEFAULT_RE.match(line)
        if m:
            named_str = m.group(1)
            if named_str:
                names = _clean_names(named_str)
                if names:
                    preamble.append(f"const {{ {', '.join(names)} }} = React;")
            continue

        # import { useState, ... } from 'react'
        m = REACT_NAMED_RE.match(line)
        if m:
            names = _clean_names(m.group(1))
            if names:
                preamble.append(f"const {{ {', '.join(names)} }} = React;")
            continue

        # import ReactDOM from 'react-dom[/client]'
        if REACT_DOM_DEFAULT_RE.match(line):
            continue

        # import { createRoot, ... } from 'react-dom[/client]'
        m = REACT_DOM_NAMED_RE.match(line)
        if m:
            names = _clean_names(m.group(1))
            if names:
                preamble.append(f"const {{ {', '.join(names)} }} = ReactDOM;")
            continue

        # Other import lines — may be external deps
        m2 = IMPORT_LINE_RE.match(line)
        if m2:
            src = m2.group(1) or m2.group(2)
            if src and not src.startswith('.') and not src.startswith('/'):
                external_lines.append((src, line))
                continue

        kept.append(line)

    preamble_block = '\n'.join(preamble) + ('\n' if preamble else '')
    return preamble_block + '\n'.join(kept), external_lines


def escape_for_script(text: str) -> str:
    return text.replace("</script", "<\\/script")


def fetch_bytes(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "jsx2html/2.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def build_react_loader(vendor_dir: Path, mode: str) -> tuple:
    """
    Build sync <script> blocks that load React/ReactDOM (UMD) before any module executes.
    Returns (loader_html, react_inlined_list, react_degraded_list).
    """
    react_path = vendor_dir / "react.js"
    react_dom_path = vendor_dir / "react-dom.js"

    if react_path.exists() and react_dom_path.exists():
        react_js = escape_for_script(react_path.read_bytes().decode('utf-8'))
        react_dom_js = escape_for_script(react_dom_path.read_bytes().decode('utf-8'))
        loader = (
            f'<script>{react_js}</script>\n'
            f'<script>{react_dom_js}</script>\n'
            f'<script>window.react = window.React;</script>'
        )
        return loader, ["react", "react-dom"], []

    # No vendor: CDN path
    if mode == "full":
        try:
            print("  Fetching React from CDN...", file=sys.stderr)
            react_bytes = fetch_bytes(f"{UNPKG}/react@18/umd/react.production.min.js")
            react_dom_bytes = fetch_bytes(f"{UNPKG}/react-dom@18/umd/react-dom.production.min.js")
        except Exception as e:
            sys.exit(f"jsx2html: could not fetch React in full mode: {e}")
        loader = (
            f'<script>{escape_for_script(react_bytes.decode("utf-8"))}</script>\n'
            f'<script>{escape_for_script(react_dom_bytes.decode("utf-8"))}</script>\n'
            f'<script>window.react = window.React;</script>'
        )
        return loader, ["react", "react-dom"], []

    # fast mode, no vendor: CDN links
    loader = (
        f'<script src="{UNPKG}/react@18.3.1/umd/react.production.min.js"></script>\n'
        f'<script src="{UNPKG}/react-dom@18.3.1/umd/react-dom.production.min.js"></script>\n'
        f'<script>window.react = window.React;</script>'
    )
    return loader, [], ["react", "react-dom"]


# ─────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────

def convert_one(input_path: Path, output_path: Path, mode: str, title: str = "React Artifact") -> dict:
    """Convert a single JSX/HTML file. Returns the result dict."""
    # Patch args-like object so existing code paths work unchanged
    class _Args:
        pass
    args = _Args()
    args.input = str(input_path)
    args.output = str(output_path)
    args.mode = mode
    args.title = title
    _run(args)
    # _run calls sys.exit on success after printing JSON; we need the dict
    # so we re-stat the file instead
    out = output_path
    return {"output": str(out), "size_kb": out.stat().st_size // 1024}


def batch_main(base_dir: Path, dest_dir: Path, mode: str):
    """Convert all HTML files under base_dir, zip if >1 output."""
    dest_dir.mkdir(parents=True, exist_ok=True)
    html_files = [
        f for f in base_dir.rglob("*.html")
        if "dist" not in f.parts
    ]
    if not html_files:
        sys.exit(f"jsx2html: no HTML files found under {base_dir}")

    results = []
    all_inlined = []
    all_degraded = []

    for f in html_files:
        out = dest_dir / f.name
        # Re-invoke convert logic by manipulating sys.argv and capturing output
        import subprocess
        proc = subprocess.run(
            [sys.executable, __file__, str(f), "-o", str(out), "--mode", mode],
            capture_output=True, text=True
        )
        if proc.returncode != 0:
            sys.exit(f"jsx2html: failed on {f.name}:\n{proc.stderr}")
        r = json.loads(proc.stdout)
        results.append(r)
        all_inlined.extend(r.get("inlined_deps", []))
        all_degraded.extend(r.get("degraded_deps", []))

    zip_path = None
    if len(results) > 1:
        zip_name = base_dir.name + "-design.zip"
        zip_path = dest_dir / zip_name
        with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
            for r in results:
                p = Path(r["output"])
                zf.write(p, p.name)

    summary = {
        "outputs": results,
        "zip": str(zip_path) if zip_path else None,
        "mode": mode,
        "inlined_deps": sorted(set(all_inlined)),
        "degraded_deps": sorted(set(all_degraded)),
        "fully_offline": len(all_degraded) == 0,
        "file_protocol_compatible": len(all_degraded) == 0,
    }
    print(json.dumps(summary, indent=2))


def main():
    ap = argparse.ArgumentParser(prog="jsx2html")
    ap.add_argument("input", help="JSX or HTML file path, or project directory (with --batch)")
    ap.add_argument("-o", "--output", required=True, help="Output file (single) or output directory (--batch)")
    ap.add_argument("--mode", choices=["fast", "full"], default="fast")
    ap.add_argument("--title", default="React Artifact")
    ap.add_argument("--batch", action="store_true", help="Convert all HTML files under input dir and auto-zip if >1")
    args = ap.parse_args()

    if args.batch:
        batch_main(Path(args.input), Path(args.output), args.mode)
        return

    _run(args)


def _run(args):

    input_path = Path(args.input)
    extra_css = ""
    
    if input_path.suffix.lower() == '.html':
        html_content = input_path.read_text(encoding="utf-8")
        
        # 1. Extract remote links (preconnect, fonts)
        for m in re.finditer(r'<link\s+[^>]*rel=["\'](?:stylesheet|preconnect)["\'][^>]*>', html_content, re.IGNORECASE):
            if re.search(r'href=["\'](http[^"\']+|//[^"\']+)["\']', m.group(0), re.IGNORECASE):
                extra_css = m.group(0) + "\n" + extra_css
                
        # 2. Extract local CSS files
        for m in re.finditer(r'<link\s+[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>', html_content, re.IGNORECASE):
            href = m.group(1)
            if not href.startswith(('http://', 'https://', '//')):
                css_file = input_path.parent / href
                if css_file.exists():
                    extra_css += f"\n<!-- Inlined from {href} -->\n<style>\n{css_file.read_text(encoding='utf-8')}\n</style>\n"
                    
        # 3. Extract embedded <style> blocks
        for m in re.finditer(r'<style[^>]*>(.*?)</style>', html_content, re.IGNORECASE | re.DOTALL):
            extra_css += f"\n<style>\n{m.group(1)}\n</style>\n"
            
        # 4. Extract local jsx scripts
        jsx_parts = []
        for m in re.finditer(r'<script\s+[^>]*type=["\']text/babel["\'][^>]*src=["\']([^"\']+)["\'][^>]*></script>', html_content, re.IGNORECASE):
            src = m.group(1)
            if not src.startswith(('http://', 'https://', '//')):
                jsx_file = input_path.parent / src
                if jsx_file.exists():
                    content = jsx_file.read_text(encoding="utf-8")
                    content = re.sub(r'Object\.assign\s*\(\s*window\s*,\s*\{[^}]*\}\s*\)\s*;?', '', content)
                    jsx_parts.append(content)
                    
        # 5. Extract inline text/babel scripts
        for m in re.finditer(r'<script\s+[^>]*type=["\']text/babel["\'][^>]*>(.*?)</script>', html_content, re.IGNORECASE | re.DOTALL):
            if 'src=' not in m.group(0).lower():
                content = m.group(1)
                content = re.sub(r'Object\.assign\s*\(\s*window\s*,\s*\{[^}]*\}\s*\)\s*;?', '', content)
                
                m_render = re.search(r'ReactDOM\.(?:createRoot\(.*?\)\.render|render)\(\s*<([A-Z]\w+)\s*(?:/>|></\1>)[^)]*\)\s*;?', content)
                if m_render:
                    comp_name = m_render.group(1)
                    content = content[:m_render.start()] + content[m_render.end():]
                    if comp_name != "App":
                        content += f"\nconst App = {comp_name};\n"
                    
                jsx_parts.append(content)
                
        # 6. Extract title
        m_title = re.search(r'<title[^>]*>(.*?)</title>', html_content, re.IGNORECASE)
        if m_title:
            args.title = m_title.group(1)
        if not jsx_parts:
            # Pure HTML file: output as-is, just strip local stylesheets since we inline them
            html_standalone = re.sub(
                r'<link\s+[^>]*rel=["\']stylesheet["\'][^>]*href=["\'](?!http|//)[^"\']+["\'][^>]*>',
                '',
                html_content,
                flags=re.IGNORECASE
            )
            if extra_css:
                html_standalone = html_standalone.replace('</head>', f'{extra_css}\n</head>')
            
            out_path = Path(args.output)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(html_standalone, encoding="utf-8")
            print(json.dumps({
                "output": str(out_path),
                "size_kb": out_path.stat().st_size // 1024,
                "mode": args.mode,
                "tailwind": False,
                "inlined_deps": [],
                "degraded_deps": [],
                "fully_offline": True,
                "file_protocol_compatible": True
            }, indent=2))
            sys.exit(0)

        jsx = "\n".join(jsx_parts)
        # Auto-patch TweaksPanel so it is visible by default when opened without a host
        jsx = jsx.replace(
            "const [open, setOpen] = React.useState(false);",
            "const [open, setOpen] = React.useState(() => typeof window !== 'undefined' && window === window.parent);"
        )
    else:
        jsx = input_path.read_text(encoding="utf-8")

    # Guard: no relative imports
    relative = [
        s for m in IMPORT_LINE_RE.finditer(jsx)
        for s in [(m.group(1) or m.group(2))]
        if s and (s.startswith(".") or s.startswith("/"))
    ]
    if relative:
        sys.exit(
            f"jsx2html: relative imports not supported: {relative}. "
            "Merge all files into a single JSX file first."
        )

    if not VENDOR_DIR.exists():
        sys.exit(f"jsx2html: vendor dir not found: {VENDOR_DIR}.")
    babel_path = VENDOR_DIR / "babel.min.js"
    if not babel_path.exists():
        sys.exit(f"jsx2html: missing {babel_path}.")
    # Tailwind
    use_tailwind = detect_tailwind(jsx)
    tailwind_block = ""
    if use_tailwind:
        tw_path = VENDOR_DIR / "tailwind-play.js"
        if tw_path.exists():
            tailwind_block = "<script>" + escape_for_script(tw_path.read_text(encoding="utf-8")) + "</script>"
        else:
            tailwind_block = '<script src="https://cdn.tailwindcss.com"></script>'

    # Transform React/ReactDOM imports to window global destructuring
    jsx_transformed, external_lines = transform_react_imports(jsx)
    jsx_transformed = rename_default_export(jsx_transformed)
    
    # Pre-compile JSX to standard JS at build-time using node
    jsx_compiled = transpile_jsx(jsx_transformed, babel_path)
    jsx_final = escape_for_script(jsx_compiled)

    # React loader via data: URI ESM (file:// compatible)
    react_loader, inlined, degraded = build_react_loader(VENDOR_DIR, args.mode)

    # External (non-React) deps
    # inline_scripts: raw JS injected inside the module (runs after window.React is set)
    # cdn_scripts: <script src> tags for degraded fast-mode deps (placed in <head>)
    inline_scripts_parts = []
    cdn_scripts_parts = []
    deps_dir = VENDOR_DIR / "deps"
    deps_dir.mkdir(parents=True, exist_ok=True)
    seen_pkgs = set()

    for pkg, _orig_line in external_lines:
        if pkg in seen_pkgs:
            continue
        seen_pkgs.add(pkg)

        fname = pkg.lstrip("@").replace("/", "__") + ".js"
        local = deps_dir / fname

        if local.exists():
            data = local.read_bytes()
            inline_scripts_parts.append(escape_for_script(data.decode('utf-8')))
            inlined.append(pkg)
        elif args.mode == "full":
            pkg_short = pkg.split("/")[-1]
            pkg_slug = pkg.lstrip("@").replace("/", "-")
            fetched = False
            for url_pattern in [
                f"{UNPKG}/{pkg}/dist/{pkg_short}.umd.js",
                f"{UNPKG}/{pkg}/dist/{pkg_slug}.umd.js",
                f"{UNPKG}/{pkg}/dist/{pkg_short}.min.js",
                f"{UNPKG}/{pkg}/dist/{pkg_slug}.min.js",
                f"{UNPKG}/{pkg}",
            ]:
                try:
                    data = fetch_bytes(url_pattern)
                    local.write_bytes(data)
                    inline_scripts_parts.append(escape_for_script(data.decode('utf-8')))
                    inlined.append(pkg)
                    fetched = True
                    break
                except Exception:
                    continue
            if not fetched:
                sys.exit(f"jsx2html: failed to fetch '{pkg}' from unpkg in full mode.")
        else:
            url = f"{UNPKG}/{pkg}"
            cdn_scripts_parts.append(f'<script src="{url}"></script>')
            degraded.append(pkg)

    inline_scripts = "\n".join(inline_scripts_parts)
    cdn_scripts = "\n".join(cdn_scripts_parts)

    # Build final HTML
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    html = (
        template
        .replace("__TITLE__", args.title)
        .replace("__EXTRA_CSS__", extra_css)
        .replace("__TAILWIND_BLOCK__", tailwind_block)
        .replace("__CDN_SCRIPTS__", cdn_scripts)
        .replace("__REACT_LOADER__", react_loader)
        .replace("__INLINE_SCRIPTS__", inline_scripts)
        .replace("__USER_JSX__", jsx_final)
    )

    out_path = Path(args.output)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(html, encoding="utf-8")
    size_kb = out_path.stat().st_size // 1024
    fully_offline = len(degraded) == 0

    result = {
        "output": str(out_path),
        "size_kb": size_kb,
        "mode": args.mode,
        "tailwind": use_tailwind,
        "inlined_deps": inlined,
        "degraded_deps": degraded,
        "fully_offline": fully_offline,
        "file_protocol_compatible": fully_offline,
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
