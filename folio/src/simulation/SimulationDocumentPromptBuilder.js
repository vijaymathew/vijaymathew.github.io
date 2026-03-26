export class SimulationDocumentPromptBuilder {
  constructor(opts = {}) {
    this.promptVersion = opts.promptVersion || 'v1-document';
  }

  buildDocumentPrompt(profile, scenario = null, options = {}) {
    const date = options.date || new Date().toISOString().slice(0, 10);
    const profileSummary = summarizeProfile(profile);
    const exampleDocument = String(options.exampleDocument || '').trim();
    const scenarioSummary = summarizeScenario(scenario);
    const tomorrow = shiftDate(date, 1);

    return {
      operation: 'generateDocument',
      promptVersion: this.promptVersion,
      seed: `generate-document:${profile.id}:${date}`,
      system: [
        'You are generating a profile-specific Folio document spec.',
        'Return strict JSON only.',
        'Use the provided example document for structure and tone, but do not copy its domain content unless the profile implies it.',
        'Do not reuse nouns, professions, collaborators, projects, or themes from any prior document unless they are explicitly present in the current profile or scenario.',
        'The user may be a professional, artist, student, caregiver, or something else entirely.',
        'Make the document feel coherent: contacts, mirrored block ids, prose, tasks, analysis dataset, and references should point at the same day and the same life context.',
        'Prefer compact, plausible, specific details over generic filler.'
      ].join(' '),
      user: [
        `Generate a complete Folio document spec for ${profileSummary.user.name} (${profileSummary.user.role || 'user'}) on ${date}.`,
        profileSummary.user.bio ? `Bio: ${profileSummary.user.bio}.` : '',
        profileSummary.user.interests?.length ? `Interests: ${profileSummary.user.interests.join(', ')}.` : '',
        profileSummary.primaryProject ? `Primary focus: ${profileSummary.primaryProject.name}.` : '',
        `The output domain must match the current role, bio, interests, contacts, and project. If the profile is for a programmer, do not include musician-specific content. If it is for a musician, do not include software-team content unless the profile explicitly includes both.`,
        profileSummary.contacts.length
          ? `Known contacts: ${profileSummary.contacts.map((contact) => `${contact.name} (${contact.role || contact.relationship || 'contact'})`).join(', ')}.`
          : 'No predefined contacts are required; invent only plausible ones if needed.',
        profileSummary.channels.length
          ? `Available channels: ${profileSummary.channels.map((channel) => channel.id).join(', ')}.`
          : '',
        scenarioSummary.threadId ? `Primary email thread id should be ${scenarioSummary.threadId}.` : '',
        scenarioSummary.chatChannel ? `Primary chat channel should be ${scenarioSummary.chatChannel}.` : '',
        `Return keys: heading, contacts, primary_contact_id, analysis, tasks, file_reference, web_reference, mirrored, lifecycle.`,
        `Analysis must include columns and rows for a small 5-row table using numeric values suitable for a simple Python calculation.`,
        `Lifecycle should target tomorrow (${tomorrow}) for the next daily document.`,
        'Do not return introductory paragraphs; Folio will synthesize those locally from the current profile and scenario.',
        'Do not return prose outside the JSON object.'
      ].filter(Boolean).join(' '),
      schemaHint: {
        keys: [
          'heading',
          'contacts',
          'primary_contact_id',
          'analysis',
          'tasks',
          'file_reference',
          'web_reference',
          'mirrored',
          'lifecycle'
        ]
      },
      context: {
        date,
        tomorrow,
        surface: { kind: 'document' },
        profile: profileSummary,
        scenario: scenarioSummary,
        example_document: exampleDocument
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

function shiftDate(dateString, delta) {
  const value = new Date(`${dateString}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + delta);
  return value.toISOString().slice(0, 10);
}
