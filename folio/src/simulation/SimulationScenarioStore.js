export class SimulationScenarioStore {
  constructor(storagePrefix = 'folio:simulation') {
    this.storagePrefix = storagePrefix;
    this.scenariosKey = `${storagePrefix}:scenarios`;
    this.ledgerKey = `${storagePrefix}:ledger`;
    this.scenarios = new Map();
    this.ledger = [];
    this._load();
  }

  getScenario(profileId = 'profile:default') {
    const scenario = this.scenarios.get(profileId);
    return scenario ? cloneScenario(scenario) : null;
  }

  saveScenario(scenario) {
    if (!scenario?.profile_id) {
      throw new Error('Scenario must include profile_id');
    }
    const normalized = normalizeScenario(scenario);
    this.scenarios.set(normalized.profile_id, normalized);
    this._persist();
    return cloneScenario(normalized);
  }

  listScenarios() {
    return Array.from(this.scenarios.values()).map(cloneScenario);
  }

  appendLedger(entry) {
    this.ledger.push({
      ...entry,
      timestamp: entry.timestamp || new Date().toISOString()
    });
    if (this.ledger.length > 100) {
      this.ledger = this.ledger.slice(-100);
    }
    this._persist();
    return this.getLedger(1)[0] || null;
  }

  getLedger(limit = null) {
    const slice = limit == null ? this.ledger : this.ledger.slice(-limit);
    return slice.map((item) => ({ ...item }));
  }

  reset() {
    this.scenarios = new Map();
    this.ledger = [];
    this._persist();
  }

  _load() {
    const rawScenarios = localStorage.getItem(this.scenariosKey);
    const rawLedger = localStorage.getItem(this.ledgerKey);

    if (rawScenarios) {
      try {
        const parsed = JSON.parse(rawScenarios);
        for (const scenario of parsed) {
          const normalized = normalizeScenario(scenario);
          this.scenarios.set(normalized.profile_id, normalized);
        }
      } catch {
        this.scenarios.clear();
      }
    }

    if (rawLedger) {
      try {
        const parsed = JSON.parse(rawLedger);
        this.ledger = Array.isArray(parsed) ? parsed.map((item) => ({ ...item })) : [];
      } catch {
        this.ledger = [];
      }
    }
  }

  _persist() {
    localStorage.setItem(
      this.scenariosKey,
      JSON.stringify(Array.from(this.scenarios.values()).map(cloneScenario))
    );
    localStorage.setItem(this.ledgerKey, JSON.stringify(this.ledger));
  }
}

function normalizeScenario(scenario) {
  return {
    id: scenario.id || `scenario:${scenario.profile_id}`,
    profile_id: scenario.profile_id,
    date: scenario.date || '',
    phase: scenario.phase || 'generated',
    facts: Array.isArray(scenario.facts) ? [...scenario.facts] : [],
    threads: Array.isArray(scenario.threads) ? scenario.threads.map((item) => ({ ...item })) : [],
    open_loops: Array.isArray(scenario.open_loops) ? scenario.open_loops.map((item) => ({ ...item })) : []
  };
}

function cloneScenario(scenario) {
  return normalizeScenario(scenario);
}
