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
    <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content" />
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


### `src/BlockquoteBaseEmbeddedWebview.ts`:

#### class: `BlockquoteBaseEmbeddedWebview`, `blockquote-base-embedded-webview`

##### Fields

| Name                  | Privacy | Type                           | Default | Description                             | Inherited From |
| --------------------- | ------- | ------------------------------ | ------- | --------------------------------------- | -------------- |
| `heading`             | public  | `string`                       | `''`    | The heading of the webview.             |                |
| `selected`            | public  | `number`                       | `0`     | Index of currently srcset file          |                |
| `headingLevel`        | public  | `number`                       | `1`     | Heading level from 1 to 6               |                |
| `screenSizeSelected`  | public  | `number`                       | `0`     | Index of currently screen size selected |                |
| `limitHeight`         | public  | `boolean`                      | `false` | Limit height to 100% available          |                |
| `embedded`            |         | `Element \| null \| undefined` |         |                                         |                |
| `_updateSize`         |         |                                |         |                                         |                |
| `_headingLevel`       |         |                                |         |                                         |                |
| `_lightDomTpl`        |         |                                |         |                                         |                |
| `_headerTpl`          |         |                                |         |                                         |                |
| `_headingTpl`         |         |                                |         |                                         |                |
| `_navigationDemosTpl` |         |                                |         |                                         |                |
| `_selectTpl`          |         |                                |         |                                         |                |
| `_externalLinkTpl`    |         |                                |         |                                         |                |
| `_descriptionTpl`     |         |                                |         |                                         |                |
| `_readDataPosTpl`     |         |                                |         |                                         |                |
| `_screenSizeTpl`      |         |                                |         |                                         |                |
| `_mainTpl`            |         |                                |         |                                         |                |
| `_embeddedSlotTpl`    |         |                                |         |                                         |                |

##### Methods

| Name             | Privacy | Description | Parameters        | Return | Inherited From |
| ---------------- | ------- | ----------- | ----------------- | ------ | -------------- |
| `_litHtmlRender` |         |             |                   |        |                |
| `_onChangeFile`  |         |             | `{target}: Event` |        |                |

##### Attributes

| Name                   | Field              | Inherited From |
| ---------------------- | ------------------ | -------------- |
| `heading`              | heading            |                |
| `selected`             | selected           |                |
| `heading-level`        | headingLevel       |                |
| `screen-size-selected` | screenSizeSelected |                |
| `limit-height`         | limitHeight        |                |

<details><summary>Private API</summary>

##### Fields

| Name                 | Privacy | Type                  | Default                                                                                                                                                                                                  | Description | Inherited From |
| -------------------- | ------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `_sources`           | private | `SourceItem[]`        | `[{src: '', option: '', description: ''}]`                                                                                                                                                               |             |                |
| `_src`               | private | `string \| undefined` |                                                                                                                                                                                                          |             |                |
| `_controlBottom`     | private | `number \| undefined` |                                                                                                                                                                                                          |             |                |
| `__resetResizing`    | private | `boolean`             | `false`                                                                                                                                                                                                  |             |                |
| `__selectArrow`      | private | `TemplateResult`      | `` html` <svg aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" stroke="currentcolor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <polyline points="6 9 12 15 18 9" /> </svg> ` `` |             |                |
| `__readDataPos`      | private | `object`              | `{x: '0', y: '0', resizing: false, cursor: ''}`                                                                                                                                                          |             |                |
| `_embeddedResizeRef` | private |                       |                                                                                                                                                                                                          |             |                |

</details>

<hr/>

#### Exports

| Kind | Name                            | Declaration                   | Module                                | Package |
| ---- | ------------------------------- | ----------------------------- | ------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebview` | BlockquoteBaseEmbeddedWebview | src/BlockquoteBaseEmbeddedWebview\.ts |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-element` wraps an `iframe` or `object` and shows it through light dom.


