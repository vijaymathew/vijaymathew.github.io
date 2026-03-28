# Build Systems and Automation

A document built by hand — running a Pandoc command, checking the output, adjusting flags, running again — is fine for a one-off proof. It is not fine for a book with twenty chapters, three output formats, a bibliography, a custom template, and a production schedule. At that scale, the build process itself becomes a thing to manage: which files are inputs, which are outputs, what depends on what, how to produce all three formats reliably without forgetting a flag, how to know whether the PDF is current or was built from yesterday's source.

These are not new problems. Software engineers solved them fifty years ago. The solution is a *build system* — a tool that knows which outputs need to be rebuilt when inputs change, and that can execute the build steps automatically. The standard Unix build tool, Make, was created in 1976 and remains the right tool for document build pipelines. The same principles that govern compiling a C program — targets, prerequisites, automatic rebuild on change — apply directly to producing PDFs and EPUBs from Markdown.

This chapter covers three tiers: shell scripts for simple cases, Make for serious projects, and CI/CD pipelines for projects where documents must be built automatically on every commit.


## Shell scripts for simple builds

The simplest build system is a shell script. When you find yourself typing the same Pandoc command repeatedly, the command belongs in a script.

A minimal build script wraps the Pandoc invocations in a file that can be run with a single command:

```sh
#!/bin/sh
# build.sh

BOOK="my-document"
META="metadata.yaml"
CHAPTERS="chapters/*.md"
BUILD="build"

mkdir -p "$BUILD"

pandoc --standalone --toc \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.html"

pandoc --toc --split-level=1 \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.epub"

pandoc --pdf-engine=typst --toc \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.pdf"
```

Make it executable and run it:

```sh
chmod +x build.sh
./build.sh
```

This works. Its limitation is that it rebuilds everything every time — even if you changed only one chapter file, all three formats are rebuilt from scratch. For small documents this is acceptable; for large ones with slow PDF compilation, it becomes painful. This is where Make enters.

Before graduating to Make, however, there is value in hardening the shell script for production use. Three improvements matter most.

**Exit on error** with `set -e` at the top of the script. Without this, a failing Pandoc command is silently skipped and the script continues, potentially producing stale or empty output files that look valid:

```sh
#!/bin/sh
set -e  # exit immediately if any command fails
```

**Prerequisite checking** prevents confusing failures downstream:

```sh
#!/bin/sh
set -e

# Check that required tools are present
for cmd in pandoc typst; do
  command -v "$cmd" >/dev/null 2>&1 || {
    echo "Error: '$cmd' is required but not installed." >&2
    exit 1
  }
done
```

**Timestamped output** helps diagnose stale builds when things go wrong:

```sh
info() { printf '[%s] %s\n' "$(date +%H:%M:%S)" "$*"; }

info "Building HTML..."
pandoc ... -o build/book.html
info "Done: build/book.html ($(du -sh build/book.html | cut -f1))"
```

A complete, production-hardened shell script for a typical book project:

```sh
#!/bin/sh
# build.sh — production build for a Pandoc book project
set -e

BOOK="cli-typographer"
META="metadata.yaml"
BUILD="build"

die()  { echo "Error: $*" >&2; exit 1; }
info() { printf '==> %s\n' "$*"; }

# Prerequisites
command -v pandoc    >/dev/null || die "pandoc not found"
command -v typst     >/dev/null || die "typst not found"

CHAPTERS=$(find chapters -name "*.md" | sort)
[ -n "$CHAPTERS" ] || die "No chapter files found in chapters/"

mkdir -p "$BUILD"

info "Building HTML..."
pandoc --defaults=defaults/html.yaml \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.html"

info "Building EPUB..."
pandoc --defaults=defaults/epub.yaml \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.epub"

info "Building PDF..."
pandoc --defaults=defaults/pdf.yaml \
  "$META" $CHAPTERS \
  -o "$BUILD/$BOOK.pdf"

info "Build complete."
ls -lh "$BUILD"/$BOOK.*
```

This script is clear, safe, and correct. What it cannot do is skip formats whose sources have not changed. For that, you need Make.


## Make: the right tool for document builds

