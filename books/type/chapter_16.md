# groff, troff, and the Unix Heritage

In 1973, Joe Ossanna at Bell Labs typeset the first edition of the Unix Programmer's Manual using a program he called troff. The document was produced on a Graphic Systems CAT phototypesetter — a machine that exposed characters onto photosensitive paper by spinning a disc of glass type past a light source. The result was the first Unix documentation, set in proportional type, produced by the same computer it documented.

Fifty years later, groff — the GNU reimplementation of troff — still ships on every Linux system. It is the tool that formats man pages when you run `man ls` or `man pandoc`. It is smaller and faster than LaTeX, requires no separate installation beyond the system's standard package set, and for the specific task of writing Unix manual pages, it is the correct and standard tool. For everything else, it is a historical artifact that rewards study but does not reward adoption for new work.

This chapter covers groff from both angles: as the tool you need to understand to write man pages correctly, and as a piece of computing history that illuminates why the tools in the rest of this book are designed the way they are.


## The *roff family

The lineage of the *roff tools begins not at Bell Labs but at MIT. In 1964, Jerome Saltzer wrote RUNOFF for the Compatible Time-Sharing System — a program that took a file of text interspersed with formatting commands and produced formatted output. The name was a shorthand for "run it off," printing slang for producing a copy. Ken Thompson and Bob Morris ported a version of RUNOFF to Unix in 1969 and called it roff.

Joe Ossanna rewrote roff twice. The first rewrite, *nroff* ("new roff"), produced output for character-based terminals and teletype printers, using overstriking and spacing to approximate bold and underline on devices that could not do either. The second rewrite, *troff* ("typesetter roff"), produced output for the CAT phototypesetter with proportional fonts, real point sizes, and genuine typographic quality. Both programs share the same command language — input to nroff and troff is interchangeable, with nroff degrading gracefully on devices that cannot render typeset output.

Ossanna died in 1977. Brian Kernighan rewrote troff in C, generalising it to produce output for any device rather than only the CAT. This *device-independent troff* (ditroff) is the direct ancestor of modern groff. The GNU Project's James Clark released groff in 1990 as a free software implementation, adding PostScript and PDF output, Unicode support, and various extensions to the macro language.

The *roff command language is built around two concepts: *requests* and *macros*. A request is a two-letter command beginning with a dot at the start of a line that directly instructs the formatter:

```roff
.ps 11       \" set point size to 11
.vs 14p      \" set vertical spacing to 14 points
.ft I        \" switch to italic font
.br          \" line break
.sp 1        \" one line of vertical space
```

A macro is a named sequence of requests, defined with `.de` and invoked like a request. All the high-level document formatting — headings, paragraphs, footnotes, tables of contents — is built from macros, packaged in *macro packages*: collections of related macros that provide a complete document formatting system.

The major macro packages are:

**`-man`** — the man page macros, used for Unix manual pages. Every man page you have ever read was formatted by groff with these macros. They are minimal by design: man pages have a fixed structure, and the macros enforce it.

**`-ms`** — the manuscript macros, developed at Bell Labs. General-purpose document formatting with support for abstracts, multi-column layout, footnotes, and displays. Historically used for Bell Labs technical memoranda; still useful for simple documents.

**`-me`** — Eric Allman's manuscript macros from Berkeley. Similar in scope to `-ms` but with different syntax and conventions.

**`-mm`** — the memorandum macros from AT&T. Common in enterprise Unix environments; follows AT&T's document formatting conventions.

**`-mom`** — Peter Schaffter's "mom's own macros," a modern, full-featured package with a clean English-language interface. The most approachable macro package for new groff documents.

**`-mdoc`** — the semantic man page macros from BSD. More structured than `-man`, with macros for specific content types (commands, flags, pathnames, library functions) rather than just presentation. Preferred on FreeBSD and macOS; less common on Linux, which uses `-man`.


## The groff command

The `groff` command is the primary interface to the formatter. Its most important flag is `-T`, which selects the output device:

