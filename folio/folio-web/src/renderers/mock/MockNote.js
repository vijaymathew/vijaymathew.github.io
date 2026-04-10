import { RendererBase } from '../RendererBase.js';

/**
 * A mock note renderer following the refined abstraction.
 */
export class MockNote extends RendererBase {
  get manifest() {
    return {
      type: 'note',
      capabilities: ['query']
    };
  }

  async render(ctx) {
    const { type, id } = ctx;
    const container = this.createWidgetContainer(`::${type}[${id}]`);
    const body = container.querySelector('.directive-body');
    body.style.padding = '12px';
    body.style.fontSize = '14px';
    body.textContent = id; 
    return container;
  }

  async query(params) {
    return {
      id: 'mock-note-id',
      text: 'This is mock note data from the registry.'
    };
  }
}
