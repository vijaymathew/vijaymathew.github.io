# Appendix C: Tool Comparison Matrix

The tables in this appendix provide a quick comparative view of the tools covered in this book. No tool is objectively best across all criteria; the correct tool depends on the specific document and workflow. Use these tables alongside Chapter 11's decision framework.

---

## Primary tools: comprehensive comparison

The seven criteria are scored 1–5, where 5 is best. Scores represent typical usage with reasonable configuration — not theoretical limits or worst-case defaults.

| Criterion | LaTeX | Typst | Pandoc | Quarto | Org Mode | groff |
|:----------|:-----:|:-----:|:------:|:------:|:--------:|:-----:|
| **Typographic quality (PDF)** | 5 | 4 | 4† | 4† | 4† | 3 |
| **Multiple output formats** | 1 | 1 | 5 | 5 | 4 | 2 |
| **Mathematical typesetting** | 5 | 4 | 3 | 4 | 3 | 2 |
| **Learning curve** (higher = easier) | 1 | 3 | 4 | 3 | 2 | 2 |
| **Compilation speed** | 2 | 5 | 4 | 3 | 3 | 5 |
| **Package/extension ecosystem** | 5 | 2 | 3 | 3 | 3 | 1 |
| **Code execution** | 1 | 1 | 1 | 5 | 4 | 1 |
| **Version-control friendliness** | 4 | 5 | 5 | 5 | 5 | 4 |
| **Publisher acceptance** | 5 | 1 | 3 | 3 | 2 | 2 |

† Via LaTeX backend

---

## PDF output engines

| Engine | Part of | Math | System fonts | Speed | Best for |
|:-------|:--------|:----:|:------------:|:-----:|:---------|
| pdfLaTeX | TeX Live / MiKTeX | ✓ | ✗ (Type 1 only) | Fast | Compatibility, math-heavy docs |
| XeLaTeX | TeX Live / MiKTeX | ✓ | ✓ | Moderate | System fonts, multilingual |
| LuaLaTeX | TeX Live / MiKTeX | ✓ | ✓ | Slow | Lua scripting, advanced Unicode |
| Typst | Typst | ✓ | ✓ | Very fast | New projects without LaTeX dependency |
| wkhtmltopdf | Separate install | Via MathJax | ✓ | Moderate | CSS-driven layouts, HTML→PDF |
| WeasyPrint | Python package | Via MathJax | ✓ | Moderate | CSS Paged Media, print stylesheets |

---

## Output format support by tool

A ✓ indicates native or first-class support; (✓) indicates support via an intermediate format or with configuration; ✗ indicates not supported.

| Format | LaTeX | Typst | Pandoc | Quarto | Org Mode | groff |
|:-------|:-----:|:-----:|:------:|:------:|:--------:|:-----:|
| PDF | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| HTML | ✗ | ✗ | ✓ | ✓ | ✓ | (✓) |
| EPUB | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ |
| DOCX | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ |
| man page | ✗ | ✗ | ✓ | ✗ | ✗ | ✓ |
| Beamer slides | ✓ | ✗ | ✓ | ✓ | (✓) | ✗ |
| Reveal.js | ✗ | ✗ | ✓ | ✓ | (✓) | ✗ |
| ODT | ✗ | ✗ | ✓ | (✓) | ✓ | ✗ |
| Typst source | ✗ | — | ✓ | (✓) | ✗ | ✗ |
| LaTeX source | — | ✗ | ✓ | ✓ | ✓ | ✗ |

---

## Source format compatibility

Which tools can read each source format:

| Source format | LaTeX | Typst | Pandoc | Quarto | Org Mode |
|:-------------|:-----:|:-----:|:------:|:------:|:--------:|
| Markdown (.md) | ✗ | ✗ | ✓ | ✓ | (✓) |
| Pandoc Markdown | ✗ | ✗ | ✓ | ✓ | ✗ |
| LaTeX (.tex) | ✓ | ✗ | ✓ | ✓ | (✓) |
| Typst (.typ) | ✗ | ✓ | ✓ | ✗ | ✗ |
| Org (.org) | ✗ | ✗ | ✓ | ✗ | ✓ |
| DOCX (.docx) | ✗ | ✗ | ✓ | ✓ | ✗ |
| HTML (.html) | ✗ | ✗ | ✓ | ✓ | ✗ |
| RST (.rst) | ✗ | ✗ | ✓ | ✓ | ✗ |
| QMD (.qmd) | ✗ | ✗ | ✗ | ✓ | ✗ |

