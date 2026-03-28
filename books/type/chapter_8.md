# Generating Print-Ready PDFs

A PDF intended for professional printing is not simply a PDF that opens in a viewer. It is a document that meets a precise set of technical requirements: fonts fully embedded, colour values in the correct space, bleed and crop marks in position, image resolution adequate for the output dpi, no encryption, no transparency that the RIP cannot process. A PDF that looks perfect on screen but violates any of these requirements may produce unacceptable output on press — or be rejected by the printer outright before it reaches the machine.

This chapter covers the complete pipeline from Markdown source to a PDF you can hand to a printer with confidence: the Typst-backed path, the web-engine path via wkhtmltopdf or WeasyPrint, and the LaTeX path when a legacy class or package stack is unavoidable. It also covers page geometry and margins, headers and footers, font embedding, colour management, and the preflight checks that verify a file is press-ready.

For documents that will be read on screen rather than printed — reports distributed as PDFs, ebooks in PDF format, technical documentation — many of the print-specific requirements (bleed, CMYK, crop marks) do not apply, but font embedding, metadata, and internal link behaviour remain important. The chapter covers both cases.


## The three PDF pipelines

Pandoc and Quarto can produce PDF through three fundamentally different routes, each with different strengths.

The **Typst pipeline** converts Markdown to Typst and lets Typst produce the PDF. For many print-oriented projects this is now the cleanest default: it preserves the Markdown-first authoring model, produces strong PDF output, and avoids pushing the author into TeX macro programming. This is the first route to try for books, reports, and other documents that need deliberate page design without inheriting a full LaTeX stack.

The **LaTeX pipeline** converts Markdown to LaTeX and invokes a TeX engine (pdfLaTeX, XeLaTeX, or LuaLaTeX) to produce the PDF. The TeX engine handles all typesetting: paragraph composition, line breaking, hyphenation, spacing, page layout, footnotes, and everything else. This pipeline remains valuable when a publisher supplies a class file, when specific packages are required, or when an existing house style is already encoded in LaTeX.

The **web-engine pipeline** converts Markdown to HTML and invokes wkhtmltopdf (or WeasyPrint) to render the HTML page and produce a PDF. The output looks like a browser rendering printed to PDF — which may be exactly what you want if your document is primarily styled in CSS and the visual design is driven by web conventions. This pipeline suits documents that have more in common with web pages than with typeset books: marketing materials, dashboards, browser-rendered reports.

The practical consequence is that these pipelines cannot be mixed casually. You cannot apply TeX's paragraph optimisation to a CSS-styled document, and you cannot apply CSS flexbox layout to a LaTeX document. Choose the pipeline that suits the document type, and apply the appropriate tools within it. In a modern workflow, that usually means Markdown source first, Typst for print-first PDF by default, web-engine PDF when CSS is the real design language, and LaTeX only when its ecosystem is specifically needed.


## Page geometry in print-oriented PDF workflows

Every serious print workflow must control the physical dimensions of the page: size, margins, header and footer space, binding offset, and the relationship between the text area and the page boundaries. In Markdown-first projects, these values belong in metadata or a backend template, not scattered through the manuscript source.

When the backend is LaTeX, the `geometry` package controls these dimensions.

In Pandoc, geometry is configured via the `geometry` metadata variable, which is passed directly to the `geometry` package:

```yaml
geometry: "a4paper, margin=25mm"
```

For more precise control, specify dimensions individually:

```yaml
geometry: >
  a4paper,
  top=30mm,
  bottom=25mm,
  left=30mm,
  right=25mm
```

For two-sided documents (books, long reports intended for duplex printing), the `twoside` option and `bindingoffset` produce correct inner margins:

```yaml
documentclass: book
classoption:
  - 12pt
  - twoside
  - openright
geometry: >
  a4paper,
  top=30mm,
  bottom=25mm,
  outer=25mm,
  inner=30mm,
  bindingoffset=10mm
```

