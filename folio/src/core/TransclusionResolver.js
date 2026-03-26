const BLOCK_TYPES = new Set(['py', 'table', 'email', 'cal', 'note', 'contact', 'chat', 'web']);

export function resolveNoteTransclusion(descriptor, text, index, visited = new Set()) {
  const inlineText = (descriptor.body || []).join('\n');
  const sourceRef = descriptor.params.source || descriptor.params.target || '';
  const field = descriptor.params.field || '';
  const visitKey = `${descriptor.type}:${descriptor.id}@${descriptor.lineStart}`;

  if (visited.has(visitKey)) {
    return {
      id: descriptor.id,
      mode: 'error',
      text: '',
      error: `Transclusion cycle detected at ${descriptor.type}:${descriptor.id}`,
      source: sourceRef || null,
      field: field || null,
      sourceDescriptor: null,
      location: null
    };
  }

  if (!sourceRef) {
    return {
      id: descriptor.id,
      mode: 'inline',
      text: inlineText,
      error: null,
      source: null,
      field: null,
      sourceDescriptor: descriptor,
      location: { kind: 'body' }
    };
  }

  const source = parseSourceRef(sourceRef);
  if (!source) {
    return {
      id: descriptor.id,
      mode: 'error',
      text: '',
      error: `Invalid transclusion source "${sourceRef}". Use type:id.`,
      source: sourceRef,
      field: field || null,
      sourceDescriptor: null,
      location: null
    };
  }

  const target = index.find((item) => item.type === source.type && item.id === source.id);
  if (!target) {
    return {
      id: descriptor.id,
      mode: 'error',
      text: '',
      error: `Missing transclusion source ${sourceRef}.`,
      source: sourceRef,
      field: field || null,
      sourceDescriptor: null,
      location: null
    };
  }

  if (target.type === 'note' && !field) {
    const nested = resolveNoteTransclusion(target, text, index, new Set([...visited, visitKey]));
    return {
      ...nested,
      id: descriptor.id,
      source: sourceRef,
      field: field || nested.field || null,
      targetType: target.type,
      targetId: target.id
    };
  }

  const resolved = extractTranscludedText(target, field);
  return {
    id: descriptor.id,
    mode: 'transclusion',
    text: resolved.text,
    error: resolved.error || null,
    source: sourceRef,
    field: field || null,
    sourceDescriptor: target,
    location: resolved.location,
    targetType: target.type,
    targetId: target.id
  };
}

export function buildTransclusionPatch(resolved, newText) {
  if (!resolved?.sourceDescriptor || !resolved.location) return null;

  const target = resolved.sourceDescriptor;
  const nextText = newText ?? '';

  switch (resolved.location.kind) {
    case 'body': {
      const nextBody = nextText.split('\n');
      return {
        lineStart: target.lineStart,
        lineEnd: target.lineEnd,
        text: serializeBlockDirective(target, nextBody)
      };
    }
    case 'param': {
      const nextParams = { ...target.params, [resolved.location.field]: flattenToInlineValue(nextText) };
      return {
        lineStart: target.lineStart,
        lineEnd: target.lineEnd,
        text: serializeDescriptor(target, nextParams, target.body || [])
      };
    }
    case 'body-field': {
      const lines = [...(target.body || [])];
      lines[resolved.location.lineOffset] = `${resolved.location.field} = ${flattenToInlineValue(nextText)}`;
      return {
        lineStart: target.lineStart,
        lineEnd: target.lineEnd,
        text: serializeDescriptor(target, target.params, lines)
      };
    }
    default:
      return null;
  }
}

export function serializeDirectiveLine(type, id, params = {}) {
  const entries = Object.entries(params).filter(([_, v]) => v != null && v !== '');
  if (entries.length === 0) return `::${type}[${id}]`;
  const paramStr = entries
    .map(([k, v]) => String(v).includes(' ') ? `${k}="${v}"` : `${k}=${v}`)
    .join(' ');
  return `::${type}[${id}]{${paramStr}}`;
}

function parseSourceRef(sourceRef) {
  const match = sourceRef.match(/^([a-z0-9-]+):(.+)$/i);
  if (!match) return null;
  return { type: match[1], id: match[2] };
}

function extractTranscludedText(target, field) {
  if (!field || field === 'body' || field === 'text') {
    if (target.body) {
      return {
        text: (target.body || []).join('\n'),
        location: { kind: 'body' }
      };
    }

    return {
      text: target.raw || '',
      error: `Source ${target.type}:${target.id} has no editable body.`,
      location: null
    };
  }

  if (target.params && Object.prototype.hasOwnProperty.call(target.params, field)) {
    return {
      text: String(target.params[field] ?? ''),
      location: { kind: 'param', field }
    };
  }

  const fields = parseBodyFields(target.body || []);
  if (fields[field]) {
    return {
      text: fields[field].value,
      location: { kind: 'body-field', field, lineOffset: fields[field].lineOffset }
    };
  }

  return {
    text: '',
    error: `Field "${field}" not found on ${target.type}:${target.id}.`,
    location: null
  };
}

function parseBodyFields(body) {
  const fields = {};
  for (let i = 0; i < body.length; i++) {
    const match = body[i].match(/^([\w-]+)\s*=\s*(.+)$/);
    if (match) {
      fields[match[1]] = {
        value: match[2].trim(),
        lineOffset: i
      };
    }
  }
  return fields;
}

function flattenToInlineValue(text) {
  return String(text ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
}

function serializeDescriptor(target, params, body) {
  const directiveLine = serializeDirectiveLine(target.type, target.id, params);
  if (BLOCK_TYPES.has(target.type)) {
    return [directiveLine, ...(body || []), '::end'].join('\n');
  }
  return directiveLine;
}

function serializeBlockDirective(target, body) {
  return serializeDescriptor(target, target.params, body);
}
