# Articles and Reports

The article and the report are the workhorses of technical and academic publishing. Between them, they cover the range from a four-page conference paper to a two-hundred-page internal report, from a single-author journal submission to a multi-author technical specification. The typographic requirements of these documents are well understood — decades of published guidelines and house styles have codified what a professional article looks like — which makes them ideal territory for demonstrating how CLI tools handle the full complexity of real documents.

This chapter builds three examples. The first is a journal-style article with an abstract, numbered sections, mathematical equations, a table, cross-references, and a bibliography. The second is a technical report with a title page, table of contents, list of figures, code listings, appendices, and a two-sided layout. The third is a two-column magazine-style layout using LaTeX's `twocolumn` mode with full-width title treatment.


## A journal-style article

A journal article in LaTeX typically uses the `article` class, occasionally a publisher-supplied class, with a standard set of packages for typography, mathematics, bibliographies, and cross-references.

### Document class and packages

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{margin=25mm}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{booktabs}
\usepackage{graphicx}
\usepackage{cleveref}
\usepackage{natbib}
\usepackage{hyperref}
\hypersetup{
  colorlinks=true,
  linkcolor=blue!60!black,
  citecolor=blue!60!black,
  urlcolor=blue!60!black
}
\usepackage{abstract}
```

The `abstract` package refines the default abstract environment — narrower margins, smaller text, bold label. The `cleveref` package provides `\cref{}` and `\Cref{}` commands that automatically prepend the reference type ("Equation", "Table", "Figure") and must be loaded after `hyperref`.

Theorem environments from `amsthm` are configured in the preamble:

```latex
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}[theorem]{Definition}
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

### Title and authorship

The `\maketitle` command formats the title block from the `\title`, `\author`, and `\date` declarations. For multi-author articles with affiliations:

```latex
\title{On the Typographic Quality of CLI-Produced Documents:\\
  \large A Systematic Comparison}
\author{A. N. Author\\
  \small Department of Information Design, University of Example\\
  \small \texttt{author@example.edu}
  \and
  B. M. Collaborator\\
  \small Institute of Typography, Townsley University}
\date{Received 1 January 2024; Accepted 15 March 2024}
```

The `\and` command separates multiple authors. Line breaks within an author block use `\\`. The `\small` size for affiliations and email addresses keeps them visually subordinate to the author name.

For more complex author formatting — affiliations numbered by superscript, corresponding author marked with a dagger, multiple institutions — the `authblk` package provides a dedicated interface:

```latex
\usepackage{authblk}
\author[1]{A. N. Author}
\author[2]{B. M. Collaborator}
\affil[1]{Department of Information Design, University of Example}
\affil[2]{Institute of Typography, Townsley University}
```

### Abstract and keywords

The `abstract` environment places the abstract between the title and the body:

```latex
\begin{abstract}
This paper presents a systematic comparison of documents produced
using CLI-based typesetting tools against those produced using
graphical desktop publishing applications. Our principal finding is
that CLI-produced documents, when configured appropriately, match or
exceed the quality of graphical alternatives in all measured dimensions.
\end{abstract}

\noindent\textbf{Keywords:} typography; CLI tools; Pandoc; \LaTeX{};
reproducibility
```

The keyword line is placed immediately below the abstract with `\noindent` to ensure it does not inherit paragraph indentation.

### Mathematics

Mathematical content uses the `amsmath` environments. Inline mathematics appears in `$...$`; displayed equations use `\[...\]` for single equations and `align` for multi-line work:

```latex
Following \citet{bringhurst2012}, we define quality as:
\begin{equation}
  Q = \sum_{i=1}^{5} w_i q_i \label{eq:quality}
\end{equation}
where $q_i$ are the individual dimension scores and $w_i$ are the
weights derived from expert panel assessment. \Cref{eq:quality} shows
that overall quality is a weighted linear combination.
```

`\citet{}` produces "Bringhurst (2012)" — the author name incorporated grammatically into the sentence. `\citep{}` produces "(Bringhurst, 2012)" — the citation in parentheses at the end of a clause. Use `\citet{}` when the author is the grammatical subject; use `\citep{}` when the citation is a parenthetical reference.

### Tables

A simple two-dimensional table with `booktabs` rules:

