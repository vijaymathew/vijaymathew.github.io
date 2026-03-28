# Choosing the Right Tool

Part III of this book covers six distinct tools or tool families — LaTeX, Typst, Quarto, Emacs and Org Mode, groff and the Unix heritage, and diagram generators. Each of them could be used to produce almost any document. Each of them would be the wrong choice for some documents and the right choice for others. Before examining any of them in depth, it is worth building a framework for deciding which to reach for.

The wrong approach is to pick a tool you know and use it for everything. This works, but it produces documents that fight their tools: LaTeX used for a quick internal memo, Pandoc Markdown used for a paper with hundreds of custom mathematical environments, Typst used for a 500-page book with a complex existing LaTeX infrastructure. Every tool has a domain where it is excellent and a domain where it becomes friction.

The right approach is to understand what each tool is optimised for, what it costs to use it, and what it produces — then match the tool to the document. For this book's purposes, the default hierarchy is simple: Markdown plus Pandoc or Quarto when you need HTML, EPUB, and PDF from one source; Typst when you need a print-ready PDF from a modern toolchain; LaTeX when an existing ecosystem forces the choice.


## Three axes of decision

Most document production decisions resolve along three axes: the *output format* you need, the *complexity* of the document, and the *workflow* you are operating in.

**Output format** is often the most constraining factor. If you must deliver a DOCX file to a publisher, LaTeX is a poor starting point regardless of its typographic quality. If you are producing a data-driven report where the content changes with each run, a system that cannot execute code is the wrong choice. If you need to produce HTML, PDF, and EPUB from the same source, a tool that only targets one output has already ruled itself out.

**Document complexity** spans a wide range. A one-page letter and a five-hundred-page technical reference are both "documents," but they require entirely different levels of infrastructure. A letter needs: a typeface, some spacing, a date, perhaps a salutation. A reference manual needs: a consistent heading hierarchy, automatic cross-references, a generated index, a bibliography, running headers that reflect the current chapter, figure captions numbered by chapter, consistent code formatting across hundreds of examples. Using a book-class LaTeX setup for the letter is overkill; using a simple Markdown-to-HTML pipeline for the reference manual is under-equipped.

**Workflow** encompasses both the human and technical environment. Who is writing the document? A lone author comfortable with the terminal has different constraints than a team where some members use graphical editors. Is the document produced once or regenerated regularly? Is it part of a larger build pipeline? Does it need to be reproducible — does someone need to rebuild it years later and get the same output? Does it need to integrate with data sources, Jupyter notebooks, or other programmatic inputs?

These three axes interact. A data-driven document (workflow) probably needs HTML and PDF output (output format) and has moderate complexity. That combination points strongly toward Quarto or Pandoc with a scripting layer. A complex mathematical monograph (complexity) needs print-quality PDF (output format) and is probably authored by a single specialist comfortable with technical tools (workflow). That points to Typst first, or to LaTeX where compatibility requirements dominate.


## The tools and their niches

**Pandoc** is a converter and a document assembler. It is not primarily a typesetting system — it does not compute optimal line breaks, it does not handle complex page layout, and it does not provide a composition language of its own. What it provides is breadth: it reads more formats than any other tool, writes more formats than any other tool, and its Lua filter system allows significant customisation of the conversion process. Pandoc's niche is documents where the *source format matters* — where you want to write in Markdown and produce multiple output formats, or where you are working with content that arrives in various formats and needs to be normalised.

Pandoc is the right choice when: you need multiple output formats from one source; you are working with existing Markdown content; you want to stay close to plain text with minimal markup; your document is primarily prose with standard structural elements (headings, lists, tables, citations, footnotes); or you are building a document pipeline that needs to process content programmatically.

Pandoc is the wrong choice when: you need precise control over page layout and typography beyond what LaTeX's default Pandoc template provides; your document has complex custom environments or heavy mathematical content that benefits from native LaTeX authoring; or you need the full programmability of a Turing-complete document language.

**LaTeX** is the historical standard for print-quality technical typesetting, especially in mathematics and publisher-driven workflows. It is a typesetting system first and a document format second — the author writes markup that instructs the typesetting engine, and the engine makes sophisticated decisions about line breaking, hyphenation, spacing, and page layout. Its ecosystem of packages is vast: virtually any typographic requirement has been addressed by some package somewhere on CTAN.

The cost of LaTeX is friction. Its syntax is verbose. Its error messages are cryptic. Debugging a complex document can require real expertise. Customising the appearance requires knowing which of the hundreds of relevant packages to use, and learning their individual syntaxes. Getting LaTeX to do something it was not designed to do — a highly designed magazine layout, a document with complex floated elements in precise positions — can require work that a graphical tool would accomplish in minutes.

LaTeX is the right choice when: you are submitting to a publisher or conference that requires LaTeX input; the document depends on a substantial existing LaTeX infrastructure; the mathematical requirements lean on packages that Typst or other systems do not yet match; or a long-standing institutional workflow already assumes LaTeX.

