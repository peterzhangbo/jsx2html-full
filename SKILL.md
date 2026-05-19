---
name: jsx2html-full
description: Convert a React Artifact (JSX) into a self-contained offline HTML file, full variant. Trigger when the user says "转 HTML", "归档 Artifact", "导出原型", "convert react artifact", "jsx2html", or asks to save / archive / share a React Artifact you just produced. Covers ~90% of typical Artifacts (react, react-dom, tailwind, lucide-react, recharts, framer-motion, react-icons, clsx, date-fns, react-router-dom). Runs in ~1 second. Unlike jsx2html-fast, all dependencies — including uncommon ones — are always inlined at convert time; output is guaranteed 100% offline with no CDN fallback.
---

# jsx2html-full (v2)

Convert a React Artifact's JSX into a self-contained HTML file using a local Python script.
Output is **100% offline** and **`file://` compatible** — every dependency is inlined, no server needed.

> **⛔ STOP: 严禁读取 convert.py 或任何其他源文件。本文件包含执行所有操作的完整指令。**

## Locate the script

The skill may be mounted at any path. Always resolve it first:
```bash
CONVERT=$(find /mnt/skills ~/.claude/skills -name "convert.py" -path "*/jsx2html-full/*" 2>/dev/null | head -1)
[ -z "$CONVERT" ] && echo "jsx2html: convert.py not found" && exit 1
```
Use `$CONVERT` in place of the hardcoded script path in every command below.

## Output path rules

Derive `OUTDIR` and output stem before running the script:

| Input type | `OUTDIR` | Output stem |
|---|---|---|
| `file_path` (any) | `<input_parent>/dist/` | `<input_stem>` |
| `tar_gz_path` | `<input_parent>/dist/` | `<archive_stem>` |
| `url` | `<cwd>/dist/` | filename from URL, strip archive extension |
| `jsx_code` (no file) | `<cwd>/dist/` | top-level component name from code |

Single file → `-o "$OUTDIR/<stem>.html"`.  
Archive / batch → `-o "$OUTDIR" --batch`; script auto-zips to `<stem>-design.zip` when >1 output.

Always report the full absolute path(s) to the user.

## Input handling

> **Rule**: any file already on disk → pass its path directly to the script. Never read content to pass inline.
> The script uses the file extension (`.html` vs anything else) to choose its parsing mode — the extension must be correct.

**`file_path` (HTML / JSX)**: pass directly.
```bash
OUTDIR="$(dirname /foo/index.html)/dist"
python3 "$CONVERT" /foo/index.html \
  -o "$OUTDIR/index.html" --mode full
```

**`file_path` or `tar_gz_path` (.zip / .tar.gz)**:
```bash
OUTDIR="$(dirname /foo/pkg.tar.gz)/dist"
# zip: unzip /foo/pkg.zip -d /tmp/pkg_src
# tar.gz:
mkdir -p /tmp/pkg_src && tar -xzf /foo/pkg.tar.gz -C /tmp/pkg_src
BASE=$(find /tmp/pkg_src -name "*.html" -not -path "*/dist/*" | head -1 | xargs -I{} dirname {} 2>/dev/null)
[ -z "$BASE" ] && BASE=$(ls -d /tmp/pkg_src/*/ | head -1)
python3 "$CONVERT" "$BASE" \
  -o "$OUTDIR" --mode full --batch
```

**`url`**: detect type, download with the right extension, then use `<cwd>/dist/` as output:
```bash
STEM="pkg"   # filename from URL, strip archive extension
OUTDIR="$(pwd)/dist"
CT=$(curl -sL "$URL" -o /tmp/${STEM}.html -w "%{content_type}")
# - text/html or "HTML document"      → /tmp/${STEM}.html, single file → -o "$OUTDIR/${STEM}.html"
# - application/gzip or "gzip"        → mv to /tmp/${STEM}.tar.gz, extract, --batch → -o "$OUTDIR"
# - application/zip or "Zip archive"  → mv to /tmp/${STEM}.zip, unzip, --batch → -o "$OUTDIR"
# - text/plain or "ASCII / UTF-8"     → mv to /tmp/${STEM}.jsx, single file → -o "$OUTDIR/${STEM}.html"
```

**`jsx_code` (no file on disk)**: detect component name, save with Write tool, then pass path:
```bash
# e.g. component is "MyApp" → save to /tmp/MyApp.jsx (or .html if full HTML doc)
OUTDIR="$(pwd)/dist"
python3 "$CONVERT" /tmp/MyApp.jsx \
  -o "$OUTDIR/MyApp.html" --mode full
```

**No HTML entrypoint** (JSX-only project): pick the entry file by priority:
1. Filename contains `index`, `main`, or `app`
2. The file containing `ReactDOM.render` or `createRoot`
3. The file with the fewest `import` statements

Merge remaining files (most-imported first), strip cross-file imports, pass merged file as single input.

## Output

Single file result:
```json
{ "output": "/abs/path/file.html", "size_kb": 800, "fully_offline": true, "file_protocol_compatible": true }
```

Batch result adds:
```json
{ "outputs": [...], "zip": "/abs/path/project-design.zip" }
```

Tell the user: output path(s), size, offline status, zip path if created.

## Notes

- **Project Artifact / pasted code**: detect component name → save to `/tmp/<ComponentName>.jsx` (or `.html` if full HTML doc) with the Write tool; never display it in the reply. Then pass the path — never read it back.
- **Failure — relative imports**: merge all JSX files into one before converting.
- **Failure — missing dep**: pre-download UMD build to `vendor/deps/<pkg>.js`.

## ⛔ Hard constraints — never bypass

**Never truncate source code.** The Write tool must receive the complete, unmodified source. Do NOT:
- Write a shortened version "to avoid length limits"
- Replace sections with `// ... existing code ...`, `/* omitted */`, or any placeholder
- Split the write across multiple partial saves that each overwrite the file

If the source is too large to fit in a single Write call, use the Bash tool to write it via a heredoc instead. There is no legitimate reason to convert a truncated or placeholder-filled file — doing so silently produces broken output. If you cannot write the full source, stop and tell the user why.
