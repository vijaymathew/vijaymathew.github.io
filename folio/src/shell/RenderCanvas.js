/**
 * Viewport-driven render canvas.
 *
 * Instead of rendering every directive eagerly, this uses an
 * IntersectionObserver with a generous rootMargin (the "proximity
 * threshold" from the proposal) to lazily activate widgets only
 * when they scroll near the viewport, and deactivate them when
 * they scroll away — replacing live widgets with raw directive
 * text (graceful degradation).
 *
 * Prose-only changes are patched in-place without touching
 * directive widgets, avoiding the old full-rebuild-on-every-
 * keystroke problem.
 */
export class RenderCanvas {
  /**
   * @param {HTMLElement} container   - The element to mount segments into (#render-canvas).
   * @param {CapabilityRegistry} registry
   * @param {SyncBus} syncBus
   * @param {DirectiveParser} parser
   * @param {HTMLElement} scrollRoot  - The scrollable ancestor (#canvas-container).
   * @param {Object} [opts]
   * @param {number} [opts.proximityPx=600] - Pixel margin around viewport for activation.
   */
  constructor(container, registry, syncBus, parser, scrollRoot, opts = {}) {
    this.container = container;
    this.registry = registry;
    this.syncBus = syncBus;
    this.parser = parser;

    /** Currently built segment model. */
    this.segments = [];
    /** Map lineStart → { element, descriptor, live } */
    this.activeWidgets = new Map();
    /** Set of lineStart in explicit text view mode. */
    this.textModeWidgets = new Set();
    /** Most-recent bridge reference. */
    this.bridge = null;

    const margin = opts.proximityPx ?? 600;
    this.observer = new IntersectionObserver(
      this._onIntersection.bind(this),
      {
        root: scrollRoot,
        rootMargin: `${margin}px 0px ${margin}px 0px`,
        threshold: 0
      }
    );

    this.container.addEventListener('toggle-view', (e) => {
      const lineStart = parseInt(e.target.closest('[data-line-start]').dataset.lineStart, 10);
      const widget = this.activeWidgets.get(lineStart);
      if (widget) {
        if (this.textModeWidgets.has(lineStart)) {
          this.textModeWidgets.delete(lineStart);
          this._activate(widget);
        } else {
          this.textModeWidgets.add(lineStart);
          this._deactivate(widget);
        }
      }
    });
  }

  // ── public API ──────────────────────────────────────────────

  /**
   * Reconcile the canvas with new document text + directive index.
   * @param {string} text
   * @param {DirectiveDescriptor[]} index
   * @param {NamespaceBridge} bridge
   */
  update(text, index, bridge, forceRebuild = false) {
    this.bridge = bridge;
    const next = this._buildSegments(text, index);

    if (!forceRebuild && this._structurallyEqual(next)) {
      // Layout unchanged — patch prose and descriptors in-place, leave widgets alone.
      this._patchProse(next);
      this._patchDirectives(next);
      this.segments = next;
      return;
    }

    // Structure changed — full rebuild with lazy activation.
    this._teardown();
    this.segments = next;
    this._mount();
  }

  // ── segment model ───────────────────────────────────────────

  /**
   * Build an ordered list of segments from text + directive index.
   * Each segment is either { type: 'prose', lines, startLine } or
   * { type: 'directive', descriptor }.
   */
  _buildSegments(text, index) {
    const lines = text.split('\n');
    const segments = [];
    let proseLines = [];
    let proseStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const directive = index.find(d => d.lineStart === i);

      if (directive) {
        if (proseLines.length > 0) {
          segments.push({ type: 'prose', lines: [...proseLines], startLine: proseStart });
          proseLines = [];
        }
        segments.push({ type: 'directive', descriptor: directive });
        i = directive.lineEnd;
        proseStart = i + 1;
      } else {
        if (proseLines.length === 0) proseStart = i;
        proseLines.push(lines[i]);
      }
    }

    if (proseLines.length > 0) {
      segments.push({ type: 'prose', lines: proseLines, startLine: proseStart });
    }

