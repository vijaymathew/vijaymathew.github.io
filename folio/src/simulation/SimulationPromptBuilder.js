export class SimulationPromptBuilder {
  constructor(opts = {}) {
    this.promptVersion = opts.promptVersion || 'v1';
  }

  buildDayPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateDay', profile, existingScenario, options, {
      seed: (ctx) => `generate-day:${ctx.profile.id}:${ctx.date}`,
      user: (ctx) => [
        `Generate a workday for ${ctx.profileSummary.user.name} (${ctx.profileSummary.user.role}) on ${ctx.date}.`,
        `Primary project: ${ctx.profileSummary.primaryProject?.name || 'active project'}.`,
        'Return: facts, threads, open_loops, email, chat, calendar.'
      ].join(' '),
      surface: {
        kind: 'day'
      }
    });
  }

  buildInboxPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateInbox', profile, existingScenario, options, {
      seed: (ctx) => `generate-inbox:${ctx.profile.id}:${ctx.date}`,
      user: (ctx) => [
        `Generate inbox activity for ${ctx.profileSummary.user.name} on ${ctx.date}.`,
        `Primary project: ${ctx.profileSummary.primaryProject?.name || 'active project'}.`,
        'Focus on realistic unread threads and return: facts, threads, open_loops, email.'
      ].join(' '),
      surface: {
        kind: 'inbox'
      }
    });
  }

  buildChatPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateChannel', profile, existingScenario, options, {
      seed: (ctx) => `generate-chat:${ctx.profile.id}:${safeId(ctx.surface.channelId)}:${ctx.date}`,
      user: (ctx) => [
        `Generate recent channel activity for ${ctx.surface.channelId} on ${ctx.date}.`,
        `The channel should reflect work around ${ctx.profileSummary.primaryProject?.name || 'the active project'}.`,
        'Return: facts, threads, open_loops, chat.'
      ].join(' '),
      surface: (ctx) => ({
        kind: 'chat',
        channelId: options.channelId || pickDefaultChannelId(ctx.profile)
      })
    });
  }

  buildCalendarPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateCalendar', profile, existingScenario, options, {
      seed: (ctx) => `generate-calendar:${ctx.profile.id}:${safeId(ctx.surface.calendarId)}:${ctx.date}`,
      user: (ctx) => [
        `Generate a compact agenda for calendar ${ctx.surface.calendarId} on ${ctx.date}.`,
        `The agenda should support work on ${ctx.profileSummary.primaryProject?.name || 'the active project'}.`,
        'Return: facts, threads, open_loops, calendar.'
      ].join(' '),
      surface: (ctx) => ({
        kind: 'calendar',
        calendarId: options.calendarId || 'today'
      })
    });
  }

  buildDayPlanPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateDayPlan', profile, existingScenario, options, {
      seed: (ctx) => `generate-day-plan:${ctx.profile.id}:${ctx.date}`,
      user: (ctx) => [
        `Generate a compact day plan for ${ctx.profileSummary.user.name} on ${ctx.date}.`,
        `Anchor the plan around ${ctx.profileSummary.primaryProject?.name || 'the active project'}.`,
        'Return: facts, threads, open_loops, calendar, and a day_plan object with priorities, risks, and proposed schedule.'
      ].join(' '),
      surface: {
        kind: 'day-plan'
      }
    });
  }

  buildAdvanceTimelinePrompt(profile, existingScenario = null, options = {}) {
    const delta = Number.isFinite(Number(options.delta)) ? Number(options.delta) : 1;
    return this._buildPrompt('advanceTimeline', profile, existingScenario, options, {
      seed: (ctx) => `advance-timeline:${ctx.profile.id}:${ctx.date}:d${delta}`,
      user: (ctx) => [
        `Advance the simulated work context for ${ctx.profileSummary.user.name} by ${delta} day(s) to ${ctx.date}.`,
        `Preserve continuity from the existing scenario for ${ctx.profileSummary.primaryProject?.name || 'the active project'}.`,
        'Return: facts, threads, open_loops, email, chat, calendar.'
      ].join(' '),
      surface: {
        kind: 'timeline',
        delta,
        targetDate: options.date
      }
    });
  }

  _buildPrompt(operation, profile, existingScenario = null, options = {}, overrides = {}) {
    const date = options.date || new Date().toISOString().slice(0, 10);
    const profileSummary = summarizeProfile(profile);
    const scenarioSeed = buildScenarioSeed(profile, existingScenario, date);
    const baseContext = {
      date,
      profile,
      profileSummary,
      existingScenario,
      scenarioSeed
    };
    const surface = typeof overrides.surface === 'function'
      ? overrides.surface(baseContext)
      : (overrides.surface || null);
    const context = surface ? { ...baseContext, surface } : baseContext;

    return {
      operation,
      promptVersion: this.promptVersion,
      seed: typeof overrides.seed === 'function'
        ? overrides.seed({ ...context, profile, profileSummary, date })
        : overrides.seed,
      system: [
        'You are generating a realistic but compact workday simulation for a document-based computing prototype.',
        'Return strict JSON only.',
        'Keep email, chat, and calendar internally consistent.',
        'Use only the known contacts, projects, channels, and facts unless there is a clear need for one plausible new actor.'
      ].join(' '),
      user: typeof overrides.user === 'function'
        ? overrides.user({ ...context, profile, profileSummary, date })
        : overrides.user,
      context
    };
  }
}

