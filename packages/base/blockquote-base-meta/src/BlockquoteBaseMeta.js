/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

window[Symbol.for('BLOCKQUOTE')] = window[Symbol.for('BLOCKQUOTE')] || Object.create(null);

window[Symbol.for('BLOCKQUOTE')][Symbol.for('blockquoteBaseMeta')] =
  window[Symbol.for('BLOCKQUOTE')][Symbol.for('blockquoteBaseMeta')] || Object.create(null);

const symbolBaseMeta = window[Symbol.for('BLOCKQUOTE')][Symbol.for('blockquoteBaseMeta')];

symbolBaseMeta[Symbol.for('types')] = symbolBaseMeta[Symbol.for('types')] || new Map();

symbolBaseMeta[Symbol.for('uuid')] =
  symbolBaseMeta[Symbol.for('uuid')] || Math.random().toString(36).substr(2, 10);

// https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html
// https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

/**
![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`BlockquoteBaseMeta` is based on Polymer's `iron-meta`, and it is a generic class that you can use
for sharing information across the DOM tree.
It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern) pattern such that any instance
of it has access to the shared information. You can use `BlockquoteBaseMeta` to share whatever you
want.
The `BlockquoteBaseMeta` instances contain your actual data. The only requirement is that you
create them before you try to access them.

`BlockquoteBaseMeta` uses [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

Map is a collection of keyed data items, just like an Object.
But the main difference is that Map allows keys of any type.

## Usage

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

  const myDefault = new BlockquoteBaseMeta({
    key: 'basic',
    value: 'foo/bar',
  });

console.log(myDefault.value); // foo/bar
```

## Keys string - Object

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

  const myDefault = new BlockquoteBaseMeta({
    type: 'one',
    key: 'basic',
    value: 'foo/bar',
  });

  console.log(myDefault.objectList); // {basic: 'foo/bar'}
```

## Keys any type - Map

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

  const keyInfo = { id: 'dsfaskj0' };
  const myDefault = new BlockquoteBaseMeta({
    type: 'two',
    key: keyInfo,
    value: 'foo/bar',
  });

console.log(myDefault.mapList); // {{ id: 'dsfaskj0' }: 'foo/bar'}
```

## Properties

| Property     | Modifiers | Description                                      |
|--------------|-----------|--------------------------------------------------|
| `key`        |           | Key for Meta                                     |
| `list`       | readonly  | Returns a list of the values for that instance `type` |
| `mapList`    | readonly  | Returns a Map list for that instance `type`      |
| `objectList` | readonly  | Returns a Object list for that instance `type`   |
| `type`       |           | Type of Meta                                     |
| `value`      |           | Returns value of instance key and type           |

## Methods

| Method  | Type          | Description                                      |
|---------|---------------|--------------------------------------------------|
| `byKey` | `(key: *): *` | Returns the value of the provided key for that instance `type` |

  ## Exports

  - BlockquoteBaseMeta

*/
export class BlockquoteBaseMeta {
  /**
   * @param {{
   *   type: *,
   *   key: *,
   *   value: *,
   * }=} options
   */
  constructor(options) {
    /**
     * Type of Meta
     */
    this.type = (options && options.type) || 'default';

    /**
     * Key for Meta
     */
    this.key = options && options.key;
    if (options && 'value' in options) {
      this.value = options.value;
    }
  }

  static get types() {
    return symbolBaseMeta[Symbol.for('types')];
  }

  static get uuid() {
    return symbolBaseMeta[Symbol.for('uuid')];
  }

  /**
   * Returns value of instance key and type
   * @return {*}
   */
  get value() {
    const { type } = this;
    const key = this.__key || this.key;
    this.__key = undefined;
    if (type && key) {
      return BlockquoteBaseMeta.types.get(type) && BlockquoteBaseMeta.types.get(type).get(key);
    }
    return undefined;
  }

  /**
   * Sets value to instance type and key
   * @param {*} value
   */
  set value(value) {
    const { type } = this;
    const { key } = this;
    let __type;
    if (type && key) {
      if (BlockquoteBaseMeta.types.get(type) === undefined) {
        BlockquoteBaseMeta.types.set(type, new Map());
      }
      __type = BlockquoteBaseMeta.types.get(type);
      if (value === null) {
        __type.delete(key);
      } else {
        __type.set(key, value);
      }
    }
  }

  /**
   * Returns a list (Array) of the values for that instance `type`
   * @return {Array}
   */
  get list() {
    const { type } = this;
    const itemsType = BlockquoteBaseMeta.types.get(type);
    if (itemsType) {
      return Array.from(itemsType.values());
    }
    return [];
  }

  /**
   * Returns a list (Map) for that instance `type`
   * @return {Map}
   */
  get mapList() {
    const { type } = this;
    const itemsType = BlockquoteBaseMeta.types.get(type);
    if (itemsType) {
      return itemsType;
    }
    return new Map();
  }

  /**
   * Returns a list (Object) for that instance `type`
   * @return {Object}
   */
  get objectList() {
    return Object.fromEntries(this.mapList);
  }

  /**
   * Returns the value of the provided key for that instance `type`
   * @param {*} key
   * @return {*}
   */
  byKey(key) {
    this.__key = key;
    return this.value;
  }
}
