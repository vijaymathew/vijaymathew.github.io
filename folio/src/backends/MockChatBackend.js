const CHANNELS = {
  '#finance': [
    { id: 'chat-1', user: 'sara.chen', text: 'Has anyone got the Q3 hardware numbers yet?', time: '08:45' },
    { id: 'chat-2', user: 'rohan.m', text: 'Working on it — the East region looks off', time: '08:52' },
    { id: 'chat-3', user: 'sara.chen', text: 'Let me know when it is ready, board deck deadline is Thursday', time: '09:01' }
  ]
};

export const MockChatBackend = {
  listMessages(channel, params = {}) {
    const limit = parseInt(params.limit, 10);
    const items = (CHANNELS[channel] || []).map((msg) => ({ ...msg }));
    return Number.isNaN(limit) ? items : items.slice(-limit);
  },

  postMessage(channel, text) {
    if (!CHANNELS[channel]) CHANNELS[channel] = [];
    const message = {
      id: `chat-${CHANNELS[channel].length + 1}`,
      user: 'you',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    CHANNELS[channel].push(message);
    return { ...message };
  },

  queryAll() {
    const all = [];
    for (const [channel, messages] of Object.entries(CHANNELS)) {
      all.push(...messages.map((msg) => ({ channel, ...msg })));
    }
    return all;
  }
};
