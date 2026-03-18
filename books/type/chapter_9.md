# EPUB and Ebooks

The ebook is not a digital facsimile of a printed book. It is a different object, with different assumptions about the reading environment. A printed book exists on a fixed canvas — the designer knows the page dimensions, the line length, the typeface, the point size. An ebook exists on a variable canvas that the reader controls: they can change the font, the size, the margins, the background colour, the line spacing. On some devices, they can switch between landscape and portrait orientation. On a phone, the screen may be 320 pixels wide; on a large tablet, 1200 pixels.

The format that embodies these assumptions is EPUB, the open standard for reflowable ebooks. Understanding what EPUB is, how it is structured, and what its constraints mean for typographic decisions is the subject of this chapter. Pandoc produces EPUB output from the same Markdown source used for HTML and PDF — often with minimal additional configuration — but doing so well requires understanding the format's architecture.


## What EPUB is

EPUB is a container format: a ZIP archive with a specific internal structure that a reading system (an ebook reader application or device) knows how to unpack and render. The archive contains XHTML files for the document content, a CSS stylesheet, a manifest listing all the files, a navigation document, and a package document that ties everything together.

Unzip any EPUB and you will find a structure like this:

```
mimetype                          ← must be first file, uncompressed
META-INF/
  container.xml                   ← points to the package document
  com.apple.ibooks.display-options.xml
EPUB/
  content.opf                     ← package document: manifest + spine
  nav.xhtml                       ← navigation document (EPUB 3)
  toc.ncx                         ← navigation document (EPUB 2, for compatibility)
  styles/
    stylesheet1.css
  text/
    title_page.xhtml
    ch001.xhtml
    ch002.xhtml
```

The `mimetype` file must contain exactly the string `application/epub+zip` and must be the first file in the archive, stored without compression — this allows reading systems to identify the format by inspecting the first bytes of the file, without fully decompressing it.

The `content.opf` *package document* is the EPUB's manifest and reading order. It lists every file in the publication (in the `<manifest>` element) and specifies the order in which content files should be presented (in the `<spine>` element). A reading system that does not know what else to do with an EPUB can at minimum present the spine items in order.

The `nav.xhtml` *navigation document* is an XHTML file containing the table of contents as a nested `<ol>` structure, marked up with `epub:type="toc"`. It is both machine-readable (reading systems use it to populate their navigation panels) and human-readable (it can be presented as a visible table of contents in the document body). The older `toc.ncx` format serves the same purpose for EPUB 2-compatible reading systems; Pandoc generates both.

The content files are XHTML — HTML written to the more strict XML syntax rules. Every element must be properly closed, every attribute must be quoted, and the document must be well-formed XML. Pandoc's EPUB output satisfies these requirements automatically; if you inject raw HTML into your document via Pandoc's `--include-*` flags or `header-includes`, ensure it is valid XHTML.

Pandoc generates EPUB 3 by default (`-t epub` or `-t epub3`), with EPUB 2 compatibility maintained through the `toc.ncx` file. EPUB 2 output can be requested with `-t epub2`, but there are few reasons to do so: EPUB 2 is a 2007 standard superseded by EPUB 3 in 2011, and all current ebook reading software supports EPUB 3. EPUB 2 output may be necessary only when targeting legacy devices or legacy distribution platforms.


## Generating EPUB with Pandoc

The basic EPUB command is:

```sh
pandoc input.md -o output.epub
```

Pandoc infers EPUB output from the `.epub` extension. The full set of EPUB-specific options appears in the defaults below, which constitute a solid starting point for any EPUB project:

```yaml
# epub-defaults.yaml
from: markdown
to: epub3
split-level: 1
toc: true
toc-depth: 2
epub-title-page: true
metadata:
  lang: en-GB
  toc-title: "Contents"
```

Apply with:

```sh
pandoc --defaults=epub-defaults.yaml \
  metadata.yaml \
  chapters/*.md \
  -o output.epub
```

