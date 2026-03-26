import { RendererBase } from './RendererBase.js';
import { MockEmailBackend } from '../backends/MockEmailBackend.js';

/**
 * Text-native email renderer (mirrored state).
 *
 * The backend owns messages and threads. The document owns:
 * - inbox/thread/draft projection parameters
 * - draft text before send
 * - journal lines for filed/sent actions
 */
export class EmailRenderer extends RendererBase {
  get manifest() {
    return { type: 'email', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    if (ctx.id === 'inbox' || ctx.id.startsWith('inbox')) return this._renderInbox(ctx);
    if (ctx.id === 'draft' || ctx.id.startsWith('draft')) return this._renderDraft(ctx);
    return this._renderThread(ctx);
  }

  async query(params) {
    const threadId = params?.threadId || params?.id;
    if (threadId) return MockEmailBackend.queryThread(threadId, params);

    const grouped = {};
    for (const message of MockEmailBackend.queryAll(params)) {
      if (!grouped[message.threadId]) grouped[message.threadId] = [];
      grouped[message.threadId].push(message);
    }
    return grouped;
  }

  _renderInbox(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const messages = MockEmailBackend.queryInbox(params);
    const logLines = (body || []).map(line => line.trim()).filter(Boolean);

    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (params.filter) this._addPill(pills, `filter=${params.filter}`);
    if (params.priority) this._addPill(pills, `priority=${params.priority}`);

    const list = document.createElement('div');
    list.className = 'email-list';

    messages.forEach((msg) => {
      const item = document.createElement('div');
      item.className = 'email-item' + (msg.unread ? ' unread' : '');

      const top = document.createElement('div');
      top.className = 'email-item-top';

      const from = document.createElement('span');
      from.className = 'email-from';
      from.textContent = msg.fromName;
      top.appendChild(from);

      const meta = document.createElement('span');
      meta.className = 'email-meta';
      const date = document.createElement('span');
      date.className = 'email-date';
      date.textContent = this._fmtTime(msg.date);
      meta.appendChild(date);
      if (msg.priority === 'high') {
        const badge = document.createElement('span');
        badge.className = 'badge badge-warn';
        badge.textContent = 'high';
        meta.appendChild(badge);
      }
      top.appendChild(meta);

      const subject = document.createElement('div');
      subject.className = 'email-subject';
      subject.textContent = msg.subject;

      const snippet = document.createElement('div');
      snippet.className = 'email-snippet';
      snippet.textContent = msg.body.length > 80 ? msg.body.slice(0, 80) + '...' : msg.body;

      const actions = document.createElement('div');
      actions.className = 'email-item-actions';
      const fileBtn = document.createElement('button');
      fileBtn.className = 'directive-pill';
      fileBtn.style.cursor = 'pointer';
      fileBtn.textContent = 'file';
      fileBtn.onclick = () => {
        const filed = MockEmailBackend.fileMessage(msg.id);
        if (!filed) return;
        const logLine = `filed: "${msg.subject}" — ${this._fmtNow()}`;
        const nextBody = [...logLines, logLine];
        this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, params, nextBody, 'email');
      };
      actions.appendChild(fileBtn);

      item.append(top, subject, snippet, actions);
      list.appendChild(item);
    });

    bodyEl.appendChild(list);
    this._appendLogArea(bodyEl, logLines);
    return container;
  }

  _renderThread(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const messages = MockEmailBackend.queryThread(id, params);
    const logLines = (body || []).map(line => line.trim()).filter(Boolean);

    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (params.limit) this._addPill(pills, `limit=${params.limit}`);

    const thread = document.createElement('div');
    thread.className = 'email-thread';

    messages.forEach((msg) => {
      const card = document.createElement('div');
      card.className = 'email-message';

      const header = document.createElement('div');
      header.className = 'email-message-header';

      const sender = document.createElement('span');
      sender.className = 'email-from';
      sender.textContent = msg.fromName;

      const date = document.createElement('span');
      date.className = 'email-date';
      date.textContent = this._fmtTime(msg.date);

      header.append(sender, date);

      const msgBody = document.createElement('div');
      msgBody.className = 'email-message-body';
      msgBody.textContent = msg.body;

      card.append(header, msgBody);
      thread.appendChild(card);
    });

    bodyEl.appendChild(thread);
    this._appendLogArea(bodyEl, logLines);

    const replyBar = document.createElement('div');
    replyBar.className = 'email-reply-bar';

    const replyInput = document.createElement('textarea');
    replyInput.className = 'email-compose-body';
    replyInput.placeholder = 'Write a reply...';
    replyInput.rows = 3;

    const replyActions = document.createElement('div');
    replyActions.className = 'email-compose-actions';

    const sendBtn = document.createElement('button');
    sendBtn.className = 'email-btn-send';
    sendBtn.textContent = 'Send';

    const replyStatus = document.createElement('span');
    replyStatus.className = 'email-status';

    sendBtn.onclick = () => {
      const text = replyInput.value.trim();
      if (!text) return;

      sendBtn.disabled = true;
      replyStatus.textContent = 'sending...';

      setTimeout(() => {
        const reply = MockEmailBackend.sendReply(id, text);
        const sentLog = `sent reply to ${reply.subject} thread — "${reply.subject}" — ${this._fmtNow()}`;
        const nextBody = [...logLines, sentLog];
        this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, params, nextBody, 'email');
      }, 300);
    };

