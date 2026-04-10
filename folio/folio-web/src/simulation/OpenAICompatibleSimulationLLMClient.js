import { SimulationLLMClient } from './SimulationLLMClient.js';

const DEFAULT_REMOTE_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_REMOTE_MODEL = 'gpt-4.1-mini';
const DEFAULT_REMOTE_MAX_TOKENS = 1800;

export class OpenAICompatibleSimulationLLMClient extends SimulationLLMClient {
  constructor(opts = {}) {
    super();
    this.endpoint = opts.endpoint || DEFAULT_REMOTE_ENDPOINT;
    this.apiKey = opts.apiKey || '';
    this.model = opts.model || DEFAULT_REMOTE_MODEL;
    this.temperature = opts.temperature ?? 0.7;
    this.maxTokens = opts.maxTokens ?? DEFAULT_REMOTE_MAX_TOKENS;
    this.fetchImpl = opts.fetchImpl || globalThis.fetch?.bind(globalThis) || null;
    this._setStatus({
      phase: 'idle',
      ready: false,
      available: null,
      message: 'Remote provider selected. Save an API key to enable generation.'
    });
  }

  getClientInfo() {
    return {
      kind: 'remote-openai',
      label: 'Remote OpenAI-compatible provider',
      endpoint: this.endpoint,
      model: this.model,
      local: false,
      requiresApiKey: true
    };
  }

  async isAvailable() {
    const hasFetch = typeof this.fetchImpl === 'function';
    const hasKey = !!this.apiKey;
    const available = hasFetch && hasKey;
    this._setStatus({
      phase: available ? 'ready' : 'unavailable',
      ready: available,
      available,
      message: !hasFetch
        ? 'Remote provider requires browser fetch support.'
        : (!hasKey
          ? 'Remote provider requires a saved API key.'
          : `Remote provider ready for ${this.model}.`)
    });
    return available;
  }

  async generate(prompt) {
    if (!(await this.isAvailable())) {
      throw new Error(this.getStatus().message || 'Remote provider is not available.');
    }

    this._setStatus({
      phase: 'generating',
      ready: true,
      available: true,
      message: `Generating with remote provider (${this.model}).`
    });

    const response = await this.fetchImpl(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify(this._buildRequest(prompt))
    });

    if (!response.ok) {
      const errorText = await safeReadText(response);
      const message = `Remote provider error ${response.status}: ${errorText || response.statusText}`.trim();
      this._setStatus({
        phase: 'error',
        ready: false,
        available: true,
        message
      });
      throw new Error(message);
    }

    const payload = await response.json();
    const finishReason = payload?.choices?.[0]?.finish_reason || null;
    const text = extractContentText(payload);
    if (finishReason === 'length') {
      const message = `Remote provider stopped at the token limit before completing JSON. Increase the remote max token budget.`;
      this._setStatus({
        phase: 'error',
        ready: false,
        available: true,
        message
      });
      throw new Error(message);
    }
    try {
      const parsed = JSON.parse(text || '{}');
      this._setStatus({
        phase: 'ready',
        ready: true,
        available: true,
        message: `Remote provider ready for ${this.model}.`
      });
      return parsed;
    } catch (err) {
      const message = `Remote provider returned non-JSON output: ${err.message}`;
      this._setStatus({
        phase: 'error',
        ready: false,
        available: true,
        message
      });
      throw new Error(message);
    }
  }

  _buildRequest(prompt) {
    return {
      model: this.model,
      temperature: this.temperature,
      max_tokens: this.maxTokens,
      response_format: { type: 'json_object' },
      messages: this._buildMessages(prompt)
    };
  }

  _buildMessages(prompt) {
    const system = prompt?.system || 'Return strict JSON only.';
    const schemaHint = prompt?.schemaHint || prompt?.schema_hint || {
      keys: ['phase', 'facts', 'threads', 'open_loops', 'email', 'chat', 'calendar']
    };
    const userPayload = {
      instruction: prompt?.user || '',
      context: prompt?.context || {},
      schema_hint: schemaHint
    };
    return [
      { role: 'system', content: system },
      { role: 'user', content: JSON.stringify(userPayload) }
    ];
  }
}

async function safeReadText(response) {
  try {
    return await response.text();
  } catch (_err) {
    return '';
  }
}

function extractContentText(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content
      .map((part) => (typeof part?.text === 'string' ? part.text : ''))
      .join('');
  }
  return '';
}
