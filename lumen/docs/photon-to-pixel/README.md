# The Long Way from Light to JPEG

Book sources and build system. Published pages are the `*.html` files
in this directory; everything is self-contained here.

## Layout

```
_src/            chapter sources, Markdown, one file per Part
code/pxp/        the companion package — reference tier (plain Python)
code/pxp/fast/   pipeline tier (NumPy twins of the reference code)
code/figures/    figure scripts, one per Part, deterministic
code/tests/      unit tests, incl. the two-tier equality tests
assets/figures/  generated PNGs (committed; regenerable byte-for-byte)
build.py         static generator (needs: markdown, pygments)
theme.css        typeset theme, shared chrome
```

## Workflow

```sh
cd code
python3 -m unittest discover -s tests   # the contract: tiers agree
python3 make_figures.py                 # regenerate assets/figures/
cd ..
python3 build.py                        # regenerate *.html
```

`build.py` renders every `_src/<id>.md` that exists; pages listed in
`PAGES` without a source file appear on the cover as "in preparation".
The build fails if a referenced figure PNG is missing — figures are
computed only by `code/make_figures.py`, never by the build.

## Directives available in chapter Markdown

| Directive | Meaning |
|---|---|
| `{{include <file>::<name>}}` | source of one def/class from `code/<file>` |
| `{{listing <file>}}` | a whole file from `code/` |
| `{{figure <id> \| <caption>}}` | numbered figure from `assets/figures/<id>.png` |
| `{{fig <id>}}` | cross-reference: "Figure P.N", linked |

Figures are numbered `P.N` from the Part number and order of
appearance. Inline math uses MathJax delimiters `\( … \)` / `\[ … \]`.
Callouts use the Markdown admonition syntax; the `patent` flavor
(`!!! patent "Patent note"`) renders in muted style.

## Conventions

- The reference tier (`pxp`) must import nothing outside the standard
  library. NumPy may appear only under `pxp/fast/`.
- Every `pxp.fast` function has a loop-by-loop twin in `pxp` and a
  test in `code/tests/` asserting identical output.
- Figure scripts must be deterministic: fixed seeds, no timestamps.
- The full book plan lives in the Lumen repo (`book-plan.md`).
