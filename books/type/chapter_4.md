# Chapter 4: Font Management from the CLI

Fonts are software. They are files, stored in directories, loaded by programs, updated by package managers, and subject to licenses. Most operating systems provide graphical tools for managing them — font books, preview panels, installation wizards — but every one of those operations has a command-line equivalent, and for the CLI typographer, the command-line path is faster, scriptable, and often more informative.

This chapter covers font management on Linux, which is the natural home of CLI typesetting workflows. The tools described here — the fontconfig suite, primarily — are also available on macOS, and the concepts transfer to Windows with some adaptation. If you are running a headless server, a CI/CD pipeline, or a Docker container that builds documents, this chapter is especially relevant: there is no font book, no graphical installer, no preview panel. There is only the command line and, if you are lucky, a clear error message when the font you need is not found.


## How Linux finds fonts: fontconfig

On Linux, font discovery and configuration is handled by fontconfig, a library and set of utilities written by Keith Packard and first released in 2001. Fontconfig does three things: it maintains a catalog of all fonts installed on the system, it provides a query interface for finding fonts by name or property, and it implements a substitution and matching algorithm that resolves requests for named fonts to actual font files.

Every application that renders text on Linux — whether a GUI application like a web browser or a CLI application like a LaTeX engine — typically uses fontconfig (directly or through a higher-level library like Pango or FreeType) to find font files. When your LaTeX document requests the typeface "EB Garamond" and the engine finds the right `.otf` file on your system, that is fontconfig at work.

The fontconfig catalog is built from font files in a set of standard directories:

- `/usr/share/fonts/` — system-wide fonts installed by package managers
- `/usr/local/share/fonts/` — system-wide fonts installed manually
- `~/.local/share/fonts/` — per-user fonts (preferred on modern systems)
- `~/.fonts/` — per-user fonts (legacy location, still supported)

When you install a font package via `apt`, `dnf`, or another package manager, the font files land in `/usr/share/fonts/` and fontconfig picks them up automatically. When you install a font manually — by downloading from Google Fonts or purchasing from a type foundry — you copy the files to one of the per-user directories and rebuild the cache.

The fontconfig configuration lives in `/etc/fonts/fonts.conf` and the directory `/etc/fonts/conf.d/`. The main configuration file specifies which directories to scan, how to handle font substitution, and rendering hints for anti-aliasing and subpixel rendering. You should not need to edit the main configuration file; local customizations go in `/etc/fonts/local.conf` or in per-user configuration at `~/.config/fontconfig/fonts.conf`.

The font cache — fontconfig's index of installed fonts — is stored in `~/.cache/fontconfig/`. It is rebuilt automatically when fonts are added or removed, but you can force a rebuild manually:

```sh
fc-cache -fv
```

The `-f` flag forces a rebuild even if fontconfig thinks the cache is current; `-v` (verbose) prints each directory as it is scanned, which is useful for confirming that your newly installed font directory was found. After installing fonts manually, always run `fc-cache -f` before trying to use them.


## fc-list: surveying what you have

`fc-list` prints a list of all fonts known to fontconfig. With no arguments, it produces one line per font face — typically hundreds or thousands of lines on a system with a reasonable font collection:

```sh
fc-list
```

```
/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf: DejaVu Serif:style=Bold
/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf: Poppins:style=Bold
/usr/share/fonts/truetype/freefont/FreeSansOblique.ttf: FreeSans:style=Oblique
...
```

The output format is `path: family:style=style`. This raw output is most useful when piped through `grep` or `sort`:

```sh
# Find all fonts whose name contains "Garamond"
fc-list | grep -i garamond

# List all installed font families, sorted, without duplicates
fc-list : family | sort -u

# Count total installed font faces
fc-list | wc -l
```

`fc-list` accepts a *pattern* as its first argument to filter results, and a list of *properties* to include in the output. The pattern uses fontconfig's matching syntax: a colon-separated list of property:value pairs. Some useful filters:

```sh
# List only monospace fonts
fc-list :spacing=100 family

# List only bold fonts
fc-list :weight=200 family

# List fonts with support for Greek script
fc-list :lang=el family

# List fonts with support for Arabic
fc-list :lang=ar family
```

