# Résumés and CVs

The résumé and the curriculum vitae are, by definition, documents about the person who produces them. This creates a dynamic unlike most other document types: the author is their own client, the typographic decisions reflect on the author's taste and judgment, and the document will be read by people who are simultaneously evaluating its content and its form. A résumé that is well-typeset signals something about the person it describes. A résumé that is poorly typeset — inconsistent spacing, mismatched fonts, rivers of white space — signals something too.

This chapter covers three variants: the single-column professional résumé, the two-column layout used in design and technology contexts, and the academic CV with a publications section. The default workflow should be to maintain the content in Markdown and render it through Pandoc or Quarto to the formats required by the application process. For PDF output, Typst is often the cleanest backend because its templates remain readable and maintainable. LaTeX is still useful for highly customised layouts and publication-heavy academic CVs, but it should be treated as a backend-specific path rather than the default starting point.


## What a CV requires typographically

Before choosing a backend, it is worth establishing what a CV actually needs to do.

A CV must be **scannable**. Hiring managers and admissions committees spend thirty seconds to two minutes on an initial read. The document structure must communicate instantly: where are the jobs, where is the education, how long was each role. This is a hierarchy problem — the same problem of making structure visible that was addressed in Chapter 2 — but with the added constraint that the document must communicate quickly under time pressure.

A CV must **fit the expected format**. A one-page résumé is conventional for most industry applications; two pages for more senior roles. An academic CV is typically multiple pages and grows over a career as publications accumulate. Deviating from the expected format without a reason creates friction.

A CV must be **technically correct** when submitted digitally. A PDF with unembedded fonts may be garbled by applicant tracking systems. A PDF that is not accessible (no text layer, wrong reading order) fails accessibility requirements increasingly demanded by large employers. A DOCX generated from an over-specialised PDF workflow that loses structure when opened in Word is a practical failure.

The key typographic relationships in a CV:

- The candidate's name is the document's primary visual element. It should be notably larger than everything else — not decoratively large, but unambiguously the top of the hierarchy.
- Section headings create the major divisions. A horizontal rule under each section heading is the classic convention; colour is an alternative.
- Dates should be consistently right-aligned in the same column across all entries. The eye should be able to scan the date column to understand the timeline without reading the entry text.
- Bullet points should be genuine bullets — brief, parallel, beginning with active verbs — not sentences.


## A single-column résumé: Markdown source, Typst PDF

The single-column format is the most widely applicable: appropriate for industry applications across almost every sector, readable as a printed document, and compatible with applicant tracking systems. It is also the format best suited to a Markdown-first workflow, because the visual structure is simple and the same source can usually serve PDF, HTML, and DOCX without distortion.

The source should describe structure, not page mechanics. A minimal résumé source in Markdown:

```markdown
---
name: "A. N. Author"
tagline: "Document Engineer & Typographer"
email: "author@example.edu"
phone: "+44 1234 567890"
website: "www.example.edu/~author"
---

## Experience

### Senior Document Engineer | Typeset Ltd | London | 2020–present

- Developed Pandoc pipeline producing PDF, HTML, and EPUB from one source
- Maintained internal publication templates and PDF preflight checks
- Reduced production time by 60%

### Technical Writer | Documentation Co. | Edinburgh | 2016–2020

- Wrote API documentation for three major software releases
- Introduced Git-based review workflow for documentation
```

That source is already the résumé's logical structure: section headings, dated entries, and short achievement bullets. The PDF-specific work belongs in a Typst template:

