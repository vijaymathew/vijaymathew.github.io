# Appendix B: Essential LaTeX Packages

This appendix lists the packages used throughout this book, organised by purpose. For each package, the table shows the recommended loading position (early = before most packages; late = after most packages), a brief description, and the chapter where it is covered in depth.

All packages listed here are included in a standard TeX Live or MiKTeX installation. Install any missing package with `tlmgr install packagename`.

---

## Page layout and geometry

| Package | Load | Description |
|:--------|:-----|:------------|
| `geometry` | Early | Page dimensions, margins, paper size. Replaces manual `\hoffset`/`\voffset` settings. See Chapter 8. |
| `fancyhdr` | After geometry | Running headers and footers. Provides `\pagestyle{fancy}` with `\fancyhead`, `\fancyfoot`, `\fancyhf`. See Chapters 8, 20, 22. |
| `titlesec` | Any | Section heading formatting. Replaces `\@startsection`. Provides `\titleformat` and `\titlespacing`. See Chapter 19. |
| `setspace` | Any | Line spacing via `\setstretch{factor}`, `\onehalfspacing`, `\doublespacing`. Prefer `\linespread` for small adjustments. |
| `parskip` | Any | Replaces paragraph indentation with vertical space. Suitable for documents with short paragraphs. |
| `multicol` | Any | Multiple columns with automatic balancing. More flexible than the `twocolumn` class option. |
| `wrapfig` | Any | Wrap text around figures. Use with caution near page boundaries. See Chapter 23. |

---

## Typography and fonts

| Package | Load | Description |
|:--------|:-----|:------------|
| `fontenc` | Early | Output font encoding. Always use `[T1]` for Western European documents with pdfLaTeX. |
| `inputenc` | Early | Input encoding. Use `[utf8]` with pdfLaTeX. Not needed with XeLaTeX or LuaLaTeX. |
| `fontspec` | Early | Font selection by name for XeLaTeX and LuaLaTeX. Provides `\setmainfont`, `\setsansfont`, `\setmonofont`. See Chapters 3, 12. |
| `microtype` | After fonts | Microtypography: character protrusion, font expansion, tracking. Major quality improvement. See Chapter 26. |
| `csquotes` | Any | Language-aware quotation marks. `\textquote{...}` and `\enquote{...}`. Integrates with `babel`/`polyglossia`. See Chapter 25. |
| `textcomp` | After fontenc | Additional text symbols: `\texteuro`, `\textdegree`, `\textregistered`. Often loaded automatically. |

---

## Mathematics

| Package | Load | Description |
|:--------|:-----|:------------|
| `amsmath` | Any | Extended math environments: `align`, `gather`, `multline`, `cases`. Improved `\frac`, operators. Essential for any mathematical document. See Chapter 12. |
| `amssymb` | Any | Additional mathematical symbols: `\mathbb{R}`, `\square`, `\therefore`, etc. |
| `amsthm` | Any | Theorem environments. Provides `\newtheorem` with `plain`, `definition`, and `remark` styles. See Chapter 12. |
| `mathtools` | Any | Extends `amsmath`. Adds `\underbrace`, `\overbrace` improvements, paired delimiters. |
| `siunitx` | Any | Physical quantities and units: `\qty{300}{dpi}`, `\num{1234567}`. See Chapter 12. |

---

## Tables

| Package | Load | Description |
|:--------|:-----|:------------|
| `booktabs` | Any | Professional table rules: `\toprule`, `\midrule`, `\bottomrule`, `\cmidrule`. See Chapter 23. |
| `longtable` | Any | Tables spanning multiple pages with repeating headers. Required in any Pandoc LaTeX template. See Chapter 23. |
| `multirow` | Any | Cells spanning multiple rows: `\multirow{n}{width}{text}`. See Chapter 23. |
| `tabularx` | Any | Tables that stretch to text width with auto-sizing `X` columns. See Chapter 23. |
| `array` | Any | Enhanced column specifications. Provides `>{\cmd}`, `<{\cmd}`, `!{\cmd}` for column-level formatting. |
| `tabularray` | Any | Modern table package with key-value interface. Combines functionality of `booktabs`, `longtable`, `multirow`, `tabularx`. Requires recent TeX Live. |

---

## Figures and floats

| Package | Load | Description |
|:--------|:-----|:------------|
| `graphicx` | Any | Include images: `\includegraphics[options]{file}`. Standard for all figure inclusion. See Chapter 20. |
| `float` | Any | Adds `H` placement specifier (here, definitely). Use sparingly. |
| `caption` | Any | Customise caption formatting. `\captionsetup{font=small, labelfont=bf}`. |
| `subcaption` | After caption | Subfigures and subtables with individual captions. `subfigure` and `subtable` environments. See Chapter 20. |
| `wrapfig` | Any | Figures with text wrapping. See Chapter 23. |

---

## Lists

| Package | Load | Description |
|:--------|:-----|:------------|
| `enumitem` | Any | Full control over list formatting. Spacing, labels, indentation. Replaces `enumerate` and `itemize` for customisation. See Chapter 12. |
| `etaremune` | Any | Reverse-numbered list (counts down from N). Used for publication lists in CVs. See Chapter 19. |

---

## Cross-references and hyperlinks