### `src/BlockquoteBaseEmbeddedWebviewElement.ts`:

#### class: `BlockquoteBaseEmbeddedWebviewElement`, `blockquote-base-embedded-webview-element`

##### Fields

| Name             | Privacy | Type     | Default    | Description                                               | Inherited From |
| ---------------- | ------- | -------- | ---------- | --------------------------------------------------------- | -------------- |
| `embeddedTitle`  | public  | `string` | `''`       | The title attribute on an \<element> to label its content |                |
| `src`            | public  | `string` | `''`       | The URL of the page to embed                              |                |
| `type`           | public  | `string` | `'iframe'` | The type of the tag to embed - iframe or object           |                |
| `_lightDomTpl`   |         |          |            |                                                           |                |
| `_loadResource`  |         |          |            |                                                           |                |
| `_embeddedTpl`   |         |          |            |                                                           |                |
| `_onLoadElement` |         |          |            |                                                           |                |

##### Methods

| Name             | Privacy | Description | Parameters         | Return | Inherited From |
| ---------------- | ------- | ----------- | ------------------ | ------ | -------------- |
| `_litHtmlRender` |         |             |                    |        |                |
| `_fetch`         |         |             | `resource: string` |        |                |

##### Attributes

| Name             | Field         | Inherited From |
| ---------------- | ------------- | -------------- |
| `embedded-title` | embeddedTitle |                |
| `src`            | src           |                |
| `type`           | type          |                |

<details><summary>Private API</summary>

##### Fields

| Name               | Privacy | Type                       | Default | Description | Inherited From |
| ------------------ | ------- | -------------------------- | ------- | ----------- | -------------- |
| `_embeddedElement` | private | `HTMLElement \| undefined` |         |             |                |

</details>

<hr/>

#### Exports

| Kind | Name                                   | Declaration                          | Module                                      | Package |
| ---- | -------------------------------------- | ------------------------------------ | ------------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebviewElement` | BlockquoteBaseEmbeddedWebviewElement | src/BlockquoteBaseEmbeddedWebviewElement.ts |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-resize`


### `src/BlockquoteBaseEmbeddedWebviewResize.ts`:

#### class: `BlockquoteBaseEmbeddedWebviewResize`, `blockquote-base-embedded-webview-resize`

##### Fields

| Name                            | Privacy | Type | Default | Description | Inherited From |
| ------------------------------- | ------- | ---- | ------- | ----------- | -------------- |
| `_resizersTpl`                  |         |      |         |             |                |
| `_doubleclickForCssInitialSize` |         |      |         |             |                |

##### Methods

| Name                     | Privacy | Description | Parameters                                           | Return | Inherited From |
| ------------------------ | ------- | ----------- | ---------------------------------------------------- | ------ | -------------- |
| `_createResizer`         |         |             | `resizeDirection: ResizeDirection, ev: PointerEvent` |        |                |
| `_resize`                |         |             | `{detail}: {detail: ResizeDetail}`                   |        |                |
| `_dispatchResizeEvent`   |         |             |                                                      |        |                |
| `_getBoundingClientRect` |         |             | `rectProp: DOMRectProp`                              |        |                |

##### Events

| Name            | Type | Description                                  | Inherited From |
| --------------- | ---- | -------------------------------------------- | -------------- |
| `webviewresize` |      | Raised when the element's dimensions changes |                |

<details><summary>Private API</summary>

##### Fields

