# Canvas Token Reference

> **Current generation only (`@workday/canvas-tokens-web` 4.4+).** Every table below assumes the
> version reported by `/sana-canvas-version` is "current." If that skill reports an older install,
> these inventories and mapping tables are not authoritative — use MCP `get-canvas-kit-tokens` and
> the matching upgrade guide instead. Even on current generation, JSDoc `@deprecated` on the
> installed package always wins over these tables.

## Installed package check

```bash
node -p "require('@workday/canvas-tokens-web/package.json').version"
```

## Deprecated color families (v4.4)

| Don't write                      | Write                                      |
| -------------------------------- | ------------------------------------------ |
| `system.color.bg.*`              | `system.color.surface.*`                   |
| `system.color.text.*`            | `system.color.fg.*`                        |
| `system.color.icon.*`            | `system.color.fg.*`                        |
| `system.color.border.divider`    | `system.color.border.default`              |
| `system.color.border.container`  | `system.color.border.strong`               |
| `system.color.border.primary.default` | `system.color.brand.border.primary`   |
| `system.color.fg.primary.*`      | `system.color.brand.fg.primary.*`          |
| `system.color.shadow.1` / `.2`   | `system.color.shadow.base` / `.ambient`    |
| `system.color.static.*`          | A `base` palette ramp                    |

Only `bg.default` and `bg.alt.default` survive; prefer `surface.default` / `surface.alt.default`.

## Space migration (old → v4)

| Old Token    | v4 Gap            | v4 Padding        | v4 Size (width/height) |
| ------------ | ----------------- | ----------------- | ---------------------- |
| `space.zero` | `system.gap.none` | `system.padding.none` | `base.size0`       |
| `space.xxxs` | `system.gap.xs`   | `system.padding.xxs`  | `base.size50`      |
| `space.xxs`  | `system.gap.sm`   | `system.padding.xs`   | `base.size100`     |
| `space.xs`   | —                 | `system.padding.sm`   | `base.size150`     |
| `space.s`    | `system.gap.md`   | `system.padding.md`   | `system.size.xxxs` |
| `space.m`    | `system.gap.lg`   | `system.padding.xl`   | `system.size.xs`   |
| `space.l`    | `system.gap.xl`   | `system.padding.xxl`  | `system.size.sm`   |
| `space.xl`   | —                 | —                     | `system.size.md`   |
| `space.xxl`  | `system.gap.xxl`  | —                     | `system.size.xxl`  |
| `space.xxxl` | —                 | —                     | `base.size1000`    |

## Shape migration (old → v4)

| Old Token             | v4 Token            |
| --------------------- | ------------------- |
| `borderRadius.zero`   | `system.shape.none` |
| `borderRadius.s`      | `px2rem(2)`         |
| `borderRadius.m`      | `system.shape.sm`   |
| `borderRadius.l`      | `system.shape.md`   |
| `borderRadius.circle` | `system.shape.full` |

## Typography migration (old → v4)

Use complete type levels instead of mixing individual properties:

```javascript
// Old
import {type} from '@workday/canvas-kit-react/tokens';
...type.levels.body.medium

// New
import {system} from '@workday/canvas-tokens-web';
...system.type.body.md
```

| Old type variant       | v4 Token                           |
| ---------------------- | ---------------------------------- |
| `type.variant.error`   | `system.color.fg.critical.default` |
| `type.variant.hint`    | `system.color.fg.muted.default`    |
| `type.variant.inverse` | `system.color.fg.inverse`          |

## `system.color.*` inventory (v4.4)

### `system.color.surface` (29)

- `surface.default`, `surface.navigation`, `surface.popover`, `surface.modal`, `surface.raised`
- `surface.alt.default`, `surface.alt.strong`, `surface.loading`
- `surface.info.default`, `surface.info.strong`
- `surface.danger.default`, `surface.danger.strong`
- `surface.warning.default`, `surface.warning.strong`
- `surface.success.default`, `surface.success.strong`
- `surface.ai.default`, `surface.ai.hover`, `surface.ai.pressed`
- `surface.transparent`, `surface.inverse`
- `surface.contrast.default`, `surface.contrast.strong`
- `surface.overlay.hover.default`, `surface.overlay.hover.inverse`
- `surface.overlay.mixin`, `surface.overlay.pressed.default`, `surface.overlay.pressed.inverse`
- `surface.overlay.scrim`

### `system.color.fg` (20)

- `fg.muted.default`, `fg.muted.strong`
- `fg.info.default`, `fg.info.strong`
- `fg.default`, `fg.strong`, `fg.stronger`, `fg.disabled`, `fg.inverse`
- `fg.danger.default`, `fg.danger.strong`
- `fg.warning.default`, `fg.warning.strong`
- `fg.success.default`, `fg.success.strong`
- `fg.link.default`, `fg.link.hover`, `fg.ai`
- `fg.contrast.default`, `fg.contrast.strong`

### `system.color.border` (11)

- `border.input.default`, `border.input.hover`
- `border.contrast.default`, `border.default`, `border.strong`
- `border.info.default`, `border.danger`, `border.warning`
- `border.inverse.default`, `border.inverse.strong`, `border.transparent`

### `system.color.accent` (11)

- `accent.ai`, `accent.info`, `accent.danger`, `accent.warning`, `accent.success`, `accent.contrast`
- `accent.muted.default`, `accent.muted.soft`
- `accent.overlay.hover`, `accent.overlay.pressed`, `accent.overlay.mixin`

### `system.color.brand` (30)

- `brand.focus.primary`, `brand.focus.critical`, `brand.focus.caution.outer`, `brand.focus.caution.inner`
- `brand.surface.primary.default`, `brand.surface.primary.strong`
- `brand.surface.critical.default`, `brand.surface.critical.strong`
- `brand.surface.caution.default`, `brand.surface.caution.strong`
- `brand.surface.positive.default`, `brand.surface.positive.strong`, `brand.surface.selected`
- `brand.accent.primary`, `brand.accent.critical`, `brand.accent.caution`, `brand.accent.positive`, `brand.accent.action`
- `brand.fg.primary.default`, `brand.fg.primary.strong`
- `brand.fg.critical.default`, `brand.fg.critical.strong`
- `brand.fg.caution.default`, `brand.fg.caution.strong`
- `brand.fg.positive.default`, `brand.fg.positive.strong`, `brand.fg.selected`
- `brand.border.primary`, `brand.border.critical`, `brand.border.caution`

### `system.color.shadow` (2)

- `shadow.base`, `shadow.ambient`

### `system.color.focus` (2)

- `focus.inverse`, `focus.contrast`

### `system.color.bg` (2, legacy — prefer `surface.*`)

- `bg.default`, `bg.alt.default`

## `base.size*` px scale

`size0`=0 · `size25`=2 · `size50`=4 · `size75`=6 · `size100`=8 · `size150`=12 · `size200`=16 ·
`size250`=20 · `size300`=24 · `size400`=32 · `size500`=40 · `size600`=48 · `size700`=56 ·
`size800`=64

## How to verify in source

```bash
rg "@deprecated" node_modules/@workday/canvas-tokens-web/dist/es6/system/index.d.ts -A3
rg "system\.legacy\." src/
rg "canvas-kit-react/tokens" src/
```
