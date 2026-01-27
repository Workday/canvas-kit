# What's New in v4

Canvas Tokens v4 introduces significant updates to align with **Workday X Sana integration**,
providing enhanced scalability, better product support, and a more comprehensive token system. This
release focuses on improving the color system with extended alpha scales, updating brand tokens to
use numerical naming conventions, and introducing new surface, focus, accent, and semantic tokens.

## Overview of Changes

The v4 release includes:

- **Extended alpha scales** across base color palettes (A25, A50, A100, A200)
- **New magenta palette** added to the color system
- **Brand token updates** with numerical naming (25, 50, 100, 200...900, 950, 975)
- **Comprehensive surface token system** for better UI component support
- **New semantic tokens** for size, space, shape, and breakpoints
- **Deprecation of legacy tokens** with clear migration paths

## Base Color Palette Updates

### Alpha Scale Extensions

Base color palettes have been updated by adding alpha scales: **A25, A50, A100, A200**. Extended
alpha range (**A0-A975**) has been added to slate, neutral, and white palettes.

### New Magenta Palette

A new **magenta palette** has been added to the color system, providing additional color options for
design consistency.

## Brand Token Updates

Brand tokens have been updated to use **numerical names** (25, 50, 100, 200...900, 950, 975) and
alpha colors (A25, A50, A100, A200) for better scalability and improved support across different
products.

### Deprecated Brand Scale Names

The old token naming convention using descriptive names (`darkest`, `darker`, `dark`, `base`,
`light`, `lighter`, `lightest`) has been deprecated in favor of the numerical scale.

### Brand Common Token Updates

Brand common tokens have been updated with new naming:

- `focus-outline` → `focus`
- `error-inner` → `critical`
- `alert-inner` → `caution.inner`
- `alert-outer` → `caution.outer`

Old common tokens have been deprecated.

## System Token Updates

### Surface Color Tokens

A comprehensive new color token group `system.color.surface.*` has been added to replace the
previous `color.bg.surface.*` tokens. This new system provides better semantic naming and clearer
organization for surface colors used across UI components, including containers, modals, popovers,
and interactive states.



| Token                     | JS Value                | CSS Variable                                    | Use For                         |
| ------------------------- | -------------------- | ----------------------------------------------- | ------------------------------- |
| color.surface.default     | `{base.neutral0}` | `--cnvs-sys-color-surface-default`              | Primary content surfaces        |
| color.surface.alt.default | `{base.slateA50}` | `--cnvs-sys-color-surface-alt-default`           | De-emphasized secondary content |
| color.surface.alt.strong  | `{base.slateA100}` | `--cnvs-sys-color-surface-alt-strong`           | Stronger de-emphasis            |
| color.surface.navigation  | `{base.neutralA0}` | `--cnvs-sys-color-surface-navigation`           | Global navigation (transparent) |
| color.surface.popover     | `{base.neutral0}` | `--cnvs-sys-color-surface-popover`              | Popover containers              |
| color.surface.modal       | `{base.neutral0}` | `--cnvs-sys-color-surface-modal`                | Modal containers                |
| color.surface.raised      | `{base.slateA25}` | `--cnvs-sys-color-surface-raised`               | Elevated surfaces               |
| color.surface.loading     | `{base.slateA200}` | `--cnvs-sys-color-surface-loading`              | Skeleton/loading states         |
| color.surface.transparent | `{base.neutralA0}` | `--cnvs-sys-color-surface-transparent`          | Transparent surfaces            |
| color.surface.inverse     | `{base.neutral0}` | `--cnvs-sys-color-surface-inverse`              | Inverse surfaces                |


#### Semantic Surface Tokens

Semantic surface tokens provide color-coded backgrounds for status indicators and feedback states,
using alpha variants of the base palette colors for subtle yet clear visual communication.



| Token                         | JS Value               | CSS Variable                        |
| ----------------------------- | ------------------- | ------------------------------------ |
| color.surface.info.default    | `{base.blueA25}`  | `--cnvs-sys-color-surface-info-default` |
| color.surface.info.strong     | `{base.blueA50}`  | `--cnvs-sys-color-surface-info-strong` |
| color.surface.danger.default  | `{base.redA25}`   | `--cnvs-sys-color-surface-danger-default` |
| color.surface.danger.strong   | `{base.redA50}`   | `--cnvs-sys-color-surface-danger-strong` |
| color.surface.warning.default | `{base.amberA25}` | `--cnvs-sys-color-surface-warning-default` |
| color.surface.warning.strong  | `{base.amberA50}` | `--cnvs-sys-color-surface-warning-strong` |
| color.surface.success.default | `{base.greenA25}` | `--cnvs-sys-color-surface-success-default` |
| color.surface.success.strong  | `{base.greenA50}` | `--cnvs-sys-color-surface-success-strong` |


#### Contrast Surface Tokens

Contrast surface tokens provide high-contrast backgrounds for surfaces that need to stand out
prominently, typically used for elevated or emphasized content areas.



| Token                          | JS Value                  | CSS Variable                        |
| ------------------------------ | ---------------------- | ------------------------------------ |
| color.surface.contrast.default | `{base.neutralA900}` | `--cnvs-sys-color-surface-contrast-default` |
| color.surface.contrast.strong  | `{base.neutralA950}` | `--cnvs-sys-color-surface-contrast-strong` |


#### AI Surface Tokens

AI surface tokens provide specialized colors for AI-related UI components and interactions,
supporting hover and pressed states for interactive AI elements.



| Token                    | JS Value               | CSS Variable                        |
| ------------------------ | ------------------- | ------------------------------------ |
| color.surface.ai.default | `{base.blueA100}` | `--cnvs-sys-color-surface-ai-default` |
| color.surface.ai.hover   | `{base.blueA200}` | `--cnvs-sys-color-surface-ai-hover` |
| color.surface.ai.pressed | `{base.blueA200}` | `--cnvs-sys-color-surface-ai-pressed` |


#### Interaction Overlay Tokens

Interaction overlay tokens define visual feedback for hover and pressed states on interactive
surfaces, with separate variants for default and inverse color schemes. The scrim token provides a
backdrop overlay for modal and dialog interactions.



| Token                                 | JS Value                  | CSS Variable                        |
| ------------------------------------- | ---------------------- | ------------------------------------ |
| color.surface.overlay.hover.default   | `{base.slateA50}`    | `--cnvs-sys-color-surface-overlay-hover-default` |
| color.surface.overlay.hover.inverse   | `{base.whiteA200}`   | `--cnvs-sys-color-surface-overlay-hover-inverse` |
| color.surface.overlay.pressed.default | `{base.slateA100}`   | `--cnvs-sys-color-surface-overlay-pressed-default` |
| color.surface.overlay.pressed.inverse | `{base.whiteA300}`   | `--cnvs-sys-color-surface-overlay-pressed-inverse` |
| color.surface.overlay.scrim           | `{base.neutralA400}` | `--cnvs-sys-color-surface-overlay-scrim` |


### Brand Surface Tokens

Brand surface tokens provide brand-colored backgrounds for status indicators, feedback messages, and
selected states. These tokens use alpha variants of brand colors to create subtle yet recognizable
brand-aligned surfaces with default and strong intensity options.