| Name                           | Privacy | Type                               | Default | Description | Inherited From |
| ------------------------------ | ------- | ---------------------------------- | ------- | ----------- | -------------- |
| `_cursor`                      | private | `string`                           | `''`    |             |                |
| `_resizeDirection`             | private | `ResizeDirection \| undefined`     |         |             |                |
| `_getBoundingClientRectWidth`  | private | `number`                           | `0`     |             |                |
| `_getBoundingClientRectHeight` | private | `number`                           | `0`     |             |                |
| `rect`                         | private | `HTMLElement \| null \| undefined` |         |             |                |
| `bottomRightResizerElement`    | private | `HTMLElement \| null \| undefined` |         |             |                |
| `bottomLeftResizerElement`     | private | `HTMLElement \| null \| undefined` |         |             |                |
| `rightResizerElement`          | private | `HTMLElement \| null \| undefined` |         |             |                |
| `leftResizerElement`           | private | `HTMLElement \| null \| undefined` |         |             |                |
| `bottomResizerElement`         | private | `HTMLElement \| null \| undefined` |         |             |                |
| `_createResizerLeft`           | private | `(ev: PointerEvent) => void`       |         |             |                |
| `_createResizerRight`          | private | `(ev: PointerEvent) => void`       |         |             |                |
| `_createResizerBottom`         | private | `(ev: PointerEvent) => void`       |         |             |                |
| `_createResizerBottomLeft`     | private | `(ev: PointerEvent) => void`       |         |             |                |
| `_createResizerBottomRight`    | private | `(ev: PointerEvent) => void`       |         |             |                |

</details>

<hr/>

#### Exports

| Kind | Name                                  | Declaration                         | Module                                     | Package |
| ---- | ------------------------------------- | ----------------------------------- | ------------------------------------------ | ------- |
| `js` | `BlockquoteBaseEmbeddedWebviewResize` | BlockquoteBaseEmbeddedWebviewResize | src/BlockquoteBaseEmbeddedWebviewResize.ts |         |

