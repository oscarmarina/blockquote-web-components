/* eslint-disable import/no-extraneous-dependencies */
import {describe, it, expect, beforeAll, beforeEach} from 'vitest';
import {BlockquoteBaseMeta} from '../src/index.js';

describe('BlockquoteBaseMeta', () => {
  describe('init', () => {
    it('has types', () => {
      const meta = new BlockquoteBaseMeta({key: 'info', value: 'foo/bar'});
      const metaCtor = /** @type {any} */ (meta.constructor);
      expect(metaCtor.types).toBeDefined();
    });

    it('has metaId', () => {
      const meta = new BlockquoteBaseMeta({key: 'info', value: 'foo/bar'});
      const metaCtor = /** @type {any} */ (meta.constructor);
      expect(metaCtor.uuid).toBeDefined();
    });

    it('byKey', () => {
      const keyInfo = {id: 'dsfaskj0'};
      const meta = new BlockquoteBaseMeta({key: keyInfo, value: 'foo/bar'});
      expect(meta.byKey(keyInfo)).toBe(meta.value);
      meta.value = null;
    });

    it('list', () => {
      const meta = new BlockquoteBaseMeta({key: 'info', value: 'foo/bar'});
      expect(meta.list).toHaveLength(1);
    });

    it('getting `list` does not throw if no objects of the given type exist', () => {
      const meta = new BlockquoteBaseMeta({type: 'NO ITEMS OF THIS TYPE'});
      expect(() => {
        void meta.list;
      }).not.toThrow();
    });

    it('constructor with no arguments', () => {
      expect(() => {
        new BlockquoteBaseMeta();
      }).not.toThrow();
    });
  });

  describe('basic behavior', () => {
    /** @type {BlockquoteBaseMeta} */
    let meta;

    beforeEach(() => {
      meta = new BlockquoteBaseMeta({key: 'info', value: 'foo/bar'});

      return () => {
        meta.value = null;
      };
    });

    it('can be assigned alternative values', () => {
      meta.value = 'foobar';
      meta.value = 'barfoo';
      expect(meta.list[0]).toBe('barfoo');
    });

    it('can access same-type meta values by key', () => {
      expect(meta.byKey(meta.key)).toBe(meta.value);
    });

    it('yields a list of same-type meta data', () => {
      expect(Array.isArray(meta.list)).toBe(true);
      expect(meta.list).toHaveLength(1);
      expect(meta.list[0]).toBe('foo/bar');
    });

    it('yields of same-type like Object', () => {
      expect(meta.objectList).toEqual({
        info: 'foo/bar',
      });
    });

    it('yields of same-type like Map', () => {
      const iterableListValue = meta.mapList.entries().next().value;
      expect(Array.isArray(iterableListValue)).toBe(true);
      if (!iterableListValue) {
        throw new Error('Expected iterable map entry');
      }
      expect(iterableListValue[0]).toBe('info');
      expect(iterableListValue[1]).toBe('foo/bar');
    });
  });

  describe('many same-typed metas', () => {
    /** @type {BlockquoteBaseMeta[]} */
    const metas = [];

    beforeAll(() => {
      metas[0] = new BlockquoteBaseMeta({key: 'default1', value: 'foo/bar1'});
      metas[1] = new BlockquoteBaseMeta({key: 'default2', value: 'foo/bar2'});
      metas[2] = new BlockquoteBaseMeta({key: 'default3', value: 'foo/bar3'});

      return () => {
        metas.forEach((meta) => {
          const m = meta;
          m.value = null;
          m.key = null;
        });
      };
    });

    it('all cache all meta values', () => {
      metas.forEach((meta) => {
        expect(meta.list).toHaveLength(metas.length);
        expect(meta.list.indexOf(meta.value)).toBeGreaterThanOrEqual(0);
      });
    });

    it('can be unregistered individually', () => {
      metas[0].value = null;
      expect(metas[0].list).toHaveLength(2);
      expect(metas[0].list).toEqual(expect.arrayContaining(['foo/bar2', 'foo/bar3']));
    });

    it('can access each others value (same type) by key', () => {
      expect(metas[2].byKey('default2')).toBe(metas[1].value);
    });

    it('when access to other value (same type) by key, not lose your own value', () => {
      expect(metas[2].byKey('default1')).toBe(metas[0].value);
      expect(metas[2].value).toBe('foo/bar3');
    });
  });

  describe('different-typed metas', () => {
    /** @type {BlockquoteBaseMeta[]} */
    const metasType = [];

    beforeAll(() => {
      metasType[0] = new BlockquoteBaseMeta({
        type: 'foo',
        key: 'foobarKey',
        value: 'type/foo',
      });
      metasType[1] = new BlockquoteBaseMeta({
        type: 'bar',
        key: 'foobarKey',
        value: 'type/bar',
      });

      return () => {
        metasType.forEach((meta) => {
          const metaSetup = meta;
          metaSetup.value = null;
          metaSetup.key = null;
        });
      };
    });

    it('cache their values separately', () => {
      const fooMeta = metasType[0];
      const barMeta = metasType[1];

      expect(fooMeta.value).not.toBe(barMeta.value);
      expect(fooMeta.byKey('foobarKey')).toBe(fooMeta.value);
      expect(barMeta.byKey('foobarKey')).toBe(barMeta.value);
    });

    it('only list values of their type', () => {
      metasType.forEach((meta) => {
        expect(meta.list).toHaveLength(1);
        expect(meta.list[0]).toBe(meta.value);
      });
    });
  });

  describe('metas with clashing keys', () => {
    /** @type {BlockquoteBaseMeta[]} */
    const metaPair = [];

    beforeAll(() => {
      metaPair[0] = new BlockquoteBaseMeta({key: 'baz', value: 'baz/1'});
      metaPair[1] = new BlockquoteBaseMeta({key: 'baz', value: 'baz/2'});

      return () => {
        metaPair.forEach((meta) => {
          const metaSetup = meta;
          metaSetup.value = null;
          metaSetup.key = null;
        });
      };
    });

    it('let the last value win registration against the key', () => {
      const registeredValue = metaPair[0].byKey(metaPair[0].key);
      const firstValue = metaPair[0].value;
      const secondValue = metaPair[1].value;
      expect(firstValue).toBe(secondValue);
      expect(registeredValue).toBe(secondValue);
    });
  });
});
