/**
 * The registry that maps directive types to renderer implementations.
 */
export class CapabilityRegistry {
  constructor(policy = null) {
    this.policy = policy;
    this.classes = new Map();
    this.instances = new Map();
    this.manifests = new Map();
  }

  /**
   * Register a renderer implementation for a type.
   * @param {string} type 
   * @param {typeof RendererBase} rendererClass 
   */
  register(type, rendererClass) {
    this.classes.set(type, rendererClass);
  }

  /**
   * Initialize all registered renderers.
   */
  async init() {
    for (const [type, Renderer] of this.classes) {
      const instance = new Renderer();
      const manifest = this._normalizeManifest(type, instance.manifest);
      await instance.init();
      this.instances.set(type, instance);
      this.manifests.set(type, manifest);
    }
  }

  /**
   * Get an instance of a renderer for a directive type.
   * @param {string} type 
   */
  getInstance(type) {
    return this.instances.get(type) || null;
  }

  getManifest(type) {
    return this.manifests.get(type) || null;
  }

  authorize(type, action = 'render') {
    const manifest = this.getManifest(type);
    if (!manifest) {
      return { allowed: false, reason: 'unknown-renderer', manifest: null, grant: null };
    }

    if (manifest.trust !== 'mirrored') {
      return { allowed: true, reason: null, manifest, grant: null };
    }

    if (!this.policy?.isTrusted()) {
      return { allowed: false, reason: 'untrusted-document', manifest, grant: manifest.grants[action] || null };
    }

    const requiredGrant = manifest.grants[action] || null;
    if (requiredGrant && !this.policy.hasGrant(requiredGrant)) {
      return { allowed: false, reason: 'missing-grant', manifest, grant: requiredGrant };
    }

    return { allowed: true, reason: null, manifest, grant: requiredGrant };
  }

  /**
   * Query a specific renderer for data.
   */
  async query(type, params) {
    const auth = this.authorize(type, 'query');
    if (!auth.allowed) {
      return null;
    }

    const instance = this.getInstance(type);
    if (instance && typeof instance.query === 'function') {
      return await instance.query(params);
    }
    return null;
  }

  _normalizeManifest(type, manifest = {}) {
    const normalized = {
      type: manifest.type || type,
      capabilities: Array.isArray(manifest.capabilities) ? manifest.capabilities : [],
      trust: manifest.trust || 'owned',
      grants: manifest.grants || {}
    };

    if (normalized.type !== type) {
      throw new Error(`Renderer manifest type mismatch for ${type}`);
    }

    if (!['owned', 'mirrored'].includes(normalized.trust)) {
      throw new Error(`Renderer ${type} has invalid trust domain ${normalized.trust}`);
    }

    if (normalized.trust === 'mirrored') {
      const grantValues = Object.values(normalized.grants).filter(Boolean);
      if (grantValues.length === 0) {
        throw new Error(`Mirrored renderer ${type} must declare grants`);
      }
    }

    return normalized;
  }
}
