/* eslint-disable import/no-extraneous-dependencies */
import {from, Subject} from 'rxjs';
import {describe, it, expect, beforeAll} from 'vitest';
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
    };
  }

  constructor() {
    super();
    this.rx = new BlockquoteControllerRxjs(this);
    this.streamValues = 0;
    this.streamValuesUpdate = 0;
  }

  /**
   * @typedef {import('rxjs').Observable<number>} StreamObservable
   */

  /**
   * @param {StreamObservable} stream$
   * @returns {void}
   */
  setupObservable(stream$) {
    this.rx.subscribe('streamValues', stream$);
  }

  /**
   * @param {StreamObservable} stream$
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

window.customElements.define('blockquote-controller-rxjs-demo', RxjsDemo);

describe('BlockquoteControllerRxjs', () => {
  /**
   * @type {RxjsDemo}
   */
  let el;

  describe('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <blockquote-controller-rxjs-demo></blockquote-controller-rxjs-demo>
      `);
      return () => {
        fixtureCleanup();
      };
    });

    it('can handle simple Observable - with Reactive property', async () => {
      const nodeText = el.shadowRoot?.querySelector('b');
      el.setupObservable(from([1]));
      expect(el.streamValues).toBe(1);
      await el.updateComplete;
      expect(nodeText?.textContent).toBe('1');
    });

    it('can handle simple Observable - without Reactive property', async () => {
      const nodeText = el.shadowRoot?.querySelector('i');
      el.setupObservableNeedUpdate(from([2]));
      expect(el.streamValuesUpdate).toBe(2);
      await el.updateComplete;
      expect(nodeText?.textContent).toBe('2');
    });

    it('can handle invalid input', () => {
      // @ts-ignore
      expect(() => el.setupObservable()).toThrow('Invalid Observable!');
    });

    it('will unsubscribe when destroyed', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      expect(el.streamValues).toBe(1);
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(1);
      el.remove();
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(0);
    });

    it('will unsubscribe when called with a different stream', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      expect(el.streamValues).toBe(1);
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(1);
      el.setupObservable(new Subject());
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(0);
    });

    it('will ignore calls with the same stream', () => {
      const stream$ = new Subject();
      el.setupObservable(stream$);
      stream$.next(1);
      expect(el.streamValues).toBe(1);
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(1);
      el.setupObservable(stream$);
      // @ts-ignore
      expect(stream$.currentObservers.size).toBe(1);
    });
  });
});
