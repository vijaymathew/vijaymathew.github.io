const DEFAULT_SETTINGS = {
  provider: 'auto',
  webllm: {
    model: '',
    temperature: 0.7,
    maxTokens: 900
  }
};

export class SimulationSettingsStore {
  constructor(storageKey = 'folio:simulation:settings') {
    this.storageKey = storageKey;
  }

  getSettings() {
    return mergeSettings(DEFAULT_SETTINGS, this._load());
  }

  saveSettings(next = {}) {
    const merged = mergeSettings(this.getSettings(), next);
    localStorage.setItem(this.storageKey, JSON.stringify(merged));
    return merged;
  }

  reset() {
    localStorage.removeItem(this.storageKey);
    return this.getSettings();
  }

  static hasSaved(storageKey = 'folio:simulation:settings') {
    return !!localStorage.getItem(storageKey);
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
}

function mergeSettings(base, incoming) {
  const next = incoming && typeof incoming === 'object' ? incoming : {};
  return {
    provider: next.provider || base.provider,
    webllm: {
      model: next.webllm?.model ?? base.webllm.model,
      temperature: next.webllm?.temperature ?? base.webllm.temperature,
      maxTokens: next.webllm?.maxTokens ?? base.webllm.maxTokens
    }
  };
}
