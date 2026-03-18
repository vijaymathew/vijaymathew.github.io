# Résumés and CVs

The résumé and the curriculum vitae are, by definition, documents about the person who produces them. This creates a dynamic unlike most other document types: the author is their own client, the typographic decisions reflect on the author's taste and judgment, and the document will be read by people who are simultaneously evaluating its content and its form. A résumé that is well-typeset signals something about the person it describes. A résumé that is poorly typeset — inconsistent spacing, mismatched fonts, rivers of white space — signals something too.

This chapter covers three variants: the single-column professional résumé, the two-column layout used in design and technology contexts, and the academic CV with a publications section. All three examples are built directly from LaTeX source for the PDF output; the chapter also covers how to maintain a single Markdown source that renders to PDF, HTML, and DOCX, which is valuable when the same information needs to appear in different contexts.


## What a CV requires typographically

Before writing a line of LaTeX, it is worth establishing what a CV actually needs to do.

A CV must be **scannable**. Hiring managers and admissions committees spend thirty seconds to two minutes on an initial read. The document structure must communicate instantly: where are the jobs, where is the education, how long was each role. This is a hierarchy problem — the same problem of making structure visible that was addressed in Chapter 2 — but with the added constraint that the document must communicate quickly under time pressure.

A CV must **fit the expected format**. A one-page résumé is conventional for most industry applications; two pages for more senior roles. An academic CV is typically multiple pages and grows over a career as publications accumulate. Deviating from the expected format without a reason creates friction.

A CV must be **technically correct** when submitted digitally. A PDF with unembedded fonts may be garbled by applicant tracking systems. A PDF that is not accessible (no text layer, wrong reading order) fails accessibility requirements increasingly demanded by large employers. A DOCX generated from LaTeX that loses formatting when opened in Word is a practical failure.

The key typographic relationships in a CV:

- The candidate's name is the document's primary visual element. It should be notably larger than everything else — not decoratively large, but unambiguously the top of the hierarchy.
- Section headings create the major divisions. A horizontal rule under each section heading is the classic convention; colour is an alternative.
- Dates should be consistently right-aligned in the same column across all entries. The eye should be able to scan the date column to understand the timeline without reading the entry text.
- Bullet points should be genuine bullets — brief, parallel, beginning with active verbs — not sentences.


## A single-column résumé in LaTeX

The single-column format is the most widely applicable: appropriate for industry applications across almost every sector, readable as a printed document, and compatible with applicant tracking systems.

The structure of the LaTeX document: an `article` class base, `titlesec` for section heading formatting, `enumitem` for bullet list control, and a custom `\cventry` command that handles the four-column entry layout (job title, dates, organisation, location).

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{top=20mm, bottom=20mm, left=25mm, right=25mm}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\hypersetup{hidelinks}
\usepackage{parskip}
\usepackage{xcolor}

\definecolor{accent}{RGB}{26,78,140}

\titleformat{\section}
  {\normalfont\large\bfseries\color{accent}}
  {}{0em}{}
  [\textcolor{accent!50}{\titlerule}]
\titlespacing*{\section}{0pt}{1.5ex}{0.8ex}

\pagestyle{empty}

