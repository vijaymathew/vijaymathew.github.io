/**
 * Parses the document text into a structured DirectiveIndex.
 * Handles both inline directives ::type[id]{params} and block directives ::type[id]...::end.
 */
export class DirectiveParser {
  constructor() {
    this.knownTypes = null;
  }

  setKnownTypes(types = []) {
    const values = Array.isArray(types) ? types : [];
    this.knownTypes = new Set(values.map((value) => String(value).trim()).filter(Boolean));
  }

  /**
   * Scan the document and return an array of directive descriptors.
   * @param {string} text 
   * @returns {DirectiveDescriptor[]}
   */
  parse(text) {
    const lines = text.split('\n');
    const index = [];
    let currentBlock = null;
    const blockCapableTypes = new Set(['py', 'table', 'email', 'cal', 'note', 'contact', 'chat', 'web']);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Check for block end
      if (line === '::end' && currentBlock) {
        currentBlock.lineEnd = i;
        index.push(currentBlock);
        currentBlock = null;
        continue;
      }

      // Check for directive start
      // ::type[id]{params} - where id and params are optional
      const match = line.match(/^::([a-z0-9-]+)(?:\[([^\]]*)\])?(?:\{([^\}]*)\})?$/);
      if (match) {
        if (!this._isKnownType(match[1])) {
          continue;
        }

        const descriptor = {
          type: match[1],
          id: match[2] || '',
          params: match[3] ? this.parseParams('{' + match[3] + '}') : {},
          lineStart: i,
          lineEnd: i, // Default for single-line
          raw: lines[i]
        };

        // Some block-capable directives can render from a single header line
        // because they are pure projections with no required body. Others
        // keep requiring ::end so the user can finish authoring their content.
        if (blockCapableTypes.has(descriptor.type)) {
          if (this._hasExplicitBlockTerminator(lines, i + 1)) {
            currentBlock = { ...descriptor, body: [] };
          } else if (this._canRenderInline(descriptor)) {
            index.push(descriptor);
          }
        } else {
          index.push(descriptor);
        }
        continue;
      }

      // If we are inside a block, collect the body
      if (currentBlock) {
        currentBlock.body.push(lines[i]);
      }
    }

    return index;
  }

  _hasExplicitBlockTerminator(lines, startIndex) {
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '::end') return true;
      const match = line.match(/^::([a-z0-9-]+)(?:\[([^\]]*)\])?(?:\{([^\}]*)\})?$/i);
      if (match && this._isKnownType(match[1])) return false;
    }
    return false;
  }

  _isKnownType(type) {
    if (!this.knownTypes || this.knownTypes.size === 0) return true;
    return this.knownTypes.has(type);
  }

  _canRenderInline(descriptor) {
    if (!descriptor) return false;

    if (descriptor.type === 'cal' || descriptor.type === 'chat') {
      return true;
    }

    if (descriptor.type === 'email') {
      const id = String(descriptor.id || '').trim().toLowerCase();
      return id !== 'draft' && !id.startsWith('draft');
    }

    if (descriptor.type === 'note') {
      return Boolean(descriptor.params?.source || descriptor.params?.target);
    }

    return false;
  }

  /**
   * Parse a JSON-like params string {key=val, key2=val2}.
   * @param {string} paramStr 
   */
  parseParams(paramStr) {
    // Supports both space-separated and comma-separated key=value pairs,
    // with optional quoted values for strings containing spaces:
    //   {view=agenda}  {filter=unread priority=high}
    //   {to=sara@ex.com subject="Q3 hardware spend"}
    const clean = paramStr.slice(1, -1).trim();
    const params = {};
    if (!clean) return params;

    const re = /([\w][\w-]*)=(?:"([^"]*)"|([^\s,}]+))/g;
    let m;
    while ((m = re.exec(clean)) !== null) {
      params[m[1]] = m[2] !== undefined ? m[2] : m[3];
    }
    return params;
  }
}
