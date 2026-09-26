import {describe, it, expect, beforeAll, beforeEach, chai, vi} from 'vitest';
import {createMachine} from 'xstate';
import {fixture, fixtureCleanup} from '@open-wc/testing-helpers';
import {chaiA11yAxe} from 'chai-a11y-axe';
import {getDiffableHTML} from '@open-wc/semantic-dom-diff/get-diffable-html.js';
import {html, LitElement} from 'lit';
import {BlockquoteControllerXstate} from '../src/index.js';
import '../demo/xstate-counter.js';
import type {AnyStateMachine} from 'xstate';

chai.use(chaiA11yAxe);

interface XstateCounter extends LitElement {
  counterController: BlockquoteControllerXstate<AnyStateMachine>;
}

describe('BlockquoteControllerXstate', () => {
  let el: XstateCounter;
  let elShadowRoot: string | null | undefined;

  describe('Default', () => {
    beforeAll(async () => {
      el = await fixture(html`
        <xstate-counter>light-dom</xstate-counter>
      `);
      elShadowRoot = el?.shadowRoot?.innerHTML;

      return () => {
        fixtureCleanup();
      };
    });

    it('default counter 0', () => {
      expect(el.counterController.snapshot!.context.counter).toBe(0);
    });

    it('should get an instance of actor', () => {
      expect(typeof el.counterController.actor).toBe('object');
      expect(el.counterController.actor).not.toBeNull();
    });

    describe('Semantic Dom and a11y', () => {
      it('SHADOW DOM - Structure test', async () => {
        if (elShadowRoot == null) {
          throw new Error('Expected shadow root HTML content');
        }
        expect(getDiffableHTML(elShadowRoot, {ignoreAttributes: ['id']})).toMatchSnapshot(
          'SHADOW DOM'
        );
      });

      it('LIGHT DOM - Structure test', async () => {
        expect(getDiffableHTML(el, {ignoreAttributes: ['id']})).toMatchSnapshot('LIGHT DOM');
      });

      it('a11y', async () => {
        await expect(el).accessible();
      });
    });
  });

  describe('Events ', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);

      return () => {
        fixtureCleanup();
      };
    });

    it('increases the counter on Increment button click', () => {
      el.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();
      expect(el.counterController.snapshot!.context.counter).toBe(1);
    });

    it('decreases the counter on Decrement button click', () => {
      el.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();
      el.shadowRoot?.querySelector<HTMLButtonElement>('button + button')?.click();
      expect(el.counterController.snapshot!.context.counter).toBe(0);
    });

    it('disable the counter on Enabled/Disabled button click', () => {
      let lastCounter = el.counterController.snapshot!.context.counter;
      const counterButton = el.shadowRoot?.querySelector<HTMLButtonElement>('button');
      const disabledButton = el.shadowRoot?.querySelector<HTMLButtonElement>('div + div button');

      counterButton?.click();
      expect(el.counterController.snapshot!.context.counter).toBe(lastCounter + 1);
      lastCounter = el.counterController.snapshot!.context.counter;

      disabledButton?.click();
      expect(el.counterController.snapshot!.value).toBe('disabled');

      counterButton?.click();
      expect(el.counterController.snapshot!.context.counter).toBe(lastCounter);
    });
  });

  describe('Lifecycle', () => {
    const machine = createMachine({
      context: {count: 0},
      on: {
        INC: ({context}) => ({context: {count: context.count + 1}}),
        FAIL: () => {
          throw new Error('boom');
        },
      },
    });

    const createHost = () => ({
      addController: vi.fn(),
      removeController: vi.fn(),
      requestUpdate: vi.fn(),
      updateComplete: Promise.resolve(true),
    });

    it('exposes the actor and snapshot before the host is connected', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      expect(controller.actor).toBeDefined();
      expect(controller.snapshot?.context.count).toBe(0);
    });

    it('notifies the first snapshot through the callback on connect', () => {
      const callback = vi.fn();
      const host = createHost();
      const controller = new BlockquoteControllerXstate(host, {machine, callback});

      controller.hostConnected();

      expect(callback).toHaveBeenCalledTimes(1);
      expect(host.requestUpdate).toHaveBeenCalled();
      controller.hostDisconnected();
    });

    it('does not start twice', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      const {actor} = controller;
      controller.startService();

      expect(controller.actor).toBe(actor);
      controller.hostDisconnected();
    });

    it('creates a new actor when the host is reconnected', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      controller.send({type: 'INC'});
      expect(controller.snapshot?.context.count).toBe(1);
      const firstActor = controller.actor;

      controller.hostDisconnected();
      expect(controller.subscription).toBeUndefined();

      controller.hostConnected();
      expect(controller.actor).not.toBe(firstActor);
      expect(controller.snapshot?.context.count).toBe(0);

      controller.send({type: 'INC'});
      expect(controller.snapshot?.context.count).toBe(1);
      controller.hostDisconnected();
    });

    it('forwards the stopped snapshot to the callback on disconnect', () => {
      const callback = vi.fn();
      const controller = new BlockquoteControllerXstate(createHost(), {machine, callback});

      controller.hostConnected();
      controller.hostDisconnected();

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback.mock.lastCall?.[0].status).toBe('stopped');
      expect(controller.isActive).toBe(false);
    });

    it('creates a new actor on reconnect if it was stopped externally', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      const firstActor = controller.actor;
      controller.actor?.stop();
      controller.unsubscribe();
      controller.hostConnected();

      expect(controller.actor).not.toBe(firstActor);
      expect(controller.isActive).toBe(true);
      controller.hostDisconnected();
    });

    it('calls onError when the actor errors', () => {
      const onError = vi.fn();
      const callback = vi.fn();
      const host = createHost();
      const reportError = vi.spyOn(globalThis, 'reportError');
      const controller = new BlockquoteControllerXstate(host, {machine, onError, callback});

      controller.hostConnected();
      host.requestUpdate.mockClear();
      controller.send({type: 'FAIL'});

      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError.mock.calls[0][0]).toBeInstanceOf(Error);
      expect(callback.mock.lastCall?.[0].status).toBe('error');
      expect(host.requestUpdate).toHaveBeenCalled();
      expect(reportError).not.toHaveBeenCalled();
      reportError.mockRestore();
      controller.hostDisconnected();
    });

    it('sends the error snapshot to callback and reports the error without onError', () => {
      const callback = vi.fn();
      const reportError = vi.spyOn(globalThis, 'reportError').mockImplementation(() => undefined);
      const controller = new BlockquoteControllerXstate(createHost(), {machine, callback});

      controller.hostConnected();
      controller.send({type: 'FAIL'});

      expect(callback.mock.lastCall?.[0].status).toBe('error');
      expect(reportError).toHaveBeenCalledTimes(1);
      expect(reportError.mock.calls[0][0]).toBeInstanceOf(Error);
      expect(controller.isActive).toBe(false);
      reportError.mockRestore();
      controller.hostDisconnected();
    });

    it('falls back to an async throw when reportError is not available', () => {
      vi.useFakeTimers();
      const original = globalThis.reportError;
      // @ts-expect-error simulate an environment without reportError
      delete globalThis.reportError;
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      controller.send({type: 'FAIL'});

      expect(() => vi.runAllTimers()).toThrow('boom');
      globalThis.reportError = original;
      vi.useRealTimers();
      controller.hostDisconnected();
    });
  });
});
