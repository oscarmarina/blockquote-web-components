import type {ReactiveController, ReactiveControllerHost} from 'lit';

export type ObserverLike<T> = Partial<{
  next: (value: T) => void;
  error: (error: unknown) => void;
  complete: () => void;
}>;

/**
 * Minimal structural contract of a Web Platform / RxJS 9 Observable:
 * `subscribe(observer, {signal})`, cancelled through an `AbortSignal`.
 */
export interface ObservableLike<T> {
  subscribe(
    observer?: ObserverLike<T> | ((value: T) => void) | null,
    options?: {signal?: AbortSignal}
  ): void;
}

export interface BlockquoteControllerRxjsOptions<T, I extends T | undefined = undefined> {
  /** The Observable to subscribe to while the host is connected. */
  stream$: ObservableLike<T>;
  /** Value exposed by `value` until the stream emits. */
  initialValue?: I;
  /** Called with every new (distinct) value emitted by the stream. */
  callback?: (value: T) => void;
  /**
   * Called when the stream errors.
   * If omitted, the error is reported through `globalThis.reportError`.
   */
  onError?: (error: unknown) => void;
  /** Called when the stream completes. */
  onComplete?: () => void;
}

/**
 * # BlockquoteControllerRxjs
 *
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ### Connect Observables with Lit
 *
 * `BlockquoteControllerRxjs` is a Lit Reactive Controller that subscribes to an
 * [RxJS 9](https://github.com/ReactiveX/rxjs) / Web Platform `Observable` while the host is connected,
 * stores the latest emitted value and requests a host update when it changes.
 *
 * - One controller per stream, the latest value is available (typed) in `value`
 * - It subscribes on `hostConnected` and unsubscribes (`AbortSignal`) on `hostDisconnected`,
 *   so it re-subscribes if the element is moved in the DOM
 * - The stream can be replaced at any time by assigning `stream$`; the previous one is unsubscribed
 * - Repeated values (`Object.is`) do not trigger an update
 * - Optional `callback`, `onError` and `onComplete` handlers
 *
 * Original idea by [Adrian Fâciu](https://github.com/adrianfaciu/rx-lit) -
 * [observables-litelement](https://adrianfaciu.dev/posts/observables-litelement/)
 *
 * <hr>
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-rxjs)
 *
 * ### Usage
 *
 * **`new BlockquoteControllerRxjs(this, {stream$, initialValue?, callback?, onError?, onComplete?})`**
 *
 * ```javascript
 * import {html, LitElement} from 'lit';
 * import {fromEventPattern} from 'rxjs/from-event-pattern';
 * import {map} from 'rxjs/map';
 * import {BlockquoteControllerRxjs} from '@blockquote-web-components/blockquote-controller-rxjs';
 *
 * const mousemove$ = fromEventPattern(
 *   (handler) => window.addEventListener('mousemove', handler),
 *   (handler) => window.removeEventListener('mousemove', handler)
 * );
 *
 * class BlockquoteControllerRxjsDemo extends LitElement {
 *   pos = new BlockquoteControllerRxjs(this, {
 *     stream$: mousemove$[map](({clientX, clientY}) => ({x: clientX, y: clientY})),
 *     initialValue: {x: 0, y: 0},
 *   });
 *
 *   render() {
 *     const {x, y} = this.pos.value;
 *     return html`
 *       <p>The mouse is at:</p>
 *       <pre>x: ${x} y: ${y}</pre>
 *     `;
 *   }
 * }
 * ```
 *
 * Use `callback` to copy the value into a reactive property when you need it
 * in `willUpdate` / `updated`:
 *
 * ```javascript
 * new BlockquoteControllerRxjs(this, {
 *   stream$,
 *   callback: (value) => (this._pos = value),
 * });
 * ```
 *
 * <hr>
 */
export class BlockquoteControllerRxjs<
  T,
  I extends T | undefined = undefined,
  THost extends ReactiveControllerHost = ReactiveControllerHost,
> implements ReactiveController {
  readonly host: THost;

  /** Latest value emitted by the stream (or `initialValue`). */
  value: T | I;

  /** Last error emitted by the stream, `undefined` otherwise. */
  error: unknown;

  /** `true` once the current stream has completed. */
  completed = false;

  /** Called with every new (distinct) value emitted by the stream. */
  callback?: (value: T) => void;

  /** Called when the stream errors (falls back to `globalThis.reportError`). */
  onError?: (error: unknown) => void;

  /** Called when the stream completes. */
  onComplete?: () => void;

  #stream$: ObservableLike<T>;
  #abortController?: AbortController;

  constructor(
    host: THost,
    {stream$, initialValue, callback, onError, onComplete}: BlockquoteControllerRxjsOptions<T, I>
  ) {
    this.#stream$ = stream$;
    this.value = initialValue as I;
    this.callback = callback;
    this.onError = onError;
    this.onComplete = onComplete;
    (this.host = host).addController(this);
  }

  /** The current Observable. Assigning a different one re-subscribes. */
  get stream$(): ObservableLike<T> {
    return this.#stream$;
  }

  set stream$(stream$: ObservableLike<T>) {
    if (stream$ === this.#stream$) {
      return;
    }

    this.#stream$ = stream$;

    if (this.subscribed) {
      this.unsubscribe();
      this.subscribe();
    }
  }

  /** `true` while there is an active subscription. */
  get subscribed(): boolean {
    return this.#abortController !== undefined;
  }

  /** Subscribes to `stream$`. No-op if already subscribed. */
  subscribe(): void {
    if (this.#abortController) {
      return;
    }

    const abortController = new AbortController();
    this.#abortController = abortController;
    this.error = undefined;
    this.completed = false;

    this.#stream$.subscribe(
      {
        next: (value: T) => {
          if (Object.is(value, this.value)) {
            return;
          }

          this.value = value;
          this.callback?.(value);
          this.host.requestUpdate();
        },
        error: (error: unknown) => {
          this.#settle(abortController);
          this.error = error;

          if (this.onError) {
            this.onError(error);
          } else {
            globalThis.reportError?.(error);
          }

          this.host.requestUpdate();
        },
        complete: () => {
          this.#settle(abortController);
          this.completed = true;
          this.onComplete?.();
          this.host.requestUpdate();
        },
      },
      {signal: abortController.signal}
    );
  }

  /** Aborts the current subscription, if any. */
  unsubscribe(): void {
    const abortController = this.#abortController;
    this.#abortController = undefined;
    abortController?.abort();
  }

  hostConnected(): void {
    this.subscribe();
  }

  hostDisconnected(): void {
    this.unsubscribe();
  }

  #settle(abortController: AbortController): void {
    if (this.#abortController === abortController) {
      this.#abortController = undefined;
    }
  }
}
