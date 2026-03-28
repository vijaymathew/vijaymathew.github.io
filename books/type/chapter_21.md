# Presentations

A presentation is a constrained document: a fixed sequence of screens, each carrying a limited amount of information, structured to be read not by a reader at their own pace but by an audience following a speaker. The typographic requirements are different from those of a printed document — larger type, stronger contrast, simpler layouts — and the relationship between source and output is different too: a presentation must work as a PDF for in-person delivery, as an HTML file for online sharing, and sometimes as a handout that compresses multiple slides onto a printed page.

For most presentation work, the default CLI path should start with Markdown and target Reveal.js or Quarto's `revealjs` format. That keeps the deck readable in source control, easy to publish on the web, and simple to revise quickly. A PDF deck is still useful for venues that require offline delivery, strict archival formats, or print handouts, but it should be treated as a secondary target produced from the same source rather than as the workflow's centre of gravity. This chapter therefore treats Markdown and Reveal.js as the primary path, with Quarto as the executable extension and PDF export as a derivative step.


## Reveal.js as the default deck

Reveal.js is the right default because the source stays plain Markdown, the delivered artifact is a web-native deck, and speaker notes, slide navigation, and print styles are already built into the presentation layer.

### Metadata and themes

```yaml
---
title: "CLI Typography"
subtitle: "From Markdown to Slides"
author: "A. N. Author"
date: "March 2024"
format:
  revealjs:
    theme: white
    slide-number: true
    transition: fade
    width: 1600
    height: 900
    chalkboard: false
---
```

Most modern projection uses 16:9. Whether you set that explicitly with pixel dimensions or inherit it from the theme, keep the deck designed for widescreen unless the venue says otherwise.

### Slides, columns, and callouts

Every slide should be a heading plus a small amount of structured content:

```markdown
## The CLI Advantage

CLI tools separate **content** from **presentation**.

- Source in Markdown = version-controllable
- Multiple outputs from one source
- Reproducible: same input, same output, always
```

Side-by-side slides are expressed with Pandoc or Quarto fenced divs rather than backend-specific frame syntax:

```markdown
## Side-by-Side Columns

:::::: {.columns}
::: {.column width="50%"}
**Print**

- Stable PDF export
- Predictable handouts
- Good for archives
:::
::: {.column width="50%"}
**Web**

- Speaker notes
- Browser delivery
- Easy sharing
:::
::::::
```

### Incremental reveals

Incremental reveals should be authored in Markdown, not in slide-engine commands:

```markdown
## Building up content

First block appears immediately.

. . .

This block appears after the first pause.

. . .

And this after the second.
```

Use reveals sparingly. They are useful when they control pacing; they are noise when they merely dramatise a static list.

### Speaker notes

Speaker notes belong in the source as fenced divs:

```markdown
## Key findings

- CLI tools match desktop publishing quality with appropriate setup
- Reproducibility is the main operational advantage

::: notes
Emphasise the "appropriate setup" qualifier. The argument is not that
defaults are perfect, but that the workflow is controllable.
:::
```

That works in Reveal.js speaker view and in Quarto-generated decks without turning the slide source into presenter markup.

### Handouts and PDF export

When you need a PDF handout, export it from the same HTML deck rather than rebuilding the deck in a different language. Reveal.js supports print styles, and tools such as `decktape` can capture the rendered presentation:

```sh
pandoc slides.md -t revealjs --standalone \
  -V theme=white \
  -V slideNumber=true \
  -V transition=fade \
  -o slides.html

decktape reveal slides.html slides.pdf
```

For a handout, either use a custom print stylesheet or generate a second HTML build with overlays disabled and smaller margins.


## Markdown source shared across slide targets

Pandoc converts the same Markdown source to multiple slide targets. In practice, that usually means Reveal.js HTML as the primary artifact and an exported PDF as the secondary artifact. Level-2 headings (`##`) become slide titles, level-1 headings (`#`) become section dividers when the theme supports them, and horizontal rules can also force breaks.

A minimal slide deck in Pandoc Markdown:

```markdown
---
title: "CLI Typography"
subtitle: "From Markdown to Slides"
author: "A. N. Author"
institute: "University of Example"
date: "March 2024"
theme: metropolis
transition: fade
slideNumber: true
---

# The Problem

## GUI Slides

- Inconsistent formatting across slides
- Not version-controllable
- Hard to maintain consistency

## Side-by-Side Columns

:::::::::::::: {.columns}
::: {.column width="50%"}
**PDF Export**

- Exported handout
- Useful for archives
- Venue fallback
:::
::: {.column width="50%"}
**Reveal.js (HTML)**

- Interactive
- Speaker notes
- Runs in browser
:::
::::::::::::::
```

Compile the shared Markdown source to HTML first:

```sh
pandoc slides.md -t revealjs --standalone \
  -V theme=white \
  -V slideNumber=true \
  -o slides.html
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

- CLI tools match print-quality output with appropriate configuration

::: notes
Emphasise the "appropriate configuration" qualifier. The point is
that out-of-the-box defaults are not enough; intentional setup is required.
:::
```

**Key presentation metadata variables** for the YAML front matter:

| Variable | Effect |
|----------|--------|
| `theme` | Visual theme (`white`, `black`, `league`, etc.) |
| `transition` | Transition style (`fade`, `slide`, `zoom`) |
| `slideNumber` | Show slide numbers |
| `width`, `height` | Slide dimensions |
| `slide-level` | Heading level creating slides (default: `2`) |
| `controls` | Show navigation controls |
| `progress` | Show progress bar |
| `center` | Vertically centre slide content |

For a handout build, switch to a print stylesheet or export the Reveal.js HTML to PDF after rendering.


## Reveal.js: HTML presentations

Reveal.js produces interactive HTML presentations. The same Markdown source compiles directly to an HTML deck:

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

**Speaker notes** in Reveal.js are visible in the speaker view (`s` key) but not on the main display. They use the same `::: notes` fenced div syntax shown earlier.

**The `slide-level` option** controls which heading level creates slides. With `--slide-level=1`, level-1 headings (`#`) create slides and level-2 headings (`##`) create subsection breaks within slides. With `--slide-level=2` (the default), level-1 headings create section title slides and level-2 headings create content slides. Choose based on how your source is structured.


## Producing from a common source

The value of the Pandoc approach is producing both a browser-native deck and a PDF derivative from the same Markdown source. In most workflows, the HTML deck is the primary artifact and the PDF is the fallback or handout. A Makefile handles this:

```makefile
SLIDES := slides
BUILD  := build

.PHONY: all pdf html clean

all: html pdf

$(BUILD):
	mkdir -p $@

$(BUILD)/$(SLIDES).html: $(SLIDES).md | $(BUILD)
	pandoc $< -t revealjs \
	  --standalone \
	  -V theme=white \
	  -V slideNumber=true \
	  -V transition=fade \
	  -o $@

$(BUILD)/$(SLIDES).pdf: $(BUILD)/$(SLIDES).html
	decktape reveal $< $@

clean:
	rm -rf $(BUILD)
```

Running `make all` produces `slides.html` and `slides.pdf` from the same Markdown source. Structural changes (adding a slide, revising a bullet point, adding a new section) are made once and propagate to both outputs.


## Quarto for slides with executable code

When presentation slides contain generated figures — data visualisations, simulation results, plots from an analysis — Quarto provides code execution in presentation format. Covered in Chapter 14, the key points for presentations specifically:

A Quarto presentation uses the same `.qmd` format as other Quarto documents, with `revealjs` as the default output format:

```yaml
---
format:
  revealjs:
    theme: default
    slide-number: true
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

For presentations in scientific and academic contexts where results must be current and reproducible, this is the right approach. For presentations that do not involve computation, plain Pandoc Markdown with Reveal.js is simpler and has fewer dependencies.

---

Presentations complete the standard range of document types for professional and academic work. The important pattern is the same as elsewhere in the book: write in Markdown, publish to the web by default, and generate PDF only when the context requires it. The next chapter — Books — scales that pattern up to the most complex document type: a work with dozens of chapters, a complete front matter apparatus, an index, and output in multiple formats simultaneously.
