const INITIAL_CHANNELS = {
  '#finance': [
    { id: 'chat-1', user: 'sara.chen', text: 'Has anyone got the Q3 hardware numbers yet?', time: '08:45' },
    { id: 'chat-2', user: 'rohan.m', text: 'Working on it - the East region looks off', time: '08:52' },
    { id: 'chat-3', user: 'sara.chen', text: 'Let me know when it is ready, board deck deadline is Thursday', time: '09:01' }
  ]
};

let channels = cloneChannels(INITIAL_CHANNELS);

export const MockChatBackend = {
  listMessages(channel, params = {}) {
    const limit = parseInt(params.limit, 10);
    const items = (channels[channel] || []).map((msg) => ({ ...msg }));
    return Number.isNaN(limit) ? items : items.slice(-limit);
  },

  postMessage(channel, text) {
    if (!channels[channel]) channels[channel] = [];
    const message = {
      id: `chat-${channels[channel].length + 1}`,
      user: 'you',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    channels[channel].push(message);
    return { ...message };
  },

  queryAll() {
    const all = [];
    for (const [channel, messages] of Object.entries(channels)) {
      all.push(...messages.map((msg) => ({ channel, ...msg })));
    }
    return all;
  },

  exportState() {
    return cloneChannels(channels);
  },

  importState(nextChannels = {}) {
    channels = cloneChannels(nextChannels);
    return this.exportState();
  },

  reset(nextChannels = null) {
    channels = cloneChannels(nextChannels || INITIAL_CHANNELS);
    return this.exportState();
  },

  seed(nextChannels = {}) {
    const merged = cloneChannels(channels);
    for (const [channel, items] of Object.entries(nextChannels || {})) {
      if (!merged[channel]) merged[channel] = [];
      merged[channel].push(...cloneMessages(items));
    }
    channels = merged;
    return this.exportState();
  },

  upsertMessages(channel, nextMessages = []) {
    const existing = new Map((channels[channel] || []).map((msg) => [msg.id, { ...msg }]));
    for (const msg of nextMessages) {
      if (!msg?.id) continue;
      existing.set(msg.id, { ...msg });
    }
    channels[channel] = Array.from(existing.values());
    return this.listMessages(channel);
  }
};

function cloneChannels(source = {}) {
  const next = {};
  for (const [channel, items] of Object.entries(source)) {
    next[channel] = cloneMessages(items);
  }
  return next;
}

function cloneMessages(items = []) {
  return items.map((msg) => ({ ...msg }));
}
