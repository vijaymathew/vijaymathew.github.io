/**
 * Minimal client abstraction for simulation generation providers.
 *
 * Concrete clients should implement:
 * - getClientInfo()
 * - isAvailable()
 * - generate(prompt)
 */
export class SimulationLLMClient {
  getClientInfo() {
    return {
      kind: 'unknown',
      label: 'Unknown simulation client'
    };
  }

  async isAvailable() {
    return true;
  }

  async generate(_prompt) {
    throw new Error('SimulationLLMClient.generate(prompt) must be implemented by subclasses');
  }
}
