let componentCount = 0;

/**
 * @typedef {Object} InteractionStory
 * @property {number} id
 * @property {string} trigger
 * @property {string} summary
 * @property {number} step
 * @property {number} startedAt
 * @property {number} lastAt
 */

/** @type {WeakMap<HTMLElement, {logger: InteractionLogger, role: string, index: number}>} */
const registeredElements = new WeakMap();

const now = () => (globalThis.performance?.now ? globalThis.performance.now() : Date.now());

/**
 * Returns a stable, compact description instead of relying on a live DOM
 * object in DevTools (which may show attributes from a later point in time).
 *
 * @param {Element | null | undefined} element
 * @param {HTMLElement[]} [items]
 */
export const describeInteractionElement = (element, items = []) => {
  if (!element) {
    return 'ninguno';
  }

  const index = items.indexOf(/** @type {HTMLElement} */ (element));
  const id = element.id ? `#${element.id}` : '';
  const position = index >= 0 ? ` (posición ${index + 1})` : '';
  const text = element.textContent?.replace(/\s+/g, ' ').trim();
  const excerpt = text ? ` «${text.slice(0, 48)}${text.length > 48 ? '…' : ''}»` : '';

  return `<${element.localName}${id}>${position}${excerpt}`;
};

/**
 * Associates a tab or tabpanel with its owning interaction story. This lets
 * the child components append their asynchronous Lit DOM synchronization to
 * the same story that changed their `selected` property.
 *
 * @param {HTMLElement} element
 * @param {InteractionLogger} logger
 * @param {'tab' | 'tabpanel'} role
 * @param {number} index
 */
export const registerInteractionElement = (element, logger, role, index) => {
  registeredElements.set(element, {logger, role, index});
};

/**
 * Adds a child component's derived DOM update to its owner's active story.
 *
 * @param {HTMLElement} element
 * @param {string} fn
 * @param {string} message
 * @param {Record<string, unknown>} [details]
 */
export const logInteractionElementState = (element, fn, message, details = {}) => {
  const registration = registeredElements.get(element);
  if (!registration) {
    return;
  }

  const {logger, role, index} = registration;
  logger.step('DOM', `${element.constructor.name}.${fn}`, 'DOM/ARIA del elemento', message, {
    elemento: `${role} ${index + 1}`,
    ...details,
  });
};

/**
 * Chronological console narrator shared by the host and all its controllers.
 *
 * Every message is deliberately flat (instead of using console groups):
 * focus events happen synchronously inside `focus()`, while Lit selection and
 * child DOM updates happen in later microtasks. A flat story id + step number
 * preserves the real ordering even when several async boundaries interleave.
 */
export class InteractionLogger {
  #componentId;

  #currentStory;

  #eventStories = new WeakMap();

  #getState;

  #pendingSelection;

  #storyCount = 0;

  /**
   * @param {HTMLElement} host
   * @param {() => Record<string, unknown>} getState
   */
  constructor(host, getState) {
    this.#componentId = host.id || `instancia-${(componentCount += 1)}`;
    this.#getState = getState;
    this.begin(
      'arranque',
      'El componente construye controladores, descubre sus tabs y aplica la selección inicial.'
    );
    this.step(
      'CICLO',
      'InteractionLogger.constructor()',
      'consola',
      'Cómo leer la traza: Historia agrupa un gesto; Paso fija el orden real; la fase separa EVENTO, FOCO, SELECCIÓN, DOM y SCROLL; la flecha muestra quién llama a quién.',
      {
        reglaPrincipal:
          'focus() es síncrono; el commit de selected y la reflexión ARIA de Lit son posteriores',
        fotografiaEstado:
          'Cada objeto estado contiene valores primitivos/texto para que DevTools no muestre una versión futura del DOM.',
      }
    );
  }

  /**
   * Starts a story that does not originate in a DOM event.
   *
   * @param {string} trigger
   * @param {string} summary
   */
  begin(trigger, summary) {
    this.#currentStory = {
      id: (this.#storyCount += 1),
      trigger,
      summary,
      step: 0,
      startedAt: now(),
      lastAt: now(),
    };

    this.step('INICIO', 'InteractionLogger.begin()', 'nueva historia', summary, {
      disparador: trigger,
    });
    return this.#currentStory;
  }

