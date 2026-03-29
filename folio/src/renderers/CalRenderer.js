import { RendererBase } from './RendererBase.js';
import { MockCalBackend } from '../backends/MockCalBackend.js';

/**
 * Text-native calendar renderer (mirrored state).
 *
 * The backend owns the events. The document owns only:
 * - the projection parameters on the directive line
 * - user action logs and sync annotations in the body
 */
export class CalRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'cal',
      capabilities: ['query', 'mutate'],
      trust: 'mirrored',
      grants: { render: 'cal.read', query: 'cal.read' }
    };
  }

  async render(ctx) {
    await this._ensureCalendarData(ctx);
    const { id, params, body } = ctx;
    const logLines = (body || []).map(line => line.trim()).filter(Boolean);
    const events = MockCalBackend.listEvents(id, params);

    const container = this.createWidgetContainer(`::cal[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (params.view) this._pill(pills, params.view);

    const list = document.createElement('div');
    list.className = 'cal-list';

    if (events.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'cal-log';
      empty.textContent = `No events found for calendar ${id}.`;
      bodyEl.appendChild(empty);
    }

    events.forEach((evt) => {
      const row = document.createElement('div');
      row.className = 'cal-event';

      const time = document.createElement('span');
      time.className = 'cal-time';
      time.textContent = evt.time || '';

      const title = document.createElement('span');
      title.className = 'cal-title';
      title.textContent = evt.title || '';

      const meta = document.createElement('span');
      meta.className = 'cal-meta';
      if (evt.duration) this._badge(meta, evt.duration, 'badge-info');
      if (evt.type) this._badge(meta, evt.type, evt.type === 'internal' ? 'badge-info' : 'badge-success');
      if (evt.status && evt.status !== 'pending') {
        this._badge(meta, evt.status, evt.status === 'accepted' ? 'badge-success' : 'badge-warn');
      }

      row.append(time, title, meta);

      if (evt.status === 'pending') {
        const actions = document.createElement('span');
        actions.className = 'cal-actions';

        const acceptBtn = document.createElement('button');
        acceptBtn.className = 'directive-pill';
        acceptBtn.style.cursor = 'pointer';
        acceptBtn.textContent = 'accept';
        acceptBtn.onclick = () => this._rsvp(ctx, evt.id, evt.title, 'accepted');

        const declineBtn = document.createElement('button');
        declineBtn.className = 'directive-pill';
        declineBtn.style.cursor = 'pointer';
        declineBtn.textContent = 'decline';
        declineBtn.onclick = () => this._rsvp(ctx, evt.id, evt.title, 'declined');

        actions.append(acceptBtn, declineBtn);
        row.appendChild(actions);
      }

      list.appendChild(row);
    });

    bodyEl.appendChild(list);

    if (logLines.length > 0) {
      const logArea = document.createElement('div');
      logArea.className = 'cal-log-area';
      logLines.forEach((line) => {
        const entry = document.createElement('div');
        entry.className = 'cal-log';
        entry.textContent = line;
        logArea.appendChild(entry);
      });
      bodyEl.appendChild(logArea);
    }

    return container;
  }

  async _ensureCalendarData(ctx) {
    const existing = MockCalBackend.listEvents(ctx.id, ctx.params);
    if (existing.length > 0) return;

    const simulation = ctx.app?.simulation;
    if (!simulation || typeof simulation.generateCalendar !== 'function') return;
    const status = simulation.getClientStatus?.() || {};
    if (status.ready === false) return;

    ctx.app?.setStatus?.(`Generating simulated calendar for ${ctx.id}...`);
    try {
      const result = await simulation.generateCalendar(ctx.id);
      if (result?.status === 'generated') {
        ctx.app?.setStatus?.(`Generated simulated calendar for ${ctx.id}.`);
      }
    } catch (error) {
      console.error('[CalRenderer] Failed to generate mirrored calendar:', error);
    }
  }

  _rsvp(ctx, eventId, title, status) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;
    const updated = MockCalBackend.updateStatus(eventId, status);
    if (!updated) return;

    const logLines = (body || []).map(line => line.trim()).filter(Boolean);
    logLines.push(`${status} "${title}" — ${this._fmtNow()}`);

    const directiveLine = this._serializeDirectiveLine(id, params);
    const text = [directiveLine, ...logLines, '::end'].join('\n');

    syncBus.emit({
      timestamp: new Date().toISOString(),
      source: 'cal',
      type: 'replace',
      payload: { targetDocId: 'current', lineStart, lineEnd, text }
    });
  }

  async query(params) {
    if (params && params.id) return MockCalBackend.listEvents(params.id, params);
    const grouped = {};
    for (const event of MockCalBackend.queryAll()) {
      if (!grouped[event.calendarId]) grouped[event.calendarId] = [];
      grouped[event.calendarId].push(event);
    }
    return grouped;
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null);
    if (entries.length === 0) return `::cal[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::cal[${id}]{${paramStr}}`;
  }

  _fmtNow() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  _pill(container, text) {
    const el = document.createElement('span');
    el.className = 'directive-pill';
    el.textContent = text;
    container.appendChild(el);
  }

  _badge(container, text, cls) {
    const el = document.createElement('span');
    el.className = `badge ${cls}`;
    el.textContent = text;
    container.appendChild(el);
  }
}
