# Emacs and Org Mode

Emacs is the oldest continuously developed software environment still in active use. Created by Richard Stallman in 1976, it has accumulated decades of packages, conventions, and users whose workflows are built around it so completely that they author, manage tasks, read email, browse the web, and write code without leaving its interface. For document production, the relevant part of this ecosystem is Org Mode: a major mode that turns Emacs into one of the most capable document authoring environments available, with native support for outline-based writing, executable code blocks, table computation, and export to a wide range of output formats.

This chapter is addressed to two audiences. The first is the Emacs user who wants to understand Org Mode's document production capabilities more fully. The second is the non-Emacs user who keeps hearing about Org Mode and wants to know whether it is worth learning Emacs to use it. For the first audience, this chapter covers Org's document format, export system, Babel for literate programming, and AUCTeX for LaTeX authoring in depth. For the second: the answer is in the opening section, and it is honest.


## Should you learn Emacs for Org Mode?

The honest answer is: probably not, unless you have other reasons to be in Emacs.

Org Mode is genuinely excellent. Its outline-based editing is elegant. Its table editing — with built-in spreadsheet functions — is remarkable. Babel, Org's code execution system, predates Quarto by over a decade and remains competitive with it for certain workflows. The export system produces high-quality HTML, PDF, EPUB, and ODT from a single source file with fewer dependencies than a Pandoc-based pipeline.

The caveat is the Emacs prerequisite. Emacs has a learning curve unlike almost any other piece of software in current use. Its default keybindings predate the GUI conventions that have governed software interfaces since the 1980s. Its configuration is written in Emacs Lisp, a dialect of Lisp that is not casually approachable. Its documentation, while extensive, assumes a level of familiarity with the environment that newcomers cannot have. Getting Emacs to behave like a modern text editor for general use — sensible defaults, mouse support, sane keybindings — requires hours of configuration work before you can be productive.

None of these are criticisms. They are features for the people who have made the investment. But for someone who currently works in VS Code, Vim, or any other text editor, adopting Emacs for the sake of Org Mode means acquiring an entire new environment to gain capabilities that Pandoc, Quarto, Typst, and LaTeX already cover in other ways. The tradeoff is rarely worth it for document production alone.

If you are already an Emacs user, read on: Org Mode deserves your serious attention.


## The Org format

Org is a plain text format built around the outline. Documents are structured as a hierarchy of headings, each introduced by one or more asterisks:

```org
* First-level heading
** Second-level heading
*** Third-level heading
**** Fourth-level heading
```

Between headings is body text, which can contain any of Org's inline markup, links, tables, lists, and code blocks. The entire document is a tree, and Emacs can collapse or expand any subtree with a single keystroke — showing only headings for navigation, or expanding a single section for focused writing, or displaying the whole document.

**Inline markup** uses symmetric delimiters:

```org
*bold*          /italic/        _underline_
=verbatim=      ~code~          +strikethrough+
```

The distinction between `=verbatim=` and `~code~` is meaningful in export: `=verbatim=` produces `<code>` in HTML and `\verb|...|` in LaTeX; `~code~` produces `<code>` in HTML and the same in LaTeX but is intended for code identifiers rather than literal text. In practice, both are often used interchangeably.

**Links** follow the double-bracket pattern:

```org
[[https://orgmode.org][Org Mode website]]      ← external link with description
[[https://orgmode.org]]                         ← bare URL
[[./figures/diagram.png]]                       ← inline image (no description)
[[#custom-id]]                                  ← link to heading by CUSTOM_ID
[[file:other-document.org::*Heading name]]      ← link to heading in another file
```

**Footnotes** have two syntaxes:

```org
Inline footnote[fn:: The content goes here inline.]

Named footnote[fn:name] where the definition appears elsewhere.

[fn:name] The footnote content, which can span multiple lines and
include markup.
```

