/* eslint-disable import/no-extraneous-dependencies */
import { assert, fixtureCleanup } from '@open-wc/testing';
import { BlockquoteBaseMeta } from '../src/index.js';

suite('BlockquoteBaseMeta', () => {
  teardown(() => fixtureCleanup());

  suite('init', () => {
    test('has types', () => {
      const meta = new BlockquoteBaseMeta({ key: 'info', value: 'foo/bar' });
      assert.isDefined(meta.constructor.types);
    });

    test('has metaId', () => {
      const meta = new BlockquoteBaseMeta({ key: 'info', value: 'foo/bar' });
      assert.isDefined(meta.constructor.uuid);
    });

    test('byKey', () => {
      const keyInfo = { id: 'dsfaskj0' };
      const meta = new BlockquoteBaseMeta({ key: keyInfo, value: 'foo/bar' });
      assert.equal(meta.byKey(keyInfo), meta.value);
      meta.value = null;
    });

    test('list', () => {
      const meta = new BlockquoteBaseMeta({ key: 'info', value: 'foo/bar' });
      assert.equal(meta.list.length, 1);
    });

    test('getting `list` does not throw if no objects of the given type exist', () => {
      const meta = new BlockquoteBaseMeta({ type: 'NO ITEMS OF THIS TYPE' });
      assert.doesNotThrow(() => {
        // eslint-disable-next-line no-unused-expressions
        meta.list;
      });
    });

    test('constructor with no arguments', () => {
      assert.doesNotThrow(() => {
        // eslint-disable-next-line no-new
        new BlockquoteBaseMeta();
      });
    });
  });

  suite('basic behavior', () => {
    let meta;

    setup(() => {
      meta = new BlockquoteBaseMeta({ key: 'info', value: 'foo/bar' });
    });

    teardown(() => {
      meta.value = null;
    });

    test('can be assigned alternative values', () => {
      meta.value = 'foobar';
      meta.value = 'barfoo';
      assert.equal(meta.list[0], 'barfoo');
    });

    test('can access same-type meta values by key', () => {
      assert.equal(meta.byKey(meta.key), meta.value);
    });

    test('yields a list of same-type meta data', () => {
      assert.isArray(meta.list);
      assert.equal(meta.list.length, 1);
      assert.equal(meta.list[0], 'foo/bar');
    });

    test('yields of same-type like Object', () => {
      assert.deepEqual(meta.objectList, {
        info: 'foo/bar',
      });
    });

    test('yields of same-type like Map', () => {
      const iterableListValue = meta.mapList.entries().next().value;
      assert.isArray(iterableListValue);
      assert.equal(iterableListValue[0], 'info');
      assert.equal(iterableListValue[1], 'foo/bar');
    });
  });

  suite('many same-typed metas', () => {
    const metas = [];

    setup(() => {
      metas[0] = new BlockquoteBaseMeta({ key: 'default1', value: 'foo/bar1' });
      metas[1] = new BlockquoteBaseMeta({ key: 'default2', value: 'foo/bar2' });
      metas[2] = new BlockquoteBaseMeta({ key: 'default3', value: 'foo/bar3' });
    });

    teardown(() => {
      // eslint-disable-next-line arrow-parens
      metas.forEach(meta => {
        const m = meta;
        m.value = null;
        m.key = null;
      });
    });

    test('all cache all meta values', () => {
      metas.forEach(meta => {
        assert.equal(meta.list.length, metas.length);
        assert.operator(meta.list.indexOf(meta.value), '>=', 0);
      });
    });

    test('can be unregistered individually', () => {
      metas[0].value = null;
      assert.equal(metas[0].list.length, 2);
      assert.includeMembers(metas[0].list, ['foo/bar2', 'foo/bar3']);
    });

    test('can access each others value (same type) by key', () => {
      assert.equal(metas[2].byKey('default2'), metas[1].value);
    });

    test('when access to other value (same type) by key, not lose your own value', () => {
      assert.equal(metas[2].byKey('default1'), metas[0].value);
      assert.equal(metas[2].value, 'foo/bar3');
    });
  });

  suite('different-typed metas', () => {
    const metasType = [];

    setup(() => {
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
    });

    teardown(() => {
      metasType.forEach(meta => {
        const metaSetup = meta;
        metaSetup.value = null;
        metaSetup.key = null;
      });
    });

    test('cache their values separately', () => {
      const fooMeta = metasType[0];
      const barMeta = metasType[1];

      assert.notEqual(fooMeta.value, barMeta.value);
      assert.equal(fooMeta.byKey('foobarKey'), fooMeta.value);
      assert.equal(barMeta.byKey('foobarKey'), barMeta.value);
    });

    test('only list values of their type', () => {
      metasType.forEach(meta => {
        assert.equal(meta.list.length, 1);
        assert.equal(meta.list[0], meta.value);
      });
    });
  });

  suite('metas with clashing keys', () => {
    const metaPair = [];

    setup(() => {
      metaPair[0] = new BlockquoteBaseMeta({ key: 'baz', value: 'baz/1' });
      metaPair[1] = new BlockquoteBaseMeta({ key: 'baz', value: 'baz/2' });
    });

    teardown(() => {
      metaPair.forEach(meta => {
        const metaSetup = meta;
        metaSetup.value = null;
        metaSetup.key = null;
      });
    });

    test('let the last value win registration against the key', () => {
      const registeredValue = metaPair[0].byKey(metaPair[0].key);
      const firstValue = metaPair[0].value;
      const secondValue = metaPair[1].value;
      assert.equal(firstValue, secondValue);
      assert.equal(registeredValue, secondValue);
    });
  });
});
