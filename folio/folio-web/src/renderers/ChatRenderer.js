import { RendererBase } from './RendererBase.js';
import { MockChatBackend } from '../backends/MockChatBackend.js';

/**
 * Text-native chat renderer (mirrored state).
 *
 * The backend owns channel messages. The document owns only:
 * - projection parameters on the directive line
 * - user action logs in the directive body
 * - any prose promoted out of the channel into the document
 */
export class ChatRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'chat',
      capabilities: ['query', 'mutate'],
      trust: 'mirrored',
      grants: { render: 'chat.read', query: 'chat.read' }
    };
  }

  async render(ctx) {
    await this._ensureChannelData(ctx);
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const channel = id;
    const messages = MockChatBackend.listMessages(channel, params);
    const logLines = (body || []).map((line) => line.trim()).filter(Boolean);

    const container = this.createWidgetContainer(`::chat[${channel}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    this._pill(pills, channel);
    if (params.limit) this._pill(pills, `limit=${params.limit}`);
    if (params.since) this._pill(pills, `since=${params.since}`);

    const msgList = document.createElement('div');
    msgList.className = 'chat-messages';

    if (messages.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'chat-log';
      empty.textContent = `No messages found for ${channel}.`;
      bodyEl.appendChild(empty);
    }

    messages.forEach((msg) => {
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

      const promoteBtn = document.createElement('button');
      promoteBtn.className = 'directive-pill chat-promote';
      promoteBtn.textContent = 'promote';
      promoteBtn.title = 'Write this message to the document as prose';
      promoteBtn.onclick = () => {
        const promoted = `[${channel}] ${msg.user}: "${msg.text}" — ${msg.time}`;
        const logLine = `promoted from ${channel}: "${(msg.text || '').slice(0, 48)}" — ${this._fmtNow()}`;
        const nextBody = [...logLines, logLine];
        const directiveLine = this._serializeDirectiveLine(id, params);
        const blockText = [directiveLine, ...nextBody, '::end', '', promoted].join('\n');

        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'chat',
          type: 'replace',
          payload: { targetDocId: 'current', lineStart, lineEnd, text: blockText }
        });
      };

      row.append(header, text, promoteBtn);
      msgList.appendChild(row);
    });

    bodyEl.appendChild(msgList);
    this._appendLogArea(bodyEl, logLines);

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

      const sent = MockChatBackend.postMessage(channel, text);
      const logLine = `posted to ${channel}: "${sent.text}" — ${sent.time}`;
      const nextBody = [...logLines, logLine];
      const directiveLine = this._serializeDirectiveLine(id, params);
      const blockText = [directiveLine, ...nextBody, '::end'].join('\n');

      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'chat',
        type: 'replace',
        payload: { targetDocId: 'current', lineStart, lineEnd, text: blockText }
      });
    };

    input.onkeydown = (e) => {
      if (e.key === 'Enter') sendBtn.onclick();
    };

    composeBar.append(input, sendBtn);
    bodyEl.appendChild(composeBar);

    return container;
  }

  async _ensureChannelData(ctx) {
    const existing = MockChatBackend.listMessages(ctx.id, ctx.params);
    if (existing.length > 0) return;

    const simulation = ctx.app?.simulation;
    if (!simulation || typeof simulation.generateChannel !== 'function') return;
    const status = simulation.getClientStatus?.() || {};
    if (status.ready === false) return;

    ctx.app?.setStatus?.(`Generating simulated chat for ${ctx.id}...`);
    try {
      const result = await simulation.generateChannel(ctx.id);
      if (result?.status === 'generated') {
        ctx.app?.setStatus?.(`Generated simulated chat for ${ctx.id}.`);
      }
    } catch (error) {
      console.error('[ChatRenderer] Failed to generate mirrored chat:', error);
    }
  }

  async query(params = {}) {
    const channel = params.id || params.channel;
    if (channel) return MockChatBackend.listMessages(channel, params);

    const grouped = {};
    for (const item of MockChatBackend.queryAll()) {
      if (!grouped[item.channel]) grouped[item.channel] = [];
      grouped[item.channel].push(item);
    }
    return grouped;
  }

  _appendLogArea(bodyEl, logLines) {
    if (logLines.length === 0) return;

    const logArea = document.createElement('div');
    logArea.className = 'chat-log-area';
    logLines.forEach((line) => {
      const entry = document.createElement('div');
      entry.className = 'chat-log';
      entry.textContent = line;
      logArea.appendChild(entry);
    });
    bodyEl.appendChild(logArea);
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
