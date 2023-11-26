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

const BLOCKQUOTE = Symbol.for('BLOCKQUOTE');
const blockquoteBaseMeta = Symbol.for('blockquoteBaseMeta');
const types = Symbol.for('types');
const uuid = Symbol.for('uuid');

const blockquote = window[BLOCKQUOTE] || Object.create(null);
const baseMeta = blockquote[blockquoteBaseMeta] || Object.create(null);

baseMeta[types] = baseMeta[types] || new Map();
baseMeta[uuid] = baseMeta[uuid] || Math.random().toString(36).substring(2, 10);

blockquote[blockquoteBaseMeta] = baseMeta;
window[BLOCKQUOTE] = blockquote;

// https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html
// https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteBaseMeta` is based on Polymer's `iron-meta`, and it is a generic class that you can use for sharing information across the DOM tree.
 * It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern) pattern such that any instance of it has access to the shared information.
 * You can use `BlockquoteBaseMeta` to share whatever you want.
 * The `BlockquoteBaseMeta` instances contain your actual data. The only requirement is that you
 * create them before you try to access them.
 *
 * `BlockquoteBaseMeta` uses [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
 *
 * Map is a collection of keyed data items, just like an Object.
 * But the main difference is that Map allows keys of any type.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/blockquote-base-meta)
 *
 * ### Usage
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 *   const myDefault = new BlockquoteBaseMeta({
 *     key: 'basic',
 *     value: 'foo/bar',
 *   });
 *
 * console.log(myDefault.value); // foo/bar
 * ```
 *
 * ### Keys string - Object
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 *   const myDefault = new BlockquoteBaseMeta({
 *     type: 'one',
 *     key: 'basic',
 *     value: 'foo/bar',
 *   });
 *
 *   console.log(myDefault.objectList); // {basic: 'foo/bar'}
 * ```
 *
 * ### Keys any type - Map
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 *   const keyInfo = { id: 'dsfaskj0' };
 *   const myDefault = new BlockquoteBaseMeta({
 *     type: 'two',
 *     key: keyInfo,
 *     value: 'foo/bar',
 *   });
 *
 * console.log(myDefault.mapList); // {{ id: 'dsfaskj0' }: 'foo/bar'}
 * ```
 */
export class BlockquoteBaseMeta {
  /**
   * @param {{
   *   type?: *,
   *   key?: *,
   *   value?: *
   * }} [options]
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
    return baseMeta[types];
  }

  static get uuid() {
    return baseMeta[uuid];
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
