# Letters and Correspondence

Part IV turns from tools to documents. The next five chapters produce real documents — letters, résumés, articles, presentations, and books — using the tools and techniques from Parts I through III. Each chapter covers one document type, examines what it requires typographically, and provides working examples in at least two tool pipelines.

The letter is the oldest document type in continuous use. A formal business letter from 2024 shares its basic structure with a formal letter from 1924: sender's address, date, recipient's address, salutation, body, complimentary close, signature. The typographic conventions are stable and well-understood, which makes the letter an ideal first document in this gallery — the requirements are clear, the expected output is recognisable, and the implementation illuminates techniques that scale to more complex documents.

This chapter covers three variants: the formal business letter (a submission letter to a journal), the cover letter with a personal letterhead (for job applications), and mail merge (generating one letter per recipient from a CSV file).


## What a letter requires

A letter's typographic requirements are modest but precise. The key elements:

**Address alignment** varies by convention. British and international practice uses *full block* format: every element left-aligned, with blank lines separating each block (sender address, date, recipient address, salutation, body, close). American practice is similar but uses a colon after the salutation rather than a comma. Older *semi-block* format uses a right-aligned sender block and date, with indented first lines in body paragraphs.

**Spacing** in a letter is vertical — the blank lines between elements carry as much meaning as the text. The date must be visually separated from the recipient address; the salutation must be separated from the body. This vertical rhythm is what makes a letter look like a letter rather than a document that happens to contain an address.

**Font selection** for correspondence should feel neutral and professional. Serif typefaces — Garamond, Palatino, Charter, or the LaTeX default Computer Modern — suit formal business correspondence. A humanist sans-serif is acceptable for contemporary contexts, particularly for letters in creative fields.

**Page rules**: letters are single-spaced with a blank line between paragraphs. Body text is not indented (in full block format). Headers and footers are typically absent; page numbers appear only when the letter runs to multiple pages, and then only from the second page.


## The LaTeX `letter` class

LaTeX's built-in `letter` document class provides a simple interface for correspondence. It handles the structural elements — sender, recipient, date, salutation, close, signature, enclosures — through dedicated commands:

```latex
\documentclass[12pt,a4paper]{letter}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}

% Sender information
\signature{A. N. Author\\Senior Typographer}
\address{742 Evergreen Terrace\\Springfield, SS 12345}

\begin{document}
\begin{letter}{The Editor\\
  Journal of Typographic Practice\\
  1 Publisher's Row\\
  London, EC1A 1AA}

\opening{Dear Editor,}

I am writing to submit the manuscript ``On the Typographic Quality
of CLI-Produced Documents'' for consideration in the
\textit{Journal of Typographic Practice}.

The manuscript presents a systematic comparison of documents
produced using command-line tools against those produced using
graphical desktop publishing applications.

I would be grateful for your consideration.

\closing{Yours sincerely,}

\encl{Manuscript (2 copies)\\Curriculum vitae}

\end{letter}
\end{document}
```

Compile with pdflatex:

```sh
pdflatex letter.tex
```

The `letter` class places the sender's address (`\address{...}`) at the top right, the date below it, the recipient address at the left, and the signature at the close, with appropriate vertical spacing between each element. The `\encl{...}` command produces an "Enc." notation.

The standard `letter` class is functional but dated in appearance. Its default output has the visual character of a 1980s LaTeX document. For modern correspondence, the KOMA-Script `scrlttr2` class is substantially more capable and produces a more contemporary result.


## KOMA-Script: `scrlttr2`

The `scrlttr2` class from the KOMA-Script bundle provides a sophisticated letter layout with extensive customisation through a key-value system. Sender information is set through `\setkomavar` commands, and the class handles all the layout — including the placement of a window area for windowed envelopes, the position of fold marks, and the arrangement of header and footer elements.

```latex
\documentclass[
  fontsize=11pt,
  paper=a4,
  parskip=half,
  fromalign=right,
]{scrlttr2}

\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}

\setkomavar{fromname}{A. N. Author}
\setkomavar{fromaddress}{742 Evergreen Terrace\\Springfield, SS 12345}
\setkomavar{fromphone}{+44 1234 567890}
\setkomavar{fromemail}{author@example.edu}
\setkomavar{subject}{Submission: On the Typographic Quality of CLI Documents}

\begin{document}
\begin{letter}{%
  The Editor\\
  Journal of Typographic Practice\\
  1 Publisher's Row\\
  London, EC1A 1AA
}

\opening{Dear Editor,}

I am writing to submit the enclosed manuscript for consideration in
the \textit{Journal of Typographic Practice}.

The manuscript presents a systematic comparison of documents
produced using command-line tools against those produced using
graphical applications.

I would be grateful for your consideration.

\closing{Yours sincerely,}

\ps{P.S.\ Electronic copies of all figures are available on request.}

\encl{Manuscript (2 copies)\\Curriculum vitae}

\end{letter}
\end{document}
```

