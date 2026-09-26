import {Subject} from 'rxjs';
import {describe, it, expect, afterEach, vi} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {html, LitElement} from 'lit';
import {BlockquoteControllerRxjs} from '../src/index.js';
import type {ObservableLike} from '../src/index.js';

class RxjsDemo extends LitElement {
  static override properties = {
    reactiveValue: {type: Number, attribute: false},
  };

  declare reactiveValue: number;

  source$ = new Subject<number>();

  rx = new BlockquoteControllerRxjs(this, {
    stream$: this.source$,
    initialValue: 0,
    callback: (value) => {
      this.reactiveValue = value;
    },
  });

  constructor() {
    super();
    this.reactiveValue = 0;
  }

  override render() {
    return html`
      <b>${this.rx.value}</b>
      <i>${this.reactiveValue}</i>
    `;
  }
}

if (!customElements.get('blockquote-controller-rxjs-demo')) {
  customElements.define('blockquote-controller-rxjs-demo', RxjsDemo);
}

const createHost = () =>
  fixture<RxjsDemo>(html`
    <blockquote-controller-rxjs-demo></blockquote-controller-rxjs-demo>
  `);

describe('BlockquoteControllerRxjs', () => {
  afterEach(() => {
    fixtureCleanup();
  });

  it('exposes initialValue before any emission', async () => {
    const el = await createHost();
    expect(el.rx.value).toBe(0);
    expect(el.shadowRoot?.querySelector('b')?.textContent).toBe('0');
  });

  it('stores the latest value and renders it', async () => {
    const el = await createHost();

    el.source$.next(1);

    expect(el.rx.value).toBe(1);
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('b')?.textContent).toBe('1');
  });

  it('calls the callback so a reactive property can be updated', async () => {
    const el = await createHost();

    el.source$.next(2);

    expect(el.reactiveValue).toBe(2);
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('i')?.textContent).toBe('2');
  });

  it('does not request an update for repeated values', async () => {
    const el = await createHost();
    const callback = vi.fn();
    el.rx.callback = callback;
    const spy = vi.spyOn(el, 'requestUpdate');

    el.source$.next(3);
    el.source$.next(3);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('stops receiving values when disconnected', async () => {
    const el = await createHost();

    el.source$.next(1);
    el.remove();
    el.source$.next(2);

    expect(el.rx.value).toBe(1);
    expect(el.rx.subscribed).toBe(false);
  });

  it('re-subscribes when the host is connected again', async () => {
    const el = await createHost();
    const parent = el.parentElement!;

    el.remove();
    el.source$.next(1);
    expect(el.rx.value).toBe(0);

    parent.append(el);
    el.source$.next(2);

    expect(el.rx.subscribed).toBe(true);
    expect(el.rx.value).toBe(2);
  });

  it('replaces the stream and unsubscribes from the previous one', async () => {
    const el = await createHost();
    const next$ = new Subject<number>();

    el.source$.next(1);
    el.rx.stream$ = next$;
    el.source$.next(2);

    expect(el.rx.value).toBe(1);

    next$.next(3);

    expect(el.rx.value).toBe(3);
  });

  it('ignores assigning the same stream', async () => {
    const el = await createHost();
    let subscriptions = 0;
    const stream$ = new Observable<number>((subscriber) => {
      subscriptions++;
      el.source$.subscribe(subscriber, {signal: subscriber.signal});
    });

    el.rx.stream$ = stream$;
    el.rx.stream$ = stream$;

    expect(subscriptions).toBe(1);
  });

  it('does not subscribe while the host is disconnected when replacing the stream', async () => {
    const el = await createHost();
    const next$ = new Subject<number>();

    el.remove();
    el.rx.stream$ = next$;
    next$.next(5);

    expect(el.rx.value).toBe(0);
  });

  it('handles errors with onError and exposes error', async () => {
    const el = await createHost();
    const onError = vi.fn();
    const failure = new Error('boom');
    el.rx.onError = onError;

    el.source$.error(failure);

    expect(onError).toHaveBeenCalledWith(failure);
    expect(el.rx.error).toBe(failure);
    expect(el.rx.subscribed).toBe(false);
  });

  it('reports the error globally when there is no onError', async () => {
    const el = await createHost();
    const failure = new Error('unhandled');
    const reportError = vi.spyOn(globalThis, 'reportError').mockImplementation(() => undefined);

    el.source$.error(failure);

    expect(reportError).toHaveBeenCalledWith(failure);
    expect(el.rx.error).toBe(failure);
    reportError.mockRestore();
  });

  it('handles completion with onComplete', async () => {
    const el = await createHost();
    const onComplete = vi.fn();
    el.rx.onComplete = onComplete;

    el.source$.next(4);
    el.source$.complete();

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(el.rx.completed).toBe(true);
    expect(el.rx.value).toBe(4);
    expect(el.rx.subscribed).toBe(false);
  });

  it('works with synchronous emissions on subscribe', async () => {
    const el = await createHost();
    const sync$: ObservableLike<number> = new Observable<number>((subscriber) => {
      subscriber.next(7);
    });

    el.rx.stream$ = sync$;

    expect(el.rx.value).toBe(7);
  });

  it('value is undefined when no initialValue is given', () => {
    const host = {
      addController: vi.fn(),
      removeController: vi.fn(),
      requestUpdate: vi.fn(),
      updateComplete: Promise.resolve(true),
    };
    const rx = new BlockquoteControllerRxjs(host, {stream$: new Subject<string>()});

    expect(rx.value).toBeUndefined();
    expect(host.addController).toHaveBeenCalledWith(rx);
  });
});
