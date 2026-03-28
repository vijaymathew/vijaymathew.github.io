# Fine Typography

The preceding chapters have covered what must be done to produce a correct document. This chapter covers what can be done to produce an excellent one. The gap between correct and excellent is the territory of fine typography: microtypography, optical margin alignment, the elimination of widows and orphans, the treatment of special punctuation, and the attention to the paragraph as the unit of visual design.

None of this is visible at a glance. A reader does not notice that a paragraph's lines are justified to within a hair's breadth of perfection, or that the hanging punctuation extends slightly into the margin to maintain the visual alignment of the text block. What they notice is an absence — an absence of friction, of awkward line breaks, of the tiny disturbances that accumulate, in poorly typeset text, into a generalised sense of difficulty. Fine typography removes those disturbances.

In a Markdown-first workflow, fine typography is layered. Some decisions belong in the source itself: smart punctuation, non-breaking spaces, disciplined heading structure, and restraint about manual overrides. Some belong in CSS or the HTML template. Some belong in the PDF backend, where Typst can refine justification, line breaking, and spacing for print. The point of this chapter is to show where each layer earns its keep.

## Backend-specific microtypography

The available controls differ by engine. Typst, print-oriented CSS, and browser layout engines do not expose the same knobs, and that is acceptable: the workflow should stay source-centred even when the backends diverge. In a modern workflow, the main microtypographic decisions are:

- choosing a good text face with real italics, small caps, and ligatures
- enabling justified text only when the measure is suitable
- tagging the document language correctly for hyphenation
- applying tracking only to display text, small caps, and running heads

### Edge alignment and hanging punctuation

The visual edge of a paragraph should look straight even when lines end with commas or quotation marks. On the web, the only standard control is CSS hanging punctuation:

```css
p,
blockquote {
  hanging-punctuation: first last;
}
```

Support is still uneven, so this should be treated as an enhancement rather than a guarantee.

In Typst, edge handling is mostly implicit. The more important practical decision is to avoid bad measures and badly chosen fonts, which create visible edge noise that no low-level setting can rescue.

### Justification quality

Typst does not ask the author to micromanage glyph expansion. The right equivalent is to set up the paragraph environment correctly and then inspect the pages:

```typst
#set page(margin: (x: 28mm, y: 24mm))
#set text(font: "New Computer Modern", size: 11pt, lang: "en")
#set par(justify: true)
```

If justification looks uneven, solve the problem at the layout level first: shorten the measure, revise the copy, or choose a more suitable typeface. That is usually more effective than hunting for backend-specific tuning parameters.

### Tracking

Tracking is the uniform adjustment of letter-spacing for specific text elements. It should be applied narrowly, not globally:

```typst
#show smallcaps: set text(tracking: 0.03em)

#set heading(numbering: "1.")
#show heading.where(level: 1): set text(tracking: -0.01em)
```

Tracking small capitals slightly more openly is a classical typographic convention. Large headings often benefit from a very slight negative track.

### A practical Typst baseline

A reasonable print baseline for prose:

```typst
#set text(font: "Source Serif 4", size: 11pt, lang: "en")
#set par(justify: true, leading: 0.68em)
#set heading(numbering: "1.")
#show smallcaps: set text(tracking: 0.025em)
```

That is not a magic formula. It is simply a sensible starting point that assumes a good text face, a comfortable measure, and language metadata that allows the engine to hyphenate correctly.


## Optical margin alignment

Optical margin alignment is the practice of hanging punctuation and certain character edges slightly outside the text block so that the visual margin appears straight. In English prose, the most important characters to hang are:

- Quotation marks (both opening and closing)
- Hyphens in compound words that break at line endings
- Periods, commas, and other punctuation at line ends

In dedicated PDF engines, this is mostly handled by the compositor rather than by source markup. For display-size text — large headings where individual characters have significant visual weight — manual fine-tuning may still be needed.

In CSS, `hanging-punctuation: first last` enables hanging punctuation for browsers that support it. Support is currently limited to Safari, but the property degrades gracefully:

```css
p {
  hanging-punctuation: first last;
}
```

The `first` value hangs punctuation at the start of the first line of a block; `last` hangs it at the end of the last line. For pull quotes and display text where the alignment is prominent, this is worth enabling.


## Widows and orphans

A *widow* is the last line of a paragraph stranded alone at the top of a page. An *orphan* is the first line of a paragraph stranded alone at the bottom. Both are typographic failures: they interrupt the reading flow and leave an awkward amount of white space either before or after the isolated line.

