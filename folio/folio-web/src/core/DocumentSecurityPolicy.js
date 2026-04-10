export class DocumentSecurityPolicy {
  constructor(storagePrefix = 'folio:policy') {
    this.storagePrefix = storagePrefix;
    this.documentId = null;
    this.state = this._defaultState();
    this.listeners = new Set();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  setDocument(documentId) {
    this.documentId = documentId;
    this.state = this._load(documentId);
    this._notify();
  }

  getState() {
    return {
      documentId: this.documentId,
      trusted: this.state.trusted,
      grants: { ...this.state.grants }
    };
  }

  isTrusted() {
    return !!this.state.trusted;
  }

  setTrusted(trusted) {
    this.state.trusted = !!trusted;
    if (!this.state.trusted) {
      this.state.grants = {};
    }
    this._persist();
    this._notify();
  }

  hasGrant(grant) {
    return !!this.state.grants[grant];
  }

  setGrant(grant, allowed) {
    if (!this.state.trusted) return false;

    if (allowed) {
      this.state.grants[grant] = true;
    } else {
      delete this.state.grants[grant];
    }

    this._persist();
    this._notify();
    return true;
  }

  _notify() {
    for (const callback of this.listeners) {
      callback(this.getState());
    }
  }

  _defaultState() {
    return {
      trusted: false,
      grants: {}
    };
  }

  _storageKey(documentId = this.documentId) {
    return `${this.storagePrefix}:${documentId}`;
  }

  _load(documentId) {
    if (!documentId) return this._defaultState();

    const raw = localStorage.getItem(this._storageKey(documentId));
    if (!raw) return this._defaultState();

    try {
      const parsed = JSON.parse(raw);
      return {
        trusted: !!parsed.trusted,
        grants: { ...(parsed.grants || {}) }
      };
    } catch {
      return this._defaultState();
    }
  }

  _persist() {
    if (!this.documentId) return;
    localStorage.setItem(this._storageKey(), JSON.stringify(this.state));
  }
}
