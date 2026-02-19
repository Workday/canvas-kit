## What's New in v4

Canvas Tokens v4 introduces significant updates to align with our Design Refresh,
providing enhanced scalability, better product support, and a more comprehensive token system. This
release focuses on improving the color system with extended alpha scales, updating brand tokens to
use numerical naming conventions, and introducing new surface, focus, accent, and semantic tokens.

## Overview of Changes

The v4 release includes:

- **Extended alpha scales** across base color palettes (A25, A50, A100, A200)
- **Brand token updates** with numerical naming (25, 50, 100, 200...900, 950, 975)
- **Comprehensive surface token system** for better UI component support
- **New semantic tokens** for size, space, shape, and breakpoints
- **Deprecation of legacy tokens** with clear migration paths

## Base Color Palette Updates

### Alpha Scale Extensions

Base color palettes have been updated by adding alpha scales: **A25, A50, A100, A200**. Extended
alpha range (**A0-A975**) has been added to slate, neutral, and white palettes.

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

| Token                     | JS Value         | CSS Variable                           | Use For                         |
| ------------------------- | ---------------- | -------------------------------------- | ------------------------------- |
| color.surface.default     | `base.neutral0`  | `--cnvs-sys-color-surface-default`     | Primary content surfaces        |
| color.surface.alt.default | `base.slateA50`  | `--cnvs-sys-color-surface-alt-default` | De-emphasized secondary content |
| color.surface.alt.strong  | `base.slateA100` | `--cnvs-sys-color-surface-alt-strong`  | Stronger de-emphasis            |
| color.surface.navigation  | `base.neutralA0` | `--cnvs-sys-color-surface-navigation`  | Global navigation (transparent) |
| color.surface.popover     | `base.neutral0`  | `--cnvs-sys-color-surface-popover`     | Popover containers              |
| color.surface.modal       | `base.neutral0`  | `--cnvs-sys-color-surface-modal`       | Modal containers                |
| color.surface.raised      | `base.slateA25`  | `--cnvs-sys-color-surface-raised`      | Elevated surfaces               |
| color.surface.loading     | `base.slateA200` | `--cnvs-sys-color-surface-loading`     | Skeleton/loading states         |
| color.surface.transparent | `base.neutralA0` | `--cnvs-sys-color-surface-transparent` | Transparent surfaces            |
| color.surface.inverse     | `base.neutral0`  | `--cnvs-sys-color-surface-inverse`     | Inverse surfaces                |

#### Semantic Surface Tokens

Semantic surface tokens provide color-coded backgrounds for status indicators and feedback states,
using alpha variants of the base palette colors for subtle yet clear visual communication.

| Token                         | JS Value        | CSS Variable                               |
| ----------------------------- | --------------- | ------------------------------------------ |
| color.surface.info.default    | `base.blueA25`  | `--cnvs-sys-color-surface-info-default`    |
| color.surface.info.strong     | `base.blueA50`  | `--cnvs-sys-color-surface-info-strong`     |
| color.surface.danger.default  | `base.redA25`   | `--cnvs-sys-color-surface-danger-default`  |
| color.surface.danger.strong   | `base.redA50`   | `--cnvs-sys-color-surface-danger-strong`   |
| color.surface.warning.default | `base.amberA25` | `--cnvs-sys-color-surface-warning-default` |
| color.surface.warning.strong  | `base.amberA50` | `--cnvs-sys-color-surface-warning-strong`  |
| color.surface.success.default | `base.greenA25` | `--cnvs-sys-color-surface-success-default` |
| color.surface.success.strong  | `base.greenA50` | `--cnvs-sys-color-surface-success-strong`  |

#### Contrast Surface Tokens

Contrast surface tokens provide high-contrast backgrounds for surfaces that need to stand out
prominently, typically used for elevated or emphasized content areas.

| Token                          | JS Value           | CSS Variable                                |
| ------------------------------ | ------------------ | ------------------------------------------- |
| color.surface.contrast.default | `base.neutralA900` | `--cnvs-sys-color-surface-contrast-default` |
| color.surface.contrast.strong  | `base.neutralA950` | `--cnvs-sys-color-surface-contrast-strong`  |

#### AI Surface Tokens

AI surface tokens provide specialized colors for AI-related UI components and interactions,
supporting hover and pressed states for interactive AI elements.

| Token                    | JS Value        | CSS Variable                          |
| ------------------------ | --------------- | ------------------------------------- |
| color.surface.ai.default | `base.blueA100` | `--cnvs-sys-color-surface-ai-default` |
| color.surface.ai.hover   | `base.blueA200` | `--cnvs-sys-color-surface-ai-hover`   |
| color.surface.ai.pressed | `base.blueA200` | `--cnvs-sys-color-surface-ai-pressed` |

#### Interaction Overlay Tokens

Interaction overlay tokens define visual feedback for hover and pressed states on interactive
surfaces, with separate variants for default and inverse color schemes. The scrim token provides a
backdrop overlay for modal and dialog interactions.

| Token                                 | JS Value           | CSS Variable                                       |
| ------------------------------------- | ------------------ | -------------------------------------------------- |
| color.surface.overlay.hover.default   | `base.slateA50`    | `--cnvs-sys-color-surface-overlay-hover-default`   |
| color.surface.overlay.hover.inverse   | `base.whiteA200`   | `--cnvs-sys-color-surface-overlay-hover-inverse`   |
| color.surface.overlay.pressed.default | `base.slateA100`   | `--cnvs-sys-color-surface-overlay-pressed-default` |
| color.surface.overlay.pressed.inverse | `base.whiteA300`   | `--cnvs-sys-color-surface-overlay-pressed-inverse` |
| color.surface.overlay.scrim           | `base.neutralA400` | `--cnvs-sys-color-surface-overlay-scrim`           |

### Brand Surface Tokens

Brand surface tokens provide brand-colored backgrounds for status indicators, feedback messages, and
selected states. These tokens use alpha variants of brand colors to create subtle yet recognizable
brand-aligned surfaces with default and strong intensity options.

| Token                                | JS Value            | CSS Variable                                      |
| ------------------------------------ | ------------------- | ------------------------------------------------- |
| color.brand.surface.primary.default  | `brand.primaryA25`  | `--cnvs-sys-color-brand-surface-primary-default`  |
| color.brand.surface.primary.strong   | `brand.primaryA50`  | `--cnvs-sys-color-brand-surface-primary-strong`   |
| color.brand.surface.critical.default | `brand.criticalA25` | `--cnvs-sys-color-brand-surface-critical-default` |
| color.brand.surface.critical.strong  | `brand.criticalA50` | `--cnvs-sys-color-brand-surface-critical-strong`  |
| color.brand.surface.caution.default  | `brand.cautionA25`  | `--cnvs-sys-color-brand-surface-caution-default`  |
| color.brand.surface.caution.strong   | `brand.cautionA50`  | `--cnvs-sys-color-brand-surface-caution-strong`   |
| color.brand.surface.positive.default | `brand.positiveA25` | `--cnvs-sys-color-brand-surface-positive-default` |
| color.brand.surface.positive.strong  | `brand.positiveA50` | `--cnvs-sys-color-brand-surface-positive-strong`  |
| color.brand.surface.selected         | `brand.primaryA50`  | `--cnvs-sys-color-brand-surface-selected`         |

