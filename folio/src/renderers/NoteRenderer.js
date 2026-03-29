import { RendererBase } from './RendererBase.js';
import { buildTransclusionPatch, resolveNoteTransclusion } from '../core/TransclusionResolver.js';

/**
 * Text-native note renderer as a transclusion primitive.
 *
 * A note block references another source block inside the document:
 *
 *   ::note[finance-contact]{source=contact:finance.team field=notes}
 *   ::end
 *
 * Editing through the embed writes back to the source block. The
 * note directive itself stores only the reference metadata. A note
 * without source= is treated as a legacy inline block.
 */

const noteCache = new Map();

export class NoteRenderer extends RendererBase {
  get manifest() {
    return { type: 'note', capabilities: ['query', 'mutate'], trust: 'owned' };
  }

  async render(ctx) {
    const { id, params, syncBus, lineStart, lineEnd, bridge } = ctx;
    const currentDocumentId = syncBus.store.getDocumentId();
    const text = bridge?.lastText || syncBus.store.getContents(currentDocumentId);
    const index = bridge?.lastIndex?.length ? bridge.lastIndex : bridge?.parser?.parse(text) || [];
    const resolved = resolveNoteTransclusion(ctx, text, index, {
      store: syncBus.store,
      parser: bridge?.parser,
      currentDocumentId
    });

    noteCache.set(id, {
      id,
      ...params,
      source: resolved.source,
      sourceDocumentId: resolved.sourceDocumentId,
      field: resolved.field,
      text: resolved.text,
      error: resolved.error
    });

    const container = this.createWidgetContainer(`::note[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (resolved.source) this._pill(pills, `source=${resolved.source}`);
    if (resolved.sourceDocumentId && resolved.sourceDocumentId !== currentDocumentId) {
      this._pill(pills, `doc=${resolved.sourceDocumentId}`);
    }
    if (resolved.field) this._pill(pills, `field=${resolved.field}`);
    if (resolved.mode === 'inline') this._pill(pills, 'legacy-inline');

    if (resolved.mode === 'transclusion') {
      const freezeBtn = document.createElement('button');
      freezeBtn.className = 'directive-pill';
      freezeBtn.textContent = 'freeze';
      freezeBtn.title = 'Replace this transclusion with literal text';
      freezeBtn.onclick = () => {
        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'note',
          type: 'replace',
          payload: {
            targetDocId: 'current',
            lineStart,
            lineEnd,
            text: resolved.text
          }
        });
      };
      pills.appendChild(freezeBtn);
    }

    const content = document.createElement('div');
    content.className = 'note-content';
    content.contentEditable = resolved.mode !== 'error';
    content.spellcheck = false;
    content.textContent = resolved.mode === 'error'
      ? resolved.error
      : resolved.text;

    if (!content.textContent.trim()) {
      content.dataset.empty = 'true';
    }

    content.addEventListener('focus', () => {
      delete content.dataset.empty;
    });

    content.addEventListener('blur', () => {
      if (resolved.mode === 'error') return;

      const newText = content.innerText;
      if (newText === resolved.text) return;

      if (resolved.mode === 'transclusion') {
        const patch = buildTransclusionPatch(resolved, newText);
        if (!patch) return;

        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'note',
          type: 'replace',
          payload: {
            targetDocId: patch.targetDocId,
            lineStart: patch.lineStart,
            lineEnd: patch.lineEnd,
            text: patch.text
          }
        });
        return;
      }

      const directiveLine = this._serializeDirectiveLine(id, params);
      const nextBody = newText.split('\n');
      const blockText = [directiveLine, ...nextBody, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'widget',
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text: blockText }
      });
    });

    ctx.app?.directiveAssistant?.bind(content, { mode: 'contenteditable' });
    bodyEl.appendChild(content);
    return container;
  }

  async query(params) {
    if (params && params.id) return noteCache.get(params.id) || null;
    const all = {};
    for (const [id, data] of noteCache) all[id] = data;
    return all;
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::note[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::note[${id}]{${paramStr}}`;
  }

  _pill(container, text) {
    const pill = document.createElement('span');
    pill.className = 'directive-pill';
    pill.textContent = text;
    container.appendChild(pill);
  }
}
