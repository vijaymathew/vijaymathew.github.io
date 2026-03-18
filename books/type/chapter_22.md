# Books — The Complete Project

A book is the most complex document type a typographer works with. It is not simply a long article. It has a front matter apparatus — half title, title page, copyright notice, dedication, table of contents, list of figures, preface — and a back matter apparatus — bibliography, index, colophon — that frame the main text. It is structured as a hierarchy of parts, chapters, and sections. It has running headers that reflect the current chapter and section. It may have an index with thousands of entries cross-referenced to specific pages. Its bibliography may contain hundreds of sources formatted to a specific style. And all of this must work simultaneously in PDF, EPUB, and HTML, each format imposing different constraints.

This chapter builds the complete book production pipeline: a LaTeX-based native book for maximum typographic quality, and a Pandoc-based multi-format build from Markdown sources. It covers every element of the book apparatus, the index and bibliography workflows, and the Makefile that ties it together.


## Project structure

A book project's directory structure should reflect its logical organisation:

```
book/
├── Makefile                 ← build system
├── metadata.yaml            ← document-wide metadata
├── references.bib           ← bibliography database
├── book.tex                 ← native LaTeX (optional)
├── chapters/
│   ├── 00-preface.md
│   ├── 01-history.md
│   ├── 02-fundamentals.md
│   └── ...
├── styles/
│   ├── book-template.latex  ← LaTeX template for PDF
│   ├── web.css              ← CSS for HTML output
│   └── epub.css             ← CSS for EPUB output
├── assets/
│   ├── cover.jpg
│   └── figures/
│       ├── pipeline.pdf
│       └── pipeline.svg
├── build/                   ← generated files (in .gitignore)
│   ├── book.pdf
│   ├── book.html
│   └── book.epub
└── .gitignore
```

The `chapters/` directory contains one Markdown file per chapter, numbered with leading zeros to ensure correct alphabetical sort order. The `metadata.yaml` file holds the title, author, bibliography settings, and format-specific options that apply to the entire book. The `build/` directory is generated and is excluded from version control.

`.gitignore` for the book project:

```
build/
*.aux
*.log
*.toc
*.out
*.lof
*.lot
*.idx
*.ind
*.ilg
*.bbl
*.blg
*.fls
*.fdb_latexmk
*.synctex.gz
```


## The LaTeX book

For maximum typographic control — a book intended for professional printing — the native LaTeX approach using the `book` document class is the standard:

```latex
\documentclass[11pt,a4paper,twoside,openright]{book}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{
  a4paper,
  top=30mm, bottom=25mm,
  inner=30mm, outer=25mm,
  bindingoffset=10mm,
  twoside
}
```

The `twoside` option and `inner`/`outer` margin specification give different margins for the gutter (spine) and fore-edge sides of the page. The `bindingoffset` adds extra space at the spine for the physical binding. The `openright` option forces chapters to begin on right-hand (recto) pages, which is standard for professionally typeset books.

### Front matter

The book begins with front matter — content before the first main chapter, typically paginated in Roman numerals:

```latex
\begin{document}
\frontmatter   ← switches to Roman numeral page numbering

\begin{titlepage}
\thispagestyle{empty}
\centering
\vspace*{2cm}
{\huge\bfseries The CLI Typographer}\\[1em]
{\Large Typography, Typesetting, and Document Production\\
from the Command Line}\\[3em]
{\large A. N. Author}\\[5em]
\vfill
{\normalsize Self-Published \\ Springfield \\ 2024}
\end{titlepage}

% Copyright page
\thispagestyle{empty}
\vspace*{\fill}
{\small
Copyright \copyright\ 2024 A. N. Author. All rights reserved.

First published 2024. Typeset in EB Garamond using \LaTeX.
}
\cleardoublepage

% Dedication
\thispagestyle{empty}
\vspace*{\fill}
\begin{center}
\textit{For everyone who types \texttt{make} and waits.}
\end{center}
\vspace*{\fill}
\cleardoublepage

\tableofcontents
\listoffigures     ← omit if no figures
\listoftables      ← omit if few tables

\chapter*{Preface}
\addcontentsline{toc}{chapter}{Preface}
\markboth{Preface}{Preface}

Preface text...

\mainmatter   ← switches to Arabic page numbering, resets to 1
```

