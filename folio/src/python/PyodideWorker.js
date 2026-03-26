/**
 * Web Worker for document-scoped Pyodide evaluation.
 *
 * Each evaluation rebuilds a fresh shared namespace and executes all
 * requested ::py blocks in document order.
 */

import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.mjs';

let pyodide = null;

async function initPyodide() {
  if (pyodide) return;

  pyodide = await loadPyodide();
  await pyodide.runPythonAsync(`
import io
import contextlib
import traceback

class NamespaceProxy:
    def __init__(self, data):
        self._data = data

    def query(self, params=None):
        if params and isinstance(self._data, dict) and 'id' in params:
            key = params['id']
            val = self._data.get(key)
            if val is not None:
                return val
        return self._data

def _folio_export(value, depth=0):
    if depth > 2:
        return repr(value)
    if isinstance(value, (str, int, float, bool)) or value is None:
        return value
    if isinstance(value, list):
        return [_folio_export(v, depth + 1) for v in value[:12]]
    if isinstance(value, tuple):
        return [_folio_export(v, depth + 1) for v in value[:12]]
    if isinstance(value, dict):
        return {
            str(k): _folio_export(v, depth + 1)
            for k, v in list(value.items())[:12]
        }
    return repr(value)

def _folio_run_document(blocks, globals_payload):
    shared = {"__builtins__": __builtins__}

    for key, value in globals_payload.items():
        shared[key] = NamespaceProxy(value)

    results = {}
    halted = False

    for block in blocks:
        key = block["key"]
        if halted:
            results[key] = {
                "status": "blocked",
                "stdout": "",
                "error": "Skipped because an earlier block failed.",
                "context": {}
            }
            continue

        if not block.get("execute", False):
            results[key] = {
                "status": "manual",
                "stdout": "",
                "error": None,
                "context": {}
            }
            continue

        buf = io.StringIO()
        try:
            with contextlib.redirect_stdout(buf):
                exec(block["code"], shared)

            exported = {
                name: _folio_export(value)
                for name, value in shared.items()
                if not name.startswith("__")
                and name not in globals_payload
                and not isinstance(value, NamespaceProxy)
            }

            results[key] = {
                "status": "ok",
                "stdout": buf.getvalue().rstrip(),
                "error": None,
                "context": exported
            }
        except Exception:
            halted = True
            results[key] = {
                "status": "error",
                "stdout": buf.getvalue().rstrip(),
                "error": traceback.format_exc(),
                "context": {}
            }

    return results
`);
}

self.onmessage = async (e) => {
  const { type, requestId, blocks, globals } = e.data;

  try {
    if (type === 'init') {
      await initPyodide();
      self.postMessage({ type: 'ready' });
      return;
    }

    if (type === 'eval_document') {
      if (!pyodide) {
        throw new Error('Pyodide not initialised');
      }

      pyodide.globals.set('__folio_blocks', pyodide.toPy(blocks || []));
      pyodide.globals.set('__folio_globals', pyodide.toPy(globals || {}));

      const results = await pyodide.runPythonAsync(
        '_folio_run_document(__folio_blocks, __folio_globals)'
      );

      self.postMessage({
        type: 'eval_result',
        requestId,
        results: results.toJs({ dict_converter: Object.fromEntries })
      });
      return;
    }
  } catch (err) {
    self.postMessage({
      type: 'error',
      requestId,
      error: err.message
    });
  }
};