**`--split-level`** determines which heading level triggers a new content file. The default is 1: each `<h1>` heading begins a new XHTML file. For a book structured with parts (`<h1>`) and chapters (`<h2>`), use `--split-level=2` to create one file per chapter. Smaller content files improve navigation performance on some reading systems and are consistent with best practice for long documents.

**`--epub-title-page`** (true by default) generates an automatic title page from the document metadata. Set to false if you want to supply your own:

```sh
pandoc --epub-title-page=false ...
```

**`--epub-metadata`** accepts an XML file containing additional Dublin Core metadata elements that extend the YAML front matter. This is the path to setting metadata that Pandoc's YAML variables do not expose — series information, ISBNs, subject classifications, and accessibility metadata:

```xml
<!-- epub-metadata.xml -->
<dc:subject xmlns:dc="http://purl.org/dc/elements/1.1/">Typography</dc:subject>
<dc:subject xmlns:dc="http://purl.org/dc/elements/1.1/">Command-line tools</dc:subject>
<dc:rights xmlns:dc="http://purl.org/dc/elements/1.1/">
  Copyright 2024 A. N. Author. All rights reserved.
</dc:rights>
<dc:publisher xmlns:dc="http://purl.org/dc/elements/1.1/">Self-Published</dc:publisher>
<meta xmlns="http://www.idpf.org/2007/opf"
      property="belongs-to-collection" id="c01">The CLI Series</meta>
<meta xmlns="http://www.idpf.org/2007/opf"
      refines="#c01" property="collection-type">series</meta>
<meta xmlns="http://www.idpf.org/2007/opf"
      refines="#c01" property="group-position">1</meta>
```

```sh
pandoc input.md --epub-metadata=epub-metadata.xml -o output.epub
```

**`--epub-cover-image`** specifies a cover image. The image should be a JPEG or PNG, at minimum 1400×2100 pixels at 72 dpi (JPEG is preferred for photographs; PNG for graphics with flat colour). The cover image is displayed by reading systems as the book's visual identifier — on shelves, in libraries, in search results. A missing or poor-quality cover image significantly affects how the book presents in distribution catalogues:

```sh
pandoc input.md --epub-cover-image=cover.jpg -o output.epub
```

The cover image is listed in the manifest with the property `cover-image`, which signals to reading systems that it should be used as the visual cover. Pandoc also generates a cover page XHTML file that displays the image full-screen.


## EPUB metadata

EPUB metadata is richer than PDF metadata and is used actively by reading systems, library software, and distribution platforms. Getting it right matters more than it might appear.

The essential fields, set in the YAML front matter:

```yaml
title: "The CLI Typographer"
subtitle: "Typography and Typesetting from the Command Line"
author: "A. N. Author"
date: "2024"
lang: en-GB
description: >
  A practical guide to producing high-quality documents
  using command-line tools, covering Pandoc, LaTeX, Typst,
  and the fundamentals of typography.
publisher: "Self-Published"
rights: "Copyright 2024 A. N. Author. All rights reserved."
```

The `lang` field is particularly important — it tells reading systems which language rules to apply for hyphenation, text-to-speech pronunciation, and other language-sensitive processing. Use a BCP 47 language tag: `en` for English (generic), `en-GB` for British English, `en-US` for American English, `de` for German, `fr` for French.

The `description` field is the book's blurb — it appears in the EPUB's metadata and is used by reading systems and distribution platforms that display descriptions. Write it as you would a back-cover description: a few sentences that convey what the book covers and why the reader should read it.

The `rights` field should contain a copyright statement. For published works, this is typically "Copyright [year] [holder]. All rights reserved." For open-licensed works, it should state the licence: "This work is licensed under a Creative Commons Attribution 4.0 International Licence."

The `date` field should ideally be an ISO 8601 date (2024-03-15) rather than a year alone, as some reading systems use it for sorting. Pandoc accepts either form.


## CSS for EPUB

