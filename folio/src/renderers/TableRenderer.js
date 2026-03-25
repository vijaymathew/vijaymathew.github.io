import { RendererBase } from './RendererBase.js';

/**
 * Text-native table renderer with divergence protocol.
 *
 * Table data lives in the document as pipe-delimited text:
 *
 *   ::table[budget]{source=analysis editable=true}
 *   | Name | Q1 | Q2 |
 *   | North | 3500 | 4200 |
 *   ::end
 *
 * The first body line is the header row; the rest are data rows.
 * Inline cell edits write back to the document text via SyncBus.
 *
 * Divergence protocol (when source= links to a ::py block):
 *   Synchronised — table matches source output, no indicator.
 *   Diverged     — user edited cells, "edited" badge + reconcile bar.
 *   Detached     — user broke the link, source= removed from text.
 */

// Module-level data cache so query() can return parsed rows
// without needing document context.  Keyed by table id.
const dataCache = new Map();

export class TableRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'table',
      capabilities: ['query', 'mutate']
    };
  }

  // ── render ────────────────────────────────────────────────

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const { headers, rows } = this._parseBody(body || []);
    const source = params.source || null;
    const editable = params.editable === 'true';

    // Cache for query().
    dataCache.set(id, this._toObjects(headers, rows));

    // Snapshot of the "source truth" before any user edits.
    // Re-sync restores this snapshot.  A full implementation would
    // re-evaluate the linked ::py block instead.
    const sourceRows = rows.map(r => [...r]);

    // ── mutable state ───────────────────────────────────────
    let currentRows = rows;
    let currentParams = { ...params };
    let diverged = false;
    let detached = !source;
    const editedCells = new Set();

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::table[${id}]`);
    const headerEl = container.querySelector('.directive-header');
    const tag = headerEl.querySelector('.directive-tag');
    const pills = headerEl.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    // Source pill
    let sourcePill = null;
    if (source) {
      sourcePill = document.createElement('span');
      sourcePill.className = 'directive-pill';
      sourcePill.textContent = `source=${source}`;
      pills.appendChild(sourcePill);
    }

    // Editable pill
    if (editable) {
      const editPill = document.createElement('span');
      editPill.className = 'directive-pill';
      editPill.textContent = 'editable';
      pills.appendChild(editPill);
    }

    // Divergence badge (between tag and pills)
    const divBadge = document.createElement('span');
    divBadge.className = 'badge badge-warn';
    divBadge.textContent = 'edited';
    divBadge.style.display = 'none';
    divBadge.style.marginLeft = '8px';
    tag.after(divBadge);

    // ── reconcile bar ───────────────────────────────────────
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

    // ── table element ───────────────────────────────────────
    const tableWrap = document.createElement('div');
    tableWrap.style.overflowX = 'auto';
    bodyEl.appendChild(tableWrap);

    // ── state helpers ───────────────────────────────────────

    const updateDivergenceUI = () => {
      const showDivergence = !detached && source && diverged;
      divBadge.style.display = showDivergence ? 'inline-block' : 'none';
      reconcileBar.style.display = showDivergence ? 'flex' : 'none';
    };

    const emitTextMutation = () => {
      const directiveLine = this._serializeDirectiveLine(id, currentParams);
      const bodyLines = this._serializeBody(headers, currentRows);
      const text = [directiveLine, ...bodyLines, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'widget',
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text }
      });

      dataCache.set(id, this._toObjects(headers, currentRows));
    };

    // ── cell display formatting ─────────────────────────────

    const formatCell = (td, value, ri, ci) => {
      td.textContent = '';
      const num = Number(value);
      if (!isNaN(num) && value.trim() !== '') {
        td.textContent = num.toLocaleString();
      } else {
        td.textContent = value;
      }
      // Highlight edited cells
      td.style.background = editedCells.has(`${ri}:${ci}`)
        ? 'var(--warn-bg)' : '';
    };

    // ── build table DOM ─────────────────────────────────────

    const renderTable = () => {
      tableWrap.innerHTML = '';

      if (headers.length === 0) {
        const empty = document.createElement('p');
        empty.style.cssText = 'padding:14px;color:var(--ink3);font-family:var(--sans);font-size:13px;';
        empty.textContent = '(empty table)';
        tableWrap.appendChild(empty);
        return;
      }

      const table = document.createElement('table');
      table.className = 'table-rendered';

      // Header row
      const thead = document.createElement('thead');
      const headTr = document.createElement('tr');
      for (const h of headers) {
        const th = document.createElement('th');
        th.textContent = h;
        headTr.appendChild(th);
      }
      thead.appendChild(headTr);
      table.appendChild(thead);

      // Data rows
      const tbody = document.createElement('tbody');
      currentRows.forEach((row, ri) => {
        const tr = document.createElement('tr');

        row.forEach((cell, ci) => {
          const td = document.createElement('td');
          formatCell(td, cell, ri, ci);

          if (editable) {
            td.contentEditable = 'true';

            td.addEventListener('focus', () => {
              // Show raw value for editing
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
                if (source && !detached) {
                  diverged = true;
                  updateDivergenceUI();
                }
                emitTextMutation();
              }
              formatCell(td, currentRows[ri][ci], ri, ci);
            });

            td.addEventListener('keydown', (e) => {
              if (e.key === 'Enter') { e.preventDefault(); td.blur(); }
              if (e.key === 'Tab') {
                e.preventDefault();
                td.blur();
                // Move to next cell
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

    // ── reconcile actions ───────────────────────────────────

    resyncBtn.onclick = () => {
      // Restore to source snapshot, discard user edits.
      currentRows = sourceRows.map(r => [...r]);
      editedCells.clear();
      diverged = false;
      updateDivergenceUI();
      emitTextMutation();
      renderTable();
    };

    detachBtn.onclick = () => {
      // Break the source link.
      detached = true;
      diverged = false;
      editedCells.clear();
      delete currentParams.source;
      updateDivergenceUI();
      emitTextMutation();
      renderTable();
      if (sourcePill) { sourcePill.remove(); sourcePill = null; }
      tag.textContent = `::table[${id}]`;
    };

    // ── initial render ──────────────────────────────────────
    renderTable();
    updateDivergenceUI();
    return container;
  }

  // ── query interface ───────────────────────────────────────

  async query(params) {
    if (params && params.id) {
      return dataCache.get(params.id) || [];
    }
    // No id — return all cached tables.
    const all = {};
    for (const [id, data] of dataCache) {
      all[id] = data;
    }
    return all;
  }

  // ── text parsing ──────────────────────────────────────────

  _parseBody(body) {
    const lines = (body || []).filter(l => l.trim().startsWith('|'));
    if (lines.length === 0) return { headers: [], rows: [] };

    const parseLine = line =>
      line.split('|').slice(1, -1).map(c => c.trim());

    return {
      headers: parseLine(lines[0]),
      rows: lines.slice(1).map(parseLine)
    };
  }

  _toObjects(headers, rows) {
    return rows.map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        const val = row[i] || '';
        const num = Number(val);
        obj[h.toLowerCase()] = (isNaN(num) || val.trim() === '') ? val : num;
      });
      return obj;
    });
  }

  // ── text serialisation ────────────────────────────────────

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null);
    if (entries.length === 0) return `::table[${id}]`;
    const paramStr = entries.map(([k, v]) => `${k}=${v}`).join(' ');
    return `::table[${id}]{${paramStr}}`;
  }

  _serializeBody(headers, rows) {
    const fmt = cells => '| ' + cells.join(' | ') + ' |';
    return [fmt(headers), ...rows.map(fmt)];
  }
}
