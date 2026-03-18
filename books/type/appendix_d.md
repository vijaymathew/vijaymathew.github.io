# Appendix D: Free Font Resources

All fonts listed here are released under the SIL Open Font Licence (OFL) or an equivalent permissive licence unless otherwise noted. OFL permits use in any document — commercial or personal — and permits embedding in PDFs and EPUBs without restriction. The LPPL (LaTeX Project Public Licence) is a modified licence that permits use and distribution but restricts modification of the original.

---

## Serif typefaces for body text

### EB Garamond
**Designer:** Georg Duffner, updated by Octavio Pardo  
**Source:** `github.com/octaviopardo/EBGaramond`  
**Packages:** Available via Google Fonts; LaTeX package `ebgaramond`  
**Install:** `apt install fonts-ebgaramond` or `tlmgr install ebgaramond`

A faithful revival of the types of Claude Garamont (c.1530), based on the specimen book of Conrad Berner (1592). Includes old-style figures, true small capitals, multiple ligature sets, and swash capitals. One of the finest free text faces available. Works well at 11–12pt for body text in books and articles.

### Libertinus Serif
**Designer:** Caleb Maclennan (fork of Linux Libertine by Philipp H. Poll)  
**Source:** `github.com/alerque/libertinus`  
**LaTeX package:** `libertinus`  
**Install:** `apt install fonts-libertinus`

A complete type family: Libertinus Serif, Sans, Mono, Display, Keyboard, and Math. The Math font makes it one of the best choices for documents with extensive mathematics that want to depart from Computer Modern. The serif face has strong, legible letterforms appropriate for long-form reading.

### Source Serif
**Designer:** Frank Grießhammer (Adobe)  
**Source:** `github.com/adobe-fonts/source-serif`  
**Package:** Available via Google Fonts as "Source Serif 4"

A variable-font serif designed to complement Source Sans and Source Code Pro. Multiple optical sizes (Display, Text, Caption) and extensive weight range. The Text optical size is well-suited to body text at 10–12pt. Clean and functional rather than calligraphic.

### Crimson Pro
**Designer:** Jacques Le Bailly (fork of Crimson Text by Sebastian Kosch)  
**Source:** Google Fonts

A text-optimised humanist serif with old-style figures and small capitals. Good at small sizes on screen and in print. Six weights with matching italics.

### Gentium Plus
**Designer:** SIL International  
**Source:** `software.sil.org/gentium`  
**Install:** `apt install fonts-sil-gentium-plus`

Excellent multilingual coverage, particularly for African and Asian languages using extended Latin. Includes a full set of diacritical characters and IPA symbols. The preferred choice for linguistic texts, Bible typesetting, and any document requiring extensive Unicode Latin coverage.

### Charis SIL
**Designer:** SIL International  
**Source:** `software.sil.org/charis`  
**Install:** `apt install fonts-sil-charis`

A warm, legible text face with thorough Unicode coverage. Designed to be readable at small sizes in print. Similar scope to Gentium but with a rounder, slightly more informal character.

### Alegreya
**Designer:** Juan Pablo del Peral (Huerta Tipográfica)  
**Source:** Google Fonts

A dynamic, literary text face with strong calligraphic influences. Works well for books and literary publications. Includes Alegreya Sans for pairing. Old-style figures and small capitals in the full version.

### Cormorant
**Designer:** Christian Thalmann  
**Source:** `github.com/CatharsisFonts/Cormorant`

A display-oriented Garamond revival in six stylistic sub-families (Cormorant Garamond, Infant, SC, Unicase, Upright Italic). Best used at larger sizes for headings or poetry; less suited for extended body text at small sizes.

---

## Sans-serif typefaces

### Fira Sans
**Designer:** Carrois Apostrophe for Mozilla  
**Source:** `github.com/mozilla/Fira`  
**LaTeX package:** `fira`  
**Install:** `apt install fonts-firacode fonts-font-awesome`

Designed for legibility on screen. A humanist sans with a large x-height and open apertures. Pairs naturally with EB Garamond or Libertinus. Nine weights with matching italics. Fira Sans Condensed available for tight spaces.

### Inter
**Designer:** Rasmus Andersson  
**Source:** `github.com/rsms/inter`, `rsms.me/inter`

Designed for user interfaces and screen use. A variable font with fine-grained weight and optical size control. Widely used in documentation and technical publications. Integrates very well with `font-feature-settings` in CSS for `tnum` (tabular numbers), `ss01` (disambiguation), and other features.

### Source Sans
**Designer:** Paul D. Hunt (Adobe)  
**Source:** `github.com/adobe-fonts/source-sans`  
**Package:** Available via Google Fonts as "Source Sans 3"

Adobe's open-source sans-serif, designed to complement Source Serif and Source Code Pro. Clean and functional. Extensive weight range. An excellent choice for headings when Source Serif is used for body text.

### Lato
**Designer:** Łukasz Dziedzic  
**Source:** Google Fonts  
**LaTeX package:** `lato`

A warm humanist sans with semi-rounded details. Among the most widely used free sans-serif typefaces. Highly legible at small sizes. Good for documentation and technical reports.

---

## Monospace typefaces

### JetBrains Mono
**Designer:** JetBrains  
**Source:** `github.com/JetBrains/JetBrainsMono`  
**Install:** `apt install fonts-jetbrains-mono`

