/**
 * Minimal client abstraction for simulation generation providers.
 *
 * Concrete clients should implement:
 * - getClientInfo()
 * - isAvailable()
 * - generate(prompt)
 */
export class SimulationLLMClient {
  constructor() {
    this._status = {
      phase: 'idle',
      ready: false,
      available: null,
      message: 'Simulation provider idle.',
      updatedAt: new Date().toISOString()
    };
    this._statusListeners = new Set();
  }

  getClientInfo() {
    return {
      kind: 'unknown',
      label: 'Unknown simulation client'
    };
  }

  getStatus() {
    return { ...this._status };
  }

  subscribe(listener) {
    if (typeof listener !== 'function') {
      return () => {};
    }
    this._statusListeners.add(listener);
    listener(this.getStatus());
    return () => {
      this._statusListeners.delete(listener);
    };
  }

  async isAvailable() {
    return true;
  }

  async generate(_prompt) {
    throw new Error('SimulationLLMClient.generate(prompt) must be implemented by subclasses');
  }

  _setStatus(patch = {}) {
    this._status = {
      ...this._status,
      ...patch,
      updatedAt: new Date().toISOString()
    };
    for (const listener of this._statusListeners) {
      listener(this.getStatus());
    }
  }
}
