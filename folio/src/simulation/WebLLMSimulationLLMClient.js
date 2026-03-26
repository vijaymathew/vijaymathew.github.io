import { SimulationLLMClient } from './SimulationLLMClient.js';

const WEBLLM_CDN_URL = 'https://esm.run/@mlc-ai/web-llm';

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

  async isAvailable() {
    return typeof window !== 'undefined'
      && typeof navigator !== 'undefined'
      && !!navigator.gpu;
  }

  async generate(prompt) {
    if (!(await this.isAvailable())) {
      throw new Error('WebLLM requires a browser with WebGPU support.');
    }

    await this._ensureEngine();
    const messages = this._buildMessages(prompt);
    const reply = await this.engine.chat.completions.create({
      messages,
      temperature: this.temperature,
      max_tokens: this.maxTokens,
      response_format: { type: 'json_object' }
    });

    const text = reply?.choices?.[0]?.message?.content || '{}';
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error(`WebLLM returned non-JSON output: ${err.message}`);
    }
  }

  async _ensureEngine() {
    if (this.engine) return this.engine;

    if (!this.webllm) {
      this.webllm = await import(/* @vite-ignore */ this.cdnUrl);
    }

    const model = this.model || this._pickDefaultModel(this.webllm);
    this.activeModel = model;
    this.engine = await this.webllm.CreateMLCEngine(model, {
      ...this.engineConfig,
      initProgressCallback: this.initProgressCallback || this.engineConfig.initProgressCallback
    });
    return this.engine;
  }

  _pickDefaultModel(webllm) {
    const modelList = webllm?.prebuiltAppConfig?.model_list || [];
    const preferredSubstrings = [
      'Llama-3.2-1B-Instruct',
      'Llama-3.2-3B-Instruct',
      'Phi-3.5-mini',
      'Phi-3-mini',
      'Qwen2.5-1.5B-Instruct',
      'Qwen2.5-0.5B-Instruct',
      'Gemma-2-2B'
    ];

    for (const needle of preferredSubstrings) {
      const match = modelList.find((item) => String(item?.model_id || item?.model || '').includes(needle));
      if (match) {
        return match.model_id || match.model;
      }
    }

    const first = modelList[0];
    const firstModel = first?.model_id || first?.model;
    if (!firstModel) {
      throw new Error('WebLLM did not expose any prebuilt models.');
    }
    return firstModel;
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
}
