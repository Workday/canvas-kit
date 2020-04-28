# Canvas Kit CSS Badge

The count badge provides a quantity-based summary with dynamic values.

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

If the count is live-updated (as in the case of notifications) and not static, please add
`aria-live="polite"` to inform screen readers to announce updated information. When this attribute
is set the screen reader will announce changes when the user is idle.

```html
<span class="wdc-count-badge" aria-live="polite" aria-label="3 new notifications">1</span>
```

## Usage

### Variants

#### Default

```html
<span class="wdc-count-badge" aria-label="1 unread notification">
  1
</span>
```

#### Inverse

```html
<span class="wdc-count-badge-inverse" aria-label="2 unread notifications">
  2
</span>
```

### Formatting

Badges with more than 999 notifications should display '999+'

```html
<span class="wdc-count-badge" aria-label="1000 unread notifications">
  999+
</span>
```
