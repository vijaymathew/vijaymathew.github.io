export class SimulationPromptBuilder {
  constructor(opts = {}) {
    this.promptVersion = opts.promptVersion || 'v1';
  }

  buildDayPrompt(profile, existingScenario = null, options = {}) {
    return this._buildPrompt('generateDay', profile, existingScenario, options, {
      seed: (ctx) => `generate-day:${ctx.profile.id}:${ctx.date}`,
      user: (ctx) => [
        `Generate a realistic daily communication snapshot for ${ctx.profileSummary.user.name} (${ctx.profileSummary.user.role || 'user'}) on ${ctx.date}.`,
        describeProfileLens(ctx.profileSummary),
        `Primary focus: ${describePrimaryFocus(ctx.profileSummary)}.`,
        'Include at least two inbound unread inbox messages from other people, and mark at least one of them high priority.',
        'Use one of the available profile channels for chat activity.',
        'Create a primary thread in threads[0] and reuse that same thread_id in the generated email entries.',
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
        describeProfileLens(ctx.profileSummary),
        `Primary focus: ${describePrimaryFocus(ctx.profileSummary)}.`,
        'Ensure at least two unread inbound messages and at least one high-priority message are present.',
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
        describeProfileLens(ctx.profileSummary),
        `The channel should reflect activity around ${describePrimaryFocus(ctx.profileSummary)}.`,
        `Use ${ctx.surface.channelId} as the chat channel identifier in the output.`,
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
        describeProfileLens(ctx.profileSummary),
        `The agenda should support ${describePrimaryFocus(ctx.profileSummary)}.`,
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
        describeProfileLens(ctx.profileSummary),
        `Anchor the plan around ${describePrimaryFocus(ctx.profileSummary)}.`,
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
        `Advance the simulated daily context for ${ctx.profileSummary.user.name} by ${delta} day(s) to ${ctx.date}.`,
        describeProfileLens(ctx.profileSummary),
        `Preserve continuity from the existing scenario for ${describePrimaryFocus(ctx.profileSummary)}.`,
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
        'You are generating a realistic but compact daily simulation for a document-based computing prototype.',
        'Return strict JSON only.',
        'Keep email, chat, and calendar internally consistent.',
        'Adapt the tone and activity to the user profile, profession, bio, interests, contacts, and channels.',
        'The simulation may represent professional, creative, domestic, or mixed daily life depending on the profile.',
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
  const contacts = Array.isArray(profile.contacts) ? profile.contacts : [];
  const channels = Array.isArray(profile.channels) ? profile.channels : [];
  return {
    id: profile.id,
    user: { ...(profile.user || {}) },
    organization: { ...(profile.organization || {}) },
    contacts: contacts.map((contact) => ({
      id: contact.id,
      name: contact.name,
      role: contact.role,
      relationship: contact.relationship
    })),
    contactCount: contacts.length,
    channels: channels.map((channel) => ({ id: channel.id, topic: channel.topic })),
    channelIds: channels.map((channel) => channel.id),
    primaryProject: Array.isArray(profile.projects) && profile.projects.length > 0
      ? { ...profile.projects[0] }
      : null
  };
}

function buildScenarioSeed(profile, existingScenario, date) {
  const project = Array.isArray(profile.projects) && profile.projects.length > 0
    ? profile.projects[0]
    : {
      id: 'focus',
      name: deriveFallbackFocus(profile),
      status: 'active'
    };
  const threadId = defaultThreadId(project);
  const contacts = Array.isArray(profile.contacts) ? profile.contacts : [];
  const primaryContact = contacts[0] || null;
  const secondaryContact = contacts[1] || primaryContact || null;

  return {
    id: existingScenario?.id || `scenario:${profile.id}:${date}`,
    profile_id: profile.id,
    date,
    phase: existingScenario?.phase || 'generated-workday',
    facts: [
      `${project.name} is the main focus for ${date}.`,
      `${project.name} is currently ${project.status || 'active'}.`,
      primaryContact ? `${primaryContact.name} is waiting on an update.` : 'An important contact is waiting on an update.',
      secondaryContact && secondaryContact.id !== primaryContact?.id
        ? `${secondaryContact.name} is part of the active coordination loop.`
        : 'A second coordination thread is still open.'
    ],
    threads: [
      { thread_id: threadId, topic: `${project.name} update`, priority: 'high' }
    ],
    open_loops: [
      { id: `loop-${project.id}-primary`, kind: 'email', owner: primaryContact?.id || 'contact', status: 'waiting-on-user' },
      { id: `loop-${project.id}-secondary`, kind: 'chat', owner: secondaryContact?.id || primaryContact?.id || 'contact', status: 'needs-clarification' }
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

function describePrimaryFocus(profileSummary) {
  return profileSummary.primaryProject?.name
    || profileSummary.user?.role
    || profileSummary.user?.bio
    || 'the main focus of the day';
}

function describeProfileLens(profileSummary) {
  const parts = [];
  if (profileSummary.user?.bio) {
    parts.push(`Profile bio: ${profileSummary.user.bio}.`);
  }
  if (Array.isArray(profileSummary.user?.interests) && profileSummary.user.interests.length) {
    parts.push(`Interests: ${profileSummary.user.interests.join(', ')}.`);
  }
  if (Array.isArray(profileSummary.contacts) && profileSummary.contacts.length) {
    const contactSummary = profileSummary.contacts
      .slice(0, 4)
      .map((contact) => `${contact.name} (${contact.role || contact.relationship || 'contact'})`)
      .join(', ');
    parts.push(`Important contacts: ${contactSummary}.`);
  }
  if (Array.isArray(profileSummary.channels) && profileSummary.channels.length) {
    const channelSummary = profileSummary.channels
      .slice(0, 3)
      .map((channel) => channel.topic ? `${channel.id} (${channel.topic})` : channel.id)
      .join(', ');
    parts.push(`Available channels: ${channelSummary}.`);
  }
  return parts.join(' ');
}

function deriveFallbackFocus(profile) {
  const user = profile?.user || {};
  const interests = Array.isArray(user.interests) ? user.interests.filter(Boolean) : [];
  if (user.role && interests.length) {
    return `${user.role}: ${interests[0]}`;
  }
  if (user.role) return `${user.role} priorities`;
  if (user.bio) return user.bio.split(/[.!?]/)[0] || 'Current focus';
  if (interests.length) return interests[0];
  return 'Current focus';
}

function safeId(value) {
  return String(value || 'default').replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'default';
}