function summarizeProfile(profile) {
  return {
    id: profile.id,
    user: { ...(profile.user || {}) },
    organization: { ...(profile.organization || {}) },
    contactCount: Array.isArray(profile.contacts) ? profile.contacts.length : 0,
    channelIds: Array.isArray(profile.channels) ? profile.channels.map((channel) => channel.id) : [],
    primaryProject: Array.isArray(profile.projects) && profile.projects.length > 0
      ? { ...profile.projects[0] }
      : null
  };
}

function buildScenarioSeed(profile, existingScenario, date) {
  const project = Array.isArray(profile.projects) && profile.projects.length > 0
    ? profile.projects[0]
    : { id: 'project', name: 'Active project', status: 'active' };
  const threadId = defaultThreadId(project);
  const manager = (profile.contacts || []).find((contact) => contact.relationship === 'manager') || null;
  const finance = (profile.contacts || []).find((contact) => /finance/i.test(contact.id || '') || /finance/i.test(contact.role || '')) || null;

  return {
    id: existingScenario?.id || `scenario:${profile.id}:${date}`,
    profile_id: profile.id,
    date,
    phase: existingScenario?.phase || 'generated-workday',
    facts: [
      `${project.name} is the main focus for ${date}.`,
      `${project.name} is currently ${project.status || 'active'}.`,
      manager ? `${manager.name} is waiting on an update.` : 'A manager update is due.',
      finance ? `${finance.name} needs clarification before numbers are final.` : 'Finance clarification is still open.'
    ],
    threads: [
      { thread_id: threadId, topic: `${project.name} update`, priority: 'high' }
    ],
    open_loops: [
      { id: `loop-${project.id}-manager`, kind: 'email', owner: manager?.id || 'manager', status: 'waiting-on-user' },
      { id: `loop-${project.id}-finance`, kind: 'chat', owner: finance?.id || 'finance', status: 'needs-clarification' }
    ]
  };
}

function defaultThreadId(project) {
  if ((project.name || '').toLowerCase().includes('budget')) {
    const quarter = String(project.id || project.name || '').match(/q\d/i)?.[0]?.toLowerCase();
    if (quarter) {
      return `thread-${quarter}-budget`;
    }
  }
  return `thread-${project.id || 'project'}`;
}

function pickDefaultChannelId(profile) {
  const channels = Array.isArray(profile.channels) ? profile.channels : [];
  return channels[0]?.id || '#general';
}

function safeId(value) {
  return String(value || 'default').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'default';
}
