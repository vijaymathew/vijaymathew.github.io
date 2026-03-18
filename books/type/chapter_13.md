# Typst — The Modern Alternative

For most of LaTeX's existence, it had no serious competitors for high-quality mathematical and scientific typesetting. Various attempts at simpler systems produced simpler output; systems with equivalent output quality required equivalent complexity. Typst, first released publicly in 2023, is the first system in forty years that genuinely challenges this situation. It produces LaTeX-quality output through a language that is dramatically cleaner, with compilation that is dramatically faster, and an error experience that is dramatically less painful.

This chapter covers Typst in depth: its syntax, its approach to typography, its scripting system, its package ecosystem, and where it currently falls short of LaTeX. The goal is to give you enough understanding to choose it when it is the right tool — which is increasingly often — and to know its limits when it is not.


## What Typst is

Typst is a typesetting system with a built-in scripting language. The scripting language is not a macro preprocessor bolted onto a typesetting engine (which is essentially what LaTeX is): it is a coherent, functional programming language in which the entire document is a value. Text is a first-class value. Functions produce content. Content can be stored in variables, passed to functions, mapped over, filtered, and returned.

Two consequences follow from this architecture. First, the document language is consistent: there is one way to call a function, one way to define a variable, one way to loop, one way to apply conditional logic. LaTeX's patchwork of syntax conventions — `\command{arg}`, `\begin{env}...end{env}`, `\setcounter`, `\ifx...\fi`, `\expandafter` — is replaced by a small set of orthogonal constructs. Second, the compiler can understand the document structure as it compiles, enabling incremental compilation: change one paragraph, recompile only the affected pages. On a large document, Typst's compilation is measured in milliseconds rather than seconds.

The other major architectural difference from LaTeX is error reporting. LaTeX errors are famously opaque because TeX's macro expansion model makes it difficult to trace errors back to their source. Typst errors point to the specific line and character where the problem occurred, and the messages are written in plain English: `error: cannot divide by zero`, `error: expected string, found integer`.


## Installation

Typst is a single binary with no external dependencies. Installation is a matter of downloading the binary for your platform and placing it in your `PATH`.

The recommended installation method uses the official install script:

```sh
curl -fsSL https://typst.community/typst-install/install.sh | sh
```

This installs the latest stable release to `~/.local/bin/typst`. Alternatively, install via your system's package manager where available, or via Cargo if you have a Rust toolchain:

```sh
cargo install typst-cli
```

Verify the installation:

```sh
typst --version
```

Typst requires no LaTeX installation, no font configuration, and no package manager setup. Fonts are discovered through the system's font infrastructure (fontconfig on Linux, Core Text on macOS), and packages from the Typst Universe registry are downloaded automatically on first use — no separate install step.


## Basic syntax

A Typst document is a plain text file with the `.typ` extension. Three kinds of content can appear:

**Markup mode** is the default. Plain text is plain text. Headings begin with `=`. Lists begin with `-`. Formatting uses `*bold*`, `_italic_`, and `` `code` ``. This will be immediately familiar from Markdown.

**Code mode** is entered with `#`. Everything following `#` until the end of the expression is interpreted as Typst code — a function call, a variable, a control structure, a set rule.

**Math mode** is entered with `$`. Single `$` produces inline math; double `$` on its own line produces a displayed equation.

```typst
= Introduction                    // heading (markup)

Body text is just text. *Bold* and _italic_ work as expected.
A footnote#footnote[Like this.] and some `inline code`.

#let greeting = "Hello"          // variable definition (code)
#greeting, world.                 // variable interpolation

$E = m c^2$                       // inline math
$ integral_a^b f'(x) dif x = f(b) - f(a) $  // displayed math
```

The `#` prefix can be omitted for block-level code: a line that begins with `let`, `for`, `if`, or `show` is treated as code automatically. The `#` is required for inline code interpolation within a paragraph.


## Set and show rules

The two most important language constructs in Typst are `set` and `show` rules. Together, they replace most of what LaTeX uses packages and class files for.

