# Pandoc — The Universal Converter

In 2006, John MacFarlane, a philosopher at UC Berkeley, released the first version of a command-line tool he had written for his own use. He needed to convert documents between formats — from Markdown to HTML, from HTML to LaTeX, between various academic document types — and found the existing tools inadequate. The tool he wrote, Pandoc, has since become the backbone of a substantial fraction of all CLI document production in the world.

The name means what it sounds like: *pan* (all) *doc* (document). Pandoc reads documents in dozens of input formats and writes them to dozens of output formats. At the time of writing, it understands over thirty input formats — Markdown, HTML, LaTeX, DOCX, EPUB, reStructuredText, Org Mode, Jupyter notebooks, and many more — and can write to over forty output formats. But the number of formats is not what makes Pandoc significant. What makes it significant is the model underneath: the abstract syntax tree.

This chapter covers how Pandoc works, how to use it well, and how to extend it. Chapter 7 and Chapter 8 go deeper on its two most important output formats, HTML and PDF.


## How Pandoc thinks: the AST model

Most document conversion tools work by pattern matching: they look for strings that look like Markdown headings and emit strings that look like HTML headings, or LaTeX headings, or whatever the target format requires. This approach works reasonably well for simple documents and breaks down on anything complex, because it has no understanding of the document's structure — only its surface form.

Pandoc takes a different approach. When it reads a document, it parses it into an *abstract syntax tree* (AST) — an in-memory representation of the document's structure, independent of any particular format. Every element of the document is represented as a node in this tree: headers, paragraphs, emphasis, lists, blockquotes, code blocks, tables, footnotes, citations, images, and so on. The tree describes what the document *is*, not what it looks like in any particular format.

Once the document is in AST form, Pandoc can write it to any output format by *serialising* the AST according to that format's rules. A `Header` node at level 2 becomes `<h2>` in HTML, `\subsection{}` in LaTeX, `##` in Markdown, `^` in RST — whichever representation the output format uses for a second-level heading.

You can inspect the AST directly using Pandoc's `native` output format:

```sh
echo "# Hello\n\nA paragraph with *emphasis*." | pandoc -f markdown -t native
```

```
[ Header 1 ("hello",[],[]) [Str "Hello"]
, Para [Str "A",Space,Str "paragraph",Space,Str "with",Space
       ,Emph [Str "emphasis"],Str "."]
]
```

The tree is a list of block elements. The `Header` node carries its level (1), an identifier tuple (the auto-generated anchor `"hello"`, plus empty lists for classes and key-value attributes), and a list of inline content. The `Para` node carries a list of inlines: individual words as `Str` nodes, spaces as `Space` nodes, and the italicised word as an `Emph` node wrapping a `Str`.

This representation is precise and complete. Every detail that Pandoc can represent is in the AST. And this is where Pandoc's extension mechanism enters the picture: because everything passes through the AST, you can intercept and transform the AST between parsing and serialisation. Those transformations are *filters*, and they are what makes Pandoc genuinely programmable.

The practical implication of the AST model for everyday use is this: Pandoc's conversions are lossless within the AST's capabilities. Information that the AST can represent is preserved across conversions. Information that the AST cannot represent — format-specific features with no equivalent in other formats — is either approximated or lost. A LaTeX `\marginpar{}` command, for instance, has no counterpart in HTML's document model, so Pandoc cannot convert it meaningfully to HTML. Understanding what the AST can and cannot represent helps you predict which conversions will work cleanly and which will require manual adjustment.


## The basic invocation

Pandoc is invoked from the command line with at minimum an input file (or standard input) and either an output file or an explicit output format:

```sh
pandoc input.md -o output.pdf
pandoc input.md -o output.html
pandoc input.md -o output.docx
pandoc input.md -t latex
```

When `-o` specifies an output file, Pandoc infers the output format from the file extension. When it cannot infer the format, or when you want to be explicit, use `-t` (or `--to`):

```sh
pandoc input.md -t html -o output.html    # explicit format
pandoc input.md -t html5                  # HTML5 specifically
pandoc input.md -t latex > output.tex     # to stdout
```

Similarly, `-f` (or `--from`) specifies the input format explicitly, which is necessary when reading from standard input or when the file extension is ambiguous:

```sh
cat input.md | pandoc -f markdown -t html
pandoc -f latex -t markdown input.tex -o input.md
```

Pandoc can read from multiple input files, concatenating them in order before processing. This is the mechanism for multi-file book projects as described in Chapter 5:

```sh
pandoc metadata.yaml ch01.md ch02.md ch03.md -o book.pdf
```

A YAML file passed as input is treated as a metadata source, not as body content. Its values are merged with any YAML front matter in the Markdown files, with command-line variables taking highest precedence.


## Essential flags

Pandoc has over a hundred command-line options. The following are the ones you will use constantly.

**`--standalone` / `-s`** produces a complete, self-contained document rather than a fragment. Without this flag, HTML output is a bare `<body>` fragment with no `<html>`, `<head>`, or `<style>` elements. With it, you get a complete HTML file. For PDF and DOCX output, `--standalone` is implied and has no additional effect. For HTML output intended for embedding in a larger site, omit it; for a standalone HTML document, include it:

```sh
pandoc input.md -t html --standalone -o output.html
```

**`--toc` / `--table-of-contents`** inserts a table of contents, generated automatically from the document's headings. For HTML output, it becomes a `<nav>` element at the top of the body. For LaTeX/PDF output, it emits a `\tableofcontents` command:

```sh
pandoc input.md -o output.pdf --toc --toc-depth=2
```

`--toc-depth` controls how many heading levels are included; the default is 3.

**`--number-sections`** numbers headings automatically, adding `1`, `1.1`, `1.2.3` prefixes. In LaTeX output, this toggles `\setcounter{secnumdepth}`:

```sh
pandoc input.md -o output.pdf --number-sections
```

**`--pdf-engine`** selects the LaTeX engine (or other PDF renderer) when the output format is PDF:

```sh
pandoc input.md -o output.pdf --pdf-engine=xelatex
pandoc input.md -o output.pdf --pdf-engine=lualatex
pandoc input.md -o output.pdf --pdf-engine=pdflatex
pandoc input.md -o output.pdf --pdf-engine=wkhtmltopdf
```

If you are using `mainfont`, `sansfont`, or `monofont` in your metadata, you must use `xelatex` or `lualatex` — pdfLaTeX does not support `fontspec`. If your document contains only standard Latin text and uses only font packages available in pdfLaTeX, either engine will work. We discuss the tradeoffs in Chapter 8.

**`--highlight-style`** controls syntax highlighting in code blocks. Pandoc uses the KDE syntax highlighting library internally and ships with several built-in themes:

```sh
pandoc input.md -o output.html --highlight-style=tango
pandoc input.md -o output.html --highlight-style=breezedark
pandoc input.md -o output.pdf  --highlight-style=monochrome
```

Available styles include `pygments` (the default), `tango`, `espresso`, `zenburn`, `kate`, `monochrome`, `breezedark`, and `haddock`. For print output, `monochrome` is usually the right choice — coloured code blocks render poorly in greyscale. For screen output, choose whichever suits the document's visual design.

**`-V key=value`** (or `--variable key=value`) sets a template variable from the command line, overriding any value in the document's metadata block. This is useful for one-off adjustments without editing the source:

```sh
pandoc input.md -o output.pdf -V fontsize=11pt -V geometry=a5paper
```

**`--citeproc`** activates Pandoc's built-in citation processor, which processes `@key` citation markers against a bibliography file and formats them according to a CSL style. This must be combined with either `--bibliography` on the command line or a `bibliography` field in the metadata:

```sh
pandoc input.md -o output.pdf --citeproc \
  --bibliography=references.bib \
  --csl=chicago-author-date.csl
```

**`--include-in-header`**, **`--include-before-body`**, and **`--include-after-body`** inject the contents of a file into specific parts of the output document without requiring a full custom template:

```sh
# Add custom CSS to HTML output
pandoc input.md -t html --standalone \
  --include-in-header=custom.css \
  -o output.html

# Add a custom LaTeX preamble fragment
pandoc input.md -o output.pdf \
  --include-in-header=preamble-additions.tex
```

This is often the right approach for modest customisations. Custom templates (covered later in this chapter) are more powerful but more complex to maintain.


