export class SimulationPromptBuilder {
  constructor(opts = {}) {
    this.promptVersion = opts.promptVersion || 'v1';
  }

  buildDayPrompt(profile, existingScenario = null, options = {}) {
    const date = options.date || new Date().toISOString().slice(0, 10);
    const profileSummary = summarizeProfile(profile);
    const scenarioSeed = buildScenarioSeed(profile, existingScenario, date);

    return {
      operation: 'generateDay',
      promptVersion: this.promptVersion,
      seed: `generate-day:${profile.id}:${date}`,
      system: [
        'You are generating a realistic but compact workday simulation for a document-based computing prototype.',
        'Return strict JSON only.',
        'Keep email, chat, and calendar internally consistent.',
        'Use only the known contacts, projects, channels, and facts unless there is a clear need for one plausible new actor.'
      ].join(' '),
      user: [
        `Generate a workday for ${profileSummary.user.name} (${profileSummary.user.role}) on ${date}.`,
        `Primary project: ${profileSummary.primaryProject?.name || 'active project'}.`,
        'Return: facts, threads, open_loops, email, chat, calendar.'
      ].join(' '),
      context: {
        date,
        profile,
        profileSummary,
        existingScenario,
        scenarioSeed
      }
    };
  }

  buildInboxPrompt(profile, existingScenario = null, options = {}) {
    const base = this.buildDayPrompt(profile, existingScenario, options);
    return {
      ...base,
      operation: 'generateInbox',
      seed: `generate-inbox:${profile.id}:${base.context.date}`
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
      { thread_id: `thread-${project.id}`, topic: `${project.name} update`, priority: 'high' }
    ],
    open_loops: [
      { id: `loop-${project.id}-manager`, kind: 'email', owner: manager?.id || 'manager', status: 'waiting-on-user' },
      { id: `loop-${project.id}-finance`, kind: 'chat', owner: finance?.id || 'finance', status: 'needs-clarification' }
    ]
  };
}