A `set` rule applies default parameters to a function for the rest of the document (or the current scope). This is how you configure page size, typography, paragraph spacing, heading numbering, and everything else:

```typst
// Page setup
#set page(
  paper: "a4",
  margin: (top: 30mm, bottom: 25mm, left: 30mm, right: 25mm),
  numbering: "1",
)

// Typography
#set text(
  font: "EB Garamond",
  size: 11pt,
  lang: "en",
)

// Paragraph settings
#set par(
  justify: true,
  leading: 0.65em,
  first-line-indent: 1.5em,
)

// Heading numbering
#set heading(numbering: "1.1")

// List appearance
#set list(indent: 1em)
```

Every Typst function that produces content accepts keyword arguments that control its appearance. `set` rules establish defaults for those arguments throughout the document or scope.

A `show` rule transforms how a specific kind of content is rendered. This is how you redefine the appearance of headings, code blocks, figures, bibliographies, or any other content type:

```typst
// Redefine level-1 headings
#show heading.where(level: 1): it => {
  v(2em, weak: true)
  block(
    below: 0.8em,
    text(size: 18pt, weight: "bold", fill: rgb("#1a1a2e"), it.body)
  )
}

// Add a background to all code blocks
#show raw.where(block: true): it => {
  block(
    fill: luma(245),
    inset: (x: 1em, y: 0.75em),
    radius: 4pt,
    width: 100%,
    text(size: 9.5pt, font: "JetBrains Mono", it)
  )
}

// Style blockquotes
#show quote: it => {
  pad(left: 1.5em, block(
    stroke: (left: 3pt + luma(180)),
    inset: (left: 1em),
    text(style: "italic", it.body)
  ))
}
```

Show rules can target content by type (`heading`, `raw`, `figure`), by attributes (`.where(level: 1)`), or by content matching (`"important text"`). They are significantly more powerful and composable than LaTeX's equivalent mechanisms.


## Typography configuration

Typst's typography defaults are already good. The line-breaking algorithm is paragraph-level, like TeX's — it considers the whole paragraph when breaking lines, minimising total badness rather than breaking greedily. With appropriate font and layout settings, the output quality is close to LaTeX's.