## PDF engines and when to use each

When the output format is PDF, Pandoc converts the document to an intermediate format and then invokes an external tool to produce the final PDF. The choice of PDF engine is one of the most consequential decisions in a Pandoc workflow.

**pdfLaTeX** is the oldest and most portable of the LaTeX PDF engines. It uses 8-bit input encoding (UTF-8 with the `inputenc` package), produces highly compatible PDF output, and compiles faster than the Unicode engines. Its primary limitation is font access: it can only use fonts that have been prepared in LaTeX's internal format, which in practice means the packaged fonts available through TeX Live (Palatino, Times, Helvetica, Charter, and many others via packages like `mathpazo`, `tgpagella`, `helvet`, and `charter`). If your document's font requirements are covered by these packages, pdfLaTeX is a fine choice. If you need a specific OTF or TTF font — anything you would install via fontconfig — you need XeLaTeX or LuaLaTeX.

**XeLaTeX** uses Unicode input natively, supports OpenType and TrueType fonts directly via the `fontspec` package, and handles right-to-left scripts and complex script rendering through the HarfBuzz shaping engine. It is the standard choice for documents that use non-Latin scripts, require specific professional typefaces, or need access to advanced OpenType features. XeLaTeX compiles somewhat more slowly than pdfLaTeX and produces slightly larger PDF files.

**LuaLaTeX** shares XeLaTeX's Unicode support and font capabilities and adds the ability to embed Lua scripts within the LaTeX document itself. It is the engine used by the `microtype` package's most advanced features and by several sophisticated packages that require programmatic control over typesetting. LuaLaTeX compiles the most slowly of the three but provides the most capability. For most documents, the choice between XeLaTeX and LuaLaTeX is not critical; choose XeLaTeX unless you have a specific reason to prefer LuaLaTeX.

**wkhtmltopdf** takes a fundamentally different approach: it renders the document as HTML using the WebKit browser engine and then converts the rendered page to PDF. The result looks like a browser rendering rather than a LaTeX rendering — which is sometimes exactly what is wanted. HTML/CSS-based document styles translate directly; web fonts work without configuration; CSS page media queries control the print layout. The tradeoff is that typography is web-grade rather than TeX-grade: no paragraph-level optimisation, no microtypography, no access to TeX's mathematical typesetting. For documents that are primarily styled with CSS and do not require TeX's mathematical capabilities, wkhtmltopdf is a practical choice.

**WeasyPrint** is a Python-based alternative to wkhtmltopdf, using a cleaner implementation of CSS Print and Paged Media standards. It is actively maintained, supports CSS features that wkhtmltopdf does not, and is the subject of Chapter 8's section on web-engine PDF generation.

The practical decision tree: start with pdfLaTeX if you are using standard LaTeX font packages; switch to XeLaTeX when you need system fonts or OpenType features; consider LuaLaTeX if you need Lua scripting within the document; reach for wkhtmltopdf or WeasyPrint when your document is designed in HTML/CSS and does not need TeX's typographic capabilities.


## Templates

Pandoc's default output for any format is produced by a built-in template — a file written in Pandoc's template language that specifies the structure of the output and the positions where document content and metadata are inserted. You can inspect the default template for any output format:

```sh
pandoc --print-default-template=html > default.html
pandoc --print-default-template=latex > default.latex
```

Reading the default template for your target format is one of the most educational things you can do with Pandoc. It shows you exactly what variables are available (everything inside `$...$`), what conditionals the template uses, and where your content ends up. The default LaTeX template, for instance, shows the full sequence of packages loaded, the font configuration commands, the geometry settings, and the document structure — all driven by variables you can set in the YAML metadata block.

A Pandoc template is a text file with template syntax intermixed:

- `$variable$` — inserts the value of a metadata variable
- `$if(variable)$ ... $endif$` — conditional block
- `$for(list)$ ... $endfor$` — loop over a list
- `$body$` — inserts the converted document body

Here is a minimal HTML template that demonstrates all four constructs:

