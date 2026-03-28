# LaTeX

LaTeX is the historical centre of modern technical typesetting, not the inevitable destination of all serious document work. For new PDF-only projects, this book generally prefers Typst; for multi-format work, it prefers Markdown with Pandoc or Quarto. LaTeX remains important because publishers, conferences, long-lived institutional workflows, and specialised mathematical packages still depend on it. Understanding it deeply, rather than just knowing enough to make Pandoc produce PDFs, pays dividends whenever you hit those compatibility boundaries.

This chapter covers LaTeX as a direct authoring tool: the document structure, the engine choices, the essential packages, the mathematics system, bibliography management, and the techniques for building reusable document classes. It assumes you have a TeX Live installation; if not, the first section explains how to get one.


## TeX distributions

LaTeX is not a single program. It is an ecosystem of tools, engines, packages, and fonts distributed as a collection called a *TeX distribution*. The three distributions in current use are:

**TeX Live** is the standard distribution for Linux and macOS, maintained by the TeX Users Group and updated annually. On Debian and Ubuntu systems, a minimal installation suitable for most work is:

```sh
sudo apt install texlive-xetex texlive-fonts-recommended \
                 texlive-latex-extra texlive-science
```

For a complete installation including all packages, `texlive-full` provides everything at the cost of approximately 5GB of disk space. The targeted installation above is preferable for most users.

**MiKTeX** is the standard distribution for Windows, with a distinctive feature: it installs missing packages on demand. When a document requires a package that is not installed, MiKTeX downloads and installs it automatically during compilation. This eliminates the need to think about package installation at all, at the cost of internet access during first use of each new package.

**TinyTeX** is a lightweight LaTeX distribution designed for R and Quarto users, installable without root privileges. Its `tlmgr install` command installs individual packages on demand, like MiKTeX. For authors who want a minimal, reproducible LaTeX installation without a full TeX Live, TinyTeX is a good choice:

```sh
# Install TinyTeX
curl -sLO https://yihui.org/tinytex/install-unx.sh
sh install-unx.sh
```

Once a distribution is installed, **`tlmgr`** is the package manager for TeX Live and TinyTeX:

```sh
tlmgr install biblatex biber   # install specific packages
tlmgr update --all             # update all packages
tlmgr search --global cleveref # search for a package
```

**`texdoc`** is the documentation viewer. Every CTAN package ships with documentation, and `texdoc` opens it:

```sh
texdoc geometry      # open geometry package documentation
texdoc microtype     # open microtype documentation
texdoc fontspec      # open fontspec documentation
```

When in doubt about a package option, `texdoc packagename` is the right first resource. The documentation for major packages is detailed, well-written, and authoritative.


## Document structure

A LaTeX document has two parts: the *preamble* and the *body*. The preamble begins with `\documentclass` and extends to `\begin{document}`. The body is everything between `\begin{document}` and `\end{document}`.

```latex
\documentclass[11pt,a4paper]{article}  % class and options

% --- Preamble: packages and settings ---
\usepackage[T1]{fontenc}
\usepackage{geometry}
\geometry{margin=25mm}

% --- Body ---
\begin{document}

\section{Introduction}

Body text goes here.

\end{document}
```

The `\documentclass` command specifies the class — the template that defines the overall document structure and appearance — and its options. The most commonly used standard classes are `article` (for papers and short documents), `report` (for longer documents with chapters), `book` (for books with front matter, chapters, and back matter), and `letter`. The KOMA-Script alternatives `scrartcl`, `scrreprt`, and `scrbook` replace these with more flexible, European-oriented equivalents and are the better choice for new documents.

**Class options** are comma-separated values in square brackets. The most important are:

- `10pt`, `11pt`, `12pt` — base font size (default is 10pt)
- `a4paper`, `letterpaper`, `a5paper` — paper size
- `twoside`, `oneside` — page layout (twoside uses different inner/outer margins for recto/verso pages)
- `openright`, `openany` — whether chapters start on right-hand pages (book and report only)
- `fleqn` — left-align displayed equations instead of centring them
- `leqno` — number equations on the left instead of the right

**The preamble** loads packages and configures settings. Package loading order matters: some packages must be loaded before others, and some conflict if loaded in the wrong order. The general rule is: load encoding packages first (`fontenc`, `inputenc`), then fonts, then layout packages (`geometry`, `fancyhdr`), then feature packages (`microtype`, `hyperref`), and load `hyperref` last among the feature packages since it modifies many internals.

