# Blockquote Web Components

## [Netlify - Raw Demo](https://main--adorable-macaron-7c1b61.netlify.app/)

---
<br>

## Requisites

You should install **Yarn** (strongly recommended) or **npm** with Node.js version 14.15.0 or higher.

## First steps

### In the _root directory_:

```bash
npm run bootstrap
```

## Development commands

### _In a specific component_

<hr>

#### Serve your WebComponent

```bash
npm run start
```

#### Test your WebComponent

```bash
npm run test
```

or if you prefer to keep your test while you are developing

```bash
npm run test:watch
```

#### Generate documentation - [custom-elements.json](https://custom-elements-manifest.open-wc.org)

```bash
npm run analyze
```

<hr>
<br>

## Code Style

### _root directory_

If you want to format, lint and test your code you can run from the root directory:

```js
npm run lint
// or
npm run lint [component-name]
```

```js
npm run format
// or
npm run format [component-name]
```

```js
npm run test
// or
npm run test:core [component-name]
```

### Changelog

Detailed changes for each version are documented in the [CHANGELOG](CHANGELOG.md) file