The spacing values are fontconfig constants: 0 is proportional, 90 is dual-width (some CJK fonts), 100 is monospace, 110 is charcell (old-style terminal fonts). Weight values follow a 0–210 scale where 80 is Regular, 100 is Medium, 150 is Bold, and 200 is ExtraBold — values that correspond to the CSS font-weight scale multiplied by roughly 1.1. These numeric values appear often enough in fontconfig output that they are worth memorizing.

To restrict output to specific properties, list them after the pattern:

```sh
# Show family name and file path for all fonts
fc-list : family file

# Show family, style, and language support
fc-list : family style lang
```

One practically useful query: checking whether a specific font family is installed before writing a document that depends on it.

```sh
fc-list | grep -i "EB Garamond"
```

If this produces no output, the font is not installed. If it does, you know the exact family name as fontconfig recognizes it — useful because the name in fontconfig may not exactly match the name on the font's download page. Case differences, spacing, and hyphenation all matter when you specify a font in a LaTeX `fontspec` command or a CSS `font-family` declaration.


## fc-match: resolving font requests

`fc-match` shows you which font file fontconfig would select for a given font request. This is the single most useful diagnostic tool in the fontconfig suite, because it reveals what will actually happen when a document requests a font — which may not be what you intended.

```sh
fc-match "EB Garamond"
```

```
EBGaramond-Regular.otf: "EB Garamond" "Regular"
```

If the requested font is not installed, fontconfig will substitute the closest match it can find:

```sh
fc-match "Georgia"
```

```
DejaVuSerif.ttf: "DejaVu Serif" "Book"
```

Georgia is not installed on this system (it is a Microsoft font, not commonly packaged for Linux). Fontconfig falls back to DejaVu Serif, which it considers the closest available serif face. This substitution happens silently in most applications — your document requests Georgia and gets DejaVu Serif without any warning. `fc-match` makes the substitution visible.

The `--format` flag controls what information is printed, using fontconfig property names enclosed in `%{}`:

```sh
fc-match --format="Family: %{family}\nFile:   %{file}\nWeight: %{weight}\nSlant:  %{slant}\n" "serif"
```

```
Family: DejaVu Serif
File:   /usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf
Weight: 80
Slant:  0
```

The generic family names `serif`, `sans-serif`, and `monospace` are resolved by fontconfig according to its substitution configuration. The system's default serif, sans-serif, and monospace fonts are typically configured in `/etc/fonts/conf.d/` — you can inspect those files to understand what your defaults are, or simply use `fc-match` to check them directly.

`fc-match` with the `-a` flag lists all matching fonts in preference order, not just the best match:

```sh
fc-match -a "serif" | head -10
```

This shows the full fallback chain — useful when building documents that must render correctly across a wide character range, because it reveals which fonts will be used for characters not covered by the primary face.

For diagnosing font problems in LaTeX or Pandoc pipelines, a reliable workflow is:

1. Check whether the font is known: `fc-list | grep -i "font name"`
2. Check what fontconfig resolves it to: `fc-match "font name"`
3. If the wrong font is being substituted, install the correct one and rebuild the cache

This three-step process resolves the majority of "I specified font X but my document used font Y" problems.


## fc-query and fc-scan: inspecting font files

Where `fc-list` and `fc-match` work with the fontconfig catalog, `fc-query` and `fc-scan` work directly with font files and report their properties.

`fc-query` reads a font file and prints all the properties fontconfig can extract from it:

```sh
fc-query /usr/share/fonts/truetype/dejavu/DejaVuSans.ttf
```

The output is verbose — dozens of lines per font face, including character coverage, supported languages, all registered name strings, and metric values. For targeted inspection, use `--format` to extract specific properties:

```sh
fc-query --format="%{family}\n  File:    %{file}\n  Version: %{fontversion}\n  Spacing: %{spacing}\n  Lang:    %{lang}\n" \
  /path/to/font.ttf
```

The `lang` property is especially useful: it lists the language tags (BCP 47 codes) for all languages the font supports. A font claiming to support Arabic (`ar`) must include the Arabic Unicode block; `fc-query` lets you verify this before depending on it in a multilingual document.

