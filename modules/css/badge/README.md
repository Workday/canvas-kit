# Canvas Kit CSS Badge

The count badge provides a quantity-based summary with dynamic values.

<a href="../README.md">
  <img src="https://img.shields.io/badge/-maintenance mode-important" alt="Mainenance Mode" />
</a>

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-badge
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-badge/index.scss';
```

## Accessibility

A common use case for the count badge is for displaying notifications, and there are several
accessibility concerns you'll want to keep in mind:

- The button should have an aria-label that updates with the count
- The elements inside the button should have `aria-hidden`
- The live region should be outside the button
- The live region should be visually hidden and only contain text

### Example

```html
<button type="button" aria-label="Alerts 3 new notifications">
  <svg aria-hidden="true" focusable="false">...</svg>
  <span class="wdc-count-badge" aria-hidden="true">3</span>
</button>
<div class="wdc-accessible-hide" role="status" aria-live="polite" aria-atomic="true">
  New notifications
</div>
```

> Note: To use the `wdc-accessible-hide` class, you'll need to import it from the core module.

```scss
@import '~@workday/canvas-kit-css-core/lib/accessibility.scss';
```

## Usage

### Variants

#### Default

```html
<span class="wdc-count-badge">
  1
</span>
```

#### Inverse

```html
<span class="wdc-count-badge-inverse">
  2
</span>
```

### Formatting

Badges with more than 999 notifications should display '999+'

```html
<span class="wdc-count-badge">
  999+
</span>
```