| Token                                | JS Value                | CSS Variable                        |
| ------------------------------------ | -------------------- | ------------------------------------ |
| color.brand.surface.primary.default  | `{brand.primaryA25}`  | `--cnvs-sys-color-brand-surface-primary-default` |
| color.brand.surface.primary.strong   | `{brand.primaryA50}`  | `--cnvs-sys-color-brand-surface-primary-strong` |
| color.brand.surface.critical.default | `{brand.criticalA25}` | `--cnvs-sys-color-brand-surface-critical-default` |
| color.brand.surface.critical.strong  | `{brand.criticalA50}` | `--cnvs-sys-color-brand-surface-critical-strong` |
| color.brand.surface.caution.default  | `{brand.cautionA25}`  | `--cnvs-sys-color-brand-surface-caution-default` |
| color.brand.surface.caution.strong   | `{brand.cautionA50}`  | `--cnvs-sys-color-brand-surface-caution-strong` |
| color.brand.surface.positive.default | `{brand.positiveA25}` | `--cnvs-sys-color-brand-surface-positive-default` |
| color.brand.surface.positive.strong  | `{brand.positiveA50}` | `--cnvs-sys-color-brand-surface-positive-strong` |
| color.brand.surface.selected         | `{brand.primaryA50}`  | `--cnvs-sys-color-brand-surface-selected` |


### Focus Tokens

New focus tokens provide consistent focus indicators across the design system, supporting both
standard and high-contrast scenarios.



| Token                | JS Value                  | CSS Variable                        |
| -------------------- | ---------------------- | ------------------------------------ |
| color.focus.inverse  | `{base.neutral0}`    | `--cnvs-sys-color-focus-inverse`     |
| color.focus.contrast | `{base.neutralA900}` | `--cnvs-sys-color-focus-contrast`     |


### Brand Focus Tokens

Brand focus tokens provide brand-aligned focus indicators for primary, critical, and caution states,
with separate inner and outer variants for caution to support layered alert designs.



| Token                           | JS Value                | CSS Variable                        |
| ------------------------------- | -------------------- | ------------------------------------ |
| color.brand.focus.primary       | `{brand.primary500}`  | `--cnvs-sys-color-brand-focus-primary` |
| color.brand.focus.critical      | `{brand.critical500}` | `--cnvs-sys-color-brand-focus-critical` |
| color.brand.focus.caution.outer | `{brand.caution500}`  | `--cnvs-sys-color-brand-focus-caution-outer` |
| color.brand.focus.caution.inner | `{brand.caution400}`  | `--cnvs-sys-color-brand-focus-caution-inner` |


### Accent Tokens

New accent tokens provide semantic color values for UI elements that need to stand out or convey
meaning, including status indicators, interactive overlays, and muted variants for subtle emphasis.



| Token                        | JS Value                  | CSS Variable                        |
| ---------------------------- | ---------------------- | ------------------------------------ |
| color.accent.info            | `{base.blue600}`     | `--cnvs-sys-color-accent-info`       |
| color.accent.danger          | `{base.red600}`      | `--cnvs-sys-color-accent-danger`     |
| color.accent.warning         | `{base.amber400}`    | `--cnvs-sys-color-accent-warning`    |
| color.accent.success         | `{base.green600}`    | `--cnvs-sys-color-accent-success`    |
| color.accent.ai              | `{base.blue950}`     | `--cnvs-sys-color-accent-ai`         |
| color.accent.contrast        | `{base.neutralA900}` | `--cnvs-sys-color-accent-contrast`   |
| color.accent.muted.default   | `{base.slate600}`    | `--cnvs-sys-color-accent-muted-default` |
| color.accent.muted.soft      | `{base.slate400}`    | `--cnvs-sys-color-accent-muted-soft` |
| color.accent.overlay.hover   | `{base.neutralA200}` | `--cnvs-sys-color-accent-overlay-hover` |
| color.accent.overlay.pressed | `{base.neutralA400}` | `--cnvs-sys-color-accent-overlay-pressed` |


### Brand Accent Tokens

Brand accent tokens provide brand-aligned accent colors for primary actions, critical states,
caution indicators, and positive feedback, ensuring consistent brand expression across interactive
elements.



| Token                       | JS Value                | CSS Variable                        |
| --------------------------- | -------------------- | ------------------------------------ |
| color.brand.accent.primary  | `{brand.primary600}`  | `--cnvs-sys-color-brand-accent-primary` |
| color.brand.accent.critical | `{brand.critical600}` | `--cnvs-sys-color-brand-accent-critical` |
| color.brand.accent.caution  | `{brand.caution400}`  | `--cnvs-sys-color-brand-accent-caution` |
| color.brand.accent.positive | `{brand.positive600}` | `--cnvs-sys-color-brand-accent-positive` |
| color.brand.accent.action   | `{brand.primary600}`  | `--cnvs-sys-color-brand-accent-action` |


### Foreground Token Updates

Foreground tokens have been updated to use alpha variants for better contrast control and
consistency with the new alpha scale system. These updates provide more granular control over text
hierarchy and readability.



| Token                     | JS Value                  | CSS Variable                        |
| ------------------------- | ---------------------- | ------------------------------------ |
| color.fg.default          | `{base.neutralA800}` | `--cnvs-sys-color-fg-default`       |
| color.fg.strong           | `{base.neutralA900}` | `--cnvs-sys-color-fg-strong`         |
| color.fg.stronger         | `{base.neutralA950}` | `--cnvs-sys-color-fg-stronger`       |
| color.fg.disabled         | `{base.slateA400}`   | `--cnvs-sys-color-fg-disabled`       |
| color.fg.muted.default    | `{base.slateA600}`   | `--cnvs-sys-color-fg-muted-default`  |
| color.fg.muted.strong     | `{base.slateA700}`   | `--cnvs-sys-color-fg-muted-strong`   |
| color.fg.contrast.default | `{base.neutralA900}` | `--cnvs-sys-color-fg-contrast-default` |
| color.fg.contrast.strong  | `{base.neutralA950}`    | `--cnvs-sys-color-fg-contrast-strong` |


#### Semantic Foreground Colors

Semantic foreground colors provide text colors for status messages, alerts, and feedback, with
default and strong variants for different emphasis levels. These tokens ensure consistent color
usage for informational, warning, error, and success states, plus specialized tokens for AI-related
content and inverse text.



| Token                    | JS Value               | CSS Variable                        |
| ------------------------ | ------------------- | ------------------------------------ |
| color.fg.info.default    | `{base.blue600}`    | `--cnvs-sys-color-fg-info-default`  |
| color.fg.info.strong     | `{base.blue700}`  | `--cnvs-sys-color-fg-info-strong`    |
| color.fg.danger.default  | `{base.red600}`   | `--cnvs-sys-color-fg-danger-default` |
| color.fg.danger.strong   | `{base.red700}`   | `--cnvs-sys-color-fg-danger-strong` |
| color.fg.warning.default | `{base.amber600}` | `--cnvs-sys-color-fg-warning-default` |
| color.fg.warning.strong  | `{base.amber700}` | `--cnvs-sys-color-fg-warning-strong` |
| color.fg.success.default | `{base.green600}` | `--cnvs-sys-color-fg-success-default` |
| color.fg.success.strong  | `{base.green700}` | `--cnvs-sys-color-fg-success-strong` |
| color.fg.ai              | `{base.blue950}`  | `--cnvs-sys-color-fg-ai`             |
| color.fg.inverse         | `{base.neutral0}` | `--cnvs-sys-color-fg-inverse`        |


### Brand Foreground References

Brand foreground tokens provide text colors that align with brand colors, offering default and
strong variants for different emphasis levels. These tokens are used for brand-colored text, links,
and selected states.



