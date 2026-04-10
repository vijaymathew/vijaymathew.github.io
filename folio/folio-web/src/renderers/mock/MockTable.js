import { RendererBase } from '../RendererBase.js';

/**
 * A mock table renderer.
 * Displays a clean, manuscript-style table and provides data for ::py queries.
 * Aligned with Chapter 7 & 15: "The spreadsheet dissolved".
 */
export class MockTable extends RendererBase {
  get manifest() {
    return {
      type: 'tbl',
      capabilities: ['query', 'mutate']
    };
  }

  async render(ctx) {
    const { type, id, params, syncBus } = ctx;
    const container = this.createWidgetContainer(`::${type}[${id}]`);
    const body = container.querySelector('.directive-body');
    body.style.padding = '0';

    // Data matching Figure 7.1/15.1 context
    const data = [
      { region: 'North', q1: 3500, q2: 4200, q3: 4200, status: 'On Track' },
      { region: 'South', q1: 2000, q2: 2100, q3: 1850, status: 'Under' },
      { region: 'East', q1: 5000, q2: 5800, q3: 6700, status: 'Over' },
      { region: 'West', q1: 3000, q2: 3200, q3: 3100, status: 'On Track' },
      { region: 'Global', q1: 1200, q2: 1100, q3: 950, status: 'On Track' }
    ];

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.fontFamily = 'var(--sans)';
    table.style.fontSize = '12px';

    // Header
    const thead = document.createElement('thead');
    thead.style.background = 'var(--paper2)';
    thead.innerHTML = `
      <tr>
        <th style="padding: 10px 14px; text-align: left; border-bottom: .5px solid var(--rule2);">Region</th>
        <th style="padding: 10px 14px; text-align: left; border-bottom: .5px solid var(--rule2);">Q1</th>
        <th style="padding: 10px 14px; text-align: left; border-bottom: .5px solid var(--rule2);">Q2</th>
        <th style="padding: 10px 14px; text-align: left; border-bottom: .5px solid var(--rule2);">Q3 (Actual)</th>
        <th style="padding: 10px 14px; text-align: left; border-bottom: .5px solid var(--rule2);">Status</th>
      </tr>
    `;
    table.appendChild(thead);

    // Rows
    const tbody = document.createElement('tbody');
    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = '.5px solid var(--rule2)';
      tr.innerHTML = `
        <td style="padding: 10px 14px;">${row.region}</td>
        <td style="padding: 10px 14px;">${row.q1.toLocaleString()}</td>
        <td style="padding: 10px 14px;">${row.q2.toLocaleString()}</td>
        <td style="padding: 10px 14px;">${row.q3.toLocaleString()}</td>
        <td style="padding: 10px 14px;"><span class="badge ${row.status === 'Over' ? 'badge-warn' : 'badge-info'}">${row.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    body.appendChild(table);
    
    return container;
  }

  async query(params) {
    return [
      { region: 'North', q1: 3500, q2: 4200, q3: 4200 },
      { region: 'South', q1: 2000, q2: 2100, q3: 1850 },
      { region: 'East', q1: 5000, q2: 5800, q3: 6700 },
      { region: 'West', q1: 3000, q2: 3200, q3: 3100 },
      { region: 'Global', q1: 1200, q2: 1100, q3: 950 }
    ];
  }
}