```html
<!DOCTYPE html>
<html lang="$lang$">
<head>
  <meta charset="utf-8">
  <title>$title$</title>
$if(css)$
$for(css)$
  <link rel="stylesheet" href="$css$">
$endfor$
$endif$
</head>
<body>
$if(title)$
<header>
  <h1 class="title">$title$</h1>
$if(author)$
  <p class="author">$for(author)$$author$$sep$, $endfor$</p>
$endif$
$if(date)$
  <p class="date">$date$</p>
$endif$
</header>
$endif$
<main>
$body$
</main>
</body>
</html>
```

Save this as `my-template.html` and use it with:

```sh
pandoc input.md --template=my-template.html -t html -o output.html
```

The `$sep$` in the author loop is a separator that appears between list items but not after the last one — useful for comma-separated author lists.

For LaTeX, a useful minimal template that strips away everything except what you actually need is the starting point for many projects that want full control over the preamble. Start with `pandoc --print-default-template=latex`, save it, and begin removing or adjusting the parts you do not need.

When working with templates, store them in Pandoc's user data directory:

```sh
# Find your user data directory
pandoc --version | grep "User data"
# Typically: ~/.local/share/pandoc/

# Place templates here for automatic discovery
mkdir -p ~/.local/share/pandoc/templates/
cp my-template.html ~/.local/share/pandoc/templates/
```

Templates placed in the user data directory can be referenced by name without a full path:

```sh
pandoc input.md --template=my-template -t html -o output.html
```


## Defaults files

A defaults file is a YAML file that can specify any Pandoc option that could be passed on the command line. It is the mechanism for creating reusable build configurations without writing shell scripts.

```yaml
# book.yaml
from: markdown
to: pdf
pdf-engine: xelatex
standalone: true
toc: true
toc-depth: 2
number-sections: true
filter:
  - pandoc-crossref
citeproc: true
highlight-style: monochrome
template: book-template.latex
metadata:
  documentclass: book
  classoption:
    - 12pt
    - twoside
    - openright
  mainfont: "EB Garamond"
  monofont: "JetBrains Mono"
  geometry: "margin=25mm, bindingoffset=12mm"
  bibliography: references.bib
  csl: chicago-notes.csl
```

Invoke it with:

```sh
pandoc --defaults=book.yaml metadata.yaml chapters/*.md -o book.pdf
```

Defaults files can inherit from each other using the `defaults` key, which lets you build a hierarchy — a base configuration extended by format-specific configurations:

```yaml
# html.yaml — extends base settings for HTML output
defaults: base.yaml
to: html5
standalone: true
toc: false
highlight-style: tango
template: web-template.html
output-file: index.html
```

The `output-file` key in a defaults file specifies the output path, which means you can trigger a complete build with nothing but:

```sh
pandoc --defaults=html.yaml metadata.yaml chapters/*.md
```

This is the simplest possible build command for a complex document. The Makefile patterns in Chapter 10 build on this.


## Lua filters

Lua filters are the most powerful extension mechanism Pandoc provides, and they are worth understanding even if you never write one yourself — because Pandoc's growing ecosystem of pre-written filters provides solutions to a wide range of problems that the base tool does not handle out of the box.

A Lua filter is a Lua script that defines functions named after AST element types. When Pandoc processes a document and encounters an element of that type, it calls the corresponding function, passing the element as an argument. Whatever the function returns replaces the element in the AST.

```lua
-- uppercase-headings.lua
-- Transform all heading text to uppercase

function Header(el)
  return pandoc.walk_block(el, {
    Str = function(str)
      return pandoc.Str(str.text:upper())
    end
  })
end
```

```sh
pandoc input.md --lua-filter=uppercase-headings.lua -o output.pdf
```

The filter walks every `Header` element in the AST, and within each header walks every `Str` inline element, replacing the string text with its uppercase version. The rest of the document is unaffected.

A more practical example — replacing straight quotes with typographic quotes in contexts where Pandoc's built-in smart quotes handling is insufficient, or converting fenced divs with a specific class to LaTeX environments:

```lua
-- div-to-env.lua
-- Convert fenced divs with class "theorem" to LaTeX theorem environments

function Div(el)
  if el.classes:includes("theorem") then
    local title = el.attributes.title or ""
    local begin_env = pandoc.RawBlock("latex",
      "\\begin{theorem}" .. (title ~= "" and "[" .. title .. "]" or ""))
    local end_env = pandoc.RawBlock("latex", "\\end{theorem}")
    local content = {begin_env}
    for _, block in ipairs(el.content) do
      table.insert(content, block)
    end
    table.insert(content, end_env)
    return content
  end
end
```