| Token                           | JS Value                | CSS Variable                        |
| ------------------------------- | -------------------- | ------------------------------------ |
| color.brand.fg.primary.default  | `{brand.primary600}`  | `--cnvs-sys-color-brand-fg-primary-default` |
| color.brand.fg.primary.strong   | `{brand.primary700}`  | `--cnvs-sys-color-brand-fg-primary-strong` |
| color.brand.fg.critical.default | `{brand.critical600}` | `--cnvs-sys-color-brand-fg-critical-default` |
| color.brand.fg.critical.strong  | `{brand.critical700}` | `--cnvs-sys-color-brand-fg-critical-strong` |
| color.brand.fg.caution.default  | `{brand.caution600}`  | `--cnvs-sys-color-brand-fg-caution-default` |
| color.brand.fg.caution.strong   | `{brand.caution700}`  | `--cnvs-sys-color-brand-fg-caution-strong` |
| color.brand.fg.positive.default | `{brand.positive600}` | `--cnvs-sys-color-brand-fg-positive-default` |
| color.brand.fg.positive.strong  | `{brand.positive700}` | `--cnvs-sys-color-brand-fg-positive-strong` |
| color.brand.fg.selected         | `{brand.primary700}`  | `--cnvs-sys-color-brand-fg-selected` |


### Border Token Updates

Border tokens have been updated to use alpha variants and provide more semantic options for
different border use cases, including input fields, status indicators, and inverse color schemes.



| Token                        | JS Value                  | CSS Variable                        |
| ---------------------------- | ---------------------- | ------------------------------------ |
| color.border.default         | `{base.slateA200}`   | `--cnvs-sys-color-border-default`   |
| color.border.strong          | `{base.slateA300}`   | `--cnvs-sys-color-border-strong`     |
| color.border.input.default   | `{base.slateA500}`   | `--cnvs-sys-color-border-input-default` |
| color.border.input.hover     | `{base.slateA700}`   | `--cnvs-sys-color-border-input-hover` |
| color.border.info            | `{base.blue500}`     | `--cnvs-sys-color-border-info`       |
| color.border.danger          | `{base.red500}`      | `--cnvs-sys-color-border-danger`      |
| color.border.warning         | `{base.amber400}`    | `--cnvs-sys-color-border-warning`     |
| color.border.contrast        | `{base.neutralA900}` | `--cnvs-sys-color-border-contrast`    |
| color.border.transparent     | `{base.neutralA0}`   | `--cnvs-sys-color-border-transparent` |
| color.border.inverse | `{base.whiteA500}`   | `--cnvs-sys-color-border-inverse-default` |
| color.border.inverse.strong  | `{base.whiteA700}`   | `--cnvs-sys-color-border-inverse-strong` |


### Brand Border Tokens

Brand border tokens provide brand-aligned border colors for primary, critical, and caution states,
ensuring consistent brand expression in bordered components and status indicators.



| Token                              | JS Value                | CSS Variable                        |
| ---------------------------------- | -------------------- | ------------------------------------ |
| color.brand.border.primary.default | `{brand.primary500}`  | `--cnvs-sys-color-brand-border-primary-default` |
| color.brand.border.critical        | `{brand.critical500}` | `--cnvs-sys-color-brand-border-critical` |
| color.brand.border.caution         | `{brand.caution400}`  | `--cnvs-sys-color-brand-border-caution` |


### Shadow Tokens

Shadow tokens define the color values used for drop shadows and elevation effects, using alpha
variants of slate to create subtle depth and layering in the UI.



| Token                | JS Value                | CSS Variable                        |
| -------------------- | -------------------- | ------------------------------------ |
| color.shadow.base    | `{base.slateA200}` | `--cnvs-sys-color-shadow-base`       |
| color.shadow.ambient | `{base.slateA100}` | `--cnvs-sys-color-shadow-ambient`    |


### Semantic Size Tokens

New semantic size tokens provide meaningful size values mapped to specific use cases, replacing
generic numeric values with descriptive names that clearly indicate their intended purpose. This
improves code readability and ensures consistent sizing across components.



| Token     | JS Value        | CSS Variable                | Description                               |
| --------- | ------------ | --------------------------- | ----------------------------------------- |
| size.xxxs | `{base.size200}` | `--cnvs-sys-size-xxxs`    | Switch Track                              |
| size.xxs  | `{base.size250}` | `--cnvs-sys-size-xxs`     | Switch Track                              |
| size.xs   | `{base.size300}` | `--cnvs-sys-size-xs`      | Count Badge                               |
| size.sm   | `{base.size400}` | `--cnvs-sys-size-sm`      | X-Small Buttons, Pills, Checkboxes        |
| size.md   | `{base.size500}` | `--cnvs-sys-size-md`      | Small Buttons, Segmented Control, Tooltip |
| size.lg   | `{base.size600}` | `--cnvs-sys-size-lg`      | Medium Buttons, Input Fields, Menu Items  |
| size.xl   | `{base.size700}` | `--cnvs-sys-size-xl`      | Large Buttons, Tabs, Avatar               |
| size.xxl  | `{base.size800}` | `--cnvs-sys-size-xxl`     | Table Cell, Toast                         |


### Space Tokens

Space tokens have been reorganized into semantic padding and gap tokens, replacing the previous
generic `space.*` tokens. This provides clearer intent and better alignment with common CSS
properties.

### Padding Tokens



| Token        | JS Value        | CSS Variable                | Description                        |
| ------------ | ------------ | --------------------------- | ---------------------------------- |
| padding.none | `{base.size0}` | `--cnvs-sys-padding-none` | No space between content and edges |
| padding.xxs  | `{base.size50}` | `--cnvs-sys-padding-xxs`  | Compact padding                    |
| padding.xs   | `{base.size100}` | `--cnvs-sys-padding-xs`  | Horizontal padding on Input Fields |
| padding.sm   | `{base.size150}` | `--cnvs-sys-padding-sm`  | Rich Text Editor, X-Small Buttons  |
| padding.md   | `{base.size200}` | `--cnvs-sys-padding-md`  | Small Button content               |
| padding.lg   | `{base.size250}` | `--cnvs-sys-padding-lg`  | Medium Buttons with Icons          |
| padding.xl   | `{base.size300}` | `--cnvs-sys-padding-xl`  | Card and Medium Button content     |
| padding.xxl  | `{base.size400}` | `--cnvs-sys-padding-xxl` | Modal and Large Button content     |


### Gap Tokens

Gap tokens define spacing between elements in flexbox and grid layouts, providing consistent spacing
for component relationships and content organization.



| Token    | JS Value        | CSS Variable                | Description                            |
| -------- | ------------ | --------------------------- | -------------------------------------- |
| gap.none | `{base.size0}` | `--cnvs-sys-gap-none`     | No space between elements              |
| gap.xs   | `{base.size50}` | `--cnvs-sys-gap-xs`       | Icon to text, labels to inputs         |
| gap.sm   | `{base.size100}` | `--cnvs-sys-gap-sm`     | Pills, buttons, inline icon to text    |
| gap.md   | `{base.size200}` | `--cnvs-sys-gap-md`     | Default inline spacing                 |
| gap.lg   | `{base.size300}` | `--cnvs-sys-gap-lg`     | Tighter spacing between cards          |
| gap.xl   | `{base.size400}` | `--cnvs-sys-gap-xl`     | Default card spacing, 12-column gutter |
| gap.xxl  | `{base.size800}` | `--cnvs-sys-gap-xxl`    | Space between content sections         |


## Shape Token Updates

Shape tokens define border radius values for rounded corners across components. The token system has
been updated with new larger values (xl, xxl, xxxl) to support modern design patterns requiring more
pronounced rounding on larger containers and elevated surfaces.



