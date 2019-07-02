# Canvas Kit Menu

Creates an actions menu of clickable items.

Can be used to implement a menu button, context menu, etc.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-menu
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-menu/index.scss';
```

## Usage

> Menu renders Canvas-style menu list.

Use `.wdc-menu` to create a tooltip. This can be used in conjunction with any directional modifiers.

```html
<div class="wdc-menu">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>Item 2</li>
  </ul>
</div>
```

### Directional Modifiers

Four directions are available. Each direction will change the orientation of the menu arrow. Use
directional classes in addition to `.wdc-menu`.

- `.wdc-menu-right`
- `.wdc-menu-left`
- `.wdc-menu-top`
- `.wdc-menu-bottom`

```html
<div class="wdc-menu wdc-menu-right">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>Item 2</li>
  </ul>
</div>
<div class="wdc-menu wdc-menu-left">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>Item 2</li>
  </ul>
</div>
<div class="wdc-menu wdc-menu-top">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>Item 2</li>
  </ul>
</div>
<div class="wdc-menu wdc-menu-bottom">
  <ul>
    <li>
      <a href="#">Item 1</a>
    </li>
    <li>Item 2</li>
  </ul>
</div>
```

## Display on hover

To display a menu on hover, wrap hoverable content within a `.wdc-menu-container`. Insert a
`.wdc-menu` within the container. The menu will automatically be positioned according to its
directional modifier.

> A directional modifier is required for proper usage.

```html
<div class="wdc-menu-container">
  Left menu
  <div class="wdc-menu wdc-menu-left">
    <ul>
      <li>
        <a href="#">Item 1</a>
      </li>
      <li>Item 2</li>
    </ul>
  </div>
</div>
```
