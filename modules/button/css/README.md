# Canvas Kit Button

Button highlight actions available on a screen with a click or tap.

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-button
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-button/index.scss';
```

**You must have PostCSS support.** Add the
[postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg) plugin to properly process and
inline icons. Process your SASS through PostCSS once it has been compiled to CSS.

## Usage

Button styles can be applied by using `.wdc-btn`. Most modifiers can be used by combining `.wdc-btn`
with the modifier class (e.g. `.wdc-btn-primary`). Some modifiers can be combined (e.g.
`.wdc-btn-primary.wdc-btn-medium`).

```html
<button class="wdc-btn">Default</button>
<button class="wdc-btn wdc-btn-primary">Primary</button>
<button class="wdc-btn wdc-btn-medium">Default</button>
<button class="wdc-btn wdc-btn-small">Small Button</button>
```

### Button Order

The primary button should always be displayed first from left to right. The only exception is when
buttons are used in a sequence of screens (e.g. Task Orchestration) and on mobile screen sizes.

### Button Options

- [Sizes](#sizes)
  - Large (Default)
  - Medium
  - Small
- [Colors](#colors)
  - Default
  - Primary
  - Delete
- [States](#states)
  - Active
  - Hover
  - Focus
  - Disabled
- [Types](#types)
  - Icon Button
  - Icon Button (Rounded)
  - Dropdown Button
  - Split Button

## Sizes

Large, medium, and small button sizes are available.

### Default

The default button size when using `.wdc-btn` is large.

### Medium

> Medium buttons are used in grids only.

Use by adding `.wdc-btn-medium`.

```html
<button class="wdc-btn wdc-btn-medium">Medium</button>
```

### Small

> Small buttons are used in page headers only.

Use by adding `.wdc-btn-small`.

```html
<button class="wdc-btn wdc-btn-small">Small</button>
```

## Colors

Colors can be applied to call attention to actions.

### Default

Most common button with default background color. Default buttons are available in all sizes.

```html
<button class="wdc-btn">Default</button>
<button class="wdc-btn wdc-btn-medium">Default</button>
<button class="wdc-btn wdc-btn-small">Default</button>
```

### Primary

> Primary buttons are orange and draw attention to the primary action on a screen. They should only
> appear once. Not all screens need require a primary button. The primary button should be always be
> the leftmost button in a group of buttons.

Use by adding `.wdc-btn-primary`. Primary button styling can be used with large and medium button
sizes.

```html
<button class="wdc-btn wdc-btn-primary">Primary</button>
<button class="wdc-btn wdc-btn-primary wdc-btn-medium">Primary</button>
```

### Delete

Use by adding `.wdc-btn-delete`. Delete button styling can be used with large and medium button
sizes.

```html
<button class="wdc-btn wdc-btn-delete">Delete</button>
<button class="wdc-btn wdc-btn-delete wdc-btn-medium">Delete</button>
```

## States

All buttons have an active, hover, focus, and disabled state. State styling may be explicitly
applied to form controls using the classes below.

| State    | Class               |
| -------- | ------------------- |
| active   | `.wdc-btn-active`   |
| hover    | `.wdc-btn-hover`    |
| focus    | `.wdc-btn-focus`    |
| disabled | `.wdc-btn-disabled` |

**Examples**

```html
<button class="wdc-btn wdc-btn-active">Active Button</button>
<button class="wdc-btn wdc-btn-hover">Hovered Button</button>
<button class="wdc-btn wdc-btn-focus">Focused Button</button>
<button class="wdc-btn" disabled>Disabled</button>
<button class="wdc-btn wdc-btn-disabled">Disabled Button</button>
```

## Variants

### Icon Button

> Use when space is limited and the action is clearly communicated through an icon. For instance, an
> edit button.

Use by adding `.wdc-btn-icon`. A Workday icon should be used as the `<button>`'s content.

```html
<button class="wdc-btn wdc-btn-icon">
  <svg ...>
</button>
```

### Icon Button (Rounded)

> This button is similar to the default button but has a fixed width. Use this button when placing
> an icon button inline with a group of buttons. Often used to style the Overflow Button used in
> button rows with more than four items.

Use by adding `.wdc-btn-icon-rounded`. A Workday icon should be used as the `<button>`'s content.

```html
<button class="wdc-btn wdc-btn-primary">Primary</button>
<button class="wdc-btn">Button</button>
<button class="wdc-btn">Button</button>
<button class="wdc-btn wdc-btn-icon-rounded">
  <svg ...>
</button>
```

### Dropdown Button

> Use this button to display a menu of related actions.

Use by adding `.wdc-btn-dropdown`.

```html
<button class="wdc-btn wdc-btn-dropdown">
  Dropdown
</button>
```

### Split Button

> Unlike a dropdown button, Split Buttons allow the user to take an action in one click, or view
> more with the menu. If there are multiple primary actions, a split button can be used with primary
> styling.

Use by wrapping two buttons using a `<div>` with `.wdc-btn-split`. The first button should have
`.wdc-btn-split-text` and will contain the button text. The second button should have
`.wdc-btn-split-icon` and be a closed element.

Apply primary styling to the button by adding `.wdc-btn-primary` to the buttons within the
`.wdc-btn-split`.

```html
<div class="wdc-btn-split">
  <button class="wdc-btn wdc-btn-split-text">
    Split Button
  </button>
  <button class="wdc-btn wdc-btn-split-icon" />
</div>

<div class="wdc-btn-split">
  <button class="wdc-btn wdc-btn-primary wdc-btn-split-text">
    Split Button
  </button>
  <button class="wdc-btn wdc-btn-primary wdc-btn-split-icon" />
</div>
```

## Accessibility

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.