**Tables** are Org's standout feature among plain-text formats. They are created and formatted automatically as you type, and they support spreadsheet-style formulas:

```org
| Tool   | Year | Primary output |
|--------+------+----------------|
| TeX    | 1978 | DVI            |
| LaTeX  | 1985 | PDF            |
| Typst  | 2023 | PDF            |
```

Pressing `TAB` inside a table moves to the next cell, creating rows and re-aligning columns automatically. The `|-` prefix on a line creates a horizontal rule. Formulas are defined with `#+TBLFM:` directives below the table.

**Structural keywords** control the document's metadata and export behaviour:

```org
#+TITLE: The CLI Typographer
#+SUBTITLE: Typography and Typesetting from the Command Line
#+AUTHOR: A. N. Author
#+EMAIL: author@example.edu
#+DATE: 2024-03-15
#+LANGUAGE: en
#+OPTIONS: toc:2 num:t H:3 ^:nil
#+DESCRIPTION: A guide to CLI typesetting tools
```

The `#+OPTIONS:` keyword is a space-separated list of key:value pairs that control export behaviour. The most frequently needed options:

- `toc:2` — include table of contents to depth 2 (or `toc:nil` to suppress)
- `num:t` — number headings (or `num:nil` to suppress)
- `H:3` — maximum heading level (deeper headings become lists in some backends)
- `^:nil` — disable `_` and `^` as subscript/superscript markers (essential for text with underscores)
- `timestamp:nil` — suppress the "exported on" timestamp
- `author:nil` — suppress the author line


## The export system

Org's export system is built from *export backends*, each of which is a module (`ox-html`, `ox-latex`, `ox-odt`, etc.) that knows how to render Org elements to a specific format. The interactive export dispatcher, invoked with `C-c C-e`, presents a menu of all available backends and their sub-commands. The most-used commands:

- `C-c C-e l p` — export to PDF via LaTeX
- `C-c C-e l l` — export to LaTeX source file
- `C-c C-e h h` — export to HTML file
- `C-c C-e h o` — export to HTML and open in browser
- `C-c C-e o o` — export to ODT

For command-line use without an interactive Emacs session, `--batch` mode invokes export functions directly:

```sh
# Export to HTML
emacs --batch \
  --eval "(require 'org)" \
  --visit "document.org" \
  --funcall org-html-export-to-html

# Export to PDF via LaTeX
emacs --batch \
  --eval "(require 'org)" \
  --eval "(setq org-latex-pdf-process '(\"latexmk -xelatex -quiet %f\"))" \
  --visit "document.org" \
  --funcall org-latex-export-to-pdf
```

The `--batch` flag runs Emacs without a display and exits after the commands complete. This makes Org export scriptable and usable in CI/CD pipelines — the same Make + Git + CI patterns from Chapter 10 apply directly, with `emacs --batch` replacing `pandoc`.

Loading a full user configuration in batch mode:

```sh
emacs --batch \
  --load "~/.emacs.d/init.el" \
  --visit "document.org" \
  --funcall org-latex-export-to-pdf
```

This applies all your custom LaTeX classes, package settings, and export options. The startup time is longer (it loads your full configuration), but the export uses exactly the settings you have developed interactively.

### HTML export

The HTML backend (`ox-html`) produces HTML5 by default. It includes a built-in CSS stylesheet, which can be suppressed and replaced with a custom one:

```org
#+OPTIONS: html-style:nil
#+HTML_DOCTYPE: html5
#+HTML_HEAD: <link rel="stylesheet" href="style.css"/>
#+HTML_HEAD: <meta name="viewport" content="width=device-width">
```

The `#+HTML_HEAD:` keyword injects arbitrary content into the `<head>` element — the correct place for stylesheets, web fonts, and meta tags. Multiple `#+HTML_HEAD:` lines are all included.

Per-section HTML customisation uses property drawers:

```org
*** Featured section
:PROPERTIES:
:HTML_CONTAINER_CLASS: featured
:END:

This section gets an additional CSS class on its container element.
```

