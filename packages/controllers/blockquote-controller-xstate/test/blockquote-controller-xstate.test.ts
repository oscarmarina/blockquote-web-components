import {describe, it, expect, afterEach, beforeAll, beforeEach, chai, vi} from 'vitest';
import {createMachine, setup, types} from 'xstate';
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
      expect(el.counterController.snapshot.context.counter).toBe(0);
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
      expect(el.counterController.snapshot.context.counter).toBe(1);
    });

    it('decreases the counter on Decrement button click', async () => {
      el.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();
      await el.updateComplete;
      el.shadowRoot?.querySelector<HTMLButtonElement>('button + button')?.click();
      expect(el.counterController.snapshot.context.counter).toBe(0);
    });

    it('disables the Decrement button when the DEC event cannot be handled', async () => {
      const decrementButton = el.shadowRoot?.querySelector<HTMLButtonElement>('button + button');
      expect(decrementButton?.disabled).toBe(true);
      el.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();
      await el.updateComplete;
      expect(decrementButton?.disabled).toBe(false);
    });

    it('disables the Increment button when the counter reaches the maximum', async () => {
      const incrementButton = el.shadowRoot?.querySelector<HTMLButtonElement>('button');
      for (let i = 0; i < 10; i++) {
        incrementButton?.click();
        await el.updateComplete;
      }
      expect(el.counterController.snapshot.context.counter).toBe(10);
      expect(incrementButton?.disabled).toBe(true);
      expect(el.shadowRoot?.querySelector<HTMLButtonElement>('button + button')?.disabled).toBe(
        false
      );
    });

    it('disable the counter on Enabled/Disabled button click', () => {
      let lastCounter = el.counterController.snapshot.context.counter;
      const counterButton = el.shadowRoot?.querySelector<HTMLButtonElement>('button');
      const disabledButton = el.shadowRoot?.querySelector<HTMLButtonElement>('div + div button');

      counterButton?.click();
      expect(el.counterController.snapshot.context.counter).toBe(lastCounter + 1);
      lastCounter = el.counterController.snapshot.context.counter;

      disabledButton?.click();
      expect(el.counterController.snapshot.value).toBe('disabled');

      // Clicked before the re-render disables the button: the machine ignores `INC`, and
      // XState warns about it in development builds
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      counterButton?.click();
      expect(el.counterController.snapshot.context.counter).toBe(lastCounter);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(
          'received event "INC" in state "disabled" with no matching transition'
        )
      );
      warn.mockRestore();
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

    it('snapshot.can() is false when the transition function ignores the event', () => {
      const boundedMachine = createMachine({
        context: {count: 0},
        on: {
          INC: ({context}) => ({context: {count: context.count + 1}}),
          // Returning `undefined` ignores the event
          DEC: ({context}) =>
            context.count > 0 ? {context: {count: context.count - 1}} : undefined,
        },
      });
      const controller = new BlockquoteControllerXstate(createHost(), {machine: boundedMachine});

      controller.hostConnected();
      expect(controller.snapshot.can({type: 'DEC'})).toBe(false);
      // Ignored events are reported in development builds
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      controller.send({type: 'DEC'});
      expect(controller.snapshot.context.count).toBe(0);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('received event "DEC" in state {} with no matching transition')
      );
      warn.mockRestore();

      controller.send({type: 'INC'});
      expect(controller.snapshot.can({type: 'DEC'})).toBe(true);

      controller.hostDisconnected();
      expect(controller.snapshot.can({type: 'INC'})).toBe(false);
    });

    it('exposes the actor and snapshot before the host is connected', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      expect(controller.actor).toBeDefined();
      expect(controller.snapshot.context.count).toBe(0);
    });

    it('notifies the first snapshot through onSnapshot on connect', () => {
      const onSnapshot = vi.fn();
      const host = createHost();
      const controller = new BlockquoteControllerXstate(host, {machine, onSnapshot});

      controller.hostConnected();

      expect(onSnapshot).toHaveBeenCalledTimes(1);
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
      expect(controller.snapshot.context.count).toBe(1);
      const firstActor = controller.actor;

      controller.hostDisconnected();
      expect(controller.subscription).toBeUndefined();

      controller.hostConnected();
      expect(controller.actor).not.toBe(firstActor);
      expect(controller.snapshot.context.count).toBe(0);

      controller.send({type: 'INC'});
      expect(controller.snapshot.context.count).toBe(1);
      controller.hostDisconnected();
    });

    it('forwards the stopped snapshot to onSnapshot on disconnect', () => {
      const onSnapshot = vi.fn();
      const controller = new BlockquoteControllerXstate(createHost(), {machine, onSnapshot});

      controller.hostConnected();
      controller.hostDisconnected();

      expect(onSnapshot).toHaveBeenCalledTimes(2);
      expect(onSnapshot.mock.lastCall?.[0].status).toBe('stopped');
      expect(controller.isActive).toBe(false);
    });

    it('creates a new actor on reconnect if it was stopped externally', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      const firstActor = controller.actor;
      controller.actor.stop();
      controller.unsubscribe();
      controller.hostConnected();

      expect(controller.actor).not.toBe(firstActor);
      expect(controller.isActive).toBe(true);
      controller.hostDisconnected();
    });

    it('calls onError when the actor errors', () => {
      vi.useFakeTimers();
      const onError = vi.fn();
      const onSnapshot = vi.fn();
      const host = createHost();
      const controller = new BlockquoteControllerXstate(host, {machine, onError, onSnapshot});

      controller.hostConnected();
      host.requestUpdate.mockClear();
      controller.send({type: 'FAIL'});

      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError.mock.calls[0][0]).toBeInstanceOf(Error);
      expect(onSnapshot.mock.lastCall?.[0].status).toBe('error');
      expect(host.requestUpdate).toHaveBeenCalled();
      // Handled: XState does not report it as unhandled
      expect(() => vi.runAllTimers()).not.toThrow();
      vi.useRealTimers();
      controller.hostDisconnected();
    });

    it('lets XState report the error as unhandled without onError', () => {
      vi.useFakeTimers();
      const onSnapshot = vi.fn();
      const controller = new BlockquoteControllerXstate(createHost(), {machine, onSnapshot});

      controller.hostConnected();
      controller.send({type: 'FAIL'});

      expect(onSnapshot.mock.lastCall?.[0].status).toBe('error');
      expect(controller.isActive).toBe(false);
      // The controller subscribes as `passive`: it does not count as an error handler
      expect(() => vi.runAllTimers()).toThrow('boom');
      vi.useRealTimers();
      controller.hostDisconnected();
    });

    it('does not report the error when another subscriber handles it', () => {
      vi.useFakeTimers();
      const controller = new BlockquoteControllerXstate(createHost(), {machine});
      const external = vi.fn();

      controller.hostConnected();
      controller.actor.subscribe({error: external});
      controller.send({type: 'FAIL'});

      expect(external).toHaveBeenCalledTimes(1);
      expect(() => vi.runAllTimers()).not.toThrow();
      vi.useRealTimers();
      controller.hostDisconnected();
    });
  });

  describe('trigger and can', () => {
    const machine = setup({
      schemas: {
        context: types<{count: number; label: string}>(),
        events: {
          // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
          INC: types<void>(),
          RENAME: types<{label: string}>(),
          // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
          FAIL: types<void>(),
        },
      },
    }).createMachine({
      context: {count: 0, label: ''},
      on: {
        INC: ({context}) => (context.count < 2 ? {context: {count: context.count + 1}} : undefined),
        RENAME: ({event}) => ({context: {label: event.label}}),
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

    it('sends typed events, with and without payload', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      controller.trigger.INC();
      controller.trigger.RENAME({label: 'a'});

      expect(controller.snapshot.context).toEqual({count: 1, label: 'a'});
      controller.hostDisconnected();
    });

    it('can follows the transition functions and the actor status', () => {
      vi.useFakeTimers();
      const controller = new BlockquoteControllerXstate(createHost(), {machine, onError: vi.fn()});
      const {can, trigger} = controller;

      controller.hostConnected();
      expect(can.INC()).toBe(true);
      expect(can.RENAME({label: 'x'})).toBe(true);

      trigger.INC();
      trigger.INC();
      expect(can.INC()).toBe(false);

      trigger.FAIL();
      expect(controller.snapshot.status).toBe('error');
      expect(can.RENAME({label: 'x'})).toBe(false);
      vi.useRealTimers();
      controller.hostDisconnected();
    });

    it('keeps trigger and can usable across reconnections (stable proxies)', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine});
      const {trigger, can} = controller;

      controller.hostConnected();
      const firstActor = controller.actor;
      trigger.INC();

      controller.hostDisconnected();
      expect(can.INC()).toBe(false);

      controller.hostConnected();
      expect(controller.actor).not.toBe(firstActor);
      expect(can.INC()).toBe(true);

      // The kept proxies reach the new actor; XState's `actor.trigger` would reach the stopped one
      trigger.INC();
      expect(controller.snapshot.context.count).toBe(1);
      expect(firstActor.getSnapshot().context.count).toBe(1);
      expect(controller.trigger).toBe(trigger);
      controller.hostDisconnected();
    });

    it('actor.trigger read before an await drops a response that arrives after a reconnection', async () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
      const controller = new BlockquoteControllerXstate(createHost(), {machine});

      controller.hostConnected();
      const session = controller.actor.trigger;
      let respond!: (label: string) => void;
      const pending = new Promise<string>((resolve) => (respond = resolve)).then((label) =>
        session.RENAME({label})
      );

      controller.hostDisconnected();
      controller.hostConnected();
      respond('stale');
      await pending;

      expect(controller.snapshot.context.label).toBe('');
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('not delivered (stopped)'));

      // `controller.trigger` would have delivered it to the new session
      controller.trigger.RENAME({label: 'stale'});
      expect(controller.snapshot.context.label).toBe('stale');
      warn.mockRestore();
      controller.hostDisconnected();
    });

    it.each(['trigger', 'can'] as const)(
      '%s is not a thenable and ignores symbol keys',
      async (key) => {
        const proxy = new BlockquoteControllerXstate(createHost(), {machine})[key];

        expect((proxy as Record<string, unknown>).then).toBeUndefined();
        expect((proxy as Record<symbol, unknown>)[Symbol.toPrimitive]).toBeUndefined();
        await expect(Promise.resolve(proxy)).resolves.toBe(proxy);
      }
    );
  });

  describe("reconnect: 'restore'", () => {
    const toggleMachine = setup({
      schemas: {
        context: types<{count: number; label: string}>(),
        events: {
          // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
          TOGGLE: types<void>(),
          // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
          INC: types<void>(),
          RENAME: types<{label: string}>(),
        },
      },
    }).createMachine({
      context: {count: 0, label: ''},
      initial: 'off',
      states: {
        off: {on: {TOGGLE: {target: 'on'}}},
        on: {
          on: {
            INC: ({context}) => ({context: {count: context.count + 1}}),
            RENAME: ({event}) => ({context: {label: event.label}}),
            TOGGLE: {target: 'off'},
          },
        },
      },
    });

    const timerMachine = createMachine({
      initial: 'waiting',
      states: {
        waiting: {after: {1000: {target: 'ready'}}},
        ready: {},
      },
    });

    const boomMachine = createMachine({
      on: {
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

    afterEach(() => {
      vi.useRealTimers();
    });

    it('resumes the state the actor had when the host was disconnected', () => {
      const onSnapshot = vi.fn();
      const controller = new BlockquoteControllerXstate(createHost(), {
        machine: toggleMachine,
        reconnect: 'restore',
        onSnapshot,
      });

      controller.hostConnected();
      controller.trigger.TOGGLE();
      controller.trigger.INC();
      controller.trigger.RENAME({label: 'kept'});
      const firstActor = controller.actor;

      controller.hostDisconnected();
      controller.hostConnected();

      expect(controller.actor).not.toBe(firstActor);
      expect(controller.snapshot.value).toBe('on');
      expect(controller.snapshot.context).toEqual({count: 1, label: 'kept'});
      expect(onSnapshot.mock.calls.slice(-2).map(([snapshot]) => snapshot.status)).toEqual([
        'stopped',
        'active',
      ]);
      controller.hostDisconnected();
    });

    it('keeps the deadline of pending timers while disconnected', () => {
      vi.useFakeTimers();
      const controller = new BlockquoteControllerXstate(createHost(), {
        machine: timerMachine,
        reconnect: 'restore',
      });

      controller.hostConnected();
      vi.advanceTimersByTime(300);
      controller.hostDisconnected();
      vi.advanceTimersByTime(200);
      controller.hostConnected();

      vi.advanceTimersByTime(499);
      expect(controller.snapshot.value).toBe('waiting');
      vi.advanceTimersByTime(1);
      expect(controller.snapshot.value).toBe('ready');
      controller.hostDisconnected();
    });

    it('fires a timer that expired while disconnected', () => {
      vi.useFakeTimers();
      const controller = new BlockquoteControllerXstate(createHost(), {
        machine: timerMachine,
        reconnect: 'restore',
      });

      controller.hostConnected();
      controller.hostDisconnected();
      vi.advanceTimersByTime(1500);
      controller.hostConnected();
      vi.advanceTimersByTime(0);

      expect(controller.snapshot.value).toBe('ready');
      controller.hostDisconnected();
    });

    it('restarts an actor that had finished with an error', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {
        machine: boomMachine,
        reconnect: 'restore',
        onError: vi.fn(),
      });

      controller.hostConnected();
      controller.send({type: 'FAIL'});
      expect(controller.snapshot.status).toBe('error');

      controller.hostDisconnected();
      controller.hostConnected();
      expect(controller.snapshot.status).toBe('active');
      controller.hostDisconnected();
    });

    it('restarts when `machine` was reassigned while disconnected', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {
        machine: toggleMachine,
        reconnect: 'restore',
      });

      controller.hostConnected();
      controller.trigger.TOGGLE();
      controller.hostDisconnected();
      controller.machine = toggleMachine.provide({});
      controller.hostConnected();

      expect(controller.snapshot.value).toBe('off');
      controller.hostDisconnected();
    });

    it('restarts by default', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine: toggleMachine});

      controller.hostConnected();
      controller.trigger.TOGGLE();
      controller.hostDisconnected();
      controller.hostConnected();

      expect(controller.reconnect).toBe('restart');
      expect(controller.snapshot.value).toBe('off');
      controller.hostDisconnected();
    });
  });

  describe('Demo: countdown and restore', () => {
    afterEach(() => {
      vi.useRealTimers();
      fixtureCleanup();
    });

    it('counts down while disabled, and keeps the deadline when it is moved in the DOM', async () => {
      vi.useFakeTimers();
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);
      const countdown = () => el.shadowRoot?.querySelector('.countdown');
      const increment = el.shadowRoot?.querySelector<HTMLButtonElement>('button');
      increment?.click();
      increment?.click();
      await el.updateComplete;

      el.shadowRoot?.querySelector<HTMLButtonElement>('div + div button')?.click();
      await el.updateComplete;
      expect(countdown()?.textContent).toBe('2.0 s');

      vi.advanceTimersByTime(500);
      await el.updateComplete;
      expect(countdown()?.textContent).toBe('1.5 s');

      const container = document.createElement('div');
      document.body.append(container);
      container.append(el); // disconnected and connected again: a restored actor
      await el.updateComplete;
      vi.advanceTimersByTime(500);
      await el.updateComplete;
      expect(el.counterController.snapshot.context.counter).toBe(2);
      expect(countdown()?.textContent).toBe('1.0 s');

      vi.advanceTimersByTime(1000);
      await el.updateComplete;
      expect(el.counterController.snapshot.matches('enabled')).toBe(true);
      expect(countdown()).toBeNull();
      container.remove();
    });
  });

  describe('emitted events', () => {
    const emittingMachine = setup({
      schemas: {
        context: types<{label: string}>(),
        events: {
          // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
          INC: types<void>(),
          RENAME: types<{label: string}>(),
        },
        emitted: {
          renamed: types<{label: string}>(),
          incremented: types<{count: number}>(),
        },
      },
    }).createMachine({
      context: {label: ''},
      on: {
        INC: (_, enq) => {
          enq.emit({type: 'incremented', count: 1});
          return {};
        },
        RENAME: ({event}, enq) => {
          enq.emit({type: 'renamed', label: event.label});
          return {context: {label: event.label}};
        },
      },
    });

    const createHost = () => ({
      addController: vi.fn(),
      removeController: vi.fn(),
      requestUpdate: vi.fn(),
      updateComplete: Promise.resolve(true),
    });

    /** A host that is an `EventTarget`, as `dispatchEmitted` requires */
    class EventHost extends EventTarget {
      addController = vi.fn();
      removeController = vi.fn();
      requestUpdate = vi.fn();
      updateComplete = Promise.resolve(true);
    }

    afterEach(() => {
      vi.useRealTimers();
    });

    it('on handles emitted events by type or with *, until unsubscribed', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine: emittingMachine});
      const renamed: string[] = [];
      const all: string[] = [];
      const subscription = controller.on('renamed', (event) => renamed.push(event.label));
      controller.on('*', (event) => all.push(event.type));

      controller.hostConnected();
      controller.trigger.INC();
      controller.trigger.RENAME({label: 'a'});
      subscription.unsubscribe();
      controller.trigger.RENAME({label: 'b'});

      expect(renamed).toEqual(['a']);
      expect(all).toEqual(['incremented', 'renamed', 'renamed']);
      controller.hostDisconnected();
    });

    it('on keeps handling events after a reconnection, unlike actor.on', () => {
      const controller = new BlockquoteControllerXstate(createHost(), {machine: emittingMachine});
      const fromController: string[] = [];
      const fromActor: string[] = [];
      controller.on('renamed', (event) => fromController.push(event.label));

      controller.hostConnected();
      controller.actor.on('renamed', (event) => fromActor.push(event.label));
      controller.hostDisconnected();
      controller.hostConnected();
      controller.trigger.RENAME({label: 'after'});

      expect(fromController).toEqual(['after']);
      expect(fromActor).toEqual([]);
      controller.hostDisconnected();
    });

    it('one failing on handler does not keep the others from the event', () => {
      vi.useFakeTimers();
      const controller = new BlockquoteControllerXstate(createHost(), {machine: emittingMachine});
      const received: string[] = [];
      controller.on('renamed', () => {
        throw new Error('handler');
      });
      controller.on('renamed', (event) => received.push(event.label));

      controller.hostConnected();
      controller.trigger.RENAME({label: 'x'});

      expect(received).toEqual(['x']);
      expect(() => vi.runAllTimers()).toThrow('handler');
      controller.hostDisconnected();
    });

    it('does not dispatch DOM events by default', () => {
      const host = new EventHost();
      const listener = vi.fn();
      host.addEventListener('renamed', listener);
      const controller = new BlockquoteControllerXstate(host, {machine: emittingMachine});

      controller.hostConnected();
      controller.trigger.RENAME({label: 'x'});

      expect(listener).not.toHaveBeenCalled();
      controller.hostDisconnected();
    });

    it('dispatchEmitted dispatches each emitted event on the host, composed, with the payload as detail', () => {
      const host = new EventHost();
      const events: Event[] = [];
      host.addEventListener('renamed', (ev) => events.push(ev));
      const controller = new BlockquoteControllerXstate(host, {
        machine: emittingMachine,
        dispatchEmitted: true,
      });

      controller.hostConnected();
      controller.trigger.RENAME({label: 'a'});

      expect(events).toHaveLength(1);
      expect(events[0]).toBeInstanceOf(CustomEvent);
      expect(events[0]).toMatchObject({
        type: 'renamed',
        detail: {label: 'a'},
        bubbles: false,
        composed: true,
      });
      controller.hostDisconnected();
    });

    it('dispatchEmitted uses the given EventInit', () => {
      const host = new EventHost();
      const events: Event[] = [];
      host.addEventListener('renamed', (ev) => events.push(ev));
      const controller = new BlockquoteControllerXstate(host, {
        machine: emittingMachine,
        dispatchEmitted: {bubbles: true},
      });

      controller.hostConnected();
      controller.trigger.RENAME({label: 'a'});

      expect(events[0]).toMatchObject({bubbles: true, composed: false});
      controller.hostDisconnected();
    });

    it('queues a trigger called from a listener, and dispatches its events in order', () => {
      const host = new EventHost();
      const controller = new BlockquoteControllerXstate(host, {
        machine: emittingMachine,
        dispatchEmitted: true,
      });
      const log: string[] = [];
      host.addEventListener('renamed', (ev) => {
        const {label} = (ev as CustomEvent<{label: string}>).detail;
        log.push(`${label} (snapshot: ${controller.snapshot.context.label})`);
        if (label === 'a') {
          controller.trigger.RENAME({label: 'b'});
          log.push(`after trigger (snapshot: ${controller.snapshot.context.label})`);
        }
      });

      controller.hostConnected();
      controller.trigger.RENAME({label: 'a'});

      expect(log).toEqual(['a (snapshot: a)', 'after trigger (snapshot: a)', 'b (snapshot: b)']);
      controller.hostDisconnected();
    });

    it('a listener that throws does not stop the other listeners or the actor', () => {
      const errors: unknown[] = [];
      const onError = (event: ErrorEvent) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        errors.push(event.error);
      };
      window.addEventListener('error', onError, {capture: true});
      const host = new EventHost();
      const received = vi.fn();
      host.addEventListener('renamed', () => {
        throw new Error('listener');
      });
      host.addEventListener('renamed', received);
      const controller = new BlockquoteControllerXstate(host, {
        machine: emittingMachine,
        dispatchEmitted: true,
      });

      controller.hostConnected();
      controller.trigger.RENAME({label: 'a'});
      window.removeEventListener('error', onError, {capture: true});

      expect(received).toHaveBeenCalledTimes(1);
      expect(errors).toEqual([expect.objectContaining({message: 'listener'})]);
      expect(controller.snapshot.status).toBe('active');
      controller.hostDisconnected();
    });

    it('dispatchEmitted requires a host that is an EventTarget', () => {
      expect(
        () =>
          new BlockquoteControllerXstate(createHost(), {
            machine: emittingMachine,
            dispatchEmitted: true,
          })
      ).toThrow(TypeError);
    });
  });

  describe('Demo: emitted events', () => {
    afterEach(() => {
      vi.useRealTimers();
      fixtureCleanup();
    });

    it('dispatches the counterchange the machine emits when the counter changes', async () => {
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);
      const details: unknown[] = [];
      const events: Event[] = [];
      el.addEventListener('counterchange', (ev) => {
        events.push(ev);
        details.push((ev as CustomEvent).detail);
      });
      // `composed` without `bubbles`: ancestors only see it in the capture phase
      const bubbled = vi.fn();
      const captured = vi.fn();
      document.body.addEventListener('counterchange', bubbled);
      document.body.addEventListener('counterchange', captured, {capture: true});

      const increment = el.shadowRoot?.querySelector<HTMLButtonElement>('button');
      increment?.click();
      increment?.click();
      await el.updateComplete; // `decrement` is enabled once the counter is above 0
      el.shadowRoot?.querySelector<HTMLButtonElement>('button + button')?.click();

      expect(details).toEqual([{counter: 1}, {counter: 2}, {counter: 1}]);
      expect(events[0]).toMatchObject({bubbles: false, composed: true, target: el});
      expect(bubbled).not.toHaveBeenCalled();
      expect(captured).toHaveBeenCalledTimes(3);
      document.body.removeEventListener('counterchange', bubbled);
      document.body.removeEventListener('counterchange', captured, {capture: true});
    });

    it('dispatches disabledchange on entering and leaving disabled, not on a move', async () => {
      vi.useFakeTimers();
      el = await fixture(html`
        <xstate-counter></xstate-counter>
      `);
      const details: unknown[] = [];
      el.addEventListener('disabledchange', (ev) => details.push((ev as CustomEvent).detail));
      el.shadowRoot?.querySelector<HTMLButtonElement>('button')?.click();

      el.shadowRoot?.querySelector<HTMLButtonElement>('div + div button')?.click();
      expect(details).toEqual([{disabled: true, disabledUntil: Date.now() + 1000}]);

      // Disconnecting does not run `exit`, and restoring does not run `entry`
      const container = document.createElement('div');
      document.body.append(container);
      container.append(el);
      expect(details).toHaveLength(1);

      vi.advanceTimersByTime(1000);
      expect(details.at(-1)).toEqual({disabled: false, disabledUntil: 0});
      container.remove();
    });
  });
});
