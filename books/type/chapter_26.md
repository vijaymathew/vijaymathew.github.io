# Fine Typography

The preceding chapters have covered what must be done to produce a correct document. This chapter covers what can be done to produce an excellent one. The gap between correct and excellent is the territory of fine typography: microtypography, optical margin alignment, the elimination of widows and orphans, the treatment of special punctuation, and the attention to the paragraph as the unit of visual design.

None of this is visible at a glance. A reader does not notice that a paragraph's lines are justified to within a hair's breadth of perfection, or that the hanging punctuation extends slightly into the margin to maintain the visual alignment of the text block. What they notice is an absence — an absence of friction, of awkward line breaks, of the tiny disturbances that accumulate, in poorly typeset text, into a generalised sense of difficulty. Fine typography removes those disturbances.


## Microtypography with `microtype`

The `microtype` package enables three microtypographic features: character protrusion, font expansion, and tracking. Together they improve the visual texture of justified text substantially — reducing the number of lines that must be hyphenated, tightening the spacing variation across lines, and producing a more even grey mass.

### Character protrusion (hanging punctuation)

Character protrusion allows certain characters — primarily punctuation marks — to extend slightly into the margin, so that the visual edge of the text column is straight rather than the typographic edge. A line ending with a comma, for instance, has the comma protruding fractionally beyond the margin; the eye sees the text block as rectangular rather than slightly indented at punctuation characters.

```latex
\usepackage[protrusion=true]{microtype}
```

The `protrusion=true` option enables protrusion. No additional configuration is needed for most fonts; `microtype` includes pre-configured protrusion settings for all major font families. The settings for custom fonts can be added via `\SetProtrusion{fontname}{...}`.

Protrusion works with pdfLaTeX, XeLaTeX, and LuaLaTeX. It is the `microtype` feature most universally applicable and most visually significant.

### Font expansion

Font expansion allows the width of each glyph to vary slightly — by a configurable percentage, typically 2–3% — to improve the quality of justification. When a line is slightly too short or too long for perfect justification, font expansion fills the gap by stretching or shrinking the glyphs rather than by increasing or decreasing word spacing. The result is more even word spacing across all lines.

```latex
\usepackage[protrusion=true,expansion=true]{microtype}
```

Font expansion requires scalable (Type 1 or OpenType) fonts. It works with pdfLaTeX and LuaLaTeX; XeLaTeX supports a limited form via the HarfBuzz path. The `stretch` and `shrink` parameters control the maximum expansion:

```latex
\usepackage[
  protrusion=true,
  expansion=true,
  stretch=10,
  shrink=10
]{microtype}
```

The values `stretch=10` and `shrink=10` allow ±1% variation (the values are in thousandths). The default values are sufficient for most documents; increasing them beyond 15 may produce visible glyph distortion in display-size text.

### Tracking

Tracking is the uniform adjustment of letter-spacing for specific text elements. `microtype` allows tracking to be applied to small capitals, headings, or other specific contexts:

```latex
\usepackage[tracking=true]{microtype}
\SetTracking{encoding=*, family=sc}{30}  % slight tracking on small caps
```

Tracking small capitals by 25–50 units (thousandths of an em) is a classical typographic convention: the reduced x-height of small capitals means their default spacing is relatively tight, and a small positive track opens them to a more comfortable reading texture.

### A full `microtype` configuration

A reasonable production configuration for XeLaTeX:

```latex
\usepackage[
  protrusion=true,
  expansion=false,   % expansion limited in XeLaTeX
  tracking=true,
  kerning=true,
  spacing=true
]{microtype}
\microtypesetup{expansion=false}

% Slight tracking for small capitals
\SetTracking{encoding=*, family=sc}{25}
```

For pdfLaTeX with Computer Modern or Latin Modern, full expansion is available:

```latex
\usepackage[
  protrusion=true,
  expansion=true,
  stretch=10,
  shrink=10,
  tracking=true
]{microtype}
```


## Optical margin alignment

Optical margin alignment is the practice of hanging punctuation and certain character edges slightly outside the text block so that the visual margin appears straight. In English prose, the most important characters to hang are:

- Quotation marks (both opening and closing)
- Hyphens in compound words that break at line endings
- Periods, commas, and other punctuation at line ends

`microtype`'s protrusion feature handles this automatically for body text. For display-size text — large headings where individual characters have significant visual weight — manual fine-tuning may be needed.

In CSS, `hanging-punctuation: first last` enables hanging punctuation for browsers that support it. Support is currently limited to Safari, but the property degrades gracefully:

```css
p {
  hanging-punctuation: first last;
}
```

The `first` value hangs punctuation at the start of the first line of a block; `last` hangs it at the end of the last line. For pull quotes and display text where the alignment is prominent, this is worth enabling.


## Widows and orphans

A *widow* is the last line of a paragraph stranded alone at the top of a page. An *orphan* is the first line of a paragraph stranded alone at the bottom. Both are typographic failures: they interrupt the reading flow and leave an awkward amount of white space either before or after the isolated line.

LaTeX controls widows and orphans through two parameters:

```latex
\widowpenalty=10000    % maximum penalty for widows
\clubpenalty=10000     % maximum penalty for orphans (club lines)
\displaywidowpenalty=10000
```

The penalty values range from 0 (no penalty) to 10000 (forbidden). Setting both to 10000 prevents widows and orphans but occasionally forces LaTeX to produce pages with insufficient content — a lesser evil. In practice, values around 3000–5000 produce good results: LaTeX strongly avoids widows and orphans but can override the preference when the alternative would be worse.

