# Color

## Usage Guidance

Our color choices promote visual clarity, making it easy for users to find what they need. We use a
consistent palette to create a seamless and intuitive experience across all sections of the
application.

To learn more about tokens in general, go to [Tokens Overview page](/styles/tokens/overview).

### Brand Colors

Brand tokens are themed variables designated for brand / tenant-level customization. They are not
connected to system tokens, which are intended to be application-wide. Brand tokens are used for our
buttons, focus rings, errors, inputs, and banners.

> **Note:** Action tokens don't have a color associated with them. They are meant to be used when you need a primary action to differ from the rest of the default theme. In the table below, no action token has been defined, therefore the color is blank.

[View our Brand Tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-brand-brand-tokens-new--docs)

## System Color Tokens

System tokens are themed variables intended to provide application-wide theming. They are not
connected to [Brand tokens](#brand-color-tokens), which are tenant-specific theming.

[View our system color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-overview--docs)

### Background

Colors with the prefix `bg` are page-level background colors. Use `bg/default` for most pages. Use `bg/alt` to emphasize primary content containers, such as cards.

**Component References:** Background tokens are used in page layouts, [Card](/components/containers/card) components, and container elements throughout Canvas Kit.

[View our background color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-background--docs)

### Surface

Surfaces are visual containers that hold content that sit on top of the page or other surfaces. Use surface colors on cards, modals, panels, dropdowns, sheets, etc.

[View our surface color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-surface--docs)

Surface colors may be nested within each other to create a visual hierarchy. When nesting surfaces, alternate between the default and alt surface colors.

Use `surface/alt` to suppress less important content and draw attention to primary surfaces. Muted surfaces visually recede, pushing focus towards main content while still creating a clear boundary without the use of shadows or colors.

### Accent

Accent colors are high-emphasis background colors used to draw attention to main actions and statuses.

**Component References:** Accent tokens are used in [PrimaryButton](/components/buttons/button), [Status Indicator](/components/indicators/status-indicator), and other high-emphasis interactive elements.

[View our accent color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-accent-background--docs)

**Do:**
- Use accent colors sparingly, on main areas of interest.

**Don't:**
- Don't use accent colors for general container backgrounds. Use `surface/` tokens instead.
- Don't use accent colors on alternative page or surface colors (`bg/alt`, `surface/alt`) even if they pass accessibility requirements.
- Don't use accent colors for page backgrounds or large surface areas.

### Interaction

State layers are overlays placed between or in front of background and foreground during user interaction. `surface` and `accent` colors use different tokens to create this effect (surfaces are lighter, accents are darker).

[View our overlay color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-overlay--docs)

**Do:**
- Use `surface/overlay/(hover/pressed)` for neutral `surface` colors.
- Use `accent/overlay/(hover/pressed)` for `accent` colors.

**Don't:**
- Don't use `surface/overlay/(hover/pressed)` on `accent` colors.
- Don't use `accent/overlay/(hover/pressed)` on `surface` colors.

**Suggestion:**
- Avoid using overlay colors on non-neutral surfaces.

### Foreground

Use foreground colors (or `fg`) to set the color of text and icons.

All `fg` colors except `fg/inverse` can be used on `surface/default`, `bg/default`, `surface/alt`, and `bg/alt`.

Match `fg` colors to the modifier of their background or surface color. `bg/default` and `surface/default` use `fg/default`. `surface/primary` uses `fg/primary`. `surface/primary/strong` uses `fg/primary/strong`.

Use `fg/inverse` on accent backgrounds (with the exception of `accent/warning` and `accent/caution`).

Use `fg/contrast` on `accent/warning` and `accent/caution` instead of `fg/inverse`.

**Component References:** Foreground tokens are used in [Button](/components/buttons/button) labels and icons, [Hyperlink](/components/buttons/button) text, [Text](/components/typography/text) components for headings and body text, [Icon](/components/icons/system-icon) components, [Status Indicator](/components/indicators/status-indicator) labels, and form input labels. See the [foreground color tokens Storybook](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-foreground--docs) for interactive examples.

[View our foreground color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-foreground--docs)

### Border

Border colors are used to create edges, dividers, and input field boundaries.

**Component References:** Border tokens are used in [Text Input](/components/inputs/text-input), [Text Area](/components/inputs/text-area), [Select](/components/inputs/select), [Checkbox](/components/inputs/checkbox), [Radio](/components/inputs/radio), [Card](/components/containers/card) edges, and [Divider](/components/layout/divider) components.

[View our border color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-border--docs)

### Shadow

Shadow colors are used on the base and ambient shadows that create Depth tokens.

**Component References:** Shadow tokens are used in [Card](/components/containers/card), [Modal](/components/popups/modal), [Popup](/components/popups/popup), [Menu](/components/popups/menu), and [Tooltip](/components/popups/tooltip) components to create depth and elevation.

[View our shadow color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-shadow--docs)

### Focus

Focus colors are used to indicate focus for keyboard navigation and accessibility. Apply to all interactive elements that receive keyboard focus.

**Component References:** Focus tokens are used in all interactive components including [Button](/components/buttons/button), [Hyperlink](/components/buttons/button), [Text Input](/components/inputs/text-input), [Select](/components/inputs/select), [Checkbox](/components/inputs/checkbox), [Radio](/components/inputs/radio), and other focusable elements.

[View our focus color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-focus--docs)

### Status

Status colors include `danger`, `success`, and `warning`. These colors are not brandable. Use these to denote the status of an object, task, or flow. If you're interested in displaying the status of something, check out the
[Status Indicator component](/components/indicators/status-indicator) or [Info Highlight](/components/indicators/info-highlight).

[View our static color tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-color-static--docs)

## Using our Colors

- Use `bg` for page backgrounds. Use one `bg` color per view, unless designing a split view.
- Use `surface` for containers like cards, modals, and panels.
- Use `accent` for high-emphasis actions like primary buttons and status indicators.
- Use `fg` for text and icons. Match `fg` colors to their background or surface modifier.
- Use `border` for edges, dividers, and input field boundaries.
- Use `shadow` for depth and elevation. Always combine `shadow/base` and `shadow/ambient` together.
- Use `focus` for keyboard focus indicators on all interactive elements.
- Use system color tokens, not base colors or raw values.
- Use defined contrast pairs to guarantee accessibility.

## Web Examples

Canvas Tokens can be consumed as either JavaScript variables or as CSS variables and class names.
The JavaScript token values reference CSS variable names, so if you're using JS tokens, you'll also
need to import the CSS variables in your application.

### Javascript / Typescript

```tsx
// styles.ts
import {system} from '@workday/canvas-tokens-web';

const styles = {
  backgroundColor: `var(${system.color.bg.default})`,
};
```

### CSS

```css
// styles.css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.card {
  background-color: var(--cnvs-sys-color-bg-default);
}
```

## All Colors

## Deprecated Colors
