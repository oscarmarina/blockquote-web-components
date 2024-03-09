/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import { from, Subject } from 'rxjs';
import { LitElement } from 'lit';
import { BlockquoteControllerRxjs } from '../src/index.js';

const RxjsDemo = class BlockquoteControllerRxjsDemo extends LitElement {
  static get properties() {
    return {
      streamValues: {
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

  setupObservable(stream$) {
    this.rx.subscribe('streamValues', stream$);
  }

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

window.customElements.define('blockquote-controller-rxjs-demo', RxjsDemo);

suite('BlockquoteControllerRxjs', () => {
  /**
   * @type {RxjsDemo}
   */
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html`
        <blockquote-controller-rxjs-demo></blockquote-controller-rxjs-demo>
      `);
      await el.updateComplete;
    });

    test('can handle simple Observable - with Reactive property', async () => {
      const nodeText = el.shadowRoot?.querySelector('b');
      el.setupObservable(from([1]));
      assert.equal(el.streamValues, 1);
      await el.updateComplete;
      assert.equal(nodeText?.textContent, '1');
    });

    test('can handle simple Observable - without Reactive property', async () => {
      const nodeText = el.shadowRoot?.querySelector('i');
      el.setupObservableNeedUpdate(from([2]));
      assert.equal(el.streamValuesUpdate, 2);
      await el.updateComplete;
      assert.equal(nodeText?.textContent, '2');
    });

    test('can handle invalid input', () => {
      assert.throw(() => el.setupObservable(), 'Invalid Observable!');
    });

    test('will unsubscribe when destroyed', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      assert.equal(el.streamValues, 1);
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 1);
      el.remove();
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 0);
    });

    test('will unsubscribe when called with a different stream', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      assert.equal(el.streamValues, 1);
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 1);
      el.setupObservable(new Subject());
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 0);
    });

    test('will ignore calls with the same stream', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      assert.equal(el.streamValues, 1);
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 1);
      el.setupObservable(stream$);
      // @ts-ignore
      assert.equal(stream$.currentObservers.size, 1);
    });
  });
});
