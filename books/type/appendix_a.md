# Appendix A: Quick Reference — Pandoc Flags

This appendix is a concise reference to the Pandoc flags most commonly needed in document production workflows. Flags are grouped by purpose. For the complete documentation, run `pandoc --help` or consult `pandoc.org/MANUAL.html`.

---

## Input and output

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| `-f FORMAT` | `--from=FORMAT` | Specify input format |
| `-t FORMAT` | `--to=FORMAT` | Specify output format |
| `-o FILE` | `--output=FILE` | Write output to file (default: stdout) |
| | `--file-scope` | Parse each file independently (useful for multi-file projects) |
| | `--sandbox` | Disable features that read from the filesystem |

**Common input formats:** `markdown`, `gfm`, `commonmark`, `html`, `latex`, `docx`, `epub`, `rst`, `org`, `typst`

**Common output formats:** `html`, `html5`, `pdf`, `latex`, `beamer`, `epub`, `epub3`, `docx`, `revealjs`, `man`, `plain`, `markdown`, `chunkedhtml`

---

## Document structure

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| `-s` | `--standalone` | Produce complete document (with header/footer) |
| | `--toc` | Add table of contents |
| | `--toc-depth=N` | TOC depth (default: 3) |
| `-N` | `--number-sections` | Number headings |
| | `--number-offset=N[,N…]` | Starting number for section numbering |
| | `--top-level-division=TYPE` | Map top heading to `section`, `chapter`, or `part` |
| | `--shift-heading-level-by=N` | Shift all heading levels by N (positive or negative) |
| | `--split-level=N` | Heading level that splits chunkedhtml/EPUB files |

---

## Metadata and variables

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| `-M KEY:VALUE` | `--metadata=KEY:VALUE` | Set or override a metadata variable |
| | `--metadata-file=FILE` | Read metadata from YAML file |
| `-V KEY:VALUE` | `--variable=KEY:VALUE` | Set a template variable (not metadata) |
| `-d FILE` | `--defaults=FILE` | Load defaults from YAML file |

**Difference between `-M` and `-V`:** `-M` sets metadata accessible with `$meta-json$` and used by `--citeproc`; `-V` sets template variables only, bypassing the metadata system.

---

## Templates and styling

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| | `--template=FILE` | Use custom template |
| `-c URL` | `--css=URL` | Link CSS stylesheet (HTML/EPUB) |
| `-H FILE` | `--include-in-header=FILE` | Insert file content in document head |
| `-B FILE` | `--include-before-body=FILE` | Insert before document body |
| `-A FILE` | `--include-after-body=FILE` | Insert after document body |
| `-D FORMAT` | `--print-default-template=FORMAT` | Print the default template for a format |
| | `--reference-doc=FILE` | Use reference DOCX or ODT for styles |

---

## PDF generation

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| | `--pdf-engine=ENGINE` | PDF engine: `pdflatex`, `xelatex`, `lualatex`, `wkhtmltopdf`, `weasyprint` |
| | `--pdf-engine-opt=STRING` | Pass option to the PDF engine |

**Useful PDF metadata variables (via `-M` or YAML):**

| Variable | Effect |
|:---------|:-------|
| `documentclass` | LaTeX class (`article`, `book`, `report`, `scrartcl`) |
| `classoption` | Class options list |
| `geometry` | Page geometry string passed to `geometry` package |
| `fontsize` | Base font size (`10pt`, `11pt`, `12pt`) |
| `mainfont` | Main typeface (XeLaTeX/LuaLaTeX only) |
| `sansfont` | Sans-serif typeface |
| `monofont` | Monospace typeface |
| `linestretch` | Line spacing multiplier (`1.25`, `1.5`) |
| `colorlinks` | Colour hyperlinks (`true`/`false`) |
| `linkcolor` | Internal link colour (e.g. `NavyBlue`) |
| `urlcolor` | URL link colour |
| `hidelinks` | Remove link formatting entirely |
| `CJKmainfont` | CJK main font (XeLaTeX) |