**Encoding** in pdfLaTeX requires two declarations:

```latex
\usepackage[T1]{fontenc}      % output font encoding — use T1 for Western European
\usepackage[utf8]{inputenc}   % input encoding — use utf8 for modern systems
```

XeLaTeX and LuaLaTeX assume UTF-8 input and use Unicode font encoding natively; neither `inputenc` nor `fontenc` should be loaded in those engines (or load `fontspec` which handles this correctly).


## Engines: pdfLaTeX, XeLaTeX, LuaLaTeX

The three main LaTeX engines produce identical-looking output for standard documents but differ significantly in their font handling and capabilities.

**pdfLaTeX** compiles `.tex` source directly to PDF. It requires fonts to be available in Type 1 format and configured through LaTeX's font selection system (NFSS). Its main advantage is speed and stability; its main limitation is that it cannot use arbitrary system fonts. Standard LaTeX font packages — `palatino`, `tgpagella`, `newtxtext`, `libertinus`, `mathpazo` — all work with pdfLaTeX.

```latex
% pdfLaTeX font selection via packages
\usepackage{palatino}            % Palatino for text
\usepackage[sc]{mathpazo}        % Palatino for math, with small caps
\usepackage[scaled=0.9]{helvet}  % Helvetica for sans-serif
\usepackage{courier}             % Courier for monospace
```

**XeLaTeX** uses Unicode natively and accesses any OpenType or TrueType font installed on the system via the `fontspec` package. This is the engine to use for documents that need specific professional typefaces, non-Latin scripts, or advanced OpenType features.

```latex
% XeLaTeX font selection via fontspec
\usepackage{fontspec}
\setmainfont{EB Garamond}[
  Numbers = OldStyle,
  Ligatures = TeX
]
\setsansfont{Fira Sans}[Scale = MatchLowercase]
\setmonofont{JetBrains Mono}[Scale = MatchLowercase]
```

The `Scale = MatchLowercase` option adjusts the font's size so its x-height matches that of the main font — critical for visual harmony when mixing typefaces.

**LuaLaTeX** shares XeLaTeX's Unicode and `fontspec` capabilities and adds a full Lua scripting environment accessible from within the document. This enables genuinely programmatic document generation: you can write Lua code that reads external data, performs calculations, and generates LaTeX commands, all within a single `.tex` file.

```latex
% LuaLaTeX: generate a table from Lua
\directlua{
  local data = {{"Pandoc","Markdown","Any"}, {"LaTeX","TeX","PDF"}}
  tex.sprint("\\begin{tabular}{lll}")
  for _, row in ipairs(data) do
    tex.sprint(table.concat(row, " & ") .. " \\\\")
  end
  tex.sprint("\\end{tabular}")
}
```

Choose pdfLaTeX when you are using standard LaTeX font packages and do not need system fonts. Choose XeLaTeX when you need specific OTF/TTF fonts. Choose LuaLaTeX when you need programmatic document generation or need LuaLaTeX-specific packages.


## Mathematics

LaTeX's mathematics typesetting is its most celebrated capability, and the reason it remains the standard for scientific publishing forty years after its creation. The quality of LaTeX mathematics — the spacing around operators, the sizing of delimiters, the placement of subscripts and superscripts, the layout of multi-line equations — is unmatched by any other widely available system.

**Inline mathematics** is enclosed in `$...$`:

```latex
Einstein's equation $E = mc^2$ relates energy to mass.
The gradient is $\nabla f = \sum_{i=1}^n \frac{\partial f}{\partial x_i}\,\hat{e}_i$.
```

**Displayed mathematics** uses `\[...\]` for single equations and the `align` environment from `amsmath` for multi-line equations:

```latex
The fundamental theorem of calculus:
\[
  \int_a^b f'(x)\,dx = f(b) - f(a)
\]

The align environment for multi-line equations:
\begin{align}
  \nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
  \nabla \cdot \mathbf{B} &= 0 \\
  \nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
  \nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0
                               \frac{\partial \mathbf{E}}{\partial t}
\end{align}
```

The `&` character aligns the equals signs across all lines. The `\\` ends each line. Equations are numbered automatically; suppress numbering for a specific line with `\nonumber` or use the `align*` environment to suppress numbering throughout.

