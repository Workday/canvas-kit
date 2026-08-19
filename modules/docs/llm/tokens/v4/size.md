# Size

> For the complete current token reference including Sana Canvas values, see [v4.4 Token Reference](./v4.4-token-reference.md).

## Usage Guidance

`system.size.*` tokens are **valid, current tokens** for setting component dimensions. Use them on sizing properties only:

- `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`
- `inlineSize`, `blockSize`

Examples: `height: system.size.md` on a button, `minWidth: system.size.xxs` on a count badge, `width: system.size.xxxs` on a switch thumb.

**Do not** use size tokens for spacing between elements (`gap`, `margin`) or internal padding (`padding`). For those, use `system.gap.*` and `system.padding.*` respectively.

> **Not deprecated:** `system.size.xxxs` through `system.size.xxl` are all active tokens. What *is* deprecated is the old `system.space.x*` family — do not substitute `size` tokens for `gap` or `padding`, and do not use `space` tokens for dimensions.

Px values and design intent below come from `@workday/canvas-tokens-web` (`css/system/_variables.css`). The **Canvas Kit components** column lists where these tokens are used in production stencils today. Canvas Kit source references `system.legacy.size.*` internally; consumers write `system.size.*` — both resolve to the same CSS variables.

## Size Tokens

| Token | px | Design intent | Canvas Kit components |
|---|---|---|---|
| `size.xxxs` | 16 | Switch toggle | Switch thumb (`SwitchCircle`), checkbox control (`CheckBackground`), pill icon button (`PillIconButton`), loading dots (`LoadingDots`), radio inner circle (`StyledRadioButton`) |
| `size.xxs` | 20 | Compact indicators | Count badge min width (`CountBadge`), preview switch container (`SwitchContainer`), color swatches (`ColorSwatch`, `SwatchBook`) |
| `size.xs` | 24 | Compact interactive elements | Extra-small buttons (`BaseButton`), status indicator (`StatusIndicator`), switch track height (`Switch`), pills (`PillCount`), radio control (`StyledRadioButton`), segmented control small (`SegmentedControlItem`), avatar extra-small (`BaseAvatar`) |
| `size.sm` | 32 | Standard interactive components | Small buttons (`BaseButton`), switch track width (`Switch`), segmented control (`SegmentedControlItem`), avatar small (`BaseAvatar`), system icon circle medium (`SystemIconCircle`) |
| `size.md` | 40 | Default control height | Medium buttons (`BaseButton`), multi-select input min height (`MultiSelectInput`), avatar medium (`BaseAvatar`), system icon circle large (`SystemIconCircle`) |
| `size.lg` | 48 | Prominent components | Large buttons (`BaseButton`), tab items (`TabsItem`), avatar large (`BaseAvatar`) |
| `size.xl` | 56 | Content containers | Table cells and toasts (token package intent). Rarely referenced directly in Canvas Kit stencils. |
| `size.xxl` | 64 | Expandable containers | Text area min height (`TextArea`), table header min height (`BaseTableHeader`, `BaseTableHead`) |

## Using our Sizes

**Do:**

- Use `system.size.*` for component dimensions (`width`, `height`, `minWidth`, etc.).
- Use `system.gap.*` for space between elements and `system.padding.*` for internal spacing.

**Don't:**

- Use `system.size.*` for `gap`, `margin`, or `padding`.
- Use `system.space.x*` — deprecated; use `padding` or `gap` instead.
- Use `padding` tokens to set fixed component heights or widths.
- Compose `system.size.*` with `base.size*` via `calc.add` — pick the nearest `base.size*` step or use `px2rem` instead.

## Escape hatches

When no `system.size.*` token fits, pick the nearest step on the base scale or use `px2rem` for a one-off value. Do not compose `system.size` with `base.size` via `calc.add`.

```tsx
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

// 1. Nearest base size step (12px)
const compactStyles = createStyles({height: base.size150});

// 2. Genuinely arbitrary dimension
const fixedStyles = createStyles({width: px2rem(236)});
```

## Web Examples

### Javascript / Typescript

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// Component dimensions — not spacing
const buttonStyles = createStyles({
  height: system.size.md,       // medium button height
  minWidth: system.size.xs,     // compact min width
});

const badgeStyles = createStyles({
  minWidth: system.size.xxs,    // count badge dimension
  height: system.size.xxs,
});
```

`createStyles` resolves token names to `var(--cnvs-…)` automatically. Outside `createStyles`, wrap tokens with `cssVar()` or a `` `var(${token})` `` template literal.

### CSS

```css
@import '@workday/canvas-tokens-web/css/system/_variables.css';
.button--medium {
  height: var(--cnvs-sys-size-md);
  min-width: var(--cnvs-sys-size-xs);
}
```
