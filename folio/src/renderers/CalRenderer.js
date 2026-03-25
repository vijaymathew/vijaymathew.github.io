import { RendererBase } from './RendererBase.js';

/**
 * Text-native calendar renderer (mirrored state).
 *
 * Events live in the body as key=value lines:
 *
 *   ::cal[today]{view=agenda}
 *   title="Q3 Hardware Sync" time=09:00 duration=60min type=internal status=pending
 *   title="Lunch with Sara" time=11:30 duration=60min type=external status=accepted
 *   accepted "Q3 Hardware Sync" — 09:12
 *   ::end
 *
 * Event lines start with title=.  Everything else is a log entry
 * (RSVP actions, sync annotations).
 *
 * RSVP: accept/decline buttons update the event's status= in the
 * body text and append a log line — both via a single SyncBus
 * replace mutation.
 */

const calCache = new Map();

export class CalRenderer extends RendererBase {
  get manifest() {
    return { type: 'cal', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    const { id, params, body, syncBus, lineStart, lineEnd } = ctx;

    // Parse body into events and log entries.
    const events = [];
    const logLines = [];
    for (const line of (body || [])) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith('title=') || trimmed.startsWith('title="')) {
        events.push(this._parseKV(trimmed));
      } else {
        logLines.push(trimmed);
      }
    }

    // Cache for query().
    calCache.set(id, events.map(e => ({ ...e })));

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::cal[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');
    bodyEl.style.padding = '0';

    if (params.view) this._pill(pills, params.view);

    // ── event list ──────────────────────────────────────────
    const list = document.createElement('div');
    list.className = 'cal-list';

    events.forEach((evt, idx) => {
      const row = document.createElement('div');
      row.className = 'cal-event';

      // Time
      const time = document.createElement('span');
      time.className = 'cal-time';
      time.textContent = evt.time || '';

      // Title
      const title = document.createElement('span');
      title.className = 'cal-title';
      title.textContent = evt.title || '';

      // Badges
      const meta = document.createElement('span');
      meta.className = 'cal-meta';

      if (evt.duration) {
        this._badge(meta, evt.duration, 'badge-info');
      }
      if (evt.type) {
        this._badge(meta, evt.type, evt.type === 'internal' ? 'badge-info' : 'badge-success');
      }
      if (evt.status && evt.status !== 'pending') {
        this._badge(meta, evt.status,
          evt.status === 'accepted' ? 'badge-success' : 'badge-warn');
      }

      row.append(time, title, meta);

      // RSVP buttons for pending events.
      if (evt.status === 'pending') {
        const actions = document.createElement('span');
        actions.className = 'cal-actions';

        const acceptBtn = document.createElement('button');
        acceptBtn.className = 'directive-pill';
        acceptBtn.style.cursor = 'pointer';
        acceptBtn.textContent = 'accept';

        const declineBtn = document.createElement('button');
        declineBtn.className = 'directive-pill';
        declineBtn.style.cursor = 'pointer';
        declineBtn.textContent = 'decline';

        acceptBtn.onclick = () =>
          this._rsvp(ctx, events, logLines, idx, 'accepted');
        declineBtn.onclick = () =>
          this._rsvp(ctx, events, logLines, idx, 'declined');

        actions.append(acceptBtn, declineBtn);
        row.appendChild(actions);
      }

      list.appendChild(row);
    });

    bodyEl.appendChild(list);

    // ── log area ────────────────────────────────────────────
    if (logLines.length > 0) {
      const logArea = document.createElement('div');
      logArea.className = 'cal-log-area';
      logLines.forEach(l => {
        const entry = document.createElement('div');
        entry.className = 'cal-log';
        entry.textContent = l;
        logArea.appendChild(entry);
      });
      bodyEl.appendChild(logArea);
    }

    return container;
  }

  // ── RSVP action ───────────────────────────────────────────

  _rsvp(ctx, events, logLines, eventIdx, status) {
    const { id, params, syncBus, lineStart, lineEnd } = ctx;
    const evt = events[eventIdx];
    evt.status = status;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    logLines.push(`${status} "${evt.title}" — ${now}`);

    // Serialize entire block back to text.
    const eventLines = events.map(e => this._serializeKV(e));
    const allBody = [...eventLines, ...logLines];
    const directiveLine = this._serializeDirectiveLine(id, params);
    const text = [directiveLine, ...allBody, '::end'].join('\n');

    // Use a non-widget source so the canvas rebuilds to reflect the
    // status change and new log entry.
    syncBus.emit({
      timestamp: new Date().toISOString(),
      source: 'cal',
      type: 'replace',
      payload: { targetDocId: 'current', lineStart, lineEnd, text }
    });
  }

  // ── query interface ───────────────────────────────────────

  async query(params) {
    if (params && params.id) return calCache.get(params.id) || [];
    // No id — return all cached calendars.
    const all = {};
    for (const [id, data] of calCache) all[id] = data;
    return all;
  }

  // ── key=value parsing / serialisation ─────────────────────

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
    if (entries.length === 0) return `::cal[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::cal[${id}]{${paramStr}}`;
  }

  // ── DOM helpers ───────────────────────────────────────────

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
