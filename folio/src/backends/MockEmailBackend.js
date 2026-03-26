const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    threadId: 'thread-q3-budget',
    mailbox: 'inbox',
    from: 'sara@example.com',
    fromName: 'Sara Chen',
    subject: 'Q3 Hardware Budget',
    date: '2026-03-22T10:15',
    priority: 'high',
    unread: true,
    body: 'Hi - can you pull together the hardware spend numbers for Q3? Finance needs them by Thursday.'
  },
  {
    id: 'msg-2',
    threadId: 'thread-q3-budget',
    mailbox: 'inbox',
    from: 'finance@folio.local',
    fromName: 'Finance',
    subject: 'Re: Q3 Hardware Budget',
    date: '2026-03-22T14:30',
    priority: 'normal',
    unread: true,
    body: 'Just a heads-up: the travel reimbursement line also shows a variance. Worth including.'
  },
  {
    id: 'msg-3',
    threadId: 'thread-q3-budget',
    mailbox: 'inbox',
    from: 'sara@example.com',
    fromName: 'Sara Chen',
    subject: 'Re: Q3 Hardware Budget',
    date: '2026-03-23T09:00',
    priority: 'high',
    unread: false,
    body: 'Thanks - let me know when the numbers are ready and I will forward to the board deck team.'
  },
  {
    id: 'msg-4',
    threadId: 'thread-ops',
    mailbox: 'inbox',
    from: 'ops@folio.local',
    fromName: 'Ops',
    subject: 'New server rack arrival',
    date: '2026-03-23T08:00',
    priority: 'normal',
    unread: true,
    body: 'Rack #14 arrived. Needs to be inventoried before Wednesday.'
  }
];

let messages = cloneMessages(INITIAL_MESSAGES);

export const MockEmailBackend = {
  queryInbox(params = {}) {
    return messages
      .filter((msg) => msg.mailbox === 'inbox')
      .filter((msg) => !params.filter || params.filter !== 'unread' || msg.unread)
      .filter((msg) => !params.priority || msg.priority === params.priority)
      .map((msg) => ({ ...msg }));
  },

  queryThread(threadId, params = {}) {
    const limit = parseInt(params.limit, 10);
    const items = messages
      .filter((msg) => msg.threadId === threadId)
      .sort((a, b) => a.date.localeCompare(b.date));
    return Number.isNaN(limit)
      ? items.map((msg) => ({ ...msg }))
      : items.slice(-limit).map((msg) => ({ ...msg }));
  },

  fileMessage(messageId) {
    const msg = messages.find((item) => item.id === messageId);
    if (!msg) return null;
    msg.mailbox = 'archive';
    msg.unread = false;
    return { ...msg };
  },

  sendReply(threadId, body) {
    const thread = messages.filter((msg) => msg.threadId === threadId);
    const base = thread[thread.length - 1];
    const reply = {
      id: `msg-${messages.length + 1}`,
      threadId,
      mailbox: 'sent',
      from: 'you@folio.local',
      fromName: 'You',
      subject: base ? base.subject : threadId,
      date: new Date().toISOString(),
      priority: 'normal',
      unread: false,
      body
    };
    messages.push(reply);
    return { ...reply };
  },

  queryAll(params = {}) {
    if (params.threadId) return this.queryThread(params.threadId, params);
    return messages.map((msg) => ({ ...msg }));
  },

  exportState() {
    return cloneMessages(messages);
  },

  importState(nextMessages = []) {
    messages = cloneMessages(nextMessages);
    return this.exportState();
  },

  reset(nextMessages = null) {
    messages = cloneMessages(nextMessages || INITIAL_MESSAGES);
    return this.exportState();
  },

  seed(nextMessages = []) {
    messages = messages.concat(cloneMessages(nextMessages));
    return this.exportState();
  },

  upsertMessages(nextMessages = []) {
    const byId = new Map(messages.map((msg) => [msg.id, { ...msg }]));
    for (const msg of nextMessages) {
      if (!msg?.id) continue;
      byId.set(msg.id, { ...msg });
    }
    messages = Array.from(byId.values());
    return this.exportState();
  }
};

function cloneMessages(items = []) {
  return items.map((msg) => ({ ...msg }));
}