```typst
#let accent = rgb("#1a4e8c")

#let cv-section(title) = {
  v(8pt, weak: true)
  text(fill: accent, weight: "bold", size: 12pt, title)
  line(length: 100%, stroke: 0.5pt + accent.lighten(40%))
  v(4pt, weak: true)
}

#let cv-entry(title, org, location, dates, body) = {
  grid(
    columns: (1fr, auto),
    gutter: 6pt,
    [*#title*], text(size: 9pt, style: "italic", fill: luma(110), dates),
    text(style: "italic", org), text(size: 9pt, fill: luma(110), location),
  )
  body
  v(5pt, weak: true)
}

#set page(paper: "a4", margin: (x: 25mm, y: 20mm))
#set text(font: "EB Garamond", size: 11pt)

#align(center)[
  #text(size: 22pt, weight: "bold")[A. N. Author]
  #v(3pt)
  #text(size: 9.5pt, fill: luma(105))[
    #link("mailto:author@example.edu")[author@example.edu]
    | +44 1234 567890 | www.example.edu/~author
  ]
]
#line(length: 100%, stroke: 1pt + accent)
```

The important point is the separation of concerns. Markdown owns the career data. Typst owns the page geometry, the right-aligned dates, the header rule, and the section styling. The template is short because Typst's grid and text primitives express the layout directly instead of forcing the author to build helper macros first.


## A two-column layout

The two-column CV places primary content (experience, education) in a wide left column and secondary content (skills, contact information, languages) in a narrower right column — a layout common in design, technology, and creative fields. This is where a source-neutral workflow becomes harder: the design depends more heavily on page-specific composition, so Typst or LaTeX usually becomes the better PDF path.

In Typst, the implementation is explicit: a wide left column for the main narrative and a narrow right column for contact details, skills, and languages. The two columns should not be balanced automatically, because a CV's sidebar almost never has the same height as the main content.

```typst
#grid(
  columns: (2.1fr, 0.9fr),
  gutter: 14pt,
  [
    #cv-section("Experience")
    #cv-entry(
      "Senior Document Engineer",
      "Typeset Ltd",
      "London",
      "2020--present",
      [
        - Pandoc pipeline: PDF, HTML, EPUB from one source
        - Automated PDF preflight and font verification
      ],
    )

    #cv-section("Education")
    *MSc Information Design*\
    University of Example, 2016
  ],
  [
    #block(
      inset: 10pt,
      fill: rgb("#f2f4f7"),
      radius: 4pt,
    )[
      #cv-section("Skills")
      *Typesetting*\
      Typst, Pandoc, Quarto

      #cv-section("Languages")
      English, French
    ]
  ],
)
```

The sidebar's pale background is not decorative; it creates a second visual zone so the eye distinguishes supporting information from the main employment narrative. The key compositional decision is top alignment: both columns begin together, then run independently.


## The academic CV

An academic CV differs from an industry résumé in several important respects. It is longer — sometimes much longer, as it accumulates over a career. It has sections that do not appear on a short résumé: publications, grants, teaching, conference presentations, professional service, and sometimes administrative roles. The publications section in particular requires careful formatting, because publications are the primary evidence of academic productivity and must follow the citation conventions of the relevant field. A Markdown source remains valuable here, but the PDF backend often needs stronger bibliography support than a minimal résumé template.

For most academic CVs, keep the publication data in a bibliography database and render selected entries into the Markdown source. Pandoc's citation pipeline or Quarto's bibliography support is usually enough:

```markdown
---
bibliography: publications.bib
csl: apa.csl
---

## Publications

### Journal Articles

1. @author2023typographic
2. @author2022reproducible

### Conference Papers

1. @author2024workflow
```

That structure is maintainable because the citation data lives in one place and the CV controls only grouping and order. If you need reverse chronology, put the newest key first in the Markdown list. If you need a more complex publication taxonomy, keep one Markdown file per category and include them in the build.

The academic header should include institutional affiliation, office location, and ORCID in addition to the usual contact line:

```markdown
---
name: "A. N. Author, MSc"
affiliation: "Department of Information Design, University of Example"
office: "Room 3.42, Springfield, SS 12345"
orcid: "https://orcid.org/0000-0000-0000-0001"
---
```

