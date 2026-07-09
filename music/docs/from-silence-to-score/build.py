#!/usr/bin/env python3
"""Static generator for *From Silence to Score*.

Chapters are Markdown fragments in _src/<id>.md. This script:

  * expands directives before Markdown conversion:
      {{figure <id> | <caption>}}  numbered engraved-notation figure
                                   from assets/figures/<id>.png
      {{shot <id> | <caption>}}    numbered MuseScore screenshot,
                                   same numbering stream as figures
      {{fig <id>}}                 "Figure P.N" cross-reference link
  * converts Markdown (tables, fenced code, admonitions, smart
    typography), wraps section numbers in .secno spans,
  * wraps each page in the shared chrome: header, opener, prev/next
    navigation, MathJax, copy buttons.

Notation figures are produced by scores/make_figures.py (MusicXML ->
MuseScore -> trimmed PNG); this build only references them. The build
fails if a referenced figure file is missing.
"""

import html
import os
import re
import sys

import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "_src")
FIGS = os.path.join(HERE, "assets", "figures")

BOOK_TITLE = "From Silence to Score"
BOOK_SUB = ("Learning to compose — from a blank staff to a piece for "
            "small orchestra — with MuseScore 4 at your side the whole way.")

# The book, grouped into parts. Each part is:
#   (part_label, part_title, [pages])
# and each page is:
#   (id, eyebrow, number-label, title, one-line description, is_project)
PARTS = [
    ("Front Matter", "", [
        ("preface", "Preface", "", "Before the First Note",
         "Why compose, why MuseScore, and the one promise this book makes "
         "about how theory and tool will never be separated.", False),
    ]),
    ("Part 0", "Setting Up", [
        ("p0-install", "Chapter 1", "1", "Installing MuseScore 4",
         "First launch, the workspace tour, and naming the parts of the "
         "window you will live in for the rest of the book.", False),
        ("p0-input", "Chapter 2", "2", "Getting Notes In",
         "Three ways to enter notes — mouse, computer keyboard, MIDI — and "
         "why the keyboard method is the one worth learning first.", False),
        ("p0-navigating", "Chapter 3", "3", "Navigating the Score",
         "Palettes, the Properties panel, the Mixer, and playback: the four "
         "surfaces through which you shape everything.", False),
        ("p0-files", "Chapter 4", "4", "Saving and Exporting",
         "Project files, PDF, MusicXML, and audio — what each format keeps, "
         "what it throws away, and a sane way to organize your work.", False),
    ]),
    ("Part 1", "Notation Fundamentals", [
        ("p1-staff", "Chapter 5", "5", "Staff, Clef, and Pitch",
         "The staff as a graph of pitch against time, the clefs that anchor "
         "it, and the keyboard that makes it concrete.", False),
        ("p1-rhythm", "Chapter 6", "6", "Rhythm and Meter",
         "Note values, rests, beat and meter, and time signatures — how "
         "music is measured before it is pitched.", False),
        ("p1-scales", "Chapter 7", "7", "Scales",
         "Building major and minor scales from whole and half steps — and "
         "the three faces of the minor scale.", False),
        ("p1-keys", "Chapter 8", "8", "Key Signatures and the Circle of Fifths",
         "Why sharps and flats collect at the front of the staff, and the "
         "map that organizes every key.", False),
        ("p1-intervals", "Chapter 9", "9", "Intervals",
         "Measuring the distance between two notes by number and quality — "
         "the atom of every chord and melody to come.", False),
        ("p1-expression", "Chapter 10", "10", "Dynamics, Articulation, Tempo",
         "The markings that turn a correct sequence of pitches into "
         "something a performer can play — and feel.", False),
        ("p1-project", "Project 1", "P1", "Notate a Melody",
         "From a recording and a reference score to clean, readable "
         "notation. The first piece of your portfolio.", True),
    ]),
    ("Part 2", "Harmony Basics", [
        ("p2-triads", "Chapter 11", "11", "Triads",
         "Major, minor, diminished, augmented — the four three-note chords "
         "that everything else is built from.", False),
        ("p2-diatonic", "Chapter 12", "12", "Diatonic Chords",
         "The seven chords native to a key, their Roman numerals, and the "
         "gravity between them.", False),
        ("p2-inversions", "Chapter 13", "13", "Inversions and Chord Symbols",
         "Turning a chord over, and the lead-sheet shorthand that names it "
         "in a single line.", False),
        ("p2-satb", "Chapter 14", "14", "Four-Part Writing",
         "SATB chorale texture and the voice-leading rules that keep four "
         "independent lines sounding like one.", False),
        ("p2-cadences", "Chapter 15", "15", "Cadences",
         "Authentic, plagal, half, deceptive — the punctuation marks of "
         "harmony.", False),
        ("p2-nct", "Chapter 16", "16", "Non-Chord Tones",
         "Passing tones, neighbors, suspensions — the notes that don't "
         "belong to the chord and make the music breathe.", False),
        ("p2-project", "Project 2", "P2", "Harmonize a Melody",
         "Give a given melody four voices, obeying the rules you now know "
         "and breaking them only on purpose.", True),
    ]),
    ("Part 3", "Melody and Phrase Structure", [
        ("p3-melody", "Chapter 17", "17", "What Makes a Melody Work",
         "Contour, motive, and sequence — the difference between a line and "
         "a tune.", False),
        ("p3-phrase", "Chapter 18", "18", "Phrases, Periods, Sentences",
         "How small musical units join into the sentences and paragraphs of "
         "a piece.", False),
        ("p3-motive", "Chapter 19", "19", "Motivic Development",
         "Repetition, sequence, fragmentation, inversion — squeezing a "
         "whole movement out of a three-note idea.", False),
        ("p3-melody-harmony", "Chapter 20", "20", "Melody from Harmony",
         "Writing a tune over a progression, and a progression under a tune "
         "— the two directions of the same craft.", False),
        ("p3-accompaniment", "Chapter 21", "21", "Accompaniment Patterns",
         "Block chords, arpeggiation, and the Alberti bass — turning a chord "
         "grid into texture.", False),
        ("p3-project", "Project 3", "P3", "Compose a Melody with Accompaniment",
         "An original eight-to-sixteen-bar melody with its own "
         "accompaniment — the seed of everything in Parts 5 and 7.", True),
    ]),
    ("Part 4", "Form", [
        ("p4-modulation", "Chapter 22", "22", "Simple Modulation",
         "Moving to the dominant or relative major and finding your way "
         "home again.", False),
        ("p4-binary-ternary", "Chapter 23", "23", "Binary and Ternary Form",
         "The two-part and three-part shapes underneath most short pieces "
         "ever written.", False),
        ("p4-variations", "Chapter 24", "24", "Theme and Variations",
         "Keeping a theme recognizable while changing everything around "
         "it.", False),
        ("p4-rondo", "Chapter 25", "25", "Rondo",
         "A recurring refrain and the episodes between it — form as return.",
         False),
        ("p4-sonata", "Chapter 26", "26", "Toward Sonata Form",
         "A light-touch look at the most important form in the repertoire, "
         "kept to an intermediate ceiling.", False),
        ("p4-project", "Project 4", "P4", "Compose in Binary or Ternary Form",
         "A short, complete piece with a real beginning, middle, and "
         "return.", True),
    ]),
    ("Part 5", "Small Ensemble Writing", [
        ("p5-piano", "Chapter 27", "27", "Writing for Piano",
         "Two-hand texture, voicing, and what the pedal implies — the "
         "instrument every composer thinks at.", False),
        ("p5-counterpoint", "Chapter 28", "28", "A Counterpoint Primer",
         "First and second species, used as a practical tool rather than an "
         "academic discipline.", False),
        ("p5-duet", "Chapter 29", "29", "Writing for Two Instruments",
         "Duet texture, imitation, and call-and-response — two independent "
         "voices in conversation.", False),
        ("p5-quartet", "Chapter 30", "30", "Writing for a Small Ensemble",
         "Balance and register across a string quartet or similar group.",
         False),
        ("p5-project", "Project 5", "P5", "Arrange a Melody for an Ensemble",
         "Take an earlier melody and score it for a small group — the last "
         "step before the orchestra.", True),
    ]),
    ("Part 6", "Instrumentation Primer", [
        ("p6-families", "Chapter 31", "31", "The Instrument Families",
         "Strings, woodwinds, brass, and percussion — how each makes its "
         "sound and where it lives.", False),
        ("p6-transposition", "Chapter 32", "32", "Ranges and Transposition",
         "Written pitch versus concert pitch, and how MuseScore keeps the "
         "two straight for you.", False),
        ("p6-ranges", "Chapter 33", "33", "Idiomatic Ranges",
         "Where each instrument sounds its best, and the beginner mistakes "
         "that make players wince.", False),
        ("p6-doubling", "Chapter 34", "34", "Doubling and Voicing",
         "Combining instruments across a small group without mud or "
         "collision.", False),
    ]),
    ("Part 7", "Introduction to Orchestration", [
        ("p7-what", "Chapter 35", "35", "What Orchestration Is",
         "Composing with timbre, not merely assigning notes to players.",
         False),
        ("p7-textures", "Chapter 36", "36", "Orchestral Textures",
         "Melody and accompaniment, homophonic blocks, simple counterpoint "
         "— the basic ways an orchestra can be arranged.", False),
        ("p7-balance", "Chapter 37", "37", "Balance",
         "Who carries the melody, who supports, and how to keep the middle "
         "register from turning to mud.", False),
        ("p7-chamber", "Chapter 38", "38", "Scoring for Chamber Orchestra",
         "Bringing it together on a real MuseScore template.", False),
        ("p7-reading", "Chapter 39", "39", "Reading Real Scores",
         "A few annotated public-domain excerpts, and how to steal from "
         "them well.", False),
        ("p7-capstone", "Capstone", "C", "Re-Score for Small Orchestra",
         "Take one earlier piece and fully orchestrate it, with a short "
         "written analysis of your own choices.", True),
    ]),
    ("Appendices", "", [
        ("app-shortcuts", "Appendix A", "A", "Keyboard Shortcuts",
         "The MuseScore 4 shortcuts worth committing to muscle memory.",
         False),
        ("app-ranges", "Appendix B", "B", "Instrument Range Chart",
         "Concert and written ranges for the instruments in this book.",
         False),
        ("app-glossary", "Appendix C", "C", "Glossary",
         "The vocabulary of the book, in one place.", False),
        ("app-next", "Appendix D", "D", "Where to Go Next",
         "Belkin, Adler, Piston, and the scores worth a lifetime of "
         "study.", False),
    ]),
]

