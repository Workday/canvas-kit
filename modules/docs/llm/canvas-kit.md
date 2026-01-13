---
description: Best practices for Workday Canvas Kit - tokens, styling, components, and accessibility
globs: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js', '**/*.css']
alwaysApply: true
---

# Canvas Kit Best Practices

This file contains best practices for working with Workday Canvas Kit. Use these guidelines when
building components, styling, and implementing accessibility features.

## Token Usage Guidelines

### Always Use Design Tokens

- **Prefer system tokens** from `@workday/canvas-tokens-web` over raw CSS values
- Use semantic token names (e.g., `system.color.bg.primary.default`) instead of hardcoded colors
  (e.g., `#333`)
- Token hierarchy: base tokens → brand tokens → system tokens
- System tokens provide better theming support than base tokens

### Token Import Pattern

```tsx
import {system, brand, base} from '@workday/canvas-tokens-web';

// Import CSS variables once at app root level
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
```

### Token Usage Examples

```tsx
// ✅ Good - Use system tokens
const styles = createStyles({
  color: system.color.text.default,
  margin: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
});

// ❌ Avoid - Hardcoded values
const styles = createStyles({
  color: '#333',
  margin: '16px',
  backgroundColor: 'blue',
});
```

## Styling Best Practices

### Core Styling APIs

Canvas Kit uses a custom CSS-in-JS solution for static CSS generation and token integration:

- **`createStyles`** - Define reusable, static CSS objects
- **`createStencil`** - Define reusable, dynamic component styles with parts, vars, and modifiers
- **`cs` prop** - Apply multiple styles and handle merges consistently to Canvas Kit components

### Define Styles Outside Render Functions

**Critical:** Always declare styles at the module level. Creating styles inside render functions
causes performance issues.

```tsx
// ✅ Good - Module level
const buttonStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  color: system.color.text.inverse,
});

export const MyButton = () => <button className={buttonStyles}>Click me</button>;

// ❌ Bad - Inside render function
export const MyButton = () => {
  const buttonStyles = createStyles({backgroundColor: 'red'}); // Performance hit!
  return <button cs={buttonStyles}>Click me</button>;
};
```

### When to Use `createStyles`

Use `createStyles` for simple, reusable style objects that do **not** depend on dynamic data or
props:

- Defining base styles
- Applying static overrides
- Styling tokens-based components

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const uppercaseTextStyles = createStyles({
  textTransform: 'uppercase',
  margin: system.space.x4,
});

<Text cs={uppercaseTextStyles}>My uppercased text</Text>;
```

### When to Use `createStencil`

Use `createStencil` when styles depend on **props**, **variants**, or **component parts**:

- Size or color variants (`primary`, `secondary`)
- Compound state combinations (`size=small`, `iconPosition=end`)
- Multi-part components (e.g., `Button`, `Card`, `MenuItem`)

```tsx
const buttonStencil = createStencil({
  vars: {color: '', backgroundColor: ''},
  base: ({color, backgroundColor}) => ({
    color: cssVar(color, system.color.text.default),
    backgroundColor: cssVar(backgroundColor, system.color.bg.default),
  }),
  modifiers: {
    variant: {
      primary: {backgroundColor: system.color.bg.primary.default},
      secondary: {backgroundColor: system.color.bg.muted.default},
    },
  },
});
```

### Using the `cs` Prop

The `cs` prop accepts styles created by `createStyles`, `createStencil`, or `createVars`. Canvas Kit
components already handle style merging internally via `handleCsProp`:

```tsx
// ✅ Good - Pass styles to cs prop on Canvas Kit components
<PrimaryButton cs={myCustomStyles} />

// ✅ Good - Multiple styles via array
<PrimaryButton cs={[baseStyles, variantStyles]} />
```

**Important:** When building custom components, use `handleCsProp` to properly merge `className`,
`style`, and `cs` props. Do not manually concatenate class names:

```tsx
// ✅ Good - Use handleCsProp in custom components
const MyComponent = elemProps => {
  return <div {...handleCsProp(elemProps, myStyles)} />;
};

// ❌ Avoid - Manual className concatenation loses style merging
<div className={`${baseStyles} ${variantStyles}`} />;
```

### CSS Logical Properties for RTL Support

Use CSS logical properties instead of physical properties for RTL compatibility:

```tsx
// ✅ Good - Logical properties (adapt to RTL automatically)
const styles = createStyles({
  marginInlineStart: system.space.x4,
  paddingInlineEnd: system.space.x2,
  borderInlineStart: `1px solid ${system.color.border.default}`,
});

// ❌ Avoid - Physical properties (don't adapt to RTL)
const styles = createStyles({
  marginLeft: system.space.x4,
  paddingRight: system.space.x2,
  borderLeft: `1px solid ${system.color.border.default}`,
});
```

### Utility Functions

- **`px2rem()`** - Convert pixel values to rem units
- **`cssVar()`** - Wrap tokens in CSS variable syntax with optional fallback
- **`calc`** - Math operations with CSS calc() and variables

```tsx
import {px2rem, cssVar, calc} from '@workday/canvas-kit-styling';

const styles = createStyles({
  margin: px2rem(8), // Converts 8px to rem
  padding: calc.add(system.space.x1, '0.125rem'),
  color: cssVar(system.color.text.default, '#000'), // With fallback
});
```

### Avoid Emotion Runtime APIs

- Avoid `styled()` from `@emotion/styled` for new code
- Avoid inline style objects in `cs` prop (use `createStyles` or `createStencil` instead)
- Don't mix Emotion and static styling approaches

## Component Patterns

### Compound Components

Prefer the compound component pattern for flexible, semantic component APIs:

```tsx
// ✅ Good - Compound component pattern
<Tabs>
  <Tabs.List>
    <Tabs.Item>First Tab</Tabs.Item>
    <Tabs.Item>Second Tab</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>First Tab Contents</Tabs.Panel>
  <Tabs.Panel>Second Tab Contents</Tabs.Panel>
</Tabs>

// ❌ Avoid - Configuration component (less flexible)
<Tabs
  items={[
    {title: 'First Tab', content: 'First Tab Contents'},
    {title: 'Second Tab', content: 'Second Tab Contents'},
  ]}
/>
```

### Controlled Components

- Prefer controlled components wherever possible
- Manage minimal state within components
- Use standard event handlers: `value` and `onChange` for inputs, `checked` and `onChange` for
  checkboxes

```tsx
// ✅ Good - Controlled component
const [value, setValue] = useState('');
<TextInput value={value} onChange={e => setValue(e.target.value)} />;
```

### Prop Spreading Pattern

Use Canvas Kit utility functions to handle ref forwarding and HTML attribute extraction:

**For simple components**, use `createComponent`:

```tsx
import {createComponent} from '@workday/canvas-kit-react/common';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button = createComponent('button')({
  displayName: 'Button',
  Component: ({variant, size, children, ...elemProps}: ButtonProps, ref, Element) => {
    return (
      <Element ref={ref} {...elemProps}>
        {children}
      </Element>
    );
  },
});
```

`createComponent` automatically handles:
- Ref forwarding
- HTML attribute extraction based on the element type
- The `as` prop for changing the rendered element
- Proper TypeScript typing

**For compound components with models**, use `createContainer` and `createSubComponent`:

```tsx
import {createContainer, createSubComponent} from '@workday/canvas-kit-react/common';

// Container component
export const Disclosure = createContainer()({
  displayName: 'Disclosure',
  modelHook: useDisclosureModel,
  subComponents: {
    Target: DisclosureTarget,
    Content: DisclosureContent,
  },
})<DisclosureProps>(({children}) => {
  return <>{children}</>;
});

// Sub-component
export const DisclosureTarget = createSubComponent('button')({
  modelHook: useDisclosureModel,
})<DisclosureTargetProps>((elemProps, Element, model) => {
  return (
    <Element
      onClick={() => model.events.toggle()}
      {...elemProps}
    />
  );
});
```

These utilities handle ref forwarding, HTML attribute extraction, and model context automatically.

### CanvasProvider

Wrap your application in `<CanvasProvider>` for proper styling context and Emotion cache:

```tsx
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>
  <App />
</CanvasProvider>;
```

### Using `handleCsProp`

When building custom components with stencils, use `handleCsProp` to merge props:

```tsx
import {handleCsProp} from '@workday/canvas-kit-styling';

const MyComponent = elemProps => {
  return <div {...handleCsProp(elemProps, myStencil({}))} />;
};
```

## Common Patterns

### Style Definition Location

**Always define styles at module level**, never inside render functions or component bodies:

```tsx
// ✅ Good
const cardStyles = createStyles({
  padding: system.space.x4,
});

export const Card = () => <div className={cardStyles}>Content</div>;

// ❌ Bad
export const Card = () => {
  const cardStyles = createStyles({padding: system.space.x4});
  return <div className={cardStyles}>Content</div>;
};
```

### Modifiers Over Conditionals

Use modifiers for variants/states instead of conditional logic:

```tsx
// ✅ Good - Use modifiers
const badgeStencil = createStencil({
  modifiers: {
    status: {
      success: {background: system.color.bg.success.default},
      error: {background: system.color.bg.negative.default},
    },
  },
});

// ❌ Avoid - Conditional logic in styles
const badgeStyles = status =>
  createStyles({
    background: status === 'success' ? 'green' : 'red', // Breaks static compilation
  });
```

### CSS Variables for Dynamic Values

Use CSS variables (via stencil vars) for dynamic values instead of inline styles:

```tsx
// ✅ Good - CSS variables
const buttonStencil = createStencil({
  vars: {backgroundColor: ''},
  base: ({backgroundColor}) => ({
    backgroundColor: cssVar(backgroundColor, system.color.bg.default),
  }),
});

// ❌ Avoid - Inline styles
<Button style={{backgroundColor: dynamicColor}} />;
```

### Extending Existing Stencils

Extend existing stencils rather than creating from scratch:

```tsx
// ✅ Good - Extend existing stencil
const customIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    margin: system.space.x2,
  },
});

// ❌ Avoid - Recreating from scratch
const customIconStencil = createStencil({
  base: {
    // Re-implementing all systemIconStencil styles...
  },
});
```

### Unique IDs

Use `useUniqueId()` hook for generating unique IDs for accessibility:

```tsx
import {useUniqueId} from '@workday/canvas-kit-react/common';

const MyTable = () => {
  const tableHeadingId = useUniqueId();

  return (
    <>
      <Heading id={tableHeadingId}>Pizza Toppings</Heading>
      <Table aria-labelledby={tableHeadingId}>{/* table rows */}</Table>
    </>
  );
};
```

### Naming Conventions

- Prop names should **never** include the component name (e.g., `type`, not `buttonType`)
- Use the same props for the same concepts across components
- Avoid names that reference color, position, and size (use semantic names instead)
- Use T-shirt sizes: `xs, s, m, l, xl` (not `sm`)

### Event Handlers

- Always use standard `on{Descriptor}{Event}` naming (`onClick`, `onChange`, etc.)
- Event handlers should receive an event unless there's a good reason otherwise
- Use standard browser events wherever possible

## Accessibility Guidelines

### Core Principle

**"No ARIA is better than Bad ARIA"**

Canvas Kit components are built with semantic HTML and include required ARIA according to WAI-ARIA
1.2 specification and ARIA Authoring Practices Guide.

### Accessible Names

Provide accessible names using this priority order:

1. `aria-labelledby` (unique id)
2. `aria-label` (string)
3. `<label>` and `for` attribute with unique `id` (for inputs)
4. `placeholder` (for inputs)
5. `alt` (for images)
6. Text content (between opening and closing tags)
7. `title` (string)

**Best practices:**

- Prefer visible text and native techniques (HTML labels)
- Avoid browser fallback like `title` attribute or placeholder values
- Keep names brief and useful
- Always test thoroughly

### Keyboard Navigation

- Ensure full keyboard navigation for all interactive components
- Check whether tabbing is sufficient or if additional keyboard navigation is required (e.g., arrow
  keys)
- Use semantic HTML elements (e.g., `<button>` for actions) to get keyboard handling for free

### Semantic HTML

- Use the correct native element wherever possible (e.g., `<button>` for actions, not `<div>`)
- This enables browser behavior for free (keyboard handling, focus management, etc.)

### Screen Reader Support

- Use `<AccessibleHide>` component for screen-reader-only content:

```tsx
import {AccessibleHide} from '@workday/canvas-kit-react/common';

