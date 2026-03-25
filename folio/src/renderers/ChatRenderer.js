import { RendererBase } from './RendererBase.js';

/**
 * Text-native chat renderer (mirrored state).
 *
 * A chat embed renders a slice of a channel inline:
 *
 *   ::chat[#design-team]{limit=5}
 *   user=sara.chen text="Has anyone reviewed the Q3 mockups?" time=09:15
 *   user=rohan.m text="Looking at them now" time=09:18
 *   posted to #design-team: "Will update today" — 14:47
 *   ::end
 *
 * Message lines start with user=.  Everything else is a log entry
 * (posted, promoted).
 *
 * Actions:
 *   Post — compose bar sends to channel + appends log line
 *   Promote — one-click to write a message as prose below the embed
 */

const chatCache = new Map();

export class ChatRenderer extends RendererBase {
  get manifest() {
    return { type: 'chat', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const channel = id;
    const limit = parseInt(params.limit) || 20;

    // Parse body into messages and log entries.
    const messages = [];
    const logLines = [];
    for (const line of (body || [])) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith('user=')) {
        messages.push(this._parseKV(trimmed));
      } else {
        logLines.push(trimmed);
      }
    }

    chatCache.set(id, messages.map(m => ({ ...m })));

    const displayed = messages.slice(-limit);

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::chat[${channel}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    this._pill(pills, channel);
    if (params.limit) this._pill(pills, `limit=${params.limit}`);
    if (params.since) this._pill(pills, `since=${params.since}`);

    // ── message list ────────────────────────────────────────
    const msgList = document.createElement('div');
    msgList.className = 'chat-messages';

    displayed.forEach((msg, idx) => {
      const row = document.createElement('div');
      row.className = 'chat-message';

      const header = document.createElement('div');
      header.className = 'chat-msg-header';

      const user = document.createElement('span');
      user.className = 'chat-user';
      user.textContent = msg.user || 'unknown';

      const time = document.createElement('span');
      time.className = 'chat-time';
      time.textContent = msg.time || '';

      header.append(user, time);

      const text = document.createElement('div');
      text.className = 'chat-msg-text';
      text.textContent = msg.text || '';

      // Promote button
      const promoteBtn = document.createElement('button');
      promoteBtn.className = 'directive-pill chat-promote';
      promoteBtn.textContent = 'promote';
      promoteBtn.title = 'Write this message to the document as prose';
      promoteBtn.onclick = () => {
        const promoted = `[${channel}] ${msg.user}: "${msg.text}" — ${msg.time}`;
        const logLine = `promoted: ${msg.user} "${(msg.text || '').slice(0, 40)}..." — ${this._fmtNow()}`;
        logLines.push(logLine);

        // Rebuild body with new log line
        const msgLines = messages.map(m => this._serializeKV(m));
        const allBody = [...msgLines, ...logLines];
        const directiveLine = this._serializeDirectiveLine(id, params);
        // Append the promoted text as prose AFTER the ::end
        const blockText = [directiveLine, ...allBody, '::end', '', promoted].join('\n');

        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'chat',
          type: 'replace',
          payload: { targetDocId: 'current', lineStart, lineEnd, text: blockText }
        });

        promoteBtn.textContent = 'promoted';
        promoteBtn.disabled = true;
      };

      row.append(header, text, promoteBtn);
      msgList.appendChild(row);
    });

    bodyEl.appendChild(msgList);

    // ── log area ────────────────────────────────────────────
    const logArea = document.createElement('div');
    logArea.className = 'chat-log-area';
    logLines.forEach(l => {
      const entry = document.createElement('div');
      entry.className = 'chat-log';
      entry.textContent = l;
      logArea.appendChild(entry);
    });
    bodyEl.appendChild(logArea);

    // ── compose bar ─────────────────────────────────────────
    const composeBar = document.createElement('div');
    composeBar.className = 'chat-compose';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'chat-input';
    input.placeholder = `Message ${channel}...`;

    const sendBtn = document.createElement('button');
    sendBtn.className = 'email-btn-send';
    sendBtn.textContent = 'Send';

    sendBtn.onclick = () => {
      const text = input.value.trim();
      if (!text) return;

      const now = this._fmtNow();
      const logLine = `posted to ${channel}: "${text}" — ${now}`;
      logLines.push(logLine);

      // Rebuild body
      const msgLines = messages.map(m => this._serializeKV(m));
      const allBody = [...msgLines, ...logLines];
      const directiveLine = this._serializeDirectiveLine(id, params);
      const blockText = [directiveLine, ...allBody, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'chat',
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text: blockText }
      });

      // Show log entry
      const entry = document.createElement('div');
      entry.className = 'chat-log';
      entry.textContent = logLine;
      logArea.appendChild(entry);

      input.value = '';
    };

    input.onkeydown = (e) => { if (e.key === 'Enter') sendBtn.onclick(); };

    composeBar.append(input, sendBtn);
    bodyEl.appendChild(composeBar);

    return container;
  }

  async query(params) {
    if (params && params.id) return chatCache.get(params.id) || [];
    const all = {};
    for (const [id, data] of chatCache) all[id] = data;
    return all;
  }

  // ── parsing / serialisation ───────────────────────────────

  _parseKV(line) {
    const obj = {};
    const re = /([\w-]+)=(?:"([^"]*)"|(\S+))/g;
    let m;
    while ((m = re.exec(line)) !== null) {
      obj[m[1]] = m[2] !== undefined ? m[2] : m[3];
    }
    return obj;
  }

  _serializeKV(obj) {
    return Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null);
    if (entries.length === 0) return `::chat[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::chat[${id}]{${paramStr}}`;
  }

  _pill(container, text) {
    const el = document.createElement('span');
    el.className = 'directive-pill';
    el.textContent = text;
    container.appendChild(el);
  }

  _fmtNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