ORCID (Open Researcher and Contributor ID) is the standard persistent identifier for researchers. Linking it in the PDF or HTML output connects the CV to a maintained public record of publications and affiliations.


## The primary workflow: single source, multiple outputs

A CV maintained as a LaTeX file is easy to produce as a PDF but awkward to send as an editable document (some employers request this), to publish as a web page, or to share in a format that non-LaTeX users can update. The better default is to maintain the content in Pandoc Markdown or Quarto and generate the final formats from that source.

The Markdown source uses the CV's natural structure:

```markdown
---
name: "A. N. Author"
tagline: "Document Engineer & Typographer"
email: "author@example.edu"
phone: "+44 1234 567890"
website: "www.example.edu/~author"
---

## Experience

### Senior Document Engineer | Typeset Ltd | 2020–present

- Pandoc pipeline: PDF, HTML, EPUB from single source (60% time saving)
- Maintained house LaTeX document class (200+ publications)
- Automated PDF preflight and font verification

## Education

### MSc Information Design | University of Example | 2016

*Distinction. Dissertation: Legibility of Serif Typefaces at Small Sizes*

## Skills

**Typesetting:** LaTeX, Typst, Pandoc, groff  
**Scripting:** Python, Bash, Make  
**Formats:** PDF, HTML, EPUB, DOCX, man pages
```

For the PDF target, a small Typst template can read the same metadata and body content:

```typst
#import "@preview/cmarker:0.1.5": render

#let resume(meta, body) = {
  set page(paper: "a4", margin: (x: 25mm, y: 20mm))
  set text(font: "EB Garamond", size: 11pt)

  align(center)[
    #text(size: 22pt, weight: "bold")[#meta.name]
    #if meta.tagline != none [
      #v(3pt)
      #emph[#meta.tagline]
    ]
    #v(3pt)
    #text(size: 9.5pt, fill: luma(105))[
      #meta.email | #meta.phone | #meta.website
    ]
  ]

  v(6pt, weak: true)
  line(length: 100%, stroke: 1pt + rgb("#1a4e8c"))
  v(6pt, weak: true)
  render(body)
}
```

The goal is the same as the Markdown source: keep the template thin. It should set page size, fonts, spacing, and header treatment once, then leave the content structure alone.

Render to all formats with a Makefile. In a modern workflow, the PDF target should prefer Typst when the design permits it and fall back to LaTeX only when the template requires LaTeX-specific layout control:

```makefile
NAME   := cv-author
SOURCE := cv-source.md
TMPL   := styles/cv.typ
BUILD  := build

.PHONY: all pdf html docx clean

all: pdf html docx

$(BUILD):
	mkdir -p $@

$(BUILD)/$(NAME).pdf: $(SOURCE) $(TMPL) | $(BUILD)
	pandoc $< --template=$(TMPL) --pdf-engine=typst -o $@

$(BUILD)/$(NAME).html: $(SOURCE) | $(BUILD)
	pandoc $< --standalone --css=cv.css -o $@

$(BUILD)/$(NAME).docx: $(SOURCE) | $(BUILD)
	pandoc $< -o $@

clean:
	rm -rf $(BUILD)
```

Running `make all` produces `build/cv-author.pdf`, `build/cv-author.html`, and `build/cv-author.docx` — three formats from a single source, rebuilt automatically when the source changes.

The HTML output benefits from a small stylesheet:

```css
/* cv.css */
body {
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1.05rem;
  line-height: 1.55;
  color: #1c1c1c;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1.5rem;
}

h1 { font-size: 2rem; font-weight: 700;
     border-bottom: 2px solid #1a4e8c; padding-bottom: 0.3rem; }

h2 { font-size: 1.1rem; font-weight: 700; color: #1a4e8c;
     border-bottom: 1px solid #b0c4de; text-transform: uppercase;
     letter-spacing: 0.04em; margin: 1.5rem 0 0.5rem; }

h3 { font-size: 1rem; font-weight: 700; margin: 0.75rem 0 0.1rem; }

ul { margin: 0.3rem 0; padding-left: 1.5rem; }
li { margin-bottom: 0.15rem; }

@media print {
  body { max-width: none; margin: 0; padding: 0; font-size: 10pt; }
}
```

