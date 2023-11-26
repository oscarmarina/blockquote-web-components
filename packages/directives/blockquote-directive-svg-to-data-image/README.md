# blockquoteDirectiveSvgToDataImage

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

This directive receives an `<svg>` HTML element from a [Template Result](https://lit.dev/docs/api/templates/#TemplateResult)
and returns it as data URI (data:image/svg+xml).

> [svg-templates](https://lit.dev/tutorials/svg-templates/#1)

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/directives/blockquote-directive-svg-to-data-image)

### Usage

### Simple SVG

```js
get _svgTag() {
  return html` <svg
    xmlns="htt://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
    height="100px"
    width="100px"
  >
    <!-- ... (SVG content) ... -->
  </svg>`;
}

render() {
  return html`
    <div
      aria-hidden="true"
      style="background-image: url('${blockquoteDirectiveSvgToDataImage(this._svgTag)}');"
    ></div>
  `;
}
```

### Complex SVG

```js
get _bgTpl() {
  return svg` <circle fill="${this.bgFill}" cx="100" cy="100" r="100"></circle> `;
}

get _shapeTpl() {
  return svg`
    <g fill="#fff">
      <!-- ... (SVG content) ... -->
    </g>
  `;
}

get _svgTag() {
  return html`<svg
    id="${Math.random().toString(36).substring(2, 10)}"
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    focusable="false"
    role="presentation"
    viewBox="0 0 200 200"
  >
    ${this._bgTpl} ${this._shapeTpl}
  </svg>`;
}

render() {
  return html`
    <div
      aria-hidden="true"
      style="background-image:var(--bgUrl, url('${blockquoteDirectiveSvgToDataImage(this._svgTag)}'));"
    ></div>
  `;
}
```


### `src/BlockquoteDirectiveSvgToDataImage.js`:

#### Variables

| Name                                | Description | Type |
| ----------------------------------- | ----------- | ---- |
| `blockquoteDirectiveSvgToDataImage` |             |      |

<hr/>

#### Exports

| Kind | Name                                | Declaration                       | Module                                   | Package |
| ---- | ----------------------------------- | --------------------------------- | ---------------------------------------- | ------- |
| `js` | `README`                            | README                            | src/BlockquoteDirectiveSvgToDataImage.js |         |
| `js` | `blockquoteDirectiveSvgToDataImage` | blockquoteDirectiveSvgToDataImage | src/BlockquoteDirectiveSvgToDataImage.js |         |

### `index.js`:

#### Exports

| Kind | Name                                | Declaration                       | Module                                     | Package |
| ---- | ----------------------------------- | --------------------------------- | ------------------------------------------ | ------- |
| `js` | `blockquoteDirectiveSvgToDataImage` | blockquoteDirectiveSvgToDataImage | ./src/BlockquoteDirectiveSvgToDataImage.js |         |