The `\cleardoublepage` command ends the current page and advances to the next right-hand page (adding a blank page if necessary, as in a two-sided layout). This is how standard book publishing ensures odd-numbered pages are always right-hand pages.

`\addcontentsline{toc}{chapter}{Preface}` manually adds the unnumbered Preface to the table of contents — necessary because starred commands like `\chapter*` do not automatically appear in the TOC.

`\markboth{Preface}{Preface}` sets both the left and right running header marks, so the Preface appears correctly in headers on both recto and verso pages.

### Main matter and parts

```latex
\mainmatter

\part{Foundations}
\label{part:foundations}

\chapter{A Brief History of Typesetting}
\label{ch:history}

Body text...\index{typography}...

\section{Hot Metal to Digital}

More text...

\part{The Toolbox}

\chapter{Pandoc: The Universal Converter}
```

The `\part{}` command creates part-level divisions. LaTeX's `book` class provides `\part`, `\chapter`, `\section`, `\subsection`, `\subsubsection`, and `\paragraph` — six levels, though using all six in one book is unusual and typically indicates structural problems in the outline.

### Back matter

```latex
\backmatter   ← unnumbered chapters, no section numbering

\chapter*{Bibliography}
\addcontentsline{toc}{chapter}{Bibliography}
\bibliographystyle{plainnat}
\bibliography{references}

\printindex

% Colophon: last page, no page number
\clearpage
\thispagestyle{empty}
\vspace*{\fill}
{\small\centering
This book was typeset using \LaTeX{} with the \texttt{book} class.
Body text is set in EB Garamond 11/14. The book was compiled with
\texttt{latexmk} using XeLaTeX. Index entries were processed with
\texttt{makeindex}.
}
\vspace*{\fill}
\end{document}
```

The colophon — a brief note about how the book was produced — appears on the final page. It is a typographic tradition that dates to the early days of printing, when the printer's information appeared at the end of a book rather than the beginning. For a technically produced book, the colophon is the natural place to note the tools, typefaces, and workflow.


## Running headers with fancyhdr

Running headers display context-sensitive information as the reader navigates the book. The standard book convention:

- **Left (verso) pages**: chapter title in small italic, page number at outer edge
- **Right (recto) pages**: section title in small italic, page number at outer edge

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE]{\small\leftmark}
\fancyhead[RO]{\small\rightmark}
\fancyfoot[C]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

`\leftmark` contains the current chapter name; `\rightmark` contains the current section name. The `LE`/`RO` notation means "Left on Even pages, Right on Odd pages."

By default, `\leftmark` contains the chapter name in all capitals. To use sentence case:

```latex
\renewcommand{\chaptermark}[1]{%
  \markboth{\thechapter\ #1}{}}
\renewcommand{\sectionmark}[1]{%
  \markright{\thesection\ #1}}
```

These commands redefine how `\chaptermark` and `\sectionmark` populate `\leftmark` and `\rightmark`, removing the default uppercasing.

Chapter-opening pages in the `book` class use the `plain` page style (page number only, no header). Customise it to match the standard style:

```latex
\fancypagestyle{plain}{%
  \fancyhf{}
  \fancyfoot[C]{\small\thepage}
  \renewcommand{\headrulewidth}{0pt}
}
```


## Index generation

An index is built in two passes. In the first pass, `\index{entry}` commands in the source create entries in a `.idx` file. In the second pass, `makeindex` sorts the entries and generates a formatted `.ind` file, which `\printindex` includes in the document.

### Marking index entries

Place `\index{}` commands immediately after the relevant text, with no space:

```latex
Typography\index{typography} is the craft of endowing language
with a durable visual form.

The baseline\index{baseline} is the invisible line on which letters rest.
```

The entry syntax:

```latex
\index{typography}              % simple entry: "typography, N"
\index{typeface!serif}          % sub-entry: "typeface, serif, N"
\index{typography!spacing!kerning}  % sub-sub-entry (three levels)

% Cross-references (no page number)
\index{TeX|see{LaTeX}}          % "TeX, see LaTeX"
\index{xelatex|seealso{LaTeX}}  % "xelatex, see also LaTeX"

% Page ranges
\index{microtype|(}             % start of multi-page discussion
...several pages of content...
\index{microtype|)}             % end of discussion → "microtype, N–M"

% People's names (alphabetised by surname)
\index{Knuth, Donald E.}
\index{Bringhurst, Robert}
```