### Focus Tokens

New focus tokens provide consistent focus indicators across the design system, supporting both
standard and high-contrast scenarios.

| Token                | JS Value           | CSS Variable                      |
| -------------------- | ------------------ | --------------------------------- |
| color.focus.inverse  | `base.neutral0`    | `--cnvs-sys-color-focus-inverse`  |
| color.focus.contrast | `base.neutralA900` | `--cnvs-sys-color-focus-contrast` |

### Brand Focus Tokens

Brand focus tokens provide brand-aligned focus indicators for primary, critical, and caution states,
with separate inner and outer variants for caution to support layered alert designs.

| Token                           | JS Value            | CSS Variable                                 |
| ------------------------------- | ------------------- | -------------------------------------------- |
| color.brand.focus.primary       | `brand.primary500`  | `--cnvs-sys-color-brand-focus-primary`       |
| color.brand.focus.critical      | `brand.critical500` | `--cnvs-sys-color-brand-focus-critical`      |
| color.brand.focus.caution.outer | `brand.caution500`  | `--cnvs-sys-color-brand-focus-caution-outer` |
| color.brand.focus.caution.inner | `brand.caution400`  | `--cnvs-sys-color-brand-focus-caution-inner` |

### Accent Tokens

New accent tokens provide semantic color values for UI elements that need to stand out or convey
meaning, including status indicators, interactive overlays, and muted variants for subtle emphasis.

| Token                        | JS Value           | CSS Variable                              |
| ---------------------------- | ------------------ | ----------------------------------------- |
| color.accent.info            | `base.blue600`     | `--cnvs-sys-color-accent-info`            |
| color.accent.danger          | `base.red600`      | `--cnvs-sys-color-accent-danger`          |
| color.accent.warning         | `base.amber400`    | `--cnvs-sys-color-accent-warning`         |
| color.accent.success         | `base.green600`    | `--cnvs-sys-color-accent-success`         |
| color.accent.ai              | `base.blue950`     | `--cnvs-sys-color-accent-ai`              |
| color.accent.contrast        | `base.neutralA900` | `--cnvs-sys-color-accent-contrast`        |
| color.accent.muted.default   | `base.slate600`    | `--cnvs-sys-color-accent-muted-default`   |
| color.accent.muted.soft      | `base.slate400`    | `--cnvs-sys-color-accent-muted-soft`      |
| color.accent.overlay.hover   | `base.neutralA200` | `--cnvs-sys-color-accent-overlay-hover`   |
| color.accent.overlay.pressed | `base.neutralA400` | `--cnvs-sys-color-accent-overlay-pressed` |

### Brand Accent Tokens

Brand accent tokens provide brand-aligned accent colors for primary actions, critical states,
caution indicators, and positive feedback, ensuring consistent brand expression across interactive
elements.

| Token                       | JS Value            | CSS Variable                             |
| --------------------------- | ------------------- | ---------------------------------------- |
| color.brand.accent.primary  | `brand.primary600`  | `--cnvs-sys-color-brand-accent-primary`  |
| color.brand.accent.critical | `brand.critical600` | `--cnvs-sys-color-brand-accent-critical` |
| color.brand.accent.caution  | `brand.caution400`  | `--cnvs-sys-color-brand-accent-caution`  |
| color.brand.accent.positive | `brand.positive600` | `--cnvs-sys-color-brand-accent-positive` |
| color.brand.accent.action   | `brand.primary600`  | `--cnvs-sys-color-brand-accent-action`   |

### Foreground Token Updates

Foreground tokens have been updated to use alpha variants for better contrast control and
consistency with the new alpha scale system. These updates provide more granular control over text
hierarchy and readability.

| Token                     | JS Value           | CSS Variable                           |
| ------------------------- | ------------------ | -------------------------------------- |
| color.fg.default          | `base.neutralA800` | `--cnvs-sys-color-fg-default`          |
| color.fg.strong           | `base.neutralA900` | `--cnvs-sys-color-fg-strong`           |
| color.fg.stronger         | `base.neutralA950` | `--cnvs-sys-color-fg-stronger`         |
| color.fg.disabled         | `base.slateA400`   | `--cnvs-sys-color-fg-disabled`         |
| color.fg.muted.default    | `base.slateA600`   | `--cnvs-sys-color-fg-muted-default`    |
| color.fg.muted.strong     | `base.slateA700`   | `--cnvs-sys-color-fg-muted-strong`     |
| color.fg.contrast.default | `base.neutralA900` | `--cnvs-sys-color-fg-contrast-default` |
| color.fg.contrast.strong  | `base.neutralA950` | `--cnvs-sys-color-fg-contrast-strong`  |

#### Semantic Foreground Colors

Semantic foreground colors provide text colors for status messages, alerts, and feedback, with
default and strong variants for different emphasis levels. These tokens ensure consistent color
usage for informational, warning, error, and success states, plus specialized tokens for AI-related
content and inverse text.

| Token                    | JS Value        | CSS Variable                          |
| ------------------------ | --------------- | ------------------------------------- |
| color.fg.info.default    | `base.blue600`  | `--cnvs-sys-color-fg-info-default`    |
| color.fg.info.strong     | `base.blue700`  | `--cnvs-sys-color-fg-info-strong`     |
| color.fg.danger.default  | `base.red600`   | `--cnvs-sys-color-fg-danger-default`  |
| color.fg.danger.strong   | `base.red700`   | `--cnvs-sys-color-fg-danger-strong`   |
| color.fg.warning.default | `base.amber600` | `--cnvs-sys-color-fg-warning-default` |
| color.fg.warning.strong  | `base.amber700` | `--cnvs-sys-color-fg-warning-strong`  |
| color.fg.success.default | `base.green600` | `--cnvs-sys-color-fg-success-default` |
| color.fg.success.strong  | `base.green700` | `--cnvs-sys-color-fg-success-strong`  |
| color.fg.ai              | `base.blue950`  | `--cnvs-sys-color-fg-ai`              |
| color.fg.inverse         | `base.neutral0` | `--cnvs-sys-color-fg-inverse`         |

### Brand Foreground References

Brand foreground tokens provide text colors that align with brand colors, offering default and
strong variants for different emphasis levels. These tokens are used for brand-colored text, links,
and selected states.