Raw HTML for elements that Org cannot express:

```org
#+BEGIN_EXPORT html
<figure class="wide">
  <img src="figure.png" alt="A diagram">
  <figcaption>A diagram with a custom container class.</figcaption>
</figure>
#+END_EXPORT
```

Export-specific blocks are ignored by other backends — LaTeX export ignores `#+BEGIN_EXPORT html` blocks and vice versa. This allows format-specific content in a single source file.

### LaTeX and PDF export

The LaTeX backend (`ox-latex`) translates Org structure to LaTeX commands and optionally runs the LaTeX compiler to produce a PDF. Document classes, packages, and preamble additions are configured through `#+LATEX_CLASS:`, `#+LATEX_CLASS_OPTIONS:`, and `#+LATEX_HEADER:` keywords:

```org
#+LATEX_CLASS: scrartcl
#+LATEX_CLASS_OPTIONS: [11pt,a4paper]
#+LATEX_HEADER: \usepackage{fontspec}
#+LATEX_HEADER: \setmainfont{EB Garamond}
#+LATEX_HEADER: \usepackage{microtype}
#+LATEX_HEADER: \usepackage{geometry}
#+LATEX_HEADER: \geometry{margin=25mm}
```

LaTeX classes must be registered in the Emacs configuration before they can be used. The registration maps the class name to a document class declaration and a set of section commands:

```emacs-lisp
(with-eval-after-load 'ox-latex
  (add-to-list 'org-latex-classes
    '("scrartcl"
      "\\documentclass[11pt,a4paper]{scrartcl}"
      ("\\section{%s}"       . "\\section*{%s}")
      ("\\subsection{%s}"    . "\\subsection*{%s}")
      ("\\subsubsection{%s}" . "\\subsubsection*{%s}"))))
```

The PDF compilation command is set through `org-latex-pdf-process`. Using `latexmk` handles multi-pass compilation automatically:

```emacs-lisp
(setq org-latex-pdf-process
  '("latexmk -xelatex -quiet %f"))
```

Math in Org is written in LaTeX notation and exported correctly to both LaTeX and HTML:

```org
Inline: \(E = mc^2\)

Display:
\[
  \int_a^b f'(x)\,dx = f(b) - f(a)
\]
```

For HTML math rendering, MathJax or KaTeX is typically used — configured in the `#+HTML_HEAD:` or by setting `org-html-mathjax-options`.

### ODT export

The ODT backend (`ox-odt`) produces OpenDocument Text files compatible with LibreOffice and Word. This is Org's path to the `.docx` format: export to ODT, then convert with LibreOffice from the command line:

```sh
# Export Org to ODT, then convert to DOCX
emacs --batch --eval "(require 'org)" \
  --visit document.org --funcall org-odt-export-to-odt

libreoffice --headless --convert-to docx document.odt
```

ODT export supports custom templates — a `.ott` file (ODT template) that provides the styles the export uses. This is the mechanism for applying a specific visual design to Org's ODT output, analogous to a LaTeX document class.

### EPUB export

EPUB export is provided by the `ox-epub` package, which must be installed separately:

```sh
# In Emacs:
M-x package-install RET ox-epub RET
```

Once installed and loaded, EPUB export appears in the dispatch menu:

```org
#+EPUB_COVER: cover.jpg
#+EPUB_STYLESHEET: epub.css
```

Export from the command line:

```sh
emacs --batch \
  --eval "(require 'org)" \
  --eval "(require 'ox-epub)" \
  --visit "document.org" \
  --funcall org-epub-export-to-epub
```

Pandoc is an alternative path for Org-to-EPUB conversion. Pandoc reads `.org` files natively, so the full Pandoc EPUB pipeline from Chapter 9 is available:

```sh
pandoc document.org -f org -o output.epub --toc --split-level=1
```