**The `amsmath` package** is essential for serious mathematical typesetting. It provides `align`, `gather`, `multline`, `split`, `cases`, improved fraction commands, and dozens of other enhancements over LaTeX's built-in mathematics. Load it in every mathematical document:

```latex
\usepackage{amsmath}
\usepackage{amssymb}   % additional mathematical symbols
\usepackage{amsthm}    % theorem environments
```

**Theorem environments** from `amsthm` are the standard for mathematical writing:

```latex
\usepackage{amsthm}

\newtheorem{theorem}{Theorem}[section]   % numbered within sections
\newtheorem{lemma}[theorem]{Lemma}       % shares counter with theorem
\newtheorem{corollary}[theorem]{Corollary}

\theoremstyle{definition}
\newtheorem{definition}[theorem]{Definition}

\theoremstyle{remark}
\newtheorem*{remark}{Remark}             % unnumbered
```

The three theorem styles are `plain` (bold label, italic text — for theorems, lemmas), `definition` (bold label, upright text — for definitions, examples), and `remark` (italic label, upright text — for remarks, notes). Choosing the right style for each environment is a typographic decision, not just an aesthetic one: the visual contrast between theorem and definition bodies signals the difference in their logical character.


## Essential packages

Every serious LaTeX document uses a core set of packages. These are not optional enhancements — they correct genuine deficiencies in LaTeX's defaults.

**`geometry`** controls page dimensions and margins:

```latex
\usepackage{geometry}
\geometry{
  a4paper,
  top=30mm, bottom=25mm,
  left=30mm, right=25mm,
  bindingoffset=10mm   % for two-sided printing
}
```

**`microtype`** enables microtypographic extensions: character protrusion (hanging punctuation into the margin) and font expansion (slight width variation to improve justification). The visual effect is subtle but the text quality improvement is real — justified paragraphs with fewer hyphens, more even spacing, and fewer overfull lines:

```latex
\usepackage{microtype}
```

With pdfLaTeX, full protrusion and expansion are available. With XeLaTeX, only protrusion is available. With LuaLaTeX, both are available and `microtype` has additional capabilities. Load `microtype` with no options and it applies sensible defaults for whichever engine you are using.

**`hyperref`** adds PDF navigation (clickable cross-references, table of contents, citations) and writes document metadata:

```latex
\usepackage{hyperref}
\hypersetup{
  pdftitle={The CLI Typographer},
  pdfauthor={A. N. Author},
  colorlinks=true,
  linkcolor=NavyBlue,
  urlcolor=Maroon,
  citecolor=black
}
```

Load `hyperref` last in the preamble (or second-to-last if using `cleveref`, which must follow `hyperref`).

**`booktabs`** provides professional-quality table rules:

```latex
\usepackage{booktabs}

\begin{table}
\centering
\begin{tabular}{llc}
  \toprule
  Tool    & Primary format  & Released \\
  \midrule
  TeX     & DVI             & 1978     \\
  LaTeX   & DVI / PDF       & 1985     \\
  pdfTeX  & PDF             & 1996     \\
  XeTeX   & PDF             & 2004     \\
  LuaTeX  & PDF             & 2007     \\
  \bottomrule
\end{tabular}
\caption{TeX engine timeline}
\label{tab:engines}
\end{table}
```

The `booktabs` rules — `\toprule`, `\midrule`, `\bottomrule` — have appropriate thickness and spacing. Do not use vertical rules in tables; the visual noise they add outweighs any organisational benefit.

**`enumitem`** replaces LaTeX's built-in list environments with fully customisable alternatives:

```latex
\usepackage{enumitem}

% Compact list with no extra spacing
\begin{itemize}[noitemsep]
  \item First item
  \item Second item
\end{itemize}

% Numbered list with custom label format
\begin{enumerate}[label=\textbf{\arabic*.}, leftmargin=*]
  \item Step one
  \item Step two
\end{enumerate}
```

**`cleveref`** provides smart cross-references that automatically include the reference type:

```latex
\usepackage{cleveref}

% Instead of: see Table~\ref{tab:engines}
% Write:
See \cref{tab:engines}.    % produces "see Table 1"
See \Cref{tab:engines}.    % produces "see Table 1" (capitalised)
See \cref{sec:intro,sec:methods}.  % multiple: "see Sections 1 and 3"
```

