# Templates and Style Systems

The most valuable investment in any document production workflow is the template: the system that encodes typographic decisions once and applies them everywhere. A well-designed template means that producing a new document in an established style requires no design decisions — the document inherits its appearance from the template, the author focuses on content, and the result is consistent across every document the template produces.

This chapter covers template development at three levels: LaTeX document classes, Pandoc HTML and LaTeX templates, and CSS custom property systems for web output.


## Building a reusable LaTeX document class

A document class is LaTeX's highest-level reuse mechanism. Everything in the preamble — package loading, option handling, layout settings, custom commands — can be encoded in a `.cls` file that any document invokes with a single `\documentclass` declaration.

### Class file structure

```latex
% myarticle.cls
\NeedsTeXFormat{LaTeX2e}[2020/02/02]
\ProvidesClass{myarticle}[2024/01/01 v1.0 Custom article class]

% === Option handling ===
% Pass unknown options to the base class
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax

% === Base class ===
\LoadClass[11pt,a4paper]{article}

% === Required packages ===
\RequirePackage[T1]{fontenc}
\RequirePackage{geometry}
\RequirePackage[protrusion=true,expansion=false]{microtype}
\RequirePackage{fancyhdr}
\RequirePackage{titlesec}
\RequirePackage{booktabs}
\RequirePackage{longtable}
\RequirePackage{hyperref}
\RequirePackage{cleveref}

% === Page geometry ===
\geometry{
  a4paper,
  top=30mm, bottom=25mm,
  left=30mm, right=25mm
}

% === Section heading style ===
\titleformat{\section}
  {\normalfont\large\bfseries}
  {\thesection}{1em}{}
\titleformat{\subsection}
  {\normalfont\normalsize\bfseries}
  {\thesubsection}{1em}{}

% === Page style ===
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small\textit{\leftmark}}
\fancyhead[R]{\small\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\fancypagestyle{plain}{%
  \fancyhf{}
  \fancyfoot[C]{\small\thepage}
  \renewcommand{\headrulewidth}{0pt}
}

% === Paragraph settings ===
\setlength{\parindent}{1.5em}
\setlength{\parskip}{0pt}

% === Hyperref defaults ===
\hypersetup{
  colorlinks=true,
  linkcolor=blue!60!black,
  citecolor=blue!60!black,
  urlcolor=blue!60!black
}

% === Custom commands ===
\newcommand{\cli}[1]{\texttt{#1}}
\newcommand{\pkg}[1]{\textsf{#1}}
\newcommand{\file}[1]{\texttt{#1}}

\endinput
```

Placement: save as `myarticle.cls` in the same directory as the document, or in a local TeX tree (`~/texmf/tex/latex/myarticle/`). Documents then use:

```latex
\documentclass{myarticle}
```

All preamble decisions are centralised. To change the heading style for every document that uses this class, change `titlesec` settings in the class file once.

### Adding class options

Custom class options allow per-document variations without breaking the central design:

```latex
% Boolean options
\newif\if@twocolumn
\@twocolumnfalse

\DeclareOption{twocol}{\@twocolumntrue}

% At the end of option processing:
\if@twocolumn
  \AtBeginDocument{\twocolumn}
\fi
```

With this option, `\documentclass[twocol]{myarticle}` switches to two-column layout; the default remains single-column.

### The `\RequirePackage` vs `\usepackage` distinction

In class files, use `\RequirePackage` rather than `\usepackage`. The difference is technical but important: `\RequirePackage` can be used before `\documentclass` in a class file and handles package options correctly during class loading. `\usepackage` is for use in documents and preambles only.


## Pandoc templates

Pandoc templates are text files that control the structure of the output document. They are covered in Chapter 6, but their role in style systems deserves elaboration here.

A template for a custom Pandoc workflow should be treated as a versioned, maintained artifact — not a one-time customisation. Store it alongside the class files and stylesheets:

```
styles/
├── article.latex       ← LaTeX template for Pandoc
├── book.latex          ← LaTeX template for books
├── web.html            ← HTML template
└── epub.css            ← EPUB stylesheet
```

### The LaTeX template as a style controller

The Pandoc LaTeX template's job is to translate YAML metadata into a coherent LaTeX preamble. For a style system, this means the template should load the house document class and expose only the variables that should be customisable per-document:

```latex
\documentclass[
  $if(fontsize)$$fontsize$,$endif$
  $for(classoption)$$classoption$$sep$,$endfor$
]{myarticle}

% Per-document font override (optional)
$if(mainfont)$
\usepackage{fontspec}
\setmainfont{$mainfont$}
$endif$

% Per-document geometry override (optional)
$if(geometry)$
\geometry{$geometry$}
$endif$

% Required for Pandoc's tight lists
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

$if(title)$
\title{$title$$if(subtitle)$\\[0.5em]\large $subtitle$$endif$}
$endif$
$if(author)$
\author{$for(author)$$author$$sep$\\$endfor$}
$endif$
$if(date)$\date{$date$}$endif$

\begin{document}
$if(title)$\maketitle$endif$
$if(abstract)$
\begin{abstract}$abstract$\end{abstract}
$endif$
$if(toc)$\tableofcontents$endif$
$body$
$if(bibliography)$
\bibliographystyle{plainnat}
\bibliography{$for(bibliography)$$bibliography$$sep$,$endfor$}
$endif$
\end{document}
```

