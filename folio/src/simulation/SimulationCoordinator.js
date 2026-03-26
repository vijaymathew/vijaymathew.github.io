import { MockEmailBackend } from '../backends/MockEmailBackend.js';
import { MockChatBackend } from '../backends/MockChatBackend.js';
import { MockCalBackend } from '../backends/MockCalBackend.js';
import { SimulationDocumentNormalizer } from './SimulationDocumentNormalizer.js';
import { SimulationDocumentPromptBuilder } from './SimulationDocumentPromptBuilder.js';
import { SimulationPromptBuilder } from './SimulationPromptBuilder.js';
import { SimulationNormalizer } from './SimulationNormalizer.js';

/**
 * First slice of the simulation layer.
 *
 * This coordinator does not generate content yet. It exists to define the
 * integration boundary for future LLM-backed scenario generation:
 *   profile/scenario -> coordinator -> normalized backend state -> renderers
 */
export class SimulationCoordinator {
  constructor(opts = {}) {
    this.emailBackend = opts.emailBackend || MockEmailBackend;
    this.chatBackend = opts.chatBackend || MockChatBackend;
    this.calBackend = opts.calBackend || MockCalBackend;
    this.profileStore = opts.profileStore || null;
    this.scenarioStore = opts.scenarioStore || null;
    this.promptBuilder = opts.promptBuilder || new SimulationPromptBuilder();
    this.normalizer = opts.normalizer || new SimulationNormalizer();
    this.documentPromptBuilder = opts.documentPromptBuilder || new SimulationDocumentPromptBuilder();
    this.documentNormalizer = opts.documentNormalizer || new SimulationDocumentNormalizer();
    this.llmClient = opts.llmClient || null;
    this.now = opts.now || (() => new Date().toISOString());
  }

  setLLMClient(client) {
    if (!client || typeof client.generate !== 'function') {
      throw new Error('SimulationCoordinator.setLLMClient(client) expects a client with generate(prompt)');
    }
    this.llmClient = client;
    return this.getClientInfo();
  }

  getClientInfo() {
    if (!this.llmClient || typeof this.llmClient.getClientInfo !== 'function') {
      return { kind: 'unknown', label: 'Unknown simulation client' };
    }
    return this.llmClient.getClientInfo();
  }

  getClientStatus() {
    if (!this.llmClient || typeof this.llmClient.getStatus !== 'function') {
      return {
        phase: 'idle',
        ready: false,
        available: null,
        message: 'No simulation provider configured.'
      };
    }
    return this.llmClient.getStatus();
  }

  exportState() {
    return {
      email: this.emailBackend.exportState(),
      chat: this.chatBackend.exportState(),
      cal: this.calBackend.exportState()
    };
  }

  importState(snapshot = {}) {
    if (snapshot.email) {
      this.emailBackend.importState(snapshot.email);
    }
    if (snapshot.chat) {
      this.chatBackend.importState(snapshot.chat);
    }
    if (snapshot.cal) {
      this.calBackend.importState(snapshot.cal);
    }
    return this.exportState();
  }

  resetState(snapshot = null) {
    if (snapshot) {
      this.emailBackend.reset(snapshot.email || []);
      this.chatBackend.reset(snapshot.chat || {});
      this.calBackend.reset(snapshot.cal || []);
      return this.exportState();
    }

    this.emailBackend.reset();
    this.chatBackend.reset();
    this.calBackend.reset();
    return this.exportState();
  }

  seedState(generated = {}) {
    if (generated.email?.length) {
      this.emailBackend.seed(generated.email);
    }
    if (generated.chat && Object.keys(generated.chat).length > 0) {
      this.chatBackend.seed(generated.chat);
    }
    if (generated.cal?.length) {
      this.calBackend.seed(generated.cal);
    }
    return this.exportState();
  }

  applyNormalizedGeneration(result = {}, options = {}) {
    const replace = options.replace === true;
    const summary = {
      timestamp: this.now(),
      surfaces: [],
      counts: {
        email: 0,
        chat: 0,
        cal: 0
      }
    };

    if (replace) {
      this.emailBackend.reset(result.email || []);
      this.chatBackend.reset(result.chat || {});
      this.calBackend.reset(result.cal || []);
    } else if (result.email?.length) {
      this.emailBackend.upsertMessages(result.email);
      summary.surfaces.push('email');
      summary.counts.email = result.email.length;
    }

    if (replace) {
      summary.counts.email = Array.isArray(result.email) ? result.email.length : 0;
      summary.counts.chat = Object.values(result.chat || {}).reduce((count, items) => count + items.length, 0);
      summary.counts.cal = Array.isArray(result.cal) ? result.cal.length : 0;
      if (summary.counts.email > 0) summary.surfaces.push('email');
      if (summary.counts.chat > 0) summary.surfaces.push('chat');
      if (summary.counts.cal > 0) summary.surfaces.push('cal');
    } else if (result.chat) {
      let count = 0;
      for (const [channel, messages] of Object.entries(result.chat)) {
        this.chatBackend.upsertMessages(channel, messages);
        count += messages.length;
      }
      if (count > 0) {
        summary.surfaces.push('chat');
        summary.counts.chat = count;
      }
    }

    if (!replace && result.cal?.length) {
      this.calBackend.upsertEvents(result.cal);
      summary.surfaces.push('cal');
      summary.counts.cal = result.cal.length;
    }

    return {
      status: 'applied',
      summary,
      snapshot: this.exportState()
    };
  }

