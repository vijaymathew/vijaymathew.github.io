import { RendererBase } from './RendererBase.js';

/**
 * Text-native note renderer (owned state).
 *
 * A note is a block directive whose body is free-form text and
 * whose params hold structured metadata:
 *
 *   ::note[finance-contact]{email=finance@folio.local}
 *   Contact for Q3 budget queries.
 *   Phone: ext. 4102
 *   ::end
 *
 * The body is inline-editable; edits write back to the document
 * text via SyncBus.  Params are displayed as metadata pills.
 *
 * query({id}) returns { id, ...params, text } so ::py blocks can
 * access both the structured params and the prose content.
 */

const noteCache = new Map();

export class NoteRenderer extends RendererBase {
  get manifest() {
    return { type: 'note', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const bodyText = (body || []).join('\n');

    // Cache for query().
    noteCache.set(id, { id, ...params, text: bodyText });

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::note[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    // Params as metadata pills.
    for (const [k, v] of Object.entries(params)) {
      const pill = document.createElement('span');
      pill.className = 'directive-pill';
      pill.textContent = `${k}: ${v}`;
      pills.appendChild(pill);
    }

    // ── editable content ────────────────────────────────────
    const content = document.createElement('div');
    content.className = 'note-content';
    content.contentEditable = 'true';
    content.spellcheck = false;
    content.textContent = bodyText;

    if (!bodyText.trim()) {
      content.dataset.empty = 'true';
    }

    // Persist on blur — crash-safe draft behavior.
    content.addEventListener('blur', () => {
      const newText = content.innerText;
      const newBody = newText.split('\n');

      noteCache.set(id, { id, ...params, text: newText });

      const directiveLine = this._serializeDirectiveLine(id, params);
      const text = [directiveLine, ...newBody, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'widget',
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text }
      });
    });

    // Remove empty placeholder styling on focus.
    content.addEventListener('focus', () => {
      delete content.dataset.empty;
    });

    bodyEl.appendChild(content);
    return container;
  }

  // ── query interface ───────────────────────────────────────

  async query(params) {
    if (params && params.id) return noteCache.get(params.id) || null;
    const all = {};
    for (const [id, data] of noteCache) all[id] = data;
    return all;
  }

  // ── helpers ───────────────────────────────────────────────

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::note[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::note[${id}]{${paramStr}}`;
  }
}
