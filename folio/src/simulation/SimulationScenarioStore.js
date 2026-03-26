export class SimulationScenarioStore {
  constructor(storagePrefix = 'folio:simulation') {
    this.storagePrefix = storagePrefix;
    this.scenariosKey = `${storagePrefix}:scenarios`;
    this.ledgerKey = `${storagePrefix}:ledger`;
    this.snapshotsKey = `${storagePrefix}:snapshots`;
    this.scenarios = new Map();
    this.ledger = [];
    this.snapshots = new Map();
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

  getSnapshot(profileId = 'profile:default') {
    const snapshot = this.snapshots.get(profileId);
    return snapshot ? cloneSnapshot(snapshot) : null;
  }

  saveSnapshot(snapshot) {
    if (!snapshot?.profile_id) {
      throw new Error('Snapshot must include profile_id');
    }
    const normalized = normalizeSnapshot(snapshot);
    this.snapshots.set(normalized.profile_id, normalized);
    this._persist();
    return cloneSnapshot(normalized);
  }

  listSnapshots() {
    return Array.from(this.snapshots.values()).map(cloneSnapshot);
  }

  appendLedger(entry) {
    const normalized = normalizeLedgerEntry(entry, this.ledger.length);
    this.ledger.push(normalized);
    if (this.ledger.length > 100) {
      this.ledger = this.ledger.slice(-100);
    }
    this._persist();
    return cloneLedgerEntry(this.ledger[this.ledger.length - 1]) || null;
  }

  getLedger(limit = null) {
    const slice = limit == null ? this.ledger : this.ledger.slice(-limit);
    return slice.map(cloneLedgerEntry);
  }

  reset() {
    this.scenarios = new Map();
    this.ledger = [];
    this.snapshots = new Map();
    this._persist();
  }

  _load() {
    const rawScenarios = localStorage.getItem(this.scenariosKey);
    const rawLedger = localStorage.getItem(this.ledgerKey);
    const rawSnapshots = localStorage.getItem(this.snapshotsKey);

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
        this.ledger = Array.isArray(parsed)
          ? parsed.map((item, index) => normalizeLedgerEntry(item, index))
          : [];
      } catch {
        this.ledger = [];
      }
    }

    if (rawSnapshots) {
      try {
        const parsed = JSON.parse(rawSnapshots);
        for (const snapshot of Array.isArray(parsed) ? parsed : []) {
          const normalized = normalizeSnapshot(snapshot);
          this.snapshots.set(normalized.profile_id, normalized);
        }
      } catch {
        this.snapshots.clear();
      }
    }
  }

  _persist() {
    localStorage.setItem(
      this.scenariosKey,
      JSON.stringify(Array.from(this.scenarios.values()).map(cloneScenario))
    );
    localStorage.setItem(this.ledgerKey, JSON.stringify(this.ledger));
    localStorage.setItem(
      this.snapshotsKey,
      JSON.stringify(Array.from(this.snapshots.values()).map(cloneSnapshot))
    );
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

function normalizeSnapshot(snapshot) {
  const backend = snapshot.backend_state || snapshot.snapshot || {};
  return {
    id: snapshot.id || `snapshot:${snapshot.profile_id}`,
    profile_id: snapshot.profile_id,
    scenario_id: snapshot.scenario_id || null,
    operation: snapshot.operation || 'generateDay',
    timestamp: snapshot.timestamp || new Date().toISOString(),
    prompt_version: snapshot.prompt_version || null,
    seed: snapshot.seed || null,
    summary: cloneSummary(snapshot.summary),
    backend_state: {
      email: Array.isArray(backend.email) ? backend.email.map((item) => ({ ...item })) : [],
      chat: cloneChatSnapshot(backend.chat),
      cal: Array.isArray(backend.cal) ? backend.cal.map((item) => ({ ...item })) : []
    }
  };
}

function cloneSnapshot(snapshot) {
  return normalizeSnapshot(snapshot);
}

function cloneChatSnapshot(chat) {
  if (!chat || typeof chat !== 'object') return {};
  const grouped = {};
  for (const [channel, items] of Object.entries(chat)) {
    grouped[channel] = Array.isArray(items) ? items.map((item) => ({ ...item })) : [];
  }
  return grouped;
}

function cloneSummary(summary) {
  if (!summary || typeof summary !== 'object') return null;
  return {
    ...summary,
    surfaces: Array.isArray(summary.surfaces) ? [...summary.surfaces] : [],
    counts: summary.counts ? { ...summary.counts } : null
  };
}

function normalizeLedgerEntry(entry, index = 0) {
  const timestamp = entry?.timestamp || new Date().toISOString();
  const numericId = String(index + 1).padStart(5, '0');
  return {
    id: entry?.id || `gen-${numericId}`,
    profile_id: entry?.profile_id || 'profile:default',
    scenario_id: entry?.scenario_id || null,
    snapshot_id: entry?.snapshot_id || null,
    surface: normalizeSurface(entry?.surface || entry?.input_summary?.surface || null),
    operation: entry?.operation || 'generateDay',
    timestamp,
    prompt_version: entry?.prompt_version || null,
    seed: entry?.seed || null,
    prompt_summary: normalizePromptSummary(entry?.prompt_summary),
    input_summary: normalizeInputSummary(entry?.input_summary),
    output_ids: Array.isArray(entry?.output_ids) ? [...entry.output_ids] : [],
    output_counts: entry?.output_counts ? { ...entry.output_counts } : null
  };
}

function cloneLedgerEntry(entry) {
  return normalizeLedgerEntry(entry);
}

function normalizeSurface(surface) {
  if (!surface) return null;
  if (typeof surface === 'string') {
    return { kind: surface };
  }
  return { ...surface };
}

function normalizePromptSummary(summary) {
  if (!summary || typeof summary !== 'object') return null;
  return {
    ...summary,
    surface: normalizeSurface(summary.surface)
  };
}

function normalizeInputSummary(summary) {
  if (!summary || typeof summary !== 'object') return null;
  return {
    ...summary,
    surface: normalizeSurface(summary.surface)
  };
}