  /**
   * Correlates all listeners involved in one gesture. `focus()` dispatches
   * different Event objects (`focusout` / `focusin`) synchronously, so those
   * events reuse the recent keyboard/pointer/click story.
   *
   * @param {Event} ev
   * @param {string} trigger
   * @param {string} fn
   * @param {string} message
   * @param {Record<string, unknown>} [details]
   */
  event(ev, trigger, fn, message, details = {}) {
    let story = this.#eventStories.get(ev);
    if (!story) {
      story = this.#canContinueWith(trigger)
        ? this.#currentStory
        : this.begin(trigger, `Interacción observada desde ${fn}.`);
      this.#eventStories.set(ev, story);
    }
    this.#currentStory = story;

    this.step('EVENTO', 'Browser/EventTarget', fn, message, {
      evento: ev.type,
      tecla: 'key' in ev ? /** @type {KeyboardEvent} */ (ev).key : undefined,
      cancelable: ev.cancelable,
      defaultPrevented: ev.defaultPrevented,
      ...details,
    });
    return story;
  }

  /**
   * Records a function-to-function transition and a state snapshot.
   *
   * @param {'INICIO' | 'EVENTO' | 'FOCO' | 'SELECCIÓN' | 'DOM' | 'SCROLL' | 'DECISIÓN' | 'CICLO'} phase
   * @param {string} from
   * @param {string} to
   * @param {string} message
   * @param {Record<string, unknown>} [details]
   */
  step(phase, from, to, message, details = {}) {
    if (!this.#currentStory) {
      this.begin('interno', `Trabajo interno iniciado desde ${from}.`);
    }

    const story = this.#currentStory;
    story.step += 1;
    story.lastAt = now();
    const step = String(story.step).padStart(2, '0');
    const prefix =
      `[blockquote-tabs#${this.#componentId}]` +
      `[Historia ${story.id}: ${story.trigger}]` +
      `[Paso ${step}]` +
      `[${phase}]`;

    console.log(`${prefix} ${from} → ${to}: ${message}`, {
      ...details,
      estado: this.#snapshot(),
    });
  }

  /**
   * Remembers which story requested the reactive `selected` update so the
   * later Lit `updated()` microtask can resume that exact story.
   *
   * @param {number} selected
   */
  expectSelection(selected) {
    this.#pendingSelection = {
      selected,
      story: this.#currentStory,
    };
  }

  /**
   * Selects the correct story when Lit observes a `selected` change. If no
   * interaction requested it, the change is programmatic.
   *
   * @param {number | undefined} previous
   * @param {number} selected
   */
  selectionUpdate(previous, selected) {
    if (this.#pendingSelection?.selected === selected) {
      this.#currentStory = this.#pendingSelection.story;
    } else {
      const trigger = previous === undefined ? 'selección inicial' : 'selected programático';
      this.begin(
        trigger,
        previous === undefined
          ? 'Lit aplica por primera vez la propiedad selected.'
          : 'Código externo cambió selected; este pipeline no moverá el foco.'
      );
    }
  }

  /**
   * Keeps a clamp/write-back update inside the same selection story.
   *
   * @param {number} corrected
   */
  expectSelectionCorrection(corrected) {
    this.#pendingSelection = {
      selected: corrected,
      story: this.#currentStory,
    };
  }

  selectionCommitted() {
    this.#pendingSelection = undefined;
  }

  /**
   * Captures the active story before scheduling asynchronous work.
   *
   * @returns {InteractionStory | undefined}
   */
  capture() {
    return this.#currentStory;
  }

  /**
   * Temporarily restores a captured story while an asynchronous callback
   * writes its steps, then puts back whichever newer story was active.
   *
   * @param {InteractionStory | undefined} story
   * @param {() => void} callback
   */
  withStory(story, callback) {
    const previous = this.#currentStory;
    this.#currentStory = story;
    try {
      callback();
    } finally {
      this.#currentStory = previous;
    }
  }

  #canContinueWith(trigger) {
    if (!this.#currentStory || now() - this.#currentStory.lastAt > 2000) {
      return false;
    }

    if (trigger === 'click') {
      return this.#currentStory.trigger === 'pointerdown';
    }

    if (trigger === 'focusin' || trigger === 'focusout') {
      return ['pointerdown', 'keydown', 'click', 'focusout', 'autofocus'].includes(
        this.#currentStory.trigger
      );
    }

    return false;
  }

  #snapshot() {
    try {
      return this.#getState();
    } catch (error) {
      return {
        snapshotError: error instanceof Error ? error.message : String(error),
      };
    }
  }
}
