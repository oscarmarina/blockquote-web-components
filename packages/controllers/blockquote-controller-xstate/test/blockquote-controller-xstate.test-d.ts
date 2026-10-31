import {describe, it, expectTypeOf} from 'vitest';
import {setup, types} from 'xstate';
import type {ReactiveControllerHost} from 'lit';
import {BlockquoteControllerXstate, type EmittedEventMap} from '../src/index.js';

declare const host: ReactiveControllerHost;

const requiredInputMachine = setup({
  schemas: {
    input: types<{userId: string}>(),
    context: types<{userId: string}>(),
  },
}).createMachine({
  context: ({input}) => ({userId: input.userId}),
});

const optionalInputMachine = setup({
  schemas: {
    input: types<{userId: string} | undefined>(),
    context: types<{userId: string}>(),
  },
}).createMachine({
  context: ({input}) => ({userId: input?.userId ?? ''}),
});

const noInputMachine = setup({
  schemas: {
    context: types<{count: number}>(),
  },
}).createMachine({
  context: {count: 0},
});

describe('BlockquoteControllerXstate options types', () => {
  it('requires input when the machine input does not accept undefined', () => {
    // @ts-expect-error `options.input` is required
    new BlockquoteControllerXstate(host, {machine: requiredInputMachine});
    // @ts-expect-error `options` without `input` (or `snapshot`)
    new BlockquoteControllerXstate(host, {machine: requiredInputMachine, options: {}});

    const controller = new BlockquoteControllerXstate(host, {
      machine: requiredInputMachine,
      options: {input: {userId: '123'}},
    });
    expectTypeOf(controller.snapshot.context.userId).toEqualTypeOf<string>();

    // @ts-expect-error the actor is created again on reconnect, so `input` stays required
    controller.options = undefined;
  });

  it('allows omitting options when the machine input is optional', () => {
    new BlockquoteControllerXstate(host, {machine: optionalInputMachine});
    new BlockquoteControllerXstate(host, {
      machine: optionalInputMachine,
      options: {input: {userId: '123'}},
    });

    const controller = new BlockquoteControllerXstate(host, {machine: optionalInputMachine});
    controller.options = undefined;
  });

  it('names the snapshot listener onSnapshot (formerly callback)', () => {
    new BlockquoteControllerXstate(host, {machine: noInputMachine, onSnapshot: () => undefined});
    // @ts-expect-error renamed to `onSnapshot`
    new BlockquoteControllerXstate(host, {machine: noInputMachine, callback: () => undefined});
  });

  it('allows omitting options when the machine declares no input', () => {
    const controller = new BlockquoteControllerXstate(host, {machine: noInputMachine});
    expectTypeOf(controller.snapshot.context.count).toEqualTypeOf<number>();
  });
});

const eventsMachine = setup({
  schemas: {
    events: {
      // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- XState's way to declare an event without payload
      INC: types<void>(),
      RENAME: types<{label: string}>(),
    },
  },
}).createMachine({});

describe('BlockquoteControllerXstate trigger and can types', () => {
  const {trigger, can} = new BlockquoteControllerXstate(host, {machine: eventsMachine});

  it('types trigger from schemas.events', () => {
    expectTypeOf(trigger.INC).toEqualTypeOf<() => void>();
    expectTypeOf(trigger.RENAME).parameter(0).toEqualTypeOf<{label: string}>();
    // @ts-expect-error `RENAME` requires a payload
    trigger.RENAME();
    // @ts-expect-error `label` must be a string
    trigger.RENAME({label: 1});
    // @ts-expect-error unknown event
    trigger.NOPE();
  });

  it('types can like trigger, returning boolean', () => {
    expectTypeOf(can.INC).toEqualTypeOf<() => boolean>();
    expectTypeOf(can.RENAME).returns.toEqualTypeOf<boolean>();
    // @ts-expect-error `RENAME` requires a payload
    can.RENAME();
    // @ts-expect-error `INC` has no payload
    can.INC({label: 'x'});
    // @ts-expect-error unknown event
    can.NOPE();
  });
});

const emittingMachine = setup({
  schemas: {
    emitted: {
      renamed: types<{label: string}>(),
    },
  },
}).createMachine({});

describe('BlockquoteControllerXstate emitted events types', () => {
  const controller = new BlockquoteControllerXstate(host, {machine: emittingMachine});

  it('types on from schemas.emitted', () => {
    controller.on('renamed', (event) => {
      expectTypeOf(event.label).toEqualTypeOf<string>();
    });
    // @ts-expect-error unknown emitted event
    controller.on('nope', () => undefined);
  });

  it('maps emitted events to CustomEvent with the rest as detail', () => {
    expectTypeOf<EmittedEventMap<typeof emittingMachine>['renamed']>().toEqualTypeOf<
      CustomEvent<{label: string}>
    >();
  });
});
