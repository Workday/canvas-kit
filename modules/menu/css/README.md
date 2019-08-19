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

Use `.wdc-menu` to create a menu.

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

### Menu Item Modifiers

Use `.wdc-menu-item-disabled` to create a disabled menu item.

```html
<div class="wdc-menu">
  <ul>
    <li class="wdc-menu-item-disabled">
      Disabled item
    </li>
  </ul>
</div>
```

Use `.wdc-menu-item-focused` to create a focused menu item.

```html
<div class="wdc-menu">
  <ul>
    <li class="wdc-menu-item-focused">
      Focused item
    </li>
  </ul>
</div>
```

Menu item modifiers may be combined.

```html
<div class="wdc-menu">
  <ul>
    <li class="wdc-menu-item-disabled wdc-menu-item-focused">
      Disabled and focused item
    </li>
  </ul>
</div>
```

## Divider

Use `<hr />` to create a divider between menu items.

```html
<div class="wdc-menu">
  <ul>
    <li>Item 1</li>
    <hr />
    <li>Item 2</li>
  </ul>
</div>
```
