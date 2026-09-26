import {setup, types} from 'xstate';

/*
 * This state machine represents a simple counter that can be incremented, decremented, and toggled on and off.
 * The counter starts in the "enabled" state, where it can be incremented or decremented.
 * If the counter reaches its maximum value, it cannot be incremented further. Similarly, if the counter reaches its minimum value, it cannot be decremented further. The counter can also be toggled to the "disabled" state, where it cannot be incremented or decremented.
 * Toggling it again will bring it back to the "enabled" state.
 */

// Setup with reusable guards/delays for future extensibility
const counterSetup = setup({
  // v6: `schemas` (Standard Schema). `types()` is type-only, no runtime validation.
  schemas: {
    context: /** @type {import('xstate').TypeSchema<{counter: number}>} */ (types()),
    events: {
      INC: /** @type {import('xstate').TypeSchema<void>} */ (types()),
      DEC: /** @type {import('xstate').TypeSchema<void>} */ (types()),
      TOGGLE: /** @type {import('xstate').TypeSchema<void>} */ (types()),
    },
  },
  guards: {
    canIncrement: ({context}) => context.counter < 10,
    canDecrement: ({context}) => context.counter > 0,
  },
  delays: {
    backoff: ({context}) => context.counter * 1000,
  },
});

export const counterMachine = counterSetup.createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoxMBDAIwBtIBiASQDkBhAbQAYBdRUAB1VgEts-VJi4gAHogAsATgIBGAEzzWMgMwB2AKwAaEAE9E8jQA4CrU-K3XjWy4oC+DvWiy5CxclQjUAIgFEWDjFeASERMUkEWQVlVU1dA0QTeQItJxcMHHwiUkoaABUAeQBxEoAZfzZOJBBQwWFRWqj5ADY1AjVFVjUlRMMERRMNAkU1GVbFGRUZDVZWdOcQV2zCCH5YL0LSiqrg2vrwptAW9s7u3sV+xDHWgg1xrRkTJ+VFMZMnJcxUCDgxFbuEJ8BoRZqIAC08j0AwhrQyyyy7lyWwgwLCjUi0g0MJuGjkrS07XkKjUWisk0WmTcOXWm3yaIOIKOWMGJjurXxrWG1zZigURN6pPJRKuXwcQA */
  context: {counter: 0},
  initial: 'enabled',
  states: {
    enabled: {
      on: {
        // Transition functions: return the next `context`, or `undefined` to ignore the event
        INC: ({context, guards}) =>
          guards.canIncrement({context}) ? {context: {counter: context.counter + 1}} : undefined,
        DEC: ({context, guards}) =>
          guards.canDecrement({context}) ? {context: {counter: context.counter - 1}} : undefined,
        TOGGLE: {target: 'disabled'},
      },
    },
    disabled: {
      after: {
        backoff: {target: 'enabled'},
      },
      on: {
        TOGGLE: {target: 'enabled'},
      },
    },
  },
});