EPUB CSS is HTML CSS, with two significant constraints. First, the reading system controls many properties — it may override your font choices (readers routinely set their own preferred typeface), your font sizes, your line spacing, and your colours (night mode typically inverts the colour scheme). Second, support for CSS properties varies between reading systems; a property that works in every browser may not work in older Kindle firmware or on Sony Reader hardware.

The practical approach is to style what reading systems will not override, be conservative about what you assume the CSS engine supports, and test on representative hardware.

**Font stacks** should use system fonts as primary choices, with no web fonts loaded from external servers (network requests are often disabled in reading systems). If embedding web fonts, they must be included in the EPUB file itself:

```css
body {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1em;      /* never px for body text in EPUB */
  line-height: 1.6;
  color: #1a1a1a;
}
```

Using `em` units for font sizes is essential. Reading systems allow the user to adjust the base font size; if you set sizes in `px`, your relative size hierarchy breaks when the user scales the text. Sizes in `em` or `rem` scale correctly.

**Page breaks** in EPUB are controlled by CSS properties that tell the reading system where to force a new screen/page:

```css
h1 {
  page-break-before: always;   /* start new page before each chapter */
}

h2 {
  page-break-after: avoid;     /* try not to break immediately after a heading */
}

p {
  widows: 2;
  orphans: 2;
}
```

The `page-break-before: always` on `<h1>` is the most universally important rule for ebooks: it ensures each chapter begins on a new screen rather than running on from the end of the previous chapter. Pandoc's default EPUB stylesheet includes this rule.

**First-paragraph indentation** in ebooks follows the same convention as print: the first paragraph after a heading has no indent; subsequent paragraphs within a section use a text indent. Some reading systems will fight you on this — particularly Kindle — but the CSS is correct even if it is not universally respected:

```css
p {
  margin: 0;
  text-indent: 1.5em;
}

h1 + p, h2 + p, h3 + p, blockquote + p {
  text-indent: 0;
}
```

**Do not set explicit margins on the body element** in EPUB CSS. Reading systems control the page margins through their own settings; overriding them forces your margins on the reader regardless of their preferences. Apply margins only to specific elements that need them within the content area (block quotations, code blocks, figures) rather than to the overall page.

**Code blocks** in technical EPUBs need careful treatment. Long lines do not reflow in `<pre>` elements — they overflow horizontally. The modern fix:

```css
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.85em;
  line-height: 1.4;
}
```

`white-space: pre-wrap` preserves whitespace and line breaks but allows lines to wrap at the container edge. `word-wrap: break-word` allows wrapping within long tokens (long command names, URLs). This is an imperfect solution — wrapped code is harder to read than formatted code — but it is better than horizontal overflow, which requires the reader to scroll sideways.

Pandoc's default EPUB stylesheet includes this fix as a workaround targeting Apple Books: `@media screen { .sourceCode { overflow: visible !important; white-space: pre-wrap !important; } }`.

**Embedding fonts** into an EPUB makes it larger but ensures the reading system can use your chosen typeface rather than substituting its default. Font embedding is appropriate when the typeface is integral to the design — a carefully chosen reading typeface, or a monospace font for a technical book where the code appearance matters. Use `--epub-embed-font` to include font files in the EPUB:

```sh
pandoc input.md \
  --epub-embed-font=/path/to/EBGaramond-Regular.ttf \
  --epub-embed-font=/path/to/EBGaramond-Italic.ttf \
  --epub-embed-font=/path/to/EBGaramond-Bold.ttf \
  -o output.epub
```

The fonts are copied into an `EPUB/fonts/` directory inside the archive and listed in the manifest. To activate them, reference them via `@font-face` in your CSS:

```css
@font-face {
  font-family: "EB Garamond";
  src: url("../fonts/EBGaramond-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "EB Garamond";
  src: url("../fonts/EBGaramond-Italic.ttf");
  font-weight: normal;
  font-style: italic;
}

body {
  font-family: "EB Garamond", Georgia, serif;
}
```

