# Folio — The Document is the Computer

> "Text is the substrate that dissolves the app."

Folio is a prototype of a **text-native document architecture**. It is inspired by the design philosophy that the primary interface for computing should be a plain-text document, where "apps" are merely interactive views (directives) interleaved within the prose.

## 核心理念 (Core Philosophy)

1.  **Text as Ground Truth**: Every state change, from a checked task to a complex calculation, must be reflected in the underlying plain-text "Substrate."
2.  **The Sync Bus**: A strict mutation contract ensuring that UI widgets never own hidden state; they only request mutations to the text buffer.
3.  **Universal Query Layer**: A Python-based (Pyodide) computation environment that can query any app directive in the document as if it were a local variable.
4.  **Capability-Based Registry**: A pluggable system where adding a new "app" (calendar, email, etc.) is as simple as registering a single class in the registry.

## Architecture Overview

```text
[ Document Editor ] <---- (Sync Bus) ----> [ Render Canvas ]
       |                                          |
       | (Substrate)                              | (Live Widgets)
       |                                          |
[ Document Store ] <--- (Registry) --- [ App Renderers ]
                                              |
                                      [ Namespace Bridge ]
                                              |
                                      [ Pyodide Worker ]
```

## Getting Started

### Prerequisites
*   A modern web browser with Web Worker support.
*   A simple local web server (e.g., `npx serve`, `python -m http.server`).

### Running the Prototype
1.  Clone the repository.
2.  Navigate to the `folio/` directory.
3.  Start a local server:
    ```bash
    npx serve .
    ```
4.  Open the provided URL in your browser.

## Project Structure

*   `index.html`: The visual shell and orchestration script.
*   `src/core/`: The "Core Triad" (DocumentStore, SyncBus, DirectiveParser).
*   `src/shell/`: UI components (RenderCanvas, DocumentEditor) and styles.
*   `src/renderers/`:
    *   `RendererBase.js`: The refined abstraction for all apps.
    *   `CalRenderer.js`, `EmailRenderer.js`, `TaskRenderer.js`, etc.: Concrete renderer implementations.
    *   `mock/`: Mock implementations for testing and bootstrapping.
*   `src/python/`: The Pyodide worker and NamespaceBridge for cross-app queries.

## Implementing a New App

To add a new app (e.g., `::todo`), create a class extending `RendererBase`:

```javascript
export class TodoRenderer extends RendererBase {
  get manifest() {
    return { type: 'todo', capabilities: ['query', 'sync'] };
  }

  async render(ctx) {
    const container = this.createWidgetContainer(`::todo[${ctx.id}]`);
    // Add your UI logic here...
    return container;
  }
}
```

Then register it in `index.html`:
```javascript
registry.register('todo', TodoRenderer);
```

## Roadmap

- [x] **Phase 1**: Core Triad & Bootstrap.
- [x] **Phase 2**: Refined Renderer Abstraction.
- [x] **Phase 3**: Pyodide & Namespace Bridge.
- [x] **Phase 4**: Mock `cal` and `email` renderers.
- [ ] **Phase 5**: Real-world API integrations (Google Calendar, GitHub).
- [ ] **Phase 6**: CodeMirror 6 with custom syntax highlighting for directives.

---

## License

Copyright (c) Vijay Mathew.

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, you can obtain one at [https://mozilla.org/MPL/2.0/](https://mozilla.org/MPL/2.0/).

---
*Inspired by the design manuscript: "The Document is the Computer"*
