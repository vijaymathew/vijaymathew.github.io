import { RendererBase } from './RendererBase.js';

export class SpawnRenderer extends RendererBase {
  get manifest() {
    return { type: 'spawn', capabilities: ['mutate'], trust: 'owned' };
  }

  async render(ctx) {
    const { id, params, syncBus, lineStart, app } = ctx;
    const store = syncBus.store;
    const parser = app?.parser;
    const currentDocumentId = store.getDocumentId();
    const container = this.createWidgetContainer(`::spawn[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.display = 'flex';
    bodyEl.style.flexDirection = 'column';
    bodyEl.style.gap = '10px';

    const nextDocId = params.doc || params.next || this._defaultNextDocumentId(params, currentDocumentId);
    const rollupDocId = params.rollup || `${nextDocId}:rollup`;
    const nextTitle = params.title || this._defaultTitle(nextDocId);

    this._pill(pills, `next=${nextDocId}`);
    this._pill(pills, `rollup=${rollupDocId}`);

    const summary = document.createElement('div');
    summary.style.fontFamily = 'var(--sans)';
    summary.style.fontSize = '13px';
    summary.style.color = 'var(--ink2)';
    summary.textContent = 'Create the next document, generate a roll-up of open tasks by reference, or compact completed work out of the current document.';
    bodyEl.appendChild(summary);

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.flexWrap = 'wrap';
    bodyEl.appendChild(actions);

    const spawnBtn = document.createElement('button');
    spawnBtn.className = 'directive-pill active';
    spawnBtn.textContent = 'spawn next';
    spawnBtn.onclick = () => {
      const currentText = store.getContents(currentDocumentId);
      const index = parser.parse(currentText);
      const openTasks = this._collectOpenTasks(index);

      const nextText = this._buildNextDocumentText(nextTitle, currentDocumentId, rollupDocId, openTasks);
      const rollupText = this._buildRollupText(currentDocumentId, openTasks);

      if (!store.hasDocument(rollupDocId)) {
        store.createDocument(rollupDocId, rollupText, { reason: 'Roll-up generated' });
      }
      if (!store.hasDocument(nextDocId)) {
        store.createDocument(nextDocId, nextText, { reason: 'Spawned from daily document' });
      }

      const updatedCurrent = this._updateCurrentDocumentAfterSpawn(currentText, index, nextDocId, rollupDocId, params['after-status'] || 'dormant', lineStart, params);
      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'spawn',
        type: 'replace',
        payload: {
          targetDocId: currentDocumentId,
          text: updatedCurrent
        }
      });

      app?.openDocument?.(nextDocId);
      app?.setStatus?.(`Spawned ${nextDocId}`);
    };
    actions.appendChild(spawnBtn);

    const rollupBtn = document.createElement('button');
    rollupBtn.className = 'directive-pill';
    rollupBtn.textContent = 'open roll-up';
    rollupBtn.onclick = () => {
      const currentText = store.getContents(currentDocumentId);
      const index = parser.parse(currentText);
      const openTasks = this._collectOpenTasks(index);
      if (!store.hasDocument(rollupDocId)) {
        store.createDocument(rollupDocId, this._buildRollupText(currentDocumentId, openTasks), { reason: 'Roll-up generated' });
      }
      app?.openDocument?.(rollupDocId);
      app?.setStatus?.(`Opened ${rollupDocId}`);
    };
    actions.appendChild(rollupBtn);

    const compactBtn = document.createElement('button');
    compactBtn.className = 'directive-pill';
    compactBtn.textContent = 'compact done';
    compactBtn.onclick = () => {
      const currentText = store.getContents(currentDocumentId);
      const compacted = this._compactCompletedTasks(currentText, parser.parse(currentText));
      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'spawn',
        type: 'replace',
        payload: {
          targetDocId: currentDocumentId,
          text: compacted
        }
      });
      app?.setStatus?.('Compacted completed tasks');
    };
    actions.appendChild(compactBtn);

    return container;
  }

  _collectOpenTasks(index) {
    return index.filter((descriptor) => descriptor.type === 'task' && descriptor.params.status !== 'done');
  }

  _buildNextDocumentText(title, sourceDocumentId, rollupDocId, openTasks) {
    const lines = [
      title,
      '',
      '::meta[status]{value=active}',
      '',
      `Spawned from ${sourceDocumentId}.`,
      '',
      `::note[open-rollup]{source=note:rollup-summary source-doc=${rollupDocId}}`,
      '::end',
      ''
    ];

    for (const task of openTasks) {
      lines.push(`::note[carry-${task.id}]{source=task:${task.id} source-doc=${sourceDocumentId} field=raw}`);
      lines.push('::end');
      lines.push('');
    }

    lines.push('::spawn[next]');
    return lines.join('\n');
  }

  _buildRollupText(sourceDocumentId, openTasks) {
    const lines = [
      `Roll-up for ${sourceDocumentId}.`,
      '',
      '::meta[status]{value=active}',
      '',
      '::note[rollup-summary]',
      `Open tasks carried forward from ${sourceDocumentId}.`,
      '::end',
      ''
    ];

    for (const task of openTasks) {
      lines.push(`::note[rollup-${task.id}]{source=task:${task.id} source-doc=${sourceDocumentId} field=raw}`);
      lines.push('::end');
      lines.push('');
    }

    return lines.join('\n');
  }

  _updateCurrentDocumentAfterSpawn(text, index, nextDocId, rollupDocId, nextStatus, spawnLineStart, params) {
    const lines = text.split('\n');
    const meta = index.find((descriptor) => descriptor.type === 'meta' && descriptor.id === 'status');
    const spawnLine = this._serializeDirectiveLine('spawn', 'next', {
      ...params,
      doc: nextDocId,
      rollup: rollupDocId,
      spawned: nextDocId
    });

    if (meta) {
      lines[meta.lineStart] = `::meta[status]{value=${nextStatus}}`;
    } else {
      lines.unshift(`::meta[status]{value=${nextStatus}}`, '');
    }

    const offset = meta ? 0 : 2;
    lines[spawnLineStart + offset] = spawnLine;
    return lines.join('\n');
  }

  _compactCompletedTasks(text, index) {
    const lines = text.split('\n');
    const completed = index
      .filter((descriptor) => descriptor.type === 'task' && descriptor.params.status === 'done')
      .sort((a, b) => b.lineStart - a.lineStart);

    completed.forEach((descriptor) => {
      lines.splice(descriptor.lineStart, (descriptor.lineEnd - descriptor.lineStart) + 1);
    });

    if (completed.length > 0) {
      lines.push('', `Compacted ${completed.length} completed task${completed.length === 1 ? '' : 's'} on ${new Date().toISOString().split('T')[0]}.`);
    }

    return lines.join('\n');
  }

  _defaultNextDocumentId(params, currentDocumentId) {
    if (params.date) return `daily:${params.date}`;
    const dateMatch = currentDocumentId.match(/(\d{4}-\d{2}-\d{2})/);
    if (dateMatch) {
      const date = new Date(`${dateMatch[1]}T00:00:00`);
      date.setDate(date.getDate() + 1);
      return `daily:${date.toISOString().slice(0, 10)}`;
    }
    return `${currentDocumentId}:next`;
  }

  _defaultTitle(documentId) {
    if (documentId.startsWith('daily:')) {
      return `${documentId.slice(6)}.`;
    }
    return documentId;
  }

  _serializeDirectiveLine(type, id, params = {}) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::${type}[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::${type}[${id}]{${paramStr}}`;
  }

  _pill(container, text) {
    const pill = document.createElement('span');
    pill.className = 'directive-pill';
    pill.textContent = text;
    container.appendChild(pill);
  }
}