With this filter, a fenced div in Markdown:

```markdown
::: {.theorem title="Euclid's theorem"}
There are infinitely many prime numbers.
:::
```

Becomes, in LaTeX output:

```latex
\begin{theorem}[Euclid's theorem]
There are infinitely many prime numbers.
\end{theorem}
```

And renders correctly in HTML output as a styled `<div class="theorem">` element, because the filter only emits raw LaTeX when the output format is LaTeX.

The key to output-format-aware filters is checking `FORMAT`:

```lua
function Div(el)
  if el.classes:includes("theorem") then
    if FORMAT == "latex" or FORMAT == "pdf" then
      -- emit raw LaTeX
    else
      -- pass through as a div with appropriate attributes
      return el
    end
  end
end
```

Pandoc's Lua filter API exposes the complete AST through a well-documented library of constructors and accessors. The full API reference is at `pandoc.org/lua-filters.html`. Commonly useful functions include `pandoc.walk_block`, `pandoc.walk_inline`, `pandoc.RawBlock`, `pandoc.RawInline`, `pandoc.stringify` (converts any AST element to plain text), and `pandoc.read` (parses a string as Markdown and returns an AST, enabling filters that generate document content programmatically).

Multiple filters can be chained by specifying them in sequence:

```sh
pandoc input.md \
  --lua-filter=filter-one.lua \
  --lua-filter=filter-two.lua \
  --filter=pandoc-crossref \
  -o output.pdf
```

Filters are applied in the order specified. Note that `--filter` (without `lua-`) is for external filter programs that communicate with Pandoc via JSON over standard input/output — an older mechanism that predates Lua filters. Lua filters are preferred for new work because they run in-process and are substantially faster.


## Practical conversion patterns

Several conversion tasks come up often enough to be worth treating as patterns.

**Converting a legacy LaTeX document to Markdown** for future Pandoc-based processing:

```sh
pandoc legacy.tex -f latex -t markdown -o legacy.md
```

The conversion is imperfect — complex LaTeX commands have no Markdown equivalent and are either approximated or lost — but for documents that are primarily text with standard structural markup, the result is usable and often requires only minor cleanup.

**Extracting plain text** from a formatted document, for indexing or analysis:

```sh
pandoc document.docx -t plain -o document.txt
pandoc document.pdf  -f pdf -t plain 2>/dev/null  # limited support
```

**Batch converting** a directory of Markdown files to HTML:

```sh
for f in *.md; do
  pandoc "$f" -t html --standalone -o "${f%.md}.html"
done
```

Or with GNU parallel for speed:

```sh
ls *.md | parallel pandoc {} -t html --standalone -o {.}.html
```

**Producing multiple output formats** from the same source in a single pipeline:

```sh
pandoc input.md -o output.pdf --pdf-engine=xelatex &
pandoc input.md -o output.html --standalone &
pandoc input.md -o output.epub &
wait
```

The `&` runs each conversion in the background; `wait` blocks until all three complete. This is a simple form of parallel build that works well for a single document. The Makefile patterns in Chapter 10 extend this to multi-file projects with dependency tracking.

**Normalising Markdown** from multiple sources to a consistent Pandoc Markdown dialect:

```sh
pandoc input.md -f gfm -t markdown -o normalised.md
```

This converts GitHub Flavored Markdown to Pandoc Markdown, which is useful when incorporating content from GitHub wikis or README files into a larger document project.

---

Pandoc's power lies in the combination of its format coverage, its AST-based model, and its extensibility through Lua filters. Most of the document production workflows in Part IV of this book run through Pandoc at some stage — as the primary converter, as a pre-processor that feeds LaTeX, or as a post-processor that cleans up intermediate output. Understanding Pandoc well is, practically speaking, the single highest-leverage skill in CLI typesetting.

The next two chapters narrow the focus to Pandoc's two most important output formats: HTML in Chapter 7, and print-ready PDF in Chapter 8.
