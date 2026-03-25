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

        // Block directives are multi-line with ::end
        const blockTypes = ['py', 'table', 'email', 'cal', 'note', 'contact', 'chat', 'web'];
        if (blockTypes.includes(descriptor.type)) {
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
