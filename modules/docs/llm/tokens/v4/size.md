# Size

> For the complete current token reference including Sana Canvas values, see [v4.4 Token Reference](./v4.4-token-reference.md).

## Usage Guidance

Size tokens control the dimensions of UI elements. Use them for `width`, `height`, `min/max`, `inlineSize`, and `blockSize`.

**Do not** use size tokens for spacing between elements (`gap`) or internal padding (`padding`). Match the token family to the CSS property.

## Size Tokens

| Token | px | Canvas uses it for |
|---|---|---|
| `size.xxxs` | 16 | Switch toggle |
| `size.xxs` | 20 | Status indicators, count badges |
| `size.xs` | 24 | Small buttons, pills, checkboxes, radios |
| `size.sm` | 32 | Buttons, segmented controls, tooltips, avatars |
| `size.md` | 40 | Default control height — buttons, inputs, banners, menu items |
| `size.lg` | 48 | Large buttons, expandable triggers, tabs, large avatars |
| `size.xl` | 56 | Table cells, toasts |
| `size.xxl` | 64 | Collapsed expandable containers |

## Using our Sizes

**Do:**

- Use `system.size.*` for element dimensions.
- Use `system.gap.*` for space between elements and `system.padding.*` for internal spacing.

**Don't:**

- Use `system.space.x*` — all numeric space tokens are deprecated. Use `padding` or `gap` instead.
- Use padding tokens to set fixed heights.

## Escape hatches

When no size token fits:

```tsx
height: base.size150,                            // base scale (12px)
height: calc.add(system.size.md, base.size100),  // compose tokens
```

## Web Examples

### Javascript / Typescript

```tsx
import {system} from '@workday/canvas-tokens-web';

const styles = {
  height: system.size.md,
  width: system.size.xs,
};
```

### CSS

```css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.control {
  height: var(--cnvs-sys-size-md);
  width: var(--cnvs-sys-size-xs);
}
```
