# Generating HTML

HTML is the most widely read document format in existence. More text is consumed through HTML than through any other medium — more than print, more than PDF, more than any proprietary format. For the CLI typographer, this means that HTML output deserves the same seriousness of purpose as print output: the same attention to typeface selection, the same care about spacing and rhythm, the same respect for the reader's experience.

Pandoc's HTML output is competent by default and excellent with customisation. This chapter covers both: the structures Pandoc produces without intervention, the CSS required to make those structures typographically sound, and the mechanisms for producing single-file or multi-page HTML documents from the same Markdown source.


## What Pandoc's HTML output looks like

When you run:

```sh
pandoc input.md -t html --standalone -o output.html
```

Pandoc generates a complete HTML5 document with semantic markup. A section heading becomes `<h1>` through `<h6>`. Emphasis becomes `<em>`. Strong becomes `<strong>`. Block quotations become `<blockquote>`. Code blocks become `<pre><code class="language-python">`. The document title, if present in the metadata, appears in a `<header id="title-block-header">` element. A table of contents, if requested, appears in `<nav id="TOC" role="doc-toc">`.

This semantic structure is not incidental — it is Pandoc's most important contribution to HTML output. The alternative, used by many word processors and export tools, is to produce HTML that approximates the visual appearance of the source document using explicit font sizes, inline styles, and layout divs that convey no structural meaning. Pandoc's output conveys structural meaning first; appearance is a CSS concern.

A compact example. Given this Markdown:

```markdown
---
title: "Font Management from the CLI"
author: "A. N. Author"
date: "March 2024"
lang: en-GB
abstract: |
  An introduction to fontconfig and related tools.
keywords: [fonts, CLI, fontconfig]
---

# Introduction

The `fc-list` command enumerates all fonts known to fontconfig.

## Installation

Install fonts to `~/.local/share/fonts/` for per-user access.
```

Pandoc produces:

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB" xml:lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="A. N. Author" />
  <meta name="keywords" content="fonts, CLI, fontconfig" />
  <title>Font Management from the CLI</title>
  <style> /* default styles */ </style>
</head>
<body>
<header id="title-block-header">
  <h1 class="title">Font Management from the CLI</h1>
  <p class="author">A. N. Author</p>
  <p class="date">March 2024</p>
  <div class="abstract">
    <div class="abstract-title">Abstract</div>
    <p>An introduction to fontconfig and related tools.</p>
  </div>
