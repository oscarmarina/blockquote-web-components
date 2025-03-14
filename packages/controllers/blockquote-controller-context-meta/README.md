![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BaseContextMetaElement` simulates the behavior of a `div` using ARIA roles,
preserving standard HTML behaviors while enhancing functionality.

## Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/flow-element)

## Features
- Acts as a structural element that follows HTML flow content rules.
- Provides a default ARIA role (`none`) to avoid unintended semantics.
- Can be used as a wrapper for contextual metadata.

## Accessibility
By default, `BaseContextMetaElement` [assigns the role="none"](https://github.com/w3c/aria/pull/2383),
ensuring that it does not introduce unintended semantics in assistive technologies.
This behavior can be overridden by explicitly setting a different role.

**Related:** [ARIA Structural Roles](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/#allstructuralrolesandtheirhtmlequivalents)

> Inspired by the discussion: [Is it possible to make normal DOM elements context providers?](https://github.com/lit/lit/discussions/4690)
**See Also:** [contextmeta provider directive](https://github.com/oscarmarina/blockquote-web-components/tree/main/packages/controllers/blockquote-controller-context-meta/src/directives/context-meta-provider.js)

With this setup, `BaseContextMetaElement` behaves like a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content).


<hr>


### `src/BaseContextMetaElement.js`:

#### class: `BaseContextMetaElement`, `base-context-meta`

<hr/>

#### Exports

| Kind                        | Name                     | Declaration            | Module                        | Package |
| --------------------------- | ------------------------ | ---------------------- | ----------------------------- | ------- |
| `js`                        | `BaseContextMetaElement` | BaseContextMetaElement | src/BaseContextMetaElement.js |         |
| `custom-element-definition` | `base-context-meta`      | BaseContextMetaElement | src/BaseContextMetaElement.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteControllerContextMeta` is a Lit Reactive Controller that encapsulates the controllers provided by [@lit/context](https://lit.dev/docs/data/context/)

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
      context: Symbol.for('contextKey')
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
    context: Symbol.for('contextKey')
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

| Name                   | Privacy | Type | Default                                                                                       | Description | Inherited From |
| ---------------------- | ------- | ---- | --------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `value`                |         |      |                                                                                               |             |                |
| `context`              |         |      |                                                                                               |             |                |
| `initialValue`         |         |      | `initialValue`                                                                                |             |                |
| `callback`             |         |      | `callback`                                                                                    |             |                |
| `host`                 |         |      | `host`                                                                                        |             |                |
| `_contextMetaProvider` |         |      | `new ContextProvider(this.host, { context: this.context, initialValue: this.initialValue, })` |             |                |

##### Methods

| Name            | Privacy | Description | Parameters | Return | Inherited From |
| --------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `setValue`      |         |             | `v, force` |        |                |
| `hostConnected` |         |             |            |        |                |

<hr/>

#### Variables

| Name                | Description | Type |
| ------------------- | ----------- | ---- |
| `contextMetaSymbol` |             |      |

<hr/>

#### Exports

| Kind | Name                              | Declaration       | Module                                 | Package |
| ---- | --------------------------------- | ----------------- | -------------------------------------- | ------- |
| `js` | `contextMetaSymbol`               | contextMetaSymbol | src/BlockquoteControllerContextMeta.js |         |
| `js` | `BlockquoteControllerContextMeta` | ContextMeta       | src/BlockquoteControllerContextMeta.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                              | Declaration                     | Module                                      | Package |
| ---- | --------------------------------- | ------------------------------- | ------------------------------------------- | ------- |
| `js` | `BlockquoteControllerContextMeta` | BlockquoteControllerContextMeta | ./BlockquoteControllerContextMeta.js        |         |
| `js` | `BaseContextMetaElement`          | BaseContextMetaElement          | ./BaseContextMetaElement.js                 |         |
| `js` | `contextMetaProvider`             | contextMetaProvider             | ./directives/context-meta-provider.js       |         |
| `js` | `cacheContextMetaProvider`        | cacheContextMetaProvider        | ./directives/cache-context-meta-provider.js |         |
| `js` | `contextMetaKeyProvider`          | contextMetaKeyProvider          | ./directives/cache-context-meta-provider.js |         |

### `src/directives/cache-context-meta-provider.js`:

#### Variables

| Name                     | Description | Type |
| ------------------------ | ----------- | ---- |
| `contextMetaKeyProvider` |             |      |

<hr/>

#### Functions

| Name                       | Description | Parameters                  | Return |
| -------------------------- | ----------- | --------------------------- | ------ |
| `cacheContextMetaProvider` |             | `element, contextOrOptions` |        |

<hr/>

#### Exports

| Kind | Name                       | Declaration              | Module                                        | Package |
| ---- | -------------------------- | ------------------------ | --------------------------------------------- | ------- |
| `js` | `contextMetaKeyProvider`   | contextMetaKeyProvider   | src/directives/cache-context-meta-provider.js |         |
| `js` | `cacheContextMetaProvider` | cacheContextMetaProvider | src/directives/cache-context-meta-provider.js |         |

### `src/directives/context-meta-provider.js`:

#### Variables

| Name                  | Description | Type |
| --------------------- | ----------- | ---- |
| `contextMetaProvider` |             |      |

<hr/>

#### Exports

| Kind | Name                  | Declaration         | Module                                  | Package |
| ---- | --------------------- | ------------------- | --------------------------------------- | ------- |
| `js` | `contextMetaProvider` | contextMetaProvider | src/directives/context-meta-provider.js |         |
