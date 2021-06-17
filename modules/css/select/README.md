# Canvas Kit Select

Select styles

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

[> Workday Design Reference](https://design.workday.com/components/inputs/select-drop-down)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-select
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-select/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

## Usage

```html
<div class="wdc-form-select">
  <select id="select">
    <option label="E-mail">E-mail</option>
    <option label="Phone">Phone</option>
    <option label="Fax (disabled)" disabled="{true}">
      Fax (disabled)
    </option>
    <option label="Mail">Mail</option>
  </select>
</div>
```

**Note:** While a base checkbox component is provided in this package, it is **not accessible** when
used as is. It should be used in tandem with [canvas-kit-form-field](../../form-field/css) to be
made fully accessible.

## Labels

Render a select inside a [canvas-kit-form-field](../../form-field/css) to add a label.
