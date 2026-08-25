import {createMachine, assign} from 'xstate';

/*
 * This state machine represents a simple counter that can be incremented, decremented, and toggled on and off.
 * The counter starts in the "enabled" state, where it can be incremented or decremented.
 * If the counter reaches its maximum value, it cannot be incremented further. Similarly, if the counter reaches its minimum value, it cannot be decremented further. The counter can also be toggled to the "disabled" state, where it cannot be incremented or decremented.
 * Toggling it again will bring it back to the "enabled" state.
 */

const states = {
  enabled: 'enabled',
  disabled: 'disabled',
};

/** @typedef {{counter: number, event: {type: string} | undefined}} CounterContext */

// Assign actions with documented parameter types
/** @type {{counter: (args: {context: CounterContext}) => number}} */
const increment = {
  counter: ({context}) => context.counter + 1,
};

/** @type {{counter: (args: {context: CounterContext}) => number}} */
const decrement = {
  counter: ({context}) => context.counter - 1,
};

/** @type {(args: {context: CounterContext}) => boolean} */
const isNotMax = ({context}) => context.counter < 10;

/** @type {(args: {context: CounterContext}) => boolean} */
const isNotMin = ({context}) => context.counter > 0;

export const counterMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoxMBDAIwBtIBiASQDkBhAbQAYBdRUAB1VgEts-VJi4gAHogAsATgIBGAEzzWMgMwB2AKwAaEAE9E8jQA4CrU-K3XjWy4oC+DvWiy5CxclQjUAIgFEWDjFeASERMUkEWQVlVU1dA0QTeQItJxcMHHwiUkoaABUAeQBxEoAZfzZOJBBQwWFRWqj5ADY1AjVFVjUlRMMERRMNAkU1GVbFGRUZDVZWdOcQV2zCCH5YL0LSiqrg2vrwptAW9s7u3sV+xDHWgg1xrRkTJ+VFMZMnJcxUCDgxFbuEJ8BoRZqIAC08j0AwhrQyyyy7lyWwgwLCjUi0g0MJuGjkrS07XkKjUWisk0WmTcOXWm3yaIOIKOWMGJjurXxrWG1zZigURN6pPJRKuXwcQA */
    id: 'counter',
    context: {counter: 0, event: undefined},
    initial: 'enabled',
    states: {
      enabled: {
        on: {
          INC: {
            actions: {
              type: 'increment',
            },
            guard: {
              type: 'isNotMax',
            },
          },
          DEC: {
            actions: {
              type: 'decrement',
            },
            guard: {
              type: 'isNotMin',
            },
          },
          TOGGLE: {
            target: states.disabled,
          },
        },
      },
      disabled: {
        on: {
          TOGGLE: {
            target: states.enabled,
          },
        },
      },
    },
  },
  {
    actions: {
      increment: assign(increment),
      decrement: assign(decrement),
    },
    guards: {
      isNotMax,
      isNotMin,
    },
  }
);
