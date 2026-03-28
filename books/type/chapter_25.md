# Multilingual and Non-Latin Typesetting

Most of this book has assumed documents written in a single language using the Latin alphabet. That assumption covers a wide range of practical work, but not all of it. Technical documentation is routinely produced in German, French, Arabic, Chinese, Japanese, and dozens of other languages. Academic papers cite sources in non-Latin scripts. Books are translated. The CLI typographer working in an international context needs to know how to handle scripts beyond Latin, bidirectional text, and documents that mix multiple languages.

This chapter covers the three main contexts: multilingual Latin-script documents (multiple Western European languages), bidirectional text (Arabic and Hebrew), and CJK typesetting (Chinese, Japanese, Korean). The source-level rule is simple: keep language and direction metadata in the Markdown, then choose a PDF backend with the right fonts and shaping support. Typst and modern browser engines alike depend on correct OpenType fonts; neither can rescue a source file that fails to mark language boundaries clearly.


## Multilingual Latin-script documents

When a document mixes English with French, German, Spanish, or other Latin-script languages, the primary concern is correct language metadata and hyphenation across the whole pipeline. In a Markdown-first workflow, set the document language in front matter and tag inline spans or divs when the language changes.

```yaml
---
lang: en-GB
---
```

For block-level switches:

```markdown
English body text with the document's default language.

::: {lang=fr}
Ce texte est en français. La césure et les règles de ponctuation
doivent suivre les conventions françaises.
:::
```

For inline switches:

```markdown
The French term [mise en page]{lang=fr} refers to the layout of a
printed page.
```

The PDF backend then needs fonts and shaping support that match the declared languages. In Typst, that usually means setting a fallback font family list rather than switching the source language:

```typst
#set text(
  font: ("EB Garamond", "Source Serif 4", "Noto Serif"),
  lang: "en",
)
```

### Smart quotation marks

Different languages use different quotation marks: English uses “double curly quotes” and ‘single curly quotes’; German uses „Gänsefüßchen“; French uses « guillemets ».

Pandoc's smart typography or Quarto's default reader extensions handle the document's primary language well. For inline language switches, mark the language in the source and verify the output manually:

```markdown
English quotation: “This is an English quotation.”

German quotation: [„Das ist ein deutsches Zitat.“]{lang=de}
```


## Bidirectional text: Arabic and Hebrew

Arabic and Hebrew are written right-to-left. When mixed with left-to-right text (Latin script, numbers), the result is *bidirectional text* — a layout challenge that requires both the font shaping engine and the layout engine to understand Unicode's bidirectional algorithm. In a Markdown-first workflow, the first responsibility is still source metadata: get `lang` and `dir` right before you worry about backend-specific commands.

In a Markdown-first workflow, the first responsibility is still metadata:

```yaml
---
lang: ar
dir: rtl
---
```

For mixed-direction documents, mark the local direction and language where they change:

```markdown
This is English text. The following is Arabic:

::: {lang=ar dir=rtl}
هذا النص مكتوب باللغة العربية، ويُقرأ من اليمين إلى اليسار.
:::

Mixing [العربية]{lang=ar dir=rtl} inline with English.
```

In Typst, choose an Arabic-capable font and set the language on the relevant span or block:

```typst
#set text(font: ("Amiri", "Noto Naskh Arabic", "EB Garamond"))
```

Arabic and Hebrew typesetting additionally require:

**Text shaping**: Arabic letters are context-sensitive — the same letter has different forms at the start, middle, and end of a word, and when isolated. Correct shaping is handled by modern shaping engines such as HarfBuzz. Any OpenType Arabic font with a complete glyph set will shape correctly.

**Appropriate fonts**: Free options include Amiri (classical calligraphic Arabic), Scheherazade (for diacritical texts), and Noto Sans Arabic. These are designed to the standards of Arabic typography and include all required ligatures.

**Numbers**: Arabic text typically uses Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) or Western-Arabic numerals depending on context and register. The chosen layout engine and font stack should respect the language and script metadata when selecting numeral forms.

For Pandoc documents in Arabic, set the language and direction in the metadata:

```yaml
---
lang: ar
dir: rtl
---
```

Pandoc generates the appropriate HTML `dir="rtl"` attribute and passes the language information through to the selected output backend.


## CJK typesetting: Chinese, Japanese, Korean

CJK (Chinese, Japanese, Korean) typesetting involves a set of challenges distinct from both Latin and bidirectional typesetting: the character sets are large (tens of thousands of glyphs), the spacing rules differ from Western practice, and the line-breaking rules prohibit certain characters from appearing at the start or end of a line.

For documents with occasional CJK characters embedded in primarily Latin text, the main requirement is a font stack with appropriate fallback:

```yaml
---
lang: zh-Hans
mainfont: "EB Garamond"
cjkfont: "Noto Serif CJK SC"
---
```

In Typst, declare a fallback list that includes the relevant CJK family:

```typst
#set text(font: ("EB Garamond", "Noto Serif CJK SC"))
```

For Japanese or Korean documents, switch the primary language metadata and choose the corresponding font family:

```yaml
---
lang: ja
mainfont: "Source Serif 4"
cjkfont: "Noto Serif CJK JP"
---
```

For HTML output, CJK text requires no special handling beyond the `lang` attribute (which Pandoc sets from the metadata): web browsers select appropriate system fonts for CJK characters automatically.


## OpenType language features

Beyond script support, OpenType fonts provide language-specific typographic features activated by the BCP 47 language tag. For example, some Cyrillic characters have different glyph forms for Russian versus Bulgarian; some Latin characters have language-specific alternates for Dutch, Romanian, and Catalan.

In Typst and modern browser engines, language tagging is the primary trigger:

```typst
#set text(font: ("Gentium Plus", "Noto Serif"), lang: "nl")
```

That affects glyph selection only when the font actually ships language-specific alternates. Hyphenation remains a separate responsibility controlled by the language metadata and the layout engine.

In CSS, language-specific OpenType features use `font-language-override`:

```css
:lang(nl) {
  font-language-override: "NLD";  /* Dutch */
}

:lang(bg) {
  font-language-override: "BGR";  /* Bulgarian Cyrillic */
}
```

The four-character OpenType language system tags differ from BCP 47 language codes. The full mapping is in the OpenType specification; the important practical point is to keep the source language tagging correct and then verify that the chosen font actually contains the expected language-specific forms.