`scrlttr2` variables worth knowing:

| Variable | Sets |
|----------|------|
| `fromname` | Sender's name |
| `fromaddress` | Sender's address |
| `fromphone` | Phone number |
| `fromemail` | Email address |
| `fromurl` | Website |
| `subject` | Subject line |
| `date` | Date (default: `\today`) |
| `signature` | Signature text (default: `fromname`) |
| `backaddress` | Return address for window envelopes |

The class option `fromalign=right` right-aligns the sender block; `fromalign=left` left-aligns it; `fromalign=center` centres it. The `parskip=half` option adds half a line of space between paragraphs rather than using first-line indentation, which is conventional for business letters.

KOMA-Script also provides letter styles (*letter class option files*, `.lco` files) that can set multiple variables at once. A reusable personal style file:

```latex
% personal.lco
\ProvidesFile{personal.lco}

\setkomavar{fromname}{A. N. Author}
\setkomavar{fromaddress}{742 Evergreen Terrace\\Springfield, SS 12345}
\setkomavar{fromemail}{author@example.edu}
\KOMAoption{fromalign}{right}
\KOMAoption{fromrule}{afteraddress}
```

Load it in any letter:

```latex
\documentclass[personal, fontsize=11pt]{scrlttr2}
```

This separates the personal information from the document content entirely — the `.lco` file contains everything about the sender, and individual letters contain only the recipient and body.


## Cover letters with a personal header

A cover letter for a job application has different conventions from a formal business letter. It is more personal, often contains design elements that reflect the applicant's aesthetic judgment, and typically uses a custom letterhead rather than the letter class's standard address layout.

The approach: write the letter in LaTeX as a plain `article` document, add a custom header command that positions the applicant's name and contact information, and use `\pagestyle{empty}` to suppress the default headers and footers.

```latex
\documentclass[11pt,a4paper]{article}
\usepackage{fontspec}
\setmainfont{EB Garamond}
\setsansfont{Fira Sans}[Scale=MatchLowercase]
\usepackage{geometry}
\geometry{top=20mm, bottom=25mm, left=25mm, right=25mm}
\usepackage[protrusion=true]{microtype}
\usepackage{xcolor}
\usepackage{parskip}
\pagestyle{empty}

\newcommand{\letterhead}{%
  \begin{center}
    {\large\sffamily\bfseries A. N. AUTHOR}\\[4pt]
    {\small\color{gray}
      742 Evergreen Terrace \quad|\quad
      Springfield, SS 12345 \quad|\quad
      \texttt{author@example.edu}}\\[6pt]
    {\color{gray!60}\rule{0.8\linewidth}{0.4pt}}
  \end{center}
  \vspace{1.5em}
}

\begin{document}
\letterhead

\begin{flushright}
15 March 2024
\end{flushright}

\vspace{1em}

Dr Sarah Mitchell\\
Head of Typography\\
Design Institute\\
London, WC2A 2AE

\vspace{1.5em}

Dear Dr Mitchell,

I am applying for the position of Senior Document Architect
(Reference: DA-2024-03), as advertised on the Design Institute's
website.

My eight years of experience in CLI-based typesetting and document
automation make me well-suited to this role. I have built production
pipelines in Pandoc, \LaTeX{}, and Typst that produce publication-ready
output in multiple formats from a single Markdown source, substantially
reducing production time.

I would welcome the opportunity to discuss my application.

\vspace{1.5em}
Yours sincerely,

\vspace{3em}
A. N. Author

\end{document}
```

Compile with XeLaTeX for the `fontspec` font access:

```sh
xelatex cover-letter.tex
```

For a cover letter that will be sent digitally, adding a hyperlinked email address improves usability:

```latex
\usepackage{hyperref}
\hypersetup{hidelinks, colorlinks=false}

% In the letterhead:
\href{mailto:author@example.edu}{\texttt{author@example.edu}}
```

`hidelinks` removes the coloured box that hyperref draws around links by default, making the link visible only by cursor behaviour in a PDF viewer — appropriate for a printed letter where ink-coloured link boxes would look wrong.


## A Pandoc approach for flexible formats

For correspondence that needs to be produced in multiple formats — PDF for printing, HTML for email, ODT for editing — writing the letter in Pandoc Markdown with a custom template separates the content from the format entirely.

