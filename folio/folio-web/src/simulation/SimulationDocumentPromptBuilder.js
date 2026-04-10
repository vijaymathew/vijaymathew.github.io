export class SimulationDocumentPromptBuilder {
  constructor(opts = {}) {
    this.promptVersion = opts.promptVersion || 'v1-document';
  }

  buildDocumentPrompt(profile, scenario = null, options = {}) {
    const date = options.date || new Date().toISOString().slice(0, 10);
    const profileSummary = summarizeProfile(profile);
    const scenarioSummary = summarizeScenario(scenario);

    return {
      operation: 'generateDocument',
      promptVersion: this.promptVersion,
      seed: `generate-document:${profile.id}:${date}`,
      system: [
        'You are generating the opening text for a profile-specific Folio document.',
        'Return strict JSON only.',
        'Write in first person, as if this is the user opening today’s document and resuming the day in context.',
        'Keep it compact, concrete, and plausible.',
        'Do not reuse nouns, professions, collaborators, projects, or themes from any prior document unless they are explicitly present in the current profile or scenario.',
        'The user may be a professional, artist, student, caregiver, or something else entirely.'
      ].join(' '),
      user: [
        `Generate the opening text for ${profileSummary.user.name} (${profileSummary.user.role || 'user'}) on ${date}.`,
        profileSummary.user.bio ? `Bio: ${profileSummary.user.bio}.` : '',
        profileSummary.user.interests?.length ? `Interests: ${profileSummary.user.interests.join(', ')}.` : '',
        profileSummary.primaryProject ? `Primary focus: ${profileSummary.primaryProject.name}.` : '',
        `The output domain must match the current role, bio, interests, contacts, and project. If the profile is for a programmer, do not include musician-specific content. If it is for a musician, do not include software-team content unless the profile explicitly includes both.`,
        profileSummary.contacts.length
          ? `Known contacts: ${profileSummary.contacts.map((contact) => `${contact.name} (${contact.role || contact.relationship || 'contact'})`).join(', ')}.`
          : 'No predefined contacts are required; avoid inventing named people unless necessary.',
        scenarioSummary.facts?.length ? `Current context: ${scenarioSummary.facts.join(' ')}` : '',
        'Return keys: heading, intro_paragraphs.',
        'heading may be omitted if you prefer Folio to use the local date heading.',
        'intro_paragraphs should contain one or two short paragraphs only.',
        'Do not include any directives, bullet lists, or markup.',
        'Do not return prose outside the JSON object.'
      ].filter(Boolean).join(' '),
      schemaHint: {
        keys: ['heading', 'intro_paragraphs']
      },
      context: {
        date,
        surface: { kind: 'document' },
        profile: profileSummary,
        scenario: scenarioSummary
      }
    };
  }
}

function summarizeProfile(profile) {
  const user = profile?.user || {};
  const contacts = Array.isArray(profile?.contacts) ? profile.contacts : [];
  const channels = Array.isArray(profile?.channels) ? profile.channels : [];
  const projects = Array.isArray(profile?.projects) ? profile.projects : [];
  return {
    id: profile?.id || 'profile:default',
    user: {
      name: user.name || 'User',
      email: user.email || '',
      role: user.role || '',
      bio: user.bio || '',
      interests: Array.isArray(user.interests) ? user.interests.filter(Boolean) : []
    },
    organization: {
      name: profile?.organization?.name || '',
      domain: profile?.organization?.domain || ''
    },
    contacts: contacts.map((contact) => ({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      role: contact.role,
      relationship: contact.relationship
    })),
    channels: channels.map((channel) => ({
      id: channel.id,
      topic: channel.topic || ''
    })),
    primaryProject: projects[0] ? { ...projects[0] } : null
  };
}

function summarizeScenario(scenario) {
  const threads = Array.isArray(scenario?.threads) ? scenario.threads : [];
  return {
    id: scenario?.id || null,
    date: scenario?.date || null,
    phase: scenario?.phase || null,
    facts: Array.isArray(scenario?.facts) ? scenario.facts.slice(0, 6) : [],
    threadId: threads[0]?.thread_id || null,
    chatChannel: inferChannelFromLoops(scenario?.open_loops || [])
  };
}

function inferChannelFromLoops(openLoops) {
  const loops = Array.isArray(openLoops) ? openLoops : [];
  const chatLoop = loops.find((loop) => loop.kind === 'chat' && typeof loop.owner === 'string');
  return chatLoop?.channel || null;
}