The `META-INF/com.apple.ibooks.display-options.xml` file that Pandoc automatically generates contains `<option name="specified-fonts">true</option>`, which tells Apple Books to honour the embedded fonts rather than substituting its own. Other reading systems have their own mechanisms; Kindle, in particular, requires the `obfuscation` flag on embedded fonts (more on this below).

Note that embedding fonts increases file size considerably: a typical TTF font file is 200–400KB, and a book with four weights of a typeface can add 1–2MB to the EPUB. For most books this is acceptable. For very large books with already substantial image content, consider using WOFF2 format instead, which is significantly more compressed.


## Validation with epubcheck

Before distributing an EPUB — to a retailer, a library platform, or directly to readers — it should be validated with EPUBCheck, the reference EPUB validator maintained by the W3C. EPUBCheck checks conformance with the EPUB 3 specification and reports errors (which will likely cause problems in reading systems) and warnings (which may cause problems in some reading systems).

EPUBCheck is a Java application distributed as a JAR file. Download it from the EPUBCheck releases page on GitHub:

```sh
# Download EPUBCheck
curl -L https://github.com/w3c/epubcheck/releases/latest/download/epubcheck.zip \
  -o epubcheck.zip
unzip epubcheck.zip

# Validate an EPUB
java -jar epubcheck/epubcheck.jar output.epub
```

A valid EPUB produces output like:

```
Epubcheck Version 5.1.0

Validating using EPUB version 3.3 rules.
No errors or warnings detected.
Messages: 0 fatals / 0 errors / 0 warnings / 0 infos

EPUBCheck completed
```

Common validation errors from Pandoc-generated EPUBs that need manual correction:

**Missing or malformed cover image**: If `--epub-cover-image` was specified but the image file is missing or is not a supported format, EPUBCheck reports a manifest error. Verify the image path and format.

**Raw HTML in content**: If you have injected raw HTML via `header-includes` or fenced divs that pass through to HTML, EPUBCheck may report it as malformed XHTML. Ensure all injected HTML is valid XML (closed tags, quoted attributes, no `&` outside of entities).

**Undefined `epub:type` values**: If you have manually added `epub:type` attributes to elements, EPUBCheck validates that the values are from the EPUB Structural Semantics Vocabulary. Use only defined values.

**Missing language**: EPUBCheck warns if no language is set. Always include `lang:` in the YAML front matter.

Pandoc's EPUB output is generally EPUBCheck-clean for standard documents. Errors typically arise from custom templates, injected raw HTML, or cover images with incorrect dimensions or formats.


## Reflowable versus fixed-layout EPUB

Every EPUB discussed so far is *reflowable*: the content flows to fit the reading surface, and the reader controls the presentation. This is the correct format for prose — novels, non-fiction, technical books, anything where the text is the primary content and layout is secondary.

*Fixed-layout* EPUB is a different beast. Each page is a fixed-size canvas, and the content does not reflow. Text, images, and graphic elements are positioned precisely, and the reading system displays them at that size (possibly with pan and zoom on small screens). Fixed-layout EPUB is appropriate for content where the layout is integral to the work: picture books, comic books, cookbooks with complex two-page spreads, art books, textbooks with tightly integrated figures and text.

Fixed-layout EPUB requires a different authoring approach. Pandoc does not produce fixed-layout EPUB — it is inherently a reflowable tool. Fixed-layout EPUB is typically produced from InDesign, from a purpose-built fixed-layout ebook tool, or by hand-crafting the XHTML with precise CSS positioning. For the CLI typographer, producing fixed-layout EPUB from Markdown is not a realistic workflow; produce a print-ready PDF instead, and consider fixed-layout EPUB only if a reading-system-specific distribution requirement demands it.


## Kindle and distribution formats

Amazon's Kindle format is the dominant ebook format for commercial sales. It has gone through several generations: MOBI/PRC (the original format), KF7 (Kindle Format 7, the AZW format on older devices), KF8 (Kindle Format 8, supporting EPUB-like CSS), and KFX (the current format used by Kindle Scribe and high-end devices). All of these are proprietary Amazon formats.