Make is a build tool that reasons about *targets* (files that need to exist), *prerequisites* (files the target depends on), and *recipes* (the commands that produce the target from its prerequisites). When you run `make`, it checks which targets are older than their prerequisites and rebuilds only those. This is exactly what a document build needs.

A Makefile for a document project has the same structure as a Makefile for a software project, just with Pandoc instead of a C compiler.

### The anatomy of a rule

A Make rule has three parts:

```makefile
target: prerequisites
	recipe
```

The recipe line must be indented with a *tab character* — not spaces. This is Make's most notorious quirk, and it is enforced strictly: a recipe indented with spaces will produce a cryptic error. Every text editor has a setting for this; configure your editor to insert literal tabs in Makefiles, or use the `.editorconfig` file to enforce it across the project.

A minimal rule for building an HTML document:

```makefile
build/book.html: metadata.yaml chapters/01-intro.md chapters/02-body.md
	pandoc --standalone metadata.yaml chapters/01-intro.md \
	  chapters/02-body.md -o build/book.html
```

When you run `make build/book.html`, Make checks the modification timestamps of `metadata.yaml`, `chapters/01-intro.md`, and `chapters/02-body.md` against the timestamp of `build/book.html`. If any prerequisite is newer than the target, Make runs the recipe. If the target is already newer than all prerequisites, Make reports `Nothing to be done` and exits.

### Variables and automatic prerequisites

Listing every chapter file individually in every rule is impractical for a real project. Make's variable expansion and wildcard function handle this:

```makefile
CHAPTERS := $(sort $(wildcard chapters/*.md))
```

`wildcard` expands to a space-separated list of all files matching the pattern. `sort` sorts the list and removes duplicates — important because the chapters must appear in order. The `:=` assignment evaluates the right-hand side immediately, which is the correct behaviour for file lists.

With this variable, the prerequisite list becomes:

```makefile
build/book.html: metadata.yaml $(CHAPTERS) | build
	pandoc --standalone metadata.yaml $(CHAPTERS) -o $@
```

The `$@` automatic variable expands to the target name — `build/book.html` in this case. The `| build` syntax is an *order-only prerequisite*: it ensures the `build/` directory exists before the recipe runs, but a change to the directory itself does not trigger a rebuild.

### A complete book Makefile

Here is a production-grade Makefile for a multi-format book project. Read it top to bottom — each section builds on the previous one.

```makefile
# ============================================================
# Configuration
# ============================================================
BOOK     := cli-typographer
CHAPTERS := $(sort $(wildcard chapters/*.md))
META     := metadata.yaml
BUILD    := build
PANDOC   := pandoc

# Defaults files, one per format
D_HTML   := defaults/html.yaml
D_EPUB   := defaults/epub.yaml
D_PDF    := defaults/pdf.yaml

# Output targets
PDF      := $(BUILD)/$(BOOK).pdf
HTML     := $(BUILD)/$(BOOK).html
EPUB     := $(BUILD)/$(BOOK).epub

# All source files — any change triggers a rebuild
SOURCES  := $(META) $(CHAPTERS)

# ============================================================
# Phony targets (not files)
# ============================================================
.PHONY: all html epub pdf clean stats watch

all: html epub pdf

html: $(HTML)
epub: $(EPUB)
pdf:  $(PDF)

# ============================================================
# Build rules
# ============================================================
$(HTML): $(D_HTML) $(SOURCES) | $(BUILD)
	$(PANDOC) --defaults=$(D_HTML) $(META) $(CHAPTERS) -o $@
	@printf '[HTML]  %s  (%s)\n' $@ "$$(du -sh $@ | cut -f1)"

$(EPUB): $(D_EPUB) $(SOURCES) | $(BUILD)
	$(PANDOC) --defaults=$(D_EPUB) $(META) $(CHAPTERS) -o $@
	@printf '[EPUB]  %s  (%s)\n' $@ "$$(du -sh $@ | cut -f1)"

$(PDF): $(D_PDF) $(SOURCES) | $(BUILD)
	$(PANDOC) --defaults=$(D_PDF) $(META) $(CHAPTERS) -o $@
	@printf '[PDF]   %s  (%s)\n' $@ "$$(du -sh $@ | cut -f1)"

$(BUILD):
	mkdir -p $@

# ============================================================
# Utilities
# ============================================================
clean:
	rm -rf $(BUILD)

# Per-chapter word count with running total
stats:
	@printf '%-40s %8s\n' 'File' 'Words'
	@printf '%-40s %8s\n' '$(shell printf '%0.s-' {1..40})' '--------'
	@total=0; \
	  for f in $(CHAPTERS); do \
	    n=$$($(PANDOC) "$$f" -t plain 2>/dev/null | wc -w); \
	    printf '%-40s %8d\n' "$$f" "$$n"; \
	    total=$$((total + n)); \
	  done; \
	  printf '%-40s %8s\n' '$(shell printf '%0.s-' {1..40})' '--------'; \
	  printf '%-40s %8d\n' 'Total' "$$total"

# Rebuild HTML whenever any source file changes (requires entr)
watch:
	find chapters/ $(META) -type f | entr -s 'make html'
```

