# Canvas Kit Text Input

Text Input styles

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-text-input
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-text-input/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

## Usage

```html
<input type="text" classe="wdc-form-textinput" />
```

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [canvas-kit-form-field](../../form-field/css) to be
made fully accessible.

## Labels

Render a text input inside a [canvas-kit-form-field](../../form-field/css) to add a label.
