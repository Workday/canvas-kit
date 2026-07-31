# Shape

> For the complete current token reference including Sana Canvas values, see [v4.4 Token Reference](./v4.4-token-reference.md).

## Usage Guidance

Shape tokens define border radius values for UI elements. Apply them to create consistent rounded corners across similar components.

Use t-shirt size names (`sm`, `md`, `lg`, …). The old scalar scale (`x1`, `x2`, `x4`, `x6`, `zero`, `half`, `round`) is deprecated.

## Shape Tokens

| Token | Default | Sana | Usage |
|---|---|---|---|
| `shape.none` | 0 | same | Full-width containers, headers, side panels |
| `shape.xs` | — | 4px | Sana-only — compact rounding |
| `shape.sm` | 4px | 6px | Pills, status indicators, checkboxes |
| `shape.md` | 8px | same | Inputs, toasts, tooltips, snackbars |
| `shape.lg` | 12px | same | Rich text editors |
| `shape.xl` | 16px | same | Compact cards |
| `shape.xxl` | 24px | 20px | Cards, list items |
| `shape.xxxl` | 32px | 28px | Modals, dialogs, bottom sheets |
| `shape.full` | 999px | same | Buttons, badges, avatars — fully rounded |

Under `data-theme="sana-canvas"`, shape values change automatically. Write `system.shape.*` — do not use `system.sana.shape.*`.

[View our shape tokens](https://workday.github.io/canvas-tokens/?path=/docs/docs-system-tokens-shape--docs)

## Using our Shapes

**Do:**

- Apply the same border radius value to all corners of an element.
- Choose shape tokens based on component type and use case.

**Don't:**

- Combine different border radius values on the same element.
- Use deprecated scalar tokens (`shape.x1`, `shape.x2`, `shape.round`, `shape.zero`).

## Web Examples

### Javascript / Typescript

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  borderRadius: system.shape.xxl,
});
```

`createStyles` resolves token names to `var(--cnvs-…)` automatically. Outside `createStyles`, wrap tokens with `cssVar()` or a `` `var(${token})` `` template literal.

### CSS

```css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.card {
  border-radius: var(--cnvs-sys-shape-xxl);
}
```
