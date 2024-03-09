![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteBaseMeta` is a generic class for sharing information across the DOM tree, inspired by Polymer's [`iron-meta`](https://github.com/PolymerElements/iron-meta/blob/master/iron-meta.js).
It employs the [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern) to allow any instance to access the shared information.

The class instances hold the actual data. They must be created before attempting to access them.

`BlockquoteBaseMeta` uses a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to store the data. Unlike an Object, a Map allows keys of any type.

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/blockquote-base-meta)

#### Usage

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const myDefault = new BlockquoteBaseMeta({
  key: 'basic',
  value: 'foo/bar',
});

console.log(myDefault.byKey('basic')); // foo/bar
```

#### Value Getter - String

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const myDefault = new BlockquoteBaseMeta({
  key: 'basic',
  value: 'foo/bar',
});

console.log(myDefault.value); // foo/bar
```

#### List Getter - Array

The `list` getter returns an array of all values stored in the `BlockquoteBaseMeta` instance.

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const myDefault = new BlockquoteBaseMeta({
  type: 'three',
  key: 'basic',
  value: 'foo/bar',
});

console.log(myDefault.list); // ['foo/bar']
```

#### ObjectList Getter - Object

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const myDefault = new BlockquoteBaseMeta({
  type: 'one',
  key: 'basic',
  value: 'foo/bar',
});

console.log(myDefault.objectList); // {basic: 'foo/bar'}
```

#### MapList Getter - Map

```js
import { BlockquoteBaseMeta } from '@blockquote-web-components/blockquote-base-meta';

const keyInfo = { id: 'dsfaskj0' };
const myDefault = new BlockquoteBaseMeta({
  type: 'two',
  key: keyInfo,
  value: 'foo/bar',
});

console.log(myDefault.mapList); // Map(1) { { id: 'dsfaskj0' } => 'foo/bar' }
```


### `src/BlockquoteBaseMeta.js`:

#### class: `BlockquoteBaseMeta`

##### Static Fields

| Name    | Privacy | Type | Default | Description | Inherited From |
| ------- | ------- | ---- | ------- | ----------- | -------------- |
| `types` |         |      |         |             |                |
| `uuid`  |         |      |         |             |                |

##### Fields

| Name         | Privacy | Type | Default | Description                                                     | Inherited From |
| ------------ | ------- | ---- | ------- | --------------------------------------------------------------- | -------------- |
| `value`      |         |      |         | Sets value to instance type and key                             |                |
| `list`       |         |      |         | Returns a list (Array) of the values for that instance \`type\` |                |
| `mapList`    |         |      |         | Returns a list (Map) for that instance \`type\`                 |                |
| `objectList` |         |      |         | Returns a list (Object) for that instance \`type\`              |                |
| `type`       |         |      | `type`  | Type of Meta                                                    |                |
| `key`        |         |      | `key`   | Key for Meta                                                    |                |

##### Methods

| Name    | Privacy | Description                                                      | Parameters | Return | Inherited From |
| ------- | ------- | ---------------------------------------------------------------- | ---------- | ------ | -------------- |
| `byKey` |         | Returns the value of the provided key for that instance \`type\` | `key: *`   | `*`    |                |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module                    | Package |
| ---- | -------------------- | ------------------ | ------------------------- | ------- |
| `js` | `BlockquoteBaseMeta` | BlockquoteBaseMeta | src/BlockquoteBaseMeta.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                 | Declaration        | Module                  | Package |
| ---- | -------------------- | ------------------ | ----------------------- | ------- |
| `js` | `BlockquoteBaseMeta` | BlockquoteBaseMeta | ./BlockquoteBaseMeta.js |         |
