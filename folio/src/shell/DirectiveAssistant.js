import { MockCalBackend } from '../backends/MockCalBackend.js';
import { MockChatBackend } from '../backends/MockChatBackend.js';
import { MockEmailBackend } from '../backends/MockEmailBackend.js';

const DIRECTIVE_ORDER = [
  'meta',
  'spawn',
  'cal',
  'email',
  'contact',
  'note',
  'table',
  'py',
  'task',
  'file',
  'chat',
  'web'
];

const DIRECTIVE_METADATA = {
  meta: {
    summary: 'Document lifecycle metadata.',
    identifierExamples: ['status'],
    params: (ctx) => [
      defineParam('value', ['active', 'dormant', 'archived'], 'Lifecycle state for the current document.'),
      defineParam('status', ['active', 'dormant', 'archived'], 'Alias for value= on legacy documents.')
    ]
  },
  spawn: {
    summary: 'Create the next document and task roll-up.',
    identifierExamples: ['next'],
    params: (ctx) => [
      defineParam('doc', [nextDailyId(ctx), `${ctx.currentDocumentId}:next`], 'Document id to create for the next document.'),
      defineParam('date', [todayIso(), tomorrowIso()], 'Date shortcut for daily documents.'),
      defineParam('rollup', [`${nextDailyId(ctx)}:rollup`], 'Document id for the generated roll-up.'),
      defineParam('title', ['"Tomorrow"'], 'Title line for the spawned document.'),
      defineParam('after-status', ['active', 'dormant', 'archived'], 'Lifecycle value written back to the current document.'),
      defineParam('spawned', [nextDailyId(ctx)], 'Recorded target after a spawn action completes.')
    ]
  },
  cal: {
    summary: 'Calendar slice rendered inline.',
    identifiers: (ctx) => withExamples(unique(MockCalBackend.queryAll().map((event) => event.calendarId)), ['today']),
    params: () => [
      defineParam('view', ['agenda', 'day', 'week', 'month'], 'Calendar presentation mode.'),
      defineParam('status', ['pending', 'accepted', 'declined'], 'Optional event status filter.')
    ]
  },
  email: {
    summary: 'Inbox, thread, or draft email view.',
    identifiers: (ctx) => {
      const all = MockEmailBackend.queryAll();
      const mailboxes = unique(all.map((message) => message.mailbox));
      const threads = unique(all.map((message) => message.threadId));
      return withExamples([...mailboxes, 'draft', ...threads], ['inbox', 'sent', 'archive', 'draft']);
    },
    params: (ctx) => [
      defineParam('filter', ['unread'], 'Inbox filter.'),
      defineParam('priority', ['high', 'normal'], 'Optional priority filter.'),
      defineParam('limit', ['3', '5', '10'], 'Message limit for a thread view.'),
      defineParam('to', contactEmails(ctx), 'Draft recipient email address.'),
      defineParam('subject', ['"Q3 Hardware Budget"'], 'Draft subject line.')
    ]
  },
  contact: {
    summary: 'Structured contact record stored in the document.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'contact'), ['primary-contact', 'sara.chen']),
    params: () => []
  },
  note: {
    summary: 'Inline note or live transclusion.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'note'), ['meeting-notes', 'open-rollup']),
    params: (ctx) => [
      defineParam('source', transclusionSources(ctx), 'Block reference in type:id form.'),
      defineParam('target', transclusionSources(ctx), 'Legacy alias for source=.'),
      defineParam('source-doc', documentIds(ctx), 'Document id to transclude from.'),
      defineParam('field', ['body', 'text', 'raw', 'notes', 'name', 'email', 'role', 'phone', 'status'], 'Field or projection to transclude.')
    ]
  },
  table: {
    summary: 'Text-native table, optionally linked to ::py.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'table'), ['budget', 'breakdown']),
    params: (ctx) => [
      defineParam('source', withExamples(getIdsByType(ctx.index, 'py'), ['analysis', 'q3-check']), 'Source ::py block id.'),
      defineParam('editable', ['true', 'false'], 'Whether rendered cells can be edited inline.'),
      defineParam('source-var', ['result', 'table_result'], 'Python variable to read table rows from.'),
      defineParam('result', ['result', 'table_result'], 'Legacy alias for source-var=.'),
      defineParam('sortable', ['true', 'false'], 'Architecture-level table option; currently documentation only.')
    ]
  },
  py: {
    summary: 'Sandboxed Python block in document context.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'py'), ['analysis', 'q3-check']),
    params: () => [
      defineParam('run', ['manual', 'auto'], 'Execution policy for the block.'),
      defineParam('grants', ['email.read', 'cal.read', 'chat.read', 'web.read'], 'Mirrored capabilities requested by the block.'),
      defineParam('allow', ['email', 'cal', 'chat', 'web'], 'Legacy namespace alias for grants=.'),
      defineParam('result', ['result', 'table_result'], 'Result variable commonly consumed by ::table.')
    ]
  },
  task: {
    summary: 'Single task stored as a directive line.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'task'), ['task-1', 'next-step']),
    params: (ctx) => [
      defineParam('due', ['today', 'tomorrow', todayIso()], 'Due date or relative day token.'),
      defineParam('priority', ['low', 'medium', 'high'], 'Task priority.'),
      defineParam('status', ['todo', 'doing', 'done', 'blocked'], 'Task state.'),
      defineParam('blocked-by', getIdsByType(ctx.index, 'task'), 'Blocking task id.'),
      defineParam('completed', [`${todayIso()}T09:30`], 'Completion timestamp for done tasks.')
    ]
  },
  file: {
    summary: 'File reference with optional preview.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'file'), ['~/docs/reference.pdf', '~/docs/report.pdf']),
    params: () => [
      defineParam('preview', ['true', 'false', 'thumbnail', 'first-sheet'], 'Preview rendering mode.')
    ]
  },
  chat: {
    summary: 'Channel slice rendered inline.',
    identifiers: (ctx) => withExamples([
      ...profileChannelIds(ctx),
      ...unique(MockChatBackend.queryAll().map((item) => item.channel))
    ], ['#general', '#finance']),
    params: () => [
      defineParam('limit', ['5', '8', '10'], 'Maximum number of chat messages to show.'),
      defineParam('since', ['today', 'yesterday', todayIso()], 'Lower time bound for the slice.')
    ]
  },
  web: {
    summary: 'Reader-mode or raw web clip.',
    identifiers: (ctx) => withExamples(getIdsByType(ctx.index, 'web'), ['https://example.com/article']),
    params: () => [
      defineParam('view', ['reader', 'raw'], 'Web renderer mode.')
    ]
  }
};