---

## Citations and bibliography

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| `-C` | `--citeproc` | Process citations |
| | `--bibliography=FILE` | Bibliography file (`.bib`, `.json`, etc.) |
| | `--csl=FILE` | Citation Style Language file |
| | `--natbib` | Use natbib for LaTeX output |
| | `--biblatex` | Use biblatex for LaTeX output |
| | `--citation-abbreviations=FILE` | Journal abbreviation list |

---

## Filters and extensions

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| `-F PROGRAM` | `--filter=PROGRAM` | External filter (JSON, older mechanism) |
| `-L FILE` | `--lua-filter=FILE` | Lua filter (recommended) |
| | `--list-extensions[=FORMAT]` | List available extensions for a format |

**Adding/removing Markdown extensions:**

```sh
pandoc -f markdown+smart-pipe_tables    # add smart, remove pipe_tables
pandoc -f markdown+yaml_metadata_block  # ensure YAML metadata is on
```

---

## Code highlighting

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| | `--highlight-style=STYLE` | Code highlight style |
| | `--no-highlight` | Disable syntax highlighting |
| | `--syntax-definition=FILE` | Add custom language definition |
| | `--list-highlight-styles` | List available styles |
| | `--list-highlight-languages` | List supported languages |
| | `--print-highlight-style=STYLE` | Print style as JSON |

**Built-in styles:** `pygments` (default), `tango`, `espresso`, `zenburn`, `kate`, `monochrome`, `breezedark`, `haddock`

---

## EPUB options

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| | `--epub-cover-image=FILE` | Cover image |
| | `--epub-metadata=FILE` | Additional Dublin Core metadata XML |
| | `--epub-embed-font=FILE` | Embed font file in EPUB |
| | `--epub-title-page=BOOL` | Generate title page (`true`/`false`) |
| | `--epub-subdirectory=DIR` | Subdirectory name for EPUB content |

---

## Diagnostics and utilities

| Flag | Long form | Effect |
|:-----|:----------|:-------|
| | `--verbose` | Print diagnostic output to stderr |
| | `--quiet` | Suppress warnings |
| | `--fail-if-warnings` | Exit with error on any warning |
| | `--log=FILE` | Write log to file (JSON format) |
| | `--trace` | Print trace messages |
| | `--list-input-formats` | List all supported input formats |
| | `--list-output-formats` | List all supported output formats |
| `-v` | `--version` | Print version information |
| `-h` | `--help` | Print help |

---

## Commonly used combinations

**Standalone HTML with TOC and numbering:**
```sh
pandoc input.md --standalone --toc --number-sections \
  --css=style.css -o output.html
```

**PDF via Typst:**
```sh
pandoc input.md --pdf-engine=typst \
  -M mainfont="EB Garamond" \
  -M geometry="margin=25mm" \
  -o output.pdf
```

**PDF via XeLaTeX with custom fonts when LaTeX compatibility is required:**
```sh
pandoc input.md --pdf-engine=xelatex \
  -M mainfont="EB Garamond" \
  -M geometry="margin=25mm" \
  -o output.pdf
```

**EPUB with cover and embedded font:**
```sh
pandoc input.md --toc --split-level=1 \
  --epub-cover-image=cover.jpg \
  --epub-embed-font=fonts/EBGaramond-Regular.ttf \
  --css=styles/epub.css \
  -o output.epub
```

**Multi-file book build:**
```sh
pandoc metadata.yaml chapters/*.md \
  --citeproc --bibliography=refs.bib \
  --pdf-engine=typst \
  --toc --number-sections \
  -o book.pdf
```

**Beamer slides with theme:**
```sh
pandoc slides.md -t beamer \
  --pdf-engine=xelatex \
  -M theme=metropolis \
  -M aspectratio=169 \
  -o slides.pdf
```
