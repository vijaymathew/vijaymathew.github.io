# Markdown for Document Authors

Markdown is, at first glance, a formatting shorthand for the web — a way to write `**bold**` and have it render as **bold**, to write `# Heading` and have it become an `<h1>`. That characterisation is accurate but limiting. In the hands of the CLI typographer, Markdown is something more: a source format for serious documents, one that can be compiled to PDF, HTML, EPUB, and DOCX from a single file, that integrates with bibliography managers, supports footnotes and cross-references and tables, and scales to book-length projects.

The key to this larger role is Pandoc, which we will cover in depth in the next chapter. But to use Pandoc well — to write Markdown that produces the output you intend — you first need to understand what Markdown is, which of its several dialects you are working in, and what it can and cannot express. That is what this chapter covers.


## The Markdown landscape: CommonMark, GFM, and Pandoc Markdown

Markdown was created by John Gruber in 2004 as a text-to-HTML conversion tool. The original specification, published on Gruber's website, was informal and in some respects ambiguous. Over the following decade, as Markdown was adopted by platforms ranging from GitHub to Reddit to Stack Overflow, dozens of implementations emerged — each resolving the ambiguities differently, each adding its own extensions. By the early 2010s, "Markdown" was less a single format than a family of related-but-incompatible dialects.

*CommonMark*, published in 2014 by a group of developers including Jeff Atwood and John MacFarlane, was an attempt to resolve this fragmentation with a rigorous formal specification. CommonMark defines precise rules for every edge case in the original Markdown syntax — how nested lists work, what happens when you mix blockquotes and code blocks, how link definitions interact with emphasis markers — tested against a comprehensive suite of examples. It is the closest thing Markdown has to a standard, and it forms the base of most modern implementations.

*GitHub Flavored Markdown* (GFM) is a CommonMark superset used by GitHub, GitLab, and many other platforms. It adds several extensions to CommonMark: tables (using the pipe syntax you likely already know), task lists (checkboxes in list items), strikethrough, and autolinks. GFM is what most developers encounter first and what most people mean colloquially when they say "Markdown."

*Pandoc Markdown* is the dialect used by Pandoc, and it is the one this book uses throughout. It is a CommonMark superset with an extensive set of optional extensions that add nearly every feature a typographer might need: footnotes, definition lists, metadata blocks, citations, mathematical notation, cross-references, fenced divs for custom styling, line blocks, and more. The full list of Pandoc Markdown extensions runs to over sixty items; the defaults cover the needs of most documents.

When you run Pandoc with `-f markdown` (or simply provide a `.md` file), you get Pandoc Markdown with its default extension set enabled. You can add or remove specific extensions by appending them to the format name with `+` or `-`:

```sh
# Enable smart quotes and disable pipe tables
pandoc -f markdown+smart-pipe_tables input.md -o output.pdf
```

For most purposes, the default extension set is appropriate and you do not need to adjust it. Where specific extensions are relevant to the features described in this chapter, they are noted.

A practical note on source file encoding: always write Markdown source files in UTF-8. This is the default in every modern text editor and is assumed by all the tools in this book. If you work with a legacy editor or encounter files from older systems, verify the encoding with `file your-document.md` — it should report "UTF-8 Unicode text."


## Front matter and metadata with YAML

A Pandoc Markdown document begins with a *metadata block* — a YAML section delimited by lines containing only three dashes (`---`). This block contains document-level information: the title, author, date, language, bibliography, and a wide range of settings that control how the document is rendered.

```yaml
---
title: "On the Typographic Quality of CLI-Produced Documents"
subtitle: "A Survey of Current Practice"
author:
  - "A. N. Author"
  - "B. M. Collaborator"
date: 2024-03-15
lang: en-GB
---
```

The YAML metadata block must appear at the very beginning of the file — before any other content. If it appears later, Pandoc treats it as a fenced code block rather than metadata. The closing `---` (or `...`) ends the block and the document body begins immediately after.

YAML has its own syntax rules that interact with Pandoc in ways worth understanding.

