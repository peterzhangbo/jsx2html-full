# jsx2html-full

A Claude Code skill that converts React Artifacts (JSX) into self-contained, fully offline HTML files.

## Features

- **100% offline output** — every dependency is inlined, no CDN fallback
- **`file://` compatible** — open directly in any browser, no server needed
- Covers ~90% of typical Artifacts: `react`, `react-dom`, `tailwind`, `lucide-react`, `recharts`, `framer-motion`, `react-icons`, `clsx`, `date-fns`, `react-router-dom`
- Single-file and batch (project directory) modes
- Runs in ~1 second

## Installation

Install via Claude Code skill manager, or clone this repo into your skills directory:

```bash
git clone https://github.com/peterzhangbo/jsx2html-full \
  ~/.claude/skills/jsx2html-full
```

## Usage

Trigger phrases (English or Chinese):

> "转 HTML" · "归档 Artifact" · "导出原型" · "convert react artifact" · "jsx2html" · "save/archive/share a React Artifact"

Claude will automatically run the conversion and return the output file path.

### Manual CLI usage

**Single file** (JSX or HTML):

```bash
python3 scripts/convert.py /path/to/input.html -o ./dist/input.html --mode full
```

**Project directory** (auto-zips if >1 output file):

```bash
python3 scripts/convert.py /path/to/project -o ./dist --mode full --batch
```

Output is always written to `./dist/`.

## How it works

1. The skill receives your React/JSX source (from a Claude Artifact or a file)
2. `scripts/convert.py` resolves all imports, inlines UMD builds from the local `vendor/` cache, compiles JSX via Babel standalone, and wraps everything in a single `<html>` file
3. The resulting file has zero external dependencies and works offline

## Project structure

```
jsx2html-full/
├── SKILL.md          # Skill definition read by Claude Code
├── scripts/
│   └── convert.py    # Core conversion script
└── assets/
    ├── template.html # HTML shell template
    └── vendor/       # Pre-bundled UMD dependency cache
```

## License

MIT
