# Letters and Correspondence

Part IV turns from tools to documents. The next five chapters produce real documents — letters, résumés, articles, presentations, and books — using the tools and techniques from Parts I through III. Each chapter covers one document type, examines what it requires typographically, and provides working examples in at least two tool pipelines.

The letter is the oldest document type in continuous use. A formal business letter from 2024 shares its basic structure with a formal letter from 1924: sender's address, date, recipient's address, salutation, body, complimentary close, signature. The typographic conventions are stable and well-understood, which makes the letter an ideal first document in this gallery — the requirements are clear, the expected output is recognisable, and the implementation illuminates techniques that scale to more complex documents.

This chapter covers three variants: the formal business letter (a submission letter to a journal), the cover letter with a personal letterhead (for job applications), and mail merge (generating one letter per recipient from a CSV file). The general pattern follows the rest of the book: keep the source in Markdown when multiple formats matter, prefer Typst for PDF-only output, and treat specialised postal templates as edge cases rather than the default path.


## What a letter requires

A letter's typographic requirements are modest but precise. The key elements:

**Address alignment** varies by convention. British and international practice uses *full block* format: every element left-aligned, with blank lines separating each block (sender address, date, recipient address, salutation, body, close). American practice is similar but uses a colon after the salutation rather than a comma. Older *semi-block* format uses a right-aligned sender block and date, with indented first lines in body paragraphs.

**Spacing** in a letter is vertical — the blank lines between elements carry as much meaning as the text. The date must be visually separated from the recipient address; the salutation must be separated from the body. This vertical rhythm is what makes a letter look like a letter rather than a document that happens to contain an address.

**Font selection** for correspondence should feel neutral and professional. Serif typefaces — Garamond, Palatino, Charter, or Source Serif — suit formal business correspondence. A humanist sans-serif is acceptable for contemporary contexts, particularly for letters in creative fields.

**Page rules**: letters are single-spaced with a blank line between paragraphs. Body text is not indented (in full block format). Headers and footers are typically absent; page numbers appear only when the letter runs to multiple pages, and then only from the second page.


## Typst as the default formal-letter template

For PDF-only correspondence, Typst is the cleaner default. The structure of a formal letter maps directly to a Typst function: sender block, date, recipient block, subject, salutation, body, close, and optional enclosure line.

```typst
#let formal-letter(
  from-name: "",
  from-address: "",
  from-email: none,
  to-name: "",
  to-address: "",
  date: none,
  subject: none,
  opening: "Dear Sir or Madam,",
  closing: "Yours faithfully,",
  enclosures: none,
  body,
) = {
  set page(paper: "a4", margin: (top: 25mm, bottom: 30mm, left: 30mm, right: 25mm))
  set text(font: "EB Garamond", size: 11pt)

  align(right)[
    #from-name\
    #from-address
    #if from-email != none [#raw(from-email)]
  ]
  v(1.5em)
  align(right)[#date]
  v(2em)

  #to-name\
  #to-address
  v(1.5em)

  if subject != none [*Subject:* #subject #v(0.8em)]

  #opening
  v(0.8em)
  #body
  v(1.5em)
  #closing
  v(3em)
  #from-name

  if enclosures != none [
    v(1.2em)
    *Enclosures:* #enclosures
  ]
}
```

That covers the typographic logic most letters actually need. The sender block is right-aligned, the address blocks are vertically separated, and the body remains plain prose.


## Postal-compliance edge cases

The one place older letter systems still matter is postal compliance: window-envelope positioning, fold marks, and organisation-specific stationery rules. If a department or institution already has a locked-down letter system for those cases, treat it as a compatibility path. For ordinary professional correspondence, that should be the exception rather than the chapter's organising model.


## Cover letters with a personal header

A cover letter for a job application has different conventions from a formal business letter. It is more personal, often contains design elements that reflect the applicant's aesthetic judgment, and typically uses a custom letterhead rather than a rigid institutional layout.

In Typst, that is simply a different header function:

```typst
#let letterhead(name, details) = [
  #align(center)[
    #text(font: "Source Sans 3", weight: "bold", size: 14pt)[#upper(name)]
    #v(4pt)
    #text(size: 9pt, fill: luma(110))[#details]
    #v(6pt)
    #line(length: 80%, stroke: 0.4pt + luma(180))
  ]
  #v(1.4em)
]
```

Used in a cover letter:

```typst
#letterhead(
  "A. N. Author",
  [742 Evergreen Terrace | Springfield, SS 12345 | #link("mailto:author@example.edu")[author@example.edu]],
)

#align(right)[15 March 2024]
#v(1em)

Dr Sarah Mitchell\
Head of Typography\
Design Institute\
London, WC2A 2AE

#v(1.5em)
Dear Dr Mitchell,
```

