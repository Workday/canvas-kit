# Canvas Kit Menu

Creates an actions menu of clickable items.

Can be used to implement a menu button, context menu, etc.

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

[> Workday Design Reference](https://design.workday.com/components/popups/menus)

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
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem">
      <a href="#">Item 1</a>
    </li>
    <li role="menuitem">Item 2</li>
  </ul>
</div>
```

### Variants

#### Grow

Use `.wdc-menu-grow` to expand the menu to fit its container.

```html
<div class="wdc-menu wdc-menu-grow" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem">This menu will expand to fit its container</li>
  </ul>
</div>
```

### Menu Item Modifiers

Use `.wdc-menu-item-disabled` to create a disabled menu item.

```html
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem" class="wdc-menu-item-disabled" aria-disabled="true">
      Disabled item
    </li>
  </ul>
</div>
```

Use `.wdc-menu-item-focused` to create a focused menu item.

```html
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem" class="wdc-menu-item-focused">
      Focused item
    </li>
  </ul>
</div>
```

Menu item modifiers may be combined.

```html
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem" class="wdc-menu-item-disabled wdc-menu-item-focused">
      Disabled and focused item
    </li>
  </ul>
</div>
```

### Icons

Menu items can include an icon as well as a secondary icon.

Wrap the text for the menu item using a `<span>` with `.wdc-menu-item-label`.

```html
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem">
      <i class="wdc-icon" data-icon="uploadCloud" data-category="system" />
      <span class="wdc-menu-item-label">Item with uploadCloud icon</span>
    </li>
    <li role="menuitem">
      <i class="wdc-icon" data-icon="uploadCloud" data-category="system" />
      <span class="wdc-menu-item-label">
        Item with uploadCloud icon and an extLink secondary icon
      </span>
      <i class="wdc-icon" data-icon="extLink" data-category="system" />
    </li>
  </ul>
</div>
```

If you're generating the icons using the React `SystemIcon` component, you'll need to assign
`.wdc-menu-item-icon` to the icons.

```tsx
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem">
      <SystemIcon icon={uploadCloudIcon} class="wdc-menu-item-icon" />
      <span class="wdc-menu-item-label">Item with uploadCloud icon</span>
    </li>
  </ul>
</div>
```

### Divider

Use `<hr />` to create a divider between menu items (use `role="separator"` for accessibility).

```html
<div class="wdc-menu" role="menu" aria-label="Menu">
  <ul>
    <li role="menuitem">Item 1</li>
    <hr role="separator" />
    <li role="menuitem">Item 2</li>
  </ul>
</div>
```

## Accessibility note

Container with `role="menu"` should always have an `aria-labelledby` or `aria-label` attribute.
