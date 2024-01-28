![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview` offers a responsive display using individual HTML files as content with different use cases to be displayed.
It will create a `select` tag with the provided demo HTML files and add the `[data-embedded]` attribute to the loaded body tag.

### Demo

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blockquote-web-components/tree/main/packages/base/blockquote-base-embedded-webview)

### Usage

```html
<blockquote-base-embedded-webview heading="My demo title">
  <template data-src="./base.html" data-option="Base" data-description="base - description"></template>
  <template data-src="./complex.html" data-option="Complex" data-description="complex - description"></template>
</blockquote-base-embedded-webview>
```

## base.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Demo Base</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <style>
      :root {
        font: normal medium/1.25 sans-serif;
      }
      body {
        margin: 0;
      }
      [data-embedded] .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <h1 class="hidden">Heading</h1>
    <p>Base Demo</p>
  </body>
</html>
```


### `src/BlockquoteBaseEmbeddedWebview.js`:

#### class: `BlockquoteBaseEmbeddedWebview`, `blockquote-base-embedded-webview`

##### Fields

| Name                  | Privacy | Type      | Default                                                                                                                                                                                                       | Description                             | Inherited From |
| --------------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------- |
| `_headingLevel`       |         |           |                                                                                                                                                                                                               |                                         |                |
| `_lightDomTpl`        |         |           |                                                                                                                                                                                                               |                                         |                |
| `_headerTpl`          |         |           |                                                                                                                                                                                                               |                                         |                |
| `_headingTpl`         |         |           |                                                                                                                                                                                                               |                                         |                |
| `_navigationDemosTpl` |         |           |                                                                                                                                                                                                               |                                         |                |
| `_selectTpl`          |         |           |                                                                                                                                                                                                               |                                         |                |
| `_externalLinkTpl`    |         |           |                                                                                                                                                                                                               |                                         |                |
| `_descriptionTpl`     |         |           |                                                                                                                                                                                                               |                                         |                |
| `_readDataPosTpl`     |         |           |                                                                                                                                                                                                               |                                         |                |
| `_screenSizeTpl`      |         |           |                                                                                                                                                                                                               |                                         |                |
| `_mainTpl`            |         |           |                                                                                                                                                                                                               |                                         |                |
| `_embeddedSlotTpl`    |         |           |                                                                                                                                                                                                               |                                         |                |
| `selected`            | public  | `number`  | `0`                                                                                                                                                                                                           | Index of currently srcset file          |                |
| `screenSizeSelected`  | public  | `number`  | `0`                                                                                                                                                                                                           | Index of currently screen size selected |                |
| `headingLevel`        | public  | `number`  | `1`                                                                                                                                                                                                           | Heading level from 1 to 6               |                |
| `heading`             | public  | `string`  | `''`                                                                                                                                                                                                          | The heading of the webview.             |                |
| `__resetResizing`     |         | `boolean` | `false`                                                                                                                                                                                                       |                                         |                |
| `__selectArrow`       |         |           | `` html`<svg  aria-hidden="true"  viewBox="0 0 24 24"  stroke-width="2"  stroke="currentcolor"  fill="none"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>` `` |                                         |                |
| `__readDataPos`       |         | `object`  | `{ x: '0', y: '0', resizing: false, cursor: '' }`                                                                                                                                                             |                                         |                |
| `limitHeight`         | public  | `boolean` | `false`                                                                                                                                                                                                       | Limit height to 100% available          |                |
| `_sources`            |         | `array`   | `[{ src: '', option: '', description: '' }]`                                                                                                                                                                  |                                         |                |
| `_embeddedResizeRef`  |         |           |                                                                                                                                                                                                               |                                         |                |

##### Methods

| Name             | Privacy | Description | Parameters   | Return | Inherited From |
| ---------------- | ------- | ----------- | ------------ | ------ | -------------- |
| `_updateSize`    |         |             | `{ detail }` |        |                |
| `_litHtmlRender` |         |             |              |        |                |
| `_onChangeFile`  |         |             | `{ target }` |        |                |

##### Attributes

| Name                   | Field              | Inherited From |
| ---------------------- | ------------------ | -------------- |
| `heading`              | heading            |                |
| `selected`             | selected           |                |
| `heading-level`        | headingLevel       |                |
| `screen-size-selected` | screenSizeSelected |                |
| `limit-height`         | limitHeight        |                |

<hr/>

#### Exports

| Kind | Name                            | Declaration                   | Module                                | Package |
| ---- | ------------------------------- | ----------------------------- | ------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebview` | BlockquoteBaseEmbeddedWebview | src/BlockquoteBaseEmbeddedWebview\.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-element` wraps an `iframe` or `object` and shows it through light dom.


### `src/BlockquoteBaseEmbeddedWebviewElement.js`:

#### class: `BlockquoteBaseEmbeddedWebviewElement`, `blockquote-base-embedded-webview-element`

##### Fields

| Name            | Privacy | Type     | Default    | Description                                               | Inherited From |
| --------------- | ------- | -------- | ---------- | --------------------------------------------------------- | -------------- |
| `_lightDomTpl`  |         |          |            |                                                           |                |
| `_loadResource` |         |          |            |                                                           |                |
| `_embeddedTpl`  |         |          |            |                                                           |                |
| `embeddedTitle` | public  | `string` | `''`       | The title attribute on an \<element> to label its content |                |
| `src`           | public  | `string` | `''`       | The URL of the page to embed                              |                |
| `type`          | public  | `string` | `'iframe'` | The type of the tag to embed - iframe or object           |                |

##### Methods

| Name             | Privacy | Description | Parameters   | Return | Inherited From |
| ---------------- | ------- | ----------- | ------------ | ------ | -------------- |
| `_litHtmlRender` |         |             |              |        |                |
| `_fetch`         |         |             | `resource`   |        |                |
| `_onLoadElement` |         |             | `{ target }` |        |                |

##### Attributes

| Name             | Field         | Inherited From |
| ---------------- | ------------- | -------------- |
| `embedded-title` | embeddedTitle |                |
| `src`            | src           |                |
| `type`           | type          |                |

<hr/>

#### Exports

| Kind | Name                                   | Declaration                          | Module                                      | Package |
| ---- | -------------------------------------- | ------------------------------------ | ------------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebviewElement` | BlockquoteBaseEmbeddedWebviewElement | src/BlockquoteBaseEmbeddedWebviewElement.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-resize`


### `src/BlockquoteBaseEmbeddedWebviewResize.js`:

#### class: `BlockquoteBaseEmbeddedWebviewResize`, `blockquote-base-embedded-webview-resize`

##### Fields

| Name                           | Privacy | Type     | Default | Description | Inherited From |
| ------------------------------ | ------- | -------- | ------- | ----------- | -------------- |
| `_resizersTpl`                 |         |          |         |             |                |
| `_cursor`                      |         | `string` | `''`    |             |                |
| `_createResizerLeft`           |         |          |         |             |                |
| `_createResizerRight`          |         |          |         |             |                |
| `_createResizerBottom`         |         |          |         |             |                |
| `_createResizerBottomLeft`     |         |          |         |             |                |
| `_createResizerBottomRight`    |         |          |         |             |                |
| `_getBoundingClientRectWidth`  |         | `number` | `0`     |             |                |
| `_getBoundingClientRectHeight` |         | `number` | `0`     |             |                |

##### Methods

| Name                            | Privacy | Description | Parameters                           | Return | Inherited From |
| ------------------------------- | ------- | ----------- | ------------------------------------ | ------ | -------------- |
| `_doubleclickForCssInitialSize` |         |             |                                      |        |                |
| `_createResizer`                |         |             | `DOMRect: !string, ev: PointerEvent` |        |                |
| `_resizer`                      |         |             | `{ detail }`                         |        |                |
| `_dispatchResizeEvent`          |         |             |                                      |        |                |
| `_getBoundingClientRect`        |         |             | `DOMRect: !string`                   |        |                |

##### Events

| Name            | Type | Description                                  | Inherited From |
| --------------- | ---- | -------------------------------------------- | -------------- |
| `webviewresize` |      | Raised when the element's dimensions changes |                |

<hr/>

#### Exports

| Kind | Name                                  | Declaration                         | Module                                     | Package |
| ---- | ------------------------------------- | ----------------------------------- | ------------------------------------------ | ------- |
| `js` | `BlockquoteBaseEmbeddedWebviewResize` | BlockquoteBaseEmbeddedWebviewResize | src/BlockquoteBaseEmbeddedWebviewResize.js |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-size` provides a list of ideal screen sizes for responsive designs.
<br>

```html
<blockquote-base-embedded-webview-size
  screen-sizes="[
   { width: 360, height: 640, id: '360x640' },
   { width: 360, height: 800, id: '360x800' },
   { width: 414, height: 896, id: '414x896' },
   { width: 768, height: 1024, id: '768x1024' },
   { width: 810, height: 1080, id: '810x1080' },
   { width: 1280, height: 800, id: '1280x800' },
   { width: 1366, height: 768, id: '1366x768' },
   { width: 1536, height: 864, id: '1536x864' },
   { width: 1920, height: 1080, id: '1920x1080' },
  ]"
