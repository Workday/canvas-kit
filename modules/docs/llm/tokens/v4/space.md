# Space


Spacing refers to the area between and within visual elements. Canvas provides spacing tokens to create a consistent foundation for responsive design and UI density.

## Anatomy

1. **Variant**: Type of space token (padding or gap)
2. **Size**: T-shirt size used in the scale
3. **Value**: Reference to a base size tokenvides spacing tokens to create a consistent foundation for responsive design and UI density.

### 8pt grid

Canvas’s spacing scale is built around a base unit of 8. This base unit is the foundation for all dimension related tokens, including space, shape, size, font-size, and line-height. Using a shared scale for sizes allows us to ensure accessible scaling even if user preferences change the base font size.

## Variations

There are two types of space tokens: `padding` and `gap`.

### Padding

`padding` tokens are spacing values that represent the internal spacing within a component, from its content to external boundaries.

`padding` tokens map directly to the padding CSS properties and its variants. These include but are not limited to `padding`, `padding-inline-start`, `padding-inline-end`, `padding-top`, `padding-bottom`, `padding-left`, `padding-right`.

| Token            | Value     | Raw Value | Usage                                    |
|------------------|-----------|-----------|------------------------------------------|
| `padding.none`   | `size.0`  | `0rem`    | No padding                                |
| `padding.xxs`    | `size.50` | `0.25rem` | Minimal padding for compact elements      |
| `padding.xs`     | `size.100`| `0.5rem`  | Compact padding, like in Status Indicators|
| `padding.sm`     | `size.150`| `0.75rem` | Tight padding, like in XS Buttons         |
| `padding.md` (base) | `size.200`| `1rem`    | Default padding, like in Inputs        |
| `padding.lg`     | `size.250`| `1.25rem` | Large padding, like in Buttons with Icons |
| `padding.xl`     | `size.300`| `1.5rem`  | Cards                                     |
| `padding.xxl`    | `size.400`| `2rem`    | Modals                                    |


### `padding.none`

**Value:** `0px / 0rem`

No space between content and element edges. Used for full-bleed content, removing default padding, edge-to-edge layouts, and components that need tight layouts (e.g., full-width containers, edge-to-edge images).

### `padding.xxs`

**Value:** `4px / 0.25rem`

Minimal padding for the most compact elements. Used for checkboxes and radio buttons, pills and tags, high-density UI components, and elements requiring tight internal spacing (e.g., checkboxes, pills, tags).

### `padding.xs`

**Value:** `8px / 0.5rem`

Small padding for compact interactive elements. Used for horizontal padding on input fields, compact buttons and controls, tight container spacing, and small dropdowns and select menus (e.g., input fields, compact buttons, small controls).

### `padding.sm`

**Value:** `12px / 0.75rem`

Compact padding for small components. Used for rich text editor, X-small buttons, compact panels, and small tooltips (e.g., X-small buttons, rich text editor).

### `padding.md`

**Value:** `16px / 1rem` (base)

Standard padding for most small to medium components. Used for small button content (horizontal padding), default component internal spacing, list items, and moderate container padding (e.g., small buttons, list items, standard containers).

### `padding.lg`

**Value:** `20px / 1.25rem`

Large padding for medium-sized components. Used for medium buttons with icons, standard content containers, and comfortable spacing (e.g., medium buttons with icons).

### `padding.xl`

**Value:** `24px / 1.5rem` ⭐

Standard padding for cards and content containers. Recommended default for most container padding. Used for cards and card-like containers, medium button content, content panels, comfortable reading areas, and standard dialog content (e.g., cards, panels, medium buttons, content containers).

### `padding.xxl`

**Value:** `32px / 2rem`

Double extra large padding for prominent containers. Used for modals, large button content, hero sections, and page-level containers (e.g., modals, large buttons, hero sections).


### Gap

`gap` tokens are spacing values that represent a distance between two elements. For example, the space between two buttons, icon to text, between two sections, or pills. Gap tokens may be applied inline or to vertical stacks interchangeably.

| Token            | Value     | Raw Value | Usage                                    |
|------------------|-----------|-----------|------------------------------------------|
| `gap.none`       | `size.0`  | `0rem`    | No spacing between elements              |
| `gap.xs`         | `size.50` | `0.25rem` | Compact spacing between icons and text   |
| `gap.sm`         | `size.100`| `0.5rem`  | Space between interactive controls        |
| `gap.md` (base)  | `size.200`| `1rem`    | Default spacing for most layouts         |
| `gap.lg`         | `size.300`| `1.5rem`  | Tighter spacing between content blocks    |
| `gap.xl`         | `size.400`| `2rem`    | Default spacing between cards            |
| `gap.xxl`        | `size.800`| `4rem`    | Space between sections of content         |

### `gap.none`

**Value:** `0px / 0rem`

No space between elements. Used for adjoined buttons (button groups), connected elements, and zero spacing layouts (e.g., button groups, connected controls).

### `gap.xs`

**Value:** `4px / 0.25rem`

Minimal spacing for tightly coupled elements that need clear association. Used for icon to adjacent text, form labels to input fields, tab items in a tab bar, and tightly grouped related elements (e.g., icon-text pairs, tabs, form label groups).

### `gap.sm`

**Value:** `8px / 0.5rem`

Small spacing for related but distinct elements. Used for space between pills in a group, space between buttons in a toolbar, inline icons with text labels, segments in segmented controls, and chip collections (e.g., pills, button toolbars, segmented controls, chip groups).

### `gap.md`

**Value:** `16px / 1rem` (base)

The default spacing token for most layouts. Use this as your starting point. Used for standard spacing between elements in a layout, form field vertical spacing, list item gaps, default stack spacing, and general-purpose element separation (e.g., forms, lists, vertical stacks, general layouts).

### `gap.lg`

**Value:** `24px / 1.5rem`

Moderate spacing for larger elements and content blocks. Used for spacing between cards in a grid, related content blocks, component groupings, and section spacing within containers (e.g., card grids, content blocks, grouped sections).

### `gap.xl`

**Value:** `32px / 2rem`

Generous spacing for substantial elements and layouts. Used for standard spacing between cards in layouts, 12-column grid gutter width, comfortable spacing between major UI sections, and list sections with clear visual separation (e.g., card layouts, grid systems, page sections).

### `gap.xxl`

**Value:** `64px / 4rem`

Maximum spacing for major content sections and page-level divisions. Used for space between major content sections, page section dividers and breaks, hero to main content spacing, top-level layout divisions, and marketing page sections (e.g., page sections, hero layouts, marketing content).

## Usage Guidance

Space tokens can be used inside of components as well as between components, for layout spacing.

### Do

- Use system tokens instead of base size tokens
- Use padding tokens for internal padding within components
- Use gap tokens for the space between elements or component groups

### Don't

- Use vertical padding for fixed heights (use size tokens instead)
- Use padding and gap directly on heights or widths

## Web Examples

### Javascript / Typescript

```tsx
// styles.ts
import {system} from '@workday/canvas-tokens-web';

const styles = {
  display: 'grid',
  gap: `var(${system.space.x1})`,
  padding: `var(${system.space.x2})`,
};
```

### CSS

```css
// styles.css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.card {
  display: grid;
  gap: var(--cnvs-sys-space-x1);
  padding: var(--cnvs-sys-space-x2);
}
```

<SpaceTokens />

<InternalContent>

## iOS Examples

Coming soon!

## Android Examples

Coming soon!

</InternalContent>

## Deprecated Space Tokens

<DeprecatedSpaceTokens/>
