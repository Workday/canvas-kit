# Canvas Kit CSS Badge

Badge provides a quantity-based summary with dynamic values.

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

## Usage

### Variants

#### Default

```html
<span class="wdc-badge aria-live="polite" aria-label="1 unread notification">
  1
</span>
```

#### Inverse

```html
<span class="wdc-badge-inverse" aria-live="polite" aria-label="2 unread notifications">
  2
</span>
```

#### Empty Badge

```html
<span class="wdc-badge aria-live="polite" aria-label="unread notifications"></span>
```

### 📝 Notes

#### Accessibility

`aria-live="polite"` informs the screen reader to announce changes when the user is idle. However,
if the count in this badge is static and not live-updated, please remove `aria-live="polite"` to
prevent misinforming screen readers and causing unintentional announcements.

```html
<span class="wdc-badge aria-label="3 direct reports">1</span>
```

#### Formatting

Badges with more than 999 notifications should display '999+'

```html
<span class="wdc-badge aria-live="polite" aria-label="1000 unread notifications">
  999+
</span>
```