**Font selection** names fonts as strings, matched against fontconfig (or the system's font discovery mechanism):

```typst
#set text(font: "EB Garamond", size: 11pt)
#set text(font: ("EB Garamond", "Linux Libertine", "serif"))
```

When a list of fonts is provided, Typst uses the first available one, falling back down the list. The final entry `"serif"` is a generic family name that resolves to the system's default serif font — a reliable ultimate fallback.

**Specifying font paths** for fonts not in the system font directories:

```sh
typst compile --font-path ./fonts document.typ
```

Multiple `--font-path` options are accepted. The Typst compiler searches these directories in addition to system font paths.

**OpenType features** are configured through `text` arguments:

```typst
#set text(
  font: "EB Garamond",
  features: ("onum", "liga", "kern"),
)
```

Or per-span for specific uses:

```typst
#text(features: ("smcp",))[Small capitals here]
```

**Page headers and footers** use the `header` and `footer` arguments to `page`, with the `context` keyword for accessing the current page state:

```typst
#set page(
  header: context {
    let page-num = counter(page).get().first()
    if page-num > 1 {
      grid(
        columns: (1fr, 1fr),
        align(left)[#smallcaps[The CLI Typographer]],
        align(right)[#page-num]
      )
      line(length: 100%, stroke: 0.4pt)
    }
  },
  footer: context {
    // No footer — page number is in the header
  }
)
```

The `context` keyword marks a region where the current document state (page number, current heading, counter values) can be queried. This is the Typst equivalent of LaTeX's two-pass compilation — in Typst, context-sensitive content is resolved in a separate pass automatically.


## Mathematics

Typst's math mode uses a syntax designed for readability rather than direct compatibility with LaTeX. The key difference is that most mathematical symbols are written as words without backslashes, and the overall syntax is less cluttered.

**Inline math** uses `$...$` as in LaTeX:

```typst
Einstein's equation $E = m c^2$ relates energy to mass.
```

**Displayed math** uses `$ ... $` where the dollar signs are on their own lines:

```typst
The Basel problem:
$ sum_(n=1)^infinity 1/n^2 = pi^2/6 $
```

**Key syntax differences from LaTeX math:**

Greek letters and mathematical symbols are written as words without backslash: `alpha`, `beta`, `Gamma`, `infinity`, `integral`, `sum`, `product`. Common operators are written directly: `->` for arrow, `<=` for ≤, `!=` for ≠.

Subscripts and superscripts use `_` and `^` as in LaTeX, but multi-character arguments use parentheses rather than braces: `x^(n+1)`, `sum_(i=1)^n`. Single characters need no delimiter: `x^2`, `x_n`.

Fractions are written with the division operator: `a/b` produces a fraction. For explicit fraction control, `frac(a, b)` is available.

Matrices and vectors use `mat(...)` and `vec(...)`:

```typst
$ mat(a, b; c, d) $          // 2×2 matrix (semicolon separates rows)
$ vec(x, y, z) $              // column vector
$ mat(delim: "[", a, b; c, d) $  // square brackets
```

Aligned equations use the `&` alignment marker and `\` for line breaks, as in LaTeX's `align` environment:

```typst
$ (x + y)^2 &= x^2 + 2 x y + y^2 \
  (x - y)^2 &= x^2 - 2 x y + y^2 $
```

**Theorem-like environments** are not built in but are straightforwardly implemented with functions:

```typst
#let thmbox(name, body, color: luma(240)) = {
  block(
    fill: color,
    inset: 10pt,
    radius: 4pt,
    width: 100%,
    [*#name.* #body]
  )
}

#let theorem  = thmbox.with("Theorem")
#let lemma    = thmbox.with("Lemma")
#let proof(body) = pad(left: 1em,
  [_Proof._ #body #h(1fr) $square$]
)

// Usage:
#theorem[There are infinitely many prime numbers.]
#proof[Suppose $p_1, ..., p_n$ were all primes. Let
  $N = p_1 p_2 dots.c p_n + 1$. Then $N$ has no prime
  factors in our list — contradiction.]
```

For automatic theorem numbering, a counter is used:

```typst
#let thm-counter = counter("theorem")

#let theorem(body, name: none) = {
  thm-counter.step()
  let num = context thm-counter.display()
  let label = if name != none { " (" + name + ")" } else { "" }
  block(fill: luma(240), inset: 10pt, radius: 4pt,
    [*Theorem #num#label.* #body]
  )
}
```


## Scripting and programmatic documents

Typst's scripting capabilities are what set it apart from previous LaTeX alternatives. It is a proper programming language: variables, functions, conditionals, loops, arrays, dictionaries, and first-class functions.

**Variables and functions:**

```typst
#let pi-approx = 3.14159
#let square(x) = x * x

The area of a circle with radius 5 is approximately
#calc.round(pi-approx * square(5), digits: 2).

// Functions that return content
#let important(body) = {
  text(fill: rgb("#c0392b"), weight: "bold", body)
}

This is #important[critically important].
```

**Loops and conditionals:**

```typst
// Generate a multiplication table
#table(
  columns: 5,
  ..for i in range(1, 6) {
    for j in range(1, 6) {
      (str(i * j),)
    }
  }
)

