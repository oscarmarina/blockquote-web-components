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

const globalThisOrWindow = globalThis /* c8 ignore next */ || window;

const BLOCKQUOTE = Symbol.for('BLOCKQUOTE');
const blockquoteBaseMeta = Symbol.for('blockquoteBaseMeta');
const types = Symbol.for('types');
const uuid = Symbol.for('uuid');

const blockquote = globalThisOrWindow[BLOCKQUOTE] || Object.create(null);
const baseMeta = blockquote[blockquoteBaseMeta] || Object.create(null);

baseMeta[types] = baseMeta[types] || new Map();
baseMeta[uuid] = baseMeta[uuid] || Math.random().toString(36).substring(2, 10);

blockquote[blockquoteBaseMeta] = baseMeta;
globalThisOrWindow[BLOCKQUOTE] = blockquote;

// https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch13s15.html
// https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * `BlockquoteBaseMeta` is a generic class for sharing information across the DOM tree, inspired by Polymer's [`iron-meta`](https://github.com/PolymerElements/iron-meta/blob/master/iron-meta.js).
 * It employs the [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern) to allow any instance to access the shared information.
 *
 * The class instances hold the actual data. They must be created before attempting to access them.
 *
 * `BlockquoteBaseMeta` uses a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to store the data. Unlike an Object, a Map allows keys of any type.
 *
 * ### Demo
 *
 * [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/blockquote-base-meta)
 *
 * #### Usage
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 * const myDefault = new BlockquoteBaseMeta({
 *   key: 'basic',
 *   value: 'foo/bar',
 * });
 *
 * console.log(myDefault.byKey('basic')); // foo/bar
 * ```
 *
 * #### Value Getter - String
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 * const myDefault = new BlockquoteBaseMeta({
 *   key: 'basic',
 *   value: 'foo/bar',
 * });
 *
 * console.log(myDefault.value); // foo/bar
 * ```
 *
 * #### List Getter - Array
 *
 * The `list` getter returns an array of all values stored in the `BlockquoteBaseMeta` instance.
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 * const myDefault = new BlockquoteBaseMeta({
 *   type: 'three',
 *   key: 'basic',
 *   value: 'foo/bar',
 * });
 *
 * console.log(myDefault.list); // ['foo/bar']
 * ```
 *
 * #### ObjectList Getter - Object
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 * const myDefault = new BlockquoteBaseMeta({
 *   type: 'one',
 *   key: 'basic',
 *   value: 'foo/bar',
 * });
 *
 * console.log(myDefault.objectList); // {basic: 'foo/bar'}
 * ```
 *
 * #### MapList Getter - Map
 *
 * ```js
 * import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';
 *
 * const keyInfo = { id: 'dsfaskj0' };
 * const myDefault = new BlockquoteBaseMeta({
 *   type: 'two',
 *   key: keyInfo,
 *   value: 'foo/bar',
 * });
 *
 * console.log(myDefault.mapList); // Map(1) { { id: 'dsfaskj0' } => 'foo/bar' }
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
  constructor({type = 'default', key, value} = {}) {
    /**
     * Type of Meta
     */
    this.type = type;

    /**
     * Key for Meta
     */
    this.key = key;
    if (value != null) {
      this.value = value;
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
    const key = this.__key || this.key;
    this.__key = undefined;
    const typeMap = BlockquoteBaseMeta.types.get(this.type);
    return typeMap?.get(key);
  }

  /**
   * Sets value to instance type and key
   * @param {*} value
   */

  set value(value) {
    if (this.type && this.key) {
      const typeMap = BlockquoteBaseMeta.types.get(this.type) ?? new Map();
      BlockquoteBaseMeta.types.set(this.type, typeMap);
      if (value != null) {
        typeMap.set(this.key, value);
      } else {
        typeMap.delete(this.key);
      }
    }
  }

  /**
   * Returns a list (Array) of the values for that instance `type`
   * @return {Array}
   */
  get list() {
    return Array.from(this.mapList.values());
  }

  /**
   * Returns a list (Map) for that instance `type`
   * @return {Map}
   */
  get mapList() {
    return BlockquoteBaseMeta.types.get(this.type) ?? new Map();
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