---

## Decision guide: which tool for which job

| Situation | Recommended tool | Reason |
|:----------|:----------------|:-------|
| Academic paper with maths | LaTeX | Unsurpassed math quality; publisher requires it |
| Academic paper, no maths | Pandoc + LaTeX | Markdown source; multiple output formats |
| Journal submission (must be .tex) | LaTeX | Publisher requirement |
| New document, no LaTeX requirement | Typst | Modern syntax; fast compilation |
| Computational report (Python/R) | Quarto | Code execution and reproducibility |
| API documentation site | Pandoc + HTML | Multi-page HTML; version-controllable |
| Book (print + ebook) | LaTeX or Pandoc | Depends on complexity; see Chapter 22 |
| Presentation slides (print) | Beamer (native or via Pandoc) | PDF; math support |
| Presentation slides (online) | Reveal.js via Pandoc | HTML; interactive; shareable URL |
| Cover letter or correspondence | LaTeX or Pandoc | See Chapter 18 |
| Résumé / CV | LaTeX (single-column or two-column) | See Chapter 19 |
| Unix man page | groff -man | Standard; always available |
| Simple document, no dependencies | groff -ms | No LaTeX needed; always available |
| Emacs-based workflow | Org Mode | Native to Emacs ecosystem |

---

## Diagram tools comparison

| Tool | Type | Output | Best for | Installation |
|:-----|:-----|:-------|:---------|:-------------|
| TikZ | LaTeX package | PDF/SVG (via standalone) | Precise technical diagrams in LaTeX | Included in TeX Live |
| Graphviz (dot) | CLI | SVG, PDF, PNG | Automatic graph layout; dependency trees | `apt install graphviz` |
| Mermaid | JavaScript/CLI | SVG, PNG | Flowcharts in Markdown; web use | `npm install -g @mermaid-js/mermaid-cli` |
| D2 | CLI | SVG | Software architecture diagrams | `curl -fsSL https://d2lang.com/install.sh \| sh` |
| gnuplot | CLI | SVG, PDF, PNG, EPS | Data plots; scientific figures | `apt install gnuplot` |
| matplotlib | Python library | SVG, PDF, PNG | Data visualisation with computation | `pip install matplotlib` |
| PGFPlots | LaTeX package | PDF | Data plots within LaTeX | Included in TeX Live |

---

## Font management tools

| Tool | Platform | Purpose |
|:-----|:---------|:--------|
| `fc-list` | Linux/macOS | List installed fonts; filter by properties |
| `fc-match` | Linux/macOS | Find best match for a font specification |
| `fc-query` | Linux/macOS | Inspect font file properties |
| `fc-cache -f` | Linux/macOS | Rebuild font cache after installation |
| `pdffonts` | Linux/macOS (poppler) | Verify font embedding in a PDF |
| `otfinfo` | Linux/macOS (lcdf-typetools) | Query OpenType font features |
| `fonttools` | Python (cross-platform) | Inspect, subset, and manipulate font files |
| Font Book | macOS | GUI font manager |
| `tlmgr` | TeX Live | Install TeX fonts via CTAN |

---

## Build tool comparison

| Tool | Language | Incremental | Parallel | Learning curve | Best for |
|:-----|:---------|:-----------:|:--------:|:--------------:|:---------|
| GNU Make | Shell/Make | ✓ | ✓ | Low | Any project; universal |
| `latexmk` | Perl | ✓ | ✗ | Very low | LaTeX-only projects |
| `just` | Shell | ✗ | ✓ | Low | Modern Make alternative |
| `tup` | C | ✓ | ✓ | Medium | Large projects |
| Shell script | Bash/sh | ✗ | Via `&`/`wait` | Low | Simple pipelines |
