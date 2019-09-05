# Canvas Kit Popup

Popups with modifiers and containers implementing display on hover.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-popup
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-popup/index.scss';
```

## Usage

> Popups are for more advanced use cases, usually displaying more complex information or affording
> more complex interactions.

Use `.wdc-popup` to create a popup. Use `.wdc-popup-title` within `.wdc-popup` to style the popup's
title. `p` elements also have adjusted margins.

```html
<div class="wdc-popup">
  <div class="wdc-popup-title">Popup Title</div>
  <p>Popup line 1</p>
  <p>Popup line 2</p>
</div>
```

### Directional Modifiers

Four directions are available. Each direction will change the orientation of the popup arrow. Use
directional classes in addition to `.wdc-popup`.

- `.wdc-popup-right`
- `.wdc-popup-left`
- `.wdc-popup-top`
- `.wdc-popup-bottom`

```html
<div class="wdc-popup wdc-popup-right">
  Right popup
</div>

<div class="wdc-popup wdc-popup-left">
  Left popup
</div>

<div class="wdc-popup wdc-popup-top">
  Top popup
</div>

<div class="wdc-popup wdc-popup-bottom">
  Bottom popup
</div>
```