`fc-scan` is similar to `fc-query` but also accepts directories, scanning all font files within them:

```sh
# Inspect all fonts in a directory
fc-scan ~/.local/share/fonts/

# With formatting
fc-scan --format="%{family}: %{file}\n" ~/.local/share/fonts/
```

This is useful when you have downloaded a font family with multiple files — regular, italic, bold, bold italic, and possibly condensed, extended, and variable variants — and want to confirm that all expected faces are present before building a document that uses them.

A practical use of `fc-query` beyond simple inspection: checking whether a font file contains genuine small capitals or whether an application would be forced to fake them. A font with real small capitals will have the `smcp` feature listed in its OpenType feature set. While fontconfig does not directly report OpenType features, you can use the `otfinfo` tool from the `lcdf-typetools` package:

```sh
otfinfo -f /path/to/font.otf
```

This lists all OpenType features the font supports — `liga`, `kern`, `onum`, `smcp`, and so on. Combine this with `fc-query` output to get a complete picture of a font's capabilities before committing to it for a document.


## Installing fonts manually

The most common source of fonts for serious typographic work is direct download from type foundries or font distribution sites. Google Fonts, Font Squirrel, the League of Moveable Type, and commercial foundries like Klim, Commercial Type, and Hoefler&Co all distribute fonts as downloaded archives. The installation process is the same regardless of source.

**Step 1: Identify the target directory.** For a single user, install to `~/.local/share/fonts/`. For system-wide installation (available to all users), install to `/usr/local/share/fonts/` (requires root). Create the directory if it does not exist:

```sh
mkdir -p ~/.local/share/fonts/
```

**Step 2: Organize the files.** Font families can contain many files. A convention that scales well is to create a subdirectory per family:

```sh
mkdir -p ~/.local/share/fonts/EBGaramond/
cp ~/Downloads/EBGaramond/*.otf ~/.local/share/fonts/EBGaramond/
```

Keeping families in their own directories makes future management easier: removing a font means removing its directory, and inspecting what you have installed is a simple `ls`.

**Step 3: Rebuild the cache:**

```sh
fc-cache -f ~/.local/share/fonts/
```

**Step 4: Verify the installation:**

```sh
fc-list | grep -i garamond
```

If the font appears in the output, it is ready to use. If it does not, confirm the file path was correct and that `fc-cache` ran without errors.

For fonts distributed as packages by your system's package manager, the process is simpler: the package manager handles installation, the font lands in `/usr/share/fonts/`, and fontconfig's cache is updated automatically as part of the package post-install scripts. On Debian and Ubuntu systems, many fonts are available as packages with the naming convention `fonts-*`:

```sh
# Search for available font packages
apt search fonts-

# Install EB Garamond
sudo apt install fonts-ebgaramond

# Install the Noto font family (broad Unicode coverage)
sudo apt install fonts-noto
```

The package manager route is preferable for fonts that are available as packages: it means the font is tracked by the package manager, will be updated when a new version is released, and will be present on any system that uses the same package list (useful for reproducible document builds).

For fonts that are not packaged — commercial fonts, recently released fonts, or fonts you have purchased from a foundry — manual installation to `~/.local/share/fonts/` is the right approach.


## Previewing fonts without a GUI

Evaluating a typeface for a specific purpose requires seeing it set at the relevant sizes with representative text. Without a graphical font preview application, there are several CLI approaches.

**Using ImageMagick's `convert`** is the most portable approach: it renders text in a specified font to an image file that you can then view with any image viewer or include in a test document.

```sh
convert \
  -size 800x200 \
  -background white \
  -fill black \
  -font "EB-Garamond" \
  -pointsize 32 \
  label:"The quick brown fox jumps over the lazy dog." \
  preview-garamond.png
```

To preview multiple fonts for comparison, loop over them:

```sh
for font in "EB-Garamond" "Palatino" "DejaVu-Serif"; do
  convert \
    -size 800x60 \
    -background white \
    -fill black \
    -font "$font" \
    -pointsize 24 \
    label:"$font: Pack my box with five dozen liquor jugs." \
    "preview-${font}.png"
done
```

