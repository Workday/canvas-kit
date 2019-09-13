# Canvas Kit Radio

Radio styles

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-radio
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-radio/index.scss';
```

## Usage

```html
<div className="wdc-form-radio">
  <input type="radio" id="radio" />
  <label htmlFor="radio">E-mail</label>
</div>
```

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [canvas-kit-form-field](../../form-field/css) to be
made fully accessible.

## Labels

Render a radio inside a [canvas-kit-form-field](../../form-field/css) to add a label.