// Conditional content
#let draft = true
#if draft {
  text(fill: red)[DRAFT — DO NOT DISTRIBUTE]
}
```

**Reading external data** — useful for generated reports and documents that must reflect current data:

```typst
// Read a CSV file and render it as a table
#let data = csv("data.csv")
#table(
  columns: data.first().len(),
  ..data.flatten()
)
```

**Building a letter template** demonstrates the scripting approach to document components:

```typst
#let letter(
  sender: "",
  recipient: "",
  date: none,
  subject: none,
  body
) = {
  set page(paper: "a4", margin: (top: 35mm, bottom: 30mm,
                                  left: 30mm, right: 25mm))
  set text(font: "EB Garamond", size: 11pt)
  set par(justify: true)

  // Sender address (right-aligned)
  align(right, text(size: 10pt, sender))
  v(1em)

  // Date
  if date != none { align(right, date); v(1em) }

  // Recipient address
  text(recipient)
  v(2em)

  // Subject line
  if subject != none {
    text(weight: "bold", "Subject: " + subject)
    v(1em)
  }

  // Body
  body

  v(2em)
  text("Yours sincerely,")
  v(3em)
  // Signature space
  text(sender.split("\n").first())
}
```


## Templates and reuse

A Typst template is a `.typ` file that defines functions and set/show rules, imported into document files with `#import`. This is the mechanism that replaces LaTeX document classes.

A template file `article-template.typ`:

```typst
#let article(
  title: none,
  authors: (),
  date: none,
  abstract: none,
  body
) = {
  set document(title: title, author: authors.map(a => a.name))

  set page(paper: "a4", margin: (x: 30mm, y: 30mm),
           numbering: "1")
  set text(font: "New Computer Modern", size: 11pt, lang: "en")
  set par(justify: true, leading: 0.65em,
          first-line-indent: 1.5em)
  set heading(numbering: "1.1")

  // Title block
  align(center)[
    #block(text(size: 18pt, weight: "bold", title))
    #v(0.5em)
    #authors.map(a => block[#a.name, _#a.affiliation._]).join()
    #if date != none { block(text(size: 10pt, date)) }
  ]

  if abstract != none {
    v(1em)
    block(inset: (x: 2em))[*Abstract.* #abstract]
    v(1em)
  }

  body
}
```

The document that uses it:

```typst
#import "article-template.typ": article

#show: article.with(
  title: "On CLI Typesetting",
  authors: (
    (name: "A. N. Author", affiliation: "University of Example"),
  ),
  date: "March 2024",
  abstract: [A practical guide to document production tools.],
)

= Introduction

Body text begins here.
```

The `#show: template.with(args)` pattern applies the template's formatting to the entire document. This is standard Typst idiom for reusable templates.

**Published templates** are distributed as Typst Universe packages, installed automatically on first import:

```typst
#import "@preview/charged-ieee:0.1.2": ieee
#show: ieee.with(
  title: [Paper Title],
  authors: ((name: "Author Name", ...),),
)
```

The `@preview/` prefix identifies packages from the official Typst Universe registry, versioned with semantic version numbers. Packages are cached locally after first download and never fetched again for the same version, making builds reproducible.


## Bibliography and citations

Typst handles bibliography natively using BibTeX `.bib` files:

```typst
#bibliography("references.bib")
```

Citations use the `@key` syntax:

```typst
As described in @knuth1984, the line-breaking algorithm...
The standard reference is @bringhurst2004[p. 17].
```

Bibliography styles are selected from Typst's built-in set or from CSL files:

```typst
// Built-in styles
#bibliography("references.bib", style: "ieee")
#bibliography("references.bib", style: "apa")
#bibliography("references.bib", style: "chicago-author-date")

// CSL style
#bibliography("references.bib", style: "my-style.csl")
```

The default style is alphabetical (author-year sorted); common alternatives include `"ieee"`, `"apa"`, `"mla"`, `"chicago-author-date"`, and `"chicago-notes"`.


## The package ecosystem

Typst packages live on **Typst Universe** (`typst.app/universe`) and are imported with `@preview/package-name:version`. As of early 2025, the ecosystem is growing rapidly. Packages worth knowing:

**`@preview/codly`** provides code listing environments with line numbers, highlights, and zebra striping — a richer alternative to Typst's built-in raw blocks.

**`@preview/cetz`** is a drawing library for technical illustrations, analogous to TikZ. It uses a Typst-native API for paths, shapes, and connectors.

