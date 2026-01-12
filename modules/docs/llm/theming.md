---
source_file: react/common/stories/mdx/Theming.mdx
live_url: https://workday.github.io/canvas-kit/react/common/stories/mdx/Theming
---

<Meta title="Features/Theming/Overview" />

# Canvas Kit Theming Guide

## Overview

Canvas Kit v14 introduces a significant shift in our approach to theming: we've moved away from
JavaScript-based theme objects to CSS variables. This change provides better performance, improved
developer experience, and greater flexibility for theming applications.

> **📌 Quick Start:**
>
> 1. **Import CSS variables once** at the root level of your application (e.g., in `index.css`)
> 2. **Override tokens at `:root`** for global theming — this is the recommended approach
> 3. **Use `CanvasProvider` scoped theming only** for specific scenarios like multi-brand sections
>    or embedded components
>
> If your application renders within an environment that already imports these CSS variables, \*\*do
> not re-

```tsx
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  {' '}
  <App />{' '}
</CanvasProvider>
```

This would use `chroma.js` to generate a palette based on the `main` color provided.

**Why we're moving away from this approach:**

- Performance overhead from JavaScript theme object processing
- Limited flexibility for complex theming scenarios
- Inconsistent cascade behavior

Any time `theme` is passed, the `CanvasProvider` would generate a palette and attach brand variables
via a `className` scoping those brand variables to a wrapping div. In order for us to provide a
better solution to theming that is scalable and is more aligned with our CSS variables, we changed
this approach.

**Note:** While we support theme overrides, we advise to use global theming via CSS Variables.

## What is a Cascade Barrier?

When we say "cascade barrier", we're talking about how
[CSS cascades](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade) and takes
precedence. Take the following example:

```css
:root {
  --cnbvs-brand-primary-base: blue;
}

// the element with the class .my-app will have a higher specificity than root, creating a barrier where the CSS variables gets redefined and takes precedence over what is defined at root.
.my-app {
  --cnvs-brand-primary-base: red;
}
```

In the case of the `CanvasProvider` prior to v14, all our brand tokens where defined within a class
and scoped to the `div` that the `CanvasProvider` created. This meant that anything set on `:root`
or outside of the `CanvasProvider` would not be able to cascade down to the components within the
`CanvasProvider`.

If you provide a `theme` to the `CanvasProvider`, it will create a scoped theme. Note that in v14,
global CSS variables are the recommended way to theme Popups and Modals consistently.

## Global vs Scoped Theming

Canvas Kit v14 supports two theming strategies: **global theming** and **scoped theming**.
Understanding the difference is important to avoid unexpected behavior.

### Global Theming

Global theming applies CSS variables at the `:root` level, making them available throughout your
entire application. This is the **recommended approach** for most use cases.

```css
@import '@workday/canvas-tokens-web/css/base/_variables.css';
:root {
  // This is showing how you can change the value of a token at the root level of your application.
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
}
```

### Scoped Theming

Scoped theming applies CSS variables to a specific section of your application using the
`CanvasProvider` with either a `className` or `theme` prop. The theme only affects components within
that provider.

```tsx
// Using the theme prop for scoped theming. This will set the [brand.primary.**] tokens to shades of purple.
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'purple'}}}}}>
  <ScopedSection />
</CanvasProvider>
```

> **⚠️ Warning:** Scoped theming creates a cascade barrier that **will break global theming**. Any
> CSS variables defined at `:root` will be overridden by the scoped theme. Only the tokens
> explicitly defined in the `theme` prop will be changed - other tokens will use their default
> values, not your global overrides.

### When to Use Scoped Theming

Only use scoped theming when you intentionally need a different theme for a specific section of your
application, such as:

- Embedding a Canvas Kit component in a third-party application with a different brand
- Creating a preview panel that shows components with different themes
- Supporting multi-tenant applications where sections have different branding

For all other cases, use global theming at `:root` to ensure consistent theming throughout your
application.

## ✅ Preferred Approach (v14+)

Canvas Kit v14 promotes using CSS variables for theming, which can be applied in two ways:

### Method 1: Global CSS Variables (Recommended)

Apply theming at the global level by importing CSS variable files and overriding values in your root
CSS:

```css
/* index.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

:root {
  /* Override brand primary colors */
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-light: var(--cnvs-base-palette-magenta-200);
  --cnvs-brand-primary-lighter: var(--cnvs-base-palette-magenta-50);
  --cnvs-brand-primary-lightest: var(--cnvs-base-palette-magenta-25);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-magenta-700);
  --cnvs-brand-primary-darkest: var(--cnvs-base-palette-magenta-800);
  --cnvs-brand-primary-accent: var(--cnvs-base-palette-neutral-0);
}
```

> **Note:** You should only

// You can import the CSS variables in a ts file or an index.css file. You do not need to do both.
import '@workday/canvas-tokens-web/css/base/\_variables.css'; import
'@workday/canvas-tokens-web/css/system/\_variables.css'; import
'@workday/canvas-tokens-web/css/brand/\_variables.css';

// Generate a class name that defines CSS variables const themedBrand = createStyles({
[brand.primary.accent]: base.neutral0, [brand.primary.darkest]: base.blue800, [brand.primary.dark]:
base.blue700, [brand.primary.base]: base.blue600, [brand.primary.light]: base.blue200,
[brand.primary.lighter]: base.blue50, [brand.primary.lightest]: base.blue25, })

<CanvasProvider className={themedBrand}>
  <App/>
</CanvasProvider>
```

### Theming Modals and Dialogs

Previously, the `usePopupStack` hook created a CSS class name that was passed to our Popups. We
attached those theme styles to that class name. This allowed the theme to be available in our
Popups. But it also created a cascade barrier that blocked the global theme from being applied to
our Popup components. Because we now use global CSS variables, we no longer need this class name to
provide the global theme to Popups. But we have to remove this generated class name to allow the
global theme to be applied to Popups.

**Before in v13**

```tsx
// When passing a theme to the Canvas Provider, the `usePopupStack` would grab the theme and generate a class to forward the theme to Modals and Dialogs. This would create a cascade barrier for any CSS variables defined at the root.
<CanvasProvider theme={{canvas: {palette: {primary: {main: 'blue'}}}}}>
  <Modal>//... rest of modal code</Modal>
</CanvasProvider>
```

**After in v14**

```tsx
// If you wish to still theme you application and Modals, you can either define the CSS variables at the root level of your application or define a className and pass it to the CanvasProvider.
:root {
 --cnvs-brand-primary-base: blue;
}

<CanvasProvider>
  <Modal>//... rest of modal code</Modal>
</CanvasProvider>
```

## CSS Token Structure

Canvas Kit provides three layers of CSS variables.

### Base Tokens (`base/_variables.css`)

Base tokens define foundation palette and design values.

```css
--cnvs-base-palette-blue-600: oklch(0.5198 0.1782 256.11 / 1);
--cnvs-base-palette-magenta-600: oklch(0.534 0.183 344.19 / 1);
--cnvs-base-font-size-100: 1rem;
--cnvs-base-space-x4: calc(var(--cnvs-base-unit) * 4);
```

### Brand Tokens (`brand/_variables.css`)

Brand tokens define semantic color assignments.

```css
--cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);
--cnvs-brand-primary-accent: var(--cnvs-base-palette-neutral-0);
--cnvs-brand-error-base: var(--cnvs-base-palette-red-600);
--cnvs-brand-success-base: var(--cnvs-base-palette-green-600);
```

### System Tokens (`system/_variables.css`)

System tokens define component-specific values.

```css
--cnvs-sys-color-bg-primary-default: var(--cnvs-base-palette-blue-600);
--cnvs-sys-color-text-primary-default: var(--cnvs-base-palette-blue-600);
--cnvs-sys-space-x4: calc(var(--cnvs-base-unit) * 4);
```

## Practical Examples

### Complete Brand Theming

```css
/* themes/magenta-theme.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

:root {
  /* Primary brand colors */
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-light: var(--cnvs-base-palette-magenta-200);
  --cnvs-brand-primary-lighter: var(--cnvs-base-palette-magenta-50);
  --cnvs-brand-primary-lightest: var(--cnvs-base-palette-magenta-25);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-magenta-700);
  --cnvs-brand-primary-darkest: var(--cnvs-base-palette-magenta-800);
  --cnvs-brand-primary-accent: var(--cnvs-base-palette-neutral-0);
}
```

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {brand, base, system} from '@workday/canvas-tokens-web';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

const customTheme = createStyles({
  [brand.primary.base]: base.green600,
  [brand.primary.dark]: base.green700,
  [brand.primary.darkest]: base.green800,
  [brand.common.focusOutline]: base.green600,
  [system.color.fg.strong]: base.indigo900,
  [system.color.border.container]: base.indigo300,
});

const App = () => {
  return (
    <CanvasProvider
      theme={{
        canvas: {
          palette: {
            primary: {
              main: base.green600,
              dark: base.green700,
              darkest: base.green800,
              light: base.green200,
              lighter: base.green50,
              lightest: base.green25,
              contrast: base.neutral0,
            },
          },
        },
      }}
    >
      <Card>
        <Card.Heading>Theming</Card.Heading>
        <Card.Body>
          <PrimaryButton>Theming</PrimaryButton>
          <input />
        </Card.Body>
      </Card>
    </CanvasProvider>
  );
};

export const Theming = () => {
  return (
    <CanvasProvider className={customTheme}>
      <App />
    </CanvasProvider>
  );
};
```