<AccessibleHide>
  This text is hidden using CSS and still available to screen readers.
</AccessibleHide>;
```

- Use `<AriaLiveRegion>` for dynamic content announcements:

```tsx
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';

<AriaLiveRegion>
  When this text is updated, screen readers will announce it automatically.
</AriaLiveRegion>;
```

### Responsiveness and Reflow

**WCAG 2.2 Success Criterion 1.4.10 Reflow:**

- Content should be presented without loss of information or functionality at 320 CSS pixels width
- Do not specify minimum width greater than `320px` to avoid horizontal scroll
- Do not use sticky headers or footers at smallest responsive breakpoints
- Test at 400% browser zoom (equivalent to 320px width)

### Testing Accessibility

- Test with screen readers
- Test keyboard-only navigation
- Test at 400% zoom for reflow compliance
- Verify color contrast ratios meet WCAG standards
- Use browser accessibility tools (Chrome DevTools Accessibility Tree)

## Theming Guidelines

### Global Theming (Recommended)

Apply theming at the global level using CSS variables:

```css
/* index.css */
@import '@workday/canvas-tokens-web/css/base/_variables.css';
@import '@workday/canvas-tokens-web/css/system/_variables.css';
@import '@workday/canvas-tokens-web/css/brand/_variables.css';

