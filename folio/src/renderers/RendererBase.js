/**
 * Refined Base class for all Folio renderers.
 * This abstraction supports both simple mocks and complex real-world backends.
 */
export class RendererBase {
  /**
   * Defines the renderer's identity and capabilities.
   * @returns {{type: string, capabilities: string[]}}
   */
  get manifest() {
    throw new Error('manifest must be implemented by subclass');
  }

  /**
   * Lifecycle: Initialize the renderer (e.g., OAuth, DB connection).
   * Called once when the renderer is first registered or needed.
   */
  async init() {
    return true;
  }

  /**
   * UI: Render the directive as an interactive widget.
   * @param {RenderContext} ctx
   * @returns {Promise<HTMLElement>}
   */
  async render(ctx) {
    throw new Error('render() must be implemented by subclass');
  }

  /**
   * Data: The "Universal Query" interface for ::py blocks.
   * This is where a real backend would perform a 'fetch' or 'SELECT'.
   * @param {QueryParams} params
   * @returns {Promise<any>}
   */
  async query(params) {
    return null;
  }

  /**
   * Sync: Called when the 'Substrate' (the text document) is mutated.
   * This pushes text changes to the real-world backend API.
   * @param {SyncEvent} event
   */
  async onSyncEvent(event) {
    // Optional: implement to sync text changes back to the source
  }

  /**
   * Lifecycle: Cleanup (e.g., close WebSockets, cancel pending requests).
   */
  destroy() {
    // Optional cleanup
  }

  /**
   * UI Utility: Create a standard widget wrapper with a header.
   */
  createWidgetContainer(title) {
    const container = document.createElement('div');
    container.className = 'directive-widget';

    const header = document.createElement('div');
    header.className = 'directive-header';
    
    const tag = document.createElement('span');
    tag.className = 'directive-tag';
    tag.textContent = title;
    header.appendChild(tag);

    const pills = document.createElement('div');
    pills.className = 'directive-pills';
    header.appendChild(pills);

    container.appendChild(header);

    const body = document.createElement('div');
    body.className = 'directive-body';
    container.appendChild(body);

    return container;
  }
}
