import { RendererBase } from '../RendererBase.js';

/**
 * Renderer for ::py blocks backed by the document-scoped Python runtime.
 */
export class PyRenderer extends RendererBase {
  get manifest() {
    return {
      type: 'py',
      capabilities: ['exec'],
      trust: 'owned'
    };
  }

  async render(ctx) {
    const { id, body, bridge, params, policy } = ctx;
    const key = bridge.getBlockKey(ctx);
    const container = this.createWidgetContainer(`::py[${id}]`);
    const content = container.querySelector('.directive-body');
    const header = container.querySelector('.directive-header');
    const pills = header.querySelector('.directive-pills');

    const runBtn = document.createElement('button');
    runBtn.className = 'directive-pill active';
    runBtn.style.cursor = 'pointer';
    runBtn.textContent = params.run === 'auto' ? 're-run ↻' : 'run ▶';
    pills.appendChild(runBtn);

    if (params.grants || params.allow) {
      const grantPill = document.createElement('span');
      grantPill.className = 'directive-pill';
      grantPill.textContent = `grants=${params.grants || params.allow}`;
      pills.appendChild(grantPill);
    }

    const securityBar = document.createElement('div');
    securityBar.style.padding = '10px 12px';
    securityBar.style.borderTop = '.5px solid var(--rule2)';
    securityBar.style.display = 'none';
    securityBar.style.gap = '8px';
    securityBar.style.alignItems = 'center';
    securityBar.style.flexWrap = 'wrap';

    const codeArea = document.createElement('pre');
    codeArea.style.padding = '12px';
    codeArea.style.margin = '0';
    codeArea.style.fontSize = '12px';
    codeArea.style.fontFamily = 'var(--mono)';
    codeArea.style.color = 'var(--ink2)';
    codeArea.textContent = body.join('\n');
    content.style.padding = '0';
    content.appendChild(codeArea);

    const output = document.createElement('div');
    output.className = 'py-output';
    output.style.padding = '10px';
    output.style.background = 'var(--paper2)';
    output.style.borderTop = '.5px solid var(--rule2)';
    output.style.fontFamily = 'var(--mono)';
    output.style.fontSize = '12px';
    output.style.color = 'var(--ink)';
    output.style.minHeight = '20px';
    container.appendChild(output);
    container.appendChild(securityBar);

    const renderState = () => {
      const state = bridge.getBlockState(key);
      const security = bridge.getBlockSecurity(ctx);
      securityBar.innerHTML = '';
      securityBar.style.display = security.requested.length > 0 ? 'flex' : 'none';

      if (security.requested.length > 0) {
        const label = document.createElement('span');
        label.className = 'directive-pill';
        label.textContent = security.trusted ? 'trusted doc' : 'untrusted doc';
        securityBar.appendChild(label);

        if (!security.trusted) {
          const trustBtn = document.createElement('button');
          trustBtn.className = 'directive-pill active';
          trustBtn.textContent = 'trust document';
          trustBtn.onclick = () => policy?.setTrusted(true);
          securityBar.appendChild(trustBtn);
        }

        for (const denied of security.denied) {
          const grantBtn = document.createElement('button');
          grantBtn.className = 'directive-pill';
          grantBtn.textContent = denied.grant ? `grant ${denied.grant}` : `allow ${denied.namespace}`;
          grantBtn.disabled = !security.trusted;
          grantBtn.onclick = () => {
            if (denied.grant) policy?.setGrant(denied.grant, true);
          };
          securityBar.appendChild(grantBtn);
        }
      }

      output.style.color = 'var(--ink)';
      if (!state || state.status === 'manual') {
        output.textContent = '(manual block — click run to evaluate in document context)';
        return;
      }
      if (state.status === 'denied') {
        output.style.color = 'var(--warn-text)';
        output.textContent = state.error || 'Capability access denied.';
        return;
      }
      if (state.status === 'blocked') {
        output.style.color = 'var(--warn-text)';
        output.textContent = state.error || 'Skipped because an earlier block failed.';
        return;
      }
      if (state.status === 'error') {
        output.style.color = 'var(--danger-text)';
        output.textContent = state.error || 'Python evaluation failed.';
        return;
      }
      output.textContent = state.stdout || '(no output)';
    };

    const unsubscribes = [
      bridge.subscribe(() => {
        renderState();
      }),
      policy?.subscribe?.(() => {
        renderState();
      })
    ].filter(Boolean);
    container.__cleanup = () => {
      unsubscribes.forEach((fn) => fn());
    };

    runBtn.onclick = async () => {
      output.style.color = 'var(--ink)';
      output.textContent = 'evaluating document context...';
      await bridge.runBlock(key);
      renderState();
    };

    renderState();
    return container;
  }
}
