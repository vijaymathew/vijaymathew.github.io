# Books — The Complete Project

A book is the most complex document type a typographer works with. It is not simply a long article. It has a front matter apparatus — half title, title page, copyright notice, dedication, table of contents, list of figures, preface — and a back matter apparatus — bibliography, index, colophon — that frame the main text. It is structured as a hierarchy of parts, chapters, and sections. It has running headers that reflect the current chapter and section. It may have an index with thousands of entries cross-referenced to specific pages. Its bibliography may contain hundreds of sources formatted to a specific style. And all of this must work simultaneously in PDF, EPUB, and HTML, each format imposing different constraints.

This chapter builds the complete book production pipeline from Markdown chapters, shared metadata, and reproducible build commands. The default path is multi-format: HTML and EPUB from the same sources, plus PDF through a dedicated print backend such as Typst. A native LaTeX book remains useful for print-only projects or publisher-mandated workflows, but it should be the exception rather than the organising principle. The chapter therefore treats the Markdown source tree as canonical and the PDF backend as a replaceable implementation detail.


## Project structure

A book project's directory structure should reflect its logical organisation:

```
book/
├── Makefile                 ← build system
├── metadata.yaml            ← document-wide metadata
├── references.bib           ← bibliography database
├── chapters/
│   ├── 00-preface.md
│   ├── 01-history.md
│   ├── 02-fundamentals.md
│   └── ...
├── styles/
│   ├── book.typ             ← Typst template for PDF
│   ├── book-template.latex  ← LaTeX fallback template
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

The `chapters/` directory contains one Markdown file per chapter, numbered with leading zeros to ensure correct alphabetical sort order. The `metadata.yaml` file holds the title, author, bibliography settings, and format-specific options that apply to the entire book. The PDF template can be Typst or LaTeX; the source tree stays the same either way. The `build/` directory is generated and is excluded from version control.

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


## The PDF backend: Typst first, LaTeX when needed

For a Markdown-first book, the PDF layer should be swappable. Typst is the cleaner default when you want a programmable print layout without inheriting TeX's macro language. The book template should own geometry, running heads, chapter openings, and front and back matter conventions.

```typst
#set page(
  paper: "a4",
  margin: (
    inside: 30mm,
    outside: 25mm,
    top: 30mm,
    bottom: 25mm,
  ),
)
#set text(font: "EB Garamond", size: 11pt, lang: "en")
#set par(justify: true)
```

The inside and outside margins matter in the same way that gutter and fore-edge margins matter in traditional book work. The source files should not know about any of this; they should remain chapter files.

### Front matter

The book begins with front matter — content before the first main chapter, typically paginated separately and laid out more quietly than the main text. In a Typst template, this is usually one function per front-matter element:

```typst
#let title-page(meta) = pagebreak(to: "odd") + align(center)[
  #v(35%)
  #text(size: 26pt, weight: "bold")[#meta.title]
  #v(8pt)
  #text(size: 14pt)[#meta.subtitle]
  #v(18pt)
  #meta.author
  #v(24pt)
  #meta.publisher
]

#let copyright-page(meta) = pagebreak(to: "odd") + block[
  Copyright © #meta.year #meta.author.
  All rights reserved.
]

#let dedication(text) = pagebreak(to: "odd") + align(center + horizon)[
  #emph[text]
]

#outline(title: [Contents])
```

The point is not that these exact helper functions are universal. The point is that front matter is a template responsibility, not something the author should retype in every manuscript.

### Main matter and parts

```markdown
# Part: Foundations

# A Brief History of Typesetting {#ch-history}

Body text with index markers and citations.

## Hot Metal to Digital

More text...

# Part: The Toolbox

# Pandoc: The Universal Converter
```

The source should reflect the book's logical outline only. Whether part openings begin on recto pages, whether chapter titles occupy a full spread, and how running heads are updated are all template decisions.

### Back matter

```markdown
# Bibliography

# Index