**Strings** can be unquoted if they contain no special characters, single-quoted if they contain only single-escape characters, or double-quoted if they contain backslashes or other special sequences. Titles containing colons or other punctuation must be quoted:

```yaml
title: "Typography: A Practical Guide"   # correct
title: Typography: A Practical Guide     # YAML parse error
```

**Lists** can be written in flow style (inline) or block style (one item per line):

```yaml
# Flow style
keywords: [typography, CLI, pandoc, LaTeX]

# Block style
keywords:
  - typography
  - CLI
  - pandoc
  - LaTeX
```

Both are equivalent. Block style is more readable for longer lists.

**Multi-line strings** use YAML block scalars. The `|` operator preserves line breaks (useful for abstracts and descriptions); `>` folds line breaks into spaces (useful for long single-paragraph values):

```yaml
abstract: |
  This paper examines the typographic quality of documents produced
  using CLI-based typesetting tools. We find that with appropriate
  configuration, CLI-produced documents match or exceed the quality
  of those produced by graphical applications.

description: >
  A very long description that continues across
  multiple source lines but renders as a single
  paragraph with normal word wrapping.
```

**Structured author information** is useful when the output format supports it — for instance, when generating academic papers with author affiliations, or conference proceedings with ORCID identifiers:

```yaml
author:
  - name: "A. N. Author"
    affiliation: "University of Example"
    email: "author@example.edu"
    orcid: "0000-0000-0000-0001"
  - name: "B. M. Collaborator"
    affiliation: "Institute of Advanced Typography"
```

Whether these sub-fields are used depends on the Pandoc template for your output format. The default LaTeX template uses `name` and `affiliation`; custom templates can use any fields you define.

**Document class and font settings** for LaTeX output are set in the metadata block, allowing you to control the entire LaTeX preamble without writing a separate `.tex` file:

```yaml
documentclass: article
classoption:
  - 12pt
  - a4paper
  - twoside
geometry: "margin=25mm, bindingoffset=10mm"
mainfont: "EB Garamond"
sansfont: "Fira Sans"
monofont: "JetBrains Mono"
fontsize: 12pt
linestretch: 1.25
```

The `mainfont`, `sansfont`, and `monofont` fields are used by the XeLaTeX and LuaLaTeX engines via the `fontspec` package. If you are using pdfLaTeX, use `fontfamily` and the appropriate LaTeX package name instead.

**Table of contents** generation is controlled by the `toc` flag:

```yaml
toc: true
toc-depth: 2
numbersections: true
```

**Bibliography** settings connect the document to an external bibliography file and citation style:

```yaml
bibliography: references.bib
csl: chicago-author-date.csl
link-citations: true
```

We will cover bibliographies in detail later in this chapter and in Chapter 22 (Books).

**Variable files and defaults** are a Pandoc feature that lets you move shared metadata out of individual documents and into a reusable defaults file. If you are producing a series of documents with the same settings — the same fonts, the same geometry, the same bibliography — create a file called `defaults.yaml`:

```yaml
# defaults.yaml
from: markdown
to: pdf
pdf-engine: xelatex
metadata:
  documentclass: article
  mainfont: "EB Garamond"
  geometry: "margin=25mm"
  bibliography: ~/documents/references.bib
```

Then invoke Pandoc with `--defaults defaults.yaml` to apply these settings to any document. Per-document metadata blocks override defaults when both specify the same field.


## Basic Markdown syntax

Before the extensions, the core. Pandoc Markdown inherits all of CommonMark's syntax, which covers the constructions most writers need daily.

**Headings** use the ATX style — hash symbols followed by the heading text — or the setext style (underlines of `=` or `-` for levels 1 and 2). ATX is preferred because it generalises to all heading levels:

```markdown
# Part title (level 1)
## Chapter title (level 2)
### Section (level 3)
#### Subsection (level 4)
```

**Emphasis and strong emphasis** use asterisks or underscores. Pandoc treats single delimiters as italic and double as bold:

```markdown
This is *italic* and this is **bold**.
```

