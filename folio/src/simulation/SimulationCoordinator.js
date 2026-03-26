import { MockEmailBackend } from '../backends/MockEmailBackend.js';
import { MockChatBackend } from '../backends/MockChatBackend.js';
import { MockCalBackend } from '../backends/MockCalBackend.js';
import { SimulationPromptBuilder } from './SimulationPromptBuilder.js';
import { SimulationNormalizer } from './SimulationNormalizer.js';
import { InMemorySimulationLLMClient } from './InMemorySimulationLLMClient.js';

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
    this.llmClient = opts.llmClient || new InMemorySimulationLLMClient();
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

  applyNormalizedGeneration(result = {}) {
    const summary = {
      timestamp: this.now(),
      surfaces: [],
      counts: {
        email: 0,
        chat: 0,
        cal: 0
      }
    };

    if (result.email?.length) {
      this.emailBackend.upsertMessages(result.email);
      summary.surfaces.push('email');
      summary.counts.email = result.email.length;
    }

    if (result.chat) {
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

    if (result.cal?.length) {
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
    if (!profile) {
      return {
        status: 'error',
        operation: 'generateDay',
        timestamp: this.now(),
        error: 'No simulation profile available.'
      };
    }

    const date = context.date || this._localDateString();
    const existing = this.scenarioStore?.getScenario?.(profile.id);
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
    const applied = this.applyNormalizedGeneration(normalized);

    this.scenarioStore?.saveScenario?.(normalized.scenario);
    this.scenarioStore?.appendLedger?.({
      profile_id: profile.id,
      scenario_id: normalized.scenario.id,
      operation: 'generateDay',
      prompt_version: prompt.promptVersion,
      seed: prompt.seed,
      input_summary: {
        date,
        contacts: (profile.contacts || []).length,
        threads: (normalized.scenario.threads || []).length
      },
      output_ids: normalized.outputIds,
      output_counts: {
        email: normalized.email.length,
        chat: Object.values(normalized.chat).reduce((sum, items) => sum + items.length, 0),
        cal: normalized.cal.length
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
    if (!profile) return this._missingProfile('generateInbox');

    const date = context.date || this._localDateString();
    const existing = this.scenarioStore?.getScenario?.(profile.id);
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

    this.scenarioStore?.saveScenario?.(normalized.scenario);
    this.scenarioStore?.appendLedger?.({
      profile_id: profile.id,
      scenario_id: normalized.scenario.id,
      operation: 'generateInbox',
      prompt_version: prompt.promptVersion,
      seed: prompt.seed,
      output_ids: normalized.email.map((item) => item.id),
      output_counts: {
        email: normalized.email.length,
        chat: 0,
        cal: 0
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
    return this._stub('generateChannel', { channelId, ...context });
  }

  async generateCalendar(calendarId = 'today', context = {}) {
    return this._stub('generateCalendar', { calendarId, ...context });
  }

  async advanceTimeline(delta, context = {}) {
    return this._stub('advanceTimeline', { delta, ...context });
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
}
