![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

## `<blk-material>`
> Exercise to understand the use of tokens by Google web material.
> Read [NOTES.md](./NOTES.md) to understand the proof of concept;

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/oscarmarina/blk-material)

- https://material.io/blog/tone-based-surface-color-m3
- https://m3.material.io/styles/color/the-color-system/tokens
- https://m3.material.io/theme-builder#/dynamic

## Installation

```bash
npm i blk-material
```

## Usage

```html
<script type="module">
  import 'blk-material/blk-material.js';
</script>

<blk-material></blk-material>
```

## Local Demo with `vite`

```bash
npm start
```

To run a local development server that serves the basic demo located in demo/index.html


### `src/BlkMaterial.js`:

#### class: `BlkMaterial`, `blk-material`

##### Fields

| Name        | Privacy | Type     | Default       | Description                                      | Inherited From |
| ----------- | ------- | -------- | ------------- | ------------------------------------------------ | -------------- |
| `_svgTag`   |         |          |               |                                                  |                |
| `_isNested` |         |          |               |                                                  |                |
| `heading`   | public  | `string` | `'Hey there'` | The heading to say "Hello" to.                   |                |
| `counter`   | public  | `number` | `5`           | The number of times the button has been clicked. |                |
| `roles`     | public  | `string` |               |                                                  |                |

##### Methods

| Name        | Privacy | Description        | Parameters        | Return   | Inherited From |
| ----------- | ------- | ------------------ | ----------------- | -------- | -------------- |
| `#onClick`  |         |                    |                   |          |                |
| `_sayHello` |         | Formats a greeting | `heading: string` | `string` |                |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `heading` | heading |                |
| `counter` | counter |                |
| `roles`   | roles   |                |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<hr/>

#### Exports

| Kind | Name          | Declaration | Module             | Package |
| ---- | ------------- | ----------- | ------------------ | ------- |
| `js` | `BlkMaterial` | BlkMaterial | src/BlkMaterial.js |         |

### `src/BlkButton.js`:

#### class: `BlkButton`, `blk-button`

##### Fields

| Name       | Privacy | Type      | Default | Description | Inherited From |
| ---------- | ------- | --------- | ------- | ----------- | -------------- |
| `disabled` | public  | `boolean` | `false` |             |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `disabled` | disabled |                |

<hr/>

#### Exports

| Kind | Name        | Declaration | Module           | Package |
| ---- | ----------- | ----------- | ---------------- | ------- |
| `js` | `BlkButton` | BlkButton   | src/BlkButton.js |         |

### `src/BlkRipple.js`:

#### class: `BlkRipple`, `blk-ripple`

##### Fields

| Name       | Privacy | Type      | Default | Description | Inherited From |
| ---------- | ------- | --------- | ------- | ----------- | -------------- |
| `disabled` | public  | `boolean` | `false` |             |                |
| `hovered`  | public  | `boolean` | `false` |             |                |
| `focused`  | public  | `boolean` | `false` |             |                |
| `pressed`  | public  | `boolean` | `false` |             |                |
| `element`  |         |           |         |             |                |

##### Methods

| Name                 | Privacy | Description              | Parameters       | Return | Inherited From |
| -------------------- | ------- | ------------------------ | ---------------- | ------ | -------------- |
| `handleEvent`        |         |                          | `ev`             |        |                |
| `handlePointerenter` |         |                          |                  |        |                |
| `handlePointerleave` |         |                          |                  |        |                |
| `handleFocus`        |         | Handles the focus event. | `ev: FocusEvent` |        |                |
| `handleBlur`         |         |                          |                  |        |                |
| `handlePointerdown`  |         |                          |                  |        |                |
| `handlePointerup`    |         |                          |                  |        |                |
| `handleClick`        |         |                          |                  |        |                |

##### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `disabled` | disabled |                |
| `hovered`  | hovered  |                |
| `focused`  | focused  |                |
| `pressed`  | pressed  |                |

<hr/>

#### Exports

| Kind | Name        | Declaration | Module           | Package |
| ---- | ----------- | ----------- | ---------------- | ------- |
| `js` | `BlkRipple` | BlkRipple   | src/BlkRipple.js |         |

### `src/styles/blk-button-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                              | Package |
| ---- | -------- | ----------- | ----------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blk-button-styles.css.js |         |

### `src/styles/blk-button-tokens.js`:

#### Variables

| Name               | Description | Type     |
| ------------------ | ----------- | -------- |
| `PREFIX`           |             | `string` |
| `rolesComposition` |             |          |
| `styleRoles`       |             |          |
| `styleTokens`      |             |          |