| Token                           | JS Value            | CSS Variable                                 |
| ------------------------------- | ------------------- | -------------------------------------------- |
| color.brand.fg.primary.default  | `brand.primary600`  | `--cnvs-sys-color-brand-fg-primary-default`  |
| color.brand.fg.primary.strong   | `brand.primary700`  | `--cnvs-sys-color-brand-fg-primary-strong`   |
| color.brand.fg.critical.default | `brand.critical600` | `--cnvs-sys-color-brand-fg-critical-default` |
| color.brand.fg.critical.strong  | `brand.critical700` | `--cnvs-sys-color-brand-fg-critical-strong`  |
| color.brand.fg.caution.default  | `brand.caution600`  | `--cnvs-sys-color-brand-fg-caution-default`  |
| color.brand.fg.caution.strong   | `brand.caution700`  | `--cnvs-sys-color-brand-fg-caution-strong`   |
| color.brand.fg.positive.default | `brand.positive600` | `--cnvs-sys-color-brand-fg-positive-default` |
| color.brand.fg.positive.strong  | `brand.positive700` | `--cnvs-sys-color-brand-fg-positive-strong`  |
| color.brand.fg.selected         | `brand.primary700`  | `--cnvs-sys-color-brand-fg-selected`         |

### Border Token Updates

Border tokens have been updated to use alpha variants and provide more semantic options for
different border use cases, including input fields, status indicators, and inverse color schemes.

| Token                        | JS Value           | CSS Variable                              |
| ---------------------------- | ------------------ | ----------------------------------------- |
| color.border.default         | `base.slateA200`   | `--cnvs-sys-color-border-default`         |
| color.border.strong          | `base.slateA300`   | `--cnvs-sys-color-border-strong`          |
| color.border.input.default   | `base.slateA500`   | `--cnvs-sys-color-border-input-default`   |
| color.border.input.hover     | `base.slateA700`   | `--cnvs-sys-color-border-input-hover`     |
| color.border.info            | `base.blue500`     | `--cnvs-sys-color-border-info`            |
| color.border.danger          | `base.red500`      | `--cnvs-sys-color-border-danger`          |
| color.border.warning         | `base.amber400`    | `--cnvs-sys-color-border-warning`         |
| color.border.contrast        | `base.neutralA900` | `--cnvs-sys-color-border-contrast`        |
| color.border.transparent     | `base.neutralA0`   | `--cnvs-sys-color-border-transparent`     |
| color.border.inverse.default | `base.whiteA500`   | `--cnvs-sys-color-border-inverse-default` |
| color.border.inverse.strong  | `base.whiteA700`   | `--cnvs-sys-color-border-inverse-strong`  |

### Brand Border Tokens

Brand border tokens provide brand-aligned border colors for primary, critical, and caution states,
ensuring consistent brand expression in bordered components and status indicators.

| Token                              | JS Value            | CSS Variable                                    |
| ---------------------------------- | ------------------- | ----------------------------------------------- |
| color.brand.border.primary.default | `brand.primary500`  | `--cnvs-sys-color-brand-border-primary-default` |
| color.brand.border.critical        | `brand.critical500` | `--cnvs-sys-color-brand-border-critical`        |
| color.brand.border.caution         | `brand.caution400`  | `--cnvs-sys-color-brand-border-caution`         |

### Shadow Tokens

Shadow tokens define the color values used for drop shadows and elevation effects, using alpha
variants of slate to create subtle depth and layering in the UI.

| Token                | JS Value         | CSS Variable                      |
| -------------------- | ---------------- | --------------------------------- |
| color.shadow.base    | `base.slateA200` | `--cnvs-sys-color-shadow-base`    |
| color.shadow.ambient | `base.slateA100` | `--cnvs-sys-color-shadow-ambient` |

### Semantic Size Tokens

New semantic size tokens provide meaningful size values mapped to specific use cases, replacing
generic numeric values with descriptive names that clearly indicate their intended purpose. This
improves code readability and ensures consistent sizing across components.

| Token     | JS Value       | CSS Variable           | Description                               |
| --------- | -------------- | ---------------------- | ----------------------------------------- |
| size.xxxs | `base.size200` | `--cnvs-sys-size-xxxs` |                                           |
| size.xxs  | `base.size250` | `--cnvs-sys-size-xxs`  |                                           |
| size.xs   | `base.size300` | `--cnvs-sys-size-xs`   | Count Badge                               |
| size.sm   | `base.size400` | `--cnvs-sys-size-sm`   | X-Small Buttons, Pills, Checkboxes        |
| size.md   | `base.size500` | `--cnvs-sys-size-md`   | Small Buttons, Segmented Control, Tooltip |
| size.lg   | `base.size600` | `--cnvs-sys-size-lg`   | Medium Buttons, Input Fields, Menu Items  |
| size.xl   | `base.size700` | `--cnvs-sys-size-xl`   | Large Buttons, Tabs, Avatar               |
| size.xxl  | `base.size800` | `--cnvs-sys-size-xxl`  | Table Cell, Toast                         |

### Space Tokens

Space tokens have been reorganized into semantic padding and gap tokens, replacing the previous
generic `space.*` tokens. This provides clearer intent and better alignment with common CSS
properties. Which token you choose depends
on the context of how it's used. In general you should:

- use `padding` tokens for interior space (`padding` and `inset`)
- use `gap` tokens for exterior space around and between elements (`gap` and `margin`)
- use `size` tokens for an element's container space (`height` and `width`)

### Padding Tokens

| Token        | JS Value       | CSS Variable              | Description                        |
| ------------ | -------------- | ------------------------- | ---------------------------------- |
| padding.none | `base.size0`   | `--cnvs-sys-padding-none` | No space between content and edges |
| padding.xxs  | `base.size50`  | `--cnvs-sys-padding-xxs`  | Compact padding                    |
| padding.xs   | `base.size100` | `--cnvs-sys-padding-xs`   | Horizontal padding on Input Fields |
| padding.sm   | `base.size150` | `--cnvs-sys-padding-sm`   | Rich Text Editor, X-Small Buttons  |
| padding.md   | `base.size200` | `--cnvs-sys-padding-md`   | Small Button content               |
| padding.lg   | `base.size250` | `--cnvs-sys-padding-lg`   | Medium Buttons with Icons          |
| padding.xl   | `base.size300` | `--cnvs-sys-padding-xl`   | Card and Medium Button content     |
| padding.xxl  | `base.size400` | `--cnvs-sys-padding-xxl`  | Modal and Large Button content     |

### Gap Tokens

Gap tokens define spacing between elements (`gap` and `margin`), providing consistent spacing
for component relationships and content organization.

| Token    | JS Value       | CSS Variable          | Description                            |
| -------- | -------------- | --------------------- | -------------------------------------- |
| gap.none | `base.size0`   | `--cnvs-sys-gap-none` | No space between elements              |
| gap.xs   | `base.size50`  | `--cnvs-sys-gap-xs`   | Icon to text, labels to inputs         |
| gap.sm   | `base.size100` | `--cnvs-sys-gap-sm`   | Pills, buttons, inline icon to text    |
| gap.md   | `base.size200` | `--cnvs-sys-gap-md`   | Default inline spacing                 |
| gap.lg   | `base.size300` | `--cnvs-sys-gap-lg`   | Tighter spacing between cards          |
| gap.xl   | `base.size400` | `--cnvs-sys-gap-xl`   | Default card spacing, 12-column gutter |
| gap.xxl  | `base.size800` | `--cnvs-sys-gap-xxl`  | Space between content sections         |