The choice between asterisks and underscores is largely stylistic, but be consistent within a project. Pandoc Markdown by default requires word-boundary conditions to be met for underscore-delimited emphasis to activate — `intraword_underscores` is enabled — which means `file_name_here` is not inadvertently italicised.

**Block quotations** use `>` at the start of each line:

```markdown
> Typography is the craft of endowing human language with a durable
> visual form, and thus with an independent existence.
>
> — Robert Bringhurst
```

**Code** uses backtick delimiters for inline code and triple backticks (or four-space indentation) for fenced code blocks. Fenced blocks accept a language identifier for syntax highlighting:

````markdown
The command `fc-list` lists installed fonts.

```sh
fc-list | grep -i garamond
```
````

**Lists** are formed with `-`, `*`, or `+` for unordered lists, and numerals followed by `.` or `)` for ordered lists. Pandoc supports *fancy lists* — ordered lists that can start at any number and use letters or Roman numerals — via the `fancy_lists` extension, which is enabled by default:

```markdown
- Unordered item
- Another item
  - Nested item (two-space or four-space indent)

1. First item
2. Second item
   a. Sub-item using letter numbering
   b. Another sub-item

(i)  Roman numeral list
(ii) Second item
```

**Horizontal rules** are three or more hyphens, asterisks, or underscores on a line by themselves. In LaTeX output, a horizontal rule becomes an `\hline` or `\rule`; in HTML output, it becomes `<hr>`. Use them sparingly — as visual breaks between major sections of content, not as decoration.

**Links and images** use the same square-bracket/parenthesis syntax:

```markdown
See the [Pandoc documentation](https://pandoc.org/MANUAL.html).

![Alt text for the figure](path/to/image.png){width=80%}
```

The attribute syntax `{width=80%}` is a Pandoc extension that passes attributes to the image element in HTML or to a `\includegraphics` call in LaTeX. In LaTeX output, images are automatically wrapped in a `figure` environment with a caption derived from the alt text.


## Footnotes

Footnotes are the workhorse of scholarly and technical prose — the mechanism for providing supplementary information, source citations in note-based styles, and parenthetical asides that would interrupt the flow of the main text. Pandoc Markdown supports two footnote styles.

*Reference footnotes* separate the marker from the content:

```markdown
Typography has been described as the craft of endowing human language
with a durable visual form.[^bringhurst]

[^bringhurst]: Bringhurst, Robert. *The Elements of Typographic Style*,
    4th ed. Hartley & Marks, 2012. The full definition continues: "and thus
    with an independent existence."
```

The marker can be any string — a number, a word, an abbreviation. Pandoc renumbers footnotes automatically in the output, so you do not need to maintain sequential numbers in the source. Reference footnote definitions can appear anywhere in the document — at the bottom of the relevant section, at the end of the chapter, or collected at the end of the file — and Pandoc will place them correctly in the output.

*Inline footnotes* embed the content directly at the point of use, which is convenient for short asides:

```markdown
The em dash — used for parenthetical remarks^[The en dash is used for
ranges, such as pages 12--34; the em dash for interruptions or asides.]
— is one of the most misused marks in typography.
```

Both styles produce identical output; the choice is a matter of authorial preference. For long footnotes with multiple paragraphs or nested markup, reference style is cleaner in the source; for short factual notes, inline style keeps the annotation close to what it annotates.

In LaTeX output, footnotes become `\footnote{}` commands and are rendered at the bottom of the page where they occur. In HTML output, they become numbered superscript markers linking to a list of notes at the end of the document section. In EPUB output, they become pop-up notes where the format supports it.


## Citations

Pandoc's citation system is one of its most powerful features, and one of the primary reasons to use Pandoc Markdown for academic and technical writing rather than writing directly in LaTeX.

The system works through three components: a bibliography file (typically BibTeX `.bib` format, though many other formats are supported), a citation style file (CSL — Citation Style Language — a widely-used XML format with thousands of available styles), and inline citation markers in the document.

A minimal bibliography file `references.bib` looks like this:

```bibtex
@book{bringhurst2004,
  author    = {Bringhurst, Robert},
  title     = {The Elements of Typographic Style},
  edition   = {4},
  publisher = {Hartley \& Marks},
  year      = {2012}
}

@book{knuth1984,
  author    = {Knuth, Donald E.},
  title     = {The TeXbook},
  publisher = {Addison-Wesley},
  year      = {1984}
}
```

Citation markers in the document use the `@key` syntax, where the key matches the first field of the BibTeX entry:

```markdown
The typographic scale has been extensively documented [@bringhurst2004, pp. 29--32].

As Knuth himself explains [-@knuth1984, ch. 14], the line-breaking
algorithm evaluates entire paragraphs, not individual lines.

@bringhurst2004 [p. 17] opens his definition of typography with the
observation that text has both functional and aesthetic dimensions.
```

The three forms do different things:

- `[@bringhurst2004]` — parenthetical citation: `(Bringhurst 2012)` in author-date styles
- `[-@knuth1984]` — suppresses the author name, producing only `(1984)` — useful when the author has just been named in the sentence
- `@bringhurst2004` — inline citation: `Bringhurst (2012)` in author-date styles, used when the author is grammatically part of the sentence

Multiple citations in a single pair of brackets are separated by semicolons:

```markdown
Several authors have addressed this question [@bringhurst2004; @knuth1984; @lamport1994].
```

To process citations, Pandoc must be invoked with the `--citeproc` flag:

```sh
pandoc --citeproc --bibliography references.bib --csl chicago-author-date.csl \
  input.md -o output.pdf
```

Or equivalently, with the relevant fields in the metadata block:

```yaml
---
bibliography: references.bib
csl: chicago-author-date.csl
---
```

CSL files for thousands of citation styles — Chicago, APA, MLA, Vancouver, Harvard, IEEE, Nature, and journal-specific styles — are available from the Zotero Style Repository at `zotero.org/styles`. Download the appropriate `.csl` file, place it alongside your document or in a shared directory, and reference it in the metadata block.

The bibliography is automatically appended to the document. To control where it appears — at the end of a specific section rather than the very end of the document — use a div with the `refs` class:

```markdown
## References

::: {#refs}
:::

## Appendix

Content after the bibliography.
```


## Tables

Pandoc Markdown supports four table syntaxes of varying complexity. Understanding when to use each saves considerable formatting effort.

*Pipe tables* are the most readable in source form and appropriate for most cases:

```markdown
| Typeface       | Classification    | Best use             |
|:---------------|:------------------|:---------------------|
| EB Garamond    | Humanist serif    | Body text, books     |
| Fira Sans      | Humanist sans     | Screen, UI text      |
| JetBrains Mono | Monospace         | Code, terminals      |
| Bodoni         | Didone/modern     | Display, headlines   |

: Recommended typefaces by use case {#tbl:typefaces}
```

The alignment of column separators in the header row controls text alignment: `:---` for left, `:---:` for centred, `---:` for right. Columns without explicit alignment default to left. The caption, if present, follows the table preceded by `:` and a space. The `{#tbl:label}` attribute assigns a cross-reference identifier.

*Simple tables* forgo the pipe syntax and use spacing to imply column structure — readable in source but fragile if column widths vary:

```markdown
  Right     Left     Center     Default
-------     ------ ----------   -------
     12     12        12            12
    123     123       123          123
      1     1          1             1

: Demonstration of simple table syntax.
```

*Multiline tables* use a header of dashes above and below the column headers and allow cell content to wrap across multiple lines — useful for tables with verbose cell content:

```markdown
-------------------------------------------------------
 Fruit     Color            Notes
---------- ---------------- ---------------------------
 Apple     Red, green       Harvested in autumn;
                            many varieties available

 Banana    Yellow           Best at peak ripeness;
                            green bananas are starchy
-------------------------------------------------------

: A multiline table with wrapped cells
```

*Grid tables* offer full control over alignment and cell content at the cost of verbose source syntax:

```markdown
+---------------+---------------+--------------------+
| Fruit         | Price         | Advantages         |
+===============+===============+====================+
| Bananas       | $1.34         | - built-in wrapper |
|               |               | - bright colour    |
+---------------+---------------+--------------------+
| Oranges       | $2.10         | - cures scurvy     |
|               |               | - tasty            |
+---------------+---------------+--------------------+
```

Grid tables support arbitrary block content in cells — lists, code blocks, even nested tables — and are the right choice when cell content is complex. The tradeoff is that they are tedious to maintain by hand. In practice, most tables in technical documents fit comfortably in pipe table syntax, and grid tables are reserved for the occasional case where a cell needs multi-paragraph or list content.

In LaTeX output, all four table syntaxes produce `longtable` environments by default, which are capable of spanning multiple pages. Column alignment and the table caption are preserved. In HTML output, they produce standard `<table>` elements.


## Cross-references

Cross-references — "see Figure 3" or "as shown in Table 2.1" — are straightforward in LaTeX (using `\label` and `\ref`) but require a Pandoc extension called `pandoc-crossref`, a filter that adds cross-reference syntax to Pandoc Markdown.

Install `pandoc-crossref` from your package manager or from its GitHub releases page, then add it to your Pandoc invocation:

```sh
pandoc --filter pandoc-crossref input.md -o output.pdf
```

With `pandoc-crossref`, labels are assigned using attribute syntax on headings, figures, tables, and equations:

```markdown
## The typographic scale {#sec:scale}

![Comparison of typefaces at equal point size](typefaces.png){#fig:typefaces}

| Metric | Value |
|:-------|------:|
| Em     | 12pt  |
| En     | 6pt   |

: Standard typographic units {#tbl:units}

$$ E = mc^2 $$ {#eq:einstein}
```

References use a `@` prefix with the label:

```markdown
As discussed in @sec:scale, the choice of type scale affects hierarchy.
The comparison in @fig:typefaces illustrates this clearly.
See @tbl:units for the standard metric values.
```

`pandoc-crossref` handles numbering automatically and produces correct output for both PDF (using LaTeX `\ref` and `\label`) and HTML (using anchor links). It also supports list-of-figures and list-of-tables generation, controlled through metadata variables.

For documents not using `pandoc-crossref`, basic heading cross-references can be achieved with Pandoc's built-in implicit header identifiers: every heading gets an anchor based on its text, accessible via standard Markdown link syntax:

```markdown
## The typographic scale

...later in the document...

As discussed in [the typographic scale section](#the-typographic-scale),
hierarchy emerges from contrast.
```

This approach works well for HTML output and simple documents. For complex documents with figures, tables, and equations, `pandoc-crossref` is worth the setup cost.


## Definition lists and other block elements

Pandoc Markdown includes several block-level constructs beyond the CommonMark standard.

*Definition lists* associate terms with their definitions — useful for glossaries, term explanations, and structured reference content:

```markdown
Kerning
:   The adjustment of space between specific letter pairs to correct
    for optical irregularities caused by their shapes.

Leading
:   The vertical distance between the baselines of successive lines
    of type. Named for the lead strips placed between lines in
    hot-metal composition.

Tracking
:   Uniform adjustment of inter-character spacing across a range of
    text. Distinguished from kerning by its global rather than
    pair-specific application.
```

Each term is followed by one or more definitions, each beginning with `:` and at least one space. Multiple definitions for a single term are permitted.

*Line blocks* preserve line breaks and leading spaces, making them useful for poetry, addresses, and formatted plain text:

```markdown
| 742 Evergreen Terrace
| Springfield, USA 12345
| 
| 15 March 2024
```

The leading `|` and space signals a line block; each line is preserved exactly.

*Fenced divs*, introduced with the `fenced_divs` extension (enabled by default in Pandoc Markdown), create block-level elements with custom classes and attributes. These pass through to HTML as `<div>` elements and, with appropriate LaTeX template support, can be rendered as custom environments:

```markdown
::: {.callout type="note"}
**Note:** The `fontspec` package requires XeLaTeX or LuaLaTeX.
Using it with pdfLaTeX will produce an error.
:::

::: {.aside}
Sidebar content that appears in the margin or a callout box
depending on the output format and template.
:::
```

The power of fenced divs emerges in combination with custom Pandoc templates and LaTeX environments: you define an environment in your LaTeX preamble, give it a class name, and Pandoc maps the fenced div to that environment automatically. We will use this technique extensively in Chapter 24 when building templates and style systems.


## Structuring long documents

A single Markdown file works well for documents up to perhaps ten or twenty thousand words. Beyond that, practical considerations — navigation, collaboration, build times, version control diff legibility — argue for splitting the document into multiple files, one per chapter or major section.

Pandoc handles multi-file documents in the simplest possible way: you pass multiple input files on the command line, and Pandoc concatenates them in order before processing:

```sh
pandoc metadata.yaml \
  chapters/01-introduction.md \
  chapters/02-history.md \
  chapters/03-typography-fundamentals.md \
  chapters/04-digital-concepts.md \
  -o book.pdf
```

The first argument, `metadata.yaml`, is a standalone YAML file containing the document's front matter — the same YAML that would appear in a metadata block, but extracted to its own file so that it does not need to be repeated or copied between chapter files. This is the standard approach for book-length projects.

Each chapter file contains only its content, beginning with its chapter-level heading:

```markdown
# The Origins of Typography

The story of typesetting begins...
```

There is no need for YAML metadata in individual chapter files, though you can include chapter-specific metadata (epigraphs, chapter-level abstracts, or custom settings) if the template supports it.

A typical project directory for a book might look like this:

```
book/
├── metadata.yaml       # Document-wide settings and metadata
├── references.bib      # Bibliography
├── styles/
│   ├── book.latex      # Custom LaTeX template
│   └── book.css        # CSS for HTML output
├── figures/
│   ├── ch01-timeline.pdf
│   └── ch03-type-anatomy.svg
├── chapters/
│   ├── 00-preface.md
│   ├── 01-history.md
│   ├── 02-fundamentals.md
│   ├── 03-digital-concepts.md
│   └── 04-font-management.md
└── Makefile            # Build rules (see Chapter 10)
```

The `Makefile` assembles the final document from these components, which we cover in Chapter 10. For now, note that the file structure is simple: flat source files with a clean naming convention, a shared metadata file, and a shared bibliography. There is nothing framework-specific about it — the same structure works regardless of whether the output is PDF, HTML, or EPUB.

**Heading levels and document structure** interact with the output format in ways worth planning for. In Pandoc's default behaviour, `#` headings become `\chapter` commands in LaTeX `book` or `memoir` document classes, and `\section` commands in `article`. If you use `documentclass: book` in your metadata, your chapter-level Markdown heading should be `#`, not `##`. If you use `documentclass: article`, your top-level heading is a section and `#` becomes `\section`.

This can be adjusted with the `--shift-heading-level-by` flag:

```sh
# Treat # as chapter, ## as section (book class)
pandoc --shift-heading-level-by=0 ...

# Treat # as section (article class, the default)
pandoc --shift-heading-level-by=-1 ...
```

For most projects, the simplest approach is to decide at the outset whether you are writing an article or a book, set `documentclass` accordingly, and use `#` for the top structural level throughout.

**Parts**, in a book with multiple parts each containing multiple chapters, can be expressed by placing a special `# Part Title {.unnumbered .part}` heading before the chapters belonging to that part. With appropriate template support, this becomes a `\part` command in LaTeX. Without template support, it appears as a regular heading. In Quarto, which we cover in Chapter 14, part structure is handled through the project configuration rather than through Markdown syntax.

---

Markdown's apparent simplicity is deceptive. What appears to be a minimal plain-text format is, in Pandoc's hands, a fully capable authoring language for documents of any length and complexity. The features covered in this chapter — metadata, footnotes, citations, tables, cross-references, and multi-file structure — are sufficient to write and publish the book you are reading now, or an academic paper, or a technical manual. The next chapter covers the engine that converts this source into polished output.