></blockquote-base-embedded-webview-size>
```


### `src/BlockquoteBaseEmbeddedWebviewSize.js`:

#### class: `BlockquoteBaseEmbeddedWebviewSize`, `blockquote-base-embedded-webview-size`

##### Fields

| Name                       | Privacy | Type      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Description                                                   | Inherited From |
| -------------------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------- |
| `selectedSize`             |         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                               |                |
| `selectedDetail`           |         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                               |                |
| `computedStyleWidth`       |         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                               |                |
| `_toolbarTpl`              |         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                               |                |
| `_visualTextTpl`           |         |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                               |                |
| `showOverflowSize`         | public  | `boolean` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Show screen size options that are too large for the container |                |
| `selected`                 | public  | `number`  | `0`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | The screen size option selected                               |                |
| `disabledSelectedSizeText` | public  | `boolean` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | If true, selected size text is disabled                       |                |
| `screenSizes`              | public  | `array`   | `[      { width: 360, height: 640, id: '360x640' },      { width: 360, height: 800, id: '360x800' },      { width: 414, height: 896, id: '414x896' },      { width: 768, height: 1024, id: '768x1024' },      { width: 810, height: 1080, id: '810x1080' },      { width: 1280, height: 800, id: '1280x800' },      { width: 1366, height: 768, id: '1366x768' },      { width: 1536, height: 864, id: '1536x864' },      { width: 1920, height: 1080, id: '1920x1080' },    ]` | The screen size options to display                            |                |
| `widthInPercent`           | public  | `boolean` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Percentage value for the width                                |                |

##### Methods

| Name           | Privacy | Description | Parameters | Return | Inherited From |
| -------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `_onResize`    |         |             | `ev`       |        |                |
| `_setSelected` |         |             | `ev`       |        |                |

##### Attributes

| Name                          | Field                    | Inherited From |
| ----------------------------- | ------------------------ | -------------- |
| `screen-sizes`                | screenSizes              |                |
| `width-in-percent`            | widthInPercent           |                |
| `show-overflow-size`          | showOverflowSize         |                |
| `disabled-selected-size-text` | disabledSelectedSizeText |                |
| `selected`                    | selected                 |                |

<hr/>

#### Exports

| Kind | Name                                | Declaration                       | Module                                   | Package |
| ---- | ----------------------------------- | --------------------------------- | ---------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebviewSize` | BlockquoteBaseEmbeddedWebviewSize | src/BlockquoteBaseEmbeddedWebviewSize.js |         |