## Shape Token Updates

Shape tokens define border radius values for rounded corners across components. The token system has
been updated with new larger values (xl, xxl, xxxl) to support modern design patterns requiring more
pronounced rounding on larger containers and elevated surfaces.

| Token      | JS Value             | CSS Variable            | Description                       |
| ---------- | -------------------- | ----------------------- | --------------------------------- |
| shape.none | `base.size0`         | `--cnvs-sys-shape-none` | Full-width containers             |
| shape.sm   | `base.size50`        | `--cnvs-sys-shape-sm`   | Inputs, Toasts, Tooltips          |
| shape.md   | `base.size100`       | `--cnvs-sys-shape-md`   | Cards, Menus                      |
| shape.lg   | `base.size150`       | `--cnvs-sys-shape-lg`   | Dialogs, Modals, Bottom Sheets    |
| shape.xl   | `base.size200`       | `--cnvs-sys-shape-xl`   | Extra large rounding (New)        |
| shape.xxl  | `base.size300`       | `--cnvs-sys-shape-xxl`  | Cards and elevated items (New)    |
| shape.xxxl | `base.size400`       | `--cnvs-sys-shape-xxxl` | Modals and large containers (New) |
| shape.full | `base.size75` \* 100 | `--cnvs-sys-shape-full` | Buttons, Badge, Status Indicator  |

### Breakpoint Updates

Breakpoint tokens define responsive design breakpoints for different screen sizes. The system has
been updated with clearer naming (replacing single-letter tokens) and a new `xl` breakpoint to
support wide monitor displays, ensuring better responsive design coverage across all device types.

| Token            | JS Value               | CSS Variable                  | Description                  |
| ---------------- | ---------------------- | ----------------------------- | ---------------------------- |
| breakpoints.zero | 0                      | `--cnvs-sys-breakpoints-zero` | Below small                  |
| breakpoints.sm   | `base.baseline` \* 40  | `--cnvs-sys-breakpoints-sm`   | Mobile devices (320px)       |
| breakpoints.md   | `base.baseline` \* 96  | `--cnvs-sys-breakpoints-md`   | Laptops (768px)              |
| breakpoints.lg   | `base.baseline` \* 128 | `--cnvs-sys-breakpoints-lg`   | Desktops (1024px)            |
| breakpoints.xl   | `base.baseline` \* 180 | `--cnvs-sys-breakpoints-xl`   | Wide monitors (1440px) (New) |

## Deprecated Tokens

The following tokens have been deprecated in v4. These tokens still exist and point to their
original values so they do not break as you upgrade. However, they are no longer used in our system,
and we strongly recommend updating your code to use our new tokens.

Use the sections below for reference as you update.

### Deprecated Brand Tokens

Most of our brand tokens are being replaced by brand tokens with numerical scale names. This makes
them more versatile to create accessible color palettes. However, some deprecated brand tokens map
to system colors instead. Refer to the table below for the specific token mappings.

| Deprecated Token             | Replacement Token            |
| ---------------------------- | ---------------------------- |
| `brand.primary.lightest`     | `brand.primary25`            |
| `brand.primary.lighter`      | `brand.primary50`            |
| `brand.primary.light`        | `brand.primary200`           |
| `brand.primary.dark`         | `brand.primary700`           |
| `brand.primary.darkest`      | `brand.primary800`           |
| `brand.primary.accent`       | `system.color.fg.inverse`    |
| `brand.error.base`           | `brand.critical600`          |
| `brand.error.lightest`       | `brand.critical25`           |
| `brand.error.lighter`        | `brand.critical50`           |
| `brand.error.light`          | `brand.critical200`          |
| `brand.error.dark`           | `brand.critical700`          |
| `brand.error.darkest`        | `brand.critical800`          |
| `brand.error.accent`         | `system.color.fg.inverse`    |
| `brand.alert.base`           | `brand.caution400`           |
| `brand.alert.lightest`       | `brand.caution25`            |
| `brand.alert.lighter`        | `brand.caution50`            |
| `brand.alert.light`          | `brand.caution200`           |
| `brand.alert.dark`           | `brand.caution500`           |
| `brand.alert.darkest`        | `brand.caution600`           |
| `brand.alert.accent`         | `system.color.fg.contrast`   |
| `brand.success.base`         | `brand.positive600`          |
| `brand.success.lightest`     | `brand.positive25`           |
| `brand.success.lighter`      | `brand.positive50`           |
| `brand.success.light`        | `brand.positive200`          |
| `brand.success.dark`         | `brand.positive700`          |
| `brand.success.darkest`      | `brand.positive800`          |
| `brand.success.accent`       | `system.color.fg.inverse`    |
| `brand.neutral.lightest`     | `brand.neutral25`            |
| `brand.neutral.lighter`      | `brand.neutral50`            |
| `brand.neutral.light`        | `brand.neutral200`           |
| `brand.neutral.base`         | `brand.neutral600`           |
| `brand.neutral.dark`         | `brand.neutral700`           |
| `brand.neutral.darkest`      | `brand.neutral800`           |
| `brand.neutral.accent`       | `system.color.fg.inverse`    |
| `brand.common.focus-outline` | `brand.common.focus`         |
| `brand.common.errorInner`    | `brand.common.critical`      |
| `brand.common.alertInner`    | `brand.common.caution.inner` |
| `brand.common.alertOuter`    | `brand.common.caution.outer` |

### Deprecated Space Tokens

Space tokens have been deprecated in favor of more specific tokens. Which token you choose depends
on the context of how it's used. In general you should:

- use `padding` tokens for interior space (`padding` and `inset`)
- use `gap` tokens for exterior space around and between elements (`gap` and `margin`)
- use `size` tokens for an element's container space (`height` and `width`)

| Deprecated Token    | Value (px) | Padding Token  | Gap Token  | Size Token  | Notes                                          |
| ------------------- | ---------- | -------------- | ---------- | ----------- | ---------------------------------------------- |
| `system.space.zero` | 0px        | `padding.none` | `gap.none` | —           |                                                |
| `system.space.half` | 2px        | —              | —          | —           | No direct map. Use `0.125rem` or `base.size25` |
| `system.space.x1`   | 4px        | `padding.xxs`  | `gap.xs`   | —           |                                                |
| `system.space.x2`   | 8px        | `padding.xs`   | `gap.sm`   | —           |                                                |
| `system.space.x3`   | 12px       | `padding.sm`   | —          | —           |                                                |
| `system.space.x4`   | 16px       | `padding.md`   | `gap.md`   | `size.xxxs` |                                                |
| `system.space.x5`   | 20px       | `padding.lg`   | —          | `size.xxs`  |                                                |
| `system.space.x6`   | 24px       | `padding.xl`   | `gap.lg`   | `size.xs`   |                                                |
| `system.space.x8`   | 32px       | `padding.xxl`  | `gap.xl`   |             |                                                |
| `system.space.x10`  | 40px       | —              | —          | `size.md`   |                                                |
| `system.space.x14`  | 56px       | —              | —          | `size.xl`   |                                                |
| `system.space.x16`  | 64px       | —              | `gap.xxl`  | `size.xxl`  |                                                |
| `system.space.x20`  | 80px       | —              | —          | —           | No direct map. Use `5rem` or `base.size1000`   |

