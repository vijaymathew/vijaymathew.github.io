/**
 * CodeMirror 6 wrapper for the document editor.
 * In a real prototype, this would include custom syntax highlighting
 * for ::directives.
 */
export class DocumentEditor {
  /**
   * @param {HTMLElement} container - The element to mount the editor in.
   * @param {SyncBus} syncBus
   */
  constructor(container, syncBus) {
    this.container = container;
    this.syncBus = syncBus;
    this.initialised = false;
  }

  /**
   * Initialise the editor with a seed document.
   * @param {string} initialText
   */
  async init(initialText) {
    console.log('[DocumentEditor] Initialising...');
    
    // For the bootstrap (no build step), we'll use a simple textarea fallback.
    // In the real prototype, this would use CodeMirror 6's View and State.
    this.textarea = document.createElement('textarea');
    this.textarea.style.width = '100%';
    this.textarea.style.height = '100%';
    this.textarea.style.border = 'none';
    this.textarea.style.padding = '20px';
    this.textarea.style.fontFamily = 'var(--mono)';
    this.textarea.style.fontSize = '13px';
    this.textarea.style.lineHeight = '1.6';
    this.textarea.style.outline = 'none';
    this.textarea.style.resize = 'none';
    this.textarea.spellcheck = false;
    this.textarea.value = initialText;

    this.textarea.oninput = (e) => {
      this.syncBus.emit({
        timestamp: new Date().toISOString(),
        source: 'editor',
        type: 'replace',
        payload: {
          targetDocId: 'current',
          text: e.target.value
        }
      });
    };

    this.container.appendChild(this.textarea);
    this.initialised = true;
  }

  /**
   * Update the editor content from an external source.
   * @param {string} text
   */
  update(text) {
    if (this.textarea && this.textarea.value !== text) {
      this.textarea.value = text;
    }
  }
}