Pandoc's Org reader does not support all Org features (Babel blocks are ignored, some export keywords have no equivalent), but for standard prose documents it is a clean alternative to `ox-epub`.


## Babel: literate programming in Org

Babel is Org's code execution subsystem. It allows source blocks to be executed inline, with results inserted into the document. This is the same capability as Quarto's code execution, but implemented within Emacs and predating Quarto by over a decade.

A Babel source block:

```org
#+BEGIN_SRC python :results output :exports both
import sys
print(f"Python {sys.version}")
print("Typography begins with the alphabet.")
#+END_SRC

#+RESULTS:
: Python 3.12.3
: Typography begins with the alphabet.
```

The `:results output` header argument captures standard output. The `:exports both` argument includes both the source code and the result in the export. Other common header arguments:

- `:results value` — capture the return value rather than stdout
- `:results table` — format a list-of-lists as an Org table
- `:exports code` — export only the code, not the results
- `:exports results` — export only the results, not the code
- `:exports none` — execute but include neither in export
- `:eval never-export` — don't execute during export (use cached results)
- `:session *name*` — run in a persistent session (preserves state between blocks)
- `:var x=value` — pass a value to the block as a variable
- `:dir /path/` — run the block in a specific directory
- `:tangle filename.py` — extract the code to a file (the "tangling" half of literate programming)

Babel supports dozens of languages: Python, R, shell, Emacs Lisp, C, C++, JavaScript, Haskell, Lua, SQL, LaTeX, Graphviz, Gnuplot, and many more. Languages are enabled in the Emacs configuration:

```emacs-lisp
(org-babel-do-load-languages
  'org-babel-load-languages
  '((python     . t)
    (shell       . t)
    (R           . t)
    (latex       . t)
    (gnuplot     . t)
    (dot         . t)    ; Graphviz DOT
    (emacs-lisp  . t)))
```

**Block chaining** allows the output of one block to become the input to another:

```org
#+NAME: generate-data
#+BEGIN_SRC python :results value
return [(i, i**2) for i in range(1, 11)]
#+END_SRC

#+BEGIN_SRC python :var data=generate-data :results output
for n, sq in data:
    print(f"  {n:2d}²  =  {sq:3d}")
#+END_SRC
```

The `:var data=generate-data` header argument passes the results of the `generate-data` block to the second block as the variable `data`. This enables multi-step computational pipelines within a single document.

**The tangling system** extracts code from Babel blocks to create runnable source files — the other half of Literate Programming in Knuth's original sense:

```org
#+BEGIN_SRC python :tangle build.py :exports none
import subprocess

def build_pdf(source):
    """Build a PDF from a Markdown source file."""
    result = subprocess.run(
        ["pandoc", source, "-o", source.replace(".md", ".pdf")],
        capture_output=True
    )
    return result.returncode == 0
#+END_SRC
```

Running `C-c C-v t` (or `M-x org-babel-tangle`) extracts all tangled blocks to their specified files. The document is simultaneously a piece of human-readable prose explaining the code and the source of the code itself — a genuine literate program.


## AUCTeX: LaTeX editing in Emacs

AUCTeX is the Emacs package for LaTeX editing. It provides syntax highlighting, automatic indentation, reference management, smart compilation, and a set of keyboard shortcuts that make writing LaTeX considerably faster. It is the standard LaTeX authoring environment for Emacs users.

Install AUCTeX through Emacs's package system:

```
M-x package-install RET auctex RET
```

A minimal AUCTeX configuration:

```emacs-lisp
(use-package auctex
  :defer t
  :hook
  ((LaTeX-mode . LaTeX-math-mode)
   (LaTeX-mode . reftex-mode)
   (LaTeX-mode . flycheck-mode))
  :custom
  (TeX-engine 'xetex)          ; use XeLaTeX
  (TeX-PDF-mode t)             ; produce PDF output
  (TeX-save-query nil)         ; auto-save before compiling
  (TeX-source-correlate-mode t) ; synctex for source-PDF sync
  :config
  ;; Add latexmk as a compilation command
  (add-to-list 'TeX-command-list
    '("LatexMk" "latexmk -xelatex %s"
      TeX-run-TeX nil t
      :help "Run latexmk with XeLaTeX")))
```

