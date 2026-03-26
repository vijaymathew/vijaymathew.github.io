export class SimulationDocumentNormalizer {
  normalizeDocumentResult(rawResult = {}, context = {}) {
    const profile = context.profile || {};
    const scenario = context.scenario || {};
    const date = context.date || new Date().toISOString().slice(0, 10);
    const tomorrow = shiftDate(date, 1);
    const contacts = normalizeContacts(rawResult.contacts, profile);
    const primaryContactId = resolvePrimaryContactId(rawResult.primary_contact_id, contacts);
    const analysis = normalizeAnalysis(rawResult.analysis, primaryContactId);
    const mirrored = normalizeMirrored(rawResult.mirrored, profile, scenario);
    const lifecycle = normalizeLifecycle(rawResult.lifecycle, tomorrow);

    return {
      heading: normalizeHeading(rawResult.heading, date),
      introParagraphs: buildIntroParagraphs(profile, analysis, scenario, date),
      contacts,
      primaryContactId,
      analysis,
      tasks: normalizeTasks(rawResult.tasks, date),
      fileReference: normalizeFileReference(rawResult.file_reference, profile),
      webReference: normalizeWebReference(rawResult.web_reference, analysis.title),
      mirrored,
      lifecycle
    };
  }

  compileDocument(spec, context = {}) {
    const date = context.date || new Date().toISOString().slice(0, 10);
    const primaryContact = spec.contacts.find((contact) => contact.id === spec.primaryContactId) || spec.contacts[0];
    const noteId = `${spec.primaryContactId || primaryContact?.id || 'primary'}-note`;
    const analysisId = slugify(spec.analysis.title, 'analysis');
    const pyId = `${analysisId}-calc`;
    const tableId = `${analysisId}-table`;
    const labelKey = safePyKey(spec.analysis.columns.label, 'label');
    const value1Key = safePyKey(spec.analysis.columns.value1, 'value1');
    const value2Key = safePyKey(spec.analysis.columns.value2, 'value2');
    const value3Key = safePyKey(spec.analysis.columns.value3, 'value3');
    const statusKey = safePyKey(spec.analysis.columns.status, 'status');
    const value1Var = `${value1Key}_values`;
    const value2Var = `${value2Key}_values`;
    const rowsPy = spec.analysis.rows.map((row) => `    {${repr(labelKey)}: ${repr(row.label)}, ${repr(value1Key)}: ${formatNumber(row.value1)}, ${repr(value2Key)}: ${formatNumber(row.value2)}, ${repr(value3Key)}: ${formatNumber(row.value3)}, ${repr(statusKey)}: ${repr(row.status)}},`);
    const body = [];

    body.push(spec.heading);
    body.push(...spec.introParagraphs);
    body.push('');
    body.push(`::meta[status]{value=${spec.lifecycle.status}}`);
    body.push('');
    body.push(`::cal[${spec.mirrored.calendarId}]{view=agenda}`);
    body.push('::end');
    body.push('');
    body.push(`::email[inbox]{filter=unread}`);
    body.push('::end');
    body.push('');
    body.push(`::email[${spec.mirrored.threadId}]{limit=${spec.mirrored.threadLimit}}`);
    body.push('::end');
    body.push('');

    for (const contact of spec.contacts) {
      body.push(`::contact[${contact.id}]`);
      body.push(`name = ${contact.name}`);
      body.push(`email = ${contact.email}`);
      body.push(`role = ${contact.role}`);
      if (contact.org) body.push(`org = ${contact.org}`);
      if (contact.phone) body.push(`phone = ${contact.phone}`);
      body.push(`notes = ${contact.notes}`);
      body.push('::end');
      body.push('');
    }

    body.push(`::note[${noteId}]{source=contact:${primaryContact?.id || spec.primaryContactId} field=notes}`);
    body.push('::end');
    body.push('');
    body.push(spec.analysis.title);
    body.push('');
    body.push(spec.analysis.intro);
    body.push('');
    body.push(`::py[${pyId}]{run=auto}`);
    body.push('result = [');
    body.push(...rowsPy);
    body.push(']');
    body.push(`${value2Var} = [d[${repr(value2Key)}] for d in result]`);
    body.push(`${value1Var} = [d[${repr(value1Key)}] for d in result]`);
    body.push(`note_data = note.query({'id': ${repr(noteId)}})`);
    body.push(`print(f"Contact note: {note_data['id']}")`);
    body.push(`print(f"${spec.analysis.columns.value2} total: {sum(${value2Var}):,.0f}")`);
    body.push(`print(f"${spec.analysis.columns.value2} vs ${spec.analysis.columns.value1}: {sum(a-b for a,b in zip(${value2Var},${value1Var})):+,.0f}")`);
    body.push('::end');
    body.push('');
    body.push(`::table[${tableId}]{source=${pyId} editable=true}`);
    body.push(`| ${spec.analysis.columns.label} | ${spec.analysis.columns.value1} | ${spec.analysis.columns.value2} | ${spec.analysis.columns.value3} | ${spec.analysis.columns.status} |`);
    for (const row of spec.analysis.rows) {
      body.push(`| ${row.label} | ${formatNumber(row.value1)} | ${formatNumber(row.value2)} | ${formatNumber(row.value3)} | ${row.status} |`);
    }
    body.push('::end');
    body.push('');

    for (const task of spec.tasks) {
      const params = [
        `due=${task.due}`,
        `priority=${task.priority}`,
        `status=${task.status}`
      ];
      if (task.blockedBy) params.push(`blocked-by=${task.blockedBy}`);
      body.push(`::task[${task.id}]{${params.join(' ')}}`);
    }
    body.push('');
    body.push(`::file[${spec.fileReference.path}]{preview=${spec.fileReference.preview ? 'true' : 'false'}}`);
    body.push('');
    body.push(`::chat[${spec.mirrored.chatChannel}]{limit=5}`);
    body.push('::end');
    body.push('');
    body.push(`::web[${spec.webReference.url}]{view=reader}`);
    body.push(`title = ${spec.webReference.title}`);
    body.push(`summary = ${spec.webReference.summary}`);
    body.push('---');
    body.push(spec.webReference.annotation);
    body.push('::end');
    body.push('');
    body.push(`::spawn[next]{doc=${spec.lifecycle.nextDocId} title="${spec.lifecycle.nextTitle}" after-status=${spec.lifecycle.afterStatus}}`);

    return body.join('\n');
  }
}

