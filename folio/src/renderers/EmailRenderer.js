import { RendererBase } from './RendererBase.js';

/**
 * Text-native email renderer (mirrored state).
 *
 * Three modes determined by the directive id:
 *
 *   Inbox   ::email[inbox]{filter=unread priority=high}
 *           Body lines are action log entries (filed, deleted).
 *
 *   Thread  ::email[thread-q3-budget]{limit=3}
 *           Body lines are message descriptors (one per line).
 *
 *   Draft   ::email[draft]{to=sara@ex.com subject="Re: Q3"}
 *           Body lines are the message text.  Sending replaces the
 *           entire block with a single prose log line.
 *
 * All mutations flow through SyncBus.  Structural changes (send,
 * discard, file) use source='email' so the canvas rebuilds.
 * Body-only edits (typing in a draft) use source='widget' to
 * avoid rebuilding the live widget.
 */

// Mock data — stands in for a real IMAP/JMAP backend.
const MOCK_MESSAGES = [
  { id: 'msg-1', threadId: 'thread-q3-budget', from: 'sara@example.com', fromName: 'Sara Chen',
    subject: 'Q3 Hardware Budget', date: '2026-03-22T10:15', priority: 'high', unread: true,
    body: 'Hi — can you pull together the hardware spend numbers for Q3?  Finance needs them by Thursday.' },
  { id: 'msg-2', threadId: 'thread-q3-budget', from: 'finance@folio.local', fromName: 'Finance',
    subject: 'Re: Q3 Hardware Budget', date: '2026-03-22T14:30', priority: 'normal', unread: true,
    body: 'Just a heads-up: the travel reimbursement line also shows a variance.  Worth including.' },
  { id: 'msg-3', threadId: 'thread-q3-budget', from: 'sara@example.com', fromName: 'Sara Chen',
    subject: 'Re: Q3 Hardware Budget', date: '2026-03-23T09:00', priority: 'high', unread: false,
    body: 'Thanks — let me know when the numbers are ready and I will forward to the board deck team.' },
  { id: 'msg-4', threadId: 'thread-ops', from: 'ops@folio.local', fromName: 'Ops',
    subject: 'New server rack arrival', date: '2026-03-23T08:00', priority: 'normal', unread: true,
    body: 'Rack #14 arrived.  Needs to be inventoried before Wednesday.' }
];

// Module-level cache for query().
const dataCache = {
  messages: MOCK_MESSAGES
};

export class EmailRenderer extends RendererBase {
  get manifest() {
    return { type: 'email', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    if (ctx.id === 'inbox' || ctx.id.startsWith('inbox')) {
      return this._renderInbox(ctx);
    }
    if (ctx.id === 'draft' || ctx.id.startsWith('draft')) {
      return this._renderDraft(ctx);
    }
    // Everything else is a thread view.
    return this._renderThread(ctx);
  }

  async query(params) {
    let msgs = [...MOCK_MESSAGES];
    if (params) {
      if (params.filter === 'unread') msgs = msgs.filter(m => m.unread);
      if (params.priority) msgs = msgs.filter(m => m.priority === params.priority);
      if (params.threadId) msgs = msgs.filter(m => m.threadId === params.threadId);
    }
    return msgs.map(m => ({ id: m.id, from: m.from, subject: m.subject, date: m.date, priority: m.priority }));
  }

  // ── Inbox mode ────────────────────────────────────────────

  _renderInbox(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    // Filter pills
    if (params.filter) this._addPill(pills, `filter=${params.filter}`);
    if (params.priority) this._addPill(pills, `priority=${params.priority}`);

    // Filter mock data
    let msgs = [...MOCK_MESSAGES];
    if (params.filter === 'unread') msgs = msgs.filter(m => m.unread);
    if (params.priority) msgs = msgs.filter(m => m.priority === params.priority);

    // Parse existing log entries from body
    const logLines = (body || []).filter(l => l.trim().length > 0);

    // Render message list
    const list = document.createElement('div');
    list.className = 'email-list';

    msgs.forEach(msg => {
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

      // File action
      const actions = document.createElement('div');
      actions.className = 'email-item-actions';
      const fileBtn = document.createElement('button');
      fileBtn.className = 'directive-pill';
      fileBtn.style.cursor = 'pointer';
      fileBtn.textContent = 'file';
      fileBtn.onclick = () => {
        const logLine = `filed: "${msg.subject}" — ${this._fmtNow()}`;
        const newBody = [...logLines, logLine];
        logLines.push(logLine);
        this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, params, newBody, 'email');
        item.style.opacity = '0.4';
        fileBtn.disabled = true;
        fileBtn.textContent = 'filed';
        // Show log entry
        this._appendLogEntry(logArea, logLine);
      };
      actions.appendChild(fileBtn);

      item.append(top, subject, snippet, actions);
      list.appendChild(item);
    });

    bodyEl.appendChild(list);

    // Log area for filed/action entries
    const logArea = document.createElement('div');
    logArea.className = 'email-log-area';
    logLines.forEach(line => this._appendLogEntry(logArea, line));
    bodyEl.appendChild(logArea);

    return container;
  }

  // ── Thread mode ───────────────────────────────────────────