    return segments;
  }

  /**
   * Two segment lists are "structurally equal" when directive count,
   * order, types, ids, and bodies all match.  Prose content may differ.
   */
  _structurallyEqual(next) {
    if (next.length !== this.segments.length) return false;
    for (let i = 0; i < next.length; i++) {
      const a = this.segments[i];
      const b = next[i];
      if (a.type !== b.type) return false;
      if (a.type === 'directive') {
        const da = a.descriptor;
        const db = b.descriptor;
        if (da.type !== db.type || da.id !== db.id || da.lineStart !== db.lineStart) return false;
        if (da.raw !== db.raw) return false;
        // For block directives (::py), also compare body.
        if (da.body && db.body && da.body.join('\n') !== db.body.join('\n')) return false;
      }
    }
    return true;
  }

  // ── DOM mounting ────────────────────────────────────────────

  /** Build the full DOM skeleton with placeholders for directives. */
  _mount() {
    for (const seg of this.segments) {
      if (seg.type === 'prose') {
        const el = document.createElement('div');
        el.className = 'prose';
        el.dataset.segmentType = 'prose';
        this._fillProse(el, seg);
        this.container.appendChild(el);
      } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'directive-slot';
        wrapper.dataset.segmentType = 'directive';
        wrapper.dataset.lineStart = seg.descriptor.lineStart;

        // Start in fallback (raw text) — observer will activate if in range.
        this._showFallback(wrapper, seg.descriptor);
        this.container.appendChild(wrapper);

        this.activeWidgets.set(seg.descriptor.lineStart, {
          element: wrapper,
          descriptor: seg.descriptor,
          live: false
        });

        this.observer.observe(wrapper);
      }
    }
  }

  /** Disconnect observer, clear widget state, empty DOM. */
  _teardown() {
    this.observer.disconnect();
    for (const widget of this.activeWidgets.values()) {
      const root = widget.element.firstChild;
      if (root && typeof root.__cleanup === 'function') {
        root.__cleanup();
      }
    }
    this.activeWidgets.clear();
    this.container.innerHTML = '';
  }

  // ── prose patching ──────────────────────────────────────────

  /** Update directive descriptors and fallbacks in-place. */
  _patchDirectives(next) {
    for (const seg of next) {
      if (seg.type === 'directive') {
        const lineStart = seg.descriptor.lineStart;
        const widget = this.activeWidgets.get(lineStart);
        if (widget) {
          widget.descriptor = seg.descriptor;
          const forceText = this.textModeWidgets.has(lineStart);

          if (forceText && widget.live) {
            this._deactivate(widget);
          } else if (!forceText && !widget.live) {
            // Mode switched back to widget — we could activate it here,
            // but for performance we'll only do it if it's currently visible.
            // Re-observing will trigger the IntersectionObserver to re-evaluate.
            this.observer.unobserve(widget.element);
            this.observer.observe(widget.element);
          } else if (!widget.live) {
            this._showFallback(widget.element, widget.descriptor);
          }
        }
      }
    }
  }

  /** Update prose elements in-place without touching directive slots. */
  _patchProse(next) {
    const proseEls = this.container.querySelectorAll('[data-segment-type="prose"]');
    let idx = 0;
    for (const seg of next) {
      if (seg.type === 'prose' && idx < proseEls.length) {
        // Only update if not currently focused
        if (document.activeElement !== proseEls[idx]) {
          this._fillProse(proseEls[idx], seg);
        }
        idx++;
      }
    }
  }

  /** Render lines into paragraph elements inside a prose container. */
  _fillProse(el, seg) {
    const { lines, startLine } = seg;
    const lineCount = lines.length;
    const text = lines.join('\n').trim();

    el.innerHTML = '';
    el.contentEditable = 'true';
    el.spellcheck = false;

    if (!text) {
      el.dataset.empty = 'true';
    } else {
      delete el.dataset.empty;
    }

    let p = document.createElement('p');
    for (const line of lines) {
      if (line.trim() === '') {
        if (p.textContent !== '') {
          el.appendChild(p);
          p = document.createElement('p');
        }
      } else {
        if (p.textContent) p.textContent += ' ';
        p.textContent += line;
      }
    }
    if (p.textContent !== '') {
      el.appendChild(p);
    }

    // Sync back on blur
    el.onblur = () => {
      const newText = el.innerText.trim();
      const oldText = lines.join('\n').trim();
      
      if (newText !== oldText) {
        this.syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'editor', // Use 'editor' source to trigger updates elsewhere
          type: 'replace',
          payload: {
            targetDocId: 'current',
            lineStart: startLine,
            lineEnd: startLine + lineCount - 1,
            text: newText
          }
        });
      }
    };

    el.onfocus = () => {
      delete el.dataset.empty;
    };
  }

  // ── viewport observation ────────────────────────────────────

  /** @param {IntersectionObserverEntry[]} entries */
  _onIntersection(entries) {
    for (const entry of entries) {
      const lineStart = parseInt(entry.target.dataset.lineStart, 10);
      const widget = this.activeWidgets.get(lineStart);
      if (!widget) continue;

      if (entry.isIntersecting && !widget.live && !this.textModeWidgets.has(lineStart)) {
        this._activate(widget);
      } else if (!entry.isIntersecting && widget.live) {
        this._deactivate(widget);
      }
    }
  }

  /** Toggle all widgets between text and live views. */
  toggleAll(forceText) {
    for (const seg of this.segments) {
      if (seg.type === 'directive') {
        if (forceText) {
          this.textModeWidgets.add(seg.descriptor.lineStart);
        } else {
          this.textModeWidgets.delete(seg.descriptor.lineStart);
        }
      }
    }
    // Re-render to apply changes
    const text = this.syncBus.store.getContents();
    this.update(text, this.parser.parse(text), this.bridge);
  }

  /** Render the live widget for a directive. */
  async _activate(widget) {
    const { element, descriptor } = widget;
    const renderer = this.registry.getInstance(descriptor.type);

    if (!renderer) return; // keep fallback

    const ctx = {
      ...descriptor,
      syncBus: this.syncBus,
      bridge: this.bridge,
      policy: this.registry.policy
    };

    try {
      const auth = this.registry.authorize(descriptor.type, 'render');
      if (!auth.allowed) {
        element.innerHTML = '';
        element.appendChild(this._buildCapabilityGate(descriptor, auth));
        widget.live = true;
        return;
      }

      const liveEl = await renderer.render(ctx);
      element.innerHTML = '';
      element.appendChild(liveEl);
      widget.live = true;
    } catch (err) {
      console.error(`[RenderCanvas] Failed to activate ${descriptor.type}[${descriptor.id}]:`, err);
      // keep fallback on error
    }
  }

  /** Replace a live widget with its raw-text fallback. */
  _deactivate(widget) {
    const root = widget.element.firstChild;
    if (root && typeof root.__cleanup === 'function') {
      root.__cleanup();
    }
    this._showFallback(widget.element, widget.descriptor);
    widget.live = false;
  }

  // ── fallback rendering ──────────────────────────────────────

  /**
   * Show graceful-degradation text for a directive.
   * For block directives (::py) this includes the full body + ::end.
   */
  _showFallback(element, descriptor) {
    element.innerHTML = '';

    const header = document.createElement('div');
    header.className = 'directive-header';
    header.style.borderStyle = 'dashed';

    const tag = document.createElement('span');
    tag.className = 'directive-tag';
    tag.textContent = `::${descriptor.type}[${descriptor.id}]`;
    header.appendChild(tag);

    const pills = document.createElement('div');
    pills.className = 'directive-pills';
    header.appendChild(pills);

    const switchBtn = document.createElement('button');
    switchBtn.className = 'directive-pill';
    switchBtn.title = 'Switch to Widget View';
    switchBtn.innerHTML = '<i class="fa fa-eye"></i>';
    switchBtn.onclick = () => {
      element.dispatchEvent(new CustomEvent('toggle-view', { bubbles: true }));
    };
    pills.appendChild(switchBtn);

    element.appendChild(header);

    const pre = document.createElement('pre');
    pre.className = 'directive-fallback';
    pre.contentEditable = 'true';
    pre.spellcheck = false;

    let text = descriptor.raw;
    if (descriptor.body && descriptor.body.length > 0) {
      text += '\n' + descriptor.body.join('\n') + '\n::end';
    }
    pre.textContent = text;

    pre.addEventListener('blur', () => {
      const newText = pre.innerText.trim();
      if (newText === text) return;

      this.syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'editor', // Use 'editor' to trigger canvas update
        type: 'replace',
        payload: {
          targetDocId: 'current',
          lineStart: descriptor.lineStart,
          lineEnd: descriptor.lineEnd,
          text: newText
        }
      });
    });

    element.appendChild(pre);
  }

  _buildCapabilityGate(descriptor, auth) {
    const container = document.createElement('div');
    container.className = 'directive-widget';

    const header = document.createElement('div');
    header.className = 'directive-header';

    const tag = document.createElement('span');
    tag.className = 'directive-tag';
    tag.textContent = `::${descriptor.type}[${descriptor.id}]`;
    header.appendChild(tag);

    const pills = document.createElement('div');
    pills.className = 'directive-pills';
    header.appendChild(pills);
    container.appendChild(header);

    const body = document.createElement('div');
    body.className = 'directive-body';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.gap = '10px';

    const message = document.createElement('div');
    message.style.fontFamily = 'var(--sans)';
    message.style.fontSize = '13px';
    message.style.color = 'var(--ink2)';
    message.textContent = auth.reason === 'untrusted-document'
      ? 'This directive is mirrored state. Trust the document before Folio will read remote data.'
      : `Missing capability grant: ${auth.grant}.`;
    body.appendChild(message);

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.flexWrap = 'wrap';

    if (auth.reason === 'untrusted-document') {
      const trustBtn = document.createElement('button');
      trustBtn.className = 'directive-pill active';
      trustBtn.textContent = 'trust document';
      trustBtn.onclick = () => {
        this.registry.policy?.setTrusted(true);
      };
      actions.appendChild(trustBtn);
    }

    if (auth.grant) {
      const grantBtn = document.createElement('button');
      grantBtn.className = 'directive-pill';
      grantBtn.textContent = `grant ${auth.grant}`;
      grantBtn.disabled = auth.reason === 'untrusted-document';
      grantBtn.onclick = () => {
        this.registry.policy?.setGrant(auth.grant, true);
      };
      actions.appendChild(grantBtn);
    }

    body.appendChild(actions);
    container.appendChild(body);
    return container;
  }
}
