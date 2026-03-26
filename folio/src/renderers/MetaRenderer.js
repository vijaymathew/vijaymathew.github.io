import { RendererBase } from './RendererBase.js';

export class MetaRenderer extends RendererBase {
  get manifest() {
    return { type: 'meta', capabilities: ['query', 'mutate'], trust: 'owned' };
  }

  async render(ctx) {
    const { id, params, syncBus, lineStart } = ctx;
    const container = this.createWidgetContainer(`::meta[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');

    const value = params.value || params.status || 'active';
    const values = ['active', 'dormant', 'archived'];

    const label = document.createElement('div');
    label.style.fontFamily = 'var(--sans)';
    label.style.fontSize = '13px';
    label.style.color = 'var(--ink2)';
    label.textContent = `Current value: ${value}`;
    bodyEl.appendChild(label);

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';
    actions.style.flexWrap = 'wrap';
    actions.style.marginTop = '10px';

    values.forEach((nextValue) => {
      const button = document.createElement('button');
      button.className = `directive-pill${nextValue === value ? ' active' : ''}`;
      button.textContent = nextValue;
      button.disabled = nextValue === value;
      button.onclick = () => {
        const nextParams = { ...params, value: nextValue };
        delete nextParams.status;
        syncBus.emit({
          timestamp: new Date().toISOString(),
          source: 'meta',
          type: 'replace',
          payload: {
            targetDocId: syncBus.store.getDocumentId(),
            lineStart,
            text: this._serializeDirectiveLine(id, nextParams)
          }
        });
      };
      actions.appendChild(button);
    });

    bodyEl.appendChild(actions);
    this._pill(pills, value);
    return container;
  }

  async query(params = {}) {
    return {
      id: params.id || 'status',
      value: params.value || null
    };
  }

  _serializeDirectiveLine(id, params) {
    const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
    if (entries.length === 0) return `::meta[${id}]`;
    const paramStr = entries
      .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
      .join(' ');
    return `::meta[${id}]{${paramStr}}`;
  }

  _pill(container, text) {
    const pill = document.createElement('span');
    pill.className = 'directive-pill';
    pill.textContent = text;
    container.appendChild(pill);
  }
}