<hr/>

#### Exports

| Kind | Name               | Declaration      | Module                          | Package |
| ---- | ------------------ | ---------------- | ------------------------------- | ------- |
| `js` | `PREFIX`           | PREFIX           | src/styles/blk-button-tokens.js |         |
| `js` | `rolesComposition` | rolesComposition | src/styles/blk-button-tokens.js |         |
| `js` | `styleRoles`       | styleRoles       | src/styles/blk-button-tokens.js |         |
| `js` | `styleTokens`      | styleTokens      | src/styles/blk-button-tokens.js |         |

### `src/styles/blk-material-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                                | Package |
| ---- | -------- | ----------- | ------------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blk-material-styles.css.js |         |

### `src/styles/blk-material-tokens.js`:

#### Variables

| Name               | Description | Type     |
| ------------------ | ----------- | -------- |
| `PREFIX`           |             | `string` |
| `rolesComposition` |             |          |
| `styleRoles`       |             |          |
| `styleTokens`      |             |          |

<hr/>

#### Exports

| Kind | Name               | Declaration      | Module                            | Package |
| ---- | ------------------ | ---------------- | --------------------------------- | ------- |
| `js` | `PREFIX`           | PREFIX           | src/styles/blk-material-tokens.js |         |
| `js` | `rolesComposition` | rolesComposition | src/styles/blk-material-tokens.js |         |
| `js` | `styleRoles`       | styleRoles       | src/styles/blk-material-tokens.js |         |
| `js` | `styleTokens`      | styleTokens      | src/styles/blk-material-tokens.js |         |

### `src/styles/blk-ripple-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                              | Package |
| ---- | -------- | ----------- | ----------------------------------- | ------- |
| `js` | `styles` | styles      | src/styles/blk-ripple-styles.css.js |         |

### `src/styles/blk-ripple-tokens.js`:

#### Variables

| Name          | Description | Type     |
| ------------- | ----------- | -------- |
| `PREFIX`      |             | `string` |
| `styleTokens` |             |          |

<hr/>

#### Exports

| Kind | Name          | Declaration | Module                          | Package |
| ---- | ------------- | ----------- | ------------------------------- | ------- |
| `js` | `PREFIX`      | PREFIX      | src/styles/blk-ripple-tokens.js |         |
| `js` | `styleTokens` | styleTokens | src/styles/blk-ripple-tokens.js |         |

### `src/tokens/blk-ref-alpha.js`:

#### Variables

| Name       | Description | Type     |
| ---------- | ----------- | -------- |
| `refAlpha` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                      | Package |
| ---- | --------- | ----------- | --------------------------- | ------- |
| `js` | `default` | refAlpha    | src/tokens/blk-ref-alpha.js |         |

### `src/tokens/blk-ref-palette.js`:

#### Variables

| Name         | Description | Type     |
| ------------ | ----------- | -------- |
| `refPalette` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                        | Package |
| ---- | --------- | ----------- | ----------------------------- | ------- |
| `js` | `default` | refPalette  | src/tokens/blk-ref-palette.js |         |

### `src/tokens/blk-ref-spacing.js`:

#### Exports

| Kind | Name      | Declaration | Module                        | Package |
| ---- | --------- | ----------- | ----------------------------- | ------- |
| `js` | `default` |             | src/tokens/blk-ref-spacing.js |         |

### `src/tokens/blk-ref-style.js`:

#### Variables

| Name       | Description | Type     |
| ---------- | ----------- | -------- |
| `refStyle` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                      | Package |
| ---- | --------- | ----------- | --------------------------- | ------- |
| `js` | `default` | refStyle    | src/tokens/blk-ref-style.js |         |

### `src/tokens/blk-ref-typeface.js`:

#### Exports

| Kind | Name      | Declaration | Module                         | Package |
| ---- | --------- | ----------- | ------------------------------ | ------- |
| `js` | `default` |             | src/tokens/blk-ref-typeface.js |         |

### `src/tokens/blk-sys-alpha.js`:

#### Variables

| Name       | Description | Type     |
| ---------- | ----------- | -------- |
| `sysAlpha` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                      | Package |
| ---- | --------- | ----------- | --------------------------- | ------- |
| `js` | `default` | sysAlpha    | src/tokens/blk-sys-alpha.js |         |

### `src/tokens/blk-sys-color.js`:

#### Variables

| Name       | Description | Type     |
| ---------- | ----------- | -------- |
| `dark`     |             | `object` |
| `sysColor` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                      | Package |
| ---- | --------- | ----------- | --------------------------- | ------- |
| `js` | `default` | sysColor    | src/tokens/blk-sys-color.js |         |
| `js` | `dark`    | dark        | src/tokens/blk-sys-color.js |         |

