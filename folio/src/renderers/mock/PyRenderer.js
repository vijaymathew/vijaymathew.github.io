import { RendererBase } from '../RendererBase.js';

/**
 * Renderer for the ::py computation block following the refined abstraction.
 */
export class PyRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'py',
      capabilities: ['exec', 'query']
    };
  }

  async render(ctx) {
    const { id, body, bridge } = ctx;
    const container = this.createWidgetContainer(`::py[${id}]`);
    const content = container.querySelector('.directive-body');
    
    // Header for Py Block with Run button
    const header = container.querySelector('.directive-header');
    const pills = header.querySelector('.directive-pills');
    
    const runBtn = document.createElement('button');
    runBtn.className = 'directive-pill active';
    runBtn.style.cursor = 'pointer';
    runBtn.textContent = 'run ▶';
    
    pills.appendChild(runBtn);

    // Output area
    const output = document.createElement('div');
    output.className = 'py-output';
    output.style.padding = '10px';
    output.style.background = 'var(--paper2)';
    output.style.borderTop = '.5px solid var(--rule2)';
    output.style.fontFamily = 'var(--mono)';
    output.style.fontSize = '12px';
    output.style.color = 'var(--ink)';
    output.style.minHeight = '20px';
    output.textContent = '(click run to evaluate)';

    runBtn.onclick = async () => {
      output.style.color = 'var(--ink)';
      output.textContent = 'evaluating...';
      const code = body.join('\n');
      
      const usedNs = ['cal', 'tasks', 'email', 'note', 'table'].filter(ns => code.includes(ns + '.'));
      
      try {
        const res = await bridge.run(code, usedNs);
        if (res.error) {
            output.style.color = 'var(--danger-text)';
            output.textContent = res.error;
        } else {
            output.textContent = res.stdout || '(no output)';
        }
      } catch (err) {
        output.style.color = 'var(--danger-text)';
        output.textContent = `Error: ${err.message}`;
      }
    };

    if (ctx.params.run === 'auto') {
      setTimeout(() => runBtn.onclick(), 100);
    }

    content.style.padding = '0';
    const codeArea = document.createElement('pre');
    codeArea.style.padding = '12px';
    codeArea.style.margin = '0';
    codeArea.style.fontSize = '12px';
    codeArea.style.fontFamily = 'var(--mono)';
    codeArea.style.color = 'var(--ink2)';
    codeArea.textContent = body.join('\n');
    
    content.appendChild(codeArea);
    container.appendChild(output);

    return container;
  }
}
