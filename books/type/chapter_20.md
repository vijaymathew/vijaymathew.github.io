# Articles and Reports

The article and the report are the workhorses of technical and academic publishing. Between them, they cover the range from a four-page conference paper to a two-hundred-page internal report, from a single-author journal submission to a multi-author technical specification. The typographic requirements of these documents are well understood — decades of published guidelines and house styles have codified what a professional article looks like — which makes them ideal territory for demonstrating how CLI tools handle the full complexity of real documents.

This chapter builds three examples from a Markdown-first source tree. The first is a journal-style article with an abstract, numbered sections, mathematical equations, a table, cross-references, and a bibliography. The second is a technical report with a title page, table of contents, list of figures, code listings, appendices, and a two-sided layout. The third is a two-column magazine-style layout where a Typst or Pandoc PDF path is the first choice and LaTeX's `twocolumn` mode remains a fallback when a legacy class or package stack is required.


## A journal-style article

The default workflow for an article should begin with Markdown plus metadata, not with a handwritten TeX preamble. That keeps HTML, DOCX, EPUB, and PDF available from one source, keeps the manuscript readable in Git, and makes Quarto or Pandoc the controlling layer rather than the PDF backend. Typst is the natural PDF-first companion for this workflow: it handles page layout, maths, figures, and bibliography cleanly without forcing the author to write TeX macros. LaTeX still matters when a journal mandates a class file or when a specific package ecosystem is unavoidable.

When a LaTeX backend is required, the article typically uses the `article` class, occasionally a publisher-supplied class, with a standard set of packages for typography, mathematics, bibliographies, and cross-references.

### Document structure and metadata

For a Markdown-first article, the equivalent of the old preamble is the metadata block plus a small PDF template. The metadata should describe structure, bibliographic resources, and numbering rules:

```yaml
---
title: "On the Typographic Quality of CLI-Produced Documents"
subtitle: "A Systematic Comparison"
author:
  - name: "A. N. Author"
    affiliation: "Department of Information Design, University of Example"
    email: "author@example.edu"
  - name: "B. M. Collaborator"
    affiliation: "Institute of Typography, Townsley University"
date: "2024-03-15"
abstract: |
  This paper presents a systematic comparison of documents produced
  using CLI-based typesetting tools against those produced using
  graphical desktop publishing applications.
keywords: [typography, CLI, Pandoc, Typst, reproducibility]
bibliography: references.bib
numbersections: true
---
```

That is enough information for Pandoc or Quarto to generate HTML, EPUB, or PDF. The PDF-specific styling then lives in Typst, where page geometry, heading style, theorem blocks, and figure captions can be expressed directly.

```typst
#set page(paper: "a4", margin: (x: 25mm, y: 25mm))
#set text(font: "Libertinus Serif", size: 11pt)
#set par(justify: true)

#show heading.where(level: 1): it => block(above: 1.4em, below: 0.7em)[
  #set text(weight: "bold", size: 18pt)
  #it
]

#let theorem(kind, title, body) = block(
  inset: 10pt,
  radius: 4pt,
  stroke: 0.4pt + rgb("#9aa7b2"),
  fill: rgb("#f8fafc"),
)[
  *#kind.* #title
  #v(4pt)
  #body
]
```

### Title and authorship

The title block belongs in metadata, not in backend markup. When you need a more formal multi-author rendering, keep the data structured and let the template format it:

```yaml
author:
  - name: "A. N. Author"
    affiliation:
      - "Department of Information Design, University of Example"
    email: "author@example.edu"
    corresponding: true
  - name: "B. M. Collaborator"
    affiliation:
      - "Institute of Typography, Townsley University"
```

In Typst, the title block can be a small helper function that formats names prominently and affiliations secondarily:

```typst
#let article-title(meta) = align(center)[
  #text(size: 20pt, weight: "bold")[#meta.title]
  #if meta.subtitle != none [
    #v(5pt)
    #text(size: 12pt, style: "italic")[#meta.subtitle]
  ]
  #v(10pt)
  #for person in meta.author [
    *#person.name*\
    #for line in person.affiliation [#line\ ]
    #if person.email != none [#link("mailto:" + person.email)[#person.email]]
    #v(8pt)
  ]
]
```

### Abstract and keywords

Abstracts and keywords are best expressed directly in the front matter and rendered consistently by the article template. In Markdown:

```yaml
abstract: |
  This paper presents a systematic comparison of documents produced
  using CLI-based typesetting tools against those produced using
  graphical desktop publishing applications. Our principal finding is
  that CLI-produced documents match or exceed the quality of graphical
  alternatives when the workflow is configured deliberately.
keywords:
  - typography
  - CLI tools
  - Pandoc
  - Typst
  - reproducibility
```

The template can then decide whether the abstract is centred, narrower than the body text, or separated by a rule. That keeps the source portable while preserving print discipline.

### Mathematics

Keep mathematics in the Markdown body so it survives every output target. Quarto-style labels or `pandoc-crossref` labels make equations referenceable without handwritten backend commands:

```markdown
Following [@bringhurst2012], we define quality as:

$$
Q = \sum_{i=1}^{5} w_i q_i
$$ {#eq-quality}

where $q_i$ are the individual dimension scores and $w_i$ are the
weights derived from expert assessment. Equation @eq-quality shows that
overall quality is a weighted linear combination.
```

That same equation can be rendered by HTML math support, Typst, or a LaTeX fallback without changing the source.

### Tables

Simple article tables should begin as Markdown, because the same source then works in HTML, EPUB, and PDF:

```markdown
| Category          | Count | Mean pages |
|:------------------|------:|-----------:|
| Academic articles |    42 |       14.3 |
| Technical reports |    35 |       28.7 |
| Correspondence    |    28 |        2.1 |
| Reference manuals |    15 |       67.4 |
| Total             |   120 |       19.8 |

: Document corpus composition {#tbl-corpus}
```

If the print layout needs stronger control, move the table styling into Typst rather than rewriting the data in a different source language:

```typst
#table(
  columns: (2fr, auto, auto),
  stroke: none,
  table.header(
    [*Category*], [*Count*], [*Mean pages*],
  ),
  [Academic articles], [42], [14.3],
  [Technical reports], [35], [28.7],
  [Correspondence], [28], [2.1],
  [Reference manuals], [15], [67.4],
  table.hline(),
  [*Total*], [*120*], [*19.8*],
)
```

### Cross-references

Cross-references should live at the source level, not in backend commands. With Quarto or `pandoc-crossref`, the body text stays readable:

```markdown
As shown in @tbl-corpus, our dataset contains 120 documents.
The quality equation (@eq-quality) defines the scoring metric.
See also @fig-results for the final comparison.
```

This is the right habit for every backend. Hard-coded numbers break as soon as the document is reorganised.

### Bibliography

Bibliographic data should stay in a citation database and be cited from the Markdown source:

```markdown
Typography was defined by [@bringhurst2012] as the craft of endowing
human language with a durable visual form.

The line-breaking algorithm discussed in [@knuth1984] considers the
paragraph as a whole rather than individual lines.
```

In a direct Typst workflow, the bibliography can be attached explicitly:

```typst
#bibliography("references.bib", style: "apa")
```

In a Pandoc or Quarto workflow, `--citeproc` or Quarto's built-in citation processing resolves the same keys for HTML, EPUB, and PDF.


## The primary Pandoc or Quarto article workflow

For articles that need multiple output formats — HTML for a preprint server, PDF for review or print, DOCX for a co-author who uses Word — Pandoc Markdown or Quarto should be the canonical source. Use Typst for PDF when you want a programmable print layout with less template overhead; keep a LaTeX template only for venues that depend on LaTeX packages or class files.

The Markdown front matter replicates the LaTeX title block:

```yaml
---
title: "On the Typographic Quality of CLI-Produced Documents"
subtitle: "A Systematic Comparison"
author:
  - "A. N. Author, University of Example"
  - "B. M. Collaborator, Townsley University"
date: "15 March 2024"
abstract: |
  This paper presents a systematic comparison of documents produced
  using CLI-based typesetting tools against those produced using
  graphical desktop publishing applications. Our principal finding is
  that CLI-produced documents, when configured appropriately, match or
  exceed the quality of graphical alternatives.
keywords: [typography, CLI, Pandoc, Typst, reproducibility]
bibliography: references.bib
numbersections: true
---
```

The equivalent Typst template can stay much thinner because the layout logic is built into the language rather than spread across a preamble:

```typst
#let article(meta, body) = {
  set page(paper: "a4", margin: (x: 25mm, y: 25mm))
  set text(font: "Libertinus Serif", size: 11pt)
  set par(justify: true)

  article-title(meta)

  if meta.abstract != none [
    v(10pt, weak: true)
    block(inset: 10pt, fill: rgb("#f8fafc"))[
      *Abstract.* #meta.abstract
      if meta.keywords != none [
        #v(5pt)
        *Keywords:* #meta.keywords.join(", ")
      ]
    ]
  ]

  v(12pt, weak: true)
  body
  bibliography("references.bib")
}
```

