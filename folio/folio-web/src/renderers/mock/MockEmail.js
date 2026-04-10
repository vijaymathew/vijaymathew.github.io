import { RendererBase } from '../RendererBase.js';

/**
 * A mock email inbox renderer.
 * Displays a filtered list of messages and provides email data for ::py queries.
 */
export class MockEmail extends RendererBase {
  get manifest() {
    return {
      type: 'email',
      capabilities: ['query']
    };
  }

  async render(ctx) {
    const { type, id, params } = ctx;
    const container = this.createWidgetContainer(`::${type}[${id}]`);
    const body = container.querySelector('.directive-body');
    body.style.padding = '0';

    const emails = [
      { from: 'Sara', subject: 'Q3 Hardware Budget', priority: 'high' },
      { from: 'Finance', subject: 'Re: Overrun check', priority: 'normal' },
      { from: 'Ops', subject: 'New server rack arrival', priority: 'normal' }
    ];

    const list = document.createElement('div');
    list.style.fontFamily = 'var(--sans)';
    list.style.fontSize = '13px';

    emails.forEach(email => {
      const item = document.createElement('div');
      item.style.padding = '10px 14px';
      item.style.borderBottom = '.5px solid var(--rule2)';
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
      item.style.gap = '2px';
      
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 500;">${email.from}</span>
          ${email.priority === 'high' ? '<span class="badge badge-warn">high</span>' : ''}
        </div>
        <div style="color: var(--ink3); font-size: 12px;">${email.subject}</div>
      `;
      list.appendChild(item);
    });

    body.appendChild(list);
    return container;
  }

  async query(params) {
    return [
      { id: 'msg1', from: 'Sara', subject: 'Q3 Hardware Budget' },
      { id: 'msg2', from: 'Finance', subject: 'Re: Overrun check' }
    ];
  }
}
