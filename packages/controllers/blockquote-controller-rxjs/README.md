# BlockquoteControllerRxjs

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`BlockquoteControllerRxjs` is a Reactive Controller.

- Original idea by [Adrian Fâciu](https://github.com/adrianfaciu/rx-lit)
- [observables-litelement](https://adrianfaciu.dev/posts/observables-litelement/)

`BlockquoteControllerRxjs` provides a subscribe method to which pass the property we want to
assign values to and the Observable we want to subscribe.

- It works with [reactive properties](https://lit.dev/docs/components/properties/) and non-reactive properties
- It ignores calls on the same property with the same Observable
- It unsubscribes from the old observable if called again on the same property with a different Observable
- It unsubscribes when the component is removed

## Usage

```js
class BlockquoteControllerRxjsDemo extends LitElement {
  static get is() {
    return 'blockquote-controller-rxjs-demo';
  }

  static get properties() {
    return {
      _pos: {
        type: Object,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.rx = new BlockquoteControllerRxjs(this);
    this._pos = { x: 0, y: 0 };
    this.values$ = fromEvent(window, 'mousemove').pipe(
      map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
    );
  }

  connectedCallback() {
    super.connectedCallback();

    // Property and Observable.
    this.rx.subscribe('_pos', this.values$);
  }

  render() {
    return html`
      <p>The mouse is at:</p>
      <pre>
        x: ${this._pos.x}
        y: ${this._pos.y}
      </pre
      >
    `;
  }
}
```


### `src/BlockquoteControllerRxjs.js`:

#### class: `BlockquoteControllerRxjs`

##### Fields

| Name | Privacy | Type | Default     | Description | Inherited From |
| ---- | ------- | ---- | ----------- | ----------- | -------------- |
|      |         |      | `new Map()` |             |                |

##### Methods

| Name               | Privacy | Description | Parameters         | Return | Inherited From |
| ------------------ | ------- | ----------- | ------------------ | ------ | -------------- |
| `subscribe`        |         |             | `propKey, stream$` |        |                |
| `hostDisconnected` |         |             |                    |        |                |

<hr/>

#### Exports

| Kind | Name                       | Declaration              | Module                          | Package |
| ---- | -------------------------- | ------------------------ | ------------------------------- | ------- |
| `js` | `BlockquoteControllerRxjs` | BlockquoteControllerRxjs | src/BlockquoteControllerRxjs.js |         |

### `index.js`:

#### Exports

| Kind | Name                       | Declaration              | Module                            | Package |
| ---- | -------------------------- | ------------------------ | --------------------------------- | ------- |
| `js` | `BlockquoteControllerRxjs` | BlockquoteControllerRxjs | ./src/BlockquoteControllerRxjs.js |         |
