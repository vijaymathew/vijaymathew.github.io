import { SimulationLLMClient } from './SimulationLLMClient.js';

const WEBLLM_CDN_URL = 'https://esm.run/@mlc-ai/web-llm';
const DEFAULT_MODEL_LABEL = 'SmolLM2-135M-Instruct, then TinyLlama-1.1B';

/**
 * Browser-native local inference client using WebLLM.
 *
 * This client is intentionally lazy. It does not download or initialize a
 * model until `generate()` is called for the first time.
 */
export class WebLLMSimulationLLMClient extends SimulationLLMClient {
  constructor(opts = {}) {
    super();
    this.model = opts.model || null;
    this.temperature = opts.temperature ?? 0.7;
    this.maxTokens = opts.maxTokens ?? 900;
    this.cdnUrl = opts.cdnUrl || WEBLLM_CDN_URL;
    this.initProgressCallback = opts.initProgressCallback || null;
    this.engineConfig = opts.engineConfig || {};
    this.webllm = null;
    this.engine = null;
    this.activeModel = null;
    this._setStatus({
      phase: 'idle',
      ready: false,
      available: null,
      message: 'WebLLM selected. Model loads on first generation.'
    });
  }

  getClientInfo() {
    return {
      kind: 'webllm',
      label: 'WebLLM',
      model: this.activeModel || this.model || null,
      local: true,
      requiresApiKey: false
    };
  }

  static browserSupportsWebGPU() {
    return typeof window !== 'undefined'
      && typeof navigator !== 'undefined'
      && !!navigator.gpu;
  }

  async isAvailable() {
    const available = WebLLMSimulationLLMClient.browserSupportsWebGPU();
    this._setStatus({
      phase: available ? (this.engine ? 'ready' : 'idle') : 'unavailable',
      ready: !!this.engine,
      available,
      message: available
        ? (this.engine
          ? `WebLLM ready with ${this.activeModel || this.model || 'selected model'}.`
          : `WebLLM available. ${this.model || DEFAULT_MODEL_LABEL} will initialize on first generation.`)
        : 'WebLLM requires a browser with WebGPU support.'
    });
    return available;
  }

  async generate(prompt) {
    if (!(await this.isAvailable())) {
      this._setStatus({
        phase: 'error',
        ready: false,
        available: false,
        message: 'WebLLM requires a browser with WebGPU support.'
      });
      throw new Error('WebLLM requires a browser with WebGPU support.');
    }

    await this._ensureEngine();
    this._setStatus({
      phase: 'generating',
      ready: true,
      available: true,
      message: `Generating with WebLLM (${this.activeModel}).`
    });
    const messages = this._buildMessages(prompt);
    try {
      const reply = await this.engine.chat.completions.create({
        messages,
        temperature: this.temperature,
        max_tokens: this.maxTokens,
        response_format: { type: 'json_object' }
      });

      const text = reply?.choices?.[0]?.message?.content || '{}';
      const parsed = JSON.parse(text);
      this._setStatus({
        phase: 'ready',
        ready: true,
        available: true,
        message: `WebLLM ready with ${this.activeModel}.`
      });
      return parsed;
    } catch (err) {
      this._setStatus({
        phase: 'error',
        ready: false,
        available: true,
        message: `WebLLM generation failed: ${err.message}`
      });
      throw err.message?.includes('JSON')
        ? err
        : new Error(`WebLLM generation failed: ${err.message}`);
    }
  }

  async _ensureEngine() {
    if (this.engine) {
      this._setStatus({
        phase: 'ready',
        ready: true,
        available: true,
        message: `WebLLM ready with ${this.activeModel}.`
      });
      return this.engine;
    }

    try {
      if (!this.webllm) {
        this._setStatus({
          phase: 'loading-runtime',
          ready: false,
          available: true,
          message: 'Loading WebLLM runtime.'
        });
        this.webllm = await import(/* @vite-ignore */ this.cdnUrl);
      }

      const candidates = this.model
        ? [this.model]
        : this._pickDefaultModels(this.webllm);
      const errors = [];

      for (let index = 0; index < candidates.length; index++) {
        const model = candidates[index];
        this.activeModel = model;
        this._setStatus({
          phase: 'initializing',
          ready: false,
          available: true,
          model,
          message: `Initializing WebLLM model ${model}${candidates.length > 1 ? ` (${index + 1}/${candidates.length})` : ''}.`
        });
        try {
          this.engine = await this.webllm.CreateMLCEngine(model, {
            ...this.engineConfig,
            initProgressCallback: (progress) => {
              const message = this._formatProgress(progress, model, index, candidates.length);
              this._setStatus({
                phase: 'initializing',
                ready: false,
                available: true,
                model,
                progress,
                message
              });
              if (typeof this.initProgressCallback === 'function') {
                this.initProgressCallback(progress);
              }
              if (typeof this.engineConfig.initProgressCallback === 'function') {
                this.engineConfig.initProgressCallback(progress);
              }
            }
          });
          this._setStatus({
            phase: 'ready',
            ready: true,
            available: true,
            model,
            message: `WebLLM ready with ${model}.`
          });
          return this.engine;
        } catch (err) {
          errors.push(`${model}: ${err.message}`);
          this.engine = null;
          if (index < candidates.length - 1) {
            this._setStatus({
              phase: 'initializing',
              ready: false,
              available: true,
              model,
              message: `WebLLM initialization failed for ${model}. Retrying with a different lightweight model.`
            });
            continue;
          }
        }
      }

      throw new Error(`WebLLM default candidates failed. ${errors.join(' | ')}`);
    } catch (err) {
      this._setStatus({
        phase: 'error',
        ready: false,
        available: true,
        model: this.activeModel || this.model || null,
        message: `WebLLM initialization failed: ${err.message}`
      });
      throw err;
    }
  }

  _pickDefaultModels(webllm) {
    const modelList = webllm?.prebuiltAppConfig?.model_list || [];
    const preferredSubstrings = [
      'SmolLM2-135M-Instruct',
      'TinyLlama-1.1B'
    ];
    const picked = [];
    const seen = new Set();

    for (const needle of preferredSubstrings) {
      const match = modelList.find((item) => String(item?.model_id || item?.model || '').includes(needle));
      if (match) {
        const modelId = match.model_id || match.model;
        if (!seen.has(modelId)) {
          seen.add(modelId);
          picked.push(modelId);
        }
      }
    }

    if (picked.length > 0) {
      return picked;
    }
    throw new Error('WebLLM did not expose SmolLM2-135M-Instruct or TinyLlama-1.1B as prebuilt models.');
  }

  _buildMessages(prompt) {
    const system = prompt?.system || 'Return strict JSON only.';
    const userPayload = {
      instruction: prompt?.user || '',
      context: prompt?.context || {},
      schema_hint: {
        keys: ['phase', 'facts', 'threads', 'open_loops', 'email', 'chat', 'calendar']
      }
    };

    return [
      { role: 'system', content: system },
      { role: 'user', content: JSON.stringify(userPayload) }
    ];
  }

  _formatProgress(progress, model, index = 0, total = 1) {
    const prefix = total > 1 ? `[${index + 1}/${total}] ` : '';
    if (!progress) {
      return `${prefix}Initializing WebLLM model ${model}.`;
    }
    if (typeof progress.text === 'string' && progress.text.trim()) {
      return `${prefix}${progress.text.trim()}`;
    }
    if (typeof progress.progress === 'number') {
      return `${prefix}Initializing WebLLM model ${model} (${Math.round(progress.progress * 100)}%).`;
    }
    return `${prefix}Initializing WebLLM model ${model}.`;
  }
}