Note that ImageMagick uses fontconfig to resolve font names, so the name you pass to `-font` must match what fontconfig knows. Use `convert -list font` or `fc-match` to find the exact name.

**Generating a specimen PDF with LaTeX** gives you the most typographically accurate preview, because it uses the same rendering pipeline you will use in production:

```latex
\documentclass{article}
\usepackage{fontspec}
\setmainfont{EB Garamond}
\begin{document}

{\huge The CLI Typographer}

{\Large Pack my box with five dozen liquor jugs.}

{\normalsize The quick brown fox jumps over the lazy dog.
Sphinx of black quartz, judge my vow. How vexingly quick
daft zebras jump.}

{\small 0123456789 \quad fi fl ff ffi ffl}

{\footnotesize ABCDEFGHIJKLMNOPQRSTUVWXYZ\\
abcdefghijklmnopqrstuvwxyz}

\end{document}
```

Compile with XeLaTeX (required for `fontspec`) and open the resulting PDF. This approach shows you exactly how the font will look in a document — including how the engine handles ligatures, how the typeface renders at body and display sizes, and whether any character is missing and being substituted.

**Writing a shell script to generate comparison sheets** scales this approach to evaluating multiple candidates at once:

```sh
#!/bin/sh
# font-compare.sh: generate a comparison PDF for a list of fonts

cat > /tmp/font-compare.tex << 'EOF'
\documentclass{article}
\usepackage{fontspec}
\usepackage{geometry}
\geometry{margin=20mm}
\newcommand{\showfont}[1]{%
  \begingroup
  \setmainfont{#1}%
  \noindent{\large\textbf{#1}}\\[2pt]
  {\normalsize The quick brown fox jumps over the lazy dog.
  fi fl ff ffi ffl — 0123456789}\\[8pt]
  \endgroup
}
\begin{document}
EOF

for font in "EB Garamond" "Palatino Linotype" "Libertinus Serif" \
            "Cormorant Garamond" "Crimson Text"; do
  echo "\\showfont{$font}" >> /tmp/font-compare.tex
done

echo '\end{document}' >> /tmp/font-compare.tex

xelatex -output-directory=/tmp /tmp/font-compare.tex
```

This produces a single PDF with one specimen per font, formatted consistently for direct comparison.

**The `pango-view` tool**, where available, renders text using the Pango library (which underpins GTK and GNOME applications) and can output to a PNG file:

```sh
pango-view \
  --font="EB Garamond 24" \
  --text="The quick brown fox jumps over the lazy dog." \
  --output=preview.png
```

Pango-view's rendering will differ slightly from LaTeX's, but it is faster and does not require a full LaTeX installation. It is useful for quick visual checks when you are not yet ready to write a document.


## Font licensing basics

A font is software, and like all software it is subject to copyright and licensing terms. Using a font in a document has licensing implications that are easy to overlook and sometimes consequential.

The licenses that matter most for CLI typographers fall into a small number of categories.

**The SIL Open Font License (OFL)** is the most common free and open-source font license. It permits free use, modification, and redistribution of fonts, including embedding in documents, with two restrictions: you may not sell the fonts themselves as standalone products, and modified versions must be released under the OFL and must not use the original font's reserved name. Most of the high-quality free fonts you will encounter — EB Garamond, Libertinus, Crimson, Lato, Raleway, the entire Google Fonts catalog with few exceptions — are released under the OFL. For typesetting documents you intend to distribute, fonts under the OFL are the simplest licensing situation: use them freely, embed them in PDFs freely, no further permission needed.

**The GNU General Public License (GPL)** and its font-specific variant, the **GPL with font exception**, are used by some open-source fonts including the GNU FreeFont family and some fonts distributed with TeX Live. The font exception (sometimes called the "GPL font exception") clarifies that embedding a GPL font in a document does not cause the document itself to be covered by the GPL — without this exception, the GPL's terms would technically require any document that embeds the font to be open-source itself. When a font uses the GPL without the font exception, embedding it in a commercial or proprietary document is legally ambiguous. In practice, most GPL-licensed fonts include the exception.