### `src/styles/blockquote-base-embedded-webview-element-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                            | Package |
| ---- | -------- | ----------- | ----------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-element-styles.css.js |         |

### `src/styles/blockquote-base-embedded-webview-resize-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                           | Package |
| ---- | -------- | ----------- | ---------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-resize-styles.css.js |         |

### `src/styles/blockquote-base-embedded-webview-size-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                         | Package |
| ---- | -------- | ----------- | -------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-size-styles.css.js |         |

### `src/styles/blockquote-base-embedded-webview-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                    | Package |
| ---- | -------- | ----------- | --------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-styles.css.js |         |

### `define/blockquote-base-embedded-webview-element.js`:

#### Exports

| Kind                        | Name                                       | Declaration                          | Module                                       | Package |
| --------------------------- | ------------------------------------------ | ------------------------------------ | -------------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-element` | BlockquoteBaseEmbeddedWebviewElement | /src/BlockquoteBaseEmbeddedWebviewElement.js |         |

### `define/blockquote-base-embedded-webview-resize.js`:

#### Exports

| Kind                        | Name                                      | Declaration                         | Module                                      | Package |
| --------------------------- | ----------------------------------------- | ----------------------------------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-resize` | BlockquoteBaseEmbeddedWebviewResize | /src/BlockquoteBaseEmbeddedWebviewResize.js |         |

### `define/blockquote-base-embedded-webview-size.js`:

#### Exports

| Kind                        | Name                                    | Declaration                       | Module                                    | Package |
| --------------------------- | --------------------------------------- | --------------------------------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-size` | BlockquoteBaseEmbeddedWebviewSize | /src/BlockquoteBaseEmbeddedWebviewSize.js |         |

### `define/blockquote-base-embedded-webview.js`:

#### Exports

| Kind                        | Name                               | Declaration                   | Module                                 | Package |
| --------------------------- | ---------------------------------- | ----------------------------- | -------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview` | BlockquoteBaseEmbeddedWebview | /src/BlockquoteBaseEmbeddedWebview\.js |         |

### `index.js`:

#### Exports

| Kind | Name                                   | Declaration                          | Module                                        | Package |
| ---- | -------------------------------------- | ------------------------------------ | --------------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebview`        | BlockquoteBaseEmbeddedWebview        | ./src/BlockquoteBaseEmbeddedWebview\.js       |         |
| `js` | `BlockquoteBaseEmbeddedWebviewSize`    | BlockquoteBaseEmbeddedWebviewSize    | ./src/BlockquoteBaseEmbeddedWebviewSize.js    |         |
| `js` | `BlockquoteBaseEmbeddedWebviewResize`  | BlockquoteBaseEmbeddedWebviewResize  | ./src/BlockquoteBaseEmbeddedWebviewResize.js  |         |
| `js` | `BlockquoteBaseEmbeddedWebviewElement` | BlockquoteBaseEmbeddedWebviewElement | ./src/BlockquoteBaseEmbeddedWebviewElement.js |         |
