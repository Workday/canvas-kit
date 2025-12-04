# Canvas Kit Theming

> **Deprecation Notice:** The `theme` prop on `CanvasProvider` and all associated theming utilities (`useTheme`, `getTheme`, `styled`, `defaultCanvasTheme`, `ContentDirection`, etc.) are deprecated. Please use CSS variables from `@workday/canvas-tokens-web` for theming. For the full theming guide, see our [Theming Documentation](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs).

## Installation

```sh
yarn add @workday/canvas-kit-react/common
```

## Recommended Approach: CSS Variables

Canvas Kit v14+ promotes using CSS variables for theming. Import CSS variable files and override values in your root CSS:

```css
/* index.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

:root {
  /* Override brand primary colors */
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-light: var(--cnvs-base-palette-magenta-200);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-magenta-700);
}
```

Or use `createStyles` to generate themed class names:

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {brand, base} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

const themedBrand = createStyles({
  [brand.primary.base]: base.magenta600,
  [brand.primary.dark]: base.magenta700,
});

<CanvasProvider className={themedBrand}>
  <App />
</CanvasProvider>;
```

## Bidirectionality (RTL Support)

### Setting RTL Direction

Use the native HTML `dir` attribute to set the text direction. The `CanvasProvider` accepts a `dir` prop:

```tsx
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider dir="rtl">
  <App />
</CanvasProvider>
```

### CSS Logical Properties

Use [CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) for styling. These automatically adapt to the text direction:

```css
/* Use CSS logical properties */
.my-component {
  margin-inline-start: 1rem; /* Instead of margin-left */
  padding-inline-end: 1rem; /* Instead of padding-right */
}
```

### Conditional RTL Styles

For styles that need to change based on direction, use the [`:dir()` pseudo-class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir):

```css
/* Use :dir() for RTL-specific styles */
.my-component:dir(rtl) {
  /* RTL-specific styles */
}
```

```tsx
import {createStyles} from '@workday/canvas-kit-styling';

const styles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});
```

## Breakpoints

Breakpoints are used by media queries to conditionally apply or modify styles based on viewport width.

### Values

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 320       |
| `m`    | 768       |
| `l`    | 1024      |
| `xl`   | 1440      |

Standard screen size ranges:

- `small` (320px - 767px) - Mobile screens
- `medium` (768px - 1023px) - Tablet screens
- `large` (1024px - 1439px) - Laptop/small desktop screens
- `extra-large` (≥1440px) - Large screens

### Using Breakpoints

You can use standard CSS media queries:

```css
@media (min-width: 768px) {
  .my-component {
    padding: 1rem;
  }
}
```

Or import the breakpoint utilities:

```ts
import {up, down, between, only} from '@workday/canvas-kit-react/common';

const styles = {
  [up('m')]: {
    // @media (min-width: 768px)
    padding: '1rem',
  },
  [down('m')]: {
    // @media (max-width: 1023.5px)
    padding: '0.5rem',
  },
};
```

---

## Deprecated API Reference

The following APIs are deprecated and should not be used in new code.

### ~~CanvasProvider theme prop~~ (Deprecated)

```tsx
// DEPRECATED - Do not use
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <App />
</CanvasProvider>
```

### ~~useTheme / getTheme~~ (Deprecated)

```tsx
// DEPRECATED - Use CSS variables instead
const theme = useTheme();
const theme = getTheme();
```

### ~~styled~~ (Deprecated)

```tsx
// DEPRECATED - Use createStyles or createStencil instead
import {styled} from '@workday/canvas-kit-react/common';
```

### ~~ContentDirection~~ (Deprecated)

```tsx
// DEPRECATED - Use :dir() pseudo-class and CSS logical properties instead
import {ContentDirection} from '@workday/canvas-kit-react/common';
```

### ~~defaultCanvasTheme~~ (Deprecated)

```tsx
// DEPRECATED - Use defaultBranding instead
import {defaultCanvasTheme} from '@workday/canvas-kit-react/common';

// NEW - Use defaultBranding
import {defaultBranding} from '@workday/canvas-kit-react/common';
```

For detailed migration guidance, see our [Theming Documentation](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs).
