### `src/BaseContextMetaElement.js`:

#### class: `BaseContextMetaElement`

##### Methods

| Name                       | Privacy | Description                                                  | Parameters                           | Return                            | Inherited From |
| -------------------------- | ------- | ------------------------------------------------------------ | ------------------------------------ | --------------------------------- | -------------- |
| `initOrGetContextProvider` |         | Initializes or returns the existing context meta controller. | `contextOrOptions: string \| Object` | `BlockquoteControllerContextMeta` |                |

<details><summary>Private API</summary>

##### Fields

| Name                         | Privacy | Type                                           | Default     | Description                             | Inherited From |
| ---------------------------- | ------- | ---------------------------------------------- | ----------- | --------------------------------------- | -------------- |
| `#controllerBaseContextMeta` | private | `BlockquoteControllerContextMeta \| undefined` | `undefined` | Stores the context controller instance. |                |

</details>

<hr/>

#### Exports

| Kind | Name                     | Declaration            | Module                        | Package |
| ---- | ------------------------ | ---------------------- | ----------------------------- | ------- |
| `js` | `BaseContextMetaElement` | BaseContextMetaElement | src/BaseContextMetaElement.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteControllerContextMeta` is a Lit Reactive Controller that encapsulates the controllers provided by


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

| Name                | Description | Type     |
| ------------------- | ----------- | -------- |
| `contextMetaSymbol` |             | `string` |

<hr/>

#### Exports

| Kind | Name                              | Declaration       | Module                                 | Package |
| ---- | --------------------------------- | ----------------- | -------------------------------------- | ------- |
| `js` | `contextMetaSymbol`               | contextMetaSymbol | src/BlockquoteControllerContextMeta.js |         |
| `js` | `BlockquoteControllerContextMeta` | ContextMeta       | src/BlockquoteControllerContextMeta.js |         |

### `src/index.js`:

#### Exports

| Kind | Name                              | Declaration                     | Module                               | Package |
| ---- | --------------------------------- | ------------------------------- | ------------------------------------ | ------- |
| `js` | `BlockquoteControllerContextMeta` | BlockquoteControllerContextMeta | ./BlockquoteControllerContextMeta.js |         |
| `js` | `BaseContextMetaElement`          | BaseContextMetaElement          | ./BaseContextMetaElement.js          |         |

<hr>

### `src/BaseContextMetaElement.js`:
`BaseContextMetaElement` is inspired by the concept of 'Customized Built-in Elements', focusing on extending native HTML elements like `div` using Lit's features and the Context API.
 This approach simplifies the integration of context providers into a standard elements, enhancing functionality while preserving the core behavior of standard elements. **[All Structural Roles and Their HTML Equivalents](https://www.w3.org/WAI/ARIA/apg/practices/structural-roles/#allstructuralrolesandtheirhtmlequivalents)**
> [Is it possible to make normal dom elements context providers?](https://github.com/lit/lit/discussions/4690)

 <hr>

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/flow-element)

### Features
It incorporates functionality to handle context consumption and presentation as a standard block element.

1. The `:host` CSS rules ensure the element behaves like a block-level element and respects the `hidden` attribute to hide itself.
   ```js
   static styles = [
     css`
       :host {
         display: block;
       }
       :host([hidden]),
       [hidden] {
         display: none !important;
       }
     `,
   ];
   ```

2. The initOrGetContextProvider method allows setting up a context consumer on the element. It creates a new BlockquoteControllerContextMeta if one does not already exist.
   ```js
     initOrGetContextProvider(contextOrOptions = contextMetaSymbol) {
       const ctx =
         contextOrOptions?.context !== undefined
           ? { ...contextOrOptions }
           : { context: contextOrOptions };

       if (!this.#controllerBaseContextMeta) {
         this.#controllerBaseContextMeta = new BlockquoteControllerContextMeta(this, ctx);
       }
       return this.#controllerBaseContextMeta;
     }
   ```

3. Set a default role of 'presentation' to ensure it behaves semantically like a non-interactive container.
   ```js
   connectedCallback() {
     super.connectedCallback?.();
     Object.assign(this, { role: this.role ?? 'presentation' });
   }
   ```

4. The render method includes a <slot>, which allows this element to be a flexible container for any child content, mimicking the behavior of a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content).
   ```js
   render() {
     return html`<slot></slot>`;
   }
   ```


### Usage Example: FlownElement
To demonstrate the utility of BaseContextMetaElement, let's create a derived class called FlownElement:

1. Define Properties: The surface property is declared with reflection, allowing it to influence rendering and context behavior dynamically.
  ```js
  static properties = {
    surface: { reflect: true },
  };
  ```

2. Set Context on Construction: The constructor calls initOrGetContextProvider with a specific context, enabling the element to participate in the context API from its inception.
  ```js
  constructor() {
    super();
    this.surface = undefined;
    this.flowController = this.initOrGetContextProvider(consumerContext);
  }
  ```

3. Update Context Values: The willUpdate lifecycle method updates the context value whenever the surface property changes, ensuring context-sensitive operations react appropriately.
  ```js
  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.flowController?.setValue(this.surface);
    }
  }
  ```


### Usage Example:
Here's how you might use the FlownElement in your HTML:

```html
<flow-element surface="dim">
  <!-- Child content that can consume context from this provider -->
</flow-element>
```

With this setup, FlownElement behaves like a [flow element](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#flow_content) but provides the additional benefit of context management via Lit's context API, allowing you to seamlessly integrate context-sensitive behavior without altering the parent element hierarchy.