**Commercial font licenses** vary substantially between foundries. The typical commercial font license grants you the right to install the font on a specified number of computers and to use it in documents — but "use in documents" has important sub-clauses. Most commercial licenses permit *static embedding* in PDFs: the font can be embedded in a PDF for viewing and printing, which is what `pdflatex` and `xelatex` do by default. Fewer licenses permit *web embedding* via `@font-face` without a separate webfont license. Some licenses restrict commercial use. Some restrict modification. The specific terms depend on the foundry and the license tier you purchased.

For CLI typesetting specifically, the key questions to ask of any commercial font are:

1. **Desktop use**: May I install this font on my workstation and typesetting server?
2. **PDF embedding**: May I embed this font in PDFs for distribution? (Almost all commercial licenses say yes.)
3. **Server use**: If I am building documents in an automated pipeline on a server, is that covered by a desktop license? (Often no — many licenses restrict use to a named number of *desktops*, and a build server may require a separate server license.)
4. **Webfont use**: If I am generating HTML output with `@font-face`, is that covered? (Usually no — requires a separate webfont license.)

The server use question is the one that most often catches CLI typographers off guard. If you are building a PDF generation service — accepting user content and rendering it to PDF with a specific typeface — and that service runs on a server, a single-user desktop font license is unlikely to cover it. Fonts licensed under the OFL do not have this restriction.

**System fonts** — the fonts that come pre-installed with an operating system — carry the operating system's licensing terms. On macOS, fonts like Helvetica Neue and San Francisco are licensed for use on Apple devices and in documents, but may not be redistributed as font files or used on non-Apple servers. On Windows, fonts like Times New Roman, Arial, and Georgia are licensed for use on Windows and in documents created on Windows, but their use in automated Linux-based pipelines is a gray area. The safest path for cross-platform document pipelines is to rely on OFL-licensed fonts rather than system fonts.

**Font licensing and PDF embedding** interact in a specific technical way. PDF files can embed fonts in two ways: full embedding (the entire font program is included in the PDF) or subsetting (only the glyphs used in the document are included). Subsetting produces smaller PDF files. Both embedding modes are permitted by most font licenses, but a few older commercial licenses prohibit full embedding while permitting subsetting. LaTeX's PDF output tools embed fonts by default and can be configured to subset or fully embed. Checking that your fonts are correctly embedded is part of preparing a print-ready PDF, and we will cover this in Chapter 8.

The practical recommendation is straightforward: for serious typographic work, build a collection of OFL-licensed typefaces that covers your common document types — a text serif, a text sans-serif, a monospace, and perhaps a display face — and use these as your defaults. Supplement with commercial fonts where design requirements demand it, and read the license carefully before deploying to an automated pipeline.

A starting collection of high-quality OFL fonts that serve most CLI typesetting purposes well:

- **EB Garamond** — A revival of Claude Garamond's 16th-century designs. Elegant, scholarly, excellent for long-form text and academic documents.
- **Libertinus Serif** — A fork of Linux Libertine with improved metrics and broader OpenType support. A reliable, neutral text face.
- **Source Serif** (Adobe) — Designed specifically for screen readability at text sizes. Clean and unpretentious.
- **IBM Plex Serif, Sans, and Mono** — A complete type family released under the OFL by IBM. Consistent across all three styles, professional, and well-hinted for screen use.
- **Fira Sans and Fira Mono** — Designed for Firefox OS, now a mature and capable sans-serif family with a matching monospace.
- **Noto** (Google) — Designed to support all Unicode scripts. If your document includes non-Latin text, Noto covers it. Available in serif, sans-serif, and monospace variants for dozens of scripts.
- **JetBrains Mono** — A monospace face specifically designed for code display, with features like ligatures for common programming symbols and careful optical sizing for long reading sessions.

All of these are available through package managers on most Linux distributions and as direct downloads from their respective foundries and Google Fonts. They form a foundation on which the document examples in Part IV will build.

---

With fonts installed, queryable, and understood, we have the complete foundation for practical work. Part I has covered where typography comes from, what it consists of, how digital type works, and how to manage it on a real system. Part II puts these tools into motion.
