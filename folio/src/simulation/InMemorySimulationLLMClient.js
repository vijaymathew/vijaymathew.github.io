import { SimulationLLMClient } from './SimulationLLMClient.js';

/**
 * Deterministic in-memory generation client used to exercise the
 * prompt -> client -> normalizer pipeline before a real LLM exists.
 */
export class InMemorySimulationLLMClient extends SimulationLLMClient {
  getClientInfo() {
    return {
      kind: 'in-memory',
      label: 'In-memory deterministic generator',
      local: true,
      requiresApiKey: false
    };
  }

  async generate(prompt) {
    switch (prompt?.operation) {
      case 'generateDay':
        return this._generateDay(prompt);
      case 'generateInbox':
        return this._generateInbox(prompt);
      default:
        return {
          phase: 'generated-workday',
          facts: prompt?.context?.scenarioSeed?.facts || [],
          threads: prompt?.context?.scenarioSeed?.threads || [],
          open_loops: prompt?.context?.scenarioSeed?.open_loops || [],
          email: [],
          chat: {},
          calendar: []
        };
    }
  }

  _generateDay(prompt) {
    const { profile, scenarioSeed, date } = prompt.context;
    const project = first(profile.projects, { id: 'project', name: 'Active project' });
    const manager = pickContact(profile, (contact) => contact.relationship === 'manager')
      || fallbackContact('manager', 'Manager', 'manager@folio.local');
    const finance = pickContact(profile, (contact) => /finance/i.test(contact.id || '') || /finance/i.test(contact.role || ''))
      || fallbackContact('finance.team', 'Finance', 'finance@folio.local');
    const ops = pickContact(profile, (contact) => /ops/i.test(contact.id || '') || /ops/i.test(contact.role || ''))
      || fallbackContact('ops.team', 'Ops', 'ops@folio.local');
    const peer = pickContact(profile, (contact) => contact.id !== manager.id && contact.id !== finance.id)
      || fallbackContact('rohan.m', 'Rohan Mehta', 'rohan@example.com');
    const financeChannel = first(profile.channels, { id: '#finance' }, (channel) => /finance/i.test(channel.id || '')).id;
    const productChannel = first(profile.channels, { id: '#product' }, (channel) => /product/i.test(channel.id || '')).id;
    const compactDate = date.replace(/-/g, '');
    const threadId = `thread-${project.id}`;

    return {
      phase: scenarioSeed.phase,
      facts: [...scenarioSeed.facts, `${manager.name} expects a status update by end of day.`],
      threads: scenarioSeed.threads,
      open_loops: scenarioSeed.open_loops,
      email: [
        {
          id: `msg-${compactDate}-mgr`,
          threadId,
          mailbox: 'inbox',
          from: manager.email,
          fromName: manager.name,
          subject: `${project.name}: need final East region number today`,
          date: `${date}T08:55:00Z`,
          priority: 'high',
          unread: true,
          body: `Can you send me the final East region variance before noon? I need it for the board pack on ${date}.`
        },
        {
          id: `msg-${compactDate}-fin`,
          threadId,
          mailbox: 'inbox',
          from: finance.email,
          fromName: finance.name,
          subject: `Re: ${project.name}`,
          date: `${date}T09:20:00Z`,
          priority: 'normal',
          unread: true,
          body: 'We can close the numbers once the East region overrun is confirmed and the procurement note is included.'
        },
        {
          id: `msg-${compactDate}-ops`,
          threadId: `thread-${project.id}-ops`,
          mailbox: 'inbox',
          from: ops.email,
          fromName: ops.name,
          subject: 'Rack inventory note for Q3 hardware review',
          date: `${date}T07:50:00Z`,
          priority: 'normal',
          unread: true,
          body: 'Inventory is complete for the new rack arrivals. If you need hardware counts folded into the Q3 review, I can send them over.'
        }
      ],
      chat: {
        [financeChannel]: [
          {
            id: `chat-${compactDate}-finance-1`,
            channel: financeChannel,
            user: finance.id,
            text: `I still need the final East region number before I can close ${project.name}.`,
            time: '09:12'
          },
          {
            id: `chat-${compactDate}-finance-2`,
            channel: financeChannel,
            user: peer.id,
            text: 'The procurement lag is real, but it does not explain the entire variance.',
            time: '09:16'
          },
          {
            id: `chat-${compactDate}-finance-3`,
            channel: financeChannel,
            user: manager.id,
            text: 'Please post the final number here once it is ready so I can update the board pack.',
            time: '09:19'
          }
        ],
        [productChannel]: [
          {
            id: `chat-${compactDate}-product-1`,
            channel: productChannel,
            user: manager.id,
            text: `Board prep depends on ${project.name} landing today.`,
            time: '10:05'
          }
        ]
      },
      calendar: [
        {
          id: `cal-${compactDate}-sync`,
          calendarId: 'today',
          title: `${project.name} sync`,
          time: '09:00',
          duration: '45min',
          type: 'internal',
          status: 'pending'
        },
        {
          id: `cal-${compactDate}-finance`,
          calendarId: 'today',
          title: 'Finance variance review',
          time: '14:00',
          duration: '30min',
          type: 'internal',
          status: 'pending'
        },
        {
          id: `cal-${compactDate}-manager`,
          calendarId: 'today',
          title: `${manager.name} board pack checkpoint`,
          time: '16:30',
          duration: '30min',
          type: 'external',
          status: 'accepted'
        }
      ]
    };
  }

  _generateInbox(prompt) {
    const day = this._generateDay(prompt);
    return {
      ...day,
      chat: {},
      calendar: []
    };
  }
}

function pickContact(profile, predicate) {
  return (profile.contacts || []).find(predicate) || null;
}

function fallbackContact(id, name, email) {
  return { id, name, email };
}

function first(items, fallback, predicate = null) {
  if (!Array.isArray(items) || items.length === 0) return fallback;
  if (!predicate) return items[0];
  return items.find(predicate) || fallback;
}