</header>
<h1 id="introduction">Introduction</h1>
<p>The <code>fc-list</code> command enumerates all fonts known to fontconfig.</p>
<h2 id="installation">Installation</h2>
<p>Install fonts to <code>~/.local/share/fonts/</code> for per-user access.</p>
</body>
</html>
```

Several details are worth noting. The `lang` attribute is set from the YAML metadata, which is important for correct hyphenation in browsers and for screen reader behaviour. Keywords become `<meta name="keywords">`. The abstract appears in a `<div class="abstract">` with a titled inner div. Every heading receives an `id` attribute derived from its text, enabling both the table of contents and direct linking to sections.

The default stylesheet Pandoc embeds — accessible via `--print-default-template=html` and visible between the `<style>` tags — is minimal but sensible: it sets a comfortable maximum width of `36em`, centres the body, enables hyphenation, applies `text-rendering: optimizeLegibility` and `font-kerning: normal`, and defines basic table and code styles. It deliberately sets no typeface and no font sizes beyond a few responsive adjustments, leaving those decisions to a custom stylesheet.


## Semantic HTML and accessibility

Well-structured HTML is simultaneously good typography and good accessibility — two concerns that are more aligned than they might appear. A document with clear heading hierarchy, properly marked emphasis, labelled tables, and descriptive image alt text serves both the sighted reader scanning for structure and the screen reader user navigating by heading. These are not separate requirements; they are the same requirement: make structure visible.

Several specific points apply to Pandoc-generated HTML.

**Heading hierarchy** should be continuous. Do not skip from `<h1>` to `<h3>` because you want a visually smaller heading — adjust the CSS instead. Screen readers and assistive technologies use heading levels to build a document outline; gaps in the hierarchy produce confusing navigation. Pandoc's default behaviour produces the right structure from well-organised Markdown; the risk comes from overriding it. If you use a custom template that wraps content in additional elements, ensure the heading levels remain continuous.

**Image alt text** in Pandoc comes from the Markdown alt text attribute — the text in square brackets before the parenthesised path. For meaningful images, write descriptive alt text that conveys the image's informational content:

```markdown
![Bar chart showing CLI tool adoption rates by year, 2015–2024](adoption-chart.png)
```

For purely decorative images, an empty alt attribute tells screen readers to skip the element. In Pandoc Markdown, you can achieve this with an empty alt attribute and a `role` via the attribute syntax:

```markdown
![](decorative-rule.svg){role="presentation" alt=""}
```

Note that Pandoc wraps images in `<figure>` with the alt text also used as a `<figcaption>`. If this duplication is undesirable for decorative images, a Lua filter can suppress the caption for images with empty alt text.

**Tables** should use `<thead>` and `<tbody>` correctly, which Pandoc's output does by default. The first row of a Pandoc Markdown table (the row above the separator) becomes `<thead>`; subsequent rows become `<tbody>`. Column headers carry the `<th>` element, which browsers and screen readers recognise as header cells. For complex tables with row headers as well as column headers, Pandoc's table syntax is insufficient and raw HTML is required; this is a known limitation.

**Language declaration** via the `lang` metadata field should always be set. It affects hyphenation algorithms in browsers, translation tools, screen reader language selection, and the validity of the document under WCAG guidelines. For documents in British English: `lang: en-GB`. For American English: `lang: en`. For documents with sections in multiple languages, the `lang` attribute can be applied to specific elements via Pandoc's span syntax: `[Ce paragraphe est en français.]{lang=fr}`.

**Colour contrast** is a concern that CSS controls, not Pandoc. Any colour scheme you apply via a custom stylesheet should meet WCAG AA contrast ratios: at minimum 4.5:1 for body text and 3:1 for large text (above approximately 18pt or 14pt bold). For text on a white background, the hexadecimal value `#767676` is approximately the minimum grey that meets AA for body text. Values darker than that pass; lighter values fail. Free online tools (WebAIM's Contrast Checker is the standard reference) verify ratios given two hex colour values.


## CSS for web typography

Pandoc's default styles are a foundation, not a design. For any document intended to be read seriously — documentation, articles, reports, books — a custom stylesheet is essential. This section builds one from scratch, explaining each decision.

The stylesheet is applied to Pandoc output via the `--css` flag or the `css` metadata variable:

```sh
pandoc input.md -t html --standalone --css=typography.css -o output.html
```

Or in the YAML metadata block:

```yaml
css: typography.css
```

Multiple CSS files can be specified; they are linked in the order given.

**Custom properties** establish the design tokens that the rest of the stylesheet references. Define them at the `:root` level so they are available everywhere:

```css
:root {
  --font-body:    'EB Garamond', Georgia, serif;
  --font-sans:    'Fira Sans', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;

  --scale-base:   1.2rem;
  --scale-sm:     0.875rem;
  --scale-lg:     1.5rem;
  --scale-xl:     2rem;
  --scale-2xl:    2.75rem;

  --leading:      1.6;
  --measure:      66ch;

  --color-text:   #1c1c1c;
  --color-muted:  #555;
  --color-link:   #1a4e8c;
  --color-code:   #f4f4f4;
  --color-border: #ddd;
}
```

The `--measure` variable — `66ch`, approximately 66 characters — enforces the line length principle from Chapter 2 directly in CSS. The `ch` unit equals the width of the `0` character in the current font, which makes it a reliable proxy for average character width.

**Web fonts** are loaded with `@font-face` for self-hosted fonts or `@import` for Google Fonts. Self-hosting is preferable for privacy (no third-party network request) and performance (no DNS lookup or connection overhead):

```css
@font-face {
  font-family: 'EB Garamond';
  src: url('fonts/EBGaramond-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EB Garamond';
  src: url('fonts/EBGaramond-Italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
```

`font-display: swap` instructs the browser to render text immediately in a fallback font while the web font loads, then swap in the web font when available. This prevents the *flash of invisible text* (FOIT) that occurs when text is hidden during font loading. The alternative value `font-display: optional` tells the browser to use the web font only if it loads quickly (within a short timeout) and otherwise use the fallback — a reasonable choice for non-essential display fonts.

