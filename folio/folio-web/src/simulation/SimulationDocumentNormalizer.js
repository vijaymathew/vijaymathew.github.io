export class SimulationDocumentNormalizer {
  normalizeDocumentResult(rawResult = {}, context = {}) {
    const date = context.date || new Date().toISOString().slice(0, 10);
    return {
      heading: normalizeHeading(rawResult.heading, date),
      introParagraphs: normalizeParagraphs(
        rawResult.intro_paragraphs || rawResult.introParagraphs || rawResult.opening,
        buildFallbackOpening(context.profile, context.scenario)
      )
    };
  }

  compileDocument(spec) {
    return [spec.heading, ...spec.introParagraphs].join('\n');
  }
}

function normalizeHeading(value, date) {
  const heading = String(value || '').trim();
  return heading || formatDocumentHeading(date);
}

function normalizeParagraphs(value, fallback = []) {
  const items = Array.isArray(value)
    ? value
    : (typeof value === 'string' ? [value] : fallback);

  const normalized = items
    .map((item) => String(item || '').trim())
    .filter(Boolean)
    .slice(0, 2);

  return normalized.length > 0 ? normalized : fallback;
}

function buildFallbackOpening(profile = {}, scenario = {}) {
  const focus = profile?.projects?.[0]?.name
    || profile?.user?.role
    || 'today’s work';
  const contact = profile?.contacts?.[0]?.name || 'the next conversation';
  const facts = Array.isArray(scenario?.facts) ? scenario.facts.filter(Boolean) : [];
  const firstFact = facts[0] ? `${facts[0]}.` : '';

  return [
    `Starting with ${focus}, and keeping enough room to respond to ${contact} once the shape of the day becomes clearer.${firstFact ? ` ${firstFact}` : ''}`.trim()
  ];
}

function formatDocumentHeading(date) {
  const value = new Date(`${date}T00:00:00`);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(value);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(value);
  const day = value.getDate();
  const year = value.getFullYear();
  return `${weekday}, ${day} ${month} ${year}.`;
}