function normalizeHeading(value, date) {
  const heading = sanitizeInline(value);
  return heading || formatDocumentHeading(date);
}

function normalizeParagraphs(value, fallback) {
  const items = Array.isArray(value) ? value : (typeof value === 'string' ? [value] : fallback);
  return items.map((item) => String(item || '').trim()).filter(Boolean).slice(0, 3);
}

function normalizeContacts(value, profile) {
  const contacts = Array.isArray(value) ? value : [];
  const normalized = contacts
    .map((item, index) => ({
      id: slugify(item?.id || item?.name || `contact-${index + 1}`, `contact-${index + 1}`),
      name: sanitizeInline(item?.name),
      email: sanitizeInline(item?.email),
      role: sanitizeInline(item?.role || item?.relationship || 'Contact'),
      org: sanitizeInline(item?.org || profile?.organization?.name || ''),
      phone: sanitizeInline(item?.phone),
      notes: sanitizeInline(item?.notes)
    }))
    .filter((item) => item.name || item.email || item.notes);

  if (normalized.length > 0) {
    return normalized.map((item, index) => ({
      ...item,
      name: item.name || `Contact ${index + 1}`,
      email: item.email || `${item.id}@${profile?.organization?.domain || 'folio.local'}`,
      notes: item.notes || 'Key person in today’s context.'
    }));
  }

  const profileContacts = Array.isArray(profile?.contacts) ? profile.contacts.slice(0, 2) : [];
  if (profileContacts.length > 0) {
    return profileContacts.map((item, index) => ({
      id: slugify(item.id || item.name || `contact-${index + 1}`, `contact-${index + 1}`),
      name: item.name || `Contact ${index + 1}`,
      email: item.email || `${slugify(item.name || `contact-${index + 1}`)}@${profile?.organization?.domain || 'folio.local'}`,
      role: item.role || item.relationship || 'Contact',
      org: profile?.organization?.name || '',
      phone: item.phone || '',
      notes: item.notes || 'Relevant to today’s document.'
    }));
  }

  return [{
    id: 'primary-contact',
    name: profile?.user?.name || 'Primary contact',
    email: profile?.user?.email || 'user@folio.local',
    role: profile?.user?.role || 'User',
    org: profile?.organization?.name || '',
    phone: '',
    notes: 'Reference point for the document.'
  }];
}