```sh
groff -T utf8    # formatted text for terminals (nroff mode)
groff -T ps      # PostScript
groff -T pdf     # PDF (groff 1.22+)
groff -T html    # HTML (basic, limited fidelity)
groff -T dvi     # DVI
```

The macro package is selected with `-m`:

```sh
groff -m man     # -man macros (man pages)
groff -m ms      # -ms macros (manuscripts)
groff -m mom     # -mom macros
```

Shorthand alternatives: `-man`, `-ms`, `-mom` as standalone flags work on many systems.

Preprocessors — programs that process specific markup within a groff file before groff itself sees it — are invoked with single-letter flags:

```sh
groff -t    # run tbl preprocessor (for tables)
groff -e    # run eqn preprocessor (for equations)
groff -p    # run pic preprocessor (for diagrams)
groff -R    # run refer preprocessor (for references)
```

A complete pipeline for a manuscript with tables and equations:

```sh
groff -ms -t -e document.ms -T pdf > output.pdf
```

The standard workflow for reading man pages:

```sh
# The normal path: man invokes groff internally
man pandoc

# Read a local man page file
man -l myprogram.1

# Format a man page to PDF
groff -man myprogram.1 -T pdf > myprogram.pdf

# Format to terminal text
groff -man myprogram.1 -T utf8 | less
```


## The -ms macros for documents

The `-ms` macros provide a practical document formatting system for short to medium documents. They are not competitive with LaTeX for complex work, but for a simple report, a technical memorandum, or a document that must be produced with no dependencies beyond a standard Unix system, they are adequate and fast.

A minimal `-ms` document:

```roff
.\" article.ms
.\" Format with: groff -ms article.ms -T pdf > article.pdf
.TL
Typography and Typesetting from the CLI
.AU
A. N. Author
.AI
University of Example
.AB
This article demonstrates the ms macro package.
.AE
.
.NH 1
Introduction
.LP
The
.I troff
typesetting system was created at Bell Labs in 1973.
It was used to typeset the first Unix Programmer's Manual.
.
.PP
Paragraphs with first-line indentation use
.CW .PP .
Left-aligned paragraphs without indentation use
.CW .LP .
.
.NH 2
Code examples
.LP
A displayed code example:
.DS
    pandoc input.md -o output.pdf --pdf-engine=xelatex
.DE
.LP
The
.CW .DS / .DE
pair offsets the content and prevents filling (word-wrapping).
```

Key `-ms` macros:

| Macro | Purpose |
|-------|---------|
| `.TL` | Title |
| `.AU` | Author |
| `.AI` | Author institution |
| `.AB` / `.AE` | Abstract begin / end |
| `.NH N` | Numbered heading, level N |
| `.SH` | Unnumbered section heading |
| `.LP` | Left-justified paragraph |
| `.PP` | Indented paragraph |
| `.QP` | Block quotation paragraph |
| `.DS` / `.DE` | Display (non-flowing) block |
| `.FS` / `.FE` | Footnote start / end |
| `.KS` / `.KE` | Keep together (don't split across pages) |
| `.B` | Bold |
| `.I` | Italic |
| `.CW` | Constant-width (monospace) |

Inline font changes use the backslash escape sequences common to all *roff:

```roff
Here is \fBbold\fR, \fIitalic\fR, and \f(CWmonospace\fR text.
```

`\fB`, `\fI`, `\fR`, and `\f(CW` switch to bold, italic, roman, and constant-width respectively. The `\fR` restores roman text after any font change. The `\f(CW` form uses the two-character font name `CW` (constant-width), as opposed to the one-character names `B`, `I`, `R`.


## Writing man pages

Man pages are the lingua franca of Unix documentation. Every command, system call, library function, file format, and convention used in Unix-like systems is documented in a man page. Writing a correct, complete man page is a non-trivial typographic task — the format has its own conventions, its own layout requirements, and its own reader expectations — but it is also genuinely useful: a well-written man page is often better documentation than a web page, because it is always local, always available, and always consistent.

### Structure

A man page has a fixed section order, established by decades of convention:

**`NAME`** — the command name and a single-line description, in the form `name - description`. The hyphen must be an ASCII hyphen, not an em dash. This section is what `apropos` and `man -k` search.

**`SYNOPSIS`** — the command's calling syntax, using typographic conventions to distinguish mandatory arguments, optional arguments, and repeatable arguments. Square brackets enclose optional elements; ellipses indicate repetition; bold marks command names and flags; italic marks metavariables (placeholders for actual values).

**`DESCRIPTION`** — a detailed explanation of what the command does.

**`OPTIONS`** — each flag and its effect, typically formatted as a tagged paragraph with the flag in bold and the description indented below.

**`EXAMPLES`** — usage examples that demonstrate the command in realistic contexts.

**`FILES`** — relevant configuration files, data files, or directories.

**`ENVIRONMENT`** — environment variables the command reads.

**`EXIT STATUS`** — exit codes and their meanings.

**`SEE ALSO`** — related commands and manual pages.

**`BUGS`** — known limitations or issues.

**`AUTHORS`** — attribution.

Not every section is required. A simple command needs NAME, SYNOPSIS, DESCRIPTION, and OPTIONS at minimum; the others are added as relevant.

### The -man macros

The key macros for writing man pages:

**`.TH`** opens the page and sets its metadata:

```roff
.TH TYPESET 1 "2024-03-15" "typeset 1.0" "User Commands"
```

Arguments: name, section number, date, source (version/package), and manual title. The section number follows the Unix convention: 1 for user commands, 2 for system calls, 3 for library functions, 5 for file formats, 8 for system administration.

**`.SH`** begins a section header. Convention dictates all-caps:

```roff
.SH NAME
.SH SYNOPSIS
.SH DESCRIPTION
```

**`.TP`** is the tagged paragraph macro — the primary building block of the OPTIONS section. The first line following `.TP` becomes the tag (left-justified, in the hanging position); subsequent lines form the description (indented):

```roff
.TP
.BI \-f " format"
Output format.
One of
.BR html ,
.BR pdf ,
or
.BR epub .
Default is
.BR pdf .
```

**Font alternating macros** — `.BI`, `.BR`, `.IR`, `.RB`, `.RI`, `.BO` — take their arguments and apply alternating fonts. `.BI` alternates bold and italic, `.BR` alternates bold and roman. This is the standard idiom for the SYNOPSIS section, where command names are bold and placeholders are italic:

```roff
.SH SYNOPSIS
.B typeset
.RB [ \-f
.IR format ]
.RB [ \-o
.IR output ]
.IR file
```

**`.EX`** and **`.EE`** mark example blocks (monospace, non-filling):

```roff
.PP
Convert a Markdown file to PDF:
.PP
.RS
.EX
typeset article.md
.EE
.RE
```

The `.RS` / `.RE` pair (relative start / relative end) increases the indent for the example block, which is conventional for examples in man pages.

### A complete man page

Here is a complete, conventional man page for a hypothetical command:

```roff
.TH TYPESET 1 "2024-03-15" "typeset 1.0" "User Commands"
.SH NAME
typeset \- produce typeset output from Markdown source
.SH SYNOPSIS
.B typeset
.RB [ \-f
.IR format ]
.RB [ \-o
.IR output ]
.IR file
.SH DESCRIPTION
.B typeset
converts a Markdown source file to a typeset document.
It uses Pandoc for conversion and supports HTML, PDF, and EPUB output.
.PP
When
.I file
is
.BR \- ,
standard input is used.
.SH OPTIONS
.TP
.BI \-f " format"
Output format.
One of
.BR html ,
.BR pdf ,
or
.BR epub .
Default is
.BR pdf .
.TP
.BI \-o " file"
Write output to
.I file
instead of the default path.
.TP
.BR \-v ", " \-\-verbose
Print the Pandoc command being executed.
.SH EXAMPLES
Convert a Markdown file to PDF:
.PP
.RS
.EX
typeset article.md
.EE
.RE
.PP
Convert to HTML:
.PP
.RS
.EX
typeset \-f html \-o output.html article.md
.EE
.RE
.SH FILES
.TP
.I ~/.config/typeset/defaults.yaml
Default Pandoc options.
.SH SEE ALSO
.BR pandoc (1),
.BR groff (1)
.SH AUTHORS
Written as an example for
.IR "The CLI Typographer" .
```

Several conventions in this example are worth noting. The `\-` escape produces a proper hyphen (minus sign) rather than a hyphen that may be converted to an en dash by groff. In SYNOPSIS, each optional flag is wrapped in `\[...` ].` with `RB` for the bracket and flag, `IR` for the metavariable. The `.SH SEE ALSO` section references related commands with their section numbers in parentheses, using `.BR` to bold the command name and follow it with `(1)` in roman.

Install and view a man page:

```sh
# Install to a local man directory
mkdir -p ~/.local/share/man/man1
cp typeset.1 ~/.local/share/man/man1/

