# Presentations

A presentation is a constrained document: a fixed sequence of screens, each carrying a limited amount of information, structured to be read not by a reader at their own pace but by an audience following a speaker. The typographic requirements are different from those of a printed document — larger type, stronger contrast, simpler layouts — and the relationship between source and output is different too: a presentation must work as a PDF for in-person delivery, as an HTML file for online sharing, and sometimes as a handout that compresses multiple slides onto a printed page.

LaTeX's Beamer class and Pandoc's Reveal.js output cover these requirements from the CLI. Both are produced from the same Markdown source with different compilation targets; both support mathematical notation; both allow speaker notes to live in the source without appearing on the presentation screen. Quarto adds code execution to the mix, as covered in Chapter 14. This chapter focuses on the Beamer and Reveal.js paths.


## Beamer: the LaTeX presentation system

Beamer is a LaTeX document class that produces PDF presentations. Every slide is a `frame` environment. The class handles all the structural elements — navigation bars, progress indicators, headers, footers — through a theme system, and provides overlay specifications for incremental reveals.

### Document class and themes

```latex
\documentclass[aspectratio=169,10pt]{beamer}
\usepackage[T1]{fontenc}
```

The `aspectratio` option sets the slide dimensions. The standard options are `43` (4:3, 128×96mm), `169` (16:9, 160×90mm), and `1610` (16:10, 160×100mm). Most modern projection uses 16:9; choose `169` unless you have a specific reason for another ratio.

Beamer separates visual appearance into four theme layers:

**Presentation themes** (`\usetheme{}`) set the overall structure — where navigation appears, whether there is a sidebar, how the title slide is laid out. Built-in themes include: `default`, `Boadilla`, `Madrid`, `AnnArbor`, `CambridgeUS`, `Pittsburgh`, `Rochester`, `Antibes`, `Bergen`, `Berkeley`, `Berlin`, `Copenhagen`, `Darmstadt`, `Dresden`, `Frankfurt`, `Ilmenau`, `JuanLesPins`, `Luebeck`, `Malmoe`, `Marburg`, `Montpellier`, `PaloAlto`, `Singapore`, `Szeged`, `Warsaw`.

**Colour themes** (`\usecolortheme{}`) apply colour schemes over the presentation theme. Paired colour themes (`crane`, `dolphin`, `dove`, `fly`, `monarca`, `orchid`, `rose`, `seagull`, `seahorse`, `whale`, `wolverine`) work with most presentation themes; outer colour themes (`albatross`, `beetle`, `crane`, `default`, `dove`, `fly`, `seagull`) override the outer elements specifically.

**Font themes** (`\usefonttheme{}`) control typography within the slide elements. `professionalfonts` suppresses Beamer's default sans-serif headings when using a serif presentation font; `serif` switches all Beamer text to the document's serif font.

**Metropolis** is the most widely used third-party theme — a clean, flat, sans-serif design that produces modern-looking slides without the dated appearance of Beamer's built-in themes:

```latex
\usetheme{metropolis}
```

Metropolis requires the `fira` font packages (`texlive-fonts-extra` on Debian/Ubuntu) for its default typography but falls back gracefully without them.

### Slides as frames

Every slide is a `frame` environment. The slide title is set with `\frametitle{}` or as an optional argument:

```latex
\begin{frame}{The CLI Advantage}
  CLI tools separate \alert{content} from \alert{presentation}.

  \begin{itemize}
    \item Source in Markdown = version-controllable
    \item Multiple outputs from one source
    \item Reproducible: same input, same output, always
  \end{itemize}
\end{frame}
```

`\alert{}` applies the theme's accent colour — typically red or a strong accent — to draw attention to specific terms.

**Block environments** provide structured callout boxes:

```latex
\begin{block}{Standard block}
  Used for definitions and general content.
\end{block}

\begin{alertblock}{Alert block}
  Used for warnings and critical information.
\end{alertblock}

\begin{exampleblock}{Example block}
  Used for examples and demonstrations.
\end{exampleblock}
```

