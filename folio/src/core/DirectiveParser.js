/**
 * Parses the document text into a structured DirectiveIndex.
 * Handles both inline directives ::type[id]{params} and block directives ::type[id]...::end.
 */
export class DirectiveParser {
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
        const descriptor = {
          type: match[1],
          id: match[2] || '',
          params: match[3] ? this.parseParams('{' + match[3] + '}') : {},
          lineStart: i,
          lineEnd: i, // Default for single-line
          raw: lines[i]
        };

        // Block-capable directives become blocks only when a matching ::end
        // appears before the next directive start; otherwise treat them as
        // single-line directives so forms like ::cal[today]{view=agenda} render.
        if (blockCapableTypes.has(descriptor.type) && this._hasExplicitBlockTerminator(lines, i + 1)) {
          currentBlock = { ...descriptor, body: [] };
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
      if (/^::([a-z0-9-]+)(?:\[([^\]]*)\])?(?:\{([^\}]*)\})?$/i.test(line)) return false;
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