export class DirectiveAssistant {
  constructor({ registry, store, parser, profileStore = null }) {
    this.registry = registry;
    this.store = store;
    this.parser = parser;
    this.profileStore = profileStore;
    this.bindings = new WeakMap();
    this.activeBinding = null;
    this.activeContext = null;
    this.items = [];
    this.selectedIndex = 0;

    this.popup = document.createElement('div');
    this.popup.className = 'directive-assist';
    this.popup.hidden = true;
    document.body.appendChild(this.popup);

    this._onDocumentPointerDown = this._onDocumentPointerDown.bind(this);
    this._onViewportChange = this._onViewportChange.bind(this);

    document.addEventListener('mousedown', this._onDocumentPointerDown, true);
    window.addEventListener('resize', this._onViewportChange);
    window.addEventListener('scroll', this._onViewportChange, true);
  }

  bind(element, options = {}) {
    if (!element || this.bindings.has(element)) return;

    const binding = {
      element,
      mode: options.mode || inferMode(element)
    };

    binding.onInput = () => this._refresh(binding);
    binding.onFocus = () => this._refresh(binding);
    binding.onClick = () => this._refresh(binding);
    binding.onBlur = () => {
      requestAnimationFrame(() => {
        const activeElement = document.activeElement;
        const stillInside = activeElement === element || this.popup.contains(activeElement);
        if (!stillInside && this.activeBinding?.element === element) {
          this.hide();
        }
      });
    };
    binding.onKeydown = (event) => this._handleKeydown(event, binding);

    element.addEventListener('input', binding.onInput);
    element.addEventListener('focus', binding.onFocus);
    element.addEventListener('click', binding.onClick);
    element.addEventListener('blur', binding.onBlur);
    element.addEventListener('keydown', binding.onKeydown);

    this.bindings.set(element, binding);
  }

