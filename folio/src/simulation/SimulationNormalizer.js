export class SimulationNormalizer {
  normalizeDayResult(rawResult = {}, context = {}) {
    const prompt = context.prompt || {};
    const profile = context.profile || prompt.context?.profile || {};
    const date = context.date || prompt.context?.date || new Date().toISOString().slice(0, 10);
    const scenarioSeed = prompt.context?.scenarioSeed || {};

    const email = normalizeEmail(rawResult.email, date);
    const chat = normalizeChat(rawResult.chat, date);
    const cal = normalizeCalendar(rawResult.calendar || rawResult.cal, date);
    const facts = normalizeStrings(rawResult.facts, scenarioSeed.facts || []);
    const threads = normalizeObjects(rawResult.threads, scenarioSeed.threads || []);
    const openLoops = normalizeObjects(rawResult.open_loops || rawResult.openLoops, scenarioSeed.open_loops || []);

    return {
      scenario: {
        id: scenarioSeed.id || `scenario:${profile.id}:${date}`,
        profile_id: profile.id || scenarioSeed.profile_id || 'profile:default',
        date,
        phase: rawResult.phase || scenarioSeed.phase || 'generated-workday',
        facts,
        threads,
        open_loops: openLoops
      },
      email,
      chat,
      cal,
      outputIds: [
        ...email.map((item) => item.id),
        ...Object.values(chat).flat().map((item) => item.id),
        ...cal.map((item) => item.id)
      ]
    };
  }
}

function normalizeEmail(items, date) {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    id: item?.id || `msg-${date.replace(/-/g, '')}-${index + 1}`,
    threadId: item?.threadId || item?.thread_id || `thread-${date.replace(/-/g, '')}-${index + 1}`,
    mailbox: item?.mailbox || 'inbox',
    from: resolveEmailAddress(item),
    fromName: resolveSenderName(item),
    subject: item?.subject || 'Generated update',
    date: item?.date || `${date}T09:${String(index).padStart(2, '0')}:00Z`,
    priority: item?.priority === 'high' ? 'high' : 'normal',
    unread: item?.unread !== false,
    body: item?.body || ''
  }));
}

function normalizeChat(input, date) {
  const grouped = {};

  if (Array.isArray(input)) {
    for (const item of input) {
      const channel = item?.channel || '#general';
      if (!grouped[channel]) grouped[channel] = [];
      grouped[channel].push(normalizeChatMessage(item, grouped[channel].length, date, channel));
    }
    return grouped;
  }

  if (!input || typeof input !== 'object') {
    return grouped;
  }

  for (const [channel, items] of Object.entries(input)) {
    grouped[channel] = Array.isArray(items)
      ? items.map((item, index) => normalizeChatMessage(item, index, date, channel))
      : [];
  }

  return grouped;
}

function normalizeChatMessage(item, index, date, channel) {
  return {
    id: item?.id || `chat-${date.replace(/-/g, '')}-${safeChannel(channel)}-${index + 1}`,
    user: item?.user || 'unknown',
    text: item?.text || '',
    time: item?.time || fallbackTime(index)
  };
}

function normalizeCalendar(items, date) {
  if (!Array.isArray(items)) return [];
  return items.map((item, index) => ({
    id: item?.id || `cal-${date.replace(/-/g, '')}-${index + 1}`,
    calendarId: item?.calendarId || item?.calendar_id || 'today',
    title: item?.title || 'Generated event',
    time: item?.time || fallbackTime(index),
    duration: item?.duration || '30min',
    type: item?.type === 'external' ? 'external' : 'internal',
    status: normalizeStatus(item?.status)
  }));
}

function normalizeStatus(status) {
  return ['pending', 'accepted', 'declined'].includes(status) ? status : 'pending';
}

function normalizeStrings(items, fallback) {
  const source = Array.isArray(items) && items.length > 0 ? items : fallback;
  return source.map((item) => String(item));
}

function normalizeObjects(items, fallback) {
  const source = Array.isArray(items) && items.length > 0 ? items : fallback;
  return source.map((item) => ({ ...item }));
}

function resolveEmailAddress(item = {}) {
  return item?.from
    || item?.from_email
    || item?.fromEmail
    || item?.sender_email
    || item?.senderEmail
    || item?.sender?.email
    || `${item?.user || item?.sender || 'contact'}@folio.local`;
}

function resolveSenderName(item = {}) {
  const explicit = item?.fromName
    || item?.from_name
    || item?.sender_name
    || item?.senderName
    || item?.name
    || item?.display_name
    || item?.displayName
    || item?.userName
    || item?.sender?.name
    || item?.from_display
    || item?.fromDisplay;

  if (explicit) return String(explicit).trim();

  const address = resolveEmailAddress(item);
  const localPart = String(address).split('@')[0];
  if (localPart) {
    return localPart
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return 'Unknown';
}

function safeChannel(channel) {
  return String(channel || 'general').replace(/[^a-z0-9]+/gi, '').toLowerCase() || 'general';
}

function fallbackTime(index) {
  const hour = 9 + Math.floor(index / 2);
  const minute = index % 2 === 0 ? '00' : '30';
  return `${String(hour).padStart(2, '0')}:${minute}`;
}
