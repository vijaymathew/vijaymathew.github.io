# Introduction: Why This Matters, and Why Here

Look at the last document you produced — a report, an email attachment, a presentation you converted to PDF before sending. Look at it carefully. Not at the content: at the form. Are the lines too long? Do the headings follow a consistent hierarchy, or do they vary in size because you adjusted them by eye? Are the margins the same on every page? Does the typeface suit the content, or was it the default, which is to say no decision was made at all? Is the spacing between paragraphs consistent, or does it vary because you pressed Return twice in some places and once in others?

If the document was produced in a word processor, the answer to most of these questions is probably uncomfortable. This is not an accident, and it is not your fault. It is the predictable result of a production tool that conflates *writing* with *typesetting* — that makes every typographic decision available at every moment, that rewards adjustment over principle, and that treats the visual appearance of a document as a series of individual choices rather than as the expression of a coherent underlying system.

Good typography does not work that way. It works through systems: through decisions made once and applied consistently, through rules that govern the relationships between elements rather than the properties of each element in isolation, through the kind of structural thinking that produces documents that look right not because someone made them look right, but because the system that generated them is itself right. This book is about building those systems from the command line.


## What typography actually does

Typography is not decoration. It is not the choice between Arial and Helvetica, or the question of whether a heading should be 18-point or 20-point. It is the craft of making language visible — of translating the structure, tone, and hierarchy of written content into a visual form that a reader can navigate without effort.

When typography works well, it is invisible. The reader moves through the document absorbing the content, and the form is not a presence but an absence of obstacles. The lines are the right length — long enough to establish rhythm, short enough that the eye does not tire finding the start of the next line. The typeface has the right voice — neutral enough not to intrude, characterful enough not to be blank. The spacing gives the text room to breathe without leaving it stranded in emptiness. The hierarchy is clear — the reader always knows where they are in the document and how the current section relates to what came before.

When typography fails, the reader feels it, even if they cannot name it. The text is too dense and they slow down. The headings are too large and they feel like they are being shouted at. The lines are too long and their eyes get lost crossing to the next one. The spacing is irregular and the page looks unfinished. None of this prevents reading. But it adds friction, and friction accumulates, and documents that accumulate enough friction do not get read to the end.

This is not an aesthetic matter, though aesthetics are involved. It is a functional matter. Typography is the quality of the interface between your words and your reader's attention. Better typography means your words get through. Worse typography means some of them don't.


## Why the command line?

The central claim of this book is that the command line is the right place to produce serious documents. Not the only place — context matters, and the book is honest about when GUI tools are appropriate — but the natural home for documents where quality and reproducibility matter. This claim requires justification, and the justification is not primarily about preferring terminals to graphical interfaces. It is about what the two kinds of tool fundamentally do.

**A word processor treats text and appearance as inseparable.** When you write a heading in Microsoft Word, you are simultaneously entering content and making a typographic decision. The heading's size, weight, and spacing are properties you can see and adjust. This feels like control. What it actually produces is an ad hoc design process where typographic decisions are made by whim, habit, and imitation — by pressing Heading 1 because that is what Heading 1 looks like, not because you have thought about what a heading should be in this document.

**A CLI workflow separates writing from typesetting.** You write in plain text. The text contains structure — headings marked with `#`, paragraphs separated by blank lines, emphasis marked with `*` — but no appearance. The appearance is defined elsewhere, in a template or stylesheet or document class, and applied by a compilation step. The writing and the typesetting are decoupled. This decoupling is what makes quality achievable.

It is the same principle that separates content from presentation in HTML and CSS, or that separates data from display in any well-designed software system. When you write a stylesheet that says all first-level headings are 1.75rem, set in Fira Sans, with 1.5em of space above and 0.5em below, you are making a typographic decision once and applying it to every heading in every document that uses that stylesheet. Change it once; it changes everywhere. This is a system.

When you define a LaTeX document class that sets the margin, the typeface, the baseline grid, and the section heading format, every document that uses that class inherits those decisions. The author writes; the system typesets. The author's attention is on the argument, not on whether this heading is a little too close to the text below it.