| Token      | JS Value            | CSS Variable                | Description                       |
| ---------- | ---------------- | --------------------------- | --------------------------------- |
| shape.none | `{base.size0}`   | `--cnvs-sys-shape-none`     | Full-width containers             |
| shape.sm   | `{base.size50}`  | `--cnvs-sys-shape-sm`       | Inputs, Toasts, Tooltips          |
| shape.md   | `{base.size100}` | `--cnvs-sys-shape-md`       | Cards, Menus                      |
| shape.lg   | `{base.size150}` | `--cnvs-sys-shape-lg`       | Dialogs, Modals, Bottom Sheets    |
| shape.xl   | `{base.size200}` | `--cnvs-sys-shape-xl`       | Extra large rounding (NEW)        |
| shape.xxl  | `{base.size300}` | `--cnvs-sys-shape-xxl`      | Cards and elevated items (NEW)    |
| shape.xxxl | `{base.size400}` | `--cnvs-sys-shape-xxxl`     | Modals and large containers (NEW) |
| shape.full | `{base.size75}` \* 100 | `--cnvs-sys-shape-full` | Buttons, Badge, Status Indicator  |


### Breakpoint Updates

Breakpoint tokens define responsive design breakpoints for different screen sizes. The system has
been updated with clearer naming (replacing single-letter tokens) and a new `xl` breakpoint to
support wide monitor displays, ensuring better responsive design coverage across all device types.



| Token            | JS Value              | CSS Variable                | Description                  |
| ---------------- | ------------------ | --------------------------- | ---------------------------- |
| breakpoints.zero | 0                  | `--cnvs-sys-breakpoints-zero` | Below small                  |
| breakpoints.sm   | `{base.baseline}` \* 40  | `--cnvs-sys-breakpoints-sm` | Mobile devices (320px)       |
| breakpoints.md   | `{base.baseline}` \* 96 | `--cnvs-sys-breakpoints-md` | Laptops (768px)              |
| breakpoints.lg   | `{base.baseline}` \* 128 | `--cnvs-sys-breakpoints-lg` | Desktops (1024px)            |
| breakpoints.xl   | `{base.baseline}` \* 180 | `--cnvs-sys-breakpoints-xl` | Wide monitors (NEW - 1440px) |


## Deprecated Tokens

The following tokens have been deprecated in v4. Each deprecated token now **points to a new token value** - the deprecated tokens will continue to work but resolve to their replacement values. We strongly recommend updating your code to use the new token names directly.

### Key Migration Example

One of the most common deprecated tokens is `sys.color.bg.primary.default`, which now points to `sys.color.brand.accent.primary`:

```javascript
// ❌ Deprecated (still works, but points to new value)
sys.color.bg.primary.default
// → resolves to: sys.color.brand.accent.primary

// ✅ Recommended (use directly)
sys.color.brand.accent.primary
```

This pattern applies to many deprecated tokens - they act as aliases that point to their replacement values. While deprecated tokens will continue to function, using the new token names directly ensures better code clarity and future compatibility.

### Deprecated Brand Tokens



| Deprecated Token           | Replacement                  | CSS Variable                        |
| -------------------------- | ---------------------------- | ------------------------------------ |
| brand.primary.base         | `{brand.primary600}`          | `--cnvs-brand-primary-600`          |
| brand.primary.lightest     | `{brand.primary25}`           | `--cnvs-brand-primary-25`           |
| brand.primary.lighter      | `{brand.primary50}`           | `--cnvs-brand-primary-50`            |
| brand.primary.light        | `{brand.primary200}`          | `--cnvs-brand-primary-200`          |
| brand.primary.dark         | `{brand.primary700}`          | `--cnvs-brand-primary-700`           |
| brand.primary.darkest      | `{brand.primary800}`          | `--cnvs-brand-primary-800`           |
| brand.primary.accent       | `{sys.color.fg.inverse}`       | `--cnvs-sys-color-fg-inverse`        |
| brand.error.base           | `{brand.critical600}`         | `--cnvs-brand-critical-600`         |
| brand.error.lightest       | `{brand.critical25}`          | `--cnvs-brand-critical-25`           |
| brand.error.lighter        | `{brand.critical50}`          | `--cnvs-brand-critical-50`           |
| brand.error.light          | `{brand.critical200}`         | `--cnvs-brand-critical-200`          |
| brand.error.dark           | `{brand.critical700}`         | `--cnvs-brand-critical-700`          |
| brand.error.darkest        | `{brand.critical800}`         | `--cnvs-brand-critical-800`          |
| brand.error.accent         | `{sys.color.fg.inverse}`       | `--cnvs-sys-color-fg-inverse`        |
| brand.alert.base           | `{brand.caution400}`          | `--cnvs-brand-caution-400`           |
| brand.alert.lightest       | `{brand.caution25}`           | `--cnvs-brand-caution-25`             |
| brand.alert.lighter        | `{brand.caution50}`           | `--cnvs-brand-caution-50`             |
| brand.alert.light          | `{brand.caution200}`          | `--cnvs-brand-caution-200`            |
| brand.alert.dark           | `{brand.caution500}`          | `--cnvs-brand-caution-500`             |
| brand.alert.darkest        | `{brand.caution600}`          | `--cnvs-brand-caution-600`            |
| brand.alert.accent         | `{sys.color.fg.contrast}`      | `--cnvs-sys-color-fg-contrast-default` |
| brand.success.base         | `{brand.positive600}`         | `--cnvs-brand-positive-600`           |
| brand.success.lightest     | `{brand.positive25}`          | `--cnvs-brand-positive-25`            |
| brand.success.lighter      | `{brand.positive50}`          | `--cnvs-brand-positive-50`            |
| brand.success.light        | `{brand.positive200}`         | `--cnvs-brand-positive-200`            |
| brand.success.dark         | `{brand.positive700}`         | `--cnvs-brand-positive-700`            |
| brand.success.darkest      | `{brand.positive800}`         | `--cnvs-brand-positive-800`             |
| brand.success.accent       | `{sys.color.fg.inverse}`       | `--cnvs-sys-color-fg-inverse`         |
| brand.neutral.lightest     | `{brand.neutral25}`           | `--cnvs-brand-neutral-25`              |
| brand.neutral.lighter      | `{brand.neutral50}`           | `--cnvs-brand-neutral-50`              |
| brand.neutral.light        | `{brand.neutral200}`          | `--cnvs-brand-neutral-200`             |
| brand.neutral.base         | `{brand.neutral600}`            | `--cnvs-brand-neutral-600`             |
| brand.neutral.dark         | `{brand.neutral700}`          | `--cnvs-brand-neutral-700`             |
| brand.neutral.darkest      | `{brand.neutral800}`          | `--cnvs-brand-neutral-800`             |
| brand.neutral.accent       | `{sys.color.fg.inverse}`       | `--cnvs-sys-color-fg-inverse`          |
| brand.common.focus-outline | `{brand.common.focus}`         | `--cnvs-brand-common-focus`            |
| brand.common.error-inner   | `{brand.common.critical}`      | `--cnvs-brand-common-critical`         |
| brand.common.alert-inner   | `{brand.common.caution.inner}` | `--cnvs-brand-common-caution-inner`    |
| brand.common.alert-outer   | `{brand.common.caution.outer}` | `--cnvs-brand-common-caution-outer`    |


### Deprecated Space Tokens

Space tokens depend on their context. `padding` tokens should be used for padding style property, `gap` should be used for gap or space between elements, and the `size` token should be used for height or width of an element.

