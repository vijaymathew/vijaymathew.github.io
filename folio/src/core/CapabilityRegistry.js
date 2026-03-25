/**
 * The registry that maps directive types to renderer implementations.
 */
export class CapabilityRegistry {
  constructor() {
    this.classes = new Map();
    this.instances = new Map();
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
      await instance.init();
      this.instances.set(type, instance);
    }
  }

  /**
   * Get an instance of a renderer for a directive type.
   * @param {string} type 
   */
  getInstance(type) {
    return this.instances.get(type) || null;
  }

  /**
   * Query a specific renderer for data.
   */
  async query(type, params) {
    const instance = this.getInstance(type);
    if (instance && typeof instance.query === 'function') {
      return await instance.query(params);
    }
    return null;
  }
}
