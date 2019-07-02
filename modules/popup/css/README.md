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

### Menus

Use `.wdc-popup-menu` in addition to `.wdc-popup` to apply popup menu styling. Use a `ul` and `li`
to list menu items. Menus are compatible with directional classes.

```html
<div class="wdc-popup wdc-popup-bottom wdc-popup-menu">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>
      Item 2
    </li>
  </ul>
</div>
```

#### Menu Item States

Use `.wdc-popup-menu-item-hover` or `.wdc-popup-menu-item-focus` on a `li` to apply hover/focus
styling to a menu item.

```html
<div class="wdc-popup wdc-popup-bottom wdc-popup-menu">
  <ul>
    <li class="wdc-popup-menu-item-hover">
      Item 1
    </li>
    <li class="wdc-popup-menu-item-focus">
      Item 2
    </li>
  </ul>
</div>
```

## Display on hover

To display a popup on hover, wrap hoverable content within a `.wdc-popup-container`. Insert a
`.wdc-popup` within the container. The popup will automatically be positioned according to its
directional modifier.

> A directional modifier is required for proper usage.

```html
<div class="wdc-popup-container">
  Right popup
  <div class="wdc-popup wdc-popup-right">
    Popup
  </div>
</div>
```