  async generateDay(context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateDay',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) {
      return {
        status: 'error',
        operation: 'generateDay',
        timestamp: this.now(),
        error: 'No simulation profile available.'
      };
    }

    const date = context.date || this._localDateString();
    const existing = this._getCompatibleScenario(profile);
    const prompt = this.promptBuilder.buildDayPrompt(profile, existing, {
      date,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateDay',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date,
      prompt
    });
    const applied = this.applyNormalizedGeneration(normalized, { replace: true });

    this._recordGeneration(profile, normalized.scenario, applied, {
      operation: 'generateDay',
      prompt,
      surface: prompt.context?.surface || { kind: 'day' },
      outputIds: normalized.outputIds,
      outputCounts: {
        email: normalized.email.length,
        chat: Object.values(normalized.chat).reduce((sum, items) => sum + items.length, 0),
        cal: normalized.cal.length
      },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        threads: (normalized.scenario.threads || []).length,
        surface: prompt.context?.surface || { kind: 'day' }
      }
    });

    return {
      status: 'generated',
      operation: 'generateDay',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: normalized.email,
        chat: normalized.chat,
        cal: normalized.cal
      },
      summary: applied.summary,
      snapshot: applied.snapshot
    };
  }

  async generateInbox(context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateInbox',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('generateInbox');

    const date = context.date || this._localDateString();
    const existing = this._getCompatibleScenario(profile);
    const prompt = this.promptBuilder.buildInboxPrompt(profile, existing, {
      date,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateInbox',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date,
      prompt
    });
    const applied = this.applyNormalizedGeneration({
      email: normalized.email,
      chat: {},
      cal: []
    });

    this._recordGeneration(profile, normalized.scenario, applied, {
      operation: 'generateInbox',
      prompt,
      surface: prompt.context?.surface || { kind: 'inbox' },
      outputIds: normalized.email.map((item) => item.id),
      outputCounts: {
        email: normalized.email.length,
        chat: 0,
        cal: 0
      },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        threads: (normalized.scenario.threads || []).length,
        surface: prompt.context?.surface || { kind: 'inbox' }
      }
    });

    return {
      status: 'generated',
      operation: 'generateInbox',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: normalized.email,
        chat: {},
        cal: []
      },
      summary: applied.summary,
      snapshot: applied.snapshot
    };
  }

  async generateChannel(channelId, context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateChannel',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('generateChannel');

    const date = context.date || this._localDateString();
    const existing = this._getCompatibleScenario(profile);
    const prompt = this.promptBuilder.buildChatPrompt(profile, existing, {
      date,
      channelId,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateChannel',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date,
      prompt
    });
    const applied = this.applyNormalizedGeneration({
      email: [],
      chat: normalized.chat,
      cal: []
    });

    this._recordGeneration(profile, normalized.scenario, applied, {
      operation: 'generateChannel',
      prompt,
      surface: prompt.context?.surface || { kind: 'chat', channelId },
      outputIds: Object.values(normalized.chat).flat().map((item) => item.id),
      outputCounts: {
        email: 0,
        chat: Object.values(normalized.chat).reduce((sum, items) => sum + items.length, 0),
        cal: 0
      },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        channelId: prompt.context?.surface?.channelId || channelId,
        surface: prompt.context?.surface || { kind: 'chat', channelId }
      }
    });

    return {
      status: 'generated',
      operation: 'generateChannel',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: [],
        chat: normalized.chat,
        cal: []
      },
      summary: applied.summary,
      snapshot: applied.snapshot
    };
  }

  async generateCalendar(calendarId = 'today', context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateCalendar',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('generateCalendar');

    const date = context.date || this._localDateString();
    const existing = this._getCompatibleScenario(profile);
    const prompt = this.promptBuilder.buildCalendarPrompt(profile, existing, {
      date,
      calendarId,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateCalendar',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date,
      prompt
    });
    const applied = this.applyNormalizedGeneration({
      email: [],
      chat: {},
      cal: normalized.cal
    });

    this._recordGeneration(profile, normalized.scenario, applied, {
      operation: 'generateCalendar',
      prompt,
      surface: prompt.context?.surface || { kind: 'calendar', calendarId },
      outputIds: normalized.cal.map((item) => item.id),
      outputCounts: {
        email: 0,
        chat: 0,
        cal: normalized.cal.length
      },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        calendarId: prompt.context?.surface?.calendarId || calendarId,
        surface: prompt.context?.surface || { kind: 'calendar', calendarId }
      }
    });

    return {
      status: 'generated',
      operation: 'generateCalendar',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: [],
        chat: {},
        cal: normalized.cal
      },
      summary: applied.summary,
      snapshot: applied.snapshot
    };
  }

  async generateDayPlan(context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateDayPlan',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('generateDayPlan');

    const date = context.date || this._localDateString();
    const existing = this._getCompatibleScenario(profile);
    const prompt = this.promptBuilder.buildDayPlanPrompt(profile, existing, {
      date,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateDayPlan',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date,
      prompt
    });
    this._recordOperation(profile, normalized.scenario, {
      operation: 'generateDayPlan',
      prompt,
      surface: prompt.context?.surface || { kind: 'day-plan' },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        threads: (normalized.scenario.threads || []).length,
        surface: prompt.context?.surface || { kind: 'day-plan' }
      },
      outputIds: [],
      outputCounts: { email: 0, chat: 0, cal: 0 }
    });

    return {
      status: 'generated',
      operation: 'generateDayPlan',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: [],
        chat: {},
        cal: []
      },
      summary: null,
      snapshot: null
    };
  }

  async advanceTimeline(delta, context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'advanceTimeline',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('advanceTimeline');

    const existing = this._getCompatibleScenario(profile);
    const baseDate = context.date || existing?.date || this._localDateString();
    const nextDate = shiftDate(baseDate, delta);
    const prompt = this.promptBuilder.buildAdvanceTimelinePrompt(profile, existing, {
      date: nextDate,
      delta,
      now: this.now()
    });
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'advanceTimeline',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const raw = await this.llmClient.generate(prompt);
    const normalized = this.normalizer.normalizeDayResult(raw, {
      profile,
      existingScenario: existing,
      date: nextDate,
      prompt
    });
    const applied = this.applyNormalizedGeneration(normalized, { replace: true });

    this._recordGeneration(profile, normalized.scenario, applied, {
      operation: 'advanceTimeline',
      prompt,
      surface: prompt.context?.surface || { kind: 'timeline', delta, targetDate: nextDate },
      outputIds: normalized.outputIds,
      outputCounts: {
        email: normalized.email.length,
        chat: Object.values(normalized.chat).reduce((sum, items) => sum + items.length, 0),
        cal: normalized.cal.length
      },
      inputSummary: {
        baseDate,
        targetDate: nextDate,
        delta,
        contacts: (profile.contacts || []).length,
        threads: (normalized.scenario.threads || []).length,
        surface: prompt.context?.surface || { kind: 'timeline', delta, targetDate: nextDate }
      }
    });

    return {
      status: 'generated',
      operation: 'advanceTimeline',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario: normalized.scenario,
      generated: {
        email: normalized.email,
        chat: normalized.chat,
        cal: normalized.cal
      },
      summary: applied.summary,
      snapshot: applied.snapshot
    };
  }

  async generateDocument(context = {}) {
    const profile = context.profile || this.profileStore?.getCurrentProfile?.();
    if (!this.llmClient) {
      return {
        status: 'error',
        operation: 'generateDocument',
        timestamp: this.now(),
        error: 'No simulation provider configured.'
      };
    }
    if (!profile) return this._missingProfile('generateDocument');

    const date = context.date || this._localDateString();
    const available = typeof this.llmClient.isAvailable === 'function'
      ? await this.llmClient.isAvailable()
      : true;
    if (!available) {
      return {
        status: 'error',
        operation: 'generateDocument',
        timestamp: this.now(),
        error: `${this.getClientInfo().label || 'Selected client'} is not available in this environment.`
      };
    }

    const dayResult = context.refreshMirrored === false
      ? null
      : await this.generateDay({ ...context, profile, date });
    if (dayResult && dayResult.status !== 'generated') {
      return dayResult;
    }

    const scenario = dayResult?.scenario
      || this._getCompatibleScenario(profile)
      || {
        id: `scenario:${profile.id}:${date}`,
        profile_id: profile.id,
        profile_signature: profile.signature || null,
        date,
        phase: 'generated-document',
        facts: [],
        threads: [],
        open_loops: []
      };

    const prompt = this.documentPromptBuilder.buildDocumentPrompt(profile, scenario, {
      date,
      exampleDocument: context.exampleDocument || ''
    });
    const raw = await this.llmClient.generate(prompt);
    const documentSpec = this.documentNormalizer.normalizeDocumentResult(raw, {
      profile,
      scenario,
      date,
      prompt
    });
    const text = this.documentNormalizer.compileDocument(documentSpec, {
      profile,
      scenario,
      date
    });

    this._recordOperation(profile, scenario, {
      operation: 'generateDocument',
      prompt,
      surface: prompt.context?.surface || { kind: 'document' },
      inputSummary: {
        date,
        contacts: (profile.contacts || []).length,
        threadId: documentSpec.mirrored?.threadId || null,
        chatChannel: documentSpec.mirrored?.chatChannel || null,
        surface: prompt.context?.surface || { kind: 'document' }
      },
      outputIds: [
        ...(documentSpec.contacts || []).map((contact) => contact.id),
        ...(documentSpec.tasks || []).map((task) => task.id)
      ],
      outputCounts: {
        email: dayResult?.summary?.counts?.email || 0,
        chat: dayResult?.summary?.counts?.chat || 0,
        cal: dayResult?.summary?.counts?.cal || 0
      }
    });

    return {
      status: 'generated',
      operation: 'generateDocument',
      timestamp: this.now(),
      profile,
      prompt,
      raw,
      scenario,
      document: documentSpec,
      text,
      mirrored: dayResult?.generated || null,
      summary: dayResult?.summary || null,
      snapshot: dayResult?.snapshot || null
    };
  }

  _recordGeneration(profile, scenario, applied, details = {}) {
    const nextScenario = {
      ...scenario,
      profile_signature: profile.signature || scenario.profile_signature || null
    };
    this.scenarioStore?.saveScenario?.(nextScenario);
    const savedSnapshot = this.scenarioStore?.saveSnapshot?.({
      profile_id: profile.id,
      scenario_id: nextScenario.id,
      operation: details.operation,
      timestamp: this.now(),
      prompt_version: details.prompt?.promptVersion || null,
      seed: details.prompt?.seed || null,
      summary: details.summary || applied.summary || null,
      snapshot: applied.snapshot
    });
    this._recordOperation(profile, nextScenario, {
      ...details,
      snapshotId: savedSnapshot?.id || null
    });
    return savedSnapshot;
  }

  _recordOperation(profile, scenario, details = {}) {
    this.scenarioStore?.saveScenario?.({
      ...scenario,
      profile_signature: profile.signature || scenario.profile_signature || null
    });
    this.scenarioStore?.appendLedger?.({
      profile_id: profile.id,
      scenario_id: scenario.id,
      snapshot_id: details.snapshotId || null,
      surface: details.surface || details.prompt?.context?.surface || null,
      operation: details.operation,
      prompt_version: details.prompt?.promptVersion || null,
      seed: details.prompt?.seed || null,
      prompt_summary: this._buildPromptSummary(details.prompt),
      input_summary: details.inputSummary || null,
      output_ids: details.outputIds || [],
      output_counts: details.outputCounts || {
        email: 0,
        chat: 0,
        cal: 0
      }
    });
  }

  _buildPromptSummary(prompt) {
    if (!prompt) return null;
    return {
      operation: prompt.operation || null,
      prompt_version: prompt.promptVersion || null,
      seed: prompt.seed || null,
      surface: prompt.context?.surface || null,
      date: prompt.context?.date || null,
      user: prompt.user || '',
      system: prompt.system || ''
    };
  }

  _stub(operation, context) {
    return {
      status: 'stub',
      operation,
      timestamp: this.now(),
      context,
      next_step: 'Attach profile/scenario stores, prompt builder, LLM client, and normalizer before enabling generation.'
    };
  }

  _missingProfile(operation) {
    return {
      status: 'error',
      operation,
      timestamp: this.now(),
      error: 'No simulation profile available.'
    };
  }

  _localDateString() {
    return this.now().slice(0, 10);
  }

  _getCompatibleScenario(profile) {
    const scenario = this.scenarioStore?.getScenario?.(profile.id);
    if (!scenario) return null;
    if (!profile?.signature) return scenario;
    if (!scenario.profile_signature) return null;
    return scenario.profile_signature === profile.signature ? scenario : null;
  }
}

function shiftDate(dateString, delta) {
  const value = new Date(`${dateString}T00:00:00Z`);
  const offset = Number.isFinite(Number(delta)) ? Number(delta) : 1;
  value.setUTCDate(value.getUTCDate() + offset);
  return value.toISOString().slice(0, 10);
}