### Deprecated Shape Tokens

Our scalar (`system.shape.x*`) tokens have been deprecated. They do not have a 1:1 replacement
because our changes to our overall shape language. Which token you choose depends on its specifc
usage. Please refer to the 'Notes' column for reference. Use the notes below to determine the
replacement token for your use case.

| Deprecated Token      | Replacement         | CSS Variable            | Notes                                                                                                                       |
| --------------------- | ------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `system.shape.half`   | —                   | —                       | Use `shape.sm` for status indicators, pills                                                                                 |
| `system.shape.x1`     | —                   | —                       | Use `shape.sm` for status indicators, pills                                                                                 |
| `system.shape.x1Half` | —                   | —                       | Use `shape.md` for input components                                                                                         |
| `system.shape.x2`     | —                   | —                       | Use `shape.lg` for toasts, tooltips, and smaller surfaces. Use `shape.xxl` for cards. Use `shape.xxxl` for modal containers |
| `system.shape.x4`     | —                   | —                       | Use `shape.xxxl` for modal containers                                                                                       |
| `system.shape.x6`     | —                   | —                       | Use `shape.xxxl` for dialog sheets                                                                                          |
| `system.shape.zero`   | `system.shape.none` | `--cnvs-sys-shape-none` | Renamed                                                                                                                     |
| `system.shape.round`  | `system.shape.full` | `--cnvs-sys-shape-full` | Renamed                                                                                                                     |

### Deprecated Breakpoint Tokens

Breakpoint tokens have been renamed for consistency and have a 1:1 mapping with their replacement
tokens. Please refer to the table below to upgrade.

| Deprecated Token       | Replacement Token       |
| ---------------------- | ----------------------- |
| `system.breakpoints.s` | `system.breakpoints.sm` |
| `system.breakpoints.m` | `system.breakpoints.md` |
| `system.breakpoints.l` | `system.breakpoints.lg` |

### Deprecated Color Tokens

The following color tokens have been deprecated in v4. Each deprecated token now points to a new
token value. The deprecated tokens will continue to work but will resolve to their replacement
values. We recommend updating your code to use the new token names directly.

#### Background Color Tokens

**Primary Background Tokens**

The primary background tokens have been reorganized to better align with brand and surface
semantics. All deprecated tokens point directly to their original values:

| Deprecated Token                   | Replacement Token                            | Notes                                                         |
| ---------------------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `system.color.bg.primary.default`  | `system.color.brand.accent.primary`          | Primary brand color for backgrounds                           |
| `system.color.bg.primary.strong`   | `system.color.brand.accent.primary`          | Use with `system.color.accent.overlay.hover` for hover states |
| `system.color.bg.primary.stronger` | `system.color.brand.accent.primary`          | Use with `system.color.accent.overlay.pressed` for active     |
| `system.color.bg.primary.soft`     | `system.color.brand.surface.primary.default` | Surface background with primary brand color                   |
| `system.color.bg.primary.softer`   | `system.color.brand.surface.primary.strong`  | Stronger surface background with primary brand color          |
| `system.color.bg.primary.softest`  | `system.color.brand.surface.primary.default` | Surface background with primary brand color                   |

**Alt Background Tokens**

| Deprecated Token               | Replacement Token                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| `system.color.bg.alt.soft`     | `system.color.surface.alt.default`                                                       |
| `system.color.bg.alt.softer`   | `system.color.surface.raised`                                                            |
| `system.color.bg.alt.strong`   | `system.color.surface.alt.default` with overlay (`system.color.surface.overlay.hover`)   |
| `system.color.bg.alt.stronger` | `system.color.surface.alt.default` with overlay (`system.color.surface.overlay.pressed`) |

**Transparent/Overlay Background Tokens**

| Deprecated Token                       | Replacement Token                              |
| -------------------------------------- | ---------------------------------------------- |
| `system.color.bg.transparent.default`  | `system.color.surface.transparent`             |
| `system.color.bg.transparent.strong`   | `system.color.surface.overlay.hover.default`   |
| `system.color.bg.transparent.stronger` | `system.color.surface.overlay.pressed.default` |
| `system.color.bg.overlay`              | `system.color.surface.overlay.scrim`           |
| `system.color.bg.translucent`          | `system.color.surface.contrast.default`        |

**Muted Background Tokens**

| Deprecated Token                | Replacement Token                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| `system.color.bg.muted.default` | `system.color.accent.muted.default`                                                    |
| `system.color.bg.muted.soft`    | `system.color.accent.muted.soft`                                                       |
| `system.color.bg.muted.softer`  | `system.color.accent.muted.soft`                                                       |
| `system.color.bg.muted.strong`  | `system.color.accent.muted.default` with overlay (`system.color.accent.overlay.hover`) |

**Contrast Background Tokens**

| Deprecated Token                   | Replacement Token                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `system.color.bg.contrast.default` | `system.color.surface.contrast.default`                                                   |
| `system.color.bg.contrast.strong`  | `system.color.surface.contrast.strong` with overlay (`system.color.accent.overlay.hover`) |

**Critical Background Tokens**

| Deprecated Token                    | Replacement Token                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| `system.color.bg.critical.default`  | `system.color.brand.accent.critical`                                                      |
| `system.color.bg.critical.soft`     | `system.color.surface.danger.default`                                                     |
| `system.color.bg.critical.softer`   | `system.color.brand.surface.critical.strong`                                              |
| `system.color.bg.critical.softest`  | `system.color.brand.surface.critical.default`                                             |
| `system.color.bg.critical.strong`   | `system.color.brand.accent.critical` with overlay (`system.color.accent.overlay.hover`)   |
| `system.color.bg.critical.stronger` | `system.color.brand.accent.critical` with overlay (`system.color.accent.overlay.pressed`) |

**Caution/Warning Background Tokens**

| Deprecated Token                   | Replacement Token                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `system.color.bg.caution.default`  | `system.color.brand.accent.caution`                                                      |
| `system.color.bg.caution.soft`     | `system.color.surface.warning.default`                                                   |
| `system.color.bg.caution.softer`   | `system.color.brand.surface.caution.strong`                                              |
| `system.color.bg.caution.softest`  | `system.color.brand.surface.caution.default`                                             |
| `system.color.bg.caution.strong`   | `system.color.brand.accent.caution` with overlay (`system.color.accent.overlay.hover`)   |
| `system.color.bg.caution.stronger` | `system.color.brand.accent.caution` with overlay (`system.color.accent.overlay.pressed`) |

**Positive/Success Background Tokens**