function resolvePrimaryContactId(value, contacts) {
  const requested = slugify(value || '', '');
  if (requested && contacts.some((contact) => contact.id === requested)) {
    return requested;
  }
  return contacts[0]?.id || 'primary-contact';
}

function normalizeAnalysis(value, primaryContactId) {
  const raw = value && typeof value === 'object' ? value : {};
  const rows = Array.isArray(raw.rows) ? raw.rows : [];
  const normalizedRows = rows
    .map((item, index) => ({
      label: String(item?.label || item?.item || `Line ${index + 1}`).trim(),
      value1: toNumber(item?.value1 ?? item?.planned ?? item?.baseline, index + 1),
      value2: toNumber(item?.value2 ?? item?.current ?? item?.actual, index + 2),
      value3: toNumber(item?.value3 ?? item?.next ?? item?.forecast, index + 3),
      status: String(item?.status || 'In Progress').trim()
    }))
    .slice(0, 5);

  const fallbackRows = normalizedRows.length ? normalizedRows : buildFallbackRows();
  return {
    title: sanitizeInline(raw?.title || 'Today’s working breakdown'),
    intro: String(raw?.intro || 'A quick breakdown of the areas that need attention today.').trim(),
    noteId: `${primaryContactId}-note`,
    columns: {
      label: sanitizeInline(raw?.columns?.label || 'Area'),
      value1: sanitizeInline(raw?.columns?.value1 || 'Baseline'),
      value2: sanitizeInline(raw?.columns?.value2 || 'Current'),
      value3: sanitizeInline(raw?.columns?.value3 || 'Next'),
      status: sanitizeInline(raw?.columns?.status || 'Status')
    },
    rows: fallbackRows
  };
}

function normalizeTasks(value, date) {
  const tasks = Array.isArray(value) ? value : [];
  const normalized = tasks
    .map((task, index) => ({
      id: slugify(task?.id || task?.title || `task-${index + 1}`, `task-${index + 1}`),
      title: String(task?.title || '').trim(),
      due: normalizeDue(task?.due, index === 0 ? 'today' : shiftDate(date, 1)),
      priority: normalizePriority(task?.priority),
      status: normalizeTaskStatus(task?.status),
      blockedBy: task?.blocked_by ? slugify(task.blocked_by, '') : (task?.blockedBy ? slugify(task.blockedBy, '') : '')
    }))
    .filter((task) => task.title);

  if (normalized.length) {
    return normalized.map((task) => ({
      ...task,
      blockedBy: task.blockedBy || ''
    }));
  }

  return [
    { id: 'follow-up', title: 'Follow up on the main thread', due: 'today', priority: 'high', status: 'todo', blockedBy: '' },
    { id: 'prepare-next', title: 'Prepare tomorrow’s next step', due: shiftDate(date, 1), priority: 'medium', status: 'todo', blockedBy: 'follow-up' }
  ];
}

function normalizeFileReference(value, profile) {
  const raw = value && typeof value === 'object' ? value : {};
  return {
    path: String(raw.path || raw.file || `~/docs/${slugify(profile?.projects?.[0]?.name || profile?.user?.role || 'reference')}-notes.pdf`).trim(),
    preview: raw.preview !== false
  };
}

function normalizeWebReference(value, analysisTitle) {
  const raw = value && typeof value === 'object' ? value : {};
  return {
    url: sanitizeInline(raw.url || 'https://example.com/reference'),
    title: sanitizeInline(raw.title || analysisTitle || 'Reference'),
    summary: sanitizeInline(raw.summary || 'A relevant external reference for today’s work.'),
    annotation: String(raw.annotation || raw.note || 'Useful background context tied to the main focus of the day.').trim()
  };
}

function normalizeMirrored(value, profile, scenario) {
  const raw = value && typeof value === 'object' ? value : {};
  const channels = Array.isArray(profile?.channels) ? profile.channels : [];
  const threads = Array.isArray(scenario?.threads) ? scenario.threads : [];
  return {
    calendarId: String(raw.calendar_id || raw.calendarId || 'today').trim() || 'today',
    threadId: sanitizeInline(raw.thread_id || raw.threadId || threads[0]?.thread_id || defaultThreadId(profile)),
    threadLimit: parseInt(raw.thread_limit || raw.threadLimit || 3, 10) || 3,
    chatChannel: sanitizeChannel(raw.chat_channel || raw.chatChannel || channels[0]?.id || '#general')
  };
}