For Google Fonts, the `@import` URL includes font-display control:

```css
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,
wght@0,400;0,500;1,400&family=Fira+Sans:wght@400;500&family=JetBrains+Mono&display=swap');
```

The `display=swap` parameter in the Google Fonts URL applies `font-display: swap` to all loaded faces.

**OpenType features** relevant to typography should be enabled explicitly:

```css
body {
  font-family: var(--font-body);
  font-size: var(--scale-base);
  line-height: var(--leading);
  color: var(--color-text);
  max-width: var(--measure);
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;

  /* Rendering quality */
  -webkit-font-smoothing: antialiased;
  font-kerning: normal;
  font-variant-ligatures: common-ligatures;
  font-feature-settings: "liga" 1, "kern" 1, "onum" 1;
  text-rendering: optimizeLegibility;

  /* Hyphenation */
  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
  overflow-wrap: break-word;
}
```

The `font-feature-settings` declaration enables common ligatures (`liga`), kerning (`kern`), and old-style figures (`onum`). The `onum` feature, where supported by the font, replaces lining figures with text figures that sit more naturally within lowercase text.

`hyphens: auto` enables automatic hyphenation using the browser's built-in hyphenation dictionary for the document's language (set via the `lang` attribute). Without hyphenation, justified text creates ugly word-spacing rivers and ragged-right text produces uneven rags. The `hyphenate-limit-chars` property prevents very short words or fragments from being hyphenated: `6 3 3` means only words of at least 6 characters can be hyphenated, with at least 3 characters before and 3 after the break.

**The heading scale** uses the sans-serif family for contrast with the body serif, creates a clear size hierarchy, and uses `margin-top` for vertical breathing room:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-text);
}

h1 { font-size: var(--scale-2xl); margin: 0 0 1rem; }
h2 { font-size: var(--scale-xl);  margin: 2.5rem 0 0.75rem; }
h3 { font-size: var(--scale-lg);  margin: 2rem 0 0.5rem; }
h4 { font-size: var(--scale-base); font-style: italic; margin: 1.5rem 0 0.25rem; }
```

**Paragraph spacing and indentation** choices depend on convention. The British and European convention uses paragraph spacing (a blank line between paragraphs, no first-line indent) for the first paragraph and after headings, and first-line indentation for subsequent paragraphs. This is typographically classical and works well for long-form text:

```css
p {
  margin: 0 0 0;
}

p + p {
  text-indent: 1.5em;
}

h1 + p, h2 + p, h3 + p, h4 + p,
blockquote + p, figure + p, .no-indent {
  text-indent: 0;
}
```

The simpler American convention uses paragraph spacing throughout with no indentation — more common in web design:

```css
p {
  margin: 0 0 1em;
}
```

Choose one and be consistent.

**Code blocks** deserve careful styling. The monospace typeface should harmonise with the body type in weight and colour; the background should be subtle:

```css
pre, code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  font-feature-settings: normal;
}

pre {
  background: var(--color-code);
  border-left: 3px solid var(--color-border);
  padding: 1rem 1.25rem;
  overflow-x: auto;
  line-height: 1.5;
}

code {
  background: var(--color-code);
  padding: 0.1em 0.3em;
  border-radius: 3px;
}

pre code {
  background: none;
  padding: 0;
}
```

The `font-feature-settings: normal` on code elements resets the OpenType features applied to the body — in particular, ligatures should be off in code, because `fi`, `fl`, and other ligatures in a programming context are confusing and wrong. Many monospace fonts used for code include programming ligatures (ligatures for `->`, `=>`, `!=`, and similar) enabled via their own feature tags; these are a matter of preference and should be enabled deliberately rather than inheriting from the body setting.

**Block quotations** are understated by default in most browsers. A typographically careful stylesheet sets them off with a vertical marker and appropriate indentation:

```css
blockquote {
  margin: 1.5rem 0;
  padding: 0 0 0 1.5rem;
  border-left: 3px solid var(--color-border);
  color: var(--color-muted);
  font-style: italic;
}