In CSS, the available controls are:

```css
p {
  widows: 2;    /* minimum lines at top of page after break */
  orphans: 2;   /* minimum lines at bottom of page before break */
}
```

CSS `widows` and `orphans` are respected in print stylesheets and PDF generation via WeasyPrint, though not by all PDF engines.

For Typst and other PDF engines, the practical workflow is editorial rather than parametric: inspect the pages, adjust the text, or insert a small amount of vertical flexibility in the layout. Widows and orphans are usually symptoms of a page-design problem, not just a penalty-setting problem.


## Hyphenation control

Automatic hyphenation in dedicated layout engines is usually excellent but not infallible. Technical terms, proper nouns, and words in minority languages may be hyphenated incorrectly or not at all.

**Suppressing bad breaks** for a word or phrase:

```markdown
Dr&nbsp;Smith
11&nbsp;pt
```

For HTML, a non-breaking space is often the right fix. For PDF-oriented workflows, the better fix is usually to rewrite the line rather than force the engine into narrower rules.

**Suggesting a break point** for difficult words:

```markdown
typo&shy;graphy
micro&shy;type
```

The soft hyphen becomes visible only if the line actually breaks there.


## The paragraph as the unit of design

Paragraph-level line breaking is one of the clearest advantages of dedicated layout engines over ordinary word processors. Good layout engines consider the paragraph as a whole rather than choosing each line in isolation, which is one reason high-quality PDF workflows justify better than office software.

The point is not to tune hidden engine thresholds unless you are debugging a specific backend. The point is to think paragraph by paragraph: if the measure is too narrow, the font too large, or the wording too rigid, the paragraph will look bad regardless of the engine.

In practice, the best fixes are usually:

- shorten or rewrite the sentence
- widen the measure slightly
- reduce heading clutter above the paragraph
- move an image or note that is constraining the text block


## Letterspacing and small capitals

Letterspacing (tracking) is appropriate in specific contexts:

- **Small capitals**: as noted above, a small positive track of 25–50 units improves the texture of all-small-capital text.
- **Headings in all-capitals**: capitals set at display size benefit from positive tracking. A typical value is 100–150 units.
- **Running headers**: tight small capitals or tracked uppercase text is conventional for running headers in serious typographic work.

Do not letterspace body text. The claim that letterspacing improves legibility for lowercase body text is not supported by reading research, and letterspacing lowercase breaks the visual cohesion of words. Track display text; leave body text at its designed tracking.

In CSS, `letter-spacing` applies tracking in `em` units:

```css
.small-caps {
  font-variant: small-caps;
  letter-spacing: 0.04em;
}

h1, h2 {
  font-family: var(--font-heading);
  letter-spacing: -0.01em; /* slight tight track for large headings */
}
```

Note that large headings typically benefit from *negative* tracking — slightly tighter than the font's default — because at display sizes the normal spacing appears too loose.


## Typographic details in Markdown and Pandoc output

Several typographic refinements apply to Pandoc's output specifically.

**Smart quotes**: Pandoc's `+smart` extension converts straight apostrophes and quotation marks to typographic equivalents. Enable it with:

```sh
pandoc -f markdown+smart ...
```

Or set it in a defaults file:

```yaml
from: markdown+smart
```

**Non-breaking spaces**: In running text, certain character combinations should not be broken across lines: a number and its unit ("11 pt"), a title and a name ("Dr Smith"), the last two words of a paragraph. Pandoc passes through HTML non-breaking spaces (`&nbsp;`) from Markdown source. For HTML output, CSS `white-space: nowrap` can be applied to specific spans.

**Dashes**: Pandoc's smart extension converts double hyphens (`--`) to en dashes (–) and triple hyphens (`---`) to em dashes (—). This is the correct handling: never use double hyphens where an en dash or em dash is intended, and never use the minus sign key where a dash is intended.

**Ellipsis**: Three periods (`...`) in smart mode become the ellipsis character (…), which is slightly different in spacing from three periods in sequence. In a high-quality typeset document, use the dedicated character.

---

Fine typography is the difference between a document that communicates and a document that communicates with authority. The techniques in this chapter do not change what a document says; they change how much confidence the reader places in the saying. A well-typeset document feels authoritative. A carelessly typeset document, no matter how good its content, carries a faint suggestion of carelessness throughout.

This is the work: to make the form worthy of the content. The tools are now in your hands.
