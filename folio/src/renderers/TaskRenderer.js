import { RendererBase } from './RendererBase.js';

/**
 * Text-native task renderer (owned state).
 *
 * A task is a single-line directive with all state in params:
 *
 *   ::task[call-finance]{due=today priority=high status=todo}
 *
 * Checking the box preserves every param and adds:
 *   status=done completed=2026-03-23T14:32
 *
 * The blocked-by= param creates a text-native dependency:
 *   ::task[send-report]{blocked-by=call-finance status=todo}
 *
 * The blocker's status is resolved from the module-level cache,
 * and the blocked task is rendered as inactive until the blocker
 * is marked done.
 */

// Module-level cache — populated on every render, read by query()
// and by blocked-by resolution.
const taskCache = new Map();

export class TaskRenderer extends RendererBase {
  get manifest() {
    return { type: 'task', capabilities: ['query', 'mutate'] };
  }

  async render(ctx) {
    const { id, params, syncBus, lineStart } = ctx;
    const done = params.status === 'done';

    // Cache for query() and blocked-by lookups.
    taskCache.set(id, { id, ...params });

    // ── blocked-by resolution ───────────────────────────────
    const blockedBy = params['blocked-by'];
    let blocked = false;
    if (blockedBy) {
      const blocker = taskCache.get(blockedBy);
      blocked = !blocker || blocker.status !== 'done';
    }

    // ── widget shell ────────────────────────────────────────
    const container = this.createWidgetContainer(`::task[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');

    bodyEl.style.display = 'flex';
    bodyEl.style.alignItems = 'center';
    bodyEl.style.gap = '10px';

    // ── checkbox ────────────────────────────────────────────
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = done;
    if (blocked) checkbox.disabled = true;

    // ── label ───────────────────────────────────────────────
    const label = document.createElement('span');
    label.className = 'task-label';
    label.textContent = id.replace(/-/g, ' ');

    if (done) {
      label.classList.add('task-done');
    } else if (params.priority === 'high') {
      label.classList.add('task-high');
    }
    if (blocked) {
      label.classList.add('task-blocked');
    }

    // ── toggle handler ──────────────────────────────────────
    checkbox.onchange = () => {
      const nowDone = checkbox.checked;
      const newParams = { ...params };

      if (nowDone) {
        newParams.status = 'done';
        newParams.completed = new Date().toISOString().split('.')[0];
      } else {
        newParams.status = 'todo';
        delete newParams.completed;
      }

      const paramStr = this._serializeParams(newParams);
      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'widget',
        type: 'replace',
        payload: {
          targetDocId: 'current',
          lineStart,
          text: `::task[${id}]{${paramStr}}`
        }
      });

      taskCache.set(id, { id, ...newParams });

      // Update visuals in-place.
      label.classList.toggle('task-done', nowDone);
      label.classList.toggle('task-high', !nowDone && params.priority === 'high');
    };

    bodyEl.append(checkbox, label);

    // ── metadata pills ──────────────────────────────────────
    if (params.due) {
      this._pill(pills, `due: ${params.due}`);
    }
    if (params.priority) {
      const badge = document.createElement('span');
      badge.className = `badge ${params.priority === 'high' ? 'badge-warn' : 'badge-info'}`;
      badge.textContent = params.priority;
      pills.appendChild(badge);
    }
    if (blockedBy) {
      const blocker = taskCache.get(blockedBy);
      const blockerDone = blocker && blocker.status === 'done';
      const pill = document.createElement('span');
      pill.className = 'directive-pill';
      pill.textContent = blockerDone
        ? `${blockedBy} (done)`
        : `blocked by: ${blockedBy}`;
      if (!blockerDone) pill.style.color = 'var(--warn-text)';
      pills.appendChild(pill);
    }
    if (params.completed) {
      this._pill(pills, params.completed.replace('T', ' '));
    }

    return container;
  }

  // ── query interface ───────────────────────────────────────

  async query(params) {
    if (params && params.id) return taskCache.get(params.id) || null;
    const all = {};
    for (const [id, data] of taskCache) all[id] = data;
    return all;
  }

  // ── helpers ───────────────────────────────────────────────

  _pill(container, text) {
    const el = document.createElement('span');
    el.className = 'directive-pill';
    el.textContent = text;
    container.appendChild(el);
  }

  _serializeParams(params) {
    return Object.entries(params)
      .filter(([_, v]) => v != null && v !== '')
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
  }
}