Designed specifically for software development. Increased height of lowercase letters, distinctive letterforms for ambiguous characters (0 vs O, 1 vs l vs I), ligatures for programming tokens (`->`, `=>`, `!=`, `//`). Multiple weights. The recommended monospace font for code blocks throughout this book.

### Source Code Pro
**Designer:** Paul D. Hunt (Adobe)  
**Source:** `github.com/adobe-fonts/source-code-pro`  
**LaTeX package:** `sourcecodepro`  
**Install:** `apt install fonts-adobe-sourcecodepro`

Part of the Source type family. Clean, legible monospace with good disambiguation between similar characters. Multiple weights. No programming ligatures (which some prefer).

### Fira Code
**Designer:** Nikita Prokopov  
**Source:** `github.com/tonsky/FiraCode`

Adds programming ligatures to Fira Mono. The same base as Fira Sans Mono but with an extensive set of ligatures. If you want programming ligatures, JetBrains Mono and Fira Code are the two strongest options.

### Iosevka
**Designer:** Belleve Invis  
**Source:** `github.com/be5invis/Iosevka`

A highly customisable monospace. The build system allows specifying exact letterform variants for each character. Extremely narrow, suitable for very wide code. Many pre-built variants available for download without compiling.

### Inconsolata
**Designer:** Raph Levien  
**Source:** Google Fonts  
**LaTeX package:** `inconsolata`

Inspired by Consolas (the Windows monospace standard). Clean, slightly condensed. Good for inline code and terminal output in documents.

---

## Mathematical fonts

### Computer Modern and Latin Modern
**Designer:** Donald Knuth (CM); GUST e-foundry (LM)  
**Source:** Included in TeX Live; `ctan.org/pkg/lm`  
**LaTeX:** Default fonts; `\usepackage{lmodern}` for Latin Modern

The default fonts of LaTeX. Computer Modern was designed by Knuth specifically for TeX. Latin Modern extends Computer Modern with additional character coverage. Reliable but visually associated with "typical LaTeX output." Use when no other requirement governs the choice.

### TeX Gyre collection
**Designer:** GUST e-foundry  
**Source:** `ctan.org/pkg/tex-gyre`  
**LaTeX:** Packages `tgpagella`, `tgtermes`, `tgschola`, etc.

Free alternatives to proprietary fonts: Pagella (Palatino), Termes (Times), Bonum (Bookman), Schola (Century Schoolbook), Heros (Helvetica), Cursor (Courier), Chorus (ITC Zapf Chancery), Adventor (Avant Garde). All include corresponding math fonts via the TeX Gyre Math packages.

### STIX Two
**Designer:** STI Pub Companies  
**Source:** `github.com/stipub/stixfonts`  
**LaTeX:** `stix2` package

A Times-based typeface with comprehensive Unicode mathematics coverage. Designed for scientific and technical publishing. The full Unicode math coverage makes it the most complete free mathematical font.

### Libertinus Math
**Designer:** Caleb Maclennan  
**Source:** `github.com/alerque/libertinus`  
**LaTeX:** `libertinus-otf` package with `unicode-math`

The Unicode mathematics companion to Libertinus Serif. Recommended when Libertinus Serif is used for body text in XeLaTeX or LuaLaTeX documents with mathematics.

---

## CJK fonts

### Noto CJK
**Designer:** Google and Adobe  
**Source:** `github.com/notofonts/noto-cjk`  
**Install:** `apt install fonts-noto-cjk`

The most comprehensive free CJK font family. Covers Chinese Simplified, Traditional, Japanese, and Korean in both serif and sans-serif variants. Designed to complement the full Noto family for multilingual documents. Names: Noto Serif CJK SC/TC/JP/KR, Noto Sans CJK SC/TC/JP/KR.

### Source Han
**Designer:** Adobe  
**Source:** `github.com/adobe-fonts/source-han-serif`

The same fonts as Noto CJK under the Adobe brand name. Source Han Serif and Source Han Sans. Identical quality to Noto CJK.

---

## Finding and installing fonts

**Google Fonts** (`fonts.google.com`): The largest collection of OFL fonts, all available for download. The web interface allows filtering by category, language, and number styles. Download the full family as a ZIP file containing all weights and styles.

**Font Squirrel** (`fontsquirrel.com`): Curated collection of free commercial-use fonts with a strong filter for quality. Also hosts the WebFont Generator for converting fonts to WOFF2.

**The League of Moveable Type** (`theleagueofmoveabletype.com`): Small collection of high-quality OFL display and text fonts.

**CTAN** (`ctan.org`): TeX font packages including TeX Gyre, Latin Modern, and companions for most common typefaces. All fonts from CTAN are available through `tlmgr install`.

### Linux installation

```sh
# From package manager
apt install fonts-ebgaramond fonts-libertinus fonts-firacode

# Manual installation
mkdir -p ~/.local/share/fonts/FamilyName
cp FontFile.ttf ~/.local/share/fonts/FamilyName/
fc-cache -f
fc-list | grep FamilyName  # verify
```

### LaTeX installation

```sh
# Via tlmgr (TeX Live package manager)
tlmgr install ebgaramond libertinus lato fira inconsolata

# Verify
kpsewhich EBGaramond-Regular.otf
```