function normalizeLifecycle(value, tomorrow) {
  const raw = value && typeof value === 'object' ? value : {};
  return {
    status: ['active', 'dormant', 'archived'].includes(raw.status) ? raw.status : 'active',
    nextDocId: sanitizeInline(raw.next_doc_id || raw.nextDocId || `daily:${tomorrow}`),
    nextTitle: sanitizeInline(raw.next_title || raw.nextTitle || formatDocumentHeading(tomorrow)),
    afterStatus: ['active', 'dormant', 'archived'].includes(raw.after_status || raw.afterStatus) ? (raw.after_status || raw.afterStatus) : 'dormant'
  };
}

function buildIntroParagraphs(profile, analysis, scenario, date) {
  const user = profile?.user || {};
  const contacts = Array.isArray(profile?.contacts) ? profile.contacts : [];
  const project = profile?.projects?.[0] || null;
  const primaryContact = contacts[0] || null;
  const role = (user.role || 'general work').toLowerCase();
  const focus = project?.name || analysis?.title || 'today’s main focus';
  const interestLine = Array.isArray(user.interests) && user.interests.length
    ? `The day is shaped by ${user.interests.slice(0, 3).join(', ')}.`
    : '';
  const contactLine = primaryContact
    ? `${primaryContact.name} is one of the main people in today’s loop.`
    : 'The document keeps the main coordination thread close at hand.';
  const scenarioFact = Array.isArray(scenario?.facts) && scenario.facts.length
    ? String(scenario.facts[0]).trim()
    : '';

  return [
    `${user.name || 'The user'} is working as ${role}, with today centered on ${focus}.`,
    [user.bio || '', contactLine, interestLine, scenarioFact].filter(Boolean).join(' ')
  ].filter(Boolean);
}

function buildFallbackRows() {
  return [
    { label: 'Focus 1', value1: 2, value2: 3, value3: 3, status: 'Active' },
    { label: 'Focus 2', value1: 1, value2: 2, value3: 2, status: 'Active' },
    { label: 'Focus 3', value1: 3, value2: 2, value3: 4, status: 'Watch' },
    { label: 'Focus 4', value1: 2, value2: 2, value3: 2, status: 'Stable' },
    { label: 'Focus 5', value1: 1, value2: 1, value3: 1, status: 'Queued' }
  ];
}

function normalizeDue(value, fallback) {
  const raw = String(value || '').trim();
  return raw || fallback;
}

function normalizePriority(value) {
  const raw = String(value || '').trim().toLowerCase();
  return ['low', 'medium', 'high'].includes(raw) ? raw : 'medium';
}

function normalizeTaskStatus(value) {
  const raw = String(value || '').trim().toLowerCase();
  return ['todo', 'doing', 'done', 'blocked'].includes(raw) ? raw : 'todo';
}

function toNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function slugify(value, fallback = 'item') {
  const slug = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || fallback;
}

function formatDocumentHeading(date) {
  const value = new Date(`${date}T00:00:00`);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(value);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
  const day = value.getDate();
  const year = value.getFullYear();
  return `${weekday}, ${day} ${month} ${year}.`;
}

function shiftDate(dateString, delta) {
  const value = new Date(`${dateString}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + delta);
  return value.toISOString().slice(0, 10);
}

function repr(value) {
  return JSON.stringify(String(value ?? ''));
}

function formatNumber(value) {
  return Number.isFinite(Number(value)) ? String(Number(value)) : '0';
}

function defaultThreadId(profile) {
  const focus = profile?.projects?.[0]?.name || profile?.user?.role || 'focus';
  return `thread-${slugify(focus, 'focus')}`;
}

function sanitizeInline(value) {
  return String(value || '').replace(/\s*\n+\s*/g, ' ').trim();
}

function sanitizeChannel(value) {
  const channel = sanitizeInline(value || '#general');
  if (!channel) return '#general';
  return channel.startsWith('#') ? channel : `#${channel}`;
}

function safePyKey(value, fallback) {
  const key = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  if (!key) return fallback;
  if (/^\d/.test(key)) return `${fallback}_${key}`;
  return key;
}