### `src/tokens/blk-sys-spacing.js`:

#### Variables

| Name         | Description | Type     |
| ------------ | ----------- | -------- |
| `sysSpacing` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration | Module                        | Package |
| ---- | --------- | ----------- | ----------------------------- | ------- |
| `js` | `default` | sysSpacing  | src/tokens/blk-sys-spacing.js |         |

### `src/tokens/blk-sys-typescale.js`:

#### Variables

| Name           | Description | Type     |
| -------------- | ----------- | -------- |
| `sysTypescale` |             | `object` |

<hr/>

#### Exports

| Kind | Name      | Declaration  | Module                          | Package |
| ---- | --------- | ------------ | ------------------------------- | ------- |
| `js` | `default` | sysTypescale | src/tokens/blk-sys-typescale.js |         |

### `src/tokens/blk-system.js`:

#### Variables

| Name     | Description | Type     |
| -------- | ----------- | -------- |
| `SYSTEM` |             | `object` |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                   | Package |
| ---- | -------- | ----------- | ------------------------ | ------- |
| `js` | `SYSTEM` | SYSTEM      | src/tokens/blk-system.js |         |

### `src/tokens/dark-color-scheme.js`:

#### Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `darkColorScheme` |             |      |

<hr/>

#### Exports

| Kind | Name                | Declaration       | Module                          | Package |
| ---- | ------------------- | ----------------- | ------------------------------- | ------- |
| `js` | `darkColorScheme`   | darkColorScheme   | src/tokens/dark-color-scheme.js |         |
| `js` | `setDocumentStyles` | setDocumentStyles | src/tokens/dark-color-scheme.js |         |

### `src/tokens/generate-tokens.js`:

#### Variables

| Name    | Description | Type     |
| ------- | ----------- | -------- |
| `ROLES` |             | `string` |

<hr/>

#### Functions

| Name                      | Description                                            | Parameters                                | Return   |
| ------------------------- | ------------------------------------------------------ | ----------------------------------------- | -------- |
| `concatenateStringsByKey` | Returns an object with concatenated strings by key.    | `arr: Array<Object>`                      | `Object` |
| `cssStyleRule`            | Create a single CSS style rule.                        | `selector: string, values: Array<string>` | `string` |
| `setVariables`            | Create custom CSS properties for a component.          | `data: Object, prefix: string`            | `string` |
| `setTokens`               | Create custom CSS properties for all tokens in a data. | `data: Object, prefix: string`            | `string` |
| `setRoles`                | Create custom CSS properties for all roles.            | `data: Object, prefix: string`            | `Object` |

<hr/>

#### Exports

| Kind | Name                      | Declaration             | Module                        | Package |
| ---- | ------------------------- | ----------------------- | ----------------------------- | ------- |
| `js` | `ROLES`                   | ROLES                   | src/tokens/generate-tokens.js |         |
| `js` | `concatenateStringsByKey` | concatenateStringsByKey | src/tokens/generate-tokens.js |         |
| `js` | `cssStyleRule`            | cssStyleRule            | src/tokens/generate-tokens.js |         |
| `js` | `setVariables`            | setVariables            | src/tokens/generate-tokens.js |         |
| `js` | `setTokens`               | setTokens               | src/tokens/generate-tokens.js |         |
| `js` | `setRoles`                | setRoles                | src/tokens/generate-tokens.js |         |

### `define/blk-button.js`:

#### Exports

| Kind                        | Name         | Declaration | Module            | Package |
| --------------------------- | ------------ | ----------- | ----------------- | ------- |
| `custom-element-definition` | `blk-button` | BlkButton   | /src/BlkButton.js |         |

### `define/blk-material.js`:

#### Exports

| Kind                        | Name           | Declaration | Module              | Package |
| --------------------------- | -------------- | ----------- | ------------------- | ------- |
| `custom-element-definition` | `blk-material` | BlkMaterial | /src/BlkMaterial.js |         |

### `define/blk-ripple.js`:

#### Exports

| Kind                        | Name         | Declaration | Module            | Package |
| --------------------------- | ------------ | ----------- | ----------------- | ------- |
| `custom-element-definition` | `blk-ripple` | BlkRipple   | /src/BlkRipple.js |         |

### `index.js`:

#### Exports

| Kind | Name          | Declaration | Module               | Package |
| ---- | ------------- | ----------- | -------------------- | ------- |
| `js` | `BlkMaterial` | BlkMaterial | ./src/BlkMaterial.js |         |