### Dark Mode Implementation

```css
/* Dark mode theming */
[data-theme='dark'] {
  --cnvs-sys-color-bg-default: var(--cnvs-base-palette-neutral-950);
  --cnvs-sys-color-text-default: var(--cnvs-base-palette-neutral-50);
  --cnvs-sys-color-border-container: var(--cnvs-base-palette-slate-700);
  --cnvs-sys-color-bg-alt-default: var(--cnvs-base-palette-slate-800);
}
```

### RTL Support

Canvas Kit supports RTL out of the box. Our components are styled to use
[CSS logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
If you want to add additional styles based on RTL, you can also use the `:dir`
[pseudo selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir).

#### Setting RTL Direction

Use the native HTML `dir` attribute to set the text direction. The `CanvasProvider` accepts a `dir`
prop which sets this attribute on its wrapper element:

```tsx
// Set RTL direction
<CanvasProvider dir="rtl">
  <App />
</CanvasProvider>
```

You can also set it on any HTML element:

```tsx
<div dir="rtl">
  <MyComponent />
</div>
```

> **Note:** The `dir` attribute is the standard HTML way to set text direction. It's preferred over
> the deprecated `theme.canvas.direction` approach because it works natively with CSS logical
> properties and the `:dir()` pseudo-class.

#### Using CSS Logical Properties

CSS logical properties automatically adapt to the text direction. Use these instead of physical
properties:

```css
/* Physical properties (don't adapt to RTL) */
.my-component {
  margin-left: 1rem;
  padding-right: 1rem;
  border-left: 1px solid;
}

/* Logical properties (adapt to RTL automatically) */
.my-component {
  margin-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-inline-start: 1px solid;
}
```

#### Conditional RTL Styles with `:dir()`

For styles that need to change based on direction (like rotating icons), use the `:dir()`
pseudo-class:

```tsx
const rtlButtonStyles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});
```

```tsx
import React from 'react';
import {createStyles} from '@workday/canvas-kit-styling';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Card} from '@workday/canvas-kit-react/card';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {arrowRightSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const rtlStyles = createStyles({
  paddingInlineStart: system.space.x16,
});

const rtlButtonStyles = createStyles({
  ':dir(rtl)': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

const App = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Card>
      <Card.Heading>RTL Support</Card.Heading>
      <Card.Body cs={rtlStyles}>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Field>
            <FormField.Input as={TextInput} onChange={handleChange} value={value} />
          </FormField.Field>
        </FormField>
        <PrimaryButton cs={rtlButtonStyles} iconPosition="end" icon={arrowRightSmallIcon}>
          RTL
        </PrimaryButton>
      </Card.Body>
    </Card>
  );
};

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <App />
    </CanvasProvider>
  );
};
```

### Resetting to Default Brand Theme

If you need to reset the theme in parts of your application, there's a few ways to do this. We
export a `defaultBranding` class that can be applied to the `CanvasProvider` which can wrap parts of
your application.

```tsx
<CanvasProvider className={defaultBranding}>
  <SomeSubComponent />
</CanvasProvider>
```

> **Note:** Doing the following **will create a cascade barrier**. Only use this method if you
> intentionally want to override the default theme.

## Migration Guide

### Step 1: Identify Current Theme Usage

Find all instances of `CanvasProvider` with theme props in your application.

```tsx
// Find these patterns:
<CanvasProvider theme={{canvas: {palette: {...}}}}>
```

### Step 2: Extract Theme Values

Convert JavaScript theme objects to CSS variable overrides.

```tsx
// Old approach:
const theme = {
  canvas: {
    palette: {
      primary: {
        main: colors.greenApple400,
        dark: colors.greenApple500,
      }
    }
  }
};

// New approach - CSS variables:
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-green-400);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-green-500);
}
```

### Step 3: App Level Theming Usage

Replace theme-based `CanvasProvider` usage with CSS class-based theming.

```tsx
// Before:
<CanvasProvider theme={customTheme}>
  <App />
</CanvasProvider>

// After:
<CanvasProvider className={customThemeClass}>
  <App />
</CanvasProvider>
```

> **Note:** Using a class means you will need to define each property of the palette for full
> control over theming.

### Step 4: Test Component Rendering

Verify that Canvas Kit components (like `PrimaryButton`) correctly use the new CSS variables.

```tsx
// This should automatically use your CSS variable overrides
<PrimaryButton>Themed Button</PrimaryButton>
```

## Best Practices

### 1. Use Semantic Token Names

Use brand tokens instead of base tokens for better maintainability.

```css
/* ✅ Good - semantic meaning */
--cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);

/* ❌ Avoid - direct base token usage */
--cnvs-base-palette-blue-600: blue;
```

### 2. Test Accessibility

Ensure color combinations meet accessibility standards.

```css
/* Verify contrast ratios for text/background combinations */
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);
  --cnvs-brand-primary-accent: var(--cnvs-base-palette-neutral-0); /* White text */
}
```

### 3. Avoid Component Level Theming

Theming is meant to be done at the app level or root level of the application. Avoid theming at the
component level.

```tsx
/* ✅ Good - App level theming */

const myCustomTheme = createStyles({
  [brand.primary.base]: base.magenta600
})

<CanvasProvider className={myCustomTheme}>
  <App/>
</CanvasProvider>

/* ❌ Avoid - wrapping components to theme */

const myCustomTheme = createStyles({
  [brand.primary.base]: base.magenta600
})

<CanvasProvider className={myCustomTheme}>
  <PrimaryButton>Click Me</PrimaryButton>
</CanvasProvider>

```

## Component Compatibility

All Canvas Kit components in v14 automatically consume CSS variables. No component-level changes are
required when switching from the theme prop approach to CSS variables.

### Supported Components

- ✅ All Button variants (`PrimaryButton`, `SecondaryButton`, etc.)
- ✅ Form components (`TextInput`, `FormField`, etc.)
- ✅ Layout components (`Card`, `Modal`, etc.)
- ✅ Navigation components (`Tabs`, `SidePanel`, etc.)

## Performance Benefits

The CSS variable approach provides several performance improvements:

- **Reduced Bundle Size**: No JavaScript theme object processing
- **Better Caching**: CSS variables can be cached by the browser
- **Faster Rendering**: Native CSS cascade instead of JavaScript calculations
- **Runtime Efficiency**: No theme context propagation overhead

## Troubleshooting

### Theme Not Applied

Ensure CSS variable files are imported in the correct order.

> **Note:** You should only import the CSS variables _once_ at the root level of your application.
> If your application renders within another environment that imports these and sets them, **do
> not** re import them.

```css
/* Correct order */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

/* Your overrides after imports */
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
}
```

### Inconsistent Theming

Check for CSS specificity issues.

```css
/* Ensure your overrides have sufficient specificity */
:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600) !important;
}

/* Or use more specific selectors */
.my-app {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);
}
```

### Missing Token Values

Verify all required CSS token files are imported and token names are correct.

```tsx
// Check token availability in development
console.log(brand.primary.base); // Should output CSS variable name
```

## Conclusion

The migration to CSS variables in Canvas Kit v14 provides a more performant, flexible, and
maintainable theming solution. By following this guide and best practices, you can successfully
migrate your applications and take advantage of the improved theming capabilities.

For additional support and examples, refer to the Canvas Kit Storybook documentation and the
`@workday/canvas-tokens` [repository](https://github.com/Workday/canvas-tokens).
