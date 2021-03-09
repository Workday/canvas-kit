# Canvas Kit Labs React Menu

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

Creates an actions menu of clickable items.

Can be used to implement a menu button, context menu, etc. For a full suite of examples, have a look
at the [Menu Stories](https://workday.github.io/canvas-kit/?path=/story/labs-menu-react--default).

## Coming Soon

- Navigation (anchor link) menu support
- Multi level menu support

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-menu
```

# Menu

This component renders Canvas-style menu list.

## Usage

```tsx
import * as React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-labs-react-menu';
import {userIcon} from '@workday/canvas-system-icons-web';

<Menu title="Header" brandUrl="#">
  <MenuItem onClick={yourFirstAction} icon={userIcon} isDisabled={true} hasDivider={false}>
    First menu item
  </MenuItem>
  <MenuItem onClick={yourSecondAction} icon={userIcon} isDisabled={false} hasDivider={true}>
    Second menu item
  </MenuItem>
</Menu>;
```

## Special Children

### `ul, li`

For a semantic menu, this component will style a child `<ul>` element with a role of `menu`. If you
implement your own `<MenuItem>` (see
[menu stories](https://workday.github.io/canvas-kit/?path=/story/labs-menu-react--default) for an
example), make sure you use a `<li>` with a role of `menuItem`, tabindex of `-1`, and ids that
follow the pattern `${MenuId}-${index}`.

## Accessibility

This component implements a actions menu using aria-activedescendant.
[See the w3 example here](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html).
If used in conjunction with a menu button you will need to add your own keyboard shortcuts, aria
attributes, and focus management. See the
[menu stories](https://workday.github.io/canvas-kit/?path=/story/labs-menu-react--default) for a
fully fledged example.

## Keyboard Shortcuts

### Enter or Space

- Activates the menu item, causing the Last Action textbox to be updated.
- Closes the menu.

### Escape

- Closes the menu.

### Up Arrow

- Moves focus to the previous menu item.
- If focus is on the first menu item, moves focus to the last menu item.

### Down Arrow

- Moves focus to the next menu item.
- If focus is on the last menu item, moves focus to the first menu item.

### Home

- Moves focus to the first menu item.

### End

- Moves focus to the last menu item.

### A-Z / a-z

- Moves focus to the next menu item with a label that starts with the typed character if such an
  menu item exists.
- Otherwise, focus does not move.

## Menu Component Props

### Required

> None

### Optional

#### `children: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[]`

> One or more MenuItem components.

---

#### `initialSelectedItem: number`

> Zero based index of which menu item should initially receive focus

Default: `0`

---

#### `isOpen: boolean`

> Allows you to show and hide the menu from a parent component. Usefully for things like menu
> buttons.

Default: `true`

---

#### `onSelect: () => void`

> If specified, this callback is executed after any menu option is selected.

---

#### `onClose: () => void`

> If specified, this callback is executed when the menu should close. Called after an item is
> selected or the escape shortcut key is used. This will not fire if the menu item sets shouldClose
> to false

---

#### `id: string`

> A unique id for the menu that is used for aria and html id attributes.

---

#### `labeledBy: string`

> An html id of the element that labels the menu. Often used with menu buttons.

---

#### `width: number | string`

> Width of the card. If nothing is passed in the menu will collapse around the content.

---

#### `grow: boolean`

> Expand menu to fit its container. `grow` takes precedence over `width`.

Default: `false`

## Menu Item Component Props

### Required

> None

### Optional

#### `onClick: (event: React.MouseEvent<HTMLLIElement>) => void`

> This is the primary action to take when a menu item is clicked. If the item is a child of the Menu
> component, this callback will be decorated with the onSelect and onClose Menu callbacks. This
> callback will not fire if the item is disabled, see below.

---

#### `id: string`

> The unique id for the menu item used for aria attributes. If the item is a child of the Menu
> component, this property will be generated and overridden.

---

#### `isFocused: boolean`

> Whether or not this is the currently selected menu item. If the item is a child of the Menu
> component, this property will be generated and overridden.

---

#### `children: React.ReactNode`

> The menu item content is pretty flexible and can contain any strings or JSX.

---

#### `icon: CanvasSystemIcon`

> Icon to be displayed before what you supplied for the children.

---

#### `secondaryIcon: CanvasSystemIcon`

> Icon to be displayed after what you supplied for the children.

---

#### `hasDivider: boolean`

> Adds a top border on the menu item.

Default: `false`

---

#### `isDisabled: boolean`

> Allow you to disable a menu item so it is not clickable.

Default: `false`

---

#### `role: string`

> Allow you to override the role of the item, e.g. you can use this element as a option in a
> combobox.

Default: `menuItem`

---

#### `shouldClose: boolean`

> Allows the onClose Menu callback to be fired after the menu item has been clicked

Default: `true`

---
