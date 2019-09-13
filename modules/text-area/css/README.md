# Canvas Kit Text Area

Text Area styles

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-text-area
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-text-area/index.scss';
```

## Usage

```html
<div className="wdc-form-textarea">
  <textarea id="textarea" />
</div>
```

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [canvas-kit-form-field](../../form-field/css) to be
made fully accessible.

## Labels

Render a text area inside a [canvas-kit-form-field](../../form-field/css) to add a label.