  hide() {
    this.popup.hidden = true;
    this.popup.innerHTML = '';
    this.activeBinding = null;
    this.activeContext = null;
    this.items = [];
    this.selectedIndex = 0;
  }

  _refresh(binding) {
    if (!binding?.element?.isConnected) {
      this.hide();
      return;
    }

    const context = this._resolveContext(binding);
    if (!context) {
      if (this.activeBinding?.element === binding.element) this.hide();
      return;
    }

    const items = this._buildItems(context);
    if (items.length === 0 && context.stage !== 'params') {
      if (this.activeBinding?.element === binding.element) this.hide();
      return;
    }

    this.activeBinding = binding;
    this.activeContext = context;
    this.items = items;
    this.selectedIndex = clamp(this.selectedIndex, 0, Math.max(items.length - 1, 0));

    this._renderPopup(context, items);
    this._positionPopup(binding, context);
  }

  _handleKeydown(event, binding) {
    if (!this.activeBinding || this.activeBinding.element !== binding.element || this.popup.hidden) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.hide();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.items.length > 0) {
        this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
        this._renderPopup(this.activeContext, this.items);
        this._positionPopup(binding, this.activeContext);
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.items.length > 0) {
        this.selectedIndex = (this.selectedIndex - 1 + this.items.length) % this.items.length;
        this._renderPopup(this.activeContext, this.items);
        this._positionPopup(binding, this.activeContext);
      }
      return;
    }

    if ((event.key === 'Enter' || event.key === 'Tab') && this.items.length > 0) {
      event.preventDefault();
      this._applySelection(this.items[this.selectedIndex]);
    }
  }

  _resolveContext(binding) {
    const state = readSurfaceState(binding);
    if (!state || state.selectionStart !== state.selectionEnd) return null;

    const caret = state.selectionStart;
    const lineStart = state.text.lastIndexOf('\n', Math.max(caret - 1, 0)) + 1;
    const beforeCaret = state.text.slice(lineStart, caret);

    const rendererMatch = beforeCaret.match(/^\s*::([a-z0-9-]*)$/i);
    if (rendererMatch) {
      return {
        stage: 'renderer',
        query: rendererMatch[1] || '',
        replaceStart: caret - (rendererMatch[1] || '').length,
        replaceEnd: caret,
        state
      };
    }

    const identifierMatch = beforeCaret.match(/^\s*::([a-z0-9-]+)\[([^\]]*)$/i);
    if (identifierMatch) {
      const renderer = identifierMatch[1];
      if (!this._getRendererTypes().includes(renderer)) return null;

      return {
        stage: 'identifier',
        renderer,
        query: identifierMatch[2] || '',
        replaceStart: caret - (identifierMatch[2] || '').length,
        replaceEnd: caret,
        state
      };
    }

    const paramsMatch = beforeCaret.match(/^\s*::([a-z0-9-]+)(?:\[([^\]]*)\])?\{([^}]*)$/i);
    if (paramsMatch) {
      const renderer = paramsMatch[1];
      if (!this._getRendererTypes().includes(renderer)) return null;

      const rawParamText = paramsMatch[3] || '';
      const token = lastToken(rawParamText);
      const valueMatch = token.match(/^([\w-]+)=(.*)$/);

      return {
        stage: 'params',
        renderer,
        query: token,
        replaceStart: caret - token.length,
        replaceEnd: caret,
        activeParam: valueMatch ? valueMatch[1] : '',
        state
      };
    }

    return null;
  }

  _buildItems(context) {
    const docContext = this._buildDocumentContext();

    if (context.stage === 'renderer') {
      return this._getRendererTypes()
        .filter((type) => type.startsWith(context.query.toLowerCase()))
        .map((type) => ({
          kind: 'renderer',
          value: type,
          title: `::${type}`,
          detail: DIRECTIVE_METADATA[type]?.summary || 'Registered renderer'
        }));
    }

    if (context.stage === 'identifier') {
      const suggestions = this._getIdentifiers(context.renderer, docContext)
        .filter((value) => value.toLowerCase().includes(context.query.toLowerCase()));

      return suggestions.map((value) => ({
        kind: 'identifier',
        renderer: context.renderer,
        value,
        title: value,
        detail: `Identifier for ::${context.renderer}`
      }));
    }

    if (context.stage === 'params') {
      const params = this._getParams(context.renderer, docContext);
      if (params.length === 0) {
        return [{
          kind: 'empty',
          title: `::${context.renderer} has no common parameters`,
          detail: 'This renderer is usually configured by its identifier or block body.'
        }];
      }

      if (context.activeParam) {
        const param = params.find((item) => item.name === context.activeParam);
        if (param && param.values.length > 0) {
          return param.values.map((value) => ({
            kind: 'param-value',
            renderer: context.renderer,
            param,
            value,
            title: `${param.name}=${formatParamValue(value)}`,
            detail: param.description
          }));
        }
      }

      const query = context.query.toLowerCase();
      return params
        .filter((param) => {
          if (!query) return true;
          if (param.name.toLowerCase().includes(query)) return true;
          return param.values.some((value) => String(value).toLowerCase().includes(query));
        })
        .map((param) => ({
          kind: 'param',
          renderer: context.renderer,
          param,
          title: param.name,
          detail: `${param.values.length ? param.values.map((value) => formatParamValue(value)).join(' | ') : 'free-form'}${param.description ? ` · ${param.description}` : ''}`
        }));
    }

    return [];
  }

  _renderPopup(context, items) {
    this.popup.innerHTML = '';
    this.popup.hidden = false;

    const title = document.createElement('div');
    title.className = 'directive-assist-title';
    title.textContent = this._titleForContext(context);
    this.popup.appendChild(title);

    const list = document.createElement('div');
    list.className = 'directive-assist-list';
    this.popup.appendChild(list);

    items.forEach((item, index) => {
      if (item.kind === 'empty') {
        const empty = document.createElement('div');
        empty.className = 'directive-assist-empty';
        empty.textContent = item.title;
        list.appendChild(empty);
        return;
      }

      const button = document.createElement('button');
      button.type = 'button';
      button.className = `directive-assist-item${index === this.selectedIndex ? ' active' : ''}`;
      button.addEventListener('mousedown', (event) => {
        event.preventDefault();
      });
      button.addEventListener('click', () => {
        this.selectedIndex = index;
        this._applySelection(item);
      });

      const main = document.createElement('span');
      main.className = 'directive-assist-main';
      main.textContent = item.title;
      button.appendChild(main);

      if (item.detail) {
        const meta = document.createElement('span');
        meta.className = 'directive-assist-meta';
        meta.textContent = item.detail;
        button.appendChild(meta);
      }

      list.appendChild(button);
    });
  }

  _applySelection(item) {
    if (!this.activeBinding || !this.activeContext) return;

    const context = this.activeContext;
    const binding = this.activeBinding;
    const state = readSurfaceState(binding);
    if (!state) {
      this.hide();
      return;
    }

    let replacement = '';
    let nextCaret = 0;

    if (item.kind === 'renderer') {
      replacement = item.value;
      nextCaret = replacement.length;
    } else if (item.kind === 'identifier') {
      const needsCloseBracket = state.text.slice(context.replaceEnd, context.replaceEnd + 1) !== ']';
      replacement = `${item.value}${needsCloseBracket ? ']' : ''}`;
      nextCaret = item.value.length + (needsCloseBracket ? 1 : 0);
    } else if (item.kind === 'param') {
      replacement = `${item.param.name}=`;
      if (item.param.values.length === 1) {
        replacement += formatParamValue(item.param.values[0]);
      }
      replacement += ' ';
      nextCaret = replacement.length;
    } else if (item.kind === 'param-value') {
      replacement = `${item.param.name}=${formatParamValue(item.value)} `;
      nextCaret = replacement.length;
    } else {
      return;
    }

    const nextText = state.text.slice(0, context.replaceStart) + replacement + state.text.slice(context.replaceEnd);
    const caret = context.replaceStart + nextCaret;
    writeSurfaceState(binding, nextText, caret);

    binding.element.focus({ preventScroll: true });
    this._refresh(binding);
  }

  _positionPopup(binding, context) {
    const anchor = getCaretAnchorRect(binding);
    const popupRect = this.popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = anchor.left;
    let top = anchor.bottom + 8;

    if (left + popupRect.width > viewportWidth - 12) {
      left = viewportWidth - popupRect.width - 12;
    }
    if (left < 12) left = 12;

    if (top + popupRect.height > viewportHeight - 12) {
      top = Math.max(12, anchor.top - popupRect.height - 8);
    }

    this.popup.style.left = `${Math.round(left)}px`;
    this.popup.style.top = `${Math.round(top)}px`;
  }

  _buildDocumentContext() {
    const text = this.store.getContents();
    return {
      text,
      index: this.parser.parse(text),
      currentDocumentId: this.store.getDocumentId(),
      documentIds: this.store.listDocuments().map((doc) => doc.id),
      currentProfile: this.profileStore?.getCurrentProfile?.() || null
    };
  }

  _getRendererTypes() {
    const fromRegistry = Array.from((this.registry?.manifests || new Map()).keys());
    const fromClasses = Array.from((this.registry?.classes || new Map()).keys());
    return DIRECTIVE_ORDER.filter((type) => fromRegistry.includes(type) || fromClasses.includes(type));
  }

  _getIdentifiers(renderer, ctx) {
    const config = DIRECTIVE_METADATA[renderer];
    if (!config) return [];

    if (typeof config.identifiers === 'function') {
      return unique(config.identifiers(ctx));
    }

    return unique(config.identifierExamples || []);
  }

  _getParams(renderer, ctx) {
    const config = DIRECTIVE_METADATA[renderer];
    if (!config || typeof config.params !== 'function') return [];
    return config.params(ctx);
  }

  _titleForContext(context) {
    if (context.stage === 'renderer') return 'Insert renderer';
    if (context.stage === 'identifier') return `Choose ::${context.renderer} identifier`;
    if (context.stage === 'params') return `Parameters for ::${context.renderer}`;
    return 'Directive assistant';
  }

  _onDocumentPointerDown(event) {
    const clickedPopup = this.popup.contains(event.target);
    const clickedActive = this.activeBinding?.element === event.target || this.activeBinding?.element?.contains(event.target);
    if (!clickedPopup && !clickedActive) {
      this.hide();
    }
  }

  _onViewportChange() {
    if (this.activeBinding && this.activeContext && !this.popup.hidden) {
      this._positionPopup(this.activeBinding, this.activeContext);
    }
  }
}