The body remains ordinary prose. The header is the only distinctive design element, which is exactly where the applicant's visual judgment should appear.


## A Markdown source for flexible formats

For correspondence that needs to be produced in multiple formats — PDF for printing, HTML for email, ODT for editing — writing the letter in Pandoc Markdown with a custom template separates the content from the format entirely. This is the canonical approach when the same letter may need to travel through several systems.

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

For PDF output, a Typst template can read the same metadata and keep the formatting logic out of the source:

```typst
#let render(meta, body) = formal-letter(
  from-name: meta.at("from-name"),
  from-address: meta.at("from-address"),
  from-email: meta.at("from-email", default: none),
  to-name: meta.at("to-name"),
  to-address: meta.at("to-company") + "\n" + meta.at("to-address"),
  date: meta.at("date"),
  subject: meta.at("subject", default: none),
  opening: meta.at("opening"),
  closing: meta.at("closing"),
  body,
)
```

Render to PDF through the Typst path:

```sh
pandoc letter.md --template=letter.typ --pdf-engine=typst -o letter.pdf
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

def generate(template, typst_tmpl, recipient, output_path):
    cmd = ['pandoc', template,
           '--template', typst_tmpl,
           '--pdf-engine', 'typst',
           '-o', str(output_path)]
    for key, value in recipient.items():
        cmd.extend(['-M', f'{key}={value}'])
    return subprocess.run(cmd, capture_output=True).returncode == 0

def main():
    csv_file   = sys.argv[1] if len(sys.argv) > 1 else 'recipients.csv'
    template   = sys.argv[2] if len(sys.argv) > 2 else 'letter.md'
    output_dir = Path(sys.argv[3] if len(sys.argv) > 3 else 'output')
    typst_tmpl = 'letter.typ'

    output_dir.mkdir(parents=True, exist_ok=True)
    success = failures = 0

    with open(csv_file, newline='', encoding='utf-8') as f:
        for row in csv.DictReader(f):
            name = row.get('name', 'recipient')
            out  = output_dir / f"letter-{sanitize(name)}.pdf"
            print(f"  {'OK  ' if generate(template, typst_tmpl, row, out) else 'FAIL'}: {name}")
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

Each recipient's data is passed to Pandoc via `-M key=value` flags, which override and supplement the metadata in the template Markdown file. The `name`, `title`, `company`, `address`, `city`, `role`, and `ref` fields from the CSV row are injected into the template as metadata variables, where the Typst template reads them and lays out the final PDF.

For a pure-shell alternative without Python:

```sh
#!/bin/sh
tail -n +2 recipients.csv | while IFS=, read name title company address city role ref; do
  name=$(printf '%s' "$name" | tr -d '"')
  title=$(printf '%s' "$title" | tr -d '"')
  slug=$(printf '%s' "$name" | tr ' ' '_' | tr -d '.')
  
  pandoc letter.md \
    --template=letter.typ \
    --pdf-engine=typst \
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

For projects using Typst as the primary tool, the same letter can be written as a Typst document. For PDF-only correspondence this is usually the cleaner default. The advantage is that the template is written in Typst's native function syntax, which is more readable and easier to modify:

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

Typst does not yet offer the same built-in postal-specialty ecosystem as older institutional letter workflows. For letters that must fit a windowed envelope precisely or satisfy a rigid stationery standard, an inherited template may still be useful.


## Choosing the approach

The right tool for a letter depends on how the letter will be used:

**For a one-off formal letter** where typographic quality matters and the document will be printed: Typst is the first choice for a new PDF-only workflow. Keep legacy postal templates in reserve only for cases where window-envelope positioning or institutional stationery requirements are non-negotiable.

**For a template-driven letter produced across multiple formats**: the Pandoc or Quarto approach separates content from presentation cleanly, enables multiple output formats from one source, and keeps the letter content in Markdown where it is easy to read and edit.

**For mail merge** producing many letters from a data file: the Python + Pandoc approach handles the CSV correctly, produces one file per recipient, and requires no specialised mail merge infrastructure.

**For Typst-based projects**: the native Typst function approach is clean and readable, with fast compilation and easy modification, and should be considered the default PDF path unless an inherited postal template blocks it.

The letter is a simple document, but it illustrates the template-and-separation-of-concerns pattern that scales to the more complex documents in the next chapters. The résumé, covered in Chapter 19, extends these patterns significantly.