**`@preview/fletcher`** extends `cetz` specifically for diagrams: flowcharts, commutative diagrams, state machines. The API is cleaner than TikZ for this class of diagram.

**`@preview/showybox`** provides styled boxes for callouts, warnings, examples, and other highlighted content.

**`@preview/unify`** handles physical quantities and units, analogous to LaTeX's `siunitx`.

**`@preview/tablex`** extends Typst's table system with merged cells, custom strokes, and other features not available in the built-in `table` function.

The ecosystem is smaller than CTAN, and some LaTeX packages have no Typst equivalent yet. The most notable gaps are journal-specific templates (most academic publishers have LaTeX templates only), certain specialised mathematical environments, and the more niche typographic packages. For standard academic and technical documents, these gaps rarely matter.


## Current limitations

Typst is a young system and some limitations are worth knowing before committing to it for a long project.

**No CTAN package compatibility.** LaTeX packages do not work in Typst. If your document depends on a specific LaTeX package with no Typst equivalent, you cannot use Typst for that document.

**Publisher submission requirements.** Most academic publishers and conference proceedings accept only LaTeX (or sometimes Word). If you need to submit source files to a publisher, Typst will not be accepted unless the publisher specifically supports it. You can generate a PDF from Typst for preprints and personal use, but the submission workflow may require LaTeX.

**BibLaTeX-style bibliography features.** Typst's bibliography system is BibTeX-level: it handles standard citation types well, but the advanced bibliography customisation available through BibLaTeX (custom entry types, annotation fields, complex inheritance) is not yet available.

**Multi-column layouts** are possible in Typst but more limited than in LaTeX. Documents with complex flowing multi-column text (two-column academic papers with figures that span both columns) require more work in Typst than in LaTeX.

**Change tracking and revision marks.** LaTeX's `changes` package and related tools have no Typst equivalent; collaborative editing with tracked changes is not natively supported.

These limitations are real but bounded. For the majority of technical documents — papers, reports, books, theses, technical documentation — Typst is fully capable and offers a substantially better authoring experience than LaTeX. The decision to use Typst or LaTeX is increasingly a matter of specific requirements rather than general capability.


## Compilation workflow

Typst's single-binary architecture means the compilation workflow is simple:

```sh
# Compile once
typst compile document.typ

# Compile with custom output path
typst compile document.typ build/output.pdf

# Compile with custom font paths
typst compile --font-path ./fonts document.typ

# Watch mode: recompile on every save
typst watch document.typ

# Watch mode with PDF viewer auto-open
typst watch --open document.typ
```

The `watch` command is the primary development workflow: run it once, save the file, and the PDF updates within a fraction of a second. For large documents, the incremental compilation means even complex multi-page documents rebuild nearly instantly after small changes.

**Integration with Make** follows the same pattern as LaTeX:

```makefile
SOURCES := $(wildcard chapters/*.typ) template.typ
BUILD   := build

$(BUILD)/book.pdf: $(SOURCES) | $(BUILD)
	typst compile --font-path fonts/ chapters/main.typ $@

$(BUILD):
	mkdir -p $@
```

For multi-file projects, Typst handles imports automatically — there is no need to pass all files on the command line. A main entry file imports the others:

```typst
// main.typ
#import "template.typ": article
#show: article.with(...)

// Include chapters
#include "chapters/01-history.typ"
#include "chapters/02-fundamentals.typ"
#include "chapters/03-digital.typ"
```

Changes to any included file trigger a recompile of the output, handled transparently by `typst watch`.

---

Typst and LaTeX will coexist for years, probably for decades. LaTeX has too much accumulated infrastructure — too many journal templates, too many existing documents, too deep an ecosystem — to be displaced quickly. But for new projects where the choice is open, Typst is now a serious option wherever LaTeX would otherwise be the default. The chapters that follow — Quarto for computational documents, Emacs and Org Mode for Emacs users — cover the remaining tools in Part III's toolbox before Part IV puts all of them to work on real document examples.