function defineParam(name, values = [], description = '') {
  return {
    name,
    values: unique(values.filter(Boolean)),
    description
  };
}

function inferMode(element) {
  if (!element) return 'textarea';
  if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') return 'textarea';
  if (element.isContentEditable) return 'contenteditable';
  return 'textarea';
}

function readSurfaceState(binding) {
  const { element, mode } = binding;
  if (!element) return null;

  if (mode === 'contenteditable') {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;
    const range = selection.getRangeAt(0);
    if (!element.contains(range.startContainer) || !element.contains(range.endContainer)) return null;

    const startRange = range.cloneRange();
    startRange.selectNodeContents(element);
    startRange.setEnd(range.startContainer, range.startOffset);

    const endRange = range.cloneRange();
    endRange.selectNodeContents(element);
    endRange.setEnd(range.endContainer, range.endOffset);

    return {
      text: normalizeEditableText(element.innerText),
      selectionStart: startRange.toString().length,
      selectionEnd: endRange.toString().length
    };
  }

  return {
    text: element.value,
    selectionStart: element.selectionStart ?? 0,
    selectionEnd: element.selectionEnd ?? 0
  };
}

function writeSurfaceState(binding, text, caretOffset) {
  const { element, mode } = binding;
  if (mode === 'contenteditable') {
    element.textContent = text;
    setContentEditableCaret(element, caretOffset);
    element.__directiveAssistantWrite = true;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }

  element.value = text;
  element.setSelectionRange(caretOffset, caretOffset);
  element.__directiveAssistantWrite = true;
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

function getCaretAnchorRect(binding) {
  if (binding.mode === 'contenteditable') {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0).cloneRange();
      range.collapse(true);
      const rect = range.getClientRects()[0] || range.getBoundingClientRect();
      if (rect && (rect.width || rect.height)) {
        return {
          left: rect.left,
          top: rect.top,
          bottom: rect.bottom
        };
      }
    }

    const rect = binding.element.getBoundingClientRect();
    return { left: rect.left + 16, top: rect.top + 16, bottom: rect.top + 36 };
  }

  return getTextareaCaretRect(binding.element);
}

