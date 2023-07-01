# blockquote-base-embedded-webview-element

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`blockquote-base-embedded-webview-element` wraps an `iframe` or `object` and shows it through light dom.

## Exports

- BlockquoteBaseEmbeddedWebviewElement

## Properties

| Property        | Attribute        | Type     | Default  | Description                                      |
|-----------------|------------------|----------|----------|--------------------------------------------------|
| `embeddedTitle` | `embedded-title` | `string` | ""       | The title attribute on an <element> to label its content |
| `src`           | `src`            | `string` | ""       | The URL of the page to embed                     |
| `type`          | `type`           | `string` | "iframe" | The type of the tag to embed - iframe or object  |

## Methods

| Method       | Type                 |
|--------------|----------------------|
| `willUpdate` | `(props: any): void` |

## Events

| Event           | Type               |
|-----------------|--------------------|
| `elementloaded` | `CustomEvent<any>` |


# blockquote-base-embedded-webview-resize

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`blockquote-base-embedded-webview-resize`

## Exports

- BlockquoteBaseEmbeddedWebviewResize

## Events

| Event           | Type                                             |
|-----------------|--------------------------------------------------|
| `webviewresize` | `CustomEvent<{ x: string; y: string; resizing: boolean; cursor: string; }>` |


# blockquote-base-embedded-webview-size

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`blockquote-base-embedded-webview-size` provides a list of ideal screen sizes for responsive designs.

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

## Exports

- BlockquoteBaseEmbeddedWebviewSize

## Properties

| Property                   | Attribute                     | Modifiers | Type                                             | Default                                          | Description                                      |
|----------------------------|-------------------------------|-----------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| `computedStyleWidth`       |                               | readonly  | `number`                                         |                                                  |                                                  |
| `disabledSelectedSizeText` | `disabled-selected-size-text` |           | `Boolean`                                        | false                                            | If true, selected size text is disabled          |
| `screenSizes`              | `screen-sizes`                |           | `Array`                                          | [{"width":360,"height":640,"id":"360x640"},{"width":360,"height":800,"id":"360x800"},{"width":414,"height":896,"id":"414x896"},{"width":768,"height":1024,"id":"768x1024"},{"width":810,"height":1080,"id":"810x1080"},{"width":1280,"height":800,"id":"1280x800"},{"width":1366,"height":768,"id":"1366x768"},{"width":1536,"height":864,"id":"1536x864"},{"width":1920,"height":1080,"id":"1920x1080"}] | The screen size options to display               |
| `selected`                 | `selected`                    |           | `Number`                                         | 0                                                | The screen size option selected                  |
| `selectedDetail`           |                               | readonly  | `{ index: number; width: number; height: number; id: string; }` |                                                  |                                                  |
| `selectedSize`             |                               | readonly  | `{ width: number; height: number; id: string; }` |                                                  |                                                  |
| `showOverflowSize`         | `show-overflow-size`          |           | `Boolean`                                        | false                                            | Show screen size options that are too large for the container |
| `widthInPercent`           | `width-in-percent`            |           | `Boolean`                                        | false                                            | Percentage value for the width                   |

## Methods

| Method       | Type                 |
|--------------|----------------------|
| `willUpdate` | `(props: any): void` |

## Events

| Event            | Type                                             |
|------------------|--------------------------------------------------|
| `click`          | `CustomEvent<{ index: number; width: number; height: number; id: string; }>` |
| `selectedchange` | `CustomEvent<{ index: number; width: number; height: number; id: string; }>` |


# blockquote-base-embedded-webview

![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

`blockquote-base-embedded-webview` offers a responsive display using individual HTML files as content with the different use cases to be displayed.
It will create a `select` tag with the provided demo HTML files and add the `[data-embedded]` attribute to the loaded body tag.

## Base usage

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

  ## Exports

  - BlockquoteBaseEmbeddedWebview

## Properties

| Property             | Attribute              | Type      | Default | Description                             |
|----------------------|------------------------|-----------|---------|-----------------------------------------|
| `heading`            | `heading`              | `String`  | ""      | The heading of the webview.             |
| `headingLevel`       | `heading-level`        | `Number`  | 1       | Heading level from 1 to 6               |
| `limitHeight`        | `limit-height`         | `Boolean` | false   | Limit height to 100% available          |
| `screenSizeSelected` | `screen-size-selected` | `Number`  | 0       | Index of currently screen size selected |
| `selected`           | `selected`             | `Number`  | 0       | Index of currently srcset file          |