**Two-column layouts** use the `columns` environment:

```latex
\begin{columns}[T]
  \begin{column}{.48\textwidth}
    \begin{block}{Left}
      Content on the left.
    \end{block}
  \end{column}
  \begin{column}{.48\textwidth}
    \begin{block}{Right}
      Content on the right.
    \end{block}
  \end{column}
\end{columns}
```

The `[T]` option aligns columns at the top rather than at the centre.

**Frame options** control special slide behaviour:

- `[plain]` — removes all decoration (header, footer, navigation). Used for title cards, full-screen images, or closing "Questions?" slides.
- `[fragile]` — required for slides containing verbatim text or code listings. Without it, LaTeX cannot parse code correctly inside a frame.
- `[allowframebreaks]` — allows the frame to continue to a new slide if the content is too long. Useful for bibliography slides.
- `[standout]` — Metropolis-specific: a full-bleed accent-colour slide, used for section breaks or emphasis.

### Overlays: incremental reveals

Overlays are Beamer's mechanism for building up a slide incrementally across multiple PDF pages (which appear as a single slide in presentation mode). The overlay specification `<n>` makes content visible only on overlay `n`; `<n->` makes it visible from overlay `n` onward; `<n-m>` makes it visible from `n` to `m`.

Most commonly, `\pause` inserts a break between consecutive blocks:

```latex
\begin{frame}{Building a slide}
  First item appears immediately.

  \pause

  Then this block appears after the first pause.

  \pause

  And this after the second pause.
\end{frame}
```

For itemised lists, `\begin{itemize}[<+->]` applies an overlay to each item in sequence:

```latex
\begin{frame}{Incremental list}
  \begin{itemize}[<+->]
    \item First item
    \item Second item
    \item Third item
  \end{itemize}
\end{frame}
```

The `<+->` specification uses Beamer's overlay counter: each item appears on the next overlay. This is equivalent to manually specifying `<1->`, `<2->`, `<3->` on each `\item` but without the maintenance overhead of counting.

More fine-grained overlay control:

```latex
\only<2>{This text only appears on overlay 2.}
\visible<1-3>{Visible on overlays 1 through 3.}
\uncover<3->{Hidden until overlay 3 but reserves space.}
\alt<2>{Shown on overlay 2}{Shown on all other overlays}
```

`\only` and `\visible` are the most common: `\only` completely removes content on other overlays (no space reserved); `\visible` shows or hides content but always reserves the space (preventing layout shifts between overlays).

### Speaker notes

Speaker notes are enclosed in `\note{}` or a `note` environment after the frame:

```latex
\begin{frame}{Key findings}
  \begin{itemize}
    \item CLI tools match LaTeX quality with configuration
    \item Setup time: approximately two hours
  \end{itemize}
  \note{
    Emphasise that the configuration is one-time. Once the defaults
    file is written, subsequent documents need no setup.
  }
\end{frame}
```

By default, notes do not appear in the output. To produce a notes-alongside-slides handout, configure `pgfpages`:

```latex
\usepackage{pgfpages}
\setbeameroption{show notes on second screen=right}
```

This produces a PDF where each page shows the slide on the left and the notes on the right — suitable for a presenter display using a second screen or PDF viewer with dual-monitor support.

### Handout mode

The `handout` class option removes all overlays (showing the final state of each slide) and produces a compact PDF suitable for distribution:

```latex
\documentclass[handout,aspectratio=169]{beamer}
```

Combined with `pgfpages`, multiple slides can be printed per page:

```latex
\usepackage{pgfpages}
\pgfpagesuselayout{2 on 1}[a4paper,border shrink=5mm]
% or: 4 on 1, 6 on 1, 8 on 1
```

`2 on 1` places two slides side by side on an A4 page — a common handout format. `4 on 1` places four slides in a 2×2 grid — more compact but harder to read without a projector as reference.


## Pandoc Markdown to Beamer

