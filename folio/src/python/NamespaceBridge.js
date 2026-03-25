/**
 * Orchestrates communication between the main thread and the Pyodide worker.
 * Handles the "Universal Query Layer" by injecting app data into Python.
 */
export class NamespaceBridge {
  constructor(registry) {
    this.registry = registry;
    this.worker = null;
    this.ready = false;
    this.pendingResolves = new Map();
  }

  /**
   * Initialise the worker and Pyodide.
   */
  async init() {
    if (this.ready) return;
    if (this._initPromise) return this._initPromise;

    this._initPromise = new Promise((resolve, reject) => {
      // In a real browser environment, this path would point to the file.
      this.worker = new Worker(new URL('./PyodideWorker.js', import.meta.url), { type: 'module' });
      
      this.worker.onmessage = (e) => {
        const { type, result, error, stdout } = e.data;
        if (type === 'ready') {
          this.ready = true;
          console.log('[NamespaceBridge] Worker ready.');
          resolve();
        } else if (type === 'result') {
          const resResolve = this.pendingResolves.get('last_run');
          if (resResolve) {
            resResolve({ stdout, result });
            this.pendingResolves.delete('last_run');
          }
        } else if (type === 'error') {
          console.error('[NamespaceBridge] Worker error:', error);
          const resResolve = this.pendingResolves.get('last_run');
          if (resResolve) {
            resResolve({ error, stdout: `Error: ${error}` });
            this.pendingResolves.delete('last_run');
          } else if (!this.ready) {
            reject(new Error(error));
          }
        }
      };

      this.worker.postMessage({ type: 'init' });
    });

    return this._initPromise;
  }

  /**
   * Evaluate code in Pyodide with live app data.
   * @param {string} code
   * @param {string[]} requestedNamespaces - e.g., ['cal', 'tasks']
   */
  async run(code, requestedNamespaces = []) {
    if (!this.ready) await this.init();

    // 1. Gather live data from the CapabilityRegistry
    const globals = {};
    for (const ns of requestedNamespaces) {
      const data = await this.registry.query(ns, {});
      if (data) globals[ns] = data;
    }

    // 2. Post to worker
    return new Promise((resolve) => {
      this.pendingResolves.set('last_run', resolve);
      this.worker.postMessage({ type: 'run', code, globals });
    });
  }
}