# Update the man database
mandb ~/.local/share/man

# Read it
man typeset
```


## Pandoc as a man page authoring tool

Writing man pages directly in groff syntax is the correct approach for complex pages with many formatting details. For simpler pages, Pandoc's man output format offers an alternative: write the man page in Markdown with appropriate metadata, and let Pandoc generate the troff source.

```markdown
---
title: TYPESET
section: 1
date: 2024-03-15
header: User Commands
footer: typeset 1.0
---

# NAME

typeset - produce typeset output from Markdown source

# SYNOPSIS

**typeset** [**-f** *format*] [**-o** *output*] *file*

# DESCRIPTION

**typeset** converts a Markdown file to a typeset document.

# OPTIONS

**-f** *format*
:   Output format: **html**, **pdf**, or **epub**. Default: **pdf**.

**-o** *file*
:   Write output to *file*.

# SEE ALSO

**pandoc**(1), **groff**(1)
```

```sh
pandoc mycommand.md -t man > mycommand.1
```

Pandoc translates Markdown's structure to the corresponding man macros: `#` headings become `.SH` sections, definition lists (`:   definition`) become `.TP` tagged paragraphs, bold and italic become the appropriate font switches.

The Pandoc-generated source is readable and correct, though it uses `\f[B]` and `\f[I]` for font changes rather than the more traditional `.B` and `.I` macros — both are valid groff, and both render identically.

The reverse path also works: Pandoc reads man format and converts it to HTML, Markdown, or any other output:

```sh
# Read a man page and convert to HTML documentation
pandoc /usr/share/man/man1/ls.1.gz -f man -t html -s -o ls.html

# Convert your own man page to Markdown (for a README)
pandoc mycommand.1 -f man -t markdown -o USAGE.md
```

This round-trip capability is useful when you want to maintain documentation in man format (for proper Unix packaging) and also publish it as HTML or as a README.


## groff for documents today

Groff's practical role in contemporary document production is narrow but real. It is the tool for three specific tasks:

**Writing man pages.** This is groff's continuing primary purpose. Every Linux and Unix system expects man pages in troff format. Every package manager and documentation system knows how to install and render them. There is no better alternative for man pages that will be distributed with system software.

**Reading and converting existing troff documents.** Any document in groff's input format can be converted to PDF, HTML, or text. For organisations with legacy technical documentation in ms or mm format, groff is the path to modernisation without full re-authoring.

**Simple documents with zero dependencies.** A groff installation is part of every Linux system's base package set. A LaTeX installation is not. For shell scripts that need to produce formatted output, or for documents that must be buildable on any Unix system without additional packages, groff provides a complete formatter that is always available.

For general document production — articles, reports, books, documentation — the tools covered in earlier chapters are better choices. LaTeX provides higher typographic quality and a vastly larger package ecosystem. Pandoc provides format flexibility. Typst provides modern syntax and fast compilation. Groff has none of these advantages for general work. Its virtue is its universality: it is always there, it is always the same, and for man pages, it is exactly right.

---

The next chapter completes Part III with the tools that generate diagrams and figures from the command line — TikZ, Graphviz, gnuplot, Mermaid, and the others that produce the visual content that documents contain alongside their text.
