import {describe, expect, it} from 'vitest';
import {assignIfDefined} from '../src/utils.js';

describe('assignIfDefined', () => {
  it('assigns every value except undefined', () => {
    const target: Record<string, unknown> = {};

    assignIfDefined(target, 'falseValue', false);
    assignIfDefined(target, 'zeroValue', 0);
    assignIfDefined(target, 'emptyValue', '');
    assignIfDefined(target, 'undefinedValue', undefined);

    expect(target).toEqual({
      falseValue: false,
      zeroValue: 0,
      emptyValue: '',
    });
  });
});
