import { RendererBase } from './RendererBase.js';

/**
 * Text-native contact renderer (owned state).
 *
 * A contact is a block directive with key=value fields in the body:
 *
 *   ::contact[sara.chen]
 *   name  = Sara Chen
 *   email = sara@example.com
 *   role  = Head of Product
 *   org   = Example Ltd
 *   phone = +44 7700 900123
 *   notes = Met at ProductCon 2025.
 *   ::end
 *
 * Renders as a card with editable fields.  Edits write back to
 * the document text.  Actions (email, call) append log entries.
 */

const contactCache = new Map();

export class ContactRenderer extends RendererBase {
  get manifest() {
    return { type: 'contact', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const fields = this._parseFields(body || []);
    const logLines = this._parseLog(body || []);

    contactCache.set(id, { id, ...fields });

    const container = this.createWidgetContainer(`::contact[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    // Edit toggle
    let editing = false;
    const editBtn = document.createElement('button');
    editBtn.className = 'directive-pill active';
    editBtn.style.cursor = 'pointer';
    editBtn.textContent = 'edit';
    pills.appendChild(editBtn);

    // Card container
    const card = document.createElement('div');
    card.className = 'contact-card';

    // Action buttons
    const actions = document.createElement('div');
    actions.className = 'contact-actions';

    if (fields.email) {
      const emailBtn = document.createElement('button');
      emailBtn.className = 'directive-pill';
      emailBtn.style.cursor = 'pointer';
      emailBtn.textContent = 'email';
      emailBtn.onclick = () => {
        const logLine = `emailed ${fields.email} — ${this._fmtNow()}`;
        logLines.push(logLine);
        this._emitUpdate(ctx, fields, logLines);
        this._appendLog(logArea, logLine);
      };
      actions.appendChild(emailBtn);
    }
    if (fields.phone) {
      const callBtn = document.createElement('button');
      callBtn.className = 'directive-pill';
      callBtn.style.cursor = 'pointer';
      callBtn.textContent = 'call';
      callBtn.onclick = () => {
        const logLine = `called ${fields.phone} — ${this._fmtNow()}`;
        logLines.push(logLine);
        this._emitUpdate(ctx, fields, logLines);
        this._appendLog(logArea, logLine);
      };
      actions.appendChild(callBtn);
    }

    // Render card view
    const renderCard = () => {
      card.innerHTML = '';
      if (editing) {
        this._renderEditMode(card, fields, () => {
          editing = false;
          editBtn.textContent = 'edit';
          contactCache.set(id, { id, ...fields });
          this._emitUpdate(ctx, fields, logLines);
          renderCard();
        });
        editBtn.textContent = 'done';
      } else {
        this._renderReadMode(card, fields);
      }
    };

    editBtn.onclick = () => {
      editing = !editing;
      renderCard();
    };

    bodyEl.appendChild(card);
    bodyEl.appendChild(actions);

    // Log area
    const logArea = document.createElement('div');
    logArea.className = 'contact-log-area';
    logLines.forEach(l => this._appendLog(logArea, l));
    bodyEl.appendChild(logArea);

    renderCard();
    return container;
  }

  _renderReadMode(card, fields) {
    const DISPLAY_FIELDS = ['name', 'email', 'role', 'org', 'phone', 'notes'];
    for (const key of DISPLAY_FIELDS) {
      if (!fields[key]) continue;
      const row = document.createElement('div');
      row.className = 'contact-field';
      const label = document.createElement('span');
      label.className = 'contact-label';
      label.textContent = key;
      const value = document.createElement('span');
      value.className = 'contact-value';
      value.textContent = fields[key];
      if (key === 'name') value.style.fontWeight = '600';
      if (key === 'email') { value.style.color = 'var(--accent)'; }
      row.append(label, value);
      card.appendChild(row);
    }
  }

  _renderEditMode(card, fields, onDone) {
    const EDIT_FIELDS = ['name', 'email', 'role', 'org', 'phone', 'notes'];
    const inputs = {};

    for (const key of EDIT_FIELDS) {
      const row = document.createElement('div');
      row.className = 'contact-field';
      const label = document.createElement('label');
      label.className = 'contact-label';
      label.textContent = key;
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'contact-input';
      input.value = fields[key] || '';
      input.onkeydown = (e) => { if (e.key === 'Enter') { save(); } };
      inputs[key] = input;
      row.append(label, input);
      card.appendChild(row);
    }

    const save = () => {
      for (const [key, input] of Object.entries(inputs)) {
        const val = input.value.trim();
        if (val) fields[key] = val;
        else delete fields[key];
      }
      onDone();
    };
  }

  async query(params) {
    if (params && params.id) return contactCache.get(params.id) || null;
    if (params && params.email) {
      for (const [, c] of contactCache) {
        if (c.email === params.email) return c;
      }
      return null;
    }
    const all = {};
    for (const [id, data] of contactCache) all[id] = data;
    return all;
  }

  _parseFields(body) {
    const fields = {};
    for (const line of body) {
      const m = line.match(/^(\w+)\s*=\s*(.+)$/);
      if (m) fields[m[1]] = m[2].trim();
    }
    return fields;
  }

  _parseLog(body) {
    const logs = [];
    for (const line of body) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.match(/^\w+\s*=/)) {
        logs.push(trimmed);
      }
    }
    return logs;
  }

  _emitUpdate(ctx, fields, logLines) {
    const { id, syncBus, lineStart, lineEnd } = ctx;
    const fieldLines = Object.entries(fields).map(([k, v]) => `${k} = ${v}`);
    const allBody = [...fieldLines, ...logLines];
    const text = [`::contact[${id}]`, ...allBody, '::end'].join('\n');
    syncBus.emit({
      timestamp: new Date().toISOString(),
      source: 'contact',
      type: 'replace',
      payload: { targetDocId: 'current', lineStart, lineEnd, text }
    });
  }

  _appendLog(area, text) {
    const entry = document.createElement('div');
    entry.className = 'contact-log';
    entry.textContent = text;
    area.appendChild(entry);
  }

  _fmtNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