| Deprecated Token | Pixel Value | Closest Replacement Token(s)                                    |
| ---------------- | ----------- | --------------------------------------------------------------- |
| space.zero       | 0px         | `padding.none` / `gap.none`                                     |
| space.half       | 2px         | `padding.xxs` / `gap.xs` (4px)                                 |
| space.x1         | 4px         | `padding.xxs` / `gap.xs` (4px)                                 |
| space.x2         | 8px         | `padding.xs` / `gap.sm` (8px)                                  |
| space.x3         | 12px        | `padding.sm` (12px)                                             |
| space.x4         | 16px        | `padding.md` / `gap.md` (16px) or `sys.size.xxxs` (16px)      |
| space.x5         | 20px        | `padding.lg` (20px) or `sys.size.xxs` (20px)                   |
| space.x6         | 24px        | `padding.xl` / `gap.lg` (24px) or `sys.size.xs` (24px)         |
| space.x8         | 32px        | `padding.xxl` / `gap.xl` (32px) or `sys.size.sm` (32px)        |
| space.x10        | 40px        | `sys.size.md` (40px)                                            |
| space.x14        | 56px        | `sys.size.xl` (56px)                                            |
| space.x16        | 64px        | `gap.xxl` (64px) or `sys.size.xxl` (64px)                      |
| space.x20        | 80px        | No direct `sys.size` token (use `{base.size1000}` or semantic tokens) |


### Deprecated Shape Tokens
Shape tokens don't have a 1:1 replacement. Use the notes below to determine the replacement token for your use case.


| Deprecated Token | Replacement | CSS Variable                        | Notes                                                      |
| ---------------- | ----------- | ------------------------------------ | ---------------------------------------------------------- |
| shape.half       | —           | —                                    | Use `shape.sm` for status indicators, pills                |
| shape.x1         | —           | —                                    | Use `shape.sm` for status indicators, pills                |
| shape.x1-half    | —           | —                                    | Use `shape.md` for input components                        |
| shape.x2         | —           | —                                    | Use `shape.lg` for toasts, tooltips, and smaller surfaces. Use `shape.xxl` for cards. Use `shape.xxxl` for modal containers |
| shape.x4         | —           | —                                    | Use `shape.xxxl` for modal containers                       |
| shape.x6         | —           | —                                    | Use `shape.xxxl` for dialog sheets                          |
| shape.zero        | shape.none   | `--cnvs-sys-shape-none`              | Renamed                                                     |
| shape.round       | shape.full   | `--cnvs-sys-shape-full`              | Renamed                                                     |


### Deprecated Breakpoint Tokens



| Deprecated Token | Replacement    | CSS Variable                        |
| ---------------- | -------------- | ------------------------------------ |
| breakpoints.s    | breakpoints.sm | `--cnvs-sys-breakpoints-sm`          |
| breakpoints.m    | breakpoints.md | `--cnvs-sys-breakpoints-md`          |
| breakpoints.l    | breakpoints.lg | `--cnvs-sys-breakpoints-lg`          |


### Deprecated Color Tokens

The following color tokens have been deprecated in v4. Each deprecated token now points to a new token value. The deprecated tokens will continue to work but will resolve to their replacement values. We recommend updating your code to use the new token names directly.

#### Background Color Tokens

**Primary Background Tokens**

The primary background tokens have been reorganized to better align with brand and surface semantics. All deprecated tokens point directly to their replacement values:

| Deprecated Token                    | Points To (New Token Value)                        | Notes                                                      |
| ----------------------------------- | -------------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.bg.primary.default`     | `sys.color.brand.accent.primary`                   | Primary brand color for backgrounds                        |
| `sys.color.bg.primary.strong`       | `sys.color.brand.accent.primary`                   | Use with `sys.color.accent.overlay.hover` for hover states |
| `sys.color.bg.primary.stronger`    | `sys.color.brand.accent.primary`                   | Use with `sys.color.accent.overlay.pressed` for active     |
| `sys.color.bg.primary.soft`        | `sys.color.brand.surface.primary.default`         | Surface background with primary brand color                 |
| `sys.color.bg.primary.softer`      | `sys.color.brand.surface.primary.strong`          | Stronger surface background with primary brand color       |
| `sys.color.bg.primary.softest`     | `sys.color.brand.surface.primary.default`         | Surface background with primary brand color                 |

**Example Migration:**

```javascript
// Before (deprecated)
backgroundColor: system.color.bg.primary.default

// After (recommended)
backgroundColor: system.color.brand.accent.primary
```

**Surface Background Tokens**

**Alt Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.alt.soft`               | `sys.color.surface.alt.default`                |
| `sys.color.bg.alt.softer`            | `sys.color.surface.raised`                    |
| `sys.color.bg.alt.strong`             | `sys.color.surface.alt.default` (+ overlay)   |
| `sys.color.bg.alt.stronger`          | `sys.color.surface.alt.default` (+ overlay)   |

**Transparent/Overlay Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.transparent.default`   | `sys.color.surface.transparent`                |
| `sys.color.bg.transparent.strong`    | `sys.color.surface.overlay.hover.default`      |
| `sys.color.bg.transparent.stronger`  | `sys.color.surface.overlay.pressed.default`    |
| `sys.color.bg.overlay`                | `sys.color.surface.overlay.scrim`              |
| `sys.color.bg.translucent`           | `sys.color.surface.contrast.default`          |

**Muted Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.muted.default`         | `sys.color.accent.muted.default`               |
| `sys.color.bg.muted.soft`             | `sys.color.accent.muted.soft`                  |
| `sys.color.bg.muted.softer`           | `sys.color.accent.muted.soft`                  |
| `sys.color.bg.muted.strong`          | `sys.color.accent.muted.default` (+ overlay)  |

**Contrast Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.contrast.default`     | `sys.color.surface.contrast.default`          |
| `sys.color.bg.contrast.strong`       | `sys.color.surface.contrast.strong` (+ overlay)|

**Semantic Background Tokens**

**Critical/Error Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.critical.default`       | `sys.color.brand.accent.critical`              |
| `sys.color.bg.critical.strong`       | `sys.color.brand.accent.critical` (+ overlay)  |
| `sys.color.bg.critical.stronger`     | `sys.color.brand.accent.critical` (+ overlay)  |
| `sys.color.bg.critical.soft`         | `base.palette.red.100` (use `sys.color.surface.danger.default`) |
| `sys.color.bg.critical.softer`       | `sys.color.brand.surface.critical.strong`       |
| `sys.color.bg.critical.softest`      | `sys.color.brand.surface.critical.default`     |

**Caution/Warning Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.caution.default`       | `sys.color.brand.accent.caution`                |
| `sys.color.bg.caution.strong`        | `sys.color.brand.accent.caution` (+ overlay)   |
| `sys.color.bg.caution.stronger`      | `sys.color.brand.accent.caution` (+ overlay)   |
| `sys.color.bg.caution.soft`          | `base.palette.amber.100` (use `sys.color.surface.warning.default`) |
| `sys.color.bg.caution.softer`        | `sys.color.brand.surface.caution.strong`        |
| `sys.color.bg.caution.softest`       | `sys.color.brand.surface.caution.default`      |

**Positive/Success Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.positive.default`      | `sys.color.brand.accent.positive`               |
| `sys.color.bg.positive.strong`       | `sys.color.brand.accent.positive` (+ overlay)  |
| `sys.color.bg.positive.stronger`     | `sys.color.brand.accent.positive` (+ overlay) |
| `sys.color.bg.positive.soft`        | `sys.color.brand.surface.positive.default`    |
| `sys.color.bg.positive.softer`      | `sys.color.brand.surface.positive.strong`      |
| `sys.color.bg.positive.softest`     | `base.palette.green.25` (use `sys.color.surface.success.default`) |

**Info Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.info.default`          | `sys.color.accent.info`                         |
| `sys.color.bg.info.strong`           | `sys.color.accent.info` (+ overlay)             |
| `sys.color.bg.info.stronger`        | `sys.color.accent.info` (+ overlay)             |
| `sys.color.bg.info.soft`             | `sys.color.surface.info.default`                |
| `sys.color.bg.info.softer`          | `sys.color.surface.info.strong`                |
| `sys.color.bg.info.softest`         | `sys.color.surface.info.default`                |

**AI Background Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.bg.ai.default`            | `sys.color.surface.ai.default`                  |
| `sys.color.bg.ai.strong`             | `sys.color.surface.ai.hover`                   |
| `sys.color.bg.ai.stronger`           | `sys.color.surface.ai.pressed`                 |
| `sys.color.bg.ai.strongest`         | `sys.color.accent.ai`                           |