### Running makeindex

After the first `pdflatex` or `xelatex` pass:

```sh
makeindex book.idx
```

This generates `book.ind`, which the next LaTeX pass includes via `\printindex`. The full compilation sequence for a book with an index and bibliography:

```sh
pdflatex book.tex       # first pass: generates .aux, .idx
bibtex book             # processes bibliography
makeindex book.idx      # sorts index entries
pdflatex book.tex       # second pass: includes bibliography
pdflatex book.tex       # third pass: resolves all references
```

With `latexmk`, this sequence is automated:

```perl
# .latexmkrc
$pdf_mode = 1;
$makeindex = 'makeindex %O -o %D %S';
$pdflatex = 'pdflatex -interaction=nonstopmode %O %S';
```

```sh
latexmk book.tex
```

`latexmk` runs the correct sequence automatically, detects whether the index needs reprocessing, and stops when the output is stable.

### `xindy` as an alternative

`xindy` is a more sophisticated indexing tool than `makeindex`, with better support for non-Latin alphabets, locale-specific sorting rules, and customisable output formats. It is the better choice for multilingual books:

```sh
xindy -L english -C utf8 -I latex book.idx
```

The `-L english` option sets the language for sorting; `-C utf8` sets the input encoding. `xindy` produces the same `.ind` output format as `makeindex`, so the rest of the pipeline is unchanged.


## Bibliography with BibLaTeX

BibLaTeX is the modern bibliography system, superseding the older BibTeX workflow. It provides more flexibility in citation styles, better Unicode support, and a cleaner interface through the `\textcite` and `\parencite` commands.

Install the required packages (when available):

```latex
\usepackage[
  style=authoryear,
  backend=biber,
  sortlocale=en-GB,
  uniquelist=false
]{biblatex}
\addbibresource{references.bib}
```

In the text:

```latex
Typography was defined by \textcite{bringhurst2012} as the craft of
endowing human language with a durable visual form.

The TeX line-breaking algorithm \parencite{knuth1984} considers the
entire paragraph rather than individual lines.

Multiple sources \parencite{bringhurst2012, lamport1994} agree on
the importance of consistent spacing.
```

The bibliography:

```latex
\backmatter
\printbibliography[heading=bibintoc]
```

The `heading=bibintoc` option adds the bibliography to the table of contents automatically — no `\addcontentsline` needed.

Compile with Biber:

```sh
xelatex book.tex
biber book
xelatex book.tex
xelatex book.tex
```

Or with `latexmk`:

```perl
# .latexmkrc for BibLaTeX
$pdf_mode = 5;  # xelatex
$biber = 'biber %O %S';
```

When BibLaTeX is unavailable (on minimal installations), `natbib` with `bibtex` provides similar functionality for standard citation styles:

```latex
\usepackage{natbib}
\bibliographystyle{plainnat}
\bibliography{references}
```


## The Pandoc multi-format build

For books that need simultaneous PDF, HTML, and EPUB output, Pandoc Markdown provides the source-neutral authoring path. Each chapter is a separate `.md` file; the book's structure and metadata live in `metadata.yaml`.

```yaml
# metadata.yaml
title: "The CLI Typographer"
subtitle: "Typography, Typesetting, and Document Production from the Command Line"
author: "A. N. Author"
date: "2024"
lang: en-GB
documentclass: book
classoption:
  - 11pt
  - a4paper
  - twoside
  - openright
geometry: "top=30mm, bottom=25mm, inner=30mm, outer=25mm, bindingoffset=10mm"
toc: true
toc-depth: 2
numbersections: true
bibliography: references.bib
```

Chapter files contain only their content, with the chapter heading as the first heading:

```markdown
# A Brief History of Typesetting

Typography is the craft of endowing human language with a durable
visual form [@bringhurst2012].

## Hot Metal to Digital

The transition began in the 1950s...
```

Build all three formats:

