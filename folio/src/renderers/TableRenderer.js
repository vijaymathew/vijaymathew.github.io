import { RendererBase } from './RendererBase.js';

/**
 * Text-native table renderer with a real computation link.
 *
 * A table may store an owned snapshot in text while deriving that
 * snapshot from a named ::py block:
 *
 *   ::table[budget]{source=analysis editable=true}
 *   | Region | Q1 | Q2 |
 *   | North | 3500 | 4200 |
 *   ::end
 *
 * The linked ::py block should export `result` (or `table_result`)
 * as a list of row objects. Re-sync re-runs the source block and
 * rewrites the table body from the latest computed output.
 */

const dataCache = new Map();

export class TableRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'table',
      capabilities: ['query', 'mutate'],
      trust: 'owned'
    };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd, bridge } = ctx;
    const parsed = this._parseBody(body || []);
    const sourceId = params.source || null;
    const sourceKey = sourceId ? `py:${sourceId}` : null;
    const editable = params.editable === 'true';

    let currentHeaders = [...parsed.headers];
    let currentRows = parsed.rows.map((row) => [...row]);
    let sourceHeaders = [...parsed.headers];
    let sourceRows = parsed.rows.map((row) => [...row]);
    let currentParams = { ...params };
    let diverged = false;
    let detached = !sourceId;
    let sourceError = '';
    const editedCells = new Set();

    const container = this.createWidgetContainer(`::table[${id}]`);
    const headerEl = container.querySelector('.directive-header');
    const tag = headerEl.querySelector('.directive-tag');
    const pills = headerEl.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    let sourcePill = null;
    if (sourceId) {
      sourcePill = document.createElement('span');
      sourcePill.className = 'directive-pill';
      sourcePill.textContent = `source=${sourceId}`;
      pills.appendChild(sourcePill);
    }

    if (editable) {
      const editPill = document.createElement('span');
      editPill.className = 'directive-pill';
      editPill.textContent = 'editable';
      pills.appendChild(editPill);
    }

    const divBadge = document.createElement('span');
    divBadge.className = 'badge badge-warn';
    divBadge.textContent = 'edited';
    divBadge.style.display = 'none';
    divBadge.style.marginLeft = '8px';
    tag.after(divBadge);

    const reconcileBar = document.createElement('div');
    reconcileBar.className = 'table-reconcile';

    const reconcileMsg = document.createElement('span');
    reconcileMsg.textContent = 'Table diverged from source.';

    const resyncBtn = document.createElement('button');
    resyncBtn.className = 'directive-pill active';
    resyncBtn.style.cursor = 'pointer';
    resyncBtn.textContent = 're-sync';

    const detachBtn = document.createElement('button');
    detachBtn.className = 'directive-pill';
    detachBtn.style.cursor = 'pointer';
    detachBtn.textContent = 'detach';

    reconcileBar.append(reconcileMsg, resyncBtn, detachBtn);
    bodyEl.appendChild(reconcileBar);

    const tableWrap = document.createElement('div');
    tableWrap.style.overflowX = 'auto';
    bodyEl.appendChild(tableWrap);

    const syncDataCache = () => {
      dataCache.set(id, this._toObjects(currentHeaders, currentRows));
    };

    const updateDivergenceUI = () => {
      const showDivergence = !detached && !!sourceId && diverged;
      divBadge.style.display = showDivergence ? 'inline-block' : 'none';
      reconcileBar.style.display = showDivergence ? 'flex' : 'none';

      if (sourceError) {
        reconcileMsg.textContent = sourceError;
      } else {
        reconcileMsg.textContent = 'Table diverged from source.';
      }
    };

    const emitTextMutation = (source = 'widget') => {
      const directiveLine = this._serializeDirectiveLine(id, currentParams);
      const bodyLines = this._serializeBody(currentHeaders, currentRows);
      const text = [directiveLine, ...bodyLines, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source,
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text }
      });

      syncDataCache();
    };

    const formatCell = (td, value, ri, ci) => {
      td.textContent = '';
      const num = Number(value);
      if (!Number.isNaN(num) && String(value).trim() !== '') {
        td.textContent = num.toLocaleString();
      } else {
        td.textContent = value;
      }
      td.style.background = editedCells.has(`${ri}:${ci}`) ? 'var(--warn-bg)' : '';
    };

    const renderTable = () => {
      tableWrap.innerHTML = '';

      if (currentHeaders.length === 0) {
        const empty = document.createElement('p');
        empty.style.cssText = 'padding:14px;color:var(--ink3);font-family:var(--sans);font-size:13px;';
        empty.textContent = '(empty table)';
        tableWrap.appendChild(empty);
        return;
      }

      const table = document.createElement('table');
      table.className = 'table-rendered';

      const thead = document.createElement('thead');
      const headTr = document.createElement('tr');
      for (const h of currentHeaders) {
        const th = document.createElement('th');
        th.textContent = h;
        headTr.appendChild(th);
      }
      thead.appendChild(headTr);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      currentRows.forEach((row, ri) => {
        const tr = document.createElement('tr');

        row.forEach((cell, ci) => {
          const td = document.createElement('td');
          formatCell(td, cell, ri, ci);

          if (editable) {
            td.contentEditable = 'true';

            td.addEventListener('focus', () => {
              td.textContent = currentRows[ri][ci];
              const range = document.createRange();
              range.selectNodeContents(td);
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            });

            td.addEventListener('blur', () => {
              const newVal = td.textContent.trim();
              if (newVal !== currentRows[ri][ci]) {
                currentRows[ri][ci] = newVal;
                editedCells.add(`${ri}:${ci}`);
                if (sourceId && !detached) {
                  diverged = !this._tableEqual(currentHeaders, currentRows, sourceHeaders, sourceRows);
                  updateDivergenceUI();
                }
                emitTextMutation();
              }
              formatCell(td, currentRows[ri][ci], ri, ci);
            });

            td.addEventListener('keydown', (e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                td.blur();
              }
              if (e.key === 'Tab') {
                e.preventDefault();
                td.blur();
                const next = e.shiftKey ? td.previousElementSibling : td.nextElementSibling;
                if (next) next.focus();
              }
            });
          }

          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      tableWrap.appendChild(table);
    };

    const applyDerivedState = (derived, { syncText = false } = {}) => {
      if (!derived) return false;

      sourceError = derived.error || '';
      if (derived.headers.length === 0 && derived.rows.length === 0 && !derived.error) {
        return false;
      }

      sourceHeaders = derived.headers.map((item) => item);
      sourceRows = derived.rows.map((row) => [...row]);

      if (detached) {
        updateDivergenceUI();
        return true;
      }

      if (!diverged) {
        const changed = !this._tableEqual(currentHeaders, currentRows, sourceHeaders, sourceRows);
        currentHeaders = sourceHeaders.map((item) => item);
        currentRows = sourceRows.map((row) => [...row]);
        syncDataCache();
        if (changed) {
          renderTable();
          if (syncText) emitTextMutation('table');
        }
      }

      updateDivergenceUI();
      return true;
    };

    const readDerivedSource = () => {
      if (!sourceKey || !bridge) return null;
      const state = bridge.getBlockState(sourceKey);
      return this._extractSourceTable(state, params);
    };

    const initialDerived = readDerivedSource();
    if (initialDerived && !initialDerived.error && initialDerived.headers.length > 0) {
      sourceHeaders = initialDerived.headers.map((item) => item);
      sourceRows = initialDerived.rows.map((row) => [...row]);
      currentHeaders = sourceHeaders.map((item) => item);
      currentRows = sourceRows.map((row) => [...row]);
    } else if (initialDerived?.error) {
      sourceError = initialDerived.error;
    }

    syncDataCache();

    resyncBtn.onclick = async () => {
      if (!sourceId || detached || !bridge) return;
      resyncBtn.disabled = true;
      resyncBtn.textContent = 'running...';

      try {
        await bridge.runBlock(sourceKey);
        const derived = readDerivedSource();
        if (!derived) return;
        applyDerivedState(derived, { syncText: false });
        currentHeaders = sourceHeaders.map((item) => item);
        currentRows = sourceRows.map((row) => [...row]);
        editedCells.clear();
        diverged = false;
        updateDivergenceUI();
        renderTable();
        emitTextMutation('table');
      } finally {
        resyncBtn.disabled = false;
        resyncBtn.textContent = 're-sync';
      }
    };

    detachBtn.onclick = () => {
      detached = true;
      diverged = false;
      sourceError = '';
      editedCells.clear();
      delete currentParams.source;
      delete currentParams['source-var'];
      updateDivergenceUI();
      emitTextMutation('table');
      renderTable();
      if (sourcePill) {
        sourcePill.remove();
        sourcePill = null;
      }
      tag.textContent = `::table[${id}]`;
    };

    let unsubscribe = null;
    if (sourceId && bridge) {
      unsubscribe = bridge.subscribe(() => {
        const derived = readDerivedSource();
        if (!derived) return;
        applyDerivedState(derived, { syncText: true });
      });
      container.__cleanup = unsubscribe;
    }

    renderTable();
    updateDivergenceUI();
    return container;
  }

  async query(params) {
    if (params && params.id) {
      return dataCache.get(params.id) || [];
    }
    const all = {};
    for (const [id, data] of dataCache) {
      all[id] = data;
    }
    return all;
  }

  _parseBody(body) {
    const lines = (body || []).filter((line) => line.trim().startsWith('|'));
    if (lines.length === 0) return { headers: [], rows: [] };

    const parseLine = (line) => line.split('|').slice(1, -1).map((cell) => cell.trim());
    return {
      headers: parseLine(lines[0]),
      rows: lines.slice(1).map(parseLine)
    };
  }

  _toObjects(headers, rows) {
    return rows.map((row) => {
      const obj = {};
      headers.forEach((h, i) => {
        const val = row[i] || '';
        const num = Number(val);
        obj[h.toLowerCase()] = (Number.isNaN(num) || String(val).trim() === '') ? val : num;
      });
      return obj;
    });
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::table[${id}]`;
    const paramStr = entries
      .map(([k, v]) => `${k}=${String(v).includes(' ') ? `"${v}"` : v}`)
      .join(' ');
    return `::table[${id}]{${paramStr}}`;
  }

  _serializeBody(headers, rows) {
    const fmt = (cells) => '| ' + cells.join(' | ') + ' |';
    return [fmt(headers), ...rows.map(fmt)];
  }

  _tableEqual(headersA, rowsA, headersB, rowsB) {
    return JSON.stringify(headersA) === JSON.stringify(headersB)
      && JSON.stringify(rowsA) === JSON.stringify(rowsB);
  }

  _extractSourceTable(state, params = {}) {
    if (!state) return null;

    if (state.status === 'error') {
      return { headers: [], rows: [], error: 'Source computation failed.' };
    }

    if (state.status === 'blocked') {
      return { headers: [], rows: [], error: 'Source computation is blocked by an earlier Python error.' };
    }

    if (state.status === 'manual') {
      return { headers: [], rows: [], error: 'Source computation has not been run yet.' };
    }

    const context = state.context || {};
    const preferred = params['source-var'] || params.result || 'result';
    const dataset = this._pickDataset(context, preferred);
    if (!dataset) {
      return { headers: [], rows: [], error: `Source block must export ${preferred} as a list of row objects.` };
    }

    return this._rowsFromDataset(dataset);
  }

  _pickDataset(context, preferred) {
    const candidates = [preferred, 'table_result', 'result', 'rows', 'data'];
    for (const key of candidates) {
      if (this._isRowObjectList(context[key])) return context[key];
    }

    for (const value of Object.values(context)) {
      if (this._isRowObjectList(value)) return value;
    }

    if (context && this._isHeadersRowsObject(context[preferred])) return context[preferred];
    for (const value of Object.values(context)) {
      if (this._isHeadersRowsObject(value)) return value;
    }

    return null;
  }

  _isRowObjectList(value) {
    return Array.isArray(value)
      && value.every((item) => item && typeof item === 'object' && !Array.isArray(item));
  }

  _isHeadersRowsObject(value) {
    return value
      && typeof value === 'object'
      && Array.isArray(value.headers)
      && Array.isArray(value.rows);
  }

  _rowsFromDataset(dataset) {
    if (this._isHeadersRowsObject(dataset)) {
      return {
        headers: dataset.headers.map((item) => String(item)),
        rows: dataset.rows.map((row) => row.map((cell) => String(cell)))
      };
    }

    const headers = [];
    dataset.forEach((row) => {
      for (const key of Object.keys(row)) {
        if (!headers.includes(key)) headers.push(key);
      }
    });

    const formattedHeaders = headers.map((key) => this._formatHeader(key));
    const rows = dataset.map((row) =>
      headers.map((key) => {
        const value = row[key];
        return value == null ? '' : String(value);
      })
    );

    return { headers: formattedHeaders, rows, error: null };
  }

  _formatHeader(key) {
    return String(key)
      .split('_')
      .map((part) => part ? part[0].toUpperCase() + part.slice(1) : part)
      .join(' ');
  }
}
