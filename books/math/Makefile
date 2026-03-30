.PHONY: book html pdf clean init-texmf ensure-lualatex install-fonts

QUARTO ?= quarto
CACHE_DIR := $(CURDIR)/.cache
TEXMF_VAR := $(CACHE_DIR)/texmf-var
TEXMF_CONFIG := $(CACHE_DIR)/texmf-config
TEXMF_HOME := $(CACHE_DIR)/texmf-home
TMP_DIR := $(CACHE_DIR)/tmp
TINYTEX_BIN := $(HOME)/.TinyTeX/bin/x86_64-linux
RENDER_ENV := PATH=$(TINYTEX_BIN):$(PATH) XDG_CACHE_HOME=$(CACHE_DIR) TMPDIR=$(TMP_DIR) TEXMFVAR=$(TEXMF_VAR) TEXMFCONFIG=$(TEXMF_CONFIG) TEXMFHOME=$(TEXMF_HOME)
INTERMEDIATE_STEM := From-Clay-to-Infinity

init-texmf:
	@mkdir -p $(CACHE_DIR) $(TMP_DIR) $(TEXMF_VAR) $(TEXMF_CONFIG) $(TEXMF_HOME)

ensure-lualatex:
	@if ! $(TINYTEX_BIN)/lualatex --version >/dev/null 2>&1; then \
		echo "TinyTeX not found; installing via Quarto..."; \
		$(QUARTO) install tinytex --no-prompt; \
	fi

install-fonts: init-texmf ensure-lualatex
	@echo "Ensuring required TeX font and typography packages are installed..."
	@$(TINYTEX_BIN)/tlmgr install \
		ebgaramond ebgaramond-maths \
		sourcesans inconsolata \
		microtype selnolig ellipsis csquotes \
		fontspec unicode-math \
		koma-script \
		crop \
		2>/dev/null || true

book: html pdf

html: init-texmf
	$(RENDER_ENV) $(QUARTO) render --to html --output-dir html

pdf: init-texmf ensure-lualatex install-fonts
	$(RENDER_ENV) $(QUARTO) render --to pdf --output-dir pdf
	@pdf_file=$$(ls -1 pdf/*.pdf 2>/dev/null | head -n1); \
	if [ -n "$$pdf_file" ]; then cp "$$pdf_file" pdf/from-clay-to-infinity.pdf; fi
	@rm -f pdf/$(INTERMEDIATE_STEM).pdf

clean:
	rm -rf _book .cache .quarto html pdf