```sh
# PDF
pandoc --citeproc \
  --bibliography=references.bib \
  --template=styles/book-template.latex \
  --pdf-engine=xelatex \
  --toc --toc-depth=2 \
  --number-sections \
  metadata.yaml chapters/*.md \
  -o build/book.pdf

# HTML
pandoc --citeproc \
  --bibliography=references.bib \
  --standalone --toc --toc-depth=2 \
  --number-sections \
  --css=styles/web.css \
  metadata.yaml chapters/*.md \
  -o build/book.html

# EPUB
pandoc --citeproc \
  --bibliography=references.bib \
  --split-level=1 --toc \
  --epub-cover-image=assets/cover.jpg \
  --css=styles/epub.css \
  metadata.yaml chapters/*.md \
  -o build/book.epub
```

A complete Makefile for this pipeline:

```makefile
BOOK     := cli-typographer
CHAPTERS := $(sort $(wildcard chapters/*.md))
META     := metadata.yaml
BIB      := references.bib
BUILD    := build
PANDOC   := pandoc

.PHONY: all pdf html epub clean

all: pdf html epub

$(BUILD):
	mkdir -p $@

$(BUILD)/$(BOOK).pdf: $(META) $(CHAPTERS) $(BIB) | $(BUILD)
	$(PANDOC) --citeproc \
	  --bibliography=$(BIB) \
	  --template=styles/book-template.latex \
	  --pdf-engine=xelatex \
	  --toc --toc-depth=2 \
	  --number-sections \
	  $(META) $(CHAPTERS) \
	  -o $@
	@printf '[PDF]  %s\n' $@

$(BUILD)/$(BOOK).html: $(META) $(CHAPTERS) $(BIB) | $(BUILD)
	$(PANDOC) --citeproc \
	  --bibliography=$(BIB) \
	  --standalone \
	  --toc --toc-depth=2 \
	  --number-sections \
	  --css=styles/web.css \
	  $(META) $(CHAPTERS) \
	  -o $@
	@printf '[HTML] %s\n' $@

$(BUILD)/$(BOOK).epub: $(META) $(CHAPTERS) $(BIB) | $(BUILD)
	$(PANDOC) --citeproc \
	  --bibliography=$(BIB) \
	  --split-level=1 \
	  --toc \
	  --epub-cover-image=assets/cover.jpg \
	  --css=styles/epub.css \
	  $(META) $(CHAPTERS) \
	  -o $@
	@printf '[EPUB] %s\n' $@

pdf:  $(BUILD)/$(BOOK).pdf
html: $(BUILD)/$(BOOK).html
epub: $(BUILD)/$(BOOK).epub

clean:
	rm -rf $(BUILD)
```

Running `make all` produces all three formats; running `make pdf` produces only the PDF. When any chapter file or the metadata changes, only the dependent outputs are rebuilt.


## Heading levels and the `\shift-heading-level-by` option

When the Pandoc source uses `#` for chapter-level headings and the LaTeX template uses the `book` class, the heading levels map correctly by default: `#` becomes `\chapter`, `##` becomes `\section`, `###` becomes `\subsection`.

If the source uses `##` for the top level (as in an article structure), shift the heading levels with:

```sh
pandoc ... --shift-heading-level-by=-1 ...
```

This promotes all headings by one level: `##` becomes `\chapter`, `###` becomes `\section`, and so on.


## The colophon

The colophon is the book's closing statement about its own production. It is a centuries-old tradition — early printers used it to identify themselves and date the work — and it remains appropriate for books produced with deliberate craft. For a CLI-produced book, the colophon is an opportunity to document the toolchain and typefaces used:

```
Colophon

This book was typeset using Pandoc 3.1 and XeLaTeX from TeX Live 2024.
Body text is set in EB Garamond 11 point with 14 points of leading.
Section headings use Fira Sans. Code examples are set in JetBrains Mono.

The Makefile that produced this book contains fewer than fifty lines.
It runs in under ninety seconds on a contemporary laptop.

Source files are available at https://github.com/example/cli-typographer.
```

In a LaTeX book, the colophon appears as the final element of the back matter, on its own page with no page number:

```latex
\clearpage
\thispagestyle{empty}
\vspace*{\fill}
{\small\noindent\textit{Colophon.}\enspace ...colophon text...}
\vspace*{\fill}
```

---

This chapter completes Part IV's gallery of document types. The book is the most complex document in the collection, and the complete project — chapters, front matter, back matter, index, bibliography, multi-format output, automated build — brings together every technique from Parts I through III.

Part V turns to refinement: the techniques for improving typographic quality beyond correct production, including microtypography, complex table layouts, multilingual documents, and the fine details that separate adequate typography from excellent typography.
