# Templates and Style Systems

The most valuable investment in any document production workflow is the template: the system that encodes typographic decisions once and applies them everywhere. A well-designed template means that producing a new document in an established style requires no design decisions — the document inherits its appearance from the template, the author focuses on content, and the result is consistent across every document the template produces.

This chapter covers template development at three levels: reusable PDF style layers, Pandoc or Quarto templates and defaults, and CSS custom property systems for web output. For a modern CLI workflow, the order of preference should usually be Markdown source first, Typst for print-ready PDF work second, and HTML/CSS or EPUB stylesheets for the web-facing formats.


## Building a reusable PDF style layer

If your PDF path is Typst, the equivalent of a house style is an imported module or package that sets page, text, heading, figure, and table defaults once and exposes only a few controlled parameters. The principle matters more than the backend: authors should edit Markdown and metadata, not layout code.

### Module structure

```typst
// house.typ

#let palette = (
  text: rgb("#1c1c1c"),
  accent: rgb("#1a4e8c"),
  border: rgb("#d7dce2"),
)

#let article-style(
  paper: "a4",
  margin: (x: 30mm, y: 25mm),
  font: "EB Garamond",
  size: 11pt,
  columns: 1,
) = {
  set page(paper: paper, margin: margin)
  set text(font: font, size: size, fill: palette.text)
  set par(justify: true)

  show heading.where(level: 1): it => block(above: 1.5em, below: 0.6em)[
    #set text(weight: "bold", size: 18pt, fill: palette.accent)
    #it
  ]

  if columns == 2 {
    set page(columns: 2)
  }
}

#let cli(text) = raw(text)
#let pkg(text) = text(font: "Source Sans 3", text)
#let file(text) = text(font: "JetBrains Mono", text)
```

Save this in `styles/house.typ` and import it from individual templates or one-off documents:

```typst
#import "styles/house.typ": article-style, cli, pkg, file

#article-style()
```

All typographic defaults are centralised. To change the heading style for every document using the house module, edit `article-style` once.

### Adding controlled options

Per-document variations should be explicit parameters rather than ad hoc template edits:

```typst
#article-style(
  font: "Source Serif 4",
  columns: 2,
  margin: (x: 18mm, y: 20mm),
)
```

That is the right style discipline for any modern template system: narrow, documented, and intentionally limited.

### Imports and responsibilities

A shared style module should set defaults and expose a small public API. Individual documents should import it and supply content. That division of labour matters more than the syntax of any one backend.


## Pandoc templates

Pandoc templates are text files that control the structure of the output document. Quarto defaults and format blocks play a similar role. They are covered in Chapter 6, but their role in style systems deserves elaboration here.

A template for a custom Pandoc workflow should be treated as a versioned, maintained artifact — not a one-time customisation. Store it alongside the Typst modules and stylesheets:

```
styles/
├── article.typ         ← Typst template for PDF
├── book.typ            ← Typst template for books
├── web.html            ← HTML template
└── epub.css            ← EPUB stylesheet
```

### Backend templates as style controllers

A Pandoc or Quarto template's job is to translate metadata into a coherent backend-specific document. In Typst, that usually means importing a shared module and binding metadata to a small public API. For a style system, the template should load the house layer and expose only the variables that should be customisable per-document:

```typst
#import "house.typ": article-style

#let render(meta, body) = {
  article-style(
    font: meta.mainfont.or("EB Garamond"),
    size: meta.fontsize.or(11pt),
  )

  if meta.title != none [
    align(center)[
      #text(size: 22pt, weight: "bold")[#meta.title]
      #if meta.subtitle != none [
        #v(4pt)
        #text(size: 12pt, style: "italic")[#meta.subtitle]
      ]
      #v(6pt)
      #meta.author
    ]
    #v(12pt)
  ]

  body
}
```

This template delegates design decisions to `house.typ` while exposing only a few deliberate overrides. Authors who want the standard look simply write in Markdown; authors with specific requirements can override individual settings in metadata.

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

**A shared template repository**: store `.typ` files, Pandoc templates, and CSS in a shared Git repository. Documents import from this repository rather than copying files locally.

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