  _renderThread(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (params.limit) this._addPill(pills, `limit=${params.limit}`);

    // Parse body lines into message descriptors + log entries
    const threadMsgs = [];
    const logLines = [];

    for (const line of (body || [])) {
      const trimmed = line.trim();
      if (trimmed.startsWith('from=')) {
        threadMsgs.push(this._parseMessageLine(trimmed));
      } else if (trimmed.startsWith('sent ') || trimmed.startsWith('filed:')) {
        logLines.push(trimmed);
      }
    }

    // Enrich from mock data (match by thread id or from address)
    const limit = parseInt(params.limit) || threadMsgs.length;
    const displayed = threadMsgs.slice(-limit);

    // Conversation
    const thread = document.createElement('div');
    thread.className = 'email-thread';

    displayed.forEach(msg => {
      const mock = MOCK_MESSAGES.find(m =>
        m.from === msg.from && m.threadId === id
      );
      const card = document.createElement('div');
      card.className = 'email-message';

      const header = document.createElement('div');
      header.className = 'email-message-header';

      const sender = document.createElement('span');
      sender.className = 'email-from';
      sender.textContent = mock ? mock.fromName : msg.from;

      const date = document.createElement('span');
      date.className = 'email-date';
      date.textContent = this._fmtTime(msg.date);

      header.append(sender, date);

      const msgBody = document.createElement('div');
      msgBody.className = 'email-message-body';
      msgBody.textContent = mock ? mock.body : `(message from ${msg.from})`;

      card.append(header, msgBody);
      thread.appendChild(card);
    });

    bodyEl.appendChild(thread);

    // Log entries
    if (logLines.length > 0) {
      const logArea = document.createElement('div');
      logArea.className = 'email-log-area';
      logLines.forEach(l => this._appendLogEntry(logArea, l));
      bodyEl.appendChild(logArea);
    }

    // Reply bar
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

      // Mock send — 500ms delay then success
      setTimeout(() => {
        // Determine recipients from thread messages
        const recipients = [...new Set(threadMsgs.map(m => m.from))];
        const recipientStr = recipients.join(', ');
        const subj = displayed[0] ? displayed[0].subject : id;

        // Append sent log line to the thread body
        const sentLog = `sent reply to ${recipientStr} — "${subj}" — ${this._fmtNow()}`;
        const newBody = [...(body || []), sentLog];

        // Use source 'email' so the canvas rebuilds to show the new log
        this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, params, newBody, 'email');

        replyInput.value = '';
        replyStatus.textContent = '';
        sendBtn.disabled = false;

        // Show log entry inline immediately
        let logArea = bodyEl.querySelector('.email-log-area');
        if (!logArea) {
          logArea = document.createElement('div');
          logArea.className = 'email-log-area';
          bodyEl.insertBefore(logArea, replyBar);
        }
        this._appendLogEntry(logArea, sentLog);
      }, 500);
    };

    replyActions.append(replyStatus, sendBtn);
    replyBar.append(replyInput, replyActions);
    bodyEl.appendChild(replyBar);

    return container;
  }

  // ── Draft / Compose mode ──────────────────────────────────

  _renderDraft(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const container = this.createWidgetContainer(`::email[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    this._addPill(pills, 'draft', true);

    const compose = document.createElement('div');
    compose.className = 'email-compose';

    // To field
    const toRow = this._makeField('To', params.to || '');
    compose.appendChild(toRow.row);

    // Subject field
    const subjRow = this._makeField('Subject', params.subject || '');
    compose.appendChild(subjRow.row);

    // Body textarea
    const textarea = document.createElement('textarea');
    textarea.className = 'email-compose-body';
    textarea.value = (body || []).join('\n');
    textarea.rows = 6;
    textarea.placeholder = 'Compose your message...';
    compose.appendChild(textarea);

    // Persist draft body to text on blur (crash-safe)
    textarea.addEventListener('blur', () => {
      const bodyLines = textarea.value.split('\n');
      const newParams = { ...params, to: toRow.input.value, subject: subjRow.input.value };
      this._emitBlockUpdate(syncBus, lineStart, lineEnd, id, newParams, bodyLines, 'widget');
    });

    // Actions
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

    // Send action
    sendBtn.onclick = () => {
      const to = toRow.input.value.trim();
      const subj = subjRow.input.value.trim();
      if (!to) { status.textContent = 'No recipient'; return; }

      sendBtn.disabled = true;
      discardBtn.disabled = true;
      status.textContent = 'sending...';

      // Mock send — 500ms delay
      setTimeout(() => {
        // Replace entire draft block with a single sent log line.
        const sentLine = `sent to ${to} — "${subj}" — ${this._fmtNow()}`;
        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'email',
          type: 'replace',
          payload: { targetDocId: 'current', lineStart, lineEnd, text: sentLine }
        });
      }, 500);
    };

    // Discard action
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

  // ── Helpers ───────────────────────────────────────────────

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

  _parseMessageLine(line) {
    // Parse "from=x subject=y date=z" into object
    const obj = {};
    const re = /([\w-]+)=(?:"([^"]*)"|(\S+))/g;
    let m;
    while ((m = re.exec(line)) !== null) {
      obj[m[1]] = m[2] !== undefined ? m[2] : m[3];
    }
    return obj;
  }

  _fmtTime(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
    const paramStr = entries.map(([k, v]) =>
      v.includes(' ') ? `${k}="${v}"` : `${k}=${v}`
    ).join(' ');
    return `::email[${id}]{${paramStr}}`;
  }
}