| Package | Load | Description |
|:--------|:-----|:------------|
| `hyperref` | Late | PDF hyperlinks, bookmarks, metadata. Load late (second-to-last). See Chapters 8, 12. |
| `cleveref` | After hyperref | Smart cross-references: `\cref{fig:x}` produces "Figure 1". Load after `hyperref`. See Chapters 12, 20. |

---

## Bibliography

| Package | Load | Description |
|:--------|:-----|:------------|
| `natbib` | Any | Author-year and numeric citation styles for BibTeX. `\citet`, `\citep`, `\citealt`. See Chapters 12, 22. |
| `biblatex` | After fontenc | Modern bibliography system with Biber backend. More flexible than natbib. See Chapter 22. |

---

## Code and verbatim

| Package | Load | Description |
|:--------|:-----|:------------|
| `listings` | Any | Syntax-highlighted code blocks with line numbers, frames, captions. See Chapter 20. |
| `minted` | Any | Higher-quality syntax highlighting via Pygments. Requires `--shell-escape`. See Chapter 20. |
| `verbatim` | Any | Extended verbatim environment. `\verbatiminput{file}` for external files. |
| `fancyvrb` | Any | Customisable verbatim environments. Used by `minted`. |

---

## Colour and boxes

| Package | Load | Description |
|:--------|:-----|:------------|
| `xcolor` | Any | Extended colour support: named colours, colour mixing, shade definitions. `\textcolor{red}{text}`, `\colorbox{yellow}{text}`. |
| `tcolorbox` | Any | Highly customisable coloured boxes, callouts, listings integration. Provides `\newtcolorbox`. See Chapter 23. |
| `mdframed` | Any | Framed and shaded environments that break across pages. Simpler than `tcolorbox` for basic cases. |

---

## Language support

| Package | Load | Description |
|:--------|:-----|:------------|
| `babel` | Early | Multilingual support for pdfLaTeX: hyphenation patterns, localised strings, language environments. See Chapter 25. |
| `polyglossia` | Early | Multilingual support for XeLaTeX/LuaLaTeX. Better integration with `fontspec`. See Chapter 25. |
| `xeCJK` | After fontspec | Chinese, Japanese, Korean typesetting with XeLaTeX. See Chapter 25. |
| `luatexja` | After fonts | Japanese typesetting with LuaLaTeX. Implements JIS X 4051. See Chapter 25. |

---

## Indexing

| Package | Load | Description |
|:--------|:-----|:------------|
| `makeidx` | Any | Basic indexing: `\makeindex`, `\index{entry}`, `\printindex`. Requires external `makeindex` run. See Chapter 22. |
| `imakeidx` | Any | Enhanced indexing: multiple indexes, automatic `makeindex` invocation with `latexmk`. See Chapter 22. |

---

## Diagrams and graphics

| Package | Load | Description |
|:--------|:-----|:------------|
| `tikz` | Any | Programmatic vector graphics. Extremely capable. Loads with `\usetikzlibrary{...}` for extensions. See Chapter 17. |
| `pgfplots` | After tikz | Data plots within LaTeX: function curves, scatter, bar charts, coordinate axes. |

---

## Document classes (not packages)

| Class | Description |
|:------|:------------|
| `article` | Standard articles, papers, reports without chapters. |
| `report` | Longer documents with chapters but without book front/back matter. |
| `book` | Full book with parts, chapters, front matter, back matter. |
| `scrartcl` | KOMA-Script article. More flexible than `article`, better European defaults. |
| `scrreprt` | KOMA-Script report. |
| `scrbook` | KOMA-Script book. |
| `memoir` | Comprehensive class combining article, report, and book. Large feature set. |
| `beamer` | Presentation slides. See Chapter 21. |
| `letter` | Standard correspondence. See Chapter 18. |
| `scrlttr2` | KOMA-Script letter. Superior to `letter` for professional correspondence. See Chapter 18. |
| `standalone` | Single-element documents (diagrams, equations). See Chapter 17. |

---

## Recommended minimal preambles

**Article (pdfLaTeX):**
```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}\geometry{margin=25mm}
\usepackage{booktabs,longtable,graphicx}
\usepackage{natbib}
\usepackage{hyperref}
\usepackage{cleveref}
```

**Article (XeLaTeX):**
```latex
\documentclass[11pt,a4paper]{article}
\usepackage{fontspec}
\setmainfont{EB Garamond}
\usepackage[protrusion=true]{microtype}
\usepackage{geometry}\geometry{margin=25mm}
\usepackage{booktabs,longtable,graphicx}
\usepackage{natbib}
\usepackage{hyperref}
\usepackage{cleveref}
```

**Book (XeLaTeX, two-sided):**
```latex
\documentclass[11pt,a4paper,twoside,openright]{book}
\usepackage{fontspec}\setmainfont{EB Garamond}
\usepackage[protrusion=true]{microtype}
\usepackage{geometry}
\geometry{a4paper,inner=30mm,outer=25mm,top=30mm,bottom=25mm,bindingoffset=10mm}
\usepackage{fancyhdr,booktabs,longtable,graphicx}
\usepackage{makeidx}\makeindex
\usepackage{natbib}
\usepackage[hidelinks]{hyperref}
\usepackage{cleveref}
```
