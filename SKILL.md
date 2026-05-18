---
name: jsx2html-full
description: Convert a React Artifact (JSX) into a self-contained offline HTML file, full variant. Trigger when the user says "转 HTML", "归档 Artifact", "导出原型", "convert react artifact", "jsx2html", or asks to save / archive / share a React Artifact you just produced. Covers ~90% of typical Artifacts (react, react-dom, tailwind, lucide-react, recharts, framer-motion, react-icons, clsx, date-fns, react-router-dom). Runs in ~1 second. Unlike jsx2html-fast, all dependencies — including uncommon ones — are always inlined at convert time; output is guaranteed 100% offline with no CDN fallback.
---

# jsx2html-full (v2)

Convert a React Artifact's JSX into a self-contained HTML file using a local Python script.
Output is **100% offline** and **`file://` compatible** — every dependency is inlined, no server needed.

> **⛔ STOP: 严禁读取 convert.py 或任何其他源文件。本文件包含执行所有操作的完整指令。**

## Commands

**Single file** (JSX or HTML entrypoint):
```bash
python3 .claude/skills/jsx2html-full/scripts/convert.py /path/to/input.html -o ./dist/input.html --mode full
```
- `-o` basename must match the input basename.

**Project directory** (multiple HTML files, auto-zips if >1 output):
```bash
python3 .claude/skills/jsx2html-full/scripts/convert.py /path/to/project -o "$(pwd)/dist" --mode full --batch
```

Output always goes to `./dist/`. Report the full absolute path(s) to the user.

## Input handling

> **Rule**: any file already on disk → pass its path directly to the script. Never read content to pass inline.
> The script uses the file extension (`.html` vs anything else) to choose its parsing mode — the extension must be correct.

**File path provided by user**: pass directly. If the extension is wrong (e.g. `.txt` for HTML content), copy to a temp path with the correct extension first.

**URL input**: download to a temp file with the correct extension, then pass the path:
```bash
CT=$(curl -sL "$URL" -o /tmp/artifact.html -w "%{content_type}")
# branch by content-type / file magic:
# - text/html or "HTML document"  → already saved as /tmp/artifact.html, pass as single file
# - application/gzip or "gzip"   → mv /tmp/artifact.html /tmp/artifact.tar.gz, extract (see tar.gz below)
# - text/plain or "ASCII/UTF-8"  → mv /tmp/artifact.html /tmp/artifact.jsx, pass as single file
```

**tar.gz**: extract then run `--batch`:
```bash
mkdir -p /tmp/proj && tar -xzf /tmp/artifact.tar.gz -C /tmp/proj
BASE=$(find /tmp/proj -name "*.html" -not -path "*/dist/*" | head -1 | xargs -I{} dirname {} 2>/dev/null)
[ -z "$BASE" ] && BASE=$(ls -d /tmp/proj/*/ | head -1)
python3 .claude/skills/jsx2html-full/scripts/convert.py "$BASE" -o "$(pwd)/dist" --mode full --batch
```

**ZIP**: unzip to a working dir, then treat as project directory.

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

- **Project Artifact / pasted code**: save to `/tmp/artifact.html` or `/tmp/artifact.jsx` (correct extension) with the Write tool first; never display it in the reply. Then pass the path — never read it back.
- **Failure — relative imports**: merge all JSX files into one before converting.
- **Failure — missing dep**: pre-download UMD build to `vendor/deps/<pkg>.js`.
