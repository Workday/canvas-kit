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
