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

Using this component by itself is highly discouraged. We recommend you to render it inside a
[canvas-kit-form-field](../../form-field/css).

## Labels

Render a text input inside a [canvas-kit-form-field](../../form-field/css) to add a label.

## Accessibility

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.