**The CLI enforces reproducibility.** A document produced from a Markdown source file, a template, and a `make` command will be identical every time you build it, on any machine, by any person, now and in five years. The same inputs produce the same output. This is not true of a Word document, which may look different depending on the version of Word, the operating system, the installed fonts, the screen resolution, and a dozen other environmental factors that are invisible until they break something.

Reproducibility matters for more than correctness. It matters for collaboration. It matters for automation. It matters for maintenance — for the ability to revise a document years later and know that the revisions will be applied consistently. It matters for the kind of long-term work that word processors actively resist: the book that takes three years to write, the documentation set that covers a hundred software components, the academic paper that passes through a dozen revisions and four co-authors before submission.

**The CLI integrates with everything.** A document source file in Markdown or LaTeX is a text file. It can be compared with `diff`. It can be version-controlled with `git`, with meaningful line-by-line change tracking. It can be generated programmatically, assembled from components, tested for compliance with house style, built in parallel with other documents, and deployed automatically when the source changes. None of this is possible with a binary file that encodes its content and appearance together in a proprietary format.

**The CLI produces better output.** This is a bolder claim, but it is also a true one, and it is worth being direct about it. TeX's paragraph-level line-breaking algorithm, unchanged in essential respects since 1978, produces better-justified text than any word processor. Not marginally better — substantially better, in a way that is visible to any trained eye and perceptible as a vague sense of ease and quality even to untrained readers. The reason is architectural: TeX considers the entire paragraph when breaking lines, minimising total badness across all lines simultaneously. Word processors break greedily, one line at a time, producing good individual lines but suboptimal paragraphs.

Microtype's character protrusion, which allows punctuation to hang slightly into the margin so that the visual edge of the text column is optically straight rather than mechanically straight, is available in LaTeX but not in Word or Google Docs. XeLaTeX's access to the full OpenType feature set — old-style figures that sit in running text the way lowercase letters do, true small capitals that match the weight of the surrounding text, discretionary ligatures that the font designer chose to include — is available at the level of a configuration line in the document source.

These are not minor niceties. They are the difference between a document that is typeset and a document that happens to contain text.


## Who this book is for

This book is for writers and researchers who produce documents that matter — academic papers, technical reports, books, documentation, correspondence — and who want to produce them well. It assumes you are comfortable with a terminal and a text editor. It does not assume you know LaTeX, or Pandoc, or any of the other tools it covers. It teaches them.

The book is also for people who already use some of these tools but want a more complete picture: the LaTeX user who doesn't know Pandoc, the Pandoc user who doesn't know what LaTeX is doing behind the scenes, the developer who sets up documentation pipelines without knowing what makes the typographic output good or bad.

It is not a book about typography as an end in itself. It is a book about producing documents that work: that communicate clearly, look professional, and can be maintained, revised, and built automatically. Good typography is in service of those goals, not separate from them.


## How to read this book

Part I covers the conceptual foundations: the history of typesetting, the principles of typography, and the technical vocabulary of digital type. Readers who are impatient to get to the tools can skim this part and refer back to it when specific terms come up, but the concepts in it will make everything that follows more comprehensible and more usable.

Part II covers the Markdown-to-everywhere workflow: Pandoc, Markdown conventions, and the generation of HTML, PDF, and EPUB from a single source. This is the practical core of the book for most readers.

Part III is a survey of the toolbox: LaTeX in depth, Typst, Quarto, Emacs and Org Mode, groff, and the diagram tools that generate figures and illustrations. Each tool is covered with enough depth to use it for real work.

Part IV is a gallery: five document types worked through from start to finish. Letters, résumés, articles, presentations, and books. Each chapter in this part is a complete example that can be used as a template.

Part V covers the craft layer: tables and complex layouts, templates and style systems, multilingual typesetting, and fine typography. These are the topics that separate adequate documents from excellent ones.

The appendices contain reference material: Pandoc flags, LaTeX packages, a tool comparison matrix, free font resources, and a bibliography.

---

Documents carry authority or fail to. They invite trust or undermine it. They respect the reader's time or waste it. Typography is the mechanism by which they do these things, and the command line is where that mechanism is most precisely controllable. That is why this matters, and that is why here.
