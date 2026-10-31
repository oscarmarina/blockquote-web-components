/**
 * @typedef {object} TickControllerOptions
 * @property {number} interval Milliseconds between updates.
 * @property {() => boolean} while Ticks while it returns `true`; checked after each host update.
 */

/**
 * Requests a host update every `interval` ms while `while()` is `true`, for UI that depends on
 * the current time (a countdown). Stops when the condition turns `false` and on disconnect.
 * @implements {import('lit').ReactiveController}
 */
export class TickController {
  /** @type {ReturnType<typeof setInterval> | undefined} */
  #id;

  /**
   * @param {import('lit').ReactiveControllerHost} host
   * @param {TickControllerOptions} options
   */
  constructor(host, options) {
    this.options = options;
    (this.host = host).addController(this);
  }

  get running() {
    return this.#id !== undefined;
  }

  hostUpdated() {
    if (this.options.while()) {
      this.#id ??= setInterval(() => this.host.requestUpdate(), this.options.interval);
    } else {
      this.#stop();
    }
  }

  hostDisconnected() {
    this.#stop();
  }

  #stop() {
    clearInterval(this.#id);
    this.#id = undefined;
  }
}
