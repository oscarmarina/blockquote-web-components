import {Subject} from 'rxjs';
import {describe, it, expect, beforeEach, afterEach} from 'vitest';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {html, LitElement} from 'lit';
import {BlockquoteControllerRxjs} from '../src/index.js';

const RxjsDemo = class BlockquoteControllerRxjsDemo extends LitElement {
  static get properties() {
    return {
      streamValues: {
        type: Number,
        attribute: false,
      },
      streamValuesUpdate: {
        type: Number,
        attribute: false,
      },
    };
  }

  constructor() {
    super();

    this.rx = new BlockquoteControllerRxjs(this);

    this.streamValues = 0;
    this.streamValuesUpdate = 0;
  }

  /**
   * @param {Observable} stream$
   * @returns {void}
   */
  setupObservable(stream$) {
    this.rx.subscribe('streamValues', stream$);
  }

  /**
   * @param {Observable} stream$
   * @returns {void}
   */
  setupObservableNeedUpdate(stream$) {
    this.rx.subscribe('streamValuesUpdate', stream$);
  }

  render() {
    return html`
      <b>${this.streamValues}</b>
      <i>${this.streamValuesUpdate}</i>
    `;
  }
};

if (!customElements.get('blockquote-controller-rxjs-demo')) {
  window.customElements.define('blockquote-controller-rxjs-demo', RxjsDemo);
}

describe('BlockquoteControllerRxjs', () => {
  /** @type {RxjsDemo} */
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <blockquote-controller-rxjs-demo></blockquote-controller-rxjs-demo>
    `);
  });

  afterEach(() => {
    fixtureCleanup();
  });

  it('can handle a Subject - with Reactive property', async () => {
    const nodeText = el.shadowRoot?.querySelector('b');
    const stream$ = new Subject();

    el.setupObservable(stream$);

    stream$.next(1);

    expect(el.streamValues).toBe(1);

    await el.updateComplete;

    expect(nodeText?.textContent).toBe('1');
  });

  it('can handle a Subject - without Reactive property', async () => {
    const nodeText = el.shadowRoot?.querySelector('i');
    const stream$ = new Subject();

    el.setupObservableNeedUpdate(stream$);

    stream$.next(2);

    expect(el.streamValuesUpdate).toBe(2);

    await el.updateComplete;

    expect(nodeText?.textContent).toBe('2');
  });

  it('will stop receiving values when destroyed', () => {
    const stream$ = new Subject();

    el.setupObservable(stream$);

    stream$.next(1);

    expect(el.streamValues).toBe(1);

    el.remove();

    stream$.next(2);

    expect(el.streamValues).toBe(1);
  });

  it('will unsubscribe from the previous stream when called with a different stream', () => {
    const firstStream$ = new Subject();
    const secondStream$ = new Subject();

    el.setupObservable(firstStream$);

    firstStream$.next(1);

    expect(el.streamValues).toBe(1);

    el.setupObservable(secondStream$);

    firstStream$.next(2);

    expect(el.streamValues).toBe(1);

    secondStream$.next(3);

    expect(el.streamValues).toBe(3);
  });

  it('will ignore calls with the same stream', () => {
    const stream$ = new Subject();

    el.setupObservable(stream$);

    stream$.next(1);

    expect(el.streamValues).toBe(1);

    el.setupObservable(stream$);

    stream$.next(2);

    expect(el.streamValues).toBe(2);
  });

  it('can handle a stream for a property that does not exist', () => {
    const stream$ = new Subject();

    el.rx.subscribe('unknownProperty', stream$);

    stream$.next(1);

    expect(/** @type {*} */ el['unknownProperty']).toBeUndefined();
  });

  it('will keep the existing subscription when called with the same stream', () => {
    const stream$ = new Subject();
    let subscriptionCount = 0;

    const observable$ = new Observable((subscriber) => {
      subscriptionCount++;

      stream$.subscribe(subscriber, {
        signal: subscriber.signal,
      });
    });

    el.setupObservable(observable$);

    expect(subscriptionCount).toBe(1);

    el.setupObservable(observable$);

    expect(subscriptionCount).toBe(1);
  });
});