| Deprecated Token                    | Replacement Token                                                                         |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| `system.color.bg.positive.default`  | `system.color.brand.accent.positive`                                                      |
| `system.color.bg.positive.strong`   | `system.color.brand.accent.positive` with overlay (`system.color.accent.overlay.hover`)   |
| `system.color.bg.positive.stronger` | `system.color.brand.accent.positive` with overlay (`system.color.accent.overlay.pressed`) |
| `system.color.bg.positive.soft`     | `system.color.brand.surface.positive.default`                                             |
| `system.color.bg.positive.softer`   | `system.color.brand.surface.positive.strong`                                              |
| `system.color.bg.positive.softest`  | `system.color.surface.success.default`                                                    |

**Info Background Tokens**

| Deprecated Token                | Replacement Token                                                               |
| ------------------------------- | ------------------------------------------------------------------------------- |
| `system.color.bg.info.default`  | `system.color.accent.info`                                                      |
| `system.color.bg.info.strong`   | `system.color.accent.info` with overlay (`system.color.accent.overlay.hover`)   |
| `system.color.bg.info.stronger` | `system.color.accent.info` with overlay (`system.color.accent.overlay.pressed`) |
| `system.color.bg.info.soft`     | `system.color.surface.info.default`                                             |
| `system.color.bg.info.softer`   | `system.color.surface.info.strong`                                              |
| `system.color.bg.info.softest`  | `system.color.surface.info.default`                                             |

**AI Background Tokens**

| Deprecated Token               | Replacement Token                 |
| ------------------------------ | --------------------------------- |
| `system.color.bg.ai.default`   | `system.color.surface.ai.default` |
| `system.color.bg.ai.strong`    | `system.color.surface.ai.hover`   |
| `system.color.bg.ai.stronger`  | `system.color.surface.ai.pressed` |
| `system.color.bg.ai.strongest` | `system.color.accent.ai`          |

#### Foreground Color Tokens

**Text Tokens**

System text tokens (`system.color.text.*`) are deprecated and are mostly being replaced with
foreground tokens (`system.color.fg.*`) to consolidate duplicated tokens. However, a few are
replaced with brand and other tokens. Please refer to the table below for the specific token
mappings.

| Deprecated Token                      | Replacement Token                        |
| ------------------------------------- | ---------------------------------------- |
| `system.color.text.default`           | `system.color.fg.default`                |
| `system.color.text.strong`            | `system.color.fg.strong`                 |
| `system.color.text.stronger`          | `system.color.fg.strong`                 |
| `system.color.text.disabled`          | `system.opacity.disabled`                |
| `system.color.text.hint`              | `system.color.fg.muted.default`          |
| `system.color.text.inverse`           | `system.color.fg.inverse`                |
| `system.color.text.critical.default`  | `system.color.brand.fg.critical.default` |
| `system.color.text.critical.strong`   | `system.color.brand.fg.critical.strong`  |
| `system.color.text.critical.stronger` | `system.color.brand.fg.critical.strong`  |
| `system.color.text.critical.soft`     | `system.color.fg.danger`                 |
| `system.color.text.critical.softer`   | `system.color.fg.danger`                 |
| `system.color.text.primary.default`   | `system.color.brand.fg.primary.default`  |
| `system.color.text.primary.strong`    | `system.color.brand.fg.primary.strong`   |
| `system.color.text.primary.stronger`  | `system.color.brand.fg.primary.strong`   |
| `system.color.text.primary.soft`      | `system.color.fg.info`                   |
| `system.color.text.primary.softer`    | `system.color.fg.info`                   |
| `system.color.text.caution.default`   | `system.color.fg.warning`                |
| `system.color.text.caution.strong`    | `system.color.fg.contrast.strong`        |
| `system.color.text.caution.soft`      | `system.color.fg.warning`                |
| `system.color.text.caution.stronger`  | `system.color.fg.contrast.strong`        |
| `system.color.text.caution.softer`    | `system.color.fg.warning`                |
| `system.color.text.ai`                | `system.color.fg.ai`                     |
| `system.color.text.positive.default`  | `system.color.brand.fg.positive.default` |
| `system.color.text.positive.strong`   | `system.color.brand.fg.positive.strong`  |
| `system.color.text.positive.stronger` | `system.color.brand.fg.positive.strong`  |
| `system.color.text.positive.soft`     | `system.color.fg.success`                |
| `system.color.text.positive.softer`   | `system.color.fg.success`                |
| `system.color.text.info.default`      | `system.color.fg.info.default`           |
| `system.color.text.info.strong`       | `system.color.fg.info.strong`            |
| `system.color.text.info.stronger`     | `system.color.fg.info.strong`            |
| `system.color.text.info.soft`         | `system.color.fg.info.default`           |
| `system.color.text.info.softer`       | `system.color.fg.info`                   |

Similarly, system icon tokens (`system.color.icon.*`) are deprecated and are mostly being replaced
with foreground tokens (`system.color.fg.*`) to consolidate duplicated tokens. However, a few are
replaced with brand and other tokens. Please refer to the table below for the specific token
mappings.

| Deprecated Token                      | Replacement Token                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------------- |
| `system.color.icon.default`           | `system.color.fg.default`                                                          |
| `system.color.icon.soft`              | `system.color.fg.muted.default`                                                    |
| `system.color.icon.strong`            | `system.color.fg.muted.strong`                                                     |
| `system.color.icon.inverse`           | `system.color.fg.inverse`                                                          |
| `system.color.icon.primary.default`   | `system.color.brand.fg.primary.default`                                            |
| `system.color.icon.primary.strong`    | `system.color.brand.fg.primary.strong`                                             |
| `system.color.icon.primary.stronger`  | `system.color.brand.fg.primary.strong`                                             |
| `system.color.icon.primary.soft`      | `system.color.fg.info`                                                             |
| `system.color.icon.primary.softer`    | `system.color.fg.info`                                                             |
| `system.color.icon.positive.default`  | `system.color.brand.fg.positive.default`                                           |
| `system.color.icon.positive.strong`   | `system.color.brand.fg.positive.strong` with `system.color.accent.overlay.hover`   |
| `system.color.icon.positive.stronger` | `system.color.brand.fg.positive.strong` with `system.color.accent.overlay.pressed` |
| `system.color.icon.positive.soft`     | `system.color.fg.success`                                                          |
| `system.color.icon.positive.softer`   | `system.color.fg.success`                                                          |
| `system.color.icon.critical.default`  | `system.color.brand.fg.critical.default`                                           |
| `system.color.icon.critical.strong`   | `system.color.fg.danger-strong`                                                    |
| `system.color.icon.critical.stronger` | `system.color.fg.danger.strong`                                                    |
| `system.color.icon.critical.soft`     | `system.color.fg.danger`                                                           |
| `system.color.icon.critical.softer`   | `system.color.fg.danger`                                                           |
| `system.color.icon.caution.default`   | `system.color.fg.contrast.default`                                                 |
| `system.color.icon.caution.strong`    | `system.color.brand.fg.caution.default`                                            |
| `system.color.icon.caution.stronger`  | `system.color.brand.fg.caution.strong`                                             |
| `system.color.icon.caution.soft`      | `system.color.fg.warning`                                                          |
| `system.color.icon.caution.softer`    | `system.color.fg.warning`                                                          |
| `system.color.icon.disabled`          | `system.color.fg.disabled`                                                         |
| `system.color.icon.info.default`      | `system.color.fg.info.default`                                                     |
| `system.color.icon.info.strong`       | `system.color.fg.info.strong`                                                      |
| `system.color.icon.info.stronger`     | `system.color.fg.info.strong`                                                      |

