import {describe, it, expectTypeOf} from 'vitest';
import {setup, types} from 'xstate';
import type {ReactiveControllerHost} from 'lit';
import {BlockquoteControllerXstate} from '../src/index.js';

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
    expectTypeOf(controller.snapshot!.context.userId).toEqualTypeOf<string>();

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

  it('allows omitting options when the machine declares no input', () => {
    const controller = new BlockquoteControllerXstate(host, {machine: noInputMachine});
    expectTypeOf(controller.snapshot!.context.count).toEqualTypeOf<number>();
  });
});
