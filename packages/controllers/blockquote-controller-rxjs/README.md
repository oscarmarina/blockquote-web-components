# BlockquoteControllerRxjs

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

### Connect Observables with Lit

`BlockquoteControllerRxjs` is a Lit Reactive Controller that subscribes to an
[RxJS 9](https://github.com/ReactiveX/rxjs) / Web Platform `Observable` while the host is connected,
stores the latest emitted value and requests a host update when it changes.

- One controller per stream, the latest value is available (typed) in `value`
- It subscribes on `hostConnected` and unsubscribes (`AbortSignal`) on `hostDisconnected`,
  so it re-subscribes if the element is moved in the DOM
- The stream can be replaced at any time by assigning `stream$`; the previous one is unsubscribed
- Repeated values (`Object.is`) do not trigger an update
- Optional `callback`, `onError` and `onComplete` handlers

Original idea by [Adrian Fâciu](https://github.com/adrianfaciu/rx-lit) -
[observables-litelement](https://adrianfaciu.dev/posts/observables-litelement/)

<hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-rxjs)

### Usage

**`new BlockquoteControllerRxjs(this, {stream$, initialValue?, callback?, onError?, onComplete?})`**

```javascript
import {html, LitElement} from 'lit';
import {fromEventPattern} from 'rxjs/from-event-pattern';
import {map} from 'rxjs/map';
import {BlockquoteControllerRxjs} from '@blockquote-web-components/blockquote-controller-rxjs';

const mousemove$ = fromEventPattern(
  (handler) => window.addEventListener('mousemove', handler),
  (handler) => window.removeEventListener('mousemove', handler)
);

class BlockquoteControllerRxjsDemo extends LitElement {
  pos = new BlockquoteControllerRxjs(this, {
    stream$: mousemove$[map](({clientX, clientY}) => ({x: clientX, y: clientY})),
    initialValue: {x: 0, y: 0},
  });

  render() {
    const {x, y} = this.pos.value;
    return html`
      <p>The mouse is at:</p>
      <pre>x: ${x} y: ${y}</pre>
    `;
  }
}
```

Use `callback` to copy the value into a reactive property when you need it
in `willUpdate` / `updated`:

```javascript
new BlockquoteControllerRxjs(this, {
  stream$,
  callback: (value) => (this._pos = value),
});
```

<hr>


### `src/BlockquoteControllerRxjs.ts`:

#### class: `BlockquoteControllerRxjs`

##### Fields

| Name         | Privacy | Type                                    | Default        | Description                                                               | Inherited From |
| ------------ | ------- | --------------------------------------- | -------------- | ------------------------------------------------------------------------- | -------------- |
| `host`       |         | `THost`                                 |                |                                                                           |                |
| `value`      |         | `T \| I`                                | `initialValue` | Latest value emitted by the stream (or \`initialValue\`).                 |                |
| `error`      |         | `unknown`                               |                | Last error emitted by the stream, \`undefined\` otherwise.                |                |
| `completed`  |         | `boolean`                               | `false`        | \`true\` once the current stream has completed.                           |                |
| `callback`   |         | `(value: T) => void \| undefined`       | `callback`     | Called with every new (distinct) value emitted by the stream.             |                |
| `onError`    |         | `(error: unknown) => void \| undefined` | `onError`      | Called when the stream errors (falls back to \`globalThis.reportError\`). |                |
| `onComplete` |         | `() => void \| undefined`               | `onComplete`   | Called when the stream completes.                                         |                |
| `stream$`    |         | `ObservableLike<T>`                     |                | The current Observable. Assigning a different one re-subscribes.          |                |
| `subscribed` |         | `boolean`                               |                | \`true\` while there is an active subscription.                           |                |

##### Methods

| Name               | Privacy | Description                                             | Parameters | Return | Inherited From |
| ------------------ | ------- | ------------------------------------------------------- | ---------- | ------ | -------------- |
| `subscribe`        |         | Subscribes to \`stream$\`. No-op if already subscribed. |            | `void` |                |
| `unsubscribe`      |         | Aborts the current subscription, if any.                |            | `void` |                |
| `hostConnected`    |         |                                                         |            | `void` |                |
| `hostDisconnected` |         |                                                         |            | `void` |                |

<details><summary>Private API</summary>

##### Fields

| Name               | Privacy | Type                           | Default   | Description | Inherited From |
| ------------------ | ------- | ------------------------------ | --------- | ----------- | -------------- |
| `#stream$`         | private | `ObservableLike<T>`            | `stream$` |             |                |
| `#abortController` | private | `AbortController \| undefined` |           |             |                |

##### Methods

| Name      | Privacy | Description | Parameters                         | Return | Inherited From |
| --------- | ------- | ----------- | ---------------------------------- | ------ | -------------- |
| `#settle` | private |             | `abortController: AbortController` | `void` |                |

</details>

<hr/>

#### Exports

| Kind | Name                       | Declaration              | Module                          | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------- | ------- |
| `js` | `BlockquoteControllerRxjs` | BlockquoteControllerRxjs | src/BlockquoteControllerRxjs.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                              | Declaration                     | Module                        | Package |
| ---- | --------------------------------- | ------------------------------- | ----------------------------- | ------- |
| `js` | `BlockquoteControllerRxjs`        | BlockquoteControllerRxjs        | ./BlockquoteControllerRxjs.js |         |
| `js` | `BlockquoteControllerRxjsOptions` | BlockquoteControllerRxjsOptions | ./BlockquoteControllerRxjs.js |         |
| `js` | `ObservableLike`                  | ObservableLike                  | ./BlockquoteControllerRxjs.js |         |
| `js` | `ObserverLike`                    | ObserverLike                    | ./BlockquoteControllerRxjs.js |         |
