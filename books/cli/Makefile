.PHONY: book html pdf clean init-texmf ensure-pdflatex

QUARTO ?= quarto
CACHE_DIR := $(CURDIR)/.cache
TEXMF_VAR := $(CACHE_DIR)/texmf-var
TEXMF_CONFIG := $(CACHE_DIR)/texmf-config
TEXMF_HOME := $(CACHE_DIR)/texmf-home
TMP_DIR := $(CACHE_DIR)/tmp
RENDER_ENV := XDG_CACHE_HOME=$(CACHE_DIR) TMPDIR=$(TMP_DIR) TEXMFVAR=$(TEXMF_VAR) TEXMFCONFIG=$(TEXMF_CONFIG) TEXMFHOME=$(TEXMF_HOME)
INTERMEDIATE_STEM := Using-Unix-Command-Line-Tools-to-Supercharge-Your-Development-Workflow

init-texmf:
	@mkdir -p $(CACHE_DIR) $(TMP_DIR) $(TEXMF_VAR) $(TEXMF_CONFIG) $(TEXMF_HOME)
	@if [ ! -f "$(TEXMF_HOME)/tlpkg/texlive.tlpdb" ]; then \
		$(RENDER_ENV) tlmgr init-usertree; \
	fi

ensure-pdflatex:
	@if ! command -v pdflatex >/dev/null 2>&1; then \
		echo "pdflatex not found; installing TinyTeX via Quarto..."; \
		$(RENDER_ENV) $(QUARTO) install tinytex --no-prompt; \
	fi

book: init-texmf ensure-pdflatex
	$(RENDER_ENV) $(QUARTO) render
	@pdf_file=$$(ls -1 _book/*.pdf 2>/dev/null | head -n1); \
	if [ -n "$$pdf_file" ]; then cp "$$pdf_file" _book/cli-workflow-guide.pdf; fi
	@rm -f _book/$(INTERMEDIATE_STEM).pdf

html: init-texmf
	$(RENDER_ENV) $(QUARTO) render --to html

pdf: init-texmf ensure-pdflatex
	$(RENDER_ENV) $(QUARTO) render --to pdf
	@pdf_file=$$(ls -1 _book/*.pdf 2>/dev/null | head -n1); \
	if [ -n "$$pdf_file" ]; then cp "$$pdf_file" _book/cli-workflow-guide.pdf; fi
	@rm -f _book/$(INTERMEDIATE_STEM).pdf

clean:
	rm -rf _book .cache .quarto