blockquote p {
  text-indent: 0;
}
```

**Responsive adjustments** ensure the document reads well on small screens. The measure (line length) is inherently responsive because it is set in `ch` units — as the font size changes, the measure changes proportionally. However, padding and font sizes may need explicit adjustment:

```css
@media (max-width: 640px) {
  html { font-size: 16px; }
  body { padding: 1rem; }
  h1   { font-size: 2rem; }
}
```

**Print styles** for HTML documents that may be printed deserve their own `@media print` block. This is where the web and print traditions converge: you can provide a reasonable printed version of an HTML document without a separate PDF workflow:

```css
@media print {
  html { font-size: 11pt; }

  body {
    max-width: none;
    margin: 0;
    padding: 0;
    color: black;
  }

  a { color: black; text-decoration: none; }
  a[href^="http"]:after { content: " (" attr(href) ")"; font-size: 0.8em; }

  h2, h3 { page-break-after: avoid; }
  p, li  { orphans: 3; widows: 3; }

  pre { white-space: pre-wrap; page-break-inside: avoid; }
}
```

The `a[href^="http"]:after` rule prints the URL after each external link — useful for readers who print a document and need to follow a reference.


## Syntax highlighting

Pandoc performs syntax highlighting for fenced code blocks at conversion time, producing HTML with `<span>` elements wrapping each token type. Each span carries a class name corresponding to the token category — keywords, strings, comments, operators, and so on — and a stylesheet provides the colours.

The built-in highlight styles are embedded directly in the output HTML as inline `<style>` rules when `--standalone` is used. To use a highlight style with an external CSS file instead — which avoids duplicating the highlighting rules across multiple pages — export the style to JSON, convert it to CSS, and reference it as a stylesheet:

```sh
# Export the built-in pygments style as JSON
pandoc --print-highlight-style=pygments > pygments.json

# Use a custom highlight theme from JSON
pandoc input.md -t html --standalone \
  --highlight-style=pygments.json \
  --no-highlight ...
```

Alternatively, suppress Pandoc's highlighting entirely with `--no-highlight` and apply your own CSS. When `--no-highlight` is used, code blocks are output as plain `<pre><code class="language-python">` elements — the same structure used by popular standalone JavaScript highlighting libraries like highlight.js and Prism.js, which can be loaded via a `<script>` tag:

```html
<!-- In your custom HTML template or --include-in-header file -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
```

The advantage of client-side highlighting is that it supports more languages and more styles than Pandoc's built-in system. The disadvantage is a dependency on JavaScript and a flash of unstyled code during load. For documentation intended to be read online, either approach works; for documents that must degrade gracefully without JavaScript, Pandoc's built-in server-side highlighting is preferable.

For print-oriented documents where colour highlighting is inappropriate (and which may be printed in greyscale), use the `monochrome` highlight style, which distinguishes token types by weight and style rather than colour:

```sh
pandoc input.md -o output.html --highlight-style=monochrome
```


## Tables of contents

A table of contents in Pandoc HTML output is a `<nav>` element with `role="doc-toc"` containing a nested unordered list of links to each heading:

```sh
pandoc input.md -t html --standalone --toc --toc-depth=3 -o output.html
```

By default, the TOC appears immediately before the document body. Its position can be controlled via a custom template — you might want it in a sidebar, in a fixed navigation panel, or at the end of the page for short documents. The default template places it after the title block and before the first heading.

The TOC is inserted at the `$table-of-contents$` variable in the template. To move it to a sidebar in a custom template:

```html
<div class="layout">
  <aside class="sidebar">
    $if(toc)$
    <nav id="TOC" role="doc-toc">
      $if(toc-title)$<h2>$toc-title$</h2>$endif$
      $table-of-contents$
    </nav>
    $endif$
  </aside>
  <main>$body$</main>
</div>
```

The CSS for a fixed sidebar that remains visible while scrolling:

```css
.layout {
  display: flex;
  gap: 3rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
}

.sidebar {
  width: 16rem;
  flex-shrink: 0;
}

.sidebar nav {
  position: sticky;
  top: 2rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  line-height: 1.5;
}

.sidebar nav a {
  color: var(--color-muted);
  text-decoration: none;
  display: block;
  padding: 0.15rem 0;
}

.sidebar nav a:hover { color: var(--color-text); }