function getTextareaCaretRect(textarea) {
  const style = window.getComputedStyle(textarea);
  const div = document.createElement('div');
  const span = document.createElement('span');
  const properties = [
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'letterSpacing',
    'wordSpacing'
  ];

  div.style.position = 'fixed';
  div.style.visibility = 'hidden';
  div.style.pointerEvents = 'none';
  div.style.whiteSpace = 'pre-wrap';
  div.style.wordWrap = 'break-word';
  div.style.top = '0';
  div.style.left = '0';

  properties.forEach((prop) => {
    div.style[prop] = style[prop];
  });

  div.textContent = textarea.value.slice(0, textarea.selectionStart);
  span.textContent = textarea.value.slice(textarea.selectionStart) || ' ';
  div.appendChild(span);
  document.body.appendChild(div);

  const divRect = div.getBoundingClientRect();
  const spanRect = span.getBoundingClientRect();
  const inputRect = textarea.getBoundingClientRect();
  const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.4 || 20;

  const rect = {
    left: inputRect.left + (spanRect.left - divRect.left) - textarea.scrollLeft,
    top: inputRect.top + (spanRect.top - divRect.top) - textarea.scrollTop,
    bottom: inputRect.top + (spanRect.top - divRect.top) - textarea.scrollTop + lineHeight
  };

  document.body.removeChild(div);
  return rect;
}