# Colophon
```

In the source tree, these can be generated sections or included back-matter files. The colophon — a brief note about how the book was produced — appears on the final page. It is the natural place to record the toolchain, typefaces, and workflow.


## Running headers

Running headers display context-sensitive information as the reader navigates the book. The standard book convention:

- **Left (verso) pages**: chapter title in small italic, page number at outer edge
- **Right (recto) pages**: section title in small italic, page number at outer edge

```typst
#set page(
  header: context {
    let loc = here()
    align(center)[#smallcaps[Chapter] #query(heading.where(level: 1)).last().body]
  },
  footer: context align(center)[#counter(page).display()],
)
```

The details vary by template, but the principle is stable: running heads belong to the page layer, not the chapter source. Chapter-opening pages can use a separate page style with the header suppressed.


## Index generation

An index is still a multi-step process, but the source should remain Markdown. The usual pattern is to mark terms in the source and let a filter or generator collect them into an index file.

### Marking index entries

Mark indexable terms semantically:

```markdown
Typography [typography]{.index} is the craft of endowing language
with a durable visual form.

The baseline [baseline]{.index} is the invisible line on which
letters rest.
```

For subentries or see-also references, use attributes:

```markdown
[serif]{.index main="typeface" sub="serif"}
[LaTeX]{.index see="TeX"}
```

### Running makeindex

After the main render step, run the index generator on the collected terms:

```sh
pandoc metadata.yaml chapters/*.md \
  --lua-filter=filters/index.lua \
  -o build/book-index.json

typst compile styles/book.typ build/book.pdf
```

The exact mechanics depend on the indexing tool you choose, but the goal is the same as everywhere else in this book: keep the manuscript human-readable and let the build step assemble the machinery.

### `xindy` as an alternative

If the book is multilingual, use an indexing tool that understands locale-aware sorting and Unicode. The important requirement is not the historical tool name but correct alphabetical order in the finished index.


## Bibliography

For a Markdown-first book, bibliography data should stay in `references.bib` or another citation database, and the manuscript should cite keys directly:

```markdown
Typography was defined by [@bringhurst2012] as the craft of endowing
human language with a durable visual form.

The line-breaking algorithm discussed in [@knuth1984] considers the
paragraph as a whole rather than individual lines.
```

In Typst, the bibliography is attached at the template level:

```typst
#bibliography("references.bib", style: "chicago-author-date")
```

In Pandoc or Quarto, `--citeproc` performs the same job for HTML, EPUB, and PDF.


## The Pandoc multi-format build

For books that need simultaneous PDF, HTML, and EPUB output, Pandoc Markdown provides the source-neutral authoring path. Each chapter is a separate `.md` file; the book's structure and metadata live in `metadata.yaml`. This is the path that should dominate the workflow. The PDF backend can be Typst by default and changed later if a print requirement forces a LaTeX-specific template.

```yaml
# metadata.yaml
title: "The CLI Typographer"
subtitle: "Typography, Typesetting, and Document Production from the Command Line"
author: "A. N. Author"
date: "2024"
lang: en-GB
documentclass: book
mainfont: "EB Garamond"
sansfont: "Source Sans 3"
monofont: "JetBrains Mono"
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
# PDF via Typst
pandoc --citeproc \
  --bibliography=references.bib \
  --pdf-engine=typst \
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
	  --pdf-engine=typst \
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


## Heading levels and `shift-heading-level-by`

When the Pandoc source uses `#` for chapter-level headings, the mapping is already sensible for books: `#` is the chapter level, `##` the section level, `###` the subsection level.

If the source uses `##` for the top level (as in an article structure), shift the heading levels with:

```sh
pandoc ... --shift-heading-level-by=-1 ...
```

This promotes all headings by one level: `##` becomes `\chapter`, `###` becomes `\section`, and so on.


## The colophon

The colophon is the book's closing statement about its own production. It is a centuries-old tradition — early printers used it to identify themselves and date the work — and it remains appropriate for books produced with deliberate craft. For a CLI-produced book, the colophon is an opportunity to document the toolchain and typefaces used:

```
Colophon

This book was set from Markdown using Pandoc and Typst.
Body text is set in EB Garamond 11 point with 14 points of leading.
Section headings use Fira Sans. Code examples are set in JetBrains Mono.

The Makefile that produced this book contains fewer than fifty lines.
It runs in under ninety seconds on a contemporary laptop.

Source files are available at https://github.com/example/cli-typographer.
```

In a Typst-backed book, the colophon is simply a final unnumbered page styled by the template:

```typst
#pagebreak(to: "odd")
#align(center + horizon)[
  #text(size: 9pt, style: "italic")[Colophon.]
  #v(6pt)
  This book was set from Markdown using Pandoc and Typst.
]
```

---

This chapter completes Part IV's gallery of document types. The book is the most complex document in the collection, and the complete project — chapters, front matter, back matter, index, bibliography, multi-format output, automated build — brings together every technique from Parts I through III.

Part V turns to refinement: the techniques for improving typographic quality beyond correct production, including microtypography, complex table layouts, multilingual documents, and the fine details that separate adequate typography from excellent typography.