**`siunitx`** formats numbers and physical units consistently:

```latex
\usepackage{siunitx}

A document of \qty{350}{pages}.
A resolution of \qty{600}{dpi}.
A file size of \qty{2.4}{\mega\byte}.
A temperature of \qty{-17.3}{\celsius}.
Numbers with \num{1234567.89} formatted correctly.
```

`siunitx` handles the spacing between number and unit, the formatting of large numbers, and the typesetting of unit symbols correctly according to SI conventions.


## Bibliography management

LaTeX has two bibliography systems: the older BibTeX with the `natbib` package, and the modern BibLaTeX with the `biber` backend. BibLaTeX/Biber is the current standard; use it for new documents unless you have a specific reason to use BibTeX.

**BibTeX and natbib** remain in widespread use because of their stability and because many publisher templates require them:

```latex
\usepackage{natbib}

% In the document body:
\citet{knuth1984}         % Knuth (1984)
\citep{knuth1984}         % (Knuth, 1984)
\citep[p.~42]{knuth1984}  % (Knuth, 1984, p. 42)
\citealt{knuth1984}       % Knuth 1984 (no parentheses)

% At the end of the document:
\bibliographystyle{plainnat}
\bibliography{references}
```

Compile sequence for BibTeX: `pdflatex` → `bibtex` → `pdflatex` → `pdflatex`. The `latexmk` tool automates this sequence.

**BibLaTeX with Biber** provides a more powerful and flexible system, with better Unicode support, richer entry types, and more customisable citation and bibliography styles:

```latex
\usepackage[
  style=authoryear,       % or: numeric, chicago-notes, apa, ieee
  backend=biber,
  sortlocale=en_GB
]{biblatex}
\addbibresource{references.bib}

% In the document body:
\textcite{knuth1984}      % Knuth (1984)
\parencite{knuth1984}     % (Knuth, 1984)
\parencite[p.~42]{knuth1984}
\autocite{knuth1984}      % style-dependent: parens or footnote

% At the end of the document:
\printbibliography
```

Compile sequence for BibLaTeX/Biber: `xelatex` → `biber` → `xelatex` → `xelatex`. Again, `latexmk` handles this automatically with `$pdf_mode = 5` (XeLaTeX) and `$biber = 'biber %O %S'` in `.latexmkrc`.

The `.bib` file format is the same for both systems — a collection of entries identifying each cited work by type and fields:

```bibtex
@book{knuth1984,
  author    = {Knuth, Donald E.},
  title     = {The {\TeX}book},
  series    = {Computers \& Typesetting},
  volume    = {A},
  publisher = {Addison-Wesley},
  year      = {1984},
  isbn      = {0-201-13447-0}
}

@article{lamport1986,
  author  = {Lamport, Leslie},
  title   = {Document Production: Visual or Logical?},
  journal = {Notices of the American Mathematical Society},
  year    = {1987},
  volume  = {34},
  number  = {5},
  pages   = {621--624}
}
```

Note `{\TeX}` to protect the `\TeX` command from case-folding by bibliography styles that format titles in title case. Protecting proper nouns and commands with braces is a BibTeX idiom.


## Custom commands and environments

One of LaTeX's great strengths is the ability to define semantic markup — custom commands that encode meaning rather than appearance, so that the appearance can be changed globally by modifying the definition.

**New commands** with `\newcommand`:

```latex
% \newcommand{\name}[num_args]{definition}

\newcommand{\cli}[1]{\texttt{#1}}
\newcommand{\pkg}[1]{\textsf{\small #1}}
\newcommand{\file}[1]{\texttt{#1}}
\newcommand{\term}[1]{\emph{#1}}

% Usage:
The \cli{fc-list} command is in the \pkg{fontconfig} package.
Open the \file{metadata.yaml} file.
The \term{baseline} is the invisible line on which text sits.
```

When you later decide that package names should be bold rather than small sans-serif, change `\pkg`'s definition in one place and every instance updates.

**New environments** with `\newenvironment`:

```latex
% \newenvironment{name}[num_args]{begin-code}{end-code}

\newenvironment{aside}{%
  \begin{quote}\small\itshape
}{%
  \end{quote}
}

\newenvironment{codeblock}[1][]{%
  \begin{tcolorbox}[
    title=#1,
    fonttitle=\small\sffamily,
    colback=gray!5,
    colframe=gray!50
  ]
  \small\ttfamily
}{%
  \end{tcolorbox}
}
```

