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
   * @param {HTMLElement} scrollRoot  - The scrollable ancestor (#canvas-container).
   * @param {Object} [opts]
   * @param {number} [opts.proximityPx=600] - Pixel margin around viewport for activation.
   */
  constructor(container, registry, syncBus, scrollRoot, opts = {}) {
    this.container = container;
    this.registry = registry;
    this.syncBus = syncBus;

    /** Currently built segment model. */
    this.segments = [];
    /** Map lineStart → { element, descriptor, live } */
    this.activeWidgets = new Map();
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
  }

  // ── public API ──────────────────────────────────────────────

  /**
   * Reconcile the canvas with new document text + directive index.
   * @param {string} text
   * @param {DirectiveDescriptor[]} index
   * @param {NamespaceBridge} bridge
   */
  update(text, index, bridge) {
    this.bridge = bridge;
    const next = this._buildSegments(text, index);

    if (this._structurallyEqual(next)) {
      // Layout unchanged — patch prose in-place, leave widgets alone.
      this._patchProse(next);
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
        this._fillProse(el, seg.lines);
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
    this.activeWidgets.clear();
    this.container.innerHTML = '';
  }

  // ── prose patching ──────────────────────────────────────────

  /** Update prose elements in-place without touching directive slots. */
  _patchProse(next) {
    const proseEls = this.container.querySelectorAll('[data-segment-type="prose"]');
    let idx = 0;
    for (const seg of next) {
      if (seg.type === 'prose' && idx < proseEls.length) {
        this._fillProse(proseEls[idx], seg.lines);
        idx++;
      }
    }
  }

  /** Render lines into paragraph elements inside a prose container. */
  _fillProse(el, lines) {
    el.innerHTML = '';
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
  }

  // ── viewport observation ────────────────────────────────────

  /** @param {IntersectionObserverEntry[]} entries */
  _onIntersection(entries) {
    for (const entry of entries) {
      const lineStart = parseInt(entry.target.dataset.lineStart, 10);
      const widget = this.activeWidgets.get(lineStart);
      if (!widget) continue;

      if (entry.isIntersecting && !widget.live) {
        this._activate(widget);
      } else if (!entry.isIntersecting && widget.live) {
        this._deactivate(widget);
      }
    }
  }

  /** Render the live widget for a directive. */
  async _activate(widget) {
    const { element, descriptor } = widget;
    const renderer = this.registry.getInstance(descriptor.type);

    if (!renderer) return; // keep fallback

    const ctx = {
      ...descriptor,
      syncBus: this.syncBus,
      bridge: this.bridge
    };

    try {
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
    const pre = document.createElement('pre');
    pre.className = 'directive-fallback';

    let text = descriptor.raw;
    if (descriptor.body && descriptor.body.length > 0) {
      text += '\n' + descriptor.body.join('\n') + '\n::end';
    }
    pre.textContent = text;

    element.appendChild(pre);
  }
}