The practical path for producing Kindle content from Pandoc is to produce a clean EPUB 3 and convert it using Calibre's `ebook-convert` command-line tool:

```sh
# Convert EPUB to MOBI (Kindle older format)
ebook-convert output.epub output.mobi

# Convert EPUB to AZW3 (Kindle newer format)
ebook-convert output.epub output.azw3

# With metadata options
ebook-convert output.epub output.azw3 \
  --output-profile kindle_pw3 \
  --embed-all-fonts \
  --subset-embedded-fonts
```

Amazon's Kindle Direct Publishing (KDP) platform, the primary channel for self-publishing Kindle books, now accepts EPUB 3 directly and converts it internally. Submitting a well-formed, validated EPUB 3 to KDP is the preferred workflow — it lets Amazon's conversion pipeline optimise for the target device rather than using a double-conversion via Calibre.

If submitting directly as EPUB to KDP, note Amazon's specific requirements that differ from the general EPUB 3 specification:

**Font obfuscation** is required for embedded fonts in Kindle content submitted to KDP. Obfuscation is a simple XOR encoding applied to the first 1040 bytes of the font file, using the EPUB's unique identifier as the key. The purpose is to prevent casual extraction of the embedded font by someone who unzips the EPUB. Calibre's `ebook-convert` handles obfuscation automatically; if preparing the EPUB by hand, the EPUB obfuscation algorithm is specified in the EPUB 3 standard.

**Image requirements**: Kindle requires that the cover image be at least 1000×625 pixels (portrait orientation preferred) and recommends 2560×1600 for high-DPI displays. Images within the content should be no larger than 5MB each; very large images should be downscaled.

**Table of contents**: Kindle requires a navigable table of contents. Pandoc generates both the EPUB 3 `nav.xhtml` and the EPUB 2 `toc.ncx`, both of which KDP accepts.

**Apple Books** (the Apple distribution platform) accepts EPUB 3 directly and has excellent EPUB 3 support. Apple's distribution tool, Transporter (or the Books app for self-publishing), validates the EPUB against its own requirements before acceptance. The `com.apple.ibooks.display-options.xml` file that Pandoc generates is specific to Apple Books and enables embedded font support in the Apple Books reading experience.

**Draft2Digital, Smashwords, and Ingram** are the main aggregator platforms that distribute to retailers other than Amazon. All accept EPUB 3. Draft2Digital converts EPUB to the various retailer-specific formats automatically; supplying a clean, validated EPUB 3 is sufficient.


## A practical EPUB build command

Combining the elements above, here is a complete production EPUB build:

```sh
pandoc \
  --defaults=epub-defaults.yaml \
  --epub-cover-image=assets/cover.jpg \
  --epub-metadata=epub-metadata.xml \
  --epub-embed-font=fonts/EBGaramond-Regular.ttf \
  --epub-embed-font=fonts/EBGaramond-Italic.ttf \
  --epub-embed-font=fonts/EBGaramond-Bold.ttf \
  --epub-embed-font=fonts/JetBrainsMono-Regular.ttf \
  --css=styles/epub.css \
  metadata.yaml \
  chapters/*.md \
  -o build/output.epub

# Validate
java -jar tools/epubcheck.jar build/output.epub

# Convert for Kindle
ebook-convert build/output.epub build/output.azw3 \
  --output-profile kindle_pw3
```

Where `epub-defaults.yaml` contains:

```yaml
from: markdown
to: epub3
split-level: 1
toc: true
toc-depth: 2
filter:
  - pandoc-crossref
citeproc: true
highlight-style: monochrome
metadata:
  lang: en-GB
  toc-title: "Contents"
  epub-title-page: true
```

The `monochrome` highlight style is appropriate for ebooks because coloured syntax highlighting renders poorly in greyscale (the default on e-ink devices) and may be invisible in night mode on LCD devices.

---

EPUB, PDF, and HTML from the same Markdown source — the three outputs cover the range of how documents are distributed and read. The next chapter builds the automation layer that makes producing all three efficiently from a single build command practical and reliable.