#### Foreground Color Tokens

**Text Tokens (deprecated - use `sys.color.fg.*` instead):**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.text.default`              | `sys.color.fg.default`                          |
| `sys.color.text.strong`                | `sys.color.fg.strong`                            |
| `sys.color.text.stronger`              | `sys.color.fg.strong`                           |
| `sys.color.text.disabled`              | `base.palette.slate.400` (use `sys.color.fg.disabled`) |
| `sys.color.text.hint`                 | `sys.color.fg.muted.default`                     |
| `sys.color.text.inverse`              | `sys.color.fg.inverse`                          |
| `sys.color.text.critical.default`    | `sys.color.brand.fg.critical.default`            |
| `sys.color.text.critical.strong`     | `sys.color.brand.fg.critical.strong`             |
| `sys.color.text.critical.stronger`   | `sys.color.brand.fg.critical.strong`            |
| `sys.color.text.critical.soft`       | `base.palette.red.400` (use `sys.color.fg.danger`) |
| `sys.color.text.critical.softer`     | `base.palette.red.200` (use `sys.color.fg.danger`) |
| `sys.color.text.primary.default`     | `sys.color.brand.fg.primary.default`            |
| `sys.color.text.primary.strong`      | `sys.color.brand.fg.primary.strong`             |
| `sys.color.text.primary.stronger`     | `sys.color.brand.fg.primary.strong`             |
| `sys.color.text.primary.soft`        | `base.palette.blue.400` (use `sys.color.fg.info`) |
| `sys.color.text.primary.softer`      | `base.palette.blue.200` (use `sys.color.fg.info`) |
| `sys.color.text.caution.default`      | `sys.color.fg.contrast.default` (use `sys.color.fg.warning`) |
| `sys.color.text.caution.strong`       | `sys.color.fg.contrast.strong`                  |
| `sys.color.text.caution.soft`        | `base.palette.amber.400` (use `sys.color.fg.warning`) |
| `sys.color.text.caution.stronger`     | `sys.color.fg.contrast.strong`                   |
| `sys.color.text.caution.softer`      | `base.palette.amber.200` (use `sys.color.fg.warning`) |
| `sys.color.text.positive.default`    | `sys.color.brand.fg.positive.default`            |
| `sys.color.text.positive.strong`     | `sys.color.brand.fg.positive.strong`             |
| `sys.color.text.positive.stronger`   | `sys.color.brand.fg.positive.strong`             |
| `sys.color.text.positive.soft`       | `base.palette.green.400` (use `sys.color.fg.success`) |
| `sys.color.text.positive.softer`     | `base.palette.green.200` (use `sys.color.fg.success`) |
| `sys.color.text.info.default`        | `sys.color.fg.info.default`                      |
| `sys.color.text.info.strong`         | `sys.color.fg.info.strong`                       |
| `sys.color.text.info.stronger`       | `sys.color.fg.info.strong`                       |
| `sys.color.text.info.soft`           | `base.palette.blue.400` (use `sys.color.fg.info.default`) |
| `sys.color.text.info.softer`          | `base.palette.blue.200` (use `sys.color.fg.info`) |
| `sys.color.text.ai`                  | `base.palette.blue.950` (use `sys.color.fg.ai`)   |

**Icon Tokens (deprecated - use `sys.color.fg.*` instead):**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.icon.default`              | `sys.color.fg.default`                          |
| `sys.color.icon.soft`                 | `sys.color.fg.muted.default`                    |
| `sys.color.icon.strong`                | `sys.color.fg.muted.strong`                     |
| `sys.color.icon.inverse`              | `base.palette.neutral.0` (use `sys.color.fg.inverse`) |
| `sys.color.icon.disabled`             | `base.palette.slate.400` (use `sys.color.fg.disabled`) |
| `sys.color.icon.primary.default`      | `sys.color.brand.fg.primary.default`            |
| `sys.color.icon.primary.strong`       | `sys.color.brand.fg.primary.strong`             |
| `sys.color.icon.primary.stronger`     | `sys.color.brand.fg.primary.strong`             |
| `sys.color.icon.primary.soft`         | `base.palette.blue.400` (use `sys.color.fg.info`) |
| `sys.color.icon.primary.softer`      | `base.palette.blue.200` (use `sys.color.fg.info`) |
| `sys.color.icon.critical.default`     | `sys.color.brand.fg.critical.default`            |
| `sys.color.icon.critical.strong`      | `sys.color.brand.fg.critical.strong`            |
| `sys.color.icon.critical.stronger`    | `base.palette.red.800` (use `sys.color.fg.danger.strong`) |
| `sys.color.icon.critical.soft`       | `base.palette.red.400` (use `sys.color.fg.danger`) |
| `sys.color.icon.critical.softer`     | `base.palette.red.200` (use `sys.color.fg.danger`) |
| `sys.color.icon.caution.default`      | `sys.color.fg.contrast.default`                 |
| `sys.color.icon.caution.strong`       | `sys.color.brand.fg.caution.default`            |
| `sys.color.icon.caution.stronger`     | `sys.color.brand.fg.caution.strong`              |
| `sys.color.icon.caution.soft`         | `sys.color.brand.fg.caution.default` (use `sys.color.fg.warning`) |
| `sys.color.icon.caution.softer`       | `base.palette.amber.500` (use `sys.color.fg.warning`) |
| `sys.color.icon.positive.default`     | `sys.color.brand.fg.positive.default`            |
| `sys.color.icon.positive.strong`     | `sys.color.brand.fg.positive.strong`             |
| `sys.color.icon.positive.stronger`    | `sys.color.brand.fg.positive.strong`             |
| `sys.color.icon.positive.soft`       | `base.palette.green.400` (use `sys.color.fg.success`) |
| `sys.color.icon.positive.softer`     | `base.palette.green.200` (use `sys.color.fg.success`) |
| `sys.color.icon.info.default`         | `sys.color.fg.info.default`                      |
| `sys.color.icon.info.strong`          | `sys.color.fg.info.strong`                       |
| `sys.color.icon.info.stronger`       | `base.palette.blue.800` (use `sys.color.fg.info.strong`) |

**Foreground Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    |
| ------------------------------------- | ----------------------------------------------- |
| `sys.color.fg.critical.default`       | `sys.color.brand.fg.critical.default`           |
| `sys.color.fg.critical.strong`        | `sys.color.brand.fg.critical.strong`            |
| `sys.color.fg.critical.stronger`      | `base.palette.red.800` (use `sys.color.fg.danger` tokens) |
| `sys.color.fg.critical.soft`          | `base.palette.red.400` (use `sys.color.fg.danger`) |
| `sys.color.fg.critical.softer`        | `base.palette.red.200` (use `sys.color.fg.danger`) |
| `sys.color.fg.muted.stronger`         | `sys.color.fg.muted.strong`                     |
| `sys.color.fg.muted.soft`             | `base.palette.slate.400` (use `sys.color.fg.muted`) |
| `sys.color.fg.primary.soft`           | `base.palette.blue.400` (use `sys.color.fg.info` or `sys.color.brand.fg.primary`) |
| `sys.color.fg.primary.softer`         | `base.palette.blue.200` (use `sys.color.fg.info` or `sys.color.brand.fg.primary`) |
| `sys.color.fg.primary.stronger`       | `sys.color.brand.fg.primary.strong`             |
| `sys.color.fg.caution.default`        | `sys.color.brand.fg.caution.default`            |
| `sys.color.fg.caution.strong`         | `sys.color.brand.fg.caution.strong`              |
| `sys.color.fg.caution.soft`           | `base.palette.amber.700` (use `sys.color.fg.warning`) |
| `sys.color.fg.caution.stronger`       | `base.palette.amber.975` (use `sys.color.fg.warning.strong`) |
| `sys.color.fg.caution.softer`        | `base.palette.amber.500` (use `sys.color.fg.warning`) |
| `sys.color.fg.info.softer`            | `sys.color.fg.ai`                               |
| `sys.color.fg.info.soft`              | `base.palette.blue.400` (use `sys.color.fg.info`) |
| `sys.color.fg.info.stronger`         | `sys.color.fg.info.strong`                       |
| `sys.color.fg.positive.default`       | `sys.color.fg.success.default` (use `sys.color.brand.fg.positive.default`) |
| `sys.color.fg.positive.softer`        | `base.palette.green.200` (use `sys.color.fg.success`) |
| `sys.color.fg.positive.soft`          | `base.palette.green.400` (use `sys.color.fg.success`) |
| `sys.color.fg.positive.strong`        | `sys.color.brand.fg.positive.strong`             |
| `sys.color.fg.positive.stronger`      | `sys.color.brand.fg.positive.strong`             |

