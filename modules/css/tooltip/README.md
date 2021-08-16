# Canvas Kit Tooltip

Tooltips with modifiers and containers implementing display on hover.

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

[> Workday Design Reference](https://design.workday.com/components/popups/tooltips)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-tooltip
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-tooltip/index.scss';
```

## Usage

> Tooltips are used to display brief items of information.

Text does not wrap in tooltips.

Use `.wdc-tooltip` to create a tooltip. This can be used in conjunction with any directional
modifiers.

```html
<div class="wdc-tooltip wdc-tooltip-right">
  Right tooltip
</div>
```

### Directional Modifiers

Four directions are available. Each direction will change the orientation of the popup arrow. Use
directional classes in addition to `.wdc-tooltip`.

- `.wdc-tooltip-right`
- `.wdc-tooltip-left`
- `.wdc-tooltip-top`
- `.wdc-tooltip-bottom`

```html
<div class="wdc-tooltip wdc-tooltip-right">
  Right popup
</div>

<div class="wdc-tooltip wdc-tooltip-left">
  Left popup
</div>

<div class="wdc-tooltip wdc-tooltip-top">
  Top popup
</div>

<div class="wdc-tooltip wdc-tooltip-bottom">
  Bottom popup
</div>
```

## Display on hover

To display a popup on hover, wrap hoverable content within a `.wdc-tooltip-container`. Insert a
`.wdc-tooltip` within the container. The popup will automatically be positioned according to its
directional modifier.

> A directional modifier is required for proper usage.

```html
<div class="wdc-tooltip-container">
  Right popup
  <div class="wdc-tooltip wdc-tooltip-right">
    Tooltip
  </div>
</div>

<div class="wdc-tooltip-container">
  Right tooltip
  <div class="wdc-tooltip wdc-tooltip-right">
    Tooltip text
  </div>
</div>
```

## Accessibility Note

- Use `aria-describedby={id}` on the element your tooltip is connected to.
- Make sure you show the tooltip when the element you're describing (e.g. an Icon Button) is focused
  as well. This is only possible with Javascript.