main {
  flex: 1;
  min-width: 0; /* prevents flex blowout */
  max-width: var(--measure);
}
```

Active section highlighting — where the TOC entry for the currently visible section is highlighted as the reader scrolls — requires a small amount of JavaScript using the Intersection Observer API. This is beyond Pandoc's concern but worth adding to any template intended for long-form documentation:

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`nav a[href="#${id}"]`);
    if (!link) return;
    link.classList.toggle('active', entry.isIntersecting);
  });
}, { rootMargin: '0px 0px -80% 0px' });

document.querySelectorAll('h1[id], h2[id], h3[id]')
  .forEach(h => observer.observe(h));
```

The `rootMargin` of `-80%` on the bottom means a heading is considered "active" only when it is in the top 20% of the viewport — which typically corresponds to the heading the reader has most recently scrolled past.


## Single-file vs multi-page documents

The default Pandoc HTML output is a single file. For most documents — articles, reports, short books — a single file is the right choice: it is simple to deploy, simple to share, and simple to archive.

For long documents — books, documentation sites, multi-chapter references — multi-page output has practical advantages: individual pages load faster, readers can link directly to chapters, and search engine indexing works better when content is divided into semantically coherent units.

**Self-contained single files** embed all CSS, JavaScript, and images in the HTML file as base64 data URIs, producing a document that requires no external files and can be emailed or archived as a single attachment. The `--embed-resources` flag (combined with `--standalone`) achieves this:

```sh
pandoc input.md -t html --standalone --embed-resources -o output.html
```

The resulting file can be large — a document with several images may be several megabytes — but it is genuinely self-contained. This is the right format for document delivery: sending a draft to a colleague, archiving a final version, or distributing documentation that must remain intact when its directory structure changes.

**Multi-page output with `chunkedhtml`** is Pandoc's built-in multi-page format, introduced in Pandoc 2.17. It splits the document into one HTML file per top-level section and produces a directory containing all generated files plus a `sitemap.json` index:

```sh
pandoc input.md -t chunkedhtml -o output-directory/
```

The output directory is created by Pandoc; it must not already exist. The generated files follow the naming pattern `1-section-title.html`, `2-next-section.html`, with an `index.html` landing page. Each file contains previous/next navigation links in a `<nav id="sitenav">` element.

The `--split-level` option controls which heading level triggers a page split. The default is 1 (split at every `<h1>`). For a book with parts and chapters, split at level 2 to produce one page per chapter:

```sh
pandoc input.md -t chunkedhtml --split-level=2 -o output-directory/
```

The `chunkedhtml` format is suitable for documentation sites and books where the content will be served from a web server. For static site generators — Hugo, Jekyll, Eleventy — you will typically generate individual HTML fragments (without `--standalone`) and wrap them in the generator's own templates, or generate full pages and extract the body content. The right approach depends on the static site generator.

**Separate compilation** — building each chapter as its own HTML file from a separate Markdown source file — gives maximum control over the output and is the approach most compatible with static site generators:

```sh
for f in chapters/*.md; do
  name=$(basename "$f" .md)
  pandoc "$f" \
    --defaults=html-defaults.yaml \
    --template=chapter-template.html \
    -o "site/${name}.html"
done
```

In this pattern, each chapter is a standalone HTML page. Navigation between chapters must be handled by the template — typically by reading a JSON sitemap generated separately, or by hardcoding previous/next links in a per-chapter metadata block.

A practical hybrid: generate a single HTML file for local previewing and proofreading (fast, no server required) and a `chunkedhtml` directory for web deployment. A simple `Makefile` target handles both:

```makefile
CHAPTERS = chapters/01-history.md chapters/02-fundamentals.md ...
DEFAULTS = defaults/html.yaml

preview: output/preview.html
deploy:  output/site/

output/preview.html: $(CHAPTERS)
	pandoc --defaults=$(DEFAULTS) --embed-resources --standalone \
	  $(CHAPTERS) -o $@

output/site/: $(CHAPTERS)
	rm -rf $@
	pandoc --defaults=$(DEFAULTS) -t chunkedhtml \
	  $(CHAPTERS) -o $@
```

---

HTML output from Pandoc is as good as the CSS you bring to it. The default styles are minimal by design — they solve the must-fix problems (line length, hyphenation, kerning, print styles) and leave everything else open. The stylesheet built in this chapter is a solid starting point for any technical document; refine it according to the visual language appropriate to your content and audience.

Chapter 8 turns to the other major output format: print-ready PDF.