Several points about this Makefile are worth explaining.

**Defaults files are prerequisites.** The HTML rule depends on `$(D_HTML)` as well as the source files. If you change the defaults file — adjusting highlight style, template path, or any other setting — Make will rebuild the HTML. Without this dependency, a change to the defaults file would not trigger a rebuild, and your output would not reflect the new settings.

**The `@` prefix suppresses command echoing.** By default, Make prints each command before running it. Prefixing a recipe line with `@` suppresses this — useful for `printf` status lines that replace the raw Pandoc invocation with a cleaner summary. The Pandoc invocation lines do not have `@`, so you can see exactly what is being run.

**The `stats` target computes word counts in pure Make and shell**, avoiding the need for an external script. The double dollar signs (`$$`) are necessary because Make interprets single `$` as its own variable expansion — `$$total` in the recipe becomes `$total` in the shell.

**The `watch` target** uses `entr`, a lightweight file-watching utility (`apt install entr` on Debian/Ubuntu). It lists all source files, pipes them to `entr`, and `entr` re-runs `make html` whenever any listed file changes. This gives you a live-rebuild loop during drafting: save the file, the HTML rebuilds in the background, refresh the browser.

### Make in practice

Run `make` with no target to build the default (`all`). Run `make html` to build only HTML. Run `make -n` for a dry run that shows what would be built without building it. Run `make -j2` to run up to two jobs in parallel (useful when building multiple independent formats):

```sh
make -j2 html epub   # build HTML and EPUB in parallel
make -j3 all         # build all three formats, up to 3 at once
```

The `-j` flag is effective for document builds because PDF, HTML, and EPUB compilations are independent — they do not depend on each other's output. On a machine with multiple cores, `-j3` can reduce total build time by building all three formats simultaneously.

When something goes wrong, `make -n` is the first diagnostic tool: it shows what Make would run without running it, which reveals whether the dependency relationships are correct. `make --debug=basic` goes further, printing Make's reasoning about which targets are out of date and why.


## Version control for prose

Prose belongs in version control for the same reasons code does: to track changes over time, to recover from mistakes, to branch for experiments, and to collaborate. Git is the right tool, and it works on Markdown source just as well as on code — better, in some respects, because Markdown diffs are human-readable.

### Setting up a prose repository

The project structure from Chapter 5 maps cleanly to a Git repository:

```
book/
├── .gitignore
├── .editorconfig
├── Makefile
├── metadata.yaml
├── defaults/
│   ├── html.yaml
│   ├── epub.yaml
│   └── pdf.yaml
├── chapters/
│   ├── 01-history.md
│   ├── 02-fundamentals.md
│   └── ...
├── styles/
│   ├── epub.css
│   └── web.css
├── templates/
│   ├── book.typ
│   └── book.latex
├── assets/
│   ├── cover.jpg
│   └── figures/
└── build/          ← in .gitignore
```

The `build/` directory must be excluded from version control — generated files should not be committed. The `.gitignore`:

```
build/
*.aux
*.log
*.toc
*.out
*.fls
*.fdb_latexmk
*.synctex.gz
.DS_Store
```

The `.editorconfig` enforces consistent formatting across editors and contributors:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
indent_style = space
indent_size = 2
max_line_length = off