LaTeX is the wrong choice when: you need non-PDF output as a primary format; you are collaborating with people who cannot or will not use LaTeX; the document is short, simple, or primarily visual in design; or the friction cost of LaTeX's learning curve is not justified by the project's requirements.

**Typst** is a modern document composition system designed to do what LaTeX does while being substantially more approachable. Its syntax is cleaner and more consistent than LaTeX's, its error messages are informative, its compilation is fast (it compiles incrementally, so large documents update in milliseconds rather than seconds), and its scripting language — a proper functional language built into the tool — makes programmatic document generation natural. For new PDF-only projects, it should generally be the first option you evaluate.

Typst is the right choice when: the deliverable is primarily a print-ready PDF; you want high-quality output without inheriting LaTeX's macro language; you are starting a new project without legacy LaTeX infrastructure to integrate; or you need programmable layout in a cleaner language.

Typst's limitations are mainly ecosystem and maturity. It was publicly released in 2023, and its package ecosystem is small compared to CTAN. Some capabilities that LaTeX packages provide — very specific journal templates, certain mathematical environments, niche typographic packages — do not yet have Typst equivalents. For standard documents, these gaps rarely matter. For documents with highly specific requirements (a paper for a journal with a LaTeX-only submission system, a document that depends on a specific CTAN package), they may be decisive.

**Quarto** is a scientific and technical publishing system built on Pandoc, with native support for R, Python, Julia, and Observable JavaScript. Its central capability is *literate programming*: weaving executable code with prose narrative in a single source document, so that figures, tables, and computed values are generated fresh each time the document is built. This makes Quarto the right tool for reproducible research — documents where the analysis and the narrative are the same artifact.

Beyond reproducibility, Quarto provides a polished publishing system: a book format with automatic chapter numbering and cross-references, a website format with navigation and search, a presentation format, and a dashboard format, all from the same source syntax (a superset of Pandoc Markdown called QMD). Its templates and themes are well-designed, and for academic use cases it handles citations, cross-references, and bibliography management with less configuration than raw Pandoc.

Quarto is the right choice when: the document is a data analysis, a research report, or any document where content is generated programmatically; you are working in R, Python, or Julia and want the analysis and the document to be the same artifact; you need a polished website or multi-format output with minimal configuration; or you are working in an academic environment where reproducibility is required or valued.

Quarto is the wrong choice when: the document does not involve code execution; you need output formats that Quarto does not support well; or the additional layer between Markdown and Pandoc adds complexity that plain Pandoc would not.

