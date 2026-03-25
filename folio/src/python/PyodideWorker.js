/**
 * Web Worker for running Pyodide.
 * Keeps heavy computation off the main UI thread.
 */

import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.mjs';

let pyodide = null;

async function initPyodide() {
  if (pyodide) return;
  try {
    console.log('[PyodideWorker] Initialising Pyodide...');
    pyodide = await loadPyodide();
    console.log('[PyodideWorker] Pyodide ready.');
    self.postMessage({ type: 'ready' });
  } catch (err) {
    console.error('[PyodideWorker] Init failed:', err);
    self.postMessage({ type: 'error', error: `Pyodide Init Failed: ${err.message}` });
  }
}

self.onmessage = async (e) => {
  const { type, code, globals } = e.data;

  if (type === 'init') {
    await initPyodide();
    return;
  }

  if (type === 'run') {
    if (!pyodide) {
      self.postMessage({ type: 'error', error: 'Pyodide not initialised' });
      return;
    }

    try {
      // 1. Define the Proxy class if not already defined
      await pyodide.runPythonAsync(`
class NamespaceProxy:
    def __init__(self, data):
        self._data = data
    def query(self, params=None):
        # If data is a dict-of-collections keyed by id (e.g. table
        # renderer: {'q3-budget': [rows...]}), look up the requested id.
        if (params and isinstance(self._data, dict) and 'id' in params):
            key = params['id']
            val = self._data.get(key)
            if val is not None:
                return val
        return self._data
`);

      // 2. Inject globals as Proxies
      if (globals) {
        for (const [key, value] of Object.entries(globals)) {
          // Set the raw data in a temporary variable
          pyodide.globals.set(`__raw_${key}`, pyodide.toPy(value));
          // Wrap it in a NamespaceProxy
          await pyodide.runPythonAsync(`${key} = NamespaceProxy(__raw_${key})`);
        }
      }

      // 3. Capture stdout
      let stdout = "";
      pyodide.setStdout({
        batched: (str) => { stdout += str + "\n"; }
      });

      // 3. Run the code
      await pyodide.runPythonAsync(code);

      // 4. Return the result
      self.postMessage({ 
        type: 'result', 
        stdout: stdout.trim(),
        vars: {} // In a real app, we'd extract modified globals here
      });
    } catch (err) {
      self.postMessage({ type: 'error', error: err.message });
    }
  }
};
