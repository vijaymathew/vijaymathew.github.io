# The Well-Set Typographer
## Typography, Typesetting, and Document Production from the Command Line


## Table of Contents

### Introduction: Why This Matters, and Why Here

### Part I — Letters, Ink, and Pixels: A Foundation

**Chapter 1 — A brief history of typesetting**
- Gutenberg to hot metal
- Phototypesetting and the desktop revolution
- Knuth, TeX, and why it matters
- The web and the fracturing of print

**Chapter 2 — Typography fundamentals**
- Anatomy of a typeface — metrics, optical sizes
- Classification: serif, sans-serif, monospace, display
- Spacing: kerning, tracking, leading
- The typographic scale and vertical rhythm
- Hierarchy, contrast, and the reader's eye

**Chapter 3 — Digital typesetting concepts**
- Points, picas, ems, and rems
- Font formats: OTF, TTF, WOFF, variable fonts
- Rasterization, hinting, and screen rendering
- Print vs screen: resolution, color models, bleed, trim
- Unicode, encoding, ligatures, and OpenType features

**Chapter 4 — Font management from the CLI**
- fontconfig: fc-list, fc-query, fc-match
- Installing and organizing typefaces
- Previewing fonts without a GUI
- Font licensing basics



### Part II — Markdown as Source: The Modern Workflow

**Chapter 5 — Markdown for document authors**
- CommonMark, GitHub Flavored, and Pandoc Markdown
- Front matter and metadata with YAML
- Citations, footnotes, cross-references, and tables
- Structuring long documents: parts, chapters, sections

**Chapter 6 — Pandoc: the universal converter**
- Installing and understanding Pandoc's model
- Markdown → HTML, PDF, EPUB, DOCX
- Pandoc filters and Lua scripting
- Custom templates and metadata variables

**Chapter 7 — Generating HTML**
- Semantic HTML and accessibility
- CSS for typography: web fonts, scale, rhythm
- Single-file vs multi-page documents
- Syntax highlighting, tables of contents, and navigation

**Chapter 8 — Generating print-ready PDFs**
- PDF engines: wkhtmltopdf, WeasyPrint, Prince
- Page size, margins, headers, footers, page numbers
- CMYK color and ICC profiles
- Bleed, crop marks, and preflight

**Chapter 9 — EPUB and ebooks**
- EPUB structure and validation
- Reflowable vs fixed-layout
- Kindle and distribution formats

**Chapter 10 — Build systems and automation**
- Makefiles for documents
- Shell scripts for multi-format output
- CI/CD: auto-build PDFs on commit
- Version control for prose: Git, diffing, branching



### Part III — The Toolbox

**Chapter 11 — Choosing the right tool**
- Decision framework: use case, complexity, output format
- Comparison matrix: LaTeX vs Typst vs Quarto vs Pandoc
- When to reach for each tool

**Chapter 12 — LaTeX**
- TeX distributions: TeX Live, MiKTeX, TinyTeX
- Document classes and packages
- Math typesetting
- Custom class and style files
- BibTeX and bibliography management

**Chapter 13 — Typst: the modern alternative**
- Installation and syntax
- Scripting and programmable layouts
- Migration from LaTeX
- Current limitations

**Chapter 14 — Quarto**
- Quarto as a publishing system
- Notebooks, reports, presentations, and books
- Code execution and reproducible documents
- Themes and extensions

**Chapter 15 — Emacs and Org Mode**
- Org as a universal document format
- Org export: HTML, PDF, EPUB, ODT
- Babel for literate programming
- AUCTeX for LaTeX editing

**Chapter 16 — groff, troff, and the Unix heritage**
- The *roff family and man pages
- ms and me macro packages
- Writing man pages from scratch
- groff for simple documents today

**Chapter 17 — Diagrams and figures from the CLI**
- TikZ and PGF in LaTeX
- Graphviz: DOT language for graphs
- gnuplot for data plots
- Mermaid and D2 for architecture diagrams
- Embedding SVG in HTML and PDF workflows



### Part IV — Document Gallery: Real Examples

**Chapter 18 — Letters and correspondence**
- Formal business letter in LaTeX and Typst
- Cover letters with a personal header
- Mail merge from CSV with Pandoc

**Chapter 19 — Résumés and CVs**
- Single-column and two-column layouts
- Maintaining a single source, multiple outputs
- Academic CV with publications list

**Chapter 20 — Articles and reports**
- Journal-style article with abstract, sections, references
- Technical report with figures, tables, and appendices
- Two-column magazine layout

**Chapter 21 — Presentations**
- Beamer in LaTeX
- Reveal.js via Pandoc
- Quarto presentations

**Chapter 22 — Books: the complete project**
- Project structure: chapters, assets, styles
- Table of contents and running headers
- Index generation with makeindex / xindy
- Bibliography and citations with BibLaTeX
- Front matter, back matter, colophon
- Multi-format output: PDF, EPUB, HTML



### Part V — Craft and Refinement

**Chapter 23 — Tables and complex layouts**
- Multi-column, spanning cells, booktabs style
- Long tables across pages
- Sidebars, marginalia, and callout boxes

**Chapter 24 — Templates and style systems**
- Building reusable LaTeX document classes
- Pandoc HTML and LaTeX templates
- CSS custom properties for typographic systems
- House style and brand consistency

**Chapter 25 — Multilingual and non-Latin typesetting**
- Bidirectional text (Arabic, Hebrew)
- CJK typesetting with XeLaTeX and LuaLaTeX
- Babel and polyglossia
- OpenType language features

**Chapter 26 — Fine typography**
- Microtypography: protrusion, expansion, tracking
- Optical margin alignment
- Avoiding widows, orphans, and bad breaks
- The paragraph as the unit of design



### Appendices

- **Appendix A** — Quick reference: Pandoc flags
- **Appendix B** — Essential LaTeX packages
- **Appendix C** — Tool comparison matrix
- **Appendix D** — Free font resources
- **Appendix E** — Further reading and bibliography