These parameters should be set globally in the preamble and refined manually for specific pages that remain problematic after global adjustment.

In CSS, the equivalent properties are:

```css
p {
  widows: 2;    /* minimum lines at top of page after break */
  orphans: 2;   /* minimum lines at bottom of page before break */
}
```

CSS `widows` and `orphans` are respected in print stylesheets and PDF generation via WeasyPrint, though not by all PDF engines.


## Hyphenation control

LaTeX's automatic hyphenation is excellent but not infallible. Technical terms, proper nouns, and words in minority languages may be hyphenated incorrectly or not at all.

**Suppressing hyphenation** for a word or phrase:

```latex
\mbox{unhyphenatable}       % prevents line break entirely
\hbox{unhyphenatable}       % lower-level equivalent
\nohyphens{unhyphenatable}  % from the hyphenat package
```

**Specifying correct hyphenation** for a word that LaTeX does not know:

```latex
\hyphenation{ty-pog-ra-phy mi-cro-type}  % global dictionary
% or inline:
ty\-pog\-ra\-phy  % manual hyphenation hints
```

The `\-` command marks a potential hyphenation point without preventing hyphenation at other points (unlike `\mbox`).

**Controlling the minimum word length for hyphenation** via `babel`'s or `polyglossia`'s options, or through TeX primitives:

```latex
\lefthyphenmin=3   % minimum characters before hyphen
\righthyphenmin=3  % minimum characters after hyphen
```

The defaults are language-dependent. English uses 2 and 3; German uses 2 and 2. Setting both to 3 produces fewer but cleaner hyphenations.


## The paragraph as the unit of design

TeX's paragraph-level line-breaking algorithm — described in Chapter 1 — considers all possible ways to break the paragraph into lines and chooses the arrangement that minimises total badness across all lines simultaneously. This global optimisation is what produces the better justification quality of LaTeX output compared to word processors.

The algorithm's parameters can be adjusted when the defaults produce unsatisfactory results. The `\tolerance` and `\emergencystretch` parameters control how much visual deviation from ideal spacing is permitted before the algorithm gives up and produces an overfull line:

```latex
\tolerance=1000        % default (max underfull/overfull before warning)
\emergencystretch=3em  % additional stretch allowed in emergencies
```

The `\tolerance` value controls when the algorithm considers a line acceptable. The default of 200 is strict; increasing it to 1000 allows more variation in word spacing before producing warnings. This reduces the number of lines that require manual adjustment at the cost of slightly less even spacing.

`\emergencystretch` provides an additional reserve of stretch that the algorithm can use when no acceptable break points exist. Setting it to `3em` prevents most overfull boxes at the cost of occasional loose lines. For documents with many technical terms, URLs, or code snippets that cannot be hyphenated, this is often the right trade-off.

For specific paragraphs that stubbornly resist good line breaking:

```latex
\begin{sloppypar}
A paragraph that contains \texttt{very-long-unhyphenatable-technical-terms}
and benefits from slightly relaxed spacing constraints.
\end{sloppypar}
```

`\begin{sloppypar}` applies a high tolerance locally, allowing the paragraph to space loosely rather than producing an overfull box.


## Letterspacing and small capitals

Letterspacing (tracking) is appropriate in specific contexts:

- **Small capitals**: as noted above, a small positive track of 25–50 units improves the texture of all-small-capital text.
- **Headings in all-capitals**: capitals set at display size benefit from positive tracking. A typical value is 100–150 units.
- **Running headers**: tight small capitals or tracked uppercase text is conventional for running headers in serious typographic work.

Do not letterspace body text. The claim that letterspacing improves legibility for lowercase body text is not supported by reading research, and letterspacing lowercase breaks the visual cohesion of words. Track display text; leave body text at its designed tracking.

In LaTeX, use `microtype` with `\SetTracking`:

```latex
\SetTracking{encoding=*, shape=sc}{30}    % small caps
\SetTracking{encoding=*, family=sf}{50}   % sans-serif headings
```

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


## Typographic details in Pandoc output

Several typographic refinements apply to Pandoc's output specifically.

**Smart quotes**: Pandoc's `+smart` extension converts straight apostrophes and quotation marks to typographic equivalents. Enable it with:

```sh
pandoc -f markdown+smart ...
```

Or set it in a defaults file:

```yaml
from: markdown+smart
```

**Non-breaking spaces**: In running text, certain character combinations should not be broken across lines: a number and its unit ("11 pt"), a title and a name ("Dr Smith"), the last two words of a paragraph. Pandoc passes through HTML non-breaking spaces (`&nbsp;`) and LaTeX `~` characters from Markdown source. For HTML output, CSS `white-space: nowrap` can be applied to specific spans.

**Dashes**: Pandoc's smart extension converts double hyphens (`--`) to en dashes (–) and triple hyphens (`---`) to em dashes (—). This is the correct handling: never use double hyphens where an en dash or em dash is intended, and never use the minus sign key where a dash is intended.

**Ellipsis**: Three periods (`...`) in smart mode become the ellipsis character (…), which is slightly different in spacing from three periods in sequence. In a high-quality typeset document, use the dedicated character.

---

Fine typography is the difference between a document that communicates and a document that communicates with authority. The techniques in this chapter do not change what a document says; they change how much confidence the reader places in the saying. A well-typeset document feels authoritative. A carelessly typeset document, no matter how good its content, carries a faint suggestion of carelessness throughout.

This is the work: to make the form worthy of the content. The tools are now in your hands.
