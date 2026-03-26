export class SimulationSecretsStore {
  constructor(storageKey = 'folio:simulation:secrets') {
    this.storageKey = storageKey;
  }

  getSecret(provider) {
    const secrets = this._load();
    return secrets[provider] || '';
  }

  setSecret(provider, value) {
    const secrets = this._load();
    const trimmed = String(value || '').trim();
    if (!trimmed) {
      delete secrets[provider];
    } else {
      secrets[provider] = trimmed;
    }
    this._persist(secrets);
    return this.getSecret(provider);
  }

  hasSecret(provider) {
    return !!this.getSecret(provider);
  }

  clearSecret(provider) {
    const secrets = this._load();
    delete secrets[provider];
    this._persist(secrets);
  }

  listProviders() {
    return Object.keys(this._load());
  }

  _load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (_err) {
      return {};
    }
  }

  _persist(secrets) {
    localStorage.setItem(this.storageKey, JSON.stringify(secrets));
  }
}