```latex
\begin{table}[ht]
  \centering
  \caption{Document corpus composition}
  \label{tab:corpus}
  \begin{tabular}{lcc}
    \toprule
    Category          & Count & Mean pages \\
    \midrule
    Academic articles &    42 &       14.3 \\
    Technical reports &    35 &       28.7 \\
    Correspondence    &    28 &        2.1 \\
    Reference manuals &    15 &       67.4 \\
    \midrule
    Total             &   120 &       19.8 \\
    \bottomrule
  \end{tabular}
\end{table}
```

The `[ht]` placement specifier asks LaTeX to place the table *here* if it fits, or at the *top* of the next page if not. Avoid `[H]` (the `float` package's forced-here placement) in articles: it causes tables to disrupt text flow rather than floating to appropriate positions. Let LaTeX handle placement; adjust the body text to reference tables correctly rather than forcing them into specific positions.

### Cross-references

With `cleveref` loaded, cross-references write themselves:

```latex
\cref{tab:corpus}    % produces "Table 1"
\cref{eq:quality}    % produces "Equation (1)"
\cref{fig:results}   % produces "Figure 2"
\Cref{tab:corpus}    % produces "Table 1" (capitalised, for sentence start)

% Multiple references:
\cref{eq:quality,tab:corpus}  % produces "Equation (1) and Table 1"
```

This is the correct approach for all cross-references. Hard-coded numbers ("see Table 2") break when the document is reorganised; `\ref{tab:corpus}` works but produces only the number without the type label, requiring the author to maintain "Table~\ref{}" throughout the document. `\cref` is the cleanest solution.

### Bibliography

The bibliography requires a `.bib` file and a compilation sequence. With `natbib`:

```bibtex
@book{lamport1994,
  author    = {Lamport, Leslie},
  title     = {{\LaTeX}: A Document Preparation System},
  publisher = {Addison-Wesley},
  year      = {1994},
  edition   = {2}
}
```

In the document:

```latex
\bibliographystyle{plainnat}
\bibliography{references}
```

Compile sequence: `pdflatex` → `bibtex` → `pdflatex` → `pdflatex`. With `latexmk`:

```sh
latexmk -pdf article.tex
```

`latexmk` runs the correct sequence automatically, detecting whether BibTeX needs to run and whether additional LaTeX passes are needed to resolve all references.


## A Pandoc article

For articles that need multiple output formats — HTML for a preprint server, PDF for the journal, DOCX for a co-author who uses Word — Pandoc Markdown with a custom LaTeX template provides the same structure from a single source.

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
keywords: [typography, CLI, Pandoc, LaTeX, reproducibility]
bibliography: references.bib
numbersections: true
---
```

The LaTeX template must declare all packages the body uses:

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{margin=25mm}
\usepackage{amsmath,amssymb}
\usepackage{booktabs,longtable}
\usepackage{natbib}
\usepackage{hyperref}
\hypersetup{colorlinks=true, linkcolor=blue!60!black,
            citecolor=blue!60!black}
\usepackage{abstract}
\renewcommand{\abstractnamefont}{\normalfont\bfseries}
\setlength{\absleftindent}{10mm}
\setlength{\absrightindent}{10mm}

% Required by Pandoc for tight lists
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

\title{$title$$if(subtitle)$\\[0.3em]\large $subtitle$$endif$}
\author{$for(author)$$author$$sep$\\$endfor$}
\date{$date$}

\begin{document}
\maketitle

$if(abstract)$
\begin{abstract}$abstract$\end{abstract}
$if(keywords)$
\noindent\textbf{Keywords:} $for(keywords)$$keywords$$sep$; $endfor$
$endif$
$endif$

$body$

\bibliographystyle{plainnat}
\bibliography{references}

\end{document}
```

Note the `longtable` package declaration: Pandoc renders Markdown tables as LaTeX `longtable` environments, which can span multiple pages. A template that does not include `\usepackage{longtable}` fails to compile any document containing tables.

Render to HTML and PDF:

```sh
pandoc article.md --standalone --toc --number-sections \
  --citeproc -o article.html

pandoc article.md --template=article.latex \
  --pdf-engine=pdflatex --number-sections \
  -o article.pdf
```

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

A technical report differs from a journal article in scale and structure: it typically has a formal title page, a table of contents, a list of figures and tables, multiple chapters, code listings, appendices, and a two-sided layout for printing.

### Document structure

Use the `report` class rather than `article`. The `report` class provides `\chapter{}`, treats chapters as the top structural level, and generates appropriate running headers.

```latex
\documentclass[11pt,a4paper,twoside]{report}
\usepackage{geometry}
\geometry{a4paper, top=30mm, bottom=25mm, left=30mm, right=25mm,
          bindingoffset=10mm, twoside}
```

The `twoside` class option and geometry option enable different inner and outer margins for recto and verso pages. The `bindingoffset=10mm` adds extra space at the spine.

### Title page

A manually constructed title page gives more control than `\maketitle`:

```latex
\begin{titlepage}
\centering
\vspace*{2cm}
{\Large\bfseries Technical Report TR-2024-03}\\[1em]
{\huge\bfseries CLI-Based Document Production:\\
  Automation and Quality in Practice}\\[2em]
{\large A. N. Author and B. M. Collaborator}\\[0.5em]
{\normalsize Department of Information Design\\
  University of Example}\\[2em]
{\normalsize March 2024}\\[3em]
\vfill
{\small This report describes the design and evaluation of an automated
document production system. The system reduces production time by
60\% while maintaining typographic quality.}
\end{titlepage}
```

### Front matter

```latex
\tableofcontents
\listoffigures
\listoftables
```

These commands generate the standard prefatory lists. They require at least two compilation passes to populate correctly. `\listoffigures` and `\listoftables` are optional but expected in formal technical reports.

### Code listings

The `listings` package typesets source code with syntax highlighting, line numbers, and a frame:

```latex
\usepackage{listings}
\usepackage{xcolor}

\lstset{
  basicstyle=\small\ttfamily,
  breaklines=true,
  frame=single,
  backgroundcolor=\color{gray!5},
  numberstyle=\tiny\color{gray},
  numbers=left,
  xleftmargin=2em,
  framexleftmargin=1.5em,
  captionpos=b
}
```

A code listing with a caption and label:

```latex
\begin{lstlisting}[language=yaml,
                   caption={Production defaults file},
                   label={lst:config}]
from: markdown
to: pdf
pdf-engine: xelatex
mainfont: "EB Garamond"
geometry: "margin=25mm"
toc: true
\end{lstlisting}
```

The `minted` package is an alternative that uses Pygments for higher-quality syntax highlighting, but it requires Python and Pygments to be installed and the LaTeX run invoked with `--shell-escape`. For reports that will be built in controlled environments, `minted` produces better-looking code; for portable reports where the build environment is uncertain, `listings` is more reliable.

### Subfigures

Technical reports often need multiple related figures placed side by side. The `subcaption` package handles this:

```latex
\usepackage{subcaption}

\begin{figure}[ht]
  \centering
  \begin{subfigure}[b]{0.48\textwidth}
    \includegraphics[width=\textwidth]{fig-before}
    \caption{Before optimisation}
    \label{fig:before}
  \end{subfigure}
  \hfill
  \begin{subfigure}[b]{0.48\textwidth}
    \includegraphics[width=\textwidth]{fig-after}
    \caption{After optimisation}
    \label{fig:after}
  \end{subfigure}
  \caption{Line-breaking quality before and after microtype}
  \label{fig:comparison}
\end{figure}
```

`\cref{fig:comparison}` produces "Figure 2"; `\cref{fig:before}` produces "Figure 2a". Subcaption integrates correctly with `cleveref`.

### Appendices

```latex
\appendix

\chapter{Installation Guide}
\label{app:install}

\section{Prerequisites}

...
```

The `\appendix` command switches chapter numbering from Arabic to uppercase Roman letters. All chapters after `\appendix` are labelled Appendix A, Appendix B, and so on. Cross-references before `\appendix` work normally; cross-references to appendix content use `\cref{app:install}`, which produces "Appendix A".

### Running headers for reports

With `fancyhdr`, two-sided reports get chapter and section information in their headers:

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE]{\small\leftmark}      % chapter on left of even pages
\fancyhead[RO]{\small\rightmark}     % section on right of odd pages
\fancyfoot[C]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