**Custom counters** enable numbered environments that integrate with LaTeX's cross-referencing system:

```latex
\newcounter{example}[section]
\renewcommand{\theexample}{\thesection.\arabic{example}}

\newenvironment{example}[1][]{%
  \refstepcounter{example}%
  \begin{tcolorbox}[title=Example \theexample\ifx&#1&\else: #1\fi]
}{%
  \end{tcolorbox}
}

% Usage:
\begin{example}[Font selection]
  The \cli{fc-match serif} command shows the default serif font.
\end{example}
```

`\refstepcounter` increments the counter and registers the current value for `\label`/`\ref`, so these examples can be cross-referenced like any other numbered element.


## Custom document classes

A custom document class captures all the formatting decisions for a document type in a single reusable file. Once written, it can be applied to any document of that type without repeating the configuration.

A minimal class file:

```latex
% myarticle.cls
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{myarticle}[2024/01/01 Custom article class]

% Pass options to the base class
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax

% Load the base class
\LoadClass[11pt,a4paper]{article}

% Required packages
\RequirePackage[T1]{fontenc}
\RequirePackage{geometry}
\RequirePackage{microtype}
\RequirePackage{fancyhdr}
\RequirePackage{titlesec}
\RequirePackage{hyperref}
\RequirePackage{booktabs}

% Page geometry
\geometry{a4paper, top=30mm, bottom=25mm, left=30mm, right=25mm}

% Section heading style
\titleformat{\section}
  {\normalfont\large\bfseries}{\thesection}{1em}{}
\titleformat{\subsection}
  {\normalfont\normalsize\bfseries}{\thesubsection}{1em}{}

% Page style
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\textit{\leftmark}}
\fancyhead[R]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}

% Paragraph spacing
\setlength{\parindent}{1.5em}
\setlength{\parskip}{0pt}

% Hyperref defaults
\hypersetup{colorlinks=true, linkcolor=NavyBlue, urlcolor=Maroon, citecolor=black}

\endinput
```

Place `myarticle.cls` in the same directory as the `.tex` file, or in a local TeX directory (typically `~/texmf/tex/latex/myarticle/`) where LaTeX will find it automatically. Then use it with:

```latex
\documentclass{myarticle}
```

This is the foundational pattern for Chapter 24's treatment of templates and style systems: encode decisions once, apply them everywhere.


## The compilation workflow with latexmk

Direct `pdflatex` or `xelatex` invocations require you to manage multi-pass compilation manually — LaTeX needs multiple runs to resolve forward references, update the table of contents, and process bibliographies. `latexmk` automates this entirely.

A project-level `.latexmkrc` file configures `latexmk`'s behaviour:

```perl
# .latexmkrc

# Use XeLaTeX
$pdf_mode = 5;
$xelatex = 'xelatex -interaction=nonstopmode -synctex=1 %O %S';

# Use Biber for bibliography
$biber = 'biber %O %S';

# Clean up auxiliary files
$clean_ext = 'synctex.gz run.xml bbl bcf fdb_latexmk fls';

# Output directory (keeps source directory clean)
$out_dir = 'build';
```

With this configuration:

```sh
latexmk document.tex    # build, running as many passes as needed
latexmk -pvc document.tex  # preview-continuously: rebuild on save
latexmk -c              # clean auxiliary files
latexmk -C              # clean everything including the PDF
```

The `-pvc` flag is particularly useful during drafting: `latexmk` watches the source file and rebuilds automatically whenever you save. Combined with a PDF viewer that reloads automatically (most modern viewers do), this gives a near-live preview loop for LaTeX documents.

The `$out_dir = 'build'` setting keeps the source directory uncluttered — all auxiliary files and the final PDF are written to `build/`. This works seamlessly with the Makefile patterns from Chapter 10.

---

LaTeX is a large system and this chapter covers only its core. The document examples in Part IV — especially where publisher requirements or established classes still matter — demonstrate these techniques in context. Chapter 26 returns to LaTeX for microtypography, covering `microtype`'s protrusion and expansion settings in detail and the techniques for eliminating widows, orphans, and bad line breaks in production-quality documents. The point is not that every new project should start in LaTeX; it is that when the ecosystem demands LaTeX, you should know what it is doing and how to use it well.