The important design principle is that the template consumes metadata and body content without forcing the author to duplicate structure in the PDF layer.

Render to HTML and a default Typst-backed PDF:

```sh
pandoc article.md --standalone --toc --number-sections \
  --citeproc -o article.html

pandoc article.md --citeproc --number-sections \
  --pdf-engine=typst -o article.pdf
```

If a venue requires a legacy PDF backend, switch only the PDF command and keep the Markdown source unchanged.

For cross-references within the Pandoc workflow, the `pandoc-crossref` filter adds `@fig-label`, `@tbl-label`, and `@eq-label` syntax analogous to Quarto's built-in cross-references:

```sh
pandoc article.md --filter=pandoc-crossref --citeproc -o article.pdf
```

With `pandoc-crossref` installed, references in Markdown become:

```markdown
As shown in @tbl-corpus, our dataset contains 120 documents.
The quality equation (@eq-quality) defines our metric.
```

which produces "as shown in Table 1" and "the quality equation (Equation 1)" in the output.


## A technical report

A technical report differs from a journal article in scale and structure: it typically has a formal title page, a table of contents, a list of figures and tables, multiple chapters, code listings, appendices, and a two-sided layout for printing. The source should still stay in Markdown chapters plus defaults files. For most house styles, Typst is a better PDF-first target than a large report preamble; a native LaTeX report backend is mainly justified when an institution already owns a class file or requires specific packages.

### Document structure

For reports, keep the source split into Markdown chapters and let the PDF backend add the title page, table of contents, appendices, and running heads. A typical project:

```text
report/
├── report.qmd
├── sections/
│   ├── 01-summary.md
│   ├── 02-method.md
│   └── 03-results.md
├── references.bib
└── styles/
    ├── report.typ
    └── report.css
```

The source files remain content-first. Page geometry, front matter, and print-specific rules live in `report.typ`.

### Title page

The report's front matter can be described in metadata and formatted in Typst:

```yaml
---
title: "CLI-Based Document Production"
subtitle: "Automation and Quality in Practice"
report-number: "TR-2024-03"
author:
  - "A. N. Author"
  - "B. M. Collaborator"
institution: "Department of Information Design, University of Example"
date: "March 2024"
summary: |
  This report describes the design and evaluation of an automated
  document production system that reduces production time by 60%
  while maintaining typographic quality.
---
```

```typst
#align(center)[
  #text(size: 14pt, weight: "bold")[TR-2024-03]
  #v(16pt)
  #text(size: 24pt, weight: "bold")[CLI-Based Document Production]
  #v(6pt)
  #text(size: 13pt, style: "italic")[Automation and Quality in Practice]
  #v(18pt)
  A. N. Author and B. M. Collaborator\
  Department of Information Design\
  University of Example
  #v(18pt)
  March 2024
]
```

### Front matter

The report template should generate the standard prefatory material automatically:

```typst
#outline(title: [Contents])
#pagebreak()
#outline(title: [Figures], target: figure.where(kind: image))
#pagebreak()
#outline(title: [Tables], target: figure.where(kind: table))
```

These lists are optional in short reports but expected in formal, print-oriented work.

### Code listings

Code listings should remain ordinary fenced code blocks in the Markdown source:

````markdown
```yaml
#| label: lst-config
#| tbl-cap: Production defaults file
from: markdown
to: pdf
pdf-engine: typst
mainfont: "EB Garamond"
toc: true
```
````

Quarto and Pandoc can style those listings for HTML automatically, while the Typst template controls code font, background, numbering, and caption spacing for PDF output.

### Subfigures

Related figures can be grouped in source with a layout div or a Typst grid:

```typst
#figure(
  caption: [Line-breaking quality before and after optimisation],
  grid(
    columns: 2,
    gutter: 10pt,
    figure(image("fig-before.png"), caption: [Before optimisation]),
    figure(image("fig-after.png"), caption: [After optimisation]),
  ),
) <fig-comparison>
```

In the text, refer to `@fig-comparison` from Markdown or Quarto source.

### Appendices

Appendices should be ordinary Markdown chapters flagged as appendices in the build order:

```markdown
# Appendix: Installation Guide {#app-install}

## Prerequisites

...
```

If the PDF template needs lettered appendices, that numbering rule belongs in the template, not in the chapter source.

### Running headers for reports

