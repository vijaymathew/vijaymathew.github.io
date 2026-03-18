# Multilingual and Non-Latin Typesetting

Most of this book has assumed documents written in a single language using the Latin alphabet. That assumption covers a wide range of practical work, but not all of it. Technical documentation is routinely produced in German, French, Arabic, Chinese, Japanese, and dozens of other languages. Academic papers cite sources in non-Latin scripts. Books are translated. The CLI typographer working in an international context needs to know how to handle scripts beyond Latin, bidirectional text, and documents that mix multiple languages.

This chapter covers the three main contexts: multilingual Latin-script documents (multiple Western European languages), bidirectional text (Arabic and Hebrew), and CJK typesetting (Chinese, Japanese, Korean).


## Multilingual Latin-script documents

When a document mixes English with French, German, Spanish, or other Latin-script languages, the primary concern is hyphenation. LaTeX's hyphenation patterns are language-specific; the wrong patterns produce incorrect hyphenation. A document with German text using English hyphenation rules will hyphenate words incorrectly, and a document with French text will miss the French convention of not hyphenating before a single vowel.

### Babel

The `babel` package is the standard LaTeX solution for multilingual documents. It loads language-specific hyphenation patterns, typographic conventions (such as French spacing before punctuation), and localised names for chapter headings, table of contents, and similar elements.

```latex
\usepackage[main=english, french, german, spanish]{babel}
```

The `main=english` option sets English as the primary language. Other languages are available through `\selectlanguage{french}` or the `otherlanguage` environment:

```latex
Main English text with correct hyphenation.

\begin{otherlanguage}{french}
Ce texte est en français. La césure utilise les règles françaises.
Les guillemets français sont différents des guillemets anglais.
\end{otherlanguage}

Back to English text.
```

For inline language switches without environment overhead:

```latex
The French term \foreignlanguage{french}{mise en page} refers to
the layout of a printed page.
```

`babel` also localises the typographic conventions of each language. French, for instance, requires a thin non-breaking space before colons, semicolons, question marks, and exclamation marks — `babel` inserts this automatically when the French language is active.

The document's date, chapter names, and other automatic text also localise:

```latex
\selectlanguage{german}
% \today now produces "18. März 2024"
% \chaptername produces "Kapitel"
% \contentsname produces "Inhaltsverzeichnis"
```

### Polyglossia

For XeLaTeX and LuaLaTeX documents, `polyglossia` is a more modern alternative to `babel`. It has better support for non-Latin scripts and integrates naturally with `fontspec`:

```latex
\usepackage{fontspec}
\usepackage{polyglossia}
\setdefaultlanguage{english}
\setotherlanguages{french, german, arabic}

% Per-language font settings:
\newfontfamily\arabicfont{Amiri}[Script=Arabic]
```

The interface is similar to `babel`:

```latex
\begin{french}
Ce texte est typographié selon les règles françaises.
\end{french}

\textfrench{Un seul paragraphe en français.}
```

### Smart quotation marks

Different languages use different quotation marks: English uses "double curly quotes" and 'single curly quotes'; German uses „Gänsefüßchen" (goose feet); French uses «guillemets»; Finnish uses "a peculiar form".

The `csquotes` package provides language-aware quotation commands:

```latex
\usepackage{csquotes}
\SetLanguageKey{english}{quotestyle=english}
\SetLanguageKey{german}{quotestyle=german}
\SetLanguageKey{french}{quotestyle=french}

\textquote{This is an English quotation.}

\begin{otherlanguage}{german}
\textquote{Das ist ein deutsches Zitat.}
\end{otherlanguage}
```

`\textquote` inserts the correct quotation marks for the current language automatically.

For Pandoc documents, the `--smart` flag (or `+smart` extension) converts straight quotes to typographic quotes based on the document's primary language. For inline language switches, the quotes must be set correctly in the Markdown source or handled by a Lua filter.


## Bidirectional text: Arabic and Hebrew

Arabic and Hebrew are written right-to-left. When mixed with left-to-right text (Latin script, numbers), the result is *bidirectional text* — a layout challenge that requires both the font shaping engine and the layout engine to understand Unicode's bidirectional algorithm.

In LaTeX, bidirectional text is handled by XeLaTeX with the `bidi` package and `polyglossia`:

```latex
\documentclass{article}
\usepackage{fontspec}
\usepackage{polyglossia}
\setdefaultlanguage{english}
\setotherlanguage{arabic}

% Arabic font with the Arabic script tag
\newfontfamily\arabicfont{Amiri}[Script=Arabic, Scale=1.1]

\begin{document}

This is English text. The following is Arabic:

\begin{Arabic}
هذا النص مكتوب باللغة العربية، ويُقرأ من اليمين إلى اليسار.
\end{Arabic}

Mixing \textArabic{العربية} inline with English.

\end{document}
```

The `Arabic` environment reverses the paragraph direction. `\textArabic{}` provides inline Arabic within an otherwise left-to-right paragraph.