[Makefile]
indent_style = tab
indent_size = 4
```

The `max_line_length = off` for Markdown is deliberate: Markdown source benefits from semantic line breaks (one sentence per line, or one clause per line) rather than hard-wrapped lines, because Git diffs are then per-sentence rather than per-paragraph. When you revise a sentence, the diff shows exactly that sentence changed — not a block of reflowed text that obscures what actually changed.

### Commit discipline for writing

Git commits in a prose project serve the same purpose as in a code project: they are a record of decisions, a safety net, and a communication tool. The conventions that work well for prose differ slightly from code conventions.

**Commit at meaningful stopping points**, not after arbitrary numbers of words. A good commit is "complete the section on optical sizing" or "revise the LaTeX engine comparison table" — a unit of editorial work that stands on its own.

**Include word counts in commit messages** when tracking progress. This creates a useful history of how the manuscript developed:

```
ch03: complete digital typesetting section (~800 words)

Covered font formats (OTF/TTF/WOFF), rasterization and hinting,
the print vs screen distinction, and Unicode/OpenType features.
Still to do: the summary and transition to ch04.
```

**Use branches for structural experiments**. If you are considering a significant reorganisation — splitting a chapter, adding a new section, rewriting a difficult passage — do it on a branch. The main branch stays in a known-good state while you experiment:

```sh
git checkout -b rewrite/ch02-spacing
# ... work on the chapter ...
git checkout main
git merge rewrite/ch02-spacing   # if it worked
# or
git branch -D rewrite/ch02-spacing  # if it didn't
```

**Tag releases.** When a draft reaches a milestone — first complete draft, post-review revision, final submitted version — tag the commit:

```sh
git tag -a v1.0-first-draft -m "Complete first draft, ~35,000 words"
git tag -a v2.0-final       -m "Final version submitted to publisher"
```

Tags let you recover exactly the state of the manuscript at any milestone, which is more reliable than remembering which commit corresponded to which submission.

### Diffing prose

Git's default word-diff mode is line-oriented, which is awkward for prose where a single sentence may span multiple lines. The `--word-diff` flag shows changes within lines:

```sh
git diff --word-diff
```

Output marks deletions with `[-old text-]` and additions with `{+new text+}`:

```
The [@paper@]{+em+} is a relative unit {+equal to the current font size+}.
```

For reviewing prose changes, `--word-diff=color` (with a colour terminal) is even clearer:

```sh
git diff --word-diff=color HEAD~1
```

A Git attribute that improves diffs for Markdown files: tell Git to treat Markdown headers as function names, which makes `git log -p` display the heading context for each change:

```ini
# .gitattributes
*.md diff=markdown
```

And in `~/.gitconfig` or the repository's `.git/config`:

```ini
[diff "markdown"]
    xfuncname = "^#{1,6} .*$"
```

With this configuration, `git diff` and `git log -p` show which section each change belongs to, just as they show which function a code change belongs to.


## Automating builds with CI/CD

Continuous integration for documents means: every time a commit is pushed, the build runs automatically, and the results — PDFs, EPUBs, HTML — are available without anyone needing to run the build locally. This is particularly valuable for collaborative projects, for books with reviewers who need to access the latest draft, and for documentation that should always reflect the current state of the source.

### GitHub Actions

GitHub Actions is the most accessible CI/CD platform for document projects. A workflow file in `.github/workflows/` defines what happens on each push:

```yaml
# .github/workflows/build.yml
name: Build book

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source
        uses: actions/checkout@v4

      - name: Install Pandoc
        run: |
          wget -q https://github.com/jgm/pandoc/releases/download/3.1.3/\
          pandoc-3.1.3-1-amd64.deb
          sudo dpkg -i pandoc-3.1.3-1-amd64.deb

      - name: Install Typst
        run: |
          curl -fsSL https://typst.community/typst-install/install.sh | sh
          echo "$HOME/.local/bin" >> "$GITHUB_PATH"

      - name: Install fonts
        run: |
          mkdir -p ~/.local/share/fonts
          cp assets/fonts/*.ttf ~/.local/share/fonts/ 2>/dev/null || true
          fc-cache -f

      - name: Build
        run: make all

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: book-${{ github.sha }}
          path: build/
          retention-days: 90
```

On every push to `main`, this workflow checks out the repository, installs Pandoc and Typst, builds all formats, and uploads the results as downloadable artifacts. Team members and reviewers can access the latest PDF from the Actions tab without needing to install any tools. If your PDF path still depends on a LaTeX backend, replace the Typst installation step with the relevant TeX packages.

**Caching large tool installations** dramatically reduces build time. If your workflow still depends on a TeX distribution, caching it avoids reinstalling hundreds of megabytes of packages on every run:

```yaml
      - name: Cache LaTeX packages
        uses: actions/cache@v4
        with:
          path: /usr/share/texlive
          key: texlive-${{ runner.os }}-${{ hashFiles('**/texlive-packages.txt') }}

      - name: Install LaTeX (if not cached)
        run: |
          sudo apt-get install -y texlive-xetex texlive-fonts-recommended