**Foreground Tokens**

Some foreground (`system.color.fg.*`) tokens are being remapped to other system colors to
consolidate them.

| Deprecated Token                    | Replacement Token                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| `system.color.fg.critical.default`  | `system.color.brand.fg.critical.default`                                           |
| `system.color.fg.critical.strong`   | `system.color.brand.fg.critical.strong` with `system.color.accent.overlay.hover`   |
| `system.color.fg.critical.stronger` | `system.color.fg.danger tokens`                                                    |
| `system.color.fg.critical.soft`     | `system.color.fg.danger`                                                           |
| `system.color.fg.critical.softer`   | `system.color.fg.danger`                                                           |
| `system.color.fg.muted.stronger`    | `system.color.fg.muted.strong`                                                     |
| `system.color.fg.muted.soft`        | `system.color.fg.muted`                                                            |
| `system.color.fg.primary.default`   | `system.color.brand.fg.primary.default`                                            |
| `system.color.fg.primary.soft`      | `system.color.fg.info` or use `system.color.brand.fg.primary` for brand colors     |
| `system.color.fg.primary.softer`    | `system.color.fg.info` or use `system.color.brand.fg.primary` for brand colors     |
| `system.color.fg.primary.stronger`  | `system.color.brand.fg.primary.strong`                                             |
| `system.color.fg.primary.strong`    | `system.color.brand.fg.primary.strong`                                             |
| `system.color.fg.caution.default`   | `system.color.brand.fg.caution.default`                                            |
| `system.color.fg.caution.strong`    | `system.color.brand.fg.caution.strong` with `system.color.accent.overlay.hover`    |
| `system.color.fg.caution.soft`      | `system.color.fg.warning`                                                          |
| `system.color.fg.caution.stronger`  | `system.color.fg.warning-strong`                                                   |
| `system.color.fg.caution.softer`    | `system.color.fg.warning`                                                          |
| `system.color.fg.info.softer`       | `system.color.fg.ai`                                                               |
| `system.color.fg.info.soft`         | `system.color.fg.info`                                                             |
| `system.color.fg.info.stronger`     | `system.color.fg.info.strong`                                                      |
| `system.color.fg.positive.default`  | `system.color.brand.fg.positive.default`                                           |
| `system.color.fg.positive.softer`   | `system.color.fg.success`                                                          |
| `system.color.fg.positive.soft`     | `system.color.fg.success`                                                          |
| `system.color.fg.positive.strong`   | `system.color.brand.fg.positive.strong` with `system.color.accent.overlay.hover`   |
| `system.color.fg.positive.stronger` | `system.color.brand.fg.positive.strong` with `system.color.accent.overlay.pressed` |

#### System Border Color Tokens

> Important: The `system.color.border.inverse` token is a breaking change. **Important** This is a > breaking change. Teams will have to update their code to use
> `system.color.border.inverse.default`.

| Deprecated Token                       | Replacement Token                        | Notes                                                            |
| -------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| `system.color.border.input.disabled`   | `system.opacity.disabled`                | Use `system.color.fg.disabled` for disabled input text and icons |
| `system.color.border.input.strong`     | `system.color.border.input.hover`        |                                                                  |
| `system.color.border.input.inverse`    | `system.color.border.inverse.default`    |                                                                  |
| `system.color.border.contrast.strong`  | `system.color.border.contrast.default`   | Use `system.color.border.contrast.default` instead               |
| `system.color.border.primary.default`  | `system.color.brand.border.primary`      |                                                                  |
| `system.color.border.critical.default` | `system.color.brand.border.critical`     |                                                                  |
| `system.color.border.caution.default`  | `system.color.brand.focus.caution.inner` |                                                                  |
| `system.color.border.caution.strong`   | `system.color.brand.focus.caution.outer` |                                                                  |
| `system.color.border.ai`               | `system.color.accent.ai`                 |                                                                  |
| `system.color.border.divider`          | `system.color.border.default`            |                                                                  |
| `system.color.border.container`        | `system.color.border.strong`             |                                                                  |

#### System Static Color Tokens

System static color tokens have been deprecated. Almost all of these will directly map to a base
palette token, but some will map to a system token. Other mappings will depend on the token's usage.
Please refer to the 'Notes' column in the tables below for additional context.

**Static Amber/Orange/Gold Tokens**

Our amber, orange, and gold tokens have been deprecated. Some of their replacement mappings depends
on their specific usage. Refer to the table below for the recommended mapping and notes for
additional context.

| Deprecated Token                      | Replacement Token                      | Notes                                                             |
| ------------------------------------- | -------------------------------------- | ----------------------------------------------------------------- |
| `system.color.static.amber.default`   | `system.color.accent.warning`          |                                                                   |
| `system.color.static.amber.softest`   | `system.color.surface.warning.default` |                                                                   |
| `system.color.static.amber.soft`      | `system.color.surface.warning.strong`  |                                                                   |
| `system.color.static.amber.softer`    | `base.palette.amber.50`                |                                                                   |
| `system.color.static.amber.strong`    | `system.color.accent.warning`          |                                                                   |
| `system.color.static.amber.stronger`  | `system.color.accent.warning`          |                                                                   |
| `system.color.static.amber.strongest` | `system.color.fg.warning.strong`       |                                                                   |
| `system.color.static.orange.default`  | `base.palette.amber.400`               | Prefer `system.color.bg.caution.default` when used as background  |
| `system.color.static.orange.soft`     | `base.palette.amber.100`               | Prefer `system.color.bg.caution.soft` when used as background     |
| `system.color.static.orange.strong`   | `base.palette.amber.500`               | Prefer `system.color.bg.caution.strong` when used as background   |
| `system.color.static.gold.stronger`   | `base.palette.amber.600`               | Prefer `system.color.bg.caution.stronger` when used as background |

**Static Blue Tokens**

The `system.color.static.blue.default` token should map to `system.color.accent.info`. All other
`system.color.static.blue` tokens should map to `base.palette.blue.*` tokens.

| Deprecated Token                     | Replacement Token          |
| ------------------------------------ | -------------------------- |
| `system.color.static.blue.default`   | `system.color.accent.info` |
| `system.color.static.blue.softest`   | `base.palette.blue.25`     |
| `system.color.static.blue.softer`    | `base.palette.blue.50`     |
| `system.color.static.blue.soft`      | `base.palette.blue.100`    |
| `system.color.static.blue.strong`    | `base.palette.blue.700`    |
| `system.color.static.blue.stronger`  | `base.palette.blue.800`    |
| `system.color.static.blue.strongest` | `base.palette.blue.950`    |

**Static Green Tokens**

All `system.color.static.green.*` should map to `base.palette.green.*` tokens.