#### Border Color Tokens

**Input Border Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.border.input.disabled`     | `sys.opacity.disabled`                          | Use `sys.color.fg.disabled` instead                       |
| `sys.color.border.input.strong`      | `sys.color.border.input.hover`                   | Use `sys.color.border.input.hover` instead                |
| `sys.color.border.input.inverse`     | `sys.color.border.inverse`              | Use `sys.color.border.inverse` instead            |

**Inverse Border Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.border.inverse`   | `base.palette.neutral.0`                        | Use `sys.color.border.inverse` instead            |

**Contrast Border Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.border.contrast.default`  | `sys.color.border.contrast.default`              | Use `sys.color.border.contrast.default` instead           |
| `sys.color.border.contrast.strong`   | `sys.color.border.contrast.default`              | Use `sys.color.border.contrast.default` instead            |

**Semantic Border Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.border.primary.default`   | `sys.color.brand.border.primary`                 | Use `sys.color.brand.border.primary` instead               |
| `sys.color.border.critical.default`  | `sys.color.brand.border.critical`                | Use `sys.color.brand.border.critical` instead              |
| `sys.color.border.caution.default`   | `sys.color.brand.focus.caution.inner`            | Use `sys.color.brand.focus.caution.inner` instead           |
| `sys.color.border.caution.strong`    | `sys.color.brand.focus.caution.outer`            | Use `sys.color.brand.focus.caution.outer` instead          |
| `sys.color.border.info.default`      | `sys.color.border.info.default`                  | Use `sys.color.border.info.default` instead                |
| `sys.color.border.ai`                | `sys.color.accent.ai`                            | Use `sys.color.accent.ai` instead                          |

**Utility Border Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.border.divider`            | `sys.color.border.default`                      | Use `sys.color.border.default` instead                     |
| `sys.color.border.container`         | `sys.color.border.strong`                        | Use `sys.color.border.default` or `sys.color.border.strong` |

#### Static Color Tokens

Static color tokens have been deprecated in favor of using base palette tokens directly. All static tokens point to their corresponding `base.palette.*` values.

**Static Amber/Orange/Gold Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.amber.default`      | `sys.color.accent.warning`                      | Use `sys.color.accent.warning` instead                    |
| `sys.color.static.amber.softest`      | `sys.color.surface.warning.default`             | Use `sys.color.accent.warning` instead                    |
| `sys.color.static.amber.soft`        | `sys.color.surface.warning.strong`              | Use `sys.color.surface.warning.strong` instead             |
| `sys.color.static.amber.softer`      | `base.palette.amber.50`                         | Use `base.palette.amber.*` tokens directly                |
| `sys.color.static.amber.strong`       | `sys.color.accent.warning`                      | Use `sys.color.accent.warning` instead                     |
| `sys.color.static.amber.stronger`     | `sys.color.accent.warning`                      | Use `sys.color.accent.warning` instead                     |
| `sys.color.static.amber.strongest`    | `sys.color.fg.warning.strong`                   | Use `sys.color.fg.warning.strong` instead                  |
| `sys.color.static.orange.default`     | `base.palette.amber.400`                        | Prefer `sys.color.bg.caution.default` if used as background |
| `sys.color.static.orange.soft`        | `base.palette.amber.100`                        | Prefer `sys.color.bg.caution.soft` if used as background   |
| `sys.color.static.orange.strong`      | `base.palette.amber.500`                        | Prefer `sys.color.bg.caution.strong` if used as background |
| `sys.color.static.gold.stronger`      | `base.palette.amber.600`                        | Prefer `sys.color.bg.caution.stronger` if used as background |

**Static Blue Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.blue.default`      | `sys.color.accent.info`                         | Use `sys.color.accent.info` instead                       |
| `sys.color.static.blue.softest`       | `base.palette.blue.25`                          | Use `base.palette.blue.*` tokens directly                  |
| `sys.color.static.blue.softer`        | `base.palette.blue.50`                          | Use `base.palette.blue.*` tokens directly                  |
| `sys.color.static.blue.soft`          | `base.palette.blue.100`                         | Use `base.palette.blue.*` tokens directly                  |
| `sys.color.static.blue.strong`        | `base.palette.blue.700`                         | Use `base.palette.blue.*` tokens directly                  |
| `sys.color.static.blue.stronger`      | `base.palette.blue.800`                         | Use `base.palette.blue.*` tokens directly                  |
| `sys.color.static.blue.strongest`     | `base.palette.blue.950`                         | Use `base.palette.blue.*` tokens directly                  |

**Static Green Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.green.default`      | `base.palette.green.600`                        | Use `base.palette.green.*` tokens directly                |
| `sys.color.static.green.softest`     | `base.palette.green.25`                         | Use `base.palette.green.*` tokens directly                |
| `sys.color.static.green.softer`       | `base.palette.green.50`                         | Use `base.palette.green.*` tokens directly                 |
| `sys.color.static.green.soft`         | `base.palette.green.100`                        | Use `base.palette.green.*` tokens directly                 |
| `sys.color.static.green.strong`       | `base.palette.green.700`                        | Use `base.palette.green.*` tokens directly                 |
| `sys.color.static.green.stronger`     | `base.palette.green.800`                        | Use `base.palette.green.*` tokens directly                 |
| `sys.color.static.green.strongest`    | `base.palette.green.950`                        | Use `base.palette.green.*` tokens directly                 |

**Static Red Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.red.default`        | `base.palette.red.600`                          | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.softest`        | `base.palette.red.25`                           | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.softer`         | `base.palette.red.50`                           | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.soft`           | `base.palette.red.100`                          | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.strong`         | `base.palette.red.700`                          | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.stronger`       | `base.palette.red.800`                          | Use `base.palette.red.*` tokens directly                   |
| `sys.color.static.red.strongest`      | `base.palette.red.950`                          | Use `base.palette.red.*` tokens directly                   |