Arabic and Hebrew typesetting additionally require:

**Text shaping**: Arabic letters are context-sensitive — the same letter has different forms at the start, middle, and end of a word, and when isolated. Correct shaping is handled by HarfBuzz, which XeLaTeX uses via the `fontspec` package. Any OpenType Arabic font with a complete glyph set will shape correctly.

**Appropriate fonts**: Free options include Amiri (classical calligraphic Arabic), Scheherazade (for diacritical texts), and Noto Sans Arabic. These are designed to the standards of Arabic typography and include all required ligatures.

**Numbers**: Arabic text typically uses Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) or Western-Arabic numerals depending on context and register. The font and `polyglossia` handle this automatically when the language is active.

For Pandoc documents in Arabic, set the language and direction in the metadata:

```yaml
---
lang: ar
dir: rtl
---
```

Pandoc generates the appropriate HTML `dir="rtl"` attribute and passes the language information to the LaTeX backend.


## CJK typesetting: Chinese, Japanese, Korean

CJK (Chinese, Japanese, Korean) typesetting involves a set of challenges distinct from both Latin and bidirectional typesetting: the character sets are large (tens of thousands of glyphs), the spacing rules differ from Western practice, and the line-breaking rules prohibit certain characters from appearing at the start or end of a line.

### XeLaTeX with fontspec and CJK fonts

For documents with occasional CJK characters embedded in primarily Latin text, `fontspec` with an appropriate fallback font handles most cases:

```latex
\usepackage{fontspec}
\setmainfont{EB Garamond}

% CJK characters fall back to Noto Serif CJK:
\newfontfamily\cjkfont{Noto Serif CJK SC}[Scale=MatchLowercase]
```

For documents that are primarily Chinese, Japanese, or Korean, dedicated packages provide the appropriate spacing rules.

### LuaLaTeX with luatexja

`luatexja` is the standard package for Japanese typesetting with LuaLaTeX. It implements the JIS X 4051 standard for Japanese typographic line composition, including the forbidden-character rules (prohibited characters that cannot start or end a line), inter-character spacing between CJK and Latin text, and correct spacing between different character classes.

```latex
\documentclass{article}
\usepackage{luatexja}
\usepackage{luatexja-fontspec}

\setmainfont{TeX Gyre Termes}
\setmainjfont{IPAexMincho}   % Japanese serif font

\begin{document}

日本語のテキストと English text が混在する文書。

\end{document}
```

`luatexja-fontspec` provides `\setmainjfont` and `\setsansjfont` for setting Japanese main and sans-serif fonts, parallel to `fontspec`'s `\setmainfont` and `\setsansfont`.

### XeLaTeX with xeCJK

`xeCJK` is the XeLaTeX equivalent for CJK typesetting:

```latex
\documentclass{article}
\usepackage{fontspec}
\usepackage{xeCJK}

\setmainfont{TeX Gyre Termes}
\setCJKmainfont{Noto Serif CJK SC}  % Chinese Simplified

\begin{document}

中文与 English 混排。字体的选择非常重要。

\end{document}
```

For documents in Traditional Chinese, use `Noto Serif CJK TC` or `Noto Serif CJK HK`. For Japanese, `Noto Serif CJK JP`. For Korean, `Noto Serif CJK KR`.

### Pandoc and CJK

For Pandoc documents with CJK content, the metadata block specifies the CJK font:

```yaml
---
lang: zh-Hans
CJKmainfont: "Noto Serif CJK SC"
pdf-engine: xelatex
---
```

The `CJKmainfont` variable is supported by Pandoc's default LaTeX template when the engine is XeLaTeX. Pandoc automatically loads `xeCJK` when `CJKmainfont` is set.

For HTML output, CJK text requires no special handling beyond the `lang` attribute (which Pandoc sets from the metadata): web browsers select appropriate system fonts for CJK characters automatically.


## OpenType language features

Beyond script support, OpenType fonts provide language-specific typographic features activated by the BCP 47 language tag. For example, some Cyrillic characters have different glyph forms for Russian versus Bulgarian; some Latin characters have language-specific alternates for Dutch, Romanian, and Catalan.

In XeLaTeX with `fontspec`:

```latex
\setmainfont{Gentium Plus}[Language=Dutch]
```

The `Language=` option activates the language-specific OpenType features for that language within `fontspec`. This affects glyph selection, not hyphenation (which is controlled by `babel` or `polyglossia`).

In CSS, language-specific OpenType features use `font-language-override`:

```css
:lang(nl) {
  font-language-override: "NLD";  /* Dutch */
}

:lang(bg) {
  font-language-override: "BGR";  /* Bulgarian Cyrillic */
}
```

The four-character OpenType language system tags differ from BCP 47 language codes. The full mapping is in the OpenType specification; `fontspec`'s `Language=` argument accepts human-readable language names from a built-in list.