Running headers are another backend concern. In Typst, the page setup can pull the current heading into the header area:

```typst
#set page(
  header: context {
    let here = counter(heading).get()
    align(center)[#smallcaps[Section #here.at(0)]]
  },
  footer: context align(center)[#counter(page).display()],
)
```

The principle is the same whatever backend you use: the content source should not carry page furniture.


## A two-column magazine layout

The two-column layout is the standard for many academic journals and some technical magazines. In a Markdown-first workflow, this is usually the point where Typst becomes more attractive than raw LaTeX: columns, placed figures, and headline styling can live in a PDF template instead of in an expanding preamble. LaTeX's `twocolumn` option is still worth understanding because some institutional workflows still depend on it, but it should be treated as a compatibility path rather than the default starting point.

### The `twocolumn` class option

For a modern two-column article, it is usually cleaner to define the columns in Typst or CSS rather than rely on an old document-class switch. In Typst:

```typst
#set page(paper: "a4", margin: (x: 15mm, y: 20mm))
#set text(font: "Source Serif 4", size: 10pt)

#set par(justify: true)
#show heading.where(level: 1): it => block(columns: 2, above: 1em, below: 0.6em)[
  #set text(size: 18pt, weight: "bold")
  #it
]
```

The column gap is a design choice, not a source-level concern. On A4 with 10-point type, six to eight millimetres is a useful starting range.

### A full-width title block

Two-column layouts still need a full-width title block and abstract. In Typst, place those before the body columns begin:

```typst
#align(center)[
  #text(size: 22pt, weight: "bold", fill: rgb("#12436d"))[
    Typography at the Command Line
  ]
  #v(5pt)
  #text(size: 12pt, style: "italic")[
    Why serious document production belongs in a terminal
  ]
  #v(8pt)
  #line(length: 100%, stroke: 0.6pt + rgb("#12436d"))
]

#block(inset: (x: 8mm, y: 5mm), fill: rgb("#f8fafc"))[
  *Abstract.* The abstract spans the full page width before the
  two-column body begins.
]
```

### Wide figures and tables in two-column mode

Wide figures should be treated as explicit layout events. Put them between columned sections rather than forcing the engine to guess:

```typst
#figure(
  image("wide-figure.png", width: 90%),
  caption: [A wide figure spanning both columns],
) <fig-wide>
```

In HTML output, the same effect is often better achieved with CSS grid and a figure that spans all columns.

### Column balance

The last page of a two-column article should not end with one long column and one stub unless there is a strong editorial reason. In practice, balance is handled by editing: cut or expand the text slightly, move a figure, or move a note to the following page. That is easier to reason about in a Typst or CSS layout than in a float-heavy legacy workflow.

### Drop caps

A drop capital at the start of the first paragraph is a classic magazine convention. In HTML it is a CSS concern:

```css
.lede::first-letter {
  float: left;
  font-size: 3.2em;
  line-height: 0.9;
  padding-right: 0.08em;
  font-family: "Source Serif 4", serif;
}
```

For PDF, the same treatment belongs in the Typst template or style module, not in the article's source text.


## Building articles from Markdown with Typst or LaTeX

The same Markdown source can drive both the journal-style and the two-column outputs with different PDF backends. In a modern workflow, keep Typst as the default PDF target and swap away only when a legacy class or package requirement forces the change.

```yaml
# article-defaults.yaml
from: markdown
to: pdf
pdf-engine: typst
template: styles/article.typ
citeproc: true
number-sections: true
toc: false
```

```yaml
# twocol-defaults.yaml
from: markdown
to: pdf
pdf-engine: typst
template: styles/twocol.typ
citeproc: true
number-sections: false
```

The two-column template changes only the page geometry, title treatment, and article body layout. The source content remains identical.

For the Makefile:

```makefile
article.pdf: article.md styles/article.typ references.bib
	pandoc --defaults=article-defaults.yaml $< -o $@

twocol.pdf: article.md styles/twocol.typ references.bib
	pandoc --defaults=twocol-defaults.yaml $< -o $@

article.html: article.md
	pandoc --standalone --citeproc --number-sections $< -o $@
```

The same `article.md` produces three different outputs: a single-column PDF, a two-column PDF, and an HTML version — all from one source, all rebuilt automatically when the content changes.

---

The three document types in this chapter — journal article, technical report, two-column layout — cover the range of what academic and technical writers produce most often. The patterns established here recur in Chapter 22 (Books), where the same approaches scale up to book-length projects with chapters, an index, and a complete front and back matter apparatus.