The letter body in Markdown, with metadata:

```markdown
---
from-name: "A. N. Author"
from-address: "742 Evergreen Terrace, Springfield, SS 12345"
from-email: "author@example.edu"
to-name: "The Editor"
to-company: "Journal of Typographic Practice"
to-address: "1 Publisher's Row, London, EC1A 1AA"
date: "15 March 2024"
subject: "Manuscript Submission"
opening: "Dear Editor,"
closing: "Yours sincerely,"
---

I am writing to submit the manuscript *"On the Typographic Quality
of CLI-Produced Documents"* for consideration in the *Journal of
Typographic Practice*.

The manuscript presents a systematic comparison of documents
produced using command-line tools against those produced using
graphical desktop publishing applications.

I would be grateful for your consideration.
```

The LaTeX template `letter.latex`:

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[T1]{fontenc}
\usepackage[protrusion=true,expansion=false]{microtype}
\usepackage{geometry}
\geometry{top=25mm, bottom=30mm, left=30mm, right=25mm}
\usepackage{parskip}
\pagestyle{empty}

\begin{document}

$if(from-address)$
\begin{flushright}
$from-address$ \\
$if(from-email)$\texttt{$from-email$}$endif$
\end{flushright}
$endif$

\medskip
\begin{flushright}$date$\end{flushright}
\bigskip

$if(to-name)$$to-name$\\$endif$
$if(to-company)$$to-company$\\$endif$
$if(to-address)$$to-address$$endif$

\bigskip

$if(subject)$\textbf{Subject: $subject$}\medskip$endif$

$opening$

\medskip
$body$

\vspace{1.5em}
$closing$

\vspace{3em}
$from-name$

\end{document}
```

Render to PDF:

```sh
pandoc letter.md --template=letter.latex -o letter.pdf --pdf-engine=pdflatex
```

Render to HTML with an equivalent HTML template for the same letter in email-friendly format, or to plain text for quick review. The content never needs to change; only the template changes with the output format.


## Mail merge: one letter per recipient

Mail merge — generating a personalised letter for each entry in a list — is a natural extension of the template approach. The same Pandoc command that renders a letter from YAML metadata can be driven by a CSV file, producing one PDF per row.

The recipient list `recipients.csv`:

```csv
name,title,company,address,city,role,ref
"Dr Sarah Mitchell","Dr","Design Institute","1 Design Square","London WC2A 2AE","Senior Document Architect","DA-2024-03"
"Prof James Chen","Prof","Institute of Print","24 Press Lane","Edinburgh EH1 2AB","Technical Writer","TW-2024-07"
"Ms Rebecca Okonkwo","Ms","Typesetting Ltd","56 Compositor Street","Bristol BS1 3CD","Document Engineer","DE-2024-12"
```

A Python script that reads the CSV and calls Pandoc for each row:

```python
#!/usr/bin/env python3
"""mailmerge.py: generate one PDF per recipient from CSV + Pandoc template."""

import csv
import subprocess
import sys
from pathlib import Path

def sanitize(name):
    return name.replace(' ', '_').replace('.', '').replace(',', '')

def generate(template, latex_tmpl, recipient, output_path):
    cmd = ['pandoc', template,
           '--template', latex_tmpl,
           '--pdf-engine', 'pdflatex',
           '-o', str(output_path)]
    for key, value in recipient.items():
        cmd.extend(['-M', f'{key}={value}'])
    return subprocess.run(cmd, capture_output=True).returncode == 0

def main():
    csv_file   = sys.argv[1] if len(sys.argv) > 1 else 'recipients.csv'
    template   = sys.argv[2] if len(sys.argv) > 2 else 'letter.md'
    output_dir = Path(sys.argv[3] if len(sys.argv) > 3 else 'output')
    latex_tmpl = 'letter.latex'

    output_dir.mkdir(parents=True, exist_ok=True)
    success = failures = 0

    with open(csv_file, newline='', encoding='utf-8') as f:
        for row in csv.DictReader(f):
            name = row.get('name', 'recipient')
            out  = output_dir / f"letter-{sanitize(name)}.pdf"
            print(f"  {'OK  ' if generate(template, latex_tmpl, row, out) else 'FAIL'}: {name}")
            success += 1

    print(f"\n{success} letters generated in {output_dir}/")

if __name__ == '__main__':
    main()
```

Run the merge:

```sh
python3 mailmerge.py recipients.csv letter.md output/
```

```
  OK  : Dr Sarah Mitchell
  OK  : Prof James Chen
  OK  : Ms Rebecca Okonkwo