:root {
  --cnvs-brand-primary-base: var(--cnvs-base-palette-magenta-600);
  --cnvs-brand-primary-dark: var(--cnvs-base-palette-magenta-700);
}
```

### Scoped Theming

Only use scoped theming when you intentionally need a different theme for a specific section:

- Embedding Canvas Kit components in third-party applications
- Creating preview panels with different themes
- Multi-tenant applications with different branding

**Warning:** Scoped theming creates a cascade barrier that will break global theming.

### Token Selection for Theming

Use semantic token names (brand tokens) instead of base tokens:

```css
/* ✅ Good - Semantic meaning */
--cnvs-brand-primary-base: var(--cnvs-base-palette-blue-600);

/* ❌ Avoid - Direct base token usage */
--cnvs-base-palette-blue-600: blue;
```

### Theming Best Practices

- Theming should be done at the app level or root level, not at component level
- Test accessibility when overriding colors (ensure contrast ratios)
- Import CSS variables only once at the root level of your application

## Code Style

### Default Props

Use default props with destructuring:

```tsx
interface CheckboxProps {
  /**
   * If true, sets the Checkbox checked to true
   * @default false
   */
  checked?: boolean;
}

const {checked = false, disabled = false} = props;
```

### Exports

- Avoid default exports
- Export everything else as named exports (`export * from ...`)
- Consider naming of exports to avoid clashes