**Static Gray/Slate Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.gray.default`       | `base.palette.slate.600`                        | Use `base.palette.slate.*` tokens directly                  |
| `sys.color.static.gray.softest`       | `base.palette.slate.50`                         | Use `base.palette.slate.*` tokens directly                 |
| `sys.color.static.gray.softer`        | `base.palette.slate.100`                        | Use `base.palette.slate.*` tokens directly                 |
| `sys.color.static.gray.soft`         | `base.palette.slate.200`                        | Use `base.palette.slate.*` tokens directly                 |
| `sys.color.static.gray.strong`        | `base.palette.slate.700`                        | Use `base.palette.slate.*` tokens directly                 |
| `sys.color.static.gray.stronger`      | `base.palette.slate.800`                        | Use `base.palette.slate.*` tokens directly                 |
| `sys.color.static.gray.strongest`    | `base.palette.slate.950`                        | Use `base.palette.slate.*` tokens directly                 |

**Static Neutral Tokens:**

| Deprecated Token                      | Points To (New Token Value)                    | Notes                                                      |
| ------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `sys.color.static.white`              | `base.palette.neutral.0`                        | Use `base.palette.neutral.0` directly                      |
| `sys.color.static.black`              | `base.palette.neutral.1000`                     | Use `base.palette.neutral.1000` directly                    |


### Deprecated Shadow Color Tokens



| Deprecated Token | Replacement              | CSS Variable                        | Comment             |
| ---------------- | ------------------------ | ------------------------------------ | ------------------- |
| shadow.1         | sys.color.shadow.base    | `--cnvs-sys-color-shadow-base`       | First shadow color  |
| shadow.2         | sys.color.shadow.ambient | `--cnvs-sys-color-shadow-ambient`   | Second shadow color |
| shadow.default   | sys.color.shadow.base    | `--cnvs-sys-color-shadow-base`       | Main shadow color   |


> **Note:**  
> `shadow.1`, `shadow.2`, and `shadow.default` are deprecated.  
> Use `sys.color.shadow.base` and `sys.color.shadow.ambient` instead.

#### Typography Tokens

Typography tokens have been updated to use semantic size names (`sm`, `md`, `lg`) instead of descriptive names (`small`, `medium`, `large`).

**Deprecated Font-Size Tokens:**

| Deprecated Token                      | Replacement Token                    | Notes                                                      |
| ------------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| `sys.font-size.subtext.small`         | `sys.font-size.subtext.sm`           | Use semantic size name `sm` instead of `small`             |
| `sys.font-size.subtext.medium`        | `sys.font-size.subtext.md`           | Use semantic size name `md` instead of `medium`            |
| `sys.font-size.subtext.large`         | `sys.font-size.subtext.lg`           | Use semantic size name `lg` instead of `large`            |
| `sys.font-size.body.small`           | `sys.font-size.body.sm`              | Use semantic size name `sm` instead of `small`             |
| `sys.font-size.body.medium`          | `sys.font-size.body.md`              | Use semantic size name `md` instead of `medium`           |
| `sys.font-size.body.large`           | `sys.font-size.body.lg`              | Use semantic size name `lg` instead of `large`            |
| `sys.font-size.heading.small`        | `sys.font-size.heading.sm`           | Use semantic size name `sm` instead of `small`             |
| `sys.font-size.heading.medium`       | `sys.font-size.heading.md`           | Use semantic size name `md` instead of `medium`           |
| `sys.font-size.heading.large`        | `sys.font-size.heading.lg`           | Use semantic size name `lg` instead of `large`             |
| `sys.font-size.title.small`          | `sys.font-size.title.sm`             | Use semantic size name `sm` instead of `small`             |
| `sys.font-size.title.medium`         | `sys.font-size.title.md`             | Use semantic size name `md` instead of `medium`            |
| `sys.font-size.title.large`          | `sys.font-size.title.lg`             | Use semantic size name `lg` instead of `large`             |

**Deprecated Line-Height Tokens:**

| Deprecated Token                      | Replacement Token                    | Notes                                                      |
| ------------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| `sys.line-height.subtext.small`        | `sys.line-height.subtext.sm`         | Use semantic size name `sm` instead of `small`             |
| `sys.line-height.subtext.medium`      | `sys.line-height.subtext.md`         | Use semantic size name `md` instead of `medium`            |
| `sys.line-height.subtext.large`       | `sys.line-height.subtext.lg`         | Use semantic size name `lg` instead of `large`            |
| `sys.line-height.body.small`          | `sys.line-height.body.sm`            | Use semantic size name `sm` instead of `small`             |
| `sys.line-height.body.medium`         | `sys.line-height.body.md`            | Use semantic size name `md` instead of `medium`            |
| `sys.line-height.body.large`          | `sys.line-height.body.lg`            | Use semantic size name `lg` instead of `large`            |
| `sys.line-height.heading.small`       | `sys.line-height.heading.sm`         | Use semantic size name `sm` instead of `small`             |
| `sys.line-height.heading.medium`      | `sys.line-height.heading.md`         | Use semantic size name `md` instead of `medium`            |
| `sys.line-height.heading.large`       | `sys.line-height.heading.lg`         | Use semantic size name `lg` instead of `large`            |
| `sys.line-height.title.small`         | `sys.line-height.title.sm`           | Use semantic size name `sm` instead of `small`             |
| `sys.line-height.title.medium`       | `sys.line-height.title.md`            | Use semantic size name `md` instead of `medium`             |
| `sys.line-height.title.large`         | `sys.line-height.title.lg`            | Use semantic size name `lg` instead of `large`             |

**Deprecated Type (Typography) Tokens:**

The `sys.type.*` tokens (which combine font-family, font-weight, line-height, font-size, and letter-spacing) have been deprecated. Instead, use the individual token properties directly:

| Deprecated Token                      | Replacement                                                      | Notes                                                      |
| ------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| `sys.type.subtext.small`              | Use `sys.font-size.subtext.sm`, `sys.line-height.subtext.sm`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.subtext.medium`             | Use `sys.font-size.subtext.md`, `sys.line-height.subtext.md`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.subtext.large`              | Use `sys.font-size.subtext.lg`, `sys.line-height.subtext.lg`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.body.small`                 | Use `sys.font-size.body.sm`, `sys.line-height.body.sm`, etc.     | Use individual typography tokens instead of composite token |
| `sys.type.body.medium`                | Use `sys.font-size.body.md`, `sys.line-height.body.md`, etc.     | Use individual typography tokens instead of composite token |
| `sys.type.body.large`                 | Use `sys.font-size.body.lg`, `sys.line-height.body.lg`, etc.     | Use individual typography tokens instead of composite token |
| `sys.type.heading.small`              | Use `sys.font-size.heading.sm`, `sys.line-height.heading.sm`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.heading.medium`             | Use `sys.font-size.heading.md`, `sys.line-height.heading.md`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.heading.large`              | Use `sys.font-size.heading.lg`, `sys.line-height.heading.lg`, etc. | Use individual typography tokens instead of composite token |
| `sys.type.title.small`                | Use `sys.font-size.title.sm`, `sys.line-height.title.sm`, etc.   | Use individual typography tokens instead of composite token |
| `sys.type.title.medium`               | Use `sys.font-size.title.md`, `sys.line-height.title.md`, etc.   | Use individual typography tokens instead of composite token |
| `sys.type.title.large`                | Use `sys.font-size.title.lg`, `sys.line-height.title.lg`, etc.   | Use individual typography tokens instead of composite token |

---

## Migration Recommendations

1. **Update brand tokens**: Replace deprecated descriptive names (`base`, `lightest`, etc.) with
   numerical scale tokens (25, 50, 100, etc.)
2. **Migrate surface tokens**: Replace `color.bg.surface.*` tokens with `color.surface.*`
   equivalents
3. **Use semantic tokens**: Prefer semantic size, space, and shape tokens over deprecated generic
   tokens
4. **Update breakpoints**: Replace single-letter breakpoint tokens with full names (`sm`, `md`,
   `lg`)
5. **Review common tokens**: Update `focus-outline`, `error-inner`, `alert-inner`, and `alert-outer`
   to their new names
6. **Update typography tokens**: Replace `small`/`medium`/`large` size names with `sm`/`md`/`lg` for
   font-size and line-height tokens. Replace composite `sys.type.*` tokens with individual
   typography property tokens
