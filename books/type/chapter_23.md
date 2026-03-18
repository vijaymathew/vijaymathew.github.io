# Tables and Complex Layouts

Tables are among the most typographically demanding elements in document production. They involve simultaneous decisions about column widths, alignment, spacing, rules, captions, and placement — and they must remain readable, not merely correct. LaTeX's table system is powerful but complex; Markdown's table syntax is simple but limited; the gap between what authors want and what the tools produce by default is wider for tables than for almost any other element.

This chapter covers the main table packages and techniques, along with the related challenges of spanning layouts: sidebars, marginalia, callout boxes, and wrapfigures.


## The table package stack

Every serious LaTeX document with tables should load at least three packages: `booktabs`, `longtable`, and `multirow`. Together they cover the majority of table requirements. For tables that must stretch to fill the text width, add `tabularx` or `tabularray`.

```latex
\usepackage{booktabs}    % professional rules
\usepackage{longtable}   % multi-page tables
\usepackage{multirow}    % cells spanning multiple rows
\usepackage{tabularx}    % auto-width columns
\usepackage{array}       % enhanced column specifications
```

### booktabs: professional table rules

The `booktabs` package provides four rule commands that replace LaTeX's `\hline`:

- `\toprule` — thick rule at the top of the table
- `\midrule` — medium rule within the table (above data rows)
- `\bottomrule` — thick rule at the bottom of the table
- `\cmidrule{m-n}` — partial rule spanning columns `m` through `n`

```latex
\begin{table}[ht]
\centering
\caption{CLI typesetting tools}
\label{tab:tools}
\begin{tabular}{llcc}
\toprule
Tool   & Primary output & Math      & Compilation speed \\
\midrule
LaTeX  & PDF            & Excellent & Slow              \\
Typst  & PDF            & Good      & Fast              \\
Pandoc & Many formats   & Moderate  & Fast              \\
Quarto & Many formats   & Via LaTeX & Moderate          \\
\bottomrule
\end{tabular}
\end{table}
```

The spacing around `booktabs` rules is set by `\aboverulesep` and `\belowrulesep` — the package's defaults are carefully chosen. Do not add `\hline` or extra `\\[...]` spacing between rows; the `booktabs` rules handle all the spacing. The central rule of `booktabs` usage: **no vertical rules**. Vertical rules in tables add visual noise without adding information. Column separation is achieved through spacing alone.

`\cmidrule` spans a subset of columns and is used to separate grouped headers:

```latex
\begin{tabular}{llll}
\toprule
\multicolumn{2}{c}{Source} & \multicolumn{2}{c}{Output} \\
\cmidrule(lr){1-2}\cmidrule(lr){3-4}
Format   & Engine        & PDF       & HTML \\
\midrule
Markdown & Pandoc+LaTeX  & Excellent & Good \\
Markdown & Pandoc+Typst  & Excellent & n/a  \\
\LaTeX   & pdfLaTeX      & Excellent & Poor \\
\bottomrule
\end{tabular}
```

The `(lr)` option on `\cmidrule` trims the rule slightly at left and right, preventing it from touching adjacent rules — a refinement that the booktabs documentation recommends.

### Cells spanning multiple rows

The `multirow` package provides `\multirow{n}{width}{text}` for cells that span `n` rows:

```latex
\usepackage{multirow}

\begin{tabular}{llll}
\toprule
Source & Engine & PDF & HTML \\
\midrule
\multirow{3}{*}{Markdown}
  & Pandoc + pdfLaTeX & Good      & Good \\
  & Pandoc + XeLaTeX  & Excellent & Good \\
  & Pandoc + Typst    & Excellent & n/a  \\
\midrule
\LaTeX & pdfLaTeX & Excellent & Poor \\
\bottomrule
\end{tabular}
```

The `{*}` width argument tells `\multirow` to size the cell automatically. The cells in rows 2 and 3 of the first column are left empty — `\multirow` spans them visually.

### Tables that fill the text width

Standard `tabular` columns are only as wide as their content. For tables that should span the full text width — particularly for tables with descriptive text in a column — `tabularx` provides an `X` column type that automatically adjusts to fill the remaining space:

```latex
\usepackage{tabularx}

\begin{tabularx}{\textwidth}{lX}
\toprule
Package & Description \\
\midrule
booktabs  & Professional rules without vertical lines. Provides
            \texttt{\textbackslash toprule}, \texttt{\textbackslash midrule},
            and \texttt{\textbackslash bottomrule}. \\
longtable & Tables that span multiple pages with automatic header
            repetition on each subsequent page. \\
tabularx  & Extends the standard tabular to stretch to a specified
            width using automatically sized \texttt{X} columns. \\
\bottomrule
\end{tabularx}
```

Multiple `X` columns divide the available space equally. For unequal widths, the `tabularray` package (available in recent TeX Live) provides `Q[co=2]` and similar proportional specifications.

### Multi-page tables with longtable

When a table may span multiple pages, use `longtable`. It handles the header repetition automatically:

```latex
\usepackage{longtable}

\begin{longtable}{lll}
\caption{Package loading order}
\label{tab:packages} \\
\toprule
Package    & Purpose            & Load when \\
\midrule
\endfirsthead                   % end of first-page header
% Header repeated on subsequent pages:
\multicolumn{3}{c}{\tablename~\thetable{} — continued} \\
\toprule
Package    & Purpose            & Load when \\
\midrule
\endhead                        % end of repeated header
% Footer on all pages except last:
\midrule
\multicolumn{3}{r}{Continued on next page} \\
\endfoot                        % end of repeated footer
% Footer on last page only:
\bottomrule
\endlastfoot                    % end of last-page footer
geometry   & Page dimensions    & Preamble \\
fontspec   & Font selection     & Early     \\
microtype  & Microtypography    & Early     \\
booktabs   & Table rules        & Any       \\
longtable  & Multi-page tables  & Any       \\
hyperref   & PDF links          & Last      \\
cleveref   & Smart references   & After hyperref \\
\end{longtable}
```

`longtable` does not go inside a `table` float — it handles its own placement and captioning. The four header/footer commands (`\endfirsthead`, `\endhead`, `\endfoot`, `\endlastfoot`) define what appears on the first page, subsequent pages, all-but-last footers, and the last page footer respectively.

Pandoc renders all Markdown tables as `longtable` environments, which is why `\usepackage{longtable}` must appear in any custom LaTeX template.


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

Sidebars — blocks of supplementary text set apart from the main column — appear in technical books, textbooks, and reference manuals. The `tcolorbox` package provides the most flexible implementation:

```latex
\usepackage{tcolorbox}
\tcbuselibrary{skins, breakable}

% Define a "note" callout
\newtcolorbox{notebox}[1][]{
  enhanced,
  breakable,
  colback=blue!5,
  colframe=blue!60!black,
  fonttitle=\bfseries\sffamily,
  title={Note},
  #1
}

% Define a "warning" callout
\newtcolorbox{warnbox}[1][]{
  enhanced,
  breakable,
  colback=orange!10,
  colframe=orange!80!black,
  fonttitle=\bfseries\sffamily,
  title={Warning},
  #1
}

% Usage:
\begin{notebox}
The \texttt{fontspec} package requires XeLaTeX or LuaLaTeX.
Using it with pdfLaTeX produces an error.
\end{notebox}

\begin{warnbox}[title={Critical}]
Always verify font embedding before sending a PDF to a printer.
\end{warnbox}
```

The `breakable` library option allows boxes to split across page boundaries — essential for callouts that contain more than a few lines.

For Pandoc Markdown documents, callout boxes are created with fenced divs and a Lua filter that maps them to the appropriate LaTeX environments:

```markdown
::: {.note}
The `fontspec` package requires XeLaTeX or LuaLaTeX.
:::
```

```lua
-- callouts-filter.lua
function Div(el)
  if FORMAT:match("latex") then
    local env = el.classes[1]
    if env == "note" or env == "warning" or env == "tip" then
      local begin = pandoc.RawBlock("latex",
        "\\begin{" .. env .. "box}")
      local ending = pandoc.RawBlock("latex",
        "\\end{" .. env .. "box}")
      return {begin, table.unpack(el.content), ending}
    end
  end
end
```

### Marginalia

The `marginnote` package provides `\marginnote{text}` for notes in the margin:

```latex
\usepackage{marginnote}
\usepackage{geometry}
\geometry{marginparwidth=30mm, marginparsep=5mm}

% In the text:
The baseline\marginnote{\small\textit{The invisible line on which
letters rest.}} is the fundamental reference for vertical alignment.
```

`\marginnote` places the note at the vertical position of the command in the text, regardless of the current page's margin state. The `marginfix` package prevents marginnotes from overlapping each other when multiple notes appear close together.

For Tufte-style documents — where wide margins contain running notes, citations, and figure captions — the `tufte-book` and `tufte-handout` classes provide a complete implementation. The Tufte classes significantly change the document geometry and the float system; they are not a drop-in replacement for `book` or `article`.

### Wrapping text around figures

The `wrapfig` package allows text to flow around a figure:

```latex
\usepackage{wrapfig}

\begin{wrapfigure}{r}{0.4\textwidth}
  \centering
  \includegraphics[width=0.38\textwidth]{figure}
  \caption{A wrapped figure}
\end{wrapfigure}

Body text that flows around the figure on the left side.
The text continues for enough lines to clear the figure.
```

The first argument `{r}` places the figure at the right; `{l}` places it at the left. The second argument sets the width of the figure area including any separation from the text.

`wrapfig` is fragile: it does not interact well with `\clearpage`, `\newpage`, footnotes, or very tall figures. Use it only for short figures (four to eight lines) in body paragraphs, never at section boundaries or near other floats. For figures that must appear in a specific position, `wrapfig` is appropriate; for figures that can float to convenient positions, the standard `figure` environment is safer.
