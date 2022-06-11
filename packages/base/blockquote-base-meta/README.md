# blockquote-base-meta

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

| Property     | Modifiers | Description                                                   |
| ------------ | --------- | ------------------------------------------------------------- |
| `key`        |           | Key for Meta                                                  |
| `list`       | readonly  | Returns a list (Array) of the values for that instance `type` |
| `mapList`    | readonly  | Returns a list (Map) for that instance `type`                 |
| `objectList` | readonly  | Returns a list (Object) for that instance `type`              |
| `type`       |           | Type of Meta                                                  |
| `value`      |           | Returns value of instance key and type                        |

## Methods

| Method  | Type          | Description                                                    |
| ------- | ------------- | -------------------------------------------------------------- |
| `byKey` | `(key: *): *` | Returns the value of the provided key for that instance `type` |

## Exports

- BlockquoteBaseMeta
