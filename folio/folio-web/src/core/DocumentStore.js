const DEFAULT_HISTORY_LIMIT = 200;
const DEFAULT_SNAPSHOT_LIMIT = 40;

/**
 * Manages document text buffers, identity, history, snapshots, and persistence.
 *
 * The store keeps multiple documents keyed by stable document id. One document
 * is active at a time, but all known documents remain persisted so the
 * prototype can inspect history and evolve toward lifecycle features.
 */
export class DocumentStore {
  /**
   * @param {string} initialText - Fallback text if nothing is persisted.
   * @param {string} [storageKey] - localStorage key prefix for auto-save.
   * @param {string} [initialDocumentId] - stable id for the initial document.
   */
  constructor(initialText = '', storageKey = null, initialDocumentId = 'seed') {
    this.storageKey = storageKey;
    this.documentId = initialDocumentId;
    this.metaStorageKey = storageKey ? `${storageKey}:meta` : null;
    this.docsStorageKey = storageKey ? `${storageKey}:docs` : null;
    this.historyLimit = DEFAULT_HISTORY_LIMIT;
    this.snapshotLimit = DEFAULT_SNAPSHOT_LIMIT;
    this.documents = new Map();

    if (storageKey) {
      this._loadPersistedState(initialText, initialDocumentId);
    } else {
      this._ensureDocument(initialDocumentId, initialText);
      this._setSnapshot(initialDocumentId, initialText, 'Initial document');
    }
  }

  /**
   * Returns the current document text or the text for a specific id.
   * @param {string} [documentId]
   * @returns {string}
   */
  getContents(documentId = this.documentId) {
    return this._getDocument(documentId)?.text || '';
  }

  getDocumentId() {
    return this.documentId;
  }

  setDocumentId(documentId) {
    this._ensureDocument(documentId, '');
    this.documentId = documentId;
    this._persist();
  }

  listDocuments() {
    return Array.from(this.documents.values()).map((doc) => ({
      id: doc.id,
      title: doc.title,
      updatedAt: doc.updatedAt,
      lineCount: doc.text.split('\n').length
    }));
  }

  getDocument(documentId = this.documentId) {
    const doc = this._getDocument(documentId);
    if (!doc) return null;

    return {
      id: doc.id,
      title: doc.title,
      text: doc.text,
      updatedAt: doc.updatedAt,
      history: doc.history.map((event) => ({ ...event, payload: { ...event.payload } })),
      snapshots: doc.snapshots.map((snapshot) => ({ ...snapshot }))
    };
  }

  getHistory(documentId = this.documentId, limit = null) {
    const history = this._getDocument(documentId)?.history || [];
    const slice = limit == null ? history : history.slice(-limit);
    return slice.map((event) => ({ ...event, payload: { ...event.payload } }));
  }

  getSnapshots(documentId = this.documentId, limit = null) {
    const snapshots = this._getDocument(documentId)?.snapshots || [];
    const slice = limit == null ? snapshots : snapshots.slice(-limit);
    return slice.map((snapshot) => ({ ...snapshot }));
  }

  createDocument(documentId, text = '', meta = {}) {
    const doc = this._ensureDocument(documentId, text, meta);
    this._setSnapshot(documentId, text, meta.reason || 'Document created');
    this._persist();
    return {
      id: doc.id,
      title: doc.title,
      text: doc.text,
      updatedAt: doc.updatedAt
    };
  }

  hasDocument(documentId) {
    return this.documents.has(documentId);
  }

  switchDocument(documentId) {
    if (!this.documents.has(documentId)) {
      throw new Error(`Unknown document: ${documentId}`);
    }
    this.documentId = documentId;
    this._persist();
    return this.getContents(documentId);
  }

  /**
   * Apply a SyncEvent mutation to the target document.
   * Returns the normalized event with a concrete document id and patch metadata.
   * @param {SyncEvent} event
   */
  applyMutation(event) {
    const normalized = this._normalizeEvent(event);
    const { type, payload } = normalized;
    const { targetDocId, lineStart, lineEnd, text } = payload;
    const doc = this._ensureDocument(targetDocId, '');
    const previousText = doc.text;
    const beforeLines = previousText.split('\n');
    let nextText = previousText;

    if (type === 'append') {
      nextText = previousText + text;
    } else if (type === 'replace') {
      if (lineStart === undefined) {
        nextText = text;
      } else {
        const end = lineEnd !== undefined ? lineEnd : lineStart;
        const lines = beforeLines.slice();
        lines.splice(lineStart, (end - lineStart) + 1, text);
        nextText = lines.join('\n');
      }
    } else if (type === 'delete') {
      if (lineStart !== undefined) {
        const end = lineEnd !== undefined ? lineEnd : lineStart;
        const lines = beforeLines.slice();
        lines.splice(lineStart, (end - lineStart) + 1);
        nextText = lines.join('\n');
      }
    }

    doc.text = nextText;
    doc.updatedAt = normalized.timestamp;
    doc.title = this._inferTitle(nextText, targetDocId);
    doc.history.push({
      ...normalized,
      payload: {
        ...normalized.payload,
        patch: {
          type,
          lineStart: payload.lineStart ?? null,
          lineEnd: payload.lineEnd ?? null,
          text: payload.text ?? '',
          beforeText: this._extractRange(previousText, payload.lineStart, payload.lineEnd),
          afterText: this._extractRange(nextText, payload.lineStart, payload.lineEnd)
        }
      }
    });
    if (doc.history.length > this.historyLimit) {
      doc.history = doc.history.slice(-this.historyLimit);
    }

    this._setSnapshot(targetDocId, nextText, `${type} by ${normalized.source}`);
    if (targetDocId === this.documentId) {
      this.documentId = targetDocId;
    }
    this._persist();
    return normalized;
  }