Pandoc converts Markdown to Beamer slides, handling the structural mapping automatically: level-2 headings (`##`) become frame titles, level-1 headings (`#`) become section title frames, and the horizontal rule (`---`) can also create frame breaks.

A minimal slide deck in Pandoc Markdown:

```markdown
---
title: "CLI Typography"
subtitle: "From Markdown to Slides"
author: "A. N. Author"
institute: "University of Example"
date: "March 2024"
theme: metropolis
aspectratio: 169
fontsize: 10pt
---

# The Problem

## GUI Slides

- Inconsistent formatting across slides
- Not version-controllable
- Hard to maintain consistency

## Side-by-Side Columns

:::::::::::::: {.columns}
::: {.column width="50%"}
**Beamer (PDF)**

- Print quality
- Math support
- Works offline
:::
::: {.column width="50%"}
**Reveal.js (HTML)**

- Interactive
- Speaker notes
- Runs in browser
:::
::::::::::::::
```

Compile to PDF:

```sh
pandoc slides.md -t beamer --pdf-engine=xelatex -o slides.pdf
```

Or with a custom Beamer template to add packages and settings not available through YAML variables:

```sh
pandoc slides.md -t beamer \
  --template=beamer-template.latex \
  --pdf-engine=xelatex \
  -o slides.pdf
```

**Incremental reveals** in Pandoc Markdown use `. . .` (three dots on their own line) to insert a `\pause`:

```markdown
## Building up content

First block appears immediately.

. . .

This block appears after the first pause.

. . .

And this after the second.
```

**Speaker notes** use a fenced div with class `notes`:

```markdown
## Key findings

- CLI tools match LaTeX quality with appropriate configuration

::: notes
Emphasise the "appropriate configuration" qualifier. The point is
that out-of-the-box defaults are not enough; intentional setup is required.
:::
```

**Key Beamer metadata variables** for the YAML front matter:

| Variable | Effect |
|----------|--------|
| `theme` | Presentation theme (`metropolis`, `Madrid`, etc.) |
| `colortheme` | Colour theme (`beaver`, `crane`, etc.) |
| `fonttheme` | Font theme (`serif`, `professionalfonts`) |
| `aspectratio` | Slide ratio (`169`, `43`, `1610`) |
| `fontsize` | Base font size (`10pt`, `11pt`, `12pt`) |
| `slide-level` | Heading level creating slides (default: `2`) |
| `section-titles` | Show section title frames (`true`/`false`) |
| `navigation` | Navigation symbols (`empty`, `frame`, `vertical`) |

For a handout, pass the `handout` class option through the YAML:

```yaml
classoption:
  - handout
```

Or from the command line:

```sh
pandoc slides.md -t beamer -V classoption=handout -o slides-handout.pdf
```


## Reveal.js: HTML presentations

Reveal.js produces interactive HTML presentations. The same Markdown source that compiles to Beamer PDF compiles to Reveal.js HTML, with different options:

```sh
pandoc slides.md -t revealjs --standalone \
  -V theme=white \
  -V slideNumber=true \
  -V transition=fade \
  -o slides.html
```

The output is a self-describing HTML file that loads Reveal.js from a CDN (or a local copy). Open it in a browser to present; the `f` key enters full-screen, `s` opens the speaker notes view, `b` blacks out the screen.

**Reveal.js themes** available through Pandoc: `black`, `white`, `league`, `beige`, `sky`, `night`, `serif`, `simple`, `solarized`, `blood`, `moon`.

**Transition styles** for slide transitions: `none`, `fade`, `slide`, `convex`, `concave`, `zoom`.

**Key Reveal.js metadata variables:**

| Variable | Effect |
|----------|--------|
| `theme` | Visual theme |
| `transition` | Slide transition style |
| `slideNumber` | Show slide numbers (`true`/`false`) |
| `controls` | Show navigation controls |
| `progress` | Show progress bar |
| `history` | Enable browser history navigation |
| `center` | Vertically centre slide content |
| `width`, `height` | Slide dimensions in pixels |
| `margin` | Slide margin as fraction of screen |
| `revealjs-url` | Path to Reveal.js files (for local installation) |

