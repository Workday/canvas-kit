# Canvas Kit Button

Clickable button elements that extend the native `<button>` element with Canvas styling.

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
`.wdc-btn-primary.wdc-btn-size-m`).

```html
<button class="wdc-btn">Default</button>
<button class="wdc-btn wdc-btn-primary">Primary</button>
<button class="wdc-btn wdc-btn-size-m">Default</button>
<button class="wdc-btn wdc-btn-size-s">Small Button</button>
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
  - Filled (Icons)
  - Primary
  - Delete
- [States](#states)
  - Active
  - Hover
  - Focus
  - Disabled
- [Variants](#variants)
  - Icon Button
  - Dropdown Button
  - Split Button

## Sizes

Large, medium, and small button sizes are available.

### Default

The default button size when using `.wdc-btn` is large.

### Medium

> Medium buttons are used in grids only.

Use by adding `.wdc-btn-size-m`.

```html
<button class="wdc-btn wdc-btn-size-m">Medium</button>
```

### Small

> Small buttons are used in page headers only.

Use by adding `.wdc-btn-size-s`.

```html
<button class="wdc-btn wdc-btn-size-s">Small</button>
```

## Colors

Colors can be applied to call attention to actions.

### Default

Most common button with default background color. Default buttons are available in all sizes.

```html
<button class="wdc-btn">Default</button>
<button class="wdc-btn wdc-btn-size-m">Default</button>
<button class="wdc-btn wdc-btn-size-s">Default</button>
```

### Icon Buttons

Icon buttons can be square, circle, filled, plain and inverse. By default, their size is medium, but
you can add `wdc-btn-size-s` class to make them small.

### Filled

Filled buttons can be squared or circle. These buttons should be used with icons and provide a solid
color background.

```html
<button className="wdc-btn-icon-square-filled">
  <SystemIcon icon="{activityStreamIcon}" />
</button>
<button className="wdc-btn-size-s wdc-btn-icon-circle-filled">
  <SystemIcon icon="{activityStreamIcon}" />
</button>
```

### Inverse

Inverse buttons are buttons that can be used on dark backgrounds.

```html
<button className="wdc-btn-icon-inverse">
  <SystemIcon icon="{activityStreamIcon}" />
</button>
<button className="wdc-btn-size-s wdc-btn-icon-inverse-filled">
  <SystemIcon icon="{activityStreamIcon}" />
</button>
```

### Primary

> Primary buttons are orange and draw attention to the primary action on a screen. They should only
> appear once. Not all screens need require a primary button. The primary button should be always be
> the leftmost button in a group of buttons.

Use by adding `.wdc-btn-primary`. Primary button styling can be used with large and medium button
sizes.

```html
<button class="wdc-btn wdc-btn-primary">Primary</button>
<button class="wdc-btn wdc-btn-primary wdc-btn-size-m">Primary</button>
```

### Delete

Use by adding `.wdc-btn-delete`. Delete button styling can be used with large and medium button
sizes.

```html
<button class="wdc-btn wdc-btn-delete">Delete</button>
<button class="wdc-btn wdc-btn-delete wdc-btn-size-m">Delete</button>
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
> edit button. They are medium size by default, but can be made smaller with `wdc-btn-size-s`

```html
<button class="wdc-btn-icon" aria-label="Action">
  <svg ...>
</button>
```

| Icon Button Variant | Class                                   | Description                                      |
| ------------------- | --------------------------------------- | ------------------------------------------------ |
| Circle (default)    | `.wdc-btn-icon`, `.wdc-btn-icon-circle` | Circular, dark gray icon                         |
| Circle Filled       | `.wdc-btn-icon-circle-filled`           | Circular, gray background, dark gray icon        |
| Square              | `.wdc-btn-icon-square`                  | Square, white background, dark gray icon         |
| Square Filled       | `.wdc-btn-icon-square-filled`           | Square, gray background, dark gray icon          |
| Plain               | `.wdc-btn-icon-plain`                   | Dark gray icon                                   |
| Inverse             | `.wdc-btn-icon-plain`                   | Circular, transparent background, white icon     |
| Inverse             | `.wdc-btn-icon-plain`                   | Circular, semitransparent background, white icon |

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

## Accessibility Notes

> The content of a button is not always clear to the user. In order to better convey what the icon
> represents, the Icon Button should always have an `aria-label` attribute as well as a
> [tooltip](https://github.com/Workday/canvas-kit/tree/master/modules/tooltip/css) or
> `title attribute`.

See [canvas-kit-core](../../core/css#accessibility) for accessibility guidelines.
