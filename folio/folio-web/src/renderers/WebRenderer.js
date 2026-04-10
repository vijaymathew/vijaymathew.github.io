import { RendererBase } from './RendererBase.js';

/**
 * Text-native web renderer.
 *
 * A ::web directive embeds a URL reference with reader-mode
 * rendering and annotation support:
 *
 *   ::web[https://example.com/article]{view=reader}
 *   title = Understanding Hardware Budget Variance
 *   summary = An analysis of common causes for hardware budget overruns...
 *   ---
 *   My notes: relevant to the East region overrun we're investigating.
 *   ::end
 *
 * Body lines before --- are metadata (key=value).
 * Lines after --- are user annotations (free text).
 *
 * In a real implementation, the renderer would fetch the URL and
 * extract content via a readability algorithm.  This mock displays
 * the metadata and annotations, with a "clip" action that records
 * the reference in the document.
 */

const webCache = new Map();

export class WebRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'web',
      capabilities: ['query'],
      trust: 'mirrored',
      grants: { render: 'web.read', query: 'web.read' }
    };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const url = id;
    const view = params.view || 'reader';

    // Parse body: metadata (key=value) above ---, annotations below.
    const { meta, annotations } = this._parseBody(body || []);

    webCache.set(id, { url, ...meta, annotations: annotations.join('\n') });

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::web[${url}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    this._pill(pills, view);

    // ── article card ────────────────────────────────────────
    const article = document.createElement('div');
    article.className = 'web-article';

    // Title
    if (meta.title) {
      const title = document.createElement('div');
      title.className = 'web-title';
      title.textContent = meta.title;
      article.appendChild(title);
    }

    // URL
    const urlEl = document.createElement('div');
    urlEl.className = 'web-url';
    urlEl.textContent = url;
    article.appendChild(urlEl);

    // Summary
    if (meta.summary) {
      const summary = document.createElement('div');
      summary.className = 'web-summary';
      summary.textContent = meta.summary;
      article.appendChild(summary);
    }

    // Reader content placeholder (mock)
    const readerArea = document.createElement('div');
    readerArea.className = 'web-reader';
    readerArea.textContent = view === 'reader'
      ? '[Reader mode content would be extracted and rendered here]'
      : '[Live frame would render here]';
    article.appendChild(readerArea);

    bodyEl.appendChild(article);

    // ── annotations ─────────────────────────────────────────
    if (annotations.length > 0 || true) {
      const annoSection = document.createElement('div');
      annoSection.className = 'web-annotations';

      const annoLabel = document.createElement('div');
      annoLabel.className = 'web-anno-label';
      annoLabel.textContent = 'Notes';
      annoSection.appendChild(annoLabel);

      const annoContent = document.createElement('div');
      annoContent.className = 'web-anno-content';
      annoContent.contentEditable = 'true';
      annoContent.spellcheck = false;
      annoContent.textContent = annotations.join('\n');
      if (!annotations.length) annoContent.dataset.empty = 'true';

      annoContent.addEventListener('focus', () => {
        delete annoContent.dataset.empty;
      });

      annoContent.addEventListener('blur', () => {
        const newAnnotations = annoContent.innerText.split('\n');
        webCache.set(id, { url, ...meta, annotations: annoContent.innerText });

        // Rebuild body
        const metaLines = Object.entries(meta).map(([k, v]) => `${k} = ${v}`);
        const allBody = newAnnotations.some(l => l.trim())
          ? [...metaLines, '---', ...newAnnotations]
          : metaLines;
        const directiveLine = this._serializeDirectiveLine(id, params);
        const text = [directiveLine, ...allBody, '::end'].join('\n');

        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'widget',
          type: 'replace',
          payload: { targetDocId: 'current', lineStart, lineEnd, text }
        });
      });

      ctx.app?.directiveAssistant?.bind(annoContent, { mode: 'contenteditable' });
      annoSection.appendChild(annoContent);
      bodyEl.appendChild(annoSection);
    }

    return container;
  }

  async query(params) {
    if (params && params.id) return webCache.get(params.id) || null;
    const all = {};
    for (const [id, data] of webCache) all[id] = data;
    return all;
  }

  _parseBody(body) {
    const meta = {};
    const annotations = [];
    let pastSeparator = false;

    for (const line of body) {
      const trimmed = line.trim();
      if (trimmed === '---') {
        pastSeparator = true;
        continue;
      }
      if (!pastSeparator) {
        const m = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
        if (m) meta[m[1]] = m[2].trim();
      } else {
        annotations.push(line);
      }
    }

    return { meta, annotations };
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null);
    if (entries.length === 0) return `::web[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::web[${id}]{${paramStr}}`;
  }

  _pill(container, text) {
    const el = document.createElement('span');
    el.className = 'directive-pill';
    el.textContent = text;
    container.appendChild(el);
  }
}
