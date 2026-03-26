const DEFAULT_PROFILE = {
  id: 'profile:default',
  label: 'Default work profile',
  user: {
    name: 'John Doe',
    email: 'john@folio.local',
    role: 'Product Lead',
    bio: 'Leads planning, stakeholder communication, and day-to-day coordination for a small product team.',
    interests: ['planning', 'roadmapping', 'team coordination'],
    timezone: 'Asia/Kolkata',
    working_hours: '09:00-18:00'
  },
  organization: {
    name: 'Example Ltd',
    domain: 'example.com',
    departments: ['Finance', 'Ops', 'Product', 'Engineering']
  },
  contacts: [
    {
      id: 'sara.chen',
      name: 'Sara Chen',
      email: 'sara@example.com',
      role: 'Head of Product',
      relationship: 'manager'
    },
    {
      id: 'finance.team',
      name: 'Finance Team',
      email: 'finance@folio.local',
      role: 'Finance',
      relationship: 'partner'
    },
    {
      id: 'ops.team',
      name: 'Ops',
      email: 'ops@folio.local',
      role: 'Operations',
      relationship: 'partner'
    },
    {
      id: 'rohan.m',
      name: 'Rohan Mehta',
      email: 'rohan@example.com',
      role: 'Staff Engineer',
      relationship: 'peer'
    }
  ],
  projects: [
    {
      id: 'q3-hardware',
      name: 'Q3 Hardware Budget',
      status: 'at-risk',
      stakeholders: ['sara.chen', 'finance.team', 'rohan.m'],
      deadlines: ['2026-03-27']
    }
  ],
  channels: [
    { id: '#finance', topic: 'Budget review and approvals' },
    { id: '#product', topic: 'Roadmap and board prep' }
  ]
};

export class SimulationProfileStore {
  constructor(storagePrefix = 'folio:simulation') {
    this.storagePrefix = storagePrefix;
    this.profilesKey = `${storagePrefix}:profiles`;
    this.currentKey = `${storagePrefix}:profile:current`;
    this.profiles = new Map();
    this.currentProfileId = DEFAULT_PROFILE.id;
    this._load();
  }

  listProfiles() {
    return Array.from(this.profiles.values()).map(cloneProfile);
  }

  getCurrentProfile() {
    return this.getProfile(this.currentProfileId);
  }

  getCurrentProfileId() {
    return this.currentProfileId;
  }

  getProfile(profileId) {
    const profile = this.profiles.get(profileId);
    return profile ? cloneProfile(profile) : null;
  }

  setCurrentProfile(profileId) {
    if (!this.profiles.has(profileId)) {
      throw new Error(`Unknown simulation profile: ${profileId}`);
    }
    this.currentProfileId = profileId;
    this._persist();
    return this.getCurrentProfile();
  }

  saveProfile(profile) {
    if (!profile?.id) {
      throw new Error('Simulation profile must have an id');
    }
    const normalized = normalizeProfile(profile);
    this.profiles.set(normalized.id, normalized);
    if (!this.currentProfileId || !this.profiles.has(this.currentProfileId)) {
      this.currentProfileId = normalized.id;
    }
    this._persist();
    return cloneProfile(normalized);
  }

  reset(profiles = [DEFAULT_PROFILE], currentProfileId = DEFAULT_PROFILE.id) {
    this.profiles = new Map();
    for (const profile of profiles) {
      const normalized = normalizeProfile(profile);
      this.profiles.set(normalized.id, normalized);
    }
    this.currentProfileId = this.profiles.has(currentProfileId)
      ? currentProfileId
      : Array.from(this.profiles.keys())[0];
    this._persist();
    return this.getCurrentProfile();
  }

  _load() {
    const rawProfiles = localStorage.getItem(this.profilesKey);
    const rawCurrent = localStorage.getItem(this.currentKey);

    if (rawProfiles) {
      try {
        const parsed = JSON.parse(rawProfiles);
        for (const profile of parsed) {
          const normalized = normalizeProfile(profile);
          this.profiles.set(normalized.id, normalized);
        }
      } catch {
        this.profiles.clear();
      }
    }

    if (!this.profiles.size) {
      const normalized = normalizeProfile(DEFAULT_PROFILE);
      this.profiles.set(normalized.id, normalized);
    }

    this.currentProfileId = rawCurrent && this.profiles.has(rawCurrent)
      ? rawCurrent
      : Array.from(this.profiles.keys())[0];
    this._persist();
  }

  _persist() {
    localStorage.setItem(
      this.profilesKey,
      JSON.stringify(Array.from(this.profiles.values()).map(cloneProfile))
    );
    localStorage.setItem(this.currentKey, this.currentProfileId);
  }

  static hasSaved(storagePrefix = 'folio:simulation') {
    return localStorage.getItem(`${storagePrefix}:profiles`) !== null;
  }
}

function normalizeProfile(profile) {
  const user = { ...(profile.user || {}) };
  const normalized = {
    id: profile.id,
    label: profile.label || user.name || profile.id,
    user: {
      ...user,
      bio: user.bio || '',
      interests: normalizeInterests(user.interests)
    },
    organization: { ...(profile.organization || {}) },
    contacts: Array.isArray(profile.contacts) ? profile.contacts.map((item) => ({ ...item })) : [],
    projects: Array.isArray(profile.projects) ? profile.projects.map((item) => ({ ...item })) : [],
    channels: Array.isArray(profile.channels) ? profile.channels.map((item) => ({ ...item })) : []
  };
  return {
    ...normalized,
    signature: profile.signature || buildProfileSignature(normalized)
  };
}

function cloneProfile(profile) {
  return normalizeProfile(profile);
}

function normalizeInterests(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof value === 'string') {
    return value.split(',').map((item) => item.trim()).filter(Boolean);
  }
  return [];
}

function buildProfileSignature(profile) {
  const payload = JSON.stringify({
    user: {
      name: profile.user?.name || '',
      email: profile.user?.email || '',
      role: profile.user?.role || '',
      bio: profile.user?.bio || '',
      interests: profile.user?.interests || []
    },
    organization: {
      name: profile.organization?.name || '',
      domain: profile.organization?.domain || ''
    },
    contacts: (profile.contacts || []).map((contact) => ({
      id: contact.id || '',
      name: contact.name || '',
      email: contact.email || '',
      role: contact.role || '',
      relationship: contact.relationship || ''
    })),
    projects: (profile.projects || []).map((project) => ({
      id: project.id || '',
      name: project.name || '',
      status: project.status || ''
    })),
    channels: (profile.channels || []).map((channel) => ({
      id: channel.id || '',
      topic: channel.topic || ''
    }))
  });

  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    hash = ((hash << 5) - hash + payload.charCodeAt(i)) | 0;
  }
  return `sig:${Math.abs(hash).toString(36)}`;
}