```

**Automatic release publishing** on version tags provides polished distribution: when you tag a commit, the CI builds the final versions and publishes them to a GitHub Release page where anyone can download them:

```yaml
      - name: Publish release
        if: startsWith(github.ref, 'refs/tags/v')
        uses: softprops/action-gh-release@v1
        with:
          files: |
            build/*.pdf
            build/*.epub
            build/*.html
          body: |
            Automatically built from ${{ github.sha }}.
```

### A simpler CI with a shell script

Not every project needs GitHub Actions. For a project hosted on any Linux server you control — a VPS, a home server, a shared university server — a simple post-receive Git hook achieves the same result:

```sh
#!/bin/sh
# .git/hooks/post-receive
# Runs on the server after each push

REPO="$HOME/book-repo"
BUILD_DIR="$HOME/public_html/book-drafts"
WORK_TREE="/tmp/book-build-$$"

mkdir -p "$WORK_TREE"

# Check out the latest commit to a temporary directory
git --work-tree="$WORK_TREE" checkout -f main

# Build
cd "$WORK_TREE"
mkdir -p build
make html epub 2>&1 | tee build/build.log

# Publish
mkdir -p "$BUILD_DIR"
cp build/*.html build/*.epub "$BUILD_DIR/"
cp build/build.log "$BUILD_DIR/"

# Clean up
rm -rf "$WORK_TREE"

echo "Build complete. Files available at $BUILD_DIR"
```

Make the hook executable (`chmod +x .git/hooks/post-receive`) and it will run automatically after every push. The built files appear in `~/public_html/book-drafts/`, which if the server runs a web server becomes a URL your collaborators can access.


## Putting it together: a complete project scaffold

Combining everything in this chapter, here is the full directory structure and file set for a production document project. This can serve as a template for any new book or long-form document project.

```
book/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .github/
│   └── workflows/
│       └── build.yml
├── Makefile
├── metadata.yaml
├── defaults/
│   ├── html.yaml
│   ├── epub.yaml
│   └── pdf.yaml
├── chapters/
│   ├── 01-history.md
│   ├── 02-fundamentals.md
│   └── ...
├── styles/
│   ├── web.css
│   └── epub.css
├── templates/
│   ├── book.typ
│   └── book.latex
├── assets/
│   ├── cover.jpg
│   ├── fonts/
│   └── figures/
└── tools/
    └── build.sh        ← fallback for environments without Make
```

To start a new project from this scaffold:

```sh
# Clone or copy the scaffold
cp -r book-scaffold/ new-book/
cd new-book/

# Initialise git
git init
git add .
git commit -m "Initial project scaffold"

# Verify the build works
make html
```

The scaffold is the lowest-friction starting point for serious document work. The Makefile handles incremental builds. Git handles history and collaboration. The defaults files handle format-specific configuration. The CI workflow handles automatic building and distribution. Together, they make the administrative overhead of a multi-format document project — which can otherwise consume a significant fraction of a writer's time — nearly invisible.

---

Part II ends here. We have covered Markdown as a source format, Pandoc as the conversion engine, HTML and PDF and EPUB as outputs, and Make and Git as the infrastructure that makes producing all of them reliable and automatic. Part III turns to the broader toolbox: LaTeX in depth, Typst, Quarto, Emacs and Org Mode, and the Unix heritage tools that predate all of them.