This template delegates all design decisions to `myarticle.cls` while exposing only `fontsize`, `mainfont`, and `geometry` as per-document overrides. Authors who want the standard look simply write their document in Markdown; authors with specific requirements can override individual settings.

### The HTML template as a site framework

For a documentation site or web publication with a consistent visual identity, a Pandoc HTML template controls the page structure:

```html
<!DOCTYPE html>
<html lang="$lang$">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$if(title-prefix)$$title-prefix$ — $endif$$pagetitle$</title>
  <link rel="stylesheet" href="$if(css-root)$$css-root$$else$/$endif$styles/main.css">
  $for(header-includes)$$header-includes$$endfor$
</head>
<body>
  <header class="site-header">
    <a class="site-title" href="/">$if(site-title)$$site-title$$endif$</a>
    <nav>$if(site-nav)$$site-nav$$endif$</nav>
  </header>
  <main>
    $if(title)$
    <header class="page-header">
      <h1>$title$</h1>
      $if(subtitle)$<p class="subtitle">$subtitle$</p>$endif$
      $if(author)$<p class="author">$for(author)$$author$$sep$, $endfor$</p>$endif$
    </header>
    $endif$
    $if(toc)$
    <nav class="toc">$table-of-contents$</nav>
    $endif$
    <article>$body$</article>
  </main>
  <footer>$if(site-footer)$$site-footer$$endif$</footer>
</body>
</html>
```

Site-level variables (`site-title`, `site-nav`, `site-footer`) are defined in the Pandoc defaults file and apply to every page; page-level variables (`title`, `author`) are defined in individual documents.


## CSS custom property systems for web typography

A CSS custom property (CSS variable) system translates design decisions into maintainable, consistent code. Rather than scattering `font-family: 'EB Garamond', Georgia, serif` across dozens of CSS rules, define it once as a variable and reference it everywhere. When the typeface changes, one line changes.

### The design token layer

```css
/* _tokens.css — the source of truth for all design decisions */

:root {
  /* Typography */
  --font-body:    'EB Garamond', Georgia, serif;
  --font-heading: 'Fira Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;

  /* Type scale (Major Third, 1.25 ratio) */
  --size-xs:   0.64rem;   /*  ~10px */
  --size-sm:   0.8rem;    /*  ~13px */
  --size-base: 1rem;      /*  ~16px */
  --size-md:   1.25rem;   /*  ~20px */
  --size-lg:   1.563rem;  /*  ~25px */
  --size-xl:   1.953rem;  /*  ~31px */
  --size-2xl:  2.441rem;  /*  ~39px */
  --size-3xl:  3.052rem;  /*  ~49px */

  /* Spacing scale */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  2rem;
  --space-xl:  4rem;

  /* Measure (line length) */
  --measure:   66ch;
  --measure-wide: 80ch;

  /* Line heights */
  --leading-tight:  1.2;
  --leading-base:   1.6;
  --leading-loose:  1.8;

  /* Colours */
  --color-text:     #1c1c1c;
  --color-muted:    #555;
  --color-accent:   #1a4e8c;
  --color-bg:       #ffffff;
  --color-bg-alt:   #f8f8f8;
  --color-border:   #ddd;
}
```

### The component layer

```css
/* _base.css — base styles using tokens */

html { font-size: 18px; }

body {
  font-family: var(--font-body);
  font-size: var(--size-base);
  line-height: var(--leading-base);
  color: var(--color-text);
  background: var(--color-bg);
  max-width: var(--measure);
  margin: 0 auto;
  padding: var(--space-md) var(--space-lg);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: var(--leading-tight);
  color: var(--color-text);
}

h1 { font-size: var(--size-3xl); }
h2 { font-size: var(--size-2xl); }
h3 { font-size: var(--size-xl); }
h4 { font-size: var(--size-lg); font-style: italic; font-weight: 400; }

code, pre {
  font-family: var(--font-mono);
  font-size: var(--size-sm);
}
```

### Dark mode with CSS custom properties

A minimal dark mode that swaps the design tokens without rewriting the component rules:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-text:   #e8e8e8;
    --color-muted:  #aaa;
    --color-accent: #7ba7d4;
    --color-bg:     #1a1a1a;
    --color-bg-alt: #242424;
    --color-border: #444;
  }
}
```

All component rules remain unchanged — they reference variables, not colours directly. The dark mode override replaces only the token definitions.

### House style consistency

A style system is only as good as its enforcement. For a team or organisation producing multiple documents, enforcing house style requires:

**A shared template repository**: store `.cls` files, Pandoc templates, and CSS in a shared Git repository. Documents import from this repository rather than copying files locally.

**A defaults file per document type**: the Pandoc defaults file specifies the template, the CSS, and the allowed metadata variables:

```yaml
# defaults/house-article.yaml
from: markdown
to: html5
template: templates/article.html
css: https://styles.example.com/main.css
metadata:
  lang: en-GB
```

**Linting**: a Pandoc Lua filter can enforce metadata requirements — checking that `title`, `author`, and `date` are always present, that `lang` is always set, and that unknown metadata keys are flagged. A simple filter:

```lua
-- check-metadata.lua
function Meta(meta)
  local required = {"title", "author", "date"}
  for _, key in ipairs(required) do
    if not meta[key] then
      io.stderr:write("Warning: missing required metadata: " .. key .. "\n")
    end
  end
  return meta
end
```

```sh
pandoc document.md --lua-filter=check-metadata.lua -o output.html
```

This filter runs on every build and warns about missing metadata without failing the build — configurable to `os.exit(1)` if hard enforcement is needed.