For a standalone file that can be distributed or archived without an internet connection, install Reveal.js locally and reference it:

```sh
npm install reveal.js

pandoc slides.md -t revealjs --standalone \
  -V revealjs-url=./node_modules/reveal.js \
  -o slides.html
```

The `revealjs-url` variable overrides the default CDN path. With a local Reveal.js installation, the HTML file is fully self-contained within its directory and works without internet access.

**Speaker notes** in Reveal.js are visible in the speaker view (`s` key) but not on the main display. They use the same `::: notes` fenced div syntax as Beamer.

**The `slide-level` option** controls which heading level creates slides. With `--slide-level=1`, level-1 headings (`#`) create slides and level-2 headings (`##`) create subsection breaks within slides. With `--slide-level=2` (the default), level-1 headings create section title slides and level-2 headings create content slides. Choose based on how your source is structured.


## Producing from a common source

The value of the Pandoc approach is producing both a PDF for presentation and an HTML version for online sharing from the same Markdown source. A Makefile handles this:

```makefile
SLIDES := slides
BUILD  := build

.PHONY: all pdf html handout clean

all: pdf html

$(BUILD):
	mkdir -p $@

$(BUILD)/$(SLIDES).pdf: $(SLIDES).md | $(BUILD)
	pandoc $< -t beamer \
	  --pdf-engine=xelatex \
	  -V theme=metropolis \
	  -V aspectratio=169 \
	  -o $@

$(BUILD)/$(SLIDES)-handout.pdf: $(SLIDES).md | $(BUILD)
	pandoc $< -t beamer \
	  --pdf-engine=xelatex \
	  -V theme=metropolis \
	  -V classoption=handout \
	  -V aspectratio=169 \
	  -o $@

$(BUILD)/$(SLIDES).html: $(SLIDES).md | $(BUILD)
	pandoc $< -t revealjs \
	  --standalone \
	  -V theme=white \
	  -V slideNumber=true \
	  -V transition=fade \
	  -o $@

clean:
	rm -rf $(BUILD)
```

Running `make all` produces three files: `slides.pdf` (the presentation), `slides-handout.pdf` (the handout without overlays), and `slides.html` (the interactive web version).

The Beamer and Reveal.js outputs are visually different — they use different themes, different layout systems, different fonts — but the content is the same. Structural changes (adding a slide, revising a bullet point, adding a new section) are made once in the Markdown source and propagate to all three outputs.


## Quarto for slides with executable code

When presentation slides contain generated figures — data visualisations, simulation results, plots from an analysis — Quarto provides code execution in presentation format. Covered in Chapter 14, the key points for presentations specifically:

A Quarto presentation uses the same `.qmd` format as other Quarto documents, with either `revealjs` or `beamer` as the output format:

```yaml
---
format:
  revealjs:
    theme: default
    slide-number: true
  beamer:
    theme: metropolis
    aspectratio: 169
---
```

Code blocks in slides execute and embed their output directly:

```python
#| echo: false
#| fig-width: 6
#| fig-height: 3.5

import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 100)
fig, ax = plt.subplots()
ax.plot(x, np.sin(x))
ax.set_xlabel("x")
plt.tight_layout()
plt.show()
```

The figure appears on the slide without any manual export or inclusion step. When the analysis changes, recompiling the presentation rebuilds the figure automatically.

For presentations in scientific and academic contexts where results must be current and reproducible, this is the right approach. For presentations that do not involve computation, plain Pandoc Markdown with Beamer or Reveal.js is simpler and has fewer dependencies.

---

Presentations complete the standard range of document types for professional and academic work. The next chapter — Books — scales up to the most complex document type: a work with dozens of chapters, a complete front matter apparatus, an index, and output in multiple formats simultaneously.