    replyActions.append(replyStatus, sendBtn);
    replyBar.append(replyInput, replyActions);
    bodyEl.appendChild(replyBar);

    return container;
  }

  _renderDraft(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    this._addPill(pills, 'draft', true);

    const compose = document.createElement('div');
    compose.className = 'email-compose';

    const toRow = this._makeField('To', params.to || '');
    compose.appendChild(toRow.row);

    const subjRow = this._makeField('Subject', params.subject || '');
    compose.appendChild(subjRow.row);

    const textarea = document.createElement('textarea');
    textarea.className = 'email-compose-body';
    textarea.value = (body || []).join('\n');
    textarea.rows = 6;
    textarea.placeholder = 'Compose your message...';
    compose.appendChild(textarea);

    textarea.addEventListener('blur', () => {
      const bodyLines = textarea.value.split('\n');
      const nextParams = { ...params, to: toRow.input.value, subject: subjRow.input.value };
      this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, nextParams, bodyLines, 'widget');
    });

    const actions = document.createElement('div');
    actions.className = 'email-compose-actions';

    const status = document.createElement('span');
    status.className = 'email-status';

    const discardBtn = document.createElement('button');
    discardBtn.className = 'directive-pill';
    discardBtn.style.cursor = 'pointer';
    discardBtn.textContent = 'Discard';

    const sendBtn = document.createElement('button');
    sendBtn.className = 'email-btn-send';
    sendBtn.textContent = 'Send';

    sendBtn.onclick = () => {
      const to = toRow.input.value.trim();
      const subj = subjRow.input.value.trim();
      if (!to) {
        status.textContent = 'No recipient';
        return;
      }

      sendBtn.disabled = true;
      discardBtn.disabled = true;
      status.textContent = 'sending...';

      setTimeout(() => {
        const sentLine = `sent to ${to} — "${subj}" — ${this._fmtNow()}`;
        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'email',
          type: 'replace',
          payload: { targetDocId: 'current', lineStart, lineEnd, text: sentLine }
        });
      }, 300);
    };

    discardBtn.onclick = () => {
      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'email',
        type: 'delete',
        payload: { targetDocId: 'current', lineStart, lineEnd }
      });
    };

    actions.append(status, discardBtn, sendBtn);
    compose.appendChild(actions);
    bodyEl.appendChild(compose);

    return container;
  }

  _appendLogArea(bodyEl, logLines) {
    if (logLines.length === 0) return;
    const logArea = document.createElement('div');
    logArea.className = 'email-log-area';
    logLines.forEach((line) => this._appendLogEntry(logArea, line));
    bodyEl.appendChild(logArea);
  }

  _addPill(container, text, active = false) {
    const pill = document.createElement('span');
    pill.className = 'directive-pill' + (active ? ' active' : '');
    pill.textContent = text;
    container.appendChild(pill);
  }

  _makeField(label, value) {
    const row = document.createElement('div');
    row.className = 'email-field';
    const lbl = document.createElement('label');
    lbl.textContent = label;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    row.append(lbl, input);
    return { row, input };
  }

  _appendLogEntry(container, text) {
    const entry = document.createElement('div');
    entry.className = 'email-log';
    entry.textContent = text;
    container.appendChild(entry);
  }

  _fmtTime(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  _fmtNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  _emitBlockUpdate(syncBus, lineStart, lineEnd, id, params, bodyLines, source) {
    const directiveLine = this._serializeDirectiveLine(id, params);
    const text = [directiveLine, ...bodyLines, '::end'].join('\n');
    syncBus.emit({
      timestamp: new Date().toISOString(),
      source,
      type: 'replace',
      payload: { targetDocId: 'current', lineStart, lineEnd, text }
    });
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::email[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::email[${id}]{${paramStr}}`;
  }
}
