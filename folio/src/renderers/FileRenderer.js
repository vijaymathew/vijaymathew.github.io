import { RendererBase } from './RendererBase.js';

/**
 * Text-native file renderer.
 *
 * A ::file directive is a reference to a file on the local filesystem:
 *
 *   ::file[~/docs/q3-report.pdf]{preview=true}
 *
 * The file path in the directive is the canonical reference.  The
 * renderer displays a file card with type icon, filename, path, and
 * a preview indicator.  In a real implementation, it would render
 * actual file previews (PDF, image, audio).  This mock shows the
 * reference card with appropriate iconography.
 *
 * ::file is an inline (single-line) directive — no body or ::end.
 */

const fileCache = new Map();

const FILE_ICONS = {
  pdf: '📄', doc: '📝', docx: '📝', txt: '📝', md: '📝',
  xls: '📊', xlsx: '📊', csv: '📊',
  png: '🖼', jpg: '🖼', jpeg: '🖼', gif: '🖼', svg: '🖼',
  mp3: '🎵', wav: '🎵', mp4: '🎬', mov: '🎬',
  zip: '📦', tar: '📦', gz: '📦',
  py: '🐍', js: '⚙️', html: '🌐', css: '🎨',
  default: '📎'
};

export class FileRenderer extends RendererBase {
  get manifest() {
    return { type: 'file', capabilities: ['query'], trust: 'owned' };
  }

  async render(ctx) {
    const { id, params } = ctx;
    const path = id;
    const filename = path.split('/').pop();
    const ext = filename.includes('.') ? filename.split('.').pop().toLowerCase() : '';
    const icon = FILE_ICONS[ext] || FILE_ICONS.default;
    const preview = params.preview === 'true' || params.preview === 'first-sheet' || params.preview === 'thumbnail';

    fileCache.set(id, { path, filename, ext, preview });

    const container = this.createWidgetContainer(`::file[${id}]`);
    const pills = container.querySelector('.directive-pills');
    const bodyEl = container.querySelector('.directive-body');

    if (ext) this._pill(pills, ext.toUpperCase());
    if (preview) this._pill(pills, 'preview');

    // File card
    const card = document.createElement('div');
    card.className = 'file-card';

    const iconEl = document.createElement('span');
    iconEl.className = 'file-icon';
    iconEl.textContent = icon;

    const info = document.createElement('div');
    info.className = 'file-info';

    const name = document.createElement('div');
    name.className = 'file-name';
    name.textContent = filename;

    const pathEl = document.createElement('div');
    pathEl.className = 'file-path';
    pathEl.textContent = path;

    info.append(name, pathEl);

    // Preview area (mock)
    if (preview) {
      const previewArea = document.createElement('div');
      previewArea.className = 'file-preview';
      if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(ext)) {
        previewArea.textContent = `[Image preview: ${filename}]`;
      } else if (ext === 'pdf') {
        previewArea.textContent = `[PDF preview: ${filename}]`;
      } else {
        previewArea.textContent = `[Preview: ${filename}]`;
      }
      info.appendChild(previewArea);
    }

    card.append(iconEl, info);
    bodyEl.appendChild(card);

    return container;
  }

  async query(params) {
    if (params && params.id) return fileCache.get(params.id) || null;
    const all = {};
    for (const [id, data] of fileCache) all[id] = data;
    return all;
  }

  _pill(container, text) {
    const el = document.createElement('span');
    el.className = 'directive-pill';
    el.textContent = text;
    container.appendChild(el);
  }
}