![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

`blockquote-base-embedded-webview-size` provides a list of ideal screen sizes for responsive designs.
<br>

```html
<blockquote-base-embedded-webview-size
  screen-sizes="[
    { width: 360, height: 800, id: '360x800' },
    { width: 390, height: 864, id: '390x864' },
    { width: 414, height: 896, id: '414x896' },
    { width: 768, height: 1024, id: '768x1024' },
    { width: 810, height: 1080, id: '810x1080' },
    { width: 1280, height: 720, id: '1280x800' },
    { width: 1366, height: 768, id: '1366x768' },
    { width: 1536, height: 864, id: '1536x864' },
    { width: 1920, height: 1080, id: '1920x1080' },
  ]"></blockquote-base-embedded-webview-size>
```


### `src/BlockquoteBaseEmbeddedWebviewSize.ts`:

#### class: `BlockquoteBaseEmbeddedWebviewSize`, `blockquote-base-embedded-webview-size`

##### Fields

| Name                       | Privacy | Type           | Default                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                   | Inherited From |
| -------------------------- | ------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------- |
| `screenSizes`              | public  | `ScreenSize[]` | `[ {width: 360, height: 800, id: '360x800'}, {width: 390, height: 864, id: '390x864'}, {width: 414, height: 896, id: '414x896'}, {width: 768, height: 1024, id: '768x1024'}, {width: 810, height: 1080, id: '810x1080'}, {width: 1280, height: 720, id: '1280x800'}, {width: 1366, height: 768, id: '1366x768'}, {width: 1536, height: 864, id: '1536x864'}, {width: 1920, height: 1080, id: '1920x1080'}, ]` | The screen size options to display                            |                |
| `selected`                 | public  | `number`       | `0`                                                                                                                                                                                                                                                                                                                                                                                                           | The screen size option selected                               |                |
| `widthInPercent`           | public  | `boolean`      | `false`                                                                                                                                                                                                                                                                                                                                                                                                       | Percentage value for the width                                |                |
| `showOverflowSize`         | public  | `boolean`      | `false`                                                                                                                                                                                                                                                                                                                                                                                                       | Show screen size options that are too large for the container |                |
| `disabledSelectedSizeText` | public  | `boolean`      | `false`                                                                                                                                                                                                                                                                                                                                                                                                       | If true, selected size text is disabled                       |                |
| `selectedSize`             |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |
| `selectedDetail`           |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |
| `computedStyleWidth`       |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |
| `_toolbarTpl`              |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |
| `_visualTextTpl`           |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |
| `_onResize`                |         |                |                                                                                                                                                                                                                                                                                                                                                                                                               |                                                               |                |

##### Methods

| Name           | Privacy | Description | Parameters  | Return | Inherited From |
| -------------- | ------- | ----------- | ----------- | ------ | -------------- |
| `_setSelected` |         |             | `ev: Event` |        |                |

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
| `js` | `BlockquoteBaseEmbeddedWebviewSize` | BlockquoteBaseEmbeddedWebviewSize | src/BlockquoteBaseEmbeddedWebviewSize.ts |         |

### `src/index.ts`:

#### Exports

| Kind | Name                                   | Declaration                          | Module                                    | Package |
| ---- | -------------------------------------- | ------------------------------------ | ----------------------------------------- | ------- |
| `js` | `BlockquoteBaseEmbeddedWebview`        | BlockquoteBaseEmbeddedWebview        | ./BlockquoteBaseEmbeddedWebview\.js       |         |
| `js` | `BlockquoteBaseEmbeddedWebviewSize`    | BlockquoteBaseEmbeddedWebviewSize    | ./BlockquoteBaseEmbeddedWebviewSize.js    |         |
| `js` | `BlockquoteBaseEmbeddedWebviewResize`  | BlockquoteBaseEmbeddedWebviewResize  | ./BlockquoteBaseEmbeddedWebviewResize.js  |         |
| `js` | `BlockquoteBaseEmbeddedWebviewElement` | BlockquoteBaseEmbeddedWebviewElement | ./BlockquoteBaseEmbeddedWebviewElement.js |         |

### `src/define/blockquote-base-embedded-webview-element.ts`:

#### Exports

| Kind                        | Name                                       | Declaration                          | Module                                       | Package |
| --------------------------- | ------------------------------------------ | ------------------------------------ | -------------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-element` | BlockquoteBaseEmbeddedWebviewElement | /src/BlockquoteBaseEmbeddedWebviewElement.js |         |

### `src/define/blockquote-base-embedded-webview-resize.ts`:

#### Exports

| Kind                        | Name                                      | Declaration                         | Module                                      | Package |
| --------------------------- | ----------------------------------------- | ----------------------------------- | ------------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-resize` | BlockquoteBaseEmbeddedWebviewResize | /src/BlockquoteBaseEmbeddedWebviewResize.js |         |

### `src/define/blockquote-base-embedded-webview-size.ts`:

#### Exports

| Kind                        | Name                                    | Declaration                       | Module                                    | Package |
| --------------------------- | --------------------------------------- | --------------------------------- | ----------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview-size` | BlockquoteBaseEmbeddedWebviewSize | /src/BlockquoteBaseEmbeddedWebviewSize.js |         |

### `src/define/blockquote-base-embedded-webview.ts`:

#### Exports

| Kind                        | Name                               | Declaration                   | Module                                 | Package |
| --------------------------- | ---------------------------------- | ----------------------------- | -------------------------------------- | ------- |
| `custom-element-definition` | `blockquote-base-embedded-webview` | BlockquoteBaseEmbeddedWebview | /src/BlockquoteBaseEmbeddedWebview\.js |         |

### `src/styles/blockquote-base-embedded-webview-element-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                            | Package |
| ---- | -------- | ----------- | ----------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-element-styles.css.ts |         |

### `src/styles/blockquote-base-embedded-webview-resize-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                           | Package |
| ---- | -------- | ----------- | ---------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-resize-styles.css.ts |         |

### `src/styles/blockquote-base-embedded-webview-size-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                         | Package |
| ---- | -------- | ----------- | -------------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-size-styles.css.ts |         |

### `src/styles/blockquote-base-embedded-webview-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                                    | Package |
| ---- | -------- | ----------- | --------------------------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blockquote-base-embedded-webview-styles.css.ts |         |
