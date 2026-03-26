import { resolveNoteTransclusion } from '../core/TransclusionResolver.js';

/**
 * Document-scoped Python runtime.
 *
 * The runtime evaluates ::py blocks in document order against a single
 * shared Python namespace. By default, only owned-state namespaces are
 * exposed to Python. Mirrored-state namespaces require explicit grants.
 */
export class NamespaceBridge {
  constructor(registry, parser, store, policy = null) {
    this.registry = registry;
    this.parser = parser;
    this.store = store;
    this.policy = policy;

    this.worker = null;
    this.ready = false;
    this.pendingResolves = new Map();

    this.results = new Map();
    this.listeners = new Set();
    this.lastText = '';
    this.lastIndex = [];
    this.evalSeq = 0;

    this.ownedNamespaces = new Set(['task', 'note', 'table', 'contact', 'file', 'doc']);
    this.mirroredNamespaces = new Set(['cal', 'email', 'chat', 'web']);
    this.aliases = {
      task: ['task', 'tasks'],
      note: ['note', 'notes'],
      table: ['table', 'tables'],
      contact: ['contact', 'contacts'],
      file: ['file', 'files'],
      cal: ['cal'],
      email: ['email'],
      chat: ['chat'],
      web: ['web'],
      doc: ['doc']
    };
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  _notify() {
    for (const cb of this.listeners) cb(this.results);
  }

  getBlockKey(descriptor) {
    return descriptor.id
      ? `${descriptor.type}:${descriptor.id}`
      : `${descriptor.type}@${descriptor.lineStart}`;
  }

  getBlockState(descriptorOrKey) {
    const key = typeof descriptorOrKey === 'string'
      ? descriptorOrKey
      : this.getBlockKey(descriptorOrKey);
    return this.results.get(key) || null;
  }

  getBlockSecurity(descriptorOrKey) {
    const descriptor = typeof descriptorOrKey === 'string'
      ? this.lastIndex.find((item) => this.getBlockKey(item) === descriptorOrKey) || null
      : descriptorOrKey;

    if (!descriptor || descriptor.type !== 'py') {
      return {
        trusted: this.policy?.isTrusted?.() || false,
        requested: [],
        allowed: [],
        denied: []
      };
    }

    const requested = this._requestedNamespaces(descriptor);
    const allowed = [];
    const denied = [];

    for (const ns of requested) {
      const auth = this.registry.authorize(ns, 'query');
      if (auth.allowed) {
        allowed.push(ns);
      } else {
        denied.push({ namespace: ns, ...auth });
      }
    }

    return {
      trusted: this.policy?.isTrusted?.() || false,
      requested,
      allowed,
      denied
    };
  }

  async init() {
    if (this.ready) return;
    if (this._initPromise) return this._initPromise;

    this._initPromise = new Promise((resolve, reject) => {
      this.worker = new Worker(new URL('./PyodideWorker.js', import.meta.url), { type: 'module' });

      this.worker.onmessage = (e) => {
        const { type, error } = e.data;
        if (type === 'ready') {
          this.ready = true;
          resolve();
        } else if (type === 'eval_result') {
          const resolveRun = this.pendingResolves.get(e.data.requestId);
          if (resolveRun) {
            resolveRun(e.data);
            this.pendingResolves.delete(e.data.requestId);
          }
        } else if (type === 'error') {
          const resolveRun = this.pendingResolves.get(e.data.requestId);
          if (resolveRun) {
            resolveRun({ error });
            this.pendingResolves.delete(e.data.requestId);
          } else if (!this.ready) {
            reject(new Error(error));
          }
        }
      };

      this.worker.postMessage({ type: 'init' });
    });

    return this._initPromise;
  }

  async syncDocument(text, index) {
    this.lastText = text;
    this.lastIndex = index;

    const pyBlocks = index.filter(d => d.type === 'py');
    if (pyBlocks.length === 0) {
      if (this.results.size > 0) {
        this.results.clear();
        this._notify();
      }
      return;
    }

    if (!pyBlocks.some(block => (block.params.run || 'manual') === 'auto')) {
      const next = new Map();
      for (const block of pyBlocks) {
        next.set(this.getBlockKey(block), {
          key: this.getBlockKey(block),
          status: 'manual',
          stdout: '',
          error: null,
          context: {},
          lineStart: block.lineStart
        });
      }
      this.results = next;
      this._notify();
      return;
    }

    await this.evaluateDocument();
  }

  async runBlock(descriptorOrKey) {
    const triggerKey = typeof descriptorOrKey === 'string'
      ? descriptorOrKey
      : this.getBlockKey(descriptorOrKey);
    return this.evaluateDocument({ triggerKey });
  }

  async evaluateDocument({ triggerKey = null } = {}) {
    if (!this.ready) await this.init();

    const text = this.lastText || this.store.getContents();
    const index = this.lastIndex.length ? this.lastIndex : this.parser.parse(text);
    const pyBlocks = index.filter(d => d.type === 'py');
    const requestId = `eval-${++this.evalSeq}`;

    if (pyBlocks.length === 0) {
      this.results.clear();
      this._notify();
      return this.results;
    }

    const securityByKey = new Map();
    const grantedMirrored = this._collectGrantedNamespaces(pyBlocks, securityByKey);
    const globals = await this._buildGlobals(text, index, grantedMirrored);

    const blocks = pyBlocks.map((descriptor) => {
      const key = this.getBlockKey(descriptor);
      const runMode = descriptor.params.run || 'manual';
      const security = securityByKey.get(key) || this.getBlockSecurity(descriptor);
      const execute = (runMode === 'auto' || key === triggerKey) && security.denied.length === 0;
      return {
        key,
        id: descriptor.id,
        code: (descriptor.body || []).join('\n'),
        execute
      };
    });

    const response = await new Promise((resolve) => {
      this.pendingResolves.set(requestId, resolve);
      this.worker.postMessage({
        type: 'eval_document',
        requestId,
        blocks,
        globals
      });
    });

    if (requestId !== `eval-${this.evalSeq}`) {
      return this.results;
    }

    if (response.error) {
      const next = new Map();
      for (const block of pyBlocks) {
        next.set(this.getBlockKey(block), {
          key: this.getBlockKey(block),
          status: 'error',
          stdout: '',
          error: response.error,
          context: {},
          lineStart: block.lineStart
        });
      }
      this.results = next;
      this._notify();
      return next;
    }

    const next = new Map();
    for (const block of pyBlocks) {
      const key = this.getBlockKey(block);
      const result = response.results?.[key] || {};
      const security = securityByKey.get(key) || this.getBlockSecurity(block);
      let status = result.status || ((block.params.run || 'manual') === 'auto' ? 'ok' : 'manual');
      let error = result.error || null;

      if (security.denied.length > 0) {
        status = 'denied';
        error = this._formatDeniedMessage(security);
      }

      next.set(key, {
        key,
        status,
        stdout: result.stdout || '',
        error,
        context: result.context || {},
        lineStart: block.lineStart,
        requestedMirrored: security.requested,
        allowedMirrored: security.allowed,
        deniedMirrored: security.denied
      });
    }

    this.results = next;
    this._notify();
    return next;
  }

  _collectGrantedNamespaces(pyBlocks, securityByKey = new Map()) {
    const granted = new Set();

    for (const block of pyBlocks) {
      const key = this.getBlockKey(block);
      const security = this.getBlockSecurity(block);
      securityByKey.set(key, security);
      for (const ns of security.allowed) {
        granted.add(ns);
      }
    }

    return granted;
  }

  _requestedNamespaces(block) {
    const requested = [];
    const raw = block.params.grants || block.params.allow || '';
    if (!raw) return requested;

    for (const token of raw.split(/[,\s]+/).map((s) => s.trim()).filter(Boolean)) {
      const canonical = this._canonicalNamespace(token);
      if (canonical && this.mirroredNamespaces.has(canonical) && !requested.includes(canonical)) {
        requested.push(canonical);
      }
    }

    return requested;
  }

  _canonicalNamespace(name) {
    for (const [canonical, aliases] of Object.entries(this.aliases)) {
      if (aliases.includes(name)) return canonical;
    }
    return null;
  }

  _formatDeniedMessage(security) {
    if (!security.trusted) {
      return 'Document is untrusted. Trust it and grant mirrored capabilities before running this block.';
    }

    const grants = security.denied
      .map((item) => item.grant)
      .filter(Boolean)
      .join(', ');
    return grants
      ? `Missing capability grants: ${grants}.`
      : 'Capability access denied.';
  }

  async _buildGlobals(text, index, grantedMirrored) {
    const globals = this._buildOwnedGlobals(text, index);

    for (const ns of grantedMirrored) {
      const data = await this.registry.query(ns, {});
      if (data != null) {
        for (const alias of this.aliases[ns] || [ns]) {
          globals[alias] = data;
        }
      }
    }

    return globals;
  }

  _buildOwnedGlobals(text, index) {
    const tasks = {};
    const notes = {};
    const tables = {};
    const contacts = {};
    const files = {};

    for (const descriptor of index) {
      if (descriptor.type === 'task') {
        tasks[descriptor.id] = { id: descriptor.id, ...descriptor.params };
      }

      if (descriptor.type === 'note') {
        const resolved = resolveNoteTransclusion(descriptor, text, index, {
          store: this.store,
          parser: this.parser,
          currentDocumentId: this.store.getDocumentId()
        });
        notes[descriptor.id] = {
          id: descriptor.id,
          ...descriptor.params,
          source: resolved.source,
          sourceDocumentId: resolved.sourceDocumentId,
          field: resolved.field,
          text: resolved.text,
          error: resolved.error
        };
      }

      if (descriptor.type === 'table') {
        tables[descriptor.id] = this._parseTableRows(descriptor.body || []);
      }

      if (descriptor.type === 'contact') {
        contacts[descriptor.id] = this._parseContact(descriptor);
      }

      if (descriptor.type === 'file') {
        files[descriptor.id] = { id: descriptor.id, path: descriptor.id, ...descriptor.params };
      }
    }

    return {
      task: tasks,
      tasks,
      note: notes,
      notes,
      table: tables,
      tables,
      contact: contacts,
      contacts,
      file: files,
      files,
      doc: {
        line_count: text.split('\n').length,
        directives: index.map(d => ({
          type: d.type,
          id: d.id,
          line_start: d.lineStart,
          line_end: d.lineEnd
        }))
      }
    };
  }

  _parseTableRows(body) {
    const rows = (body || [])
      .map(line => line.trim())
      .filter(line => line.startsWith('|'))
      .map(line => line.split('|').slice(1, -1).map(cell => cell.trim()));

    if (rows.length === 0) return [];

    const [headers, ...dataRows] = rows;
    return dataRows.map((row) => {
      const obj = {};
      headers.forEach((header, i) => {
        const key = header.toLowerCase().replace(/\s+/g, '_');
        const raw = row[i] ?? '';
        const num = Number(raw.replace(/,/g, ''));
        obj[key] = !Number.isNaN(num) && raw !== '' ? num : raw;
      });
      return obj;
    });
  }

  _parseContact(descriptor) {
    const fields = { id: descriptor.id };
    const logs = [];

    for (const line of (descriptor.body || [])) {
      const match = line.match(/^(\w+)\s*=\s*(.+)$/);
      if (match) {
        fields[match[1]] = match[2].trim();
      } else if (line.trim()) {
        logs.push(line.trim());
      }
    }

    if (logs.length > 0) fields.log = logs;
    return fields;
  }
}