function setContentEditableCaret(element, offset) {
  const range = document.createRange();
  const selection = window.getSelection();
  let remaining = offset;
  let placed = false;

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const length = node.textContent.length;
    if (remaining <= length) {
      range.setStart(node, remaining);
      range.collapse(true);
      placed = true;
      break;
    }
    remaining -= length;
  }

  if (!placed) {
    range.selectNodeContents(element);
    range.collapse(false);
  }

  selection.removeAllRanges();
  selection.addRange(range);
}

function normalizeEditableText(text) {
  return String(text || '').replace(/\r\n?/g, '\n');
}

function getIdsByType(index, type) {
  return unique(index.filter((item) => item.type === type).map((item) => item.id).filter(Boolean));
}

function transclusionSources(ctx) {
  return unique(
    ctx.index
      .filter((item) => item.type !== 'spawn')
      .map((item) => `${item.type}:${item.id}`)
      .filter((value) => !value.endsWith(':'))
  );
}

function documentIds(ctx) {
  return withExamples(ctx.documentIds, [ctx.currentDocumentId]);
}

function profileChannelIds(ctx) {
  return unique((ctx.currentProfile?.channels || []).map((channel) => channel?.id).filter(Boolean));
}

function contactEmails(ctx) {
  return withExamples(
    ctx.index
      .filter((item) => item.type === 'contact')
      .flatMap((item) => (item.body || []).map((line) => line.match(/^email\s*=\s*(.+)$/)?.[1]?.trim()))
      .filter(Boolean),
    ['sara@example.com', 'finance@folio.local']
  );
}

function nextDailyId(ctx) {
  const match = String(ctx.currentDocumentId || '').match(/(\d{4}-\d{2}-\d{2})/);
  if (!match) return `daily:${tomorrowIso()}`;
  const date = new Date(`${match[1]}T00:00:00`);
  date.setDate(date.getDate() + 1);
  return `daily:${date.toISOString().slice(0, 10)}`;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function tomorrowIso() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

function withExamples(values = [], examples = []) {
  return unique([...(values || []), ...(examples || [])].filter(Boolean));
}

function unique(values = []) {
  return Array.from(new Set(values.filter(Boolean)));
}

function lastToken(value) {
  const parts = String(value || '').split(/\s+/).filter(Boolean);
  return parts[parts.length - 1] || '';
}

function formatParamValue(value) {
  const text = String(value ?? '');
  if (!text) return '""';
  if (text.startsWith('"') && text.endsWith('"')) return text;
  return /\s/.test(text) ? `"${text}"` : text;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