| Deprecated Token                      | Replacement Token        |
| ------------------------------------- | ------------------------ |
| `system.color.static.green.default`   | `base.palette.green.600` |
| `system.color.static.green.softest`   | `base.palette.green.25`  |
| `system.color.static.green.softer`    | `base.palette.green.50`  |
| `system.color.static.green.soft`      | `base.palette.green.100` |
| `system.color.static.green.strong`    | `base.palette.green.700` |
| `system.color.static.green.stronger`  | `base.palette.green.800` |
| `system.color.static.green.strongest` | `base.palette.green.950` |

**Static Red Tokens**

All `system.color.static.red.*` should map to `base.palette.red.*` tokens.

| Deprecated Token                    | Replacement Token      |
| ----------------------------------- | ---------------------- |
| `system.color.static.red.default`   | `base.palette.red.600` |
| `system.color.static.red.softest`   | `base.palette.red.25`  |
| `system.color.static.red.softer`    | `base.palette.red.50`  |
| `system.color.static.red.soft`      | `base.palette.red.100` |
| `system.color.static.red.strong`    | `base.palette.red.700` |
| `system.color.static.red.stronger`  | `base.palette.red.800` |
| `system.color.static.red.strongest` | `base.palette.red.950` |

**Static Gray/Slate Tokens**

All `system.color.static.gray.*` should map to `base.palette.slate.*` tokens.

| Deprecated Token                     | Replacement Token        |
| ------------------------------------ | ------------------------ |
| `system.color.static.gray.default`   | `base.palette.slate.600` |
| `system.color.static.gray.softest`   | `base.palette.slate.50`  |
| `system.color.static.gray.softer`    | `base.palette.slate.100` |
| `system.color.static.gray.soft`      | `base.palette.slate.200` |
| `system.color.static.gray.strong`    | `base.palette.slate.700` |
| `system.color.static.gray.stronger`  | `base.palette.slate.800` |
| `system.color.static.gray.strongest` | `base.palette.slate.950` |

**Static Neutral Tokens**

The static white and black tokens should map to our base palette neutral tokens.

| Deprecated Token            | Replacement Token           |
| --------------------------- | --------------------------- |
| `system.color.static.white` | `base.palette.neutral.0`    |
| `system.color.static.black` | `base.palette.neutral.1000` |

### System Shadow Tokens

Our `system.shadow.*` tokens have been updated to use more descriptive names.

| Deprecated Token        | Replacement Token             |
| ----------------------- | ----------------------------- |
| `system.shadow.1`       | `system.color.shadow.base`    |
| `system.shadow.2`       | `system.color.shadow.ambient` |
| `system.shadow.default` | `system.color.shadow.base`.   |

### System Typography Tokens

Some of our type tokens have been renamed for consistency, but the values are still the same. You
should not see any visual changes after updating to v4. Please refer to the sections below on the
specific changes and how to update.

#### Type Composite Tokens

Our composite `system.type.*` tokens (which combine font-family, font-weight, line-height,
font-size, and letter-spacing) have been renamed to use shorter, abbreviated names. The longer,
descriptive names are deprecated. Please update to the abbreviated token names. Use the table below
for reference.

| Deprecated Token             | Replacement Tokens       |
| ---------------------------- | ------------------------ |
| `system.type.subtext.small`  | `system.type.subtext.sm` |
| `system.type.subtext.medium` | `system.type.subtext.md` |
| `system.type.subtext.large`  | `system.type.subtext.lg` |
| `system.type.body.small`     | `system.type.body.sm`    |
| `system.type.body.medium`    | `system.type.body.md`    |
| `system.type.body.large`     | `system.type.body.lg`    |
| `system.type.heading.small`  | `system.type.heading.sm` |
| `system.type.heading.medium` | `system.type.heading.md` |
| `system.type.heading.large`  | `system.type.heading.lg` |
| `system.type.title.small`    | `system.type.title.sm`   |
| `system.type.title.medium`   | `system.type.title.md`   |
| `system.type.title.large`    | `system.type.title.lg`   |

Example Update:

```ts
// Before with v3 tokens
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customTypeStyles = createStyles({
  ...system.type.body.large,
  fontWeight: system.type.fontWeight.bold,
});
```

```ts
// After with v4 tokens
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customTypeStyles = createStyles({
  ...system.type.body.lg,
  fontWeight: system.type.fontWeight.bold,
});
```

Similarly, our typography tokens for `font-size` and `line-height` have been renamed to use
abbreviated size names (`sm`, `md`, `lg`) instead of longer, descriptive names (`small`, `medium`,
`large`) for consistency. The values of the tokens are the same, and there should be no visual
change when you upgrade.

#### Font-Size Tokens

Pleas refer to the table below when replacing deprecated font-size tokens.

| Deprecated Token                  | Replacement Token             |
| --------------------------------- | ----------------------------- |
| `system.font-size.subtext.small`  | `system.font-size.subtext.sm` |
| `system.font-size.subtext.medium` | `system.font-size.subtext.md` |
| `system.font-size.subtext.large`  | `system.font-size.subtext.lg` |
| `system.font-size.body.small`     | `system.font-size.body.sm`    |
| `system.font-size.body.medium`    | `system.font-size.body.md`    |
| `system.font-size.body.large`     | `system.font-size.body.lg`    |
| `system.font-size.heading.small`  | `system.font-size.heading.sm` |
| `system.font-size.heading.medium` | `system.font-size.heading.md` |
| `system.font-size.heading.large`  | `system.font-size.heading.lg` |
| `system.font-size.title.small`    | `system.font-size.title.sm`   |
| `system.font-size.title.medium`   | `system.font-size.title.md`   |
| `system.font-size.title.large`    | `system.font-size.title.lg`   |

Example Update:

```ts
// Before with v3 tokens
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customTypeStyles = createStyles({
  fontSize: system.fontSize.body.large,
});
```

```ts
// After with v4 tokens
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customTypeStyles = createStyles({
  fontSize: system.fontSize.body.lg,
});
```

#### Line-Height Tokens

Pleas refer to the table below when replacing deprecated line-height tokens.

| Deprecated Token                    | Replacement Token               |
| ----------------------------------- | ------------------------------- |
| `system.line-height.subtext.small`  | `system.line-height.subtext.sm` |
| `system.line-height.subtext.medium` | `system.line-height.subtext.md` |
| `system.line-height.subtext.large`  | `system.line-height.subtext.lg` |
| `system.line-height.body.small`     | `system.line-height.body.sm`    |
| `system.line-height.body.medium`    | `system.line-height.body.md`    |
| `system.line-height.body.large`     | `system.line-height.body.lg`    |
| `system.line-height.heading.small`  | `system.line-height.heading.sm` |
| `system.line-height.heading.medium` | `system.line-height.heading.md` |
| `system.line-height.heading.large`  | `system.line-height.heading.lg` |
| `system.line-height.title.small`    | `system.line-height.title.sm`   |
| `system.line-height.title.medium`   | `system.line-height.title.md`   |
| `system.line-height.title.large`    | `system.line-height.title.lg`   |

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
   font-size and line-height tokens.
