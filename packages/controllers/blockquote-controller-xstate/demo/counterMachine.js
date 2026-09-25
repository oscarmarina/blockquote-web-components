import {setup} from 'xstate';

/** @typedef {{context: object, guards: {canIncrement: Function, canDecrement: Function}}} CounterActionArgs */

/*
 * This state machine represents a simple counter that can be incremented, decremented, and toggled on and off.
 * The counter starts in the "enabled" state, where it can be incremented or decremented.
 * If the counter reaches its maximum value, it cannot be incremented further. Similarly, if the counter reaches its minimum value, it cannot be decremented further. The counter can also be toggled to the "disabled" state, where it cannot be incremented or decremented.
 * Toggling it again will bring it back to the "enabled" state.
 */

// Setup with reusable guards/delays for future extensibility
const counterSetup = setup({
  types: {
    context: /** @type {{counter: number}} */ ({}),
    events: /** @type {{type: 'INC'} | {type: 'DEC'} | {type: 'TOGGLE'}} */ ({}),
  },
  guards: {
    canIncrement: ({context}) => context.counter < 10,
    canDecrement: ({context}) => context.counter > 0,
  },
  delays: {
    backoff: ({context}) => context.counter * 1000,
  },
});

/** @param {CounterActionArgs} params */
const incAction = ({context, guards}) => {
  const counterContext = /** @type {{counter: number}} */ (context);

  if (guards.canIncrement({context: counterContext})) {
    return {context: {counter: counterContext.counter + 1}};
  }
  return undefined;
};

/** @param {CounterActionArgs} params */
const decAction = ({context, guards}) => {
  const counterContext = /** @type {{counter: number}} */ (context);

  if (guards.canDecrement({context: counterContext})) {
    return {context: {counter: counterContext.counter - 1}};
  }
  return undefined;
};

export const counterMachine = counterSetup.createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMD2BXAdgFzAJwDoxMBDAIwBtIBiASQDkBhAbQAYBdRUAB1VgEts-VJi4gAHogAsATgIBGAEzzWMgMwB2AKwAaEAE9E8jQA4CrU-K3XjWy4oC+DvWiy5CxclQjUAIgFEWDjFeASERMUkEWQVlVU1dA0QTeQItJxcMHHwiUkoaABUAeQBxEoAZfzZOJBBQwWFRWqj5ADY1AjVFVjUlRMMERRMNAkU1GVbFGRUZDVZWdOcQV2zCCH5YL0LSiqrg2vrwptAW9s7u3sV+xDHWgg1xrRkTJ+VFMZMnJcxUCDgxFbuEJ8BoRZqIAC08j0AwhrQyyyy7lyWwgwLCjUi0g0MJuGjkrS07XkKjUWisk0WmTcOXWm3yaIOIKOWMGJjurXxrWG1zZigURN6pPJRKuXwcQA */
  context: {counter: 0},
  initial: 'enabled',
  states: {
    enabled: {
      on: {
        INC: incAction,
        DEC: decAction,
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
