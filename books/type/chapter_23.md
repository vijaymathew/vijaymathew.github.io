# Tables and Complex Layouts

Tables are among the most typographically demanding elements in document production. They involve simultaneous decisions about column widths, alignment, spacing, rules, captions, and placement — and they must remain readable, not merely correct. In a Markdown-first workflow, tables are also where authors are most tempted to abandon the source-neutral path too early. The right response is not to jump straight into raw LaTeX, but to decide carefully which layer should own the complexity: Markdown or CSV for simple data, CSS or Quarto for web presentation, and Typst or another PDF backend only when page-specific control is truly needed.

This chapter therefore treats Markdown, HTML/CSS, and Typst-style backend logic as the default path, with LaTeX packages covered as backend-specific techniques when you are already committed to a LaTeX template. The same principle applies to spanning layouts such as sidebars, marginalia, callout boxes, and wrapfigures.


## Markdown and backend-aware table workflows

Start with the simplest representation that preserves the data cleanly. Plain Markdown tables and CSV-backed generation are easiest to maintain in Git; when the PDF needs spanning cells, repeated headers, or strict width control, move the table logic into the print backend instead of abandoning the whole workflow. Typst's table primitives are often a better next step than backend-specific macro work.

### Simple tables and grouped headers

For most documents, the source should begin as a plain Markdown table:

```markdown
| Tool   | Primary output | Math      | Compilation speed |
|:-------|:---------------|:----------|------------------:|
| Typst  | PDF            | Good      | Fast              |
| Pandoc | Many formats   | Moderate  | Fast              |
| Quarto | Many formats   | Moderate  | Moderate          |

: CLI typesetting tools {#tbl-tools}
```

The important design rules are the same regardless of backend:

- no vertical rules
- strong distinction between header and body
- right alignment for numeric data
- consistent spacing rather than decorative lines

When grouped headers are needed, move the layout into Typst:

```typst
#table(
  columns: (auto, auto, auto, auto),
  align: (left, left, right, right),
  table.header(
    table.cell(colspan: 2)[*Source*],
    table.cell(colspan: 2)[*Output*],
  ),
  [Format], [Engine], [PDF], [HTML],
  [Markdown], [Pandoc + Typst], [Excellent], [n/a],
  [Markdown], [Pandoc + HTML], [Good], [Excellent],
  [Typst], [Native], [Excellent], [n/a],
)
```

### Cells spanning multiple rows

Spanning rows is a layout feature, so it belongs in the PDF backend rather than in ad hoc source hacks:

```typst
#table(
  columns: (auto, auto, auto, auto),
  table.header([Source], [Engine], [PDF], [HTML]),
  table.cell(rowspan: 3)[Markdown],
  [Pandoc + HTML], [Good], [Excellent],
  [Pandoc + Typst], [Excellent], [n/a],
  [Pandoc + DOCX], [n/a], [n/a],
  [Typst], [Native], [Excellent], [n/a],
)
```

The table data still originates cleanly in Markdown, CSV, or YAML; the spanning behaviour is introduced only where the final page geometry is known.

### Tables that fill the text width

When a table needs one descriptive column and one short label column, Typst's fractional widths are usually enough:

```typst
#table(
  columns: (1fr, 3fr),
  table.header([*Package*], [*Description*]),
  [table], [Structured tables with explicit column sizing and alignment.],
  [grid], [Useful when the content is logically tabular but visually irregular.],
  [figure], [A better wrapper when the table needs a caption and cross-reference.],
)
```

For HTML output, use CSS `table-layout: fixed` or a `colgroup` only when the browser's default sizing produces bad results. Most tables improve more from better content and shorter prose than from heavier width control.

### Multi-page tables

When a table may span multiple pages, the best strategy is usually to keep the data outside the prose source and generate the table from CSV or JSON. In practice that means a data file such as `package-order.csv` plus a build step in Quarto or Pandoc that reads the data and renders it as a table for the target format.

A `.qmd` chapter might include an executable cell that reads the CSV and labels the resulting table; a plain Pandoc workflow can do the same with a preprocessing step that emits Markdown. The important point is that the data stays tabular and editable outside the prose manuscript.

For PDF, the template or execution layer is responsible for repeating headers and splitting pages cleanly. That keeps the source data maintainable and avoids hand-editing large tables in prose files.


## Table alignment in CSS

In HTML output from Pandoc, table alignment follows the Markdown syntax: `:---` for left, `:---:` for centre, `---:` for right. The CSS for these tables should reinforce the booktabs aesthetic:

```css
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.95em;
}

thead tr {
  border-top: 2px solid currentColor;
  border-bottom: 1px solid currentColor;
}

tbody tr:last-child {
  border-bottom: 2px solid currentColor;
}

th, td {
  padding: 0.4em 0.75em;
  text-align: left;
}

th { font-weight: 600; }

/* Numeric columns */
td:has(+ td), th:has(+ th) { }
```

For the `text-align: right` convention on numeric columns, target specific column indices in CSS or use Pandoc's attribute mechanism to add classes to specific columns.


## Sidebars and callout boxes

Sidebars — blocks of supplementary text set apart from the main column — appear in technical books, textbooks, and reference manuals. In a Markdown-first workflow, the source should normally express them as fenced divs or Quarto callouts and leave the presentation to the backend:

```markdown
::: {.note}
Choose a PDF engine and font stack that actually support the scripts in your document.
:::
```

In HTML, CSS can render that as a sidebar or callout. In Typst, the same semantic class can map to a boxed block with a pale fill and stronger border. The key decision is that the source says "this is a note", not "draw a blue rectangle here".

### Marginalia

Margin notes are best treated as a layout variant of an aside. In Quarto, the source can mark them with margin classes:

```markdown
The baseline [The invisible line on which letters rest.]{.column-margin}
is the fundamental reference for vertical alignment.
```

In HTML, CSS places that content in the margin at wide breakpoints and in the body flow at narrow ones. In PDF, a Typst template can position the aside in the outer margin when the page size permits it.

### Wrapping text around figures

Wrapped figures are usually better handled in HTML with `float` or grid-based CSS than in print PDFs, where they often create awkward white space. When you do need the effect in a web publication:

```css
.wrap-figure {
  float: right;
  width: 38%;
  margin: 0 0 0.8rem 1rem;
}
```

Use wrapped figures only for short illustrations embedded in running text. For anything substantial, a normal block figure is almost always cleaner.