In a two-sided layout, `inner` is the gutter margin (the edge closest to the spine) and `outer` is the fore-edge margin. The `bindingoffset` adds extra space to the inner margin to account for the binding itself — the amount depends on the binding type and number of pages, but 10–12mm is a typical starting point for perfect binding. The `openright` class option forces each chapter to begin on a right-hand (recto) page, which is standard for professionally typeset books.

**Standard page sizes** are specified by name in the geometry options. The most common are `a4paper` (210×297mm, the ISO standard used in most of the world), `letterpaper` (8.5×11in, the US standard), `a5paper` (148×210mm, common for smaller books and pamphlets), and `b5paper` (176×250mm, used for some academic publishers' formats). For custom sizes:

```yaml
geometry: "paperwidth=170mm, paperheight=240mm, margin=20mm"
```

The text area — the region of the page that contains body text — is determined by subtracting the margins from the page dimensions. For an A4 page with 25mm margins on all sides, the text area is 160×247mm. For a book with the margins above, it will be smaller. The typographic principle from Chapter 2 applies: the text area should produce a line length of approximately 65–75 characters for comfortable reading. Verify the actual character count with a sample paragraph before finalising the geometry.

**The `showframe` option** in the geometry package draws visible boxes around the text area, header, footer, and margin notes — essential for checking that your geometry is correct before the document goes to production:

```yaml
geometry: "a4paper, margin=25mm, showframe"
```

Remove `showframe` before the final build.


## Headers and footers

Pandoc's default output is intentionally plain. For most professional documents, a custom header or footer is appropriate. In Typst or HTML-based workflows, this belongs in the backend template or stylesheet. In LaTeX, Pandoc's default output uses the `plain` page style, which provides a page number at the bottom centre and nothing else.

The `fancyhdr` package is the standard tool for this. It is configured in the `header-includes` metadata field, which inserts LaTeX commands into the document preamble:

```yaml
header-includes: |
  \usepackage{fancyhdr}
  \pagestyle{fancy}
  \fancyhf{}
  \fancyhead[LE,RO]{\thepage}
  \fancyhead[LO]{\itshape\nouppercase{\rightmark}}
  \fancyhead[RE]{\itshape\nouppercase{\leftmark}}
  \renewcommand{\headrulewidth}{0.4pt}
  \renewcommand{\footrulewidth}{0pt}
```

The position codes are: `L` (left), `C` (centre), `R` (right), combined with `E` (even/verso pages) or `O` (odd/recto pages). For single-sided documents, omit the `E`/`O` suffix: `\fancyhead[L]`, `\fancyhead[R]`.

The `\leftmark` macro contains the current chapter title (for `book` class) or section title (for `article` class); `\rightmark` contains the current section or subsection title. `\nouppercase` prevents fancyhdr from uppercasing these — Pandoc generates headings in sentence case and the default fancyhdr uppercasing would be wrong.

For a document with a footer containing the title and page number:

```yaml
header-includes: |
  \usepackage{fancyhdr}
  \pagestyle{fancy}
  \fancyhf{}
  \fancyfoot[L]{\small\textit{The CLI Typographer}}
  \fancyfoot[R]{\small\thepage}
  \renewcommand{\headrulewidth}{0pt}
  \renewcommand{\footrulewidth}{0.4pt}
```

**The first page** of a chapter or document typically uses a different style — no header, perhaps a different footer. The `plain` style, which applies to chapter-opening pages by default in the `book` class, can be customised separately:

```latex
\fancypagestyle{plain}{%
  \fancyhf{}
  \fancyfoot[C]{\small\thepage}
  \renewcommand{\headrulewidth}{0pt}
}
```

For the title page specifically, the `\thispagestyle{empty}` command suppresses headers and footers entirely. Pandoc applies this automatically to the title block in the `article` class. For `book` class documents where you want no header or footer on the half-title, title, or copyright pages, place `\thispagestyle{empty}` after those pages' content in the `header-includes` or in a custom template.


## Font embedding and verification

A PDF that will be professionally printed must have all fonts embedded. A font that is not embedded is identified by name in the PDF but not defined — the viewer or RIP substitutes a different font when it encounters the name, producing output that differs from the intended design.

In Typst, fonts used in the document are embedded in the generated PDF. In XeLaTeX and LuaLaTeX, all fonts loaded via `fontspec` are automatically embedded and subset in the PDF output. *Subsetting* means that only the glyphs actually used in the document are included in the embedded font data, which reduces file size substantially without affecting fidelity. This is the default and correct behaviour.

In pdfLaTeX, embedding depends on the font package used. Type 1 fonts from well-maintained packages are embedded by default; bitmap fonts (Type 3) from older installations may not be. To verify that all fonts in a PDF are properly embedded, use `pdffonts`:

```sh
pdffonts output.pdf
```

The output reports, for each font in the document: its name, type, encoding, and whether it is embedded (`emb`) and subsetted (`sub`). A print-ready PDF should show `yes` in both columns for every font:

```
name                         type       emb sub uni
---------------------------- ---------- --- --- ---
APTIGF+DejaVuSerif           CID TrueType yes yes yes
OCVPVM+DejaVuSerif-Bold      CID TrueType yes yes yes
GXKDWJ+DejaVuSansMono        CID TrueType yes yes yes
```

The random-looking prefix before the font name (`APTIGF+`, `OCVPVM+`) is a standard PDF convention indicating that the font is a subset — different documents using the same font will have different prefixes, which is correct behaviour.

If `pdffonts` shows `no` in the `emb` column for any font, that font is not embedded and the PDF is not suitable for professional printing. The fix depends on the engine and font:

- For pdfLaTeX with bitmap Type 3 fonts: install `lmodern` or use a properly packaged Type 1 font. Bitmap fonts appear when LaTeX falls back to Computer Modern bitmap fonts because the scalable (Type 1 or OTF) version is not installed.
- For pdfLaTeX with Type 1 fonts showing `no`: the font's map file may not be properly configured. Run `updmap-sys --enable Map=fontname.map` with the appropriate map file name.
- For XeLaTeX: this should not occur with `fontspec`-loaded fonts. If it does, the font file itself may have embedding restrictions set by the foundry — this is legal information in the font's OS/2 table and XeLaTeX respects it.

The `pdfinfo` tool provides document-level metadata — useful for verifying that the title, author, and other metadata fields were correctly written:

```sh
pdfinfo output.pdf
```

```
Title:    The CLI Typographer
Author:   A. N. Author
Subject:  Typography and document production
Keywords: typography, CLI, pandoc, Typst
Creator:  Pandoc
Producer: xdvipdfmx (20220710)
Pages:    247
Page size: 595.28 x 841.89 pts (A4)
PDF version: 1.5
```

Pandoc writes the `title`, `author`, `subject`, and `keywords` metadata to the PDF's document information dictionary through the selected PDF backend. These fields are populated from the YAML metadata block automatically.


## PDF metadata and links

Every print-ready PDF still needs correct metadata and predictable link behaviour. In LaTeX output, Pandoc handles this through `hyperref`, which adds navigational hyperlinks to the PDF (from citations to bibliography entries, from the table of contents to sections, from cross-references to their targets) and writes document metadata into the PDF information dictionary.

The most important `hyperref` options for print-ready PDF are controlled through Pandoc metadata variables:

```yaml
colorlinks: true       # colour links instead of boxing them
linkcolor: NavyBlue    # colour for internal links
urlcolor: NavyBlue     # colour for URL links
citecolor: black       # colour for citation links
```

For a PDF destined for print, link colouring should typically be disabled or set to black — coloured links are useful on screen but may appear as unexpected grey patches in greyscale print. Use:

```yaml
colorlinks: false
hidelinks: true
```

`hidelinks: true` removes both the colour and the bounding box that `hyperref` draws around links in its default `colorlinks: false` mode, producing links that are visually invisible but still functional in PDF viewers.

For screen-optimised PDF, coloured links improve navigation. A commonly used palette for professional documents uses `linkcolor: NavyBlue` for internal links and `urlcolor: Maroon` for external URLs — both colours are defined in the `xcolor` package's `dvipsnames` option set, which Pandoc's default template loads.

The `subject` and `keywords` fields in the YAML metadata are written to the PDF as document properties:

```yaml
subject: "A guide to CLI-based typesetting tools and typography"
keywords: [typography, CLI, Pandoc, Typst]
```

These fields are indexed by PDF readers' document search functions and may be used by document management systems. They are not shown in the document body — they are metadata only.


## Colour management for print

Print production uses CMYK colour (Chapter 3). Most PDF backends in this book produce RGB output by default, which is acceptable for office printing and screen-viewed PDFs but may not meet the requirements of a professional printing service — particularly for documents with coloured design elements, photographs, or backgrounds.

For documents with no colour beyond black text, this is not a concern: black in RGB (`#000000`) and black in CMYK (`0 0 0 100`) produce identical output, and the printer's workflow will handle the conversion transparently.

For documents with spot colour — a specific accent colour, a brand colour used for headings or rules — the correct approach is to define colours explicitly in CMYK values. The `xcolor` package supports CMYK colour specification:

```latex
\usepackage[cmyk]{xcolor}
\definecolor{brandblue}{cmyk}{0.85, 0.50, 0.00, 0.10}
```

In a Pandoc document, add this to `header-includes`:

```yaml
header-includes: |
  \usepackage[cmyk]{xcolor}
  \definecolor{accent}{cmyk}{0.85, 0.50, 0.00, 0.10}
```

The `colorspace` package provides more comprehensive CMYK support, including the ability to convert the entire PDF to CMYK output using a specified ICC profile:

```latex
\usepackage[cmyk, profiles]{colorspace}
```

For most Markdown-sourced documents, the practical approach is simpler: accept RGB output from Typst, LaTeX, or the web-engine pipeline, and if the printer requires CMYK, convert the final PDF using Ghostscript:

```sh
gs -dBATCH -dNOPAUSE -dNOPROMPT \
   -sDEVICE=pdfwrite \
   -sColorConversionStrategy=CMYK \
   -dProcessColorModel=/DeviceCMYK \
   -sOutputFile=output-cmyk.pdf \
   input-rgb.pdf
```

This Ghostscript command converts all RGB colours in the PDF to CMYK equivalents. The conversion is not always visually perfect — some saturated RGB colours cannot be reproduced in CMYK — but for documents where colour fidelity is not critical, it is a practical solution. For documents where colour fidelity matters (brand materials, photography-heavy publications), work with a proper colour management workflow from the start, with calibrated ICC profiles for both the input and the intended output device.


## Bleed and crop marks

Documents printed professionally on sheets larger than the final trimmed size require bleed — content extended beyond the intended trim edge — and crop marks that tell the cutting machine where to trim.

Bleed is typically 3mm on all sides (the printer may specify a different amount). The exact mechanism depends on the PDF backend. In LaTeX, use the `geometry` package with a slightly oversized page and the `includeheadfoot` option, combined with the `cropmarks` package or equivalent:

```yaml
geometry: >
  paperwidth=216mm,
  paperheight=303mm,
  top=33mm,
  bottom=28mm,
  left=28mm,
  right=28mm
header-includes: |
  \usepackage[a4,center,cam]{crop}
```

Here the paper size is set to A4 plus 3mm bleed on all sides (210+3+3=216mm wide, 297+3+3=303mm tall). The `crop` package adds camera registration marks (`cam`) and centres the content on the oversized sheet. The margins include the 3mm bleed.

For most documents distributed as PDF — reports, articles, academic papers, books with white backgrounds — bleed is not needed. It becomes relevant for documents with full-bleed design elements: coloured chapter openers, full-page images, ruled borders that run to the page edge. If your document has none of these, skip bleed entirely.

The `geometry` package's `showframe` option, used during development, visually confirms that content does not stray into the bleed zone. Only elements intended to bleed should extend past the trim marks.


## The wkhtmltopdf pipeline

wkhtmltopdf renders HTML to PDF using the WebKit browser engine. The quality of the result depends on the CSS applied to the source HTML. For well-styled documents, the output is clean and professional; for documents with complex layouts, it may require tuning.

The basic invocation through Pandoc:

```sh
pandoc input.md -o output.pdf --pdf-engine=wkhtmltopdf
```

Pandoc converts the Markdown to HTML, passes it to wkhtmltopdf, and the PDF is written. By default, the HTML uses Pandoc's default stylesheet; supply a custom CSS file to override it:

```sh
pandoc input.md -o output.pdf \
  --pdf-engine=wkhtmltopdf \
  --css=print.css
```

Margins, page size, and page numbers are controlled via `--pdf-engine-opt`, which passes options directly to wkhtmltopdf:

```sh
pandoc input.md -o output.pdf \
  --pdf-engine=wkhtmltopdf \
  --pdf-engine-opt="--page-size" --pdf-engine-opt="A4" \
  --pdf-engine-opt="--margin-top"    --pdf-engine-opt="25mm" \
  --pdf-engine-opt="--margin-bottom" --pdf-engine-opt="20mm" \
  --pdf-engine-opt="--margin-left"   --pdf-engine-opt="25mm" \
  --pdf-engine-opt="--margin-right"  --pdf-engine-opt="20mm"
```

For repeated use, these options belong in a defaults file:

```yaml
# wkhtmltopdf-defaults.yaml
from: markdown
to: pdf
pdf-engine: wkhtmltopdf
pdf-engine-opt:
  - --page-size
  - A4
  - --margin-top
  - 25mm
  - --margin-bottom
  - 20mm
  - --margin-left
  - 25mm
  - --margin-right
  - 20mm
  - --enable-local-file-access
```

The `--enable-local-file-access` flag is required when the document references local files (images, local CSS) — wkhtmltopdf blocks local file access by default as a security measure.

**Page numbers in wkhtmltopdf** are injected via a header or footer HTML file, not through CSS:

```sh
# Create a footer HTML file
cat > footer.html << 'EOF'
<!DOCTYPE html>
<html><body>
<div style="font-size: 10pt; text-align: center; width: 100%;">
  <span class="page"></span>
</div>
</body></html>
EOF

pandoc input.md -o output.pdf \
  --pdf-engine=wkhtmltopdf \
  --pdf-engine-opt="--footer-html" \
  --pdf-engine-opt="footer.html"
```

wkhtmltopdf replaces the class `page` with the current page number and `topage` with the total page count — useful for "Page 3 of 12" style footers.

**Font embedding in wkhtmltopdf** works through web fonts. Any font loaded via `@font-face` in the CSS is embedded in the PDF output. Use `font-display: swap` in the `@font-face` declaration and reference local WOFF2 files for reliable offline builds:

```css
@font-face {
  font-family: 'EB Garamond';
  src: url('fonts/EBGaramond-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

Verify font embedding in the output with `pdffonts`, as described earlier.


## Debugging backend-specific PDF failures

When PDF generation fails, diagnose the backend you actually chose. Typst failures are usually simpler and closer to the source. Web-engine failures are usually CSS or asset-path problems. LaTeX failures remain the most opaque, so they deserve special treatment here.

LaTeX errors are notoriously opaque. A missing closing brace five lines earlier produces an error on line 200; a package conflict manifests as an incomprehensible "dimension too large" message. Some practical strategies.

**Read the `.log` file.** When Pandoc reports "Error producing PDF," it often shows only the last few lines of the LaTeX log. The full log — written to a `.tex.log` file in a temporary directory, or obtainable by adding `--verbose` to the Pandoc invocation — contains the complete error context. Look for the first error (`! `) in the log, not the last.

**Generate intermediate LaTeX.** When debugging, stop Pandoc before the PDF stage and inspect the generated `.tex` file:

```sh
pandoc input.md -t latex -o output.tex
```

Open `output.tex` and compile it manually with your LaTeX engine, which gives better error context than Pandoc's one-line summary:

```sh
xelatex output.tex
# or with all error output visible:
xelatex -interaction=errorstopmode output.tex
```

**Common errors and their causes:**

A `! File 'X.sty' not found` error means a required package is not installed. Install it via your TeX distribution's package manager (`tlmgr install packagename` for TeX Live, `miktex-console` for MiKTeX).

A `! Undefined control sequence \X` error means either a package providing `\X` was not loaded, or there is a typo in a `header-includes` LaTeX command. Check the spelling and verify the package is included.

A `! LaTeX Error: Something's wrong--perhaps a missing \item` error in a list environment usually means a list was improperly terminated in the Markdown source — a common cause is a fenced code block inside a list item that was not properly indented.

`Overfull \hbox` warnings are not errors — they indicate a line that is slightly too wide for the column (extending into the margin). They are worth investigating in final output: a run of overfull boxes usually signals a long unbreakable word (a URL, a command name) that needs to be handled with `\allowbreak`, `\-` soft hyphen markers, or the `breakurl` package.

**Multiple compile passes.** Documents with a table of contents, cross-references, or a bibliography require LaTeX to be run more than once — the first run generates auxiliary files (`.aux`, `.toc`, `.bbl`) and the second run reads them to produce correct page numbers and references. Pandoc handles this automatically for simple cases, but complex documents with bibliography processing may need the compile sequence: LaTeX → BibTeX/Biber → LaTeX → LaTeX. The `latexmk` tool automates this:

```sh
# Generate intermediate .tex, then use latexmk
pandoc input.md -t latex -o output.tex
latexmk -xelatex -interaction=nonstopmode output.tex
```

`latexmk` runs the engine as many times as necessary to resolve all references and produces the final PDF.


## A complete print-ready PDF workflow

Combining the elements above, here is a complete Pandoc invocation for a print-ready PDF from Markdown. This example uses Typst as the default PDF backend; switch to LaTeX only when the print workflow requires LaTeX-specific templates or packages:

```sh
pandoc \
  --defaults=book-defaults.yaml \
  metadata.yaml \
  chapters/01-*.md \
  chapters/02-*.md \
  -o build/output.pdf
```

Where `book-defaults.yaml` contains:

```yaml
from: markdown
to: pdf
pdf-engine: typst
filter:
  - pandoc-crossref
citeproc: true
number-sections: true
toc: true
toc-depth: 2
highlight-style: monochrome
metadata:
  bibliography: references.bib
  csl: chicago-notes.csl
  keywords: [typography, CLI, Pandoc, Typst]
```

If the job requires a LaTeX class or package stack, keep the same Markdown source and switch the defaults file to `pdf-engine: xelatex` plus the required `template:` and LaTeX-specific metadata.

After generating the PDF, run the standard verification checks:

```sh
# Verify font embedding
pdffonts build/output.pdf | grep -v "^name\|^---"

# Check that all fonts show "yes yes" in emb/sub columns
pdffonts build/output.pdf | awk '$4 != "yes" { print "NOT EMBEDDED:", $0 }'

# Verify document metadata
pdfinfo build/output.pdf | grep -E "^Title:|^Author:|^Pages:|^Page size:"

# Check file size (excessively large PDFs may have unsubsetted fonts)
ls -lh build/output.pdf
```

If all fonts are embedded, the metadata is correct, and the page size matches the intended dimensions, the PDF is ready for print or distribution.

---

The next chapter turns to a third output format: EPUB, the standard for ebooks. Many of the same source files and Pandoc infrastructure used for PDF apply directly to EPUB output — the differences are in what the format assumes about the reading environment.
