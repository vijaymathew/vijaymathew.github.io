/**
 * Manages the document's raw text buffer, history, and persistence.
 *
 * Auto-saves to localStorage after every mutation when a storageKey
 * is provided.  On construction, restores from localStorage if a
 * saved document exists, otherwise uses the supplied initial text.
 */
export class DocumentStore {
  /**
   * @param {string} initialText - Fallback text if nothing is persisted.
   * @param {string} [storageKey] - localStorage key for auto-save.
   * @param {string} [initialDocumentId] - stable id for the working document.
   */
  constructor(initialText = '', storageKey = null, initialDocumentId = 'seed') {
    this.storageKey = storageKey;
    this.history = [];
    this.documentId = initialDocumentId;
    this.metaStorageKey = storageKey ? `${storageKey}:meta` : null;

    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      const meta = this._loadMeta();
      this.text = saved !== null ? saved : initialText;
      if (meta?.documentId) {
        this.documentId = meta.documentId;
      }
    } else {
      this.text = initialText;
    }
  }

  /**
   * Returns the complete current text of the document.
   * @returns {string}
   */
  getContents() {
    return this.text;
  }

  getDocumentId() {
    return this.documentId;
  }

  setDocumentId(documentId) {
    this.documentId = documentId;
    this._persistMeta();
  }

  /**
   * Apply a SyncEvent mutation to the document.
   * @param {SyncEvent} event
   */
  applyMutation(event) {
    const { type, payload } = event;
    const { targetDocId, lineStart, lineEnd, text } = payload;

    if (type === 'append') {
      this.text += text;
    } else if (type === 'replace') {
      if (lineStart === undefined) {
        this.text = text;
      } else {
        const lines = this.text.split('\n');
        const end = lineEnd !== undefined ? lineEnd : lineStart;
        lines.splice(lineStart, (end - lineStart) + 1, text);
        this.text = lines.join('\n');
      }
    } else if (type === 'delete') {
      if (lineStart !== undefined) {
        const lines = this.text.split('\n');
        const end = lineEnd !== undefined ? lineEnd : lineStart;
        lines.splice(lineStart, (end - lineStart) + 1);
        this.text = lines.join('\n');
      }
    }

    this.history.push(event);
    this._persist();
  }

  /** Persist current text to localStorage. */
  _persist() {
    if (this.storageKey) {
      localStorage.setItem(this.storageKey, this.text);
      this._persistMeta();
    }
  }

  /** Replace the entire document and persist. */
  load(text, documentId = this.documentId) {
    this.text = text;
    this.documentId = documentId;
    this.history = [];
    this._persist();
  }

  /** Clear persisted state and reset to given text. */
  reset(text) {
    this.load(text);
  }

  /** Check whether a persisted document exists for a key. */
  static hasSaved(storageKey) {
    return localStorage.getItem(storageKey) !== null;
  }

  _loadMeta() {
    if (!this.metaStorageKey) return null;
    const raw = localStorage.getItem(this.metaStorageKey);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  _persistMeta() {
    if (!this.metaStorageKey) return;
    localStorage.setItem(this.metaStorageKey, JSON.stringify({
      documentId: this.documentId
    }));
  }
}