The DOCX output requires a reference document (`--reference-doc=cv-reference.docx`) to apply consistent styles. Create the reference document by opening the DOCX output in LibreOffice or Word, adjusting the heading and paragraph styles, and saving it as a template. On subsequent builds, `pandoc --reference-doc=cv-reference.docx cv-source.md -o cv.docx` applies those styles to the new content.

A limitation of the single-source approach is that complex two-column layouts, coloured sidebars, and publication-heavy academic headers are difficult to achieve through a thin Pandoc template alone. For those cases, keep the Markdown as the content source and give the PDF target a dedicated Typst layout. The single-source approach is most valuable for a straightforward professional résumé where the visual design is secondary to the content.


## The Typst CV

For projects already using Typst, a CV template in Typst is clean and maintainable. In many cases it should be the preferred PDF path even when the source content begins in Markdown, because the helper functions that define entries and sections are written in Typst's functional style rather than LaTeX's macro language.

```typst
#let accent = rgb("#1a4e8c")

#let cv-section(title) = {
  v(8pt, weak: true)
  text(fill: accent, weight: "bold", size: 12pt, title)
  line(length: 100%, stroke: 0.5pt + accent.lighten(40%))
}

#let cv-entry(title, dates, org, location, details: none) = {
  grid(
    columns: (1fr, auto),
    [*#title*], text(style: "italic", size: 9pt, dates),
    text(style: "italic", org), text(size: 9pt, fill: luma(120), location),
  )
  if details != none { details }
  v(4pt, weak: true)
}

// Document setup
#set page(paper: "a4", margin: (x: 25mm, y: 20mm))
#set text(font: "EB Garamond", size: 11pt)

// Header
align(center)[
  #text(size: 22pt, weight: "bold")[A.#h(0.1em)N. Author]
  #v(3pt)
  #text(size: 9.5pt, fill: luma(100))[
    #link("mailto:author@example.edu")[author\@example.edu]
    | +44 1234 567890 | www.example.edu
  ]
]
#line(length: 100%, stroke: 1.2pt + accent)

// Experience section
#cv-section("Experience")

#cv-entry(
  "Senior Document Engineer", "2020--present",
  "Typeset Ltd", "London",
  details: [
    - Pandoc pipeline: PDF, HTML, EPUB from single source
    - Maintained LaTeX class for 200+ publications
  ]
)
```

The `cv-entry` function uses a `grid` with `1fr` for the title column and `auto` for the dates column, which automatically right-aligns the dates to the line width — the same effect as `tabular*` with `\extracolsep{\fill}` in LaTeX, but expressed directly.

Compile:

```sh
typst compile cv.typ
```


## Choosing the approach

**For an industry résumé** (one or two pages, clean professional appearance): keep the source in Markdown and generate PDF, HTML, and DOCX from it. Prefer Typst for PDF if you want a proper print layout without giving up the shared source.

**For a designed two-column résumé**: keep the content in Markdown if possible, but expect the PDF output to move into a dedicated Typst layout. That is the right place to solve columns, sidebars, and spacing.

**For an academic CV** with a publications section: keep the data source structured and reproducible. Put the publication data in a bibliography file, group entries in Markdown, and render the final PDF through Typst or Pandoc according to the complexity of the design.

**For legacy workflows**: use LaTeX only when a department, journal, or inherited template stack leaves no realistic alternative.

The résumé is a document that will be revised regularly throughout a career. Whatever approach you choose, it should be one you can maintain without friction — one where updating a job title or adding a new publication is a matter of editing a line, not navigating a complex template structure.
