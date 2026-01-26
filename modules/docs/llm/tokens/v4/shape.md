# Shape

## Usage Guidance

Shape tokens define border radius values for UI elements. Apply them to create consistent rounded corners across similar components.

## Shape Tokens

Shape tokens are aliased to base `size` tokens to define border radius. Each token corresponds to a specific use case and component type.

[View our shape tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs)

## Shape Tokens

| Token            | Value     | Size (px) | Usage                                    |
|------------------|-----------|-----------|------------------------------------------|
| `shape.none`     | `size.0`  | `0px`     | No border radius                         |
| `shape.sm`       | `size.50` | `4px`     | Small border radius for compact components|
| `shape.md`       | `size.100`| `8px`     | Medium border radius for form components |
| `shape.lg`       | `size.150`| `12px`    | Large border radius for content editors   |
| `shape.xl`       | `size.200`| `16px`    | Extra large for smaller cards            |
| `shape.xxl`      | `size.300`| `24px`    | Extra extra large for cards              |
| `shape.xxxl`     | `size.400`| `32px`   | Maximum for large elevated containers    |
| `shape.full`     | `size.75 * 100` | `999px` | Full rounding for high-visibility components |

### None

Value: `size.0`

No border radius. Use for full-width and background containers, fixed navigation containers such as headers and side-panels.

### Small

Value: `size.50`

Small border radius for compact components. Used for pills, status indicators, and checkboxes.

### Medium

Value: `size.100`

Medium border radius for form components and notifications. Used for inputs, toasts, tooltips, and snackbars.

### Large

Value: `size.150`

Large border radius for content editors. Used for rich text editors.

### Extra Large

Value: `size.200`

Extra large border radius for smaller cards and containers. Used for compact card components and smaller content containers.

### Extra Extra Large

Value: `size.300`

Extra extra large border radius for cards and list items. Used for card components and large content containers.

### Extra Extra Extra Large

Value: `size.400`

Maximum border radius for large elevated containers. Used for dialogs, modals, bottom sheets, and other elevated parent containers with substantial content.

### Full

Value: `size.75 * 100`

Full rounding for high-visibility components intended to draw attention. Used for buttons, badges, status indicators, essential inputs, and border containers (not cards).

## Using our Shapes

<Do>

- Apply the same border radius value to all corners of an element. This ensures the shape doesn't get distorted.
- Choose shape tokens based on component type and use case. Follow the recommended usage for each token size.

</Do>

<Dont>

- Don't combine different border radius values on the same element.
- Don't use different values for different corners unless specifically required.

</Dont>

## Web Examples

### Javascript / Typescript

```tsx
// styles.ts
import {system} from '@workday/canvas-tokens-web';

const styles = {
  borderRadius: `var(${system.shape.xxl})`,
};
```

### CSS

```css
// styles.css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.card {
  border-radius: var(--cnvs-sys-shape-xxl);
}
```

<ShapeTokens />

<InternalContent>

## iOS Examples

Coming soon!

## Android Examples

Coming soon!

</InternalContent>