**Emacs and Org Mode** occupy a different category. Org Mode is a major mode for Emacs — which is itself a programmable text editor — that provides an outline-based document format with an exceptionally rich feature set: task management, spreadsheet-like table editing, literate programming (via Babel, which predates Quarto's code execution by years), export to a wide range of formats, and deep integration with the Emacs ecosystem. For authors who already live in Emacs, Org Mode is a natural choice for document production.

The caveat is obvious: Org Mode is inseparable from Emacs. The learning curve for Emacs is steep, the tool is deeply opinionated, and the workflow is idiosyncratic by the standards of contemporary software. Org Mode is the right choice if and only if Emacs is already your working environment or you are willing to make it so. It is not worth adopting Emacs for the sake of Org Mode's document features, because Pandoc, Quarto, Typst, and LaTeX collectively cover the same ground for authors who do not already live in Emacs.

**The groff family** — troff, nroff, and their derivatives — are the original Unix typesetting tools, created at Bell Labs in the early 1970s. They are still the tools used to format manual pages on Unix and Linux systems. For man page authorship, groff is the correct and standard tool. For anything else, it is a historical artifact worth understanding but not worth adopting for new work.


## The comparison matrix

Evaluating these tools across the dimensions that matter for practical document work:

| Criterion | Pandoc | LaTeX | Typst | Quarto | Org Mode |
|:---|:---:|:---:|:---:|:---:|:---:|
| Output formats | ★★★★★ | ★★☆☆☆ | ★★☆☆☆ | ★★★★★ | ★★★★☆ |
| Typographic quality | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| Math support | ★★★☆☆ | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★☆☆ |
| Learning curve | ★★★★☆ | ★★☆☆☆ | ★★★★☆ | ★★★★☆ | ★☆☆☆☆ |
| Plain text authoring | ★★★★★ | ★★★☆☆ | ★★★★☆ | ★★★★★ | ★★★★★ |
| Code execution | ☆☆☆☆☆ | ☆☆☆☆☆ | ☆☆☆☆☆ | ★★★★★ | ★★★★☆ |
| Ecosystem / packages | ★★★★☆ | ★★★★★ | ★★☆☆☆ | ★★★☆☆ | ★★★☆☆ |
| Compilation speed | ★★★★★ | ★★☆☆☆ | ★★★★★ | ★★★☆☆ | ★★★☆☆ |
| Long document support | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★☆ | ★★★★☆ |
| Reproducibility | ★★★★☆ | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★☆ |

*Ratings are relative to the document production use case, not absolute capability.*

A few cells deserve commentary.

Pandoc's output format breadth is genuinely unmatched — it writes to over forty formats from any of its input formats. LaTeX's output format score is low not because LaTeX is weak but because it targets PDF almost exclusively; getting other output formats from LaTeX requires conversion pipelines.

LaTeX's typographic quality score reflects the historical quality ceiling and the depth of its ecosystem. Typst receives the same score because for new PDF-only work it achieves comparable results with far less friction. The recommendation difference between them is not about whether one can make beautiful pages and the other cannot; it is about whether you need LaTeX's accumulated compatibility layer.

Quarto's learning curve rating of four stars reflects that for its core use case — computational documents — Quarto abstracts away most of the complexity. For authors already familiar with Pandoc Markdown, Quarto is a modest extension, not a new system to learn.

Org Mode's learning curve rating of one star is not a criticism of Org Mode. It is a reflection of the prerequisite: Emacs. Org Mode itself, once you are in Emacs, is relatively learnable. The combined system of Emacs-plus-Org-Mode is the most demanding starting point of anything in this book.


## A decision flowchart

The decision between tools can be stated as a series of questions that progressively narrow the field.

*Does the document contain executable code that generates figures, tables, or computed values?* If yes: Quarto. Its code execution support is far more mature than any alternative, and its output quality for computational documents is excellent. If no: continue.

*Does the document require LaTeX as input format — for a journal submission, a conference proceedings, a publisher with a LaTeX house style?* If yes: LaTeX directly, possibly with Pandoc as a preprocessing stage for the Markdown-to-LaTeX path. If no: continue.

*Is the document primarily mathematical — theorems, proofs, substantial notation?* If yes, and if you are starting fresh with no legacy constraints: Typst is the first option to evaluate. If you need maximum ecosystem compatibility or are joining an existing mathematical project: LaTeX. If no: continue.

*Do you need more than one output format from the same source — for instance, HTML, EPUB, and PDF?* If yes: Pandoc or Quarto (Quarto if the document has any computational content; Pandoc for pure prose). If no: continue.

*Is the document primarily a print artifact and PDF-only — a report for distribution, a book proof, a designed handout?* If yes: Typst first. Choose LaTeX only if legacy classes, package dependencies, or submission requirements make it unavoidable. If no: continue.

*Is it a short-to-medium prose document — an article, a report, documentation?* Pandoc Markdown with appropriate defaults is the simplest path when multiple formats matter. Typst is the better path when the target is PDF only.

*Do you already work in Emacs?* If yes, Org Mode is worth serious consideration for any document that fits its export capabilities. If no, it is not worth adopting Emacs for document production alone.


## Hybrid workflows

The tools are not mutually exclusive. Several hybrid patterns are common and worth knowing.

**Pandoc as front-end for LaTeX.** Write in Pandoc Markdown. Use Pandoc to generate LaTeX, either as an intermediate step in the PDF pipeline or as a file you then hand-edit for final production. This gives you Markdown's clean authoring experience for the bulk of the work, with LaTeX's full power available for the parts that need it. The Lua filter system means you can handle many complex cases without touching the generated LaTeX directly.

**Quarto for computation, Typst for PDF by default.** Quarto can drive multi-format output while delegating the PDF layer to a dedicated engine. For new work, prefer a Typst PDF backend where the formatting requirements permit it; keep LaTeX in reserve for journals, classes, and package-heavy workflows.

**Pandoc for content, Typst for layout.** Pandoc's Typst output format (added in Pandoc 3.1) allows you to write Markdown and produce Typst source, which can then be compiled with the Typst engine. The Typst file can be further customised for layout purposes. This is a newer pattern and the Typst output format is still maturing, but it offers a promising path for authors who want Markdown authoring and Typst's output quality.

**Make to orchestrate multiple tools.** A `Makefile` can invoke Typst for the print PDF, Pandoc for HTML and EPUB, and Quarto for a companion website, with LaTeX retained only where compatibility requires it. The build system is the integration layer that makes the combination tractable.

The practical implication is that you should not feel forced to choose a single tool for an entire project. The right granularity is the output format or the document component: use the best tool for each.


## A note on staying current

The landscape of CLI typesetting tools is not static. Typst did not exist before 2023. Quarto replaced R Markdown in 2022. Pandoc adds major features with each release. New tools emerge regularly.

The framework in this chapter — asking about output format requirements, document complexity, and workflow constraints — will remain useful even as the specific tools change. What changes is which tool best satisfies each combination of requirements. As of this writing, the assessments above reflect the current state of the tools: Typst is the preferred PDF-only path for new work, Pandoc and Quarto dominate the Markdown-to-many-formats workflow, and LaTeX remains strongest where legacy infrastructure is decisive. In two or three years, that balance may shift again.

The deeper skill is not knowing which tool to use today. It is knowing how to evaluate a new tool against the requirements of a specific document — which is what the framework in this chapter equips you to do.

---

The next four chapters examine each major tool in depth: LaTeX in Chapter 12, Typst in Chapter 13, Quarto in Chapter 14, and Emacs and Org Mode in Chapter 15. Chapter 16 covers groff and the Unix heritage, and Chapter 17 covers diagram tools that complement all of the above.
