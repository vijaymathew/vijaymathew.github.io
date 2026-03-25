The plan has four layers: the **renderer abstraction** (the interface boundary between mock and real), the **core runtime** (parser, registry, sync bus, document store), **Pyodide integration**, and the **eleven mock renderers**. Let me diagram the architecture first, then specify each layer precisely.**Click any module in the diagram above** to read its full specification. Here is the complete plan in prose:

---

## The prototype plan

### What it is

A single-file (or small bundle) web application — no backend, no server, no build step beyond `npm run build` or a single `<script type="module">`. It runs entirely in the browser. Every app is mocked. Pyodide provides real Python evaluation in a Web Worker. The architecture is designed so that swapping any mock renderer for a real one requires changing exactly one line in the registry — the rest of the system is unchanged.

### The renderer abstraction boundary

This is the load-bearing design decision. Every renderer — mock or real — implements `RendererBase`, a five-method interface:

```typescript
interface RendererBase {
  // Static: read before instantiation. No network calls.
  readonly manifest: RendererManifest;

  // Called when directive enters viewport threshold.
  // ctx contains {type, id, params, body, docStore, syncBus}
  render(ctx: RenderContext): Promise<HTMLElement>;

  // Read-only data access for the NamespaceBridge (::py queries).
  // Must never have side effects.
  query(params: QueryParams): Promise<AppData>;

  // Called when a SyncEvent affects this renderer's directive.
  onSyncEvent(event: SyncEvent): void;

  // Called when directive leaves derender threshold.
  // Must release all resources.
  destroy(): void;
}
```

`MockCalRenderer` and `RealGoogleCalRenderer` both implement this. The `CapabilityRegistry` maps `"cal"` to whichever is registered. Nothing else in the system references a specific renderer class.

### The mutation contract

Every renderer action goes through `SyncBus.emit(event)`. No renderer ever mutates a string directly. A `SyncEvent` has exactly these fields, matching the event record schema from §9.2.1:

```typescript
interface SyncEvent {
  timestamp: string;        // ISO 8601 UTC
  source: 'user' | 'renderer' | 'sync';
  type: 'append' | 'replace' | 'delete';
  payload: {
    targetDocId: string;
    lineStart?: number;
    lineEnd?: number;
    text: string;
  };
}
```

The `SyncBus` applies the mutation, stores a snapshot in `DocumentStore`, and notifies dependents. This is the complete mutation model — everything else is a consequence of it.

### Pyodide integration

Pyodide loads once in a Web Worker on first `::py` block encountered. The `NamespaceBridge` calls `registry.query()` for each registered renderer, serialises the data, and injects it into the Pyodide namespace before each evaluation. The injected objects are plain Python objects with the API from Appendix B (`cal.events()`, `tasks.query()`, etc.) implemented as thin wrappers over the serialised JS data. The `table()` and `chart()` helpers push to an output queue that the bridge collects after evaluation.

### What Ch9 and Ch10 add to the prototype

Ch9's owned/mirrored distinction maps cleanly to the renderer interface: `MockContact` and `TableRenderer` are owned-state renderers whose `query()` reads from `DocumentStore` directly; `MockEmail` and `MockCal` are mirrored-state renderers whose `query()` reads from an in-memory store that simulates an external backend. The `SyncBus` handles both identically — the distinction is internal to the renderer.

Ch10 adds the `LifecycleManager` module: `::spawn` creates documents with transclusion carry-forwards, `::meta[status]` transitions control renderer activation in `ViewportScheduler`, compaction replaces resolved directives with frozen text via `SyncBus.emit({type:'replace'})`, and `rollup()` generates documents that are purely `::note` embeds. The `DocumentStore`'s tiered grep supports the three-tier search from §10.5. The soft budget advisory (§10.6) watches `DocumentStore.lineCount` and renders a non-intrusive banner when over threshold — a pure UI concern, no mutations.

### Technology choices

`CodeMirror 6` for the editor — its extension API allows the custom `::directive` syntax highlighting without forking. `Pyodide 0.26+` for Python — runs in a Web Worker, supports the full stdlib whitelist from Appendix B. `Chart.js` for `chart()` output from `::py` blocks. No framework — the renderer widgets are plain DOM, which keeps the `RendererBase` interface framework-agnostic and ensures that a Vue or React real renderer can implement the same interface. `localStorage` for document persistence in the prototype; the `DocumentStore` interface is abstracted so that an OPFS (Origin Private File System) or a remote sync adapter can replace it without touching any renderer code.

### File structure

```
src/
  core/
    DirectiveParser.js      // line scanner → DirectiveIndex
    CapabilityRegistry.js   // type → renderer, lazy load, manifests
    SyncBus.js              // event router, mutation applier
    DocumentStore.js        // text buffer, snapshots, grep, diff
    LifecycleManager.js     // spawn, archive, compact, rollup
    ViewportScheduler.js    // proximity threshold, activate/destroy
  python/
    PyodideWorker.js        // Web Worker wrapper
    NamespaceBridge.js      // registry.query() → Pyodide globals
  renderers/
    RendererBase.js         // interface definition + base class
    mock/
      MockCal.js, MockEmail.js, MockTask.js, MockNote.js
      PyRenderer.js, TableRenderer.js, MockFile.js
      MockContact.js, MockChat.js, MockWeb.js, MockSh.js
    real/                   // empty — ready for real implementations
  shell/
    DocumentEditor.js       // CodeMirror 6 wrapper
    RenderCanvas.js         // scrollable host, widget mounting
    DiffViewer.js           // snapshot diff UI
    SearchPanel.js          // tiered grep UI
  index.html                // entry point, seeds demo document
```

### Implementation order

1. `DirectiveParser` + `DocumentStore` + `SyncBus` — the core triad. Test with unit tests: parse a document, fire a SyncEvent, verify the text mutation and snapshot.
2. `RendererBase` + `CapabilityRegistry` — the boundary. Write a trivial `TextFallbackRenderer` that renders any directive as its raw text. The graceful degradation case works before any real renderer exists.
3. `RenderCanvas` + `DocumentEditor` — the shell. At this point the prototype renders any document, displaying directives as text when no renderer is registered.
4. `PyRenderer` + `PyodideWorker` + `NamespaceBridge` — Python works. `::py` blocks evaluate. `table()` and `chart()` produce output.
5. `TableRenderer` + `MockTask` + `MockNote` — owned-state renderers. These have no external dependencies and demonstrate the full mutation loop.
6. `MockCal` + `MockEmail` + `MockChat` — mirrored-state renderers. Each adds a layer of the sync protocol.
7. `MockContact` + `MockFile` + `MockWeb` + `MockSh` — remaining renderers.
8. `ViewportScheduler` + `LifecycleManager` — Ch8 and Ch10 features. `run=visible`, `::spawn`, compaction, roll-ups.
9. `DiffViewer` + `SearchPanel` — observability and the properties chapters made interactive.

Each step produces a working prototype that is better than the step before, and each step's output is verifiable against a specific chapter of the book. The prototype is the book running.