**Key AUCTeX commands:**

- `C-c C-c` — smart compile: determines the right command based on context (LaTeX, BibTeX, view, etc.)
- `C-c C-v` — view the compiled PDF
- `C-c C-e` — insert an environment (prompts for environment name, with completion)
- `C-c C-s` — insert a sectioning command
- `C-c C-m` — insert a macro
- `C-c ~` — toggle math mode
- `C-c C-a` — compile and view in one command

**RefTeX** is AUCTeX's companion for cross-reference and citation management. It parses the document structure and bibliography to provide completion for `\ref`, `\cite`, and related commands:

```emacs-lisp
(use-package reftex
  :after auctex
  :custom
  (reftex-plug-into-AUCTeX t)
  (reftex-cite-format 'natbib))
```

With RefTeX active:
- `C-c (` — insert a `\label{...}` with completion
- `C-c )` — insert a `\ref{...}` with completion (shows label context)
- `C-c [` — insert a citation with BibTeX key completion

**SyncTeX** integration — configured through `TeX-source-correlate-mode t` — enables bidirectional navigation between the source file and the PDF. In a compatible PDF viewer (Evince, Skim, Zathura), clicking in the PDF jumps to the corresponding source location; pressing `C-c C-v` in the source jumps to the corresponding PDF location.

**Preview-LaTeX**, bundled with AUCTeX, renders mathematical formulas as inline images in the Emacs buffer. This provides immediate visual feedback for complex equations without compiling the full document:

```
C-c C-p C-b   — preview entire buffer
C-c C-p C-s   — preview at point (single formula)
C-c C-p C-c   — clear all previews
```


## A practical Org workflow

Org's document production workflow is centred in Emacs, but the output integrates with the same CLI infrastructure as every other tool in this book. A Make-based build for an Org project:

```makefile
DOCUMENT := document
ORG_FILE := $(DOCUMENT).org
BUILD    := build
EMACS    := emacs --batch

.PHONY: all html pdf odt clean

all: html pdf

$(BUILD):
	mkdir -p $@

$(BUILD)/$(DOCUMENT).html: $(ORG_FILE) | $(BUILD)
	$(EMACS) \
	  --eval "(require 'org)" \
	  --eval "(setq org-export-with-smart-quotes t)" \
	  --visit "$<" \
	  --funcall org-html-export-to-html
	mv $(DOCUMENT).html $@

$(BUILD)/$(DOCUMENT).pdf: $(ORG_FILE) | $(BUILD)
	$(EMACS) \
	  --eval "(require 'org)" \
	  --eval "(setq org-latex-pdf-process \
	    '(\"latexmk -xelatex -quiet %f\"))" \
	  --visit "$<" \
	  --funcall org-latex-export-to-pdf
	mv $(DOCUMENT).pdf $@

clean:
	rm -rf $(BUILD) *.html *.pdf *.tex *.aux *.log
```

The `emacs --batch` approach works without a display and is suitable for CI/CD pipelines. The startup overhead (loading Emacs and its configuration) adds a few seconds to each build, but for document-sized projects this is acceptable.

---

Org Mode and Emacs represent the deepest end of the CLI typesetting spectrum. The learning investment is real and substantial. For Emacs users who have made that investment, Org's combination of outline editing, spreadsheet tables, Babel code execution, and multi-format export makes it a uniquely capable authoring environment. For everyone else, the tools covered in the preceding chapters cover the same functional ground with a shallower learning curve.

The next chapter examines the tools at the other end of the age spectrum: `groff`, `troff`, and the Unix heritage that predates all of this book's other tools by decades.