3 letters generated in output/
```

Each recipient's data is passed to Pandoc via `-M key=value` flags, which override and supplement the metadata in the template Markdown file. The `name`, `title`, `company`, `address`, `city`, `role`, and `ref` fields from the CSV row are injected into the template as metadata variables, where the LaTeX template reads them with `$name$`, `$title$`, and so on.

For a pure-shell alternative without Python:

```sh
#!/bin/sh
tail -n +2 recipients.csv | while IFS=, read name title company address city role ref; do
  name=$(printf '%s' "$name" | tr -d '"')
  title=$(printf '%s' "$title" | tr -d '"')
  slug=$(printf '%s' "$name" | tr ' ' '_' | tr -d '.')
  
  pandoc letter.md \
    --template=letter.latex \
    --pdf-engine=pdflatex \
    -M "name=$name" -M "title=$title" \
    -M "company=$(printf '%s' "$company" | tr -d '"')" \
    -M "address=$(printf '%s' "$address" | tr -d '"')" \
    -M "city=$(printf '%s' "$city" | tr -d '"')" \
    -M "role=$(printf '%s' "$role" | tr -d '"')" \
    -M "ref=$(printf '%s' "$ref" | tr -d '"')" \
    -o "output/letter-${slug}.pdf" 2>/dev/null \
    && echo "OK: $name" || echo "FAIL: $name"
done
```

The shell approach is simpler but less robust for CSV fields that contain commas or newlines within quoted values. Python's `csv` module handles these edge cases correctly; the shell approach requires that no field value contains a comma or newline.


## The Typst letter template

For projects using Typst as the primary tool, the same letter can be written as a Typst document. The advantage over the LaTeX approach is that the template is written in Typst's native function syntax, which is more readable and easier to modify:

```typst
#let letter(
  from-name: "",
  from-address: "",
  from-email: none,
  to-name: "",
  to-address: "",
  date: none,
  subject: none,
  opening: "Dear Sir or Madam,",
  closing: "Yours faithfully,",
  body
) = {
  set page(paper: "a4",
    margin: (top: 25mm, bottom: 30mm, left: 30mm, right: 25mm))
  set text(font: "EB Garamond", size: 11pt)
  set par(justify: true)

  // Sender block
  align(right)[
    #from-address \
    #if from-email != none { raw(from-email) }
  ]
  v(0.5em)
  align(right, if date != none { date } else {
    datetime.today().display("[day] [month repr:long] [year]")
  })
  v(2em)

  // Recipient
  to-name \
  to-address
  v(2em)

  if subject != none { strong("Subject: " + subject); v(0.5em) }

  opening
  v(0.5em)
  body
  v(1.5em)
  closing
  v(3em)
  from-name
}

// Using the template
#show: letter.with(
  from-name: "A. N. Author",
  from-address: "742 Evergreen Terrace\nSpringfield, SS 12345",
  from-email: "author@example.edu",
  to-name: "The Editor",
  to-address: "Journal of Typographic Practice\n1 Publisher's Row\nLondon, EC1A 1AA",
  date: "15 March 2024",
  subject: "Manuscript Submission",
  opening: "Dear Editor,",
  closing: "Yours sincerely,",
)

I am writing to submit the manuscript _"On the Typographic Quality
of CLI-Produced Documents"_ for consideration in the _Journal of
Typographic Practice_.

The manuscript presents a systematic comparison of documents
produced using command-line tools. I would be grateful for your
consideration.
```

```sh
typst compile letter.typ
```

Typst has no equivalent of `scrlttr2`'s window-envelope positioning, fold marks, and postal format compliance features. For letters that need to fit a windowed envelope precisely, the LaTeX KOMA approach remains the more capable option.


## Choosing the approach

The right tool for a letter depends on how the letter will be used:

**For a one-off formal letter** where typographic quality matters and the document will be printed: XeLaTeX with a custom header or `scrlttr2` produces the best output with direct control over every element.

**For a template-driven letter produced across multiple formats**: the Pandoc + LaTeX template approach separates content from presentation cleanly, enables multiple output formats from one source, and keeps the letter content in Markdown where it is easy to read and edit.

**For mail merge** producing many letters from a data file: the Python + Pandoc approach handles the CSV correctly, produces one file per recipient, and requires no specialised mail merge infrastructure.

**For Typst-based projects**: the native Typst function approach is clean and readable, with fast compilation and easy modification.

The letter is a simple document, but it illustrates the template-and-separation-of-concerns pattern that scales to the more complex documents in the next chapters. The résumé, covered in Chapter 19, extends these patterns significantly.