\newcommand{\cventry}[5]{%
  \noindent
  \begin{tabular*}{\linewidth}{@{}l@{\extracolsep{\fill}}r@{}}
    \textbf{#2} & \textit{#1} \\
    \textit{#3} & \textit{#4}
  \end{tabular*}%
  \ifx&#5&\else
    \begin{itemize}[noitemsep, leftmargin=1.5em, topsep=2pt]
      #5
    \end{itemize}
  \fi
  \vspace{4pt}
}
```

The `\cventry` command takes five arguments: dates, title, organisation, location, and bullet points. The date appears right-aligned using `tabular*` with `\extracolsep{\fill}` — the standard LaTeX idiom for right-aligning text on the same line as left-aligned text without knowing the line width in advance. The `\ifx&#5&\else` test skips the `itemize` block entirely when no bullet points are provided — useful for education entries that do not need bullets.

The name header is placed outside any command, with direct formatting:

```latex
\begin{document}

\noindent{\Huge\bfseries A. N. Author}\hfill
{\small\color{gray}
  author@example.edu \textbar\ +44 1234 567890 \textbar\
  www.example.edu/\textasciitilde author}

\vspace{0.5em}
{\color{gray}\rule{\linewidth}{1pt}}
\vspace{1em}
```

The `\hfill` pushes the contact information to the right margin on the same line as the name. The horizontal rule below creates the visual break between the header and the body.

Entries then use the `\cventry` command:

```latex
\section{Experience}

\cventry{2020--present}{Senior Document Engineer}{Typeset Ltd}{London}{%
  \item Developed Pandoc pipeline producing PDF, HTML, and EPUB
        from single source, reducing production time by 60\%
  \item Maintained house \LaTeX{} document class (200+ publications)
  \item Introduced automated PDF preflight and font verification
}

\cventry{2016--2020}{Technical Writer}{Documentation Co.}{Edinburgh}{%
  \item API documentation for three major software releases
  \item Introduced git-based version control for documentation projects
}
```

The `%` after each `\cventry{...}{` argument prevents unwanted whitespace from being introduced by the line break in the source.

Compile with pdfLaTeX for compatibility, or XeLaTeX for system font access:

```sh
pdflatex cv.tex
# or, with system fonts:
xelatex cv.tex
```


## A two-column layout

The two-column CV places primary content (experience, education) in a wide left column and secondary content (skills, contact information, languages) in a narrower right column — a layout common in design, technology, and creative fields.

The implementation uses `minipage` environments rather than LaTeX's `twocolumn` mode. The `twocolumn` mode balances columns across the page, which is wrong for a CV where the two columns have different content and different lengths. `minipage` with `[t]` alignment (top-aligned) places both columns at the same vertical starting position and lets them run to their natural lengths independently.

```latex
\begin{minipage}[t]{0.63\linewidth}

% Main column content: experience, education
\section{Experience}
\entry{Senior Document Engineer}{2020--present}{Typeset Ltd}{London}
\begin{itemize}[...]
  \item Pandoc pipeline: PDF, HTML, EPUB from single source
\end{itemize}

\end{minipage}%           ← % prevents whitespace between minipages
\hfill
\begin{minipage}[t]{0.33\linewidth}

% Sidebar content: skills, contact
\colorbox{lightgray}{\begin{minipage}{\linewidth}
\vspace{6pt}
\section{Skills}
...
\end{minipage}}

\end{minipage}
```

The `%` at the end of the first `\end{minipage}` line is critical: without it, the whitespace between the `\end{minipage}` and the `\hfill` causes a paragraph break, which inserts vertical space and misaligns the columns.

The sidebar is typically given a light background — `\colorbox{lightgray}{...}` — to visually distinguish it from the main column. The exact shade depends on the design: too light and the distinction is invisible; too dark and the text becomes hard to read. A value around `gray!10` to `gray!15` produces a subtle but legible result.

A `\entry` command for two-column layouts is similar to `\cventry` but simpler — the dates appear as a small right-aligned element on the same line as the title:

```latex
\newcommand{\entry}[4]{%
  {\small\textbf{#1}}\hfill{\small\textit{\color{gray}#2}}\\
  {\small\textit{#3}}\hfill{\small\color{gray}#4}
  \vspace{2pt}
}
```

Arguments: title, dates, organisation, location. This produces a two-line entry with title and dates on the first line, organisation and location on the second.


## The academic CV

An academic CV differs from an industry résumé in several important respects. It is longer — sometimes much longer, as it accumulates over a career. It has sections that do not appear on a short résumé: publications, grants, teaching, conference presentations, professional service, and sometimes administrative roles. The publications section in particular requires careful formatting, because publications are the primary evidence of academic productivity and must follow the citation conventions of the relevant field.

The `etaremune` package provides a reverse-numbered list that counts down from the most recent publication — a convention that makes the total count visible while presenting the most recent work first:

```latex
\usepackage{etaremune}

\section{Publications}

\subsection*{Journal Articles}
\begin{etaremune}
  \item Author, A.N. \& Collaborator, B.M. (2023).
    Typographic quality in CLI-produced documents.
    \textit{Journal of Information Design}, 12(3), 45--67.
    \texttt{doi:10.1234/jid.2023.45}
  \item Author, A.N. (2022). Reproducible document workflows
    with Pandoc and Make. \textit{TUGboat}, 43(1), 12--18.
\end{etaremune}
```

The `etaremune` environment works exactly like `enumerate` but numbers items in reverse. It accepts the same `[label=...]` and spacing options from `enumitem`.

For a publications list driven from a BibTeX file — which is the right approach once the list reaches more than a handful of entries — the `biblatex` package with the `category` filter can print selected entries without processing the full bibliography:

```latex
\usepackage[style=authoryear, backend=biber]{biblatex}
\addbibresource{publications.bib}

% Categorise entries
\DeclareBibliographyCategory{articles}
\addtocategory{articles}{author2023typographic, author2022reproducible}

% In the document:
\section{Publications}
\subsection*{Journal Articles}
\printbibliography[category=articles, heading=none]
```

This approach keeps the publication data in BibTeX format (consistent with other tools) and uses the bibliography engine for formatting — no manual entry of author names, journal names, and DOIs. When a new paper is published, add it to the `.bib` file and add its key to the appropriate category.

The academic CV header should include ORCID, institutional affiliation, and office location in addition to personal contact information:

```latex
\begin{center}
{\huge\bfseries A. N. Author, MSc}\\[6pt]
{\small
  Department of Information Design, University of Example\\
  Springfield, SS 12345 \textbar\ Room 3.42\\[3pt]
  \texttt{author@example.edu} \textbar\
  +44 1234 567890 \textbar\
  \href{https://orcid.org/0000-0000-0000-0001}{orcid.org/0000-0000-0000-0001}
}
\end{center}
```

ORCID (Open Researcher and Contributor ID) is the standard persistent identifier for researchers. Including it as a hyperlink to the ORCID profile connects the CV to a maintained online record of publications and affiliations.


## Single source, multiple outputs

A CV maintained as a LaTeX file is easy to produce as a PDF but awkward to send as an editable document (some employers request this), to publish as a web page, or to share in a format that non-LaTeX users can update. The solution is to maintain the CV content in Pandoc Markdown and generate the final formats from that source.

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

A minimal LaTeX template reads the metadata variables and renders the body:

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{top=20mm, bottom=20mm, left=25mm, right=25mm}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}
\hypersetup{hidelinks}
\usepackage{parskip}
\usepackage{xcolor}
\definecolor{accent}{RGB}{26,78,140}

% Required for Pandoc's \tightlist
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

\titleformat{\section}
  {\normalfont\large\bfseries\color{accent}}{}{0em}{}
  [\textcolor{accent!50}{\titlerule}]
\titlespacing*{\section}{0pt}{1.5ex}{0.8ex}

\pagestyle{empty}

\begin{document}

\begin{center}
{\Huge\bfseries $name$}\\[4pt]
$if(tagline)${\normalsize\itshape $tagline$}\\[4pt]$endif$
{\small\color{gray}
  $if(email)$\texttt{$email$}$if(phone)$ \textbar\ $endif$$endif$%
  $if(phone)$$phone$$endif$%
  $if(website)$ \textbar\ \texttt{$website$}$endif$
}
\end{center}

\vspace{0.5em}
{\color{accent}\rule{\linewidth}{1.2pt}}
\vspace{0.5em}

$body$

\end{document}
```

The `\providecommand{\tightlist}` declaration is necessary when Pandoc generates the LaTeX — Pandoc inserts `\tightlist` calls into tight list environments, and the template must define it if it is not provided by the document class or packages.

Render to all formats with a Makefile:

```makefile
NAME   := cv-author
SOURCE := cv-source.md
TMPL   := cv-template.latex
BUILD  := build

.PHONY: all pdf html docx clean

all: pdf html docx

$(BUILD):
	mkdir -p $@

$(BUILD)/$(NAME).pdf: $(SOURCE) $(TMPL) | $(BUILD)
	pandoc $< --template=$(TMPL) --pdf-engine=pdflatex -o $@

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

A limitation of the single-source approach is that complex two-column layouts, coloured sidebars, and ORCID-enhanced academic headers are difficult to achieve in Pandoc Markdown templates — the template mechanism works best for structural layouts, not highly visual ones. For an academic CV or a highly designed two-column résumé, native LaTeX remains the better choice. The single-source approach is most valuable for a straightforward professional résumé where the visual design is secondary to the content.


## The Typst CV

For projects already using Typst, a CV template in Typst is clean and maintainable. The key advantage is readability of the template itself: the helper functions that define entries and sections are written in Typst's functional style rather than LaTeX's macro language.

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

**For an industry résumé** (one or two pages, clean professional appearance): the single-source Markdown approach with a LaTeX template produces good results with the lowest maintenance overhead. Keep the design simple enough to work in the LaTeX template, and you get PDF, HTML, and DOCX from one command.

**For a designed two-column résumé**: write it in LaTeX directly, using the `minipage` approach described above. The design elements that make two-column layouts work — coloured sidebars, `\colorbox` backgrounds, per-column section formatting — are difficult to manage through a Pandoc template.

**For an academic CV** with a publications section: write it in LaTeX with `etaremune` for the publications list. If the publications list will grow over years, use `biblatex` with the `category` mechanism so new papers can be added to the `.bib` file and pulled into the CV automatically. If the list is currently short and unlikely to grow, manual `etaremune` entries are simpler.

**For Typst projects**: the Typst approach produces equivalent output to LaTeX with cleaner source, but does not yet have an equivalent of `etaremune` or `biblatex`'s category filtering. Academic CVs with long publications lists are better in LaTeX for now.

The résumé is a document that will be revised regularly throughout a career. Whatever approach you choose, it should be one you can maintain without friction — one where updating a job title or adding a new publication is a matter of editing a line, not navigating a complex template structure.