The macros `\leftmark` and `\rightmark` contain the current chapter and section names respectively, updated automatically as the document progresses. The `LE`/`RO` specifiers mean "Left on Even pages" and "Right on Odd pages" — the standard arrangement for two-sided documents.


## A two-column magazine layout

The two-column layout is the standard for many academic journals and some technical magazines. LaTeX's `twocolumn` class option enables it globally; the challenge is handling the title, abstract, and wide elements that must span both columns.

### The `twocolumn` class option

```latex
\documentclass[10pt,a4paper,twocolumn]{article}
\usepackage{geometry}
\geometry{a4paper, top=20mm, bottom=20mm,
          left=15mm, right=15mm, columnsep=6mm}
```

The `columnsep` geometry option sets the gap between columns. Six millimetres is a typical value for 10-point text on A4; for wider columns or larger text, eight or ten millimetres may be more comfortable.

### A full-width title block

In two-column mode, all content is set in columns by default. To place the title, abstract, and any other prefatory material at full page width, use the `\twocolumn[{...}]` command at the beginning of the document body:

```latex
\begin{document}

\twocolumn[{%
\begin{center}
  {\huge\bfseries\color{magazineblue}
   Typography at the Command Line}\\[8pt]
  {\large Why serious document production belongs in a terminal}\\[4pt]
  {\small\itshape A. N. Author \quad|\quad
   \textit{The CLI Typographer} \quad|\quad March 2024}\\[6pt]
  \rule{\linewidth}{1pt}
\end{center}
\vspace{8pt}
}]
```

