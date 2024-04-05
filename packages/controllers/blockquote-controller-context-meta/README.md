![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteControllerContextMeta` is a Lit Reactive Controller that encapsulates the controllers provided by @lit/context.

**Features:**
- It enables a component to serve as both a provider and a consumer.
- It places the consumer after the first update to reduce the chance of a consumer in LightDOM requesting a context that currently lacks a provider.
- Create a context object using a global symbol (Symbol.for('my-context')).

<hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-context-meta)

### Usage
- [Lit examples context-basics](https://lit.dev/playground/#sample=examples/context-basics)
```js

import { html, LitElement, css } from 'lit';
import { BlockquoteControllerContextMeta } from '@blockquote-web-components/blockquote-controller-context-meta';

export class ProviderEl extends LitElement {
  static styles = css`
    slot {
      display: block;
      border: dashed 4px grey;
      padding: 0px 10px;
    }

    :host {
      display: block;
      border: solid 4px gainsboro;
      padding: 2px;
    }

    h3 {
      margin-top: 0;
    }
  `;

  static properties = {
    data: {},
  };

  constructor() {
    super();
    this._provider = new BlockquoteControllerContextMeta(this, {
      context: 'contextKey', // String used as key in Symbol.for when creating context with createContext(Symbol.for(context))
    });

    this.data = 'Initial';
  }

   // `data` will be provided to any consumer that is in the DOM tree below it.
  set data(value) {
    this._data = value;
    this._provider.setValue(value);
  }

  get data() {
    return this._data;
  }

  render() {
    return html`
      <h3>Provider's data: <code>${this.data}</code></h3>
      <slot></slot>
    `;
  }
}
customElements.define('provider-el', ProviderEl);

export class ConsumerEl extends LitElement {
  _consumer = new BlockquoteControllerContextMeta(this, {
    context: 'contextKey', // String used as key in Symbol.for when creating context with createContext(Symbol.for(context))
    callback: (v) => {
      this.setAttribute('data-callback', v);
    },
  });


  // `providedData` will be populated by the first ancestor element which
  // provides a value for `context`.

  get providedData() {
    return this._consumer.value;
  }

  render() {
    return html`<h3>Consumer data: <code>${this.providedData}</code></h3>
      <hr />
      <slot></slot>`;
  }
}
customElements.define('consumer-el', ConsumerEl);
```

 <hr>


### `src/BlockquoteControllerContextMeta.js`:

#### class: `ContextMeta`

##### Fields

| Name                   | Privacy | Type | Default                                                                                                    | Description | Inherited From |
| ---------------------- | ------- | ---- | ---------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `value`                |         |      |                                                                                                            |             |                |
| `context`              |         |      |                                                                                                            |             |                |
| `initialValue`         |         |      | `initialValue`                                                                                             |             |                |
| `callback`             |         |      | `callback`                                                                                                 |             |                |
| `host`                 |         |      | `host`                                                                                                     |             |                |
| `_contextMetaProvider` |         |      | `new ContextProvider(this.host, {      context: this.context,      initialValue: this.initialValue,    })` |             |                |

##### Methods

| Name            | Privacy | Description | Parameters | Return | Inherited From |
| --------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `setValue`      |         |             | `v, force` |        |                |
| `hostConnected` |         |             |            |        |                |

<hr/>

#### Exports

| Kind | Name                              | Declaration | Module                                 | Package |
| ---- | --------------------------------- | ----------- | -------------------------------------- | ------- |
| `js` | `BlockquoteControllerContextMeta` | ContextMeta | src/BlockquoteControllerContextMeta.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                              | Declaration                     | Module                               | Package |
| ---- | --------------------------------- | ------------------------------- | ------------------------------------ | ------- |
| `js` | `BlockquoteControllerContextMeta` | BlockquoteControllerContextMeta | ./BlockquoteControllerContextMeta.js |         |