  /** Replace the full text for a document and make it current. */
  load(text, documentId = this.documentId) {
    const doc = this._ensureDocument(documentId, text, { updatedAt: new Date().toISOString() });
    doc.text = text;
    doc.updatedAt = new Date().toISOString();
    doc.title = this._inferTitle(text, documentId);
    this.documentId = documentId;
    this._setSnapshot(documentId, text, 'Document loaded');
    this._persist();
  }

  /** Clear persisted state for a document and reset it to given text. */
  reset(text, documentId = this.documentId) {
    const doc = this._ensureDocument(documentId, text);
    doc.text = text;
    doc.history = [];
    doc.snapshots = [];
    doc.updatedAt = new Date().toISOString();
    doc.title = this._inferTitle(text, documentId);
    this._setSnapshot(documentId, text, 'Document reset');
    this.documentId = documentId;
    this._persist();
  }

  static hasSaved(storageKey) {
    return localStorage.getItem(`${storageKey}:docs`) !== null;
  }

  _loadPersistedState(initialText, initialDocumentId) {
    const docsRaw = localStorage.getItem(this.docsStorageKey);
    const meta = this._loadMeta();

    if (docsRaw) {
      try {
        const parsed = JSON.parse(docsRaw);
        for (const [id, doc] of Object.entries(parsed)) {
          this.documents.set(id, {
            id,
            title: doc.title || this._inferTitle(doc.text || '', id),
            text: doc.text || '',
            updatedAt: doc.updatedAt || new Date().toISOString(),
            history: Array.isArray(doc.history) ? doc.history : [],
            snapshots: Array.isArray(doc.snapshots) ? doc.snapshots : []
          });
        }
      } catch {
        this.documents.clear();
      }
    }

    if (!this.documents.size) {
      this._ensureDocument(initialDocumentId, initialText);
      this._setSnapshot(initialDocumentId, initialText, 'Initial document');
    }

    const preferredId = meta?.documentId || initialDocumentId;
    this.documentId = this.documents.has(preferredId)
      ? preferredId
      : Array.from(this.documents.keys())[0];
    this._persist();
  }

  _normalizeEvent(event) {
    const payload = { ...(event.payload || {}) };
    const targetDocId = !payload.targetDocId || payload.targetDocId === 'current'
      ? this.documentId
      : payload.targetDocId;

    return {
      ...event,
      payload: {
        ...payload,
        targetDocId
      }
    };
  }

  _ensureDocument(documentId, text = '', meta = {}) {
    if (!this.documents.has(documentId)) {
      this.documents.set(documentId, {
        id: documentId,
        title: meta.title || this._inferTitle(text, documentId),
        text,
        updatedAt: meta.updatedAt || new Date().toISOString(),
        history: [],
        snapshots: []
      });
    }
    return this.documents.get(documentId);
  }

  _getDocument(documentId) {
    return this.documents.get(documentId) || null;
  }

  _setSnapshot(documentId, text, reason) {
    const doc = this._ensureDocument(documentId, text);
    const latest = doc.snapshots[doc.snapshots.length - 1];
    if (latest && latest.text === text) return;

    doc.snapshots.push({
      id: `${documentId}:snap:${Date.now()}`,
      documentId,
      createdAt: new Date().toISOString(),
      reason,
      text
    });

    if (doc.snapshots.length > this.snapshotLimit) {
      doc.snapshots = doc.snapshots.slice(-this.snapshotLimit);
    }
  }

  _extractRange(text, lineStart, lineEnd) {
    if (lineStart === undefined || lineStart === null) return text;
    const lines = text.split('\n');
    const end = lineEnd !== undefined && lineEnd !== null ? lineEnd : lineStart;
    return lines.slice(lineStart, end + 1).join('\n');
  }

  _inferTitle(text, fallbackId) {
    const firstNonEmpty = String(text)
      .split('\n')
      .find((line) => line.trim() !== '');
    return firstNonEmpty || fallbackId;
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

  _persist() {
    if (!this.storageKey) return;

    const serializableDocs = {};
    for (const [id, doc] of this.documents) {
      serializableDocs[id] = {
        id: doc.id,
        title: doc.title,
        text: doc.text,
        updatedAt: doc.updatedAt,
        history: doc.history,
        snapshots: doc.snapshots
      };
    }

    localStorage.setItem(this.docsStorageKey, JSON.stringify(serializableDocs));
    this._persistMeta();
  }

  _persistMeta() {
    if (!this.metaStorageKey) return;
    localStorage.setItem(this.metaStorageKey, JSON.stringify({
      documentId: this.documentId
    }));
  }
}
