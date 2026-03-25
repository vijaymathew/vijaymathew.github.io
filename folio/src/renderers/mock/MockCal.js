import { RendererBase } from '../RendererBase.js';

/**
 * A mock calendar renderer.
 * Displays a simple agenda view and provides event data for ::py queries.
 */
export class MockCal extends RendererBase {
  get manifest() {
    return {
      type: 'cal',
      capabilities: ['query']
    };
  }

  async render(ctx) {
    const { type, id, params } = ctx;
    const container = this.createWidgetContainer(`::${type}[${id}]`);
    const body = container.querySelector('.directive-body');
    body.style.padding = '0';

    const events = [
      { time: '09:00', title: 'Q3 Hardware Sync', type: 'internal' },
      { time: '11:30', title: 'Lunch with Sara', type: 'external' },
      { time: '14:00', title: 'Finance Review', type: 'internal' }
    ];

    const list = document.createElement('div');
    list.style.fontFamily = 'var(--sans)';
    list.style.fontSize = '13px';

    events.forEach(event => {
      const item = document.createElement('div');
      item.style.padding = '10px 14px';
      item.style.borderBottom = '.5px solid var(--rule2)';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.innerHTML = `
        <span style="color: var(--ink3); width: 50px;">${event.time}</span>
        <span style="flex: 1; margin-left: 10px;">${event.title}</span>
        <span class="badge ${event.type === 'internal' ? 'badge-info' : 'badge-success'}">${event.type}</span>
      `;
      list.appendChild(item);
    });

    body.appendChild(list);
    return container;
  }

  async query(params) {
    return [
      { id: 'ev1', start: '2026-03-23T09:00:00', title: 'Q3 Hardware Sync' },
      { id: 'ev2', start: '2026-03-23T11:30:00', title: 'Lunch with Sara' },
      { id: 'ev3', start: '2026-03-23T14:00:00', title: 'Finance Review' }
    ];
  }
}
