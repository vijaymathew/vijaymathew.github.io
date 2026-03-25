/**
 * Central event bus for document mutations.
 * Enforces the mutation contract: no renderer ever mutates strings directly.
 */
export class SyncBus {
  constructor(docStore) {
    this.store = docStore;
    this.subscribers = new Set();
  }

  /**
   * Register a callback for all SyncEvents.
   * @param {Function} callback
   */
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  /**
   * Emit a SyncEvent to the bus.
   * @param {SyncEvent} event
   */
  emit(event) {
    console.log('[SyncBus] Emitting event:', event);

    // 1. Validate the event
    this.validate(event);

    // 2. Apply to the DocumentStore
    this.store.applyMutation(event);

    // 3. Notify subscribers
    for (const sub of this.subscribers) {
      sub(event);
    }
  }

  /**
   * Validate a SyncEvent object.
   * @param {SyncEvent} event
   */
  validate(event) {
    if (!event.timestamp) throw new Error('SyncEvent: Missing timestamp');
    if (!event.source) throw new Error('SyncEvent: Missing source');
    if (!event.type) throw new Error('SyncEvent: Missing type');
    if (!event.payload) throw new Error('SyncEvent: Missing payload');
  }
}