Everything inside the `[{...}]` argument is typeset at full width before the two-column body begins. The closing `\vspace{8pt}` adds space between the title block and the first column text.

For a full-width abstract as well — the standard practice in many journals — include it in the `\twocolumn[{...}]` argument:

```latex
\twocolumn[{%
\maketitle
\begin{abstract}
  The abstract text, which spans the full width of the page
  before the two-column body begins.
\end{abstract}
\rule{\linewidth}{0.4pt}
\vspace{6pt}
}]
```

### Wide figures and tables in two-column mode

The starred environments `figure*` and `table*` produce full-width floats in two-column mode:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=0.9\textwidth]{wide-figure}
  \caption{A wide figure spanning both columns}
  \label{fig:wide}
\end{figure*}
```

The starred float environments can only be placed at the top (`[t]`) or bottom (`[b]`) of a page, not inline. This is a fundamental constraint of LaTeX's two-column float algorithm. Plan wide figures to appear at page boundaries, or use the `stfloats` package which allows bottom placement.

### Column balance

By default, the last page of a two-column document may have unequal columns if the text does not fill both evenly. The `balance` package corrects this:

```latex
\usepackage{balance}
% At the end of the document, before the bibliography:
\balance
```

`\balance` forces equal-length columns on the final page. For a magazine layout where visual balance matters, this is almost always desirable.

### Drop caps

A drop capital at the start of the first paragraph is a classic magazine convention. The `lettrine` package implements it:

```latex
\usepackage{lettrine}

\lettrine[lines=2]{T}{he} graphical interface revolution of the 1980s
convinced a generation that document production should look like design.
```

The `[lines=2]` option sets the drop capital to span two lines of body text. The capital itself and the continuation of the first word are given as the two mandatory arguments. `lettrine` can be configured for specific fonts, raised capitals rather than dropped, and small caps continuation text.


## Building articles from Pandoc Markdown

The same Markdown source can drive both the journal-style and the two-column outputs with different templates. A defaults file for each:

```yaml
# article-defaults.yaml
from: markdown
to: pdf
pdf-engine: pdflatex
template: article-template.latex
citeproc: true
number-sections: true
toc: false
```

```yaml
# twocol-defaults.yaml
from: markdown
to: pdf
pdf-engine: pdflatex
template: twocol-template.latex
citeproc: true
number-sections: false
```

The two-column template adds `twocolumn` to the `\documentclass` options and wraps the title block in `\twocolumn[{...}]`.

For the Makefile:

```makefile
article.pdf: article.md article-template.latex references.bib
	pandoc --defaults=article-defaults.yaml $< -o $@

twocol.pdf: article.md twocol-template.latex references.bib
	pandoc --defaults=twocol-defaults.yaml $< -o $@

article.html: article.md
	pandoc --standalone --citeproc --number-sections $< -o $@
```

The same `article.md` produces three different outputs: a single-column PDF, a two-column PDF, and an HTML version — all from one source, all rebuilt automatically when the content changes.

---

The three document types in this chapter — journal article, technical report, two-column layout — cover the range of what academic and technical writers produce most often. The patterns established here recur in Chapter 22 (Books), where the same approaches scale up to book-length projects with chapters, an index, and a complete front and back matter apparatus.
