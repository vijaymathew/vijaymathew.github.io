#!/usr/bin/env python3
"""Static site generator for *The Definition of Nex*.

Reads body fragments from ``_src/<id>.html`` and wraps each in the shared
chrome (header, chapter opener, prev/next navigation, MathJax, code copy).
Outputs finished ``<id>.html`` files in this directory. No Quarto involved.
"""
import os, re, html

HERE = os.path.dirname(os.path.abspath(__file__))
SRC  = os.path.join(HERE, "_src")

BOOK_TITLE = "The Definition of Nex"

# (id, eyebrow label, title, one-line description for the cover TOC)
PAGES = [
    ("index",        "",            "The Definition of Nex", ""),
    ("introduction", "Chapter 1",   "Introduction",
        "What this document is, the method it follows, and the shape of the language."),
    ("syntax-core",  "Chapter 2",   "Syntax of the Core",
        "Reserved words, special constants, identifiers, lexis, and the core grammar."),
    ("syntax-modules","Chapter 3",  "Syntax of Classes and Modules",
        "Classes, features, contracts, generics, and the unit structure."),
    ("static",       "Chapter 4",   "Static Semantics",
        "Types, bindings, conformance, generic elaboration, and contract formation."),
    ("dynamic",      "Chapter 5",   "Dynamic Semantics",
        "Values, objects, evaluation of expressions and statements, and contract checking."),
    ("concurrency",  "Chapter 6",   "Concurrency",
        "Tasks, channels, and selective communication."),
    ("programs",     "Chapter 7",   "Programs",
        "Top-level elaboration and the execution of a whole program."),
    ("appendix-grammar","Appendix A","The Full Grammar",
        "The complete context-free grammar in one place."),
    ("appendix-basis",  "Appendix B","The Standard Environment",
        "The classes and values present before any user code is loaded."),
    ("appendix-derived","Appendix C","Derived Forms",
        "Surface forms defined by translation into the bare language."),
    ("appendix-rules",  "Appendix D","The Inference Rules in Full",
        "Every typing and evaluation rule of Chapters 4-5, gathered in one place."),
    ("references",      "Appendix E","References",
        "The works on whose ideas Nex and this Definition draw."),
]

# Header nav: short labels -> target
NAV = [
    ("Contents", "index.html"),
    ("Core", "syntax-core.html"),
    ("Static", "static.html"),
    ("Dynamic", "dynamic.html"),
    ("Grammar", "appendix-grammar.html"),
    ("Rules", "appendix-rules.html"),
]

MATHJAX = """
<script>
window.MathJax = {
  tex: {
    inlineMath: [['\\\\(','\\\\)']], displayMath: [['\\\\[','\\\\]']],
    macros: {
      llbracket: ["[\\\\mkern-3mu[", 0],
      rrbracket: ["]\\\\mkern-3mu]", 0]
    }
  },
  options: { skipHtmlTags: ['script','noscript','style','textarea','pre','code'] }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script" async></script>
"""

COPY_JS = """
<script>
document.querySelectorAll('.prose pre').forEach(function (pre) {
  if (pre.closest('.grammar')) return;
  var wrap = document.createElement('div');
  wrap.className = 'codeblock';
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);
  var btn = document.createElement('button');
  btn.className = 'copy-btn'; btn.textContent = 'Copy';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(pre.innerText).then(function () {
      btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1400);
    });
  });
  wrap.appendChild(btn);
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
<a class="book-title" href="cover.html">{book}</a>
<nav class="book-nav">{nav}</nav>
</div></header>
"""

FOOT = """{copy}
</body>
</html>
"""


def nav_html(active_href):
    out = []
    for label, href in NAV:
        cls = ' class="active"' if href == active_href else ''
        out.append(f'<a href="{href}"{cls}>{label}</a>')
    return "".join(out)


def render_page(i):
    pid, eyebrow, title, desc = PAGES[i]
    frag_path = os.path.join(SRC, pid + ".html")
    with open(frag_path) as f:
        body = f.read()
    href = pid + ".html"
    head = HEAD.format(title=html.escape(title), book=BOOK_TITLE,
                       desc=html.escape(desc or BOOK_TITLE),
                       mathjax=MATHJAX, nav=nav_html(href))

    if pid == "index":
        # Cover page: fragment supplies everything inside .page already.
        page = body
    else:
        opener = (f'<div class="opener">\n'
                  f'<span class="opener-label">{html.escape(eyebrow)}</span>\n'
                  f'<h1 class="opener-title">{html.escape(title)}</h1>\n'
                  f'</div>\n')
        # prev/next
        prev_link = next_link = ""
        if i > 1:
            pp = PAGES[i-1]
            prev_link = (f'<div class="prev"><a href="{pp[0]}.html">'
                         f'<span class="label">&larr; {html.escape(pp[1] or "Previous")}</span>'
                         f'<span class="ttl">{html.escape(pp[2])}</span></a></div>')
        else:
            prev_link = ('<div class="prev"><a href="index.html">'
                         '<span class="label">&larr; Contents</span>'
                         '<span class="ttl">The Definition of Nex</span></a></div>')
        if i < len(PAGES)-1:
            nn = PAGES[i+1]
            next_link = (f'<div class="next"><a href="{nn[0]}.html">'
                         f'<span class="label">{html.escape(nn[1] or "Next")} &rarr;</span>'
                         f'<span class="ttl">{html.escape(nn[2])}</span></a></div>')
        else:
            next_link = '<div class="next"></div>'
        chapnav = f'<nav class="chapter-nav">{prev_link}{next_link}</nav>'
        page = (f'<main class="page">\n{opener}'
                f'<article class="prose">\n{body}\n</article>\n{chapnav}\n</main>\n')

    out = head + page + FOOT.format(copy=COPY_JS)
    with open(os.path.join(HERE, href), "w") as f:
        f.write(out)
    return href


def main():
    built = []
    for i, p in enumerate(PAGES):
        frag = os.path.join(SRC, p[0] + ".html")
        if not os.path.exists(frag):
            print(f"  skip (no fragment): {p[0]}")
            continue
        built.append(render_page(i))
    print("Built:", ", ".join(built))


if __name__ == "__main__":
    main()