# Flat list of pages in reading order, and a lookup by id.
PAGES = [p for _, _, pages in PARTS for p in pages]

# Header nav: label -> page id (only rendered once the page exists)
NAV = [
    ("Contents", "index"),
    ("Preface", "preface"),
    ("Notation", "p1-staff"),
    ("Harmony", "p2-triads"),
    ("Melody", "p3-melody"),
    ("Form", "p4-binary-ternary"),
    ("Orchestration", "p7-what"),
]

COVER_META = """
<p><strong>Vijay Mathew</strong></p>
<p>Every notated example in this book is real engraving, rendered from
its own source by MuseScore — the same program you will be learning to
use. Thirty-nine chapters, five hands-on projects, and a capstone: by
the end you will have composed, harmonized, arranged, and finally
orchestrated a piece of your own, and read the score you wrote.</p>
"""

MATHJAX = """
<script>
window.MathJax = {
  tex: { inlineMath: [['\\\\(','\\\\)']], displayMath: [['\\\\[','\\\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea','pre','code'] }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script" async></script>
"""

COPY_JS = """
<script>
document.querySelectorAll('.prose .highlight').forEach(function (block) {
  block.classList.add('codeblock');
  var pre = block.querySelector('pre');
  if (!pre) return;
  var btn = document.createElement('button');
  btn.className = 'copy-btn'; btn.textContent = 'Copy';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(pre.innerText).then(function () {
      btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1400);
    });
  });
  block.appendChild(btn);
});
</script>
"""

HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — {book}</title>
<meta name="description" content="{desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="theme.css">
{mathjax}
</head>
<body>
<header class="site-header"><div class="site-header-inner">
<a class="book-title" href="index.html">{book}</a>
<nav class="book-nav">{nav}</nav>
</div></header>
"""

FOOT = """{copy}
</body>
</html>
"""

MD_EXTENSIONS = ["tables", "fenced_code", "codehilite", "admonition", "smarty"]
MD_CONFIG = {"codehilite": {"css_class": "highlight", "guess_lang": False}}

DRAFT_MARK = "<!-- draft -->"


def fail(msg):
    sys.exit(f"build.py: error: {msg}")


MATH = re.compile(r"\\\(.+?\\\)|\\\[.+?\\\]", re.S)


def stash_math(text):
    stash = []

    def keep(m):
        stash.append(m.group(0))
        return f"MATHSTASH{len(stash) - 1}ENDMATH"

    return MATH.sub(keep, text), stash


def restore_math(body, stash):
    return re.sub(
        r"MATHSTASH(\d+)ENDMATH",
        lambda m: html.escape(stash[int(m.group(1))], quote=False),
        body)


def caption_html(text):
    """Markdown for figure captions, unwrapped from its <p>."""
    rendered = markdown.markdown(text.strip(), extensions=["smarty"])
    return re.sub(r"^<p>|</p>$", "", rendered.strip())


FIG_DIRECTIVE = re.compile(r"\{\{(figure|shot)\s+([\w-]+)\s*\|", re.S)


def scan_figures():
    """Pass 1: number every figure/shot across the book.

    Returns {figure_id: (page_href, label)} where label is 'N.k' from
    the page's number-label and the figure's order within its page.
    Figures and screenshots share one numbering stream per page.
    """
    registry = {}
    for pid, _, numlabel, _, _, _ in PAGES:
        frag = os.path.join(SRC, pid + ".md")
        if not os.path.exists(frag):
            continue
        with open(frag) as f:
            text = f.read()
        label_stem = numlabel or "0"
        for n, m in enumerate(FIG_DIRECTIVE.finditer(text), start=1):
            fig_id = m.group(2)
            if fig_id in registry:
                fail(f"duplicate figure id {fig_id!r} ({pid})")
            registry[fig_id] = (pid + ".html", f"{label_stem}.{n}")
    return registry


def expand_directives(text, page_href, figures):
    def fig_block(kind, fig_id, caption):
        png = os.path.join(FIGS, fig_id + ".png")
        if not os.path.exists(png):
            hint = ("run scores/make_figures.py" if kind == "figure"
                    else "add the screenshot")
            fail(f"{kind} {fig_id!r}: assets/figures/{fig_id}.png missing "
                 f"— {hint}")
        label = figures[fig_id][1]
        css = "score" if kind == "figure" else "shot"
        return (f'<figure id="fig-{fig_id}" class="{css}">\n'
                f'<img src="assets/figures/{fig_id}.png" '
                f'alt="Figure {label}">\n'
                f'<figcaption><span class="figno">Figure {label}</span> '
                f'{caption_html(caption)}</figcaption>\n</figure>\n')

    def do_figure(m):
        return fig_block("figure", m.group(1), m.group(2).strip())

    def do_shot(m):
        return fig_block("shot", m.group(1), m.group(2).strip())

    def do_ref(m):
        fig_id = m.group(1)
        if fig_id not in figures:
            fail(f"fig reference to unknown figure {fig_id!r}")
        href, label = figures[fig_id]
        anchor = f"#fig-{fig_id}"
        target = anchor if href == page_href else href + anchor
        return f'<a href="{target}">Figure {label}</a>'

    text = re.sub(r"\{\{figure\s+([\w-]+)\s*\|\s*(.*?)\}\}",
                  do_figure, text, flags=re.S)
    text = re.sub(r"\{\{shot\s+([\w-]+)\s*\|\s*(.*?)\}\}",
                  do_shot, text, flags=re.S)
    text = re.sub(r"\{\{fig\s+([\w-]+)\}\}", do_ref, text)
    leftover = re.search(r"\{\{[^}]*\}\}", text)
    if leftover:
        fail(f"unrecognized directive: {leftover.group(0)[:60]}")
    return text


def number_headings(body):
    """Wrap leading '5.1' / 'A.2' / 'P1.1' section numbers in .secno spans."""
    return re.sub(
        r"<h([23])>((?:\d+|[A-Z]|P\d+)\.\d+)\s+",
        lambda m: (f'<h{m.group(1)} id="sec-{m.group(2).replace(".", "-")}">'
                   f'<span class="secno">{m.group(2)}</span>'),
        body)


def part_of(pid):
    """(part_label, part_title) for the page id, or (None, None)."""
    for label, title, pages in PARTS:
        if any(p[0] == pid for p in pages):
            return label, title
    return None, None


def nav_html(active_href, built):
    out = []
    for label, pid in NAV:
        href = pid + ".html"
        if pid != "index" and pid not in built:
            continue
        cls = ' class="active"' if href == active_href else ""
        out.append(f'<a href="{href}"{cls}>{label}</a>')
    return "".join(out)


def chapter_nav(i, built):
    def link(kind, page):
        pid, eyebrow, _, title, _, _ = page
        return (f'<div class="{kind}"><a href="{pid}.html">'
                f'<span class="label">{"&larr; " if kind == "prev" else ""}'
                f'{html.escape(eyebrow)}'
                f'{" &rarr;" if kind == "next" else ""}</span>'
                f'<span class="ttl">{html.escape(title)}</span></a></div>')

    prev_html = ('<div class="prev"><a href="index.html">'
                 '<span class="label">&larr; Contents</span>'
                 f'<span class="ttl">{BOOK_TITLE}</span></a></div>')
    for j in range(i - 1, -1, -1):
        if PAGES[j][0] in built:
            prev_html = link("prev", PAGES[j])
            break
    next_html = '<div class="next"></div>'
    for j in range(i + 1, len(PAGES)):
        if PAGES[j][0] in built:
            next_html = link("next", PAGES[j])
            break
    return f'<nav class="chapter-nav">{prev_html}{next_html}</nav>'


def render_chapter(i, figures, built):
    pid, eyebrow, _, title, desc, _ = PAGES[i]
    href = pid + ".html"
    with open(os.path.join(SRC, pid + ".md")) as f:
        text = f.read()

    draft = text.lstrip().startswith(DRAFT_MARK)
    if draft:
        text = text.lstrip()[len(DRAFT_MARK):]

    part_label, part_title = part_of(pid)
    if part_title:
        eyebrow_html = (f'{html.escape(eyebrow)} '
                        f'<span class="part-of">· {html.escape(part_title)}'
                        f'</span>')
    else:
        eyebrow_html = html.escape(eyebrow)
    if draft:
        eyebrow_html += '<span class="draft-chip">Draft</span>'

    text, math = stash_math(text)
    text = expand_directives(text, href, figures)
    md = markdown.Markdown(extensions=MD_EXTENSIONS,
                           extension_configs=MD_CONFIG)
    body = restore_math(number_headings(md.convert(text)), math)

    opener = (f'<div class="opener">\n'
              f'<span class="opener-label">{eyebrow_html}</span>\n'
              f'<h1 class="opener-title">{html.escape(title)}</h1>\n'
              f'<p class="opener-lede">{html.escape(desc)}</p>\n'
              f'</div>\n')
    head = HEAD.format(title=html.escape(title), book=BOOK_TITLE,
                       desc=html.escape(desc), mathjax=MATHJAX,
                       nav=nav_html(href, built))
    page = (f'<main class="page">\n{opener}'
            f'<article class="prose">\n{body}\n</article>\n'
            f'{chapter_nav(i, built)}\n</main>\n')
    with open(os.path.join(HERE, href), "w") as f:
        f.write(head + page + FOOT.format(copy=COPY_JS))
    return href


def render_cover(built):
    blocks = []
    for label, title, pages in PARTS:
        head = f'<span class="toc-part-label">{html.escape(label)}</span>'
        if title:
            head += f'<span class="toc-part-title">{html.escape(title)}</span>'
        entries = []
        for pid, _, numlabel, ptitle, pdesc, is_project in pages:
            tn = numlabel or "·"
            if pid in built:
                chip = ('<span class="soon">draft</span>'
                        if built[pid] else "")
            else:
                chip = '<span class="soon">in preparation</span>'
            ttl_cls = ' class="project"' if is_project else ""
            if pid in built:
                body = (f'<a href="{pid}.html"{ttl_cls}>{html.escape(ptitle)}'
                        f'</a>{chip}'
                        f'<span class="desc">{html.escape(pdesc)}</span>')
            else:
                body = (f'<span class="pending">{html.escape(ptitle)}</span>'
                        f'{chip}'
                        f'<span class="desc">{html.escape(pdesc)}</span>')
            entries.append(
                f'<li class="toc-entry"><span class="tn">{tn}</span>'
                f'<span>{body}</span></li>')
        blocks.append(
            f'<div class="toc-part">{head}</div>\n'
            f'<ol class="toc-list">\n' + "\n".join(entries) + "\n</ol>")
    toc = "\n".join(blocks)

    head = HEAD.format(title="Contents", book=BOOK_TITLE,
                       desc=BOOK_SUB, mathjax="",
                       nav=nav_html("index.html", built))
    page = (f'<main class="cover">\n'
            f'<div class="cover-eyebrow">A Composition Course in MuseScore 4'
            f'</div>\n'
            f'<h1 class="cover-title">From Silence to Score</h1>\n'
            f'<p class="cover-sub">{html.escape(BOOK_SUB)}</p>\n'
            f'<div class="cover-rule"></div>\n'
            f'<div class="cover-meta">{COVER_META}</div>\n'
            f'{toc}\n</main>\n')
    with open(os.path.join(HERE, "index.html"), "w") as f:
        f.write(head + page + FOOT.format(copy=""))
    return "index.html"


def main():
    built = {}
    for pid, *_ in PAGES:
        frag = os.path.join(SRC, pid + ".md")
        if os.path.exists(frag):
            with open(frag) as f:
                built[pid] = f.read().lstrip().startswith(DRAFT_MARK)
    figures = scan_figures()
    out = [render_cover(built)]
    for i, page in enumerate(PAGES):
        if page[0] in built:
            out.append(render_chapter(i, figures, built))
    pending = len(PAGES) - len(built)
    print(f"Built {len(out)} page(s); {pending} page(s) pending.")


if __name__ == "__main__":
    main()
