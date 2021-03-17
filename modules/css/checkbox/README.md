# Canvas Kit Checkbox

Checkbox styles

[> Workday Design Reference](https://design.workday.com/components/inputs/checkboxes)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-checkbox
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-checkbox/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

## Usage

```html
<div class="wdc-form-checkbox">
  <input type="checkbox" id="checkbox" />
  <label for="checkbox">Checkbox option</label>
</div>
```

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [canvas-kit-form-field](../../form-field/css) to be
made fully accessible.

## Labels

Render a checkbox inside a [canvas-kit-form-field](../../form-field/css) to add a label.
