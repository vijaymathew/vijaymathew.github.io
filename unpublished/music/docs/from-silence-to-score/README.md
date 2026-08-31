# From Silence to Score

Book sources and build system for a beginner-to-intermediate
composition course taught inside MuseScore 4. Published pages are the
`*.html` files in this directory; everything is self-contained here.

## Layout

```
_src/            chapter sources, Markdown, one file per page
scores/          figure generation
  notation.py    compact spec -> MusicXML
  make_figures.py builds every engraved figure via MuseScore + Pillow
assets/figures/  generated PNGs (committed; regenerable)
build.py         static generator (needs: markdown, pygments)
theme.css        typeset theme, shared chrome (sepia ink on cream)
```

## Workflow

```sh
cd scores
python3 make_figures.py            # (re)render engraved + diagram figures
cd ..
python3 build.py                   # (re)generate *.html
```

Figures require `MuseScore4.AppImage` on `PATH` and Pillow. Notation
figures are engraved by MuseScore from MusicXML that `notation.py`
produces from a compact spec (see its docstring); the piano-keyboard
diagram is drawn with Pillow. `make_figures.py <prefix>` renders only
figures whose id starts with `<prefix>`.

`build.py` renders every `_src/<id>.md` that exists; pages listed in
`PARTS` (inside `build.py`) without a source file appear on the cover
as "in preparation". A source whose first line is `<!-- draft -->` is
published with a Draft chip. The build **fails** if a referenced figure
PNG is missing.

## Directives available in chapter Markdown

| Directive | Meaning |
|---|---|
| `{{figure <id> \| <caption>}}` | numbered engraved-notation figure from `assets/figures/<id>.png` |
| `{{shot <id> \| <caption>}}` | numbered MuseScore screenshot (same numbering stream) |
| `{{fig <id>}}` | cross-reference: "Figure N.k", linked |

Figures are numbered `N.k` from the chapter number and order of
appearance. The `!!! muse "In MuseScore"` admonition is the hands-on
tool walkthrough that ends each chapter; `!!! ear` is a listening
aside. Keystrokes use raw `<kbd>` tags.

## Conventions

- Every chapter after Part 0 ends with an **In MuseScore** box, so
  theory and tool are never separated.
- Notation figures are single-system and must fit one page; keep each
  figure's spec inside one bar-group so MuseScore emits `<id>-1.png`.
- Figure scripts are deterministic: no timestamps, fixed specs.
- Screenshots for Part 0 (the interface tour) are captured manually
  and dropped into `assets/figures/` as `<id>.png`, then referenced
  with `{{shot}}`.
