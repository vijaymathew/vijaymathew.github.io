import { RendererBase } from '../RendererBase.js';

/**
 * A mock task renderer following the refined abstraction.
 * Demonstrates the full mutation loop via the SyncBus and the sync capability.
 */
export class MockTask extends RendererBase {
  get manifest() {
    return {
      type: 'task',
      capabilities: ['query', 'sync', 'mutate']
    };
  }

  async render(ctx) {
    const { type, id, params, syncBus } = ctx;
    const container = this.createWidgetContainer(`::${type}[${id}]`);
    const body = container.querySelector('.directive-body');
    body.style.display = 'flex';
    body.style.alignItems = 'center';
    body.style.gap = '10px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = params.status === 'done';
    
    // Mutation Loop: When user clicks, emit a SyncEvent
    checkbox.onchange = (e) => {
      const isDone = e.target.checked;
      syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'widget',
        type: 'replace',
        payload: {
          targetDocId: 'current',
          lineStart: ctx.lineStart,
          text: `::task[${id}]{status=${isDone ? 'done' : 'todo'}}`
        }
      });
    };

    const label = document.createElement('span');
    label.textContent = id.replace(/-/g, ' ');
    label.style.fontFamily = 'var(--sans)';
    label.style.fontSize = '14px';

    if (params.priority === 'high') {
      label.style.fontWeight = '600';
      label.style.color = 'var(--danger-text)';
    }

    body.appendChild(checkbox);
    body.appendChild(label);
    
    return container;
  }

  async query(params) {
    return [
      { id: 'mock-task-1', status: 'todo', text: 'Mock Task 1' },
      { id: 'mock-task-2', status: 'done', text: 'Mock Task 2' }
    ];
  }

  /**
   * Sync: In a real backend (e.g., JIRA), this is where you'd
   * push the state change to the external API.
   */
  async onSyncEvent(event) {
    console.log('[MockTask] Pushing state change to mock backend API...', event);
  }
}
