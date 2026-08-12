---
name: sana-canvas-tokens
description: >-
  Choose Canvas design tokens from @workday/canvas-tokens-web. Use when picking system.color,
  system.gap, system.padding, system.size, system.shape, or system.type paths; migrating deprecated
  token names (bg.*, text.*, space.*); or deciding base vs system vs brand. For how to apply tokens
  in CSS see /sana-canvas-styling; for deprecated components/props see
  /sana-canvas-component-selection.
---

# Canvas Kit Tokens

**Which** token to use. For **how** to apply tokens (`createStyles`, `createStencil`, `cs`), see
`/sana-canvas-styling`.

## When to apply

- Choosing a color, spacing, shape, size, or typography value
- Migrating `@workday/canvas-kit-react/tokens` or deprecated `system.*` paths
- Translating Figma variables into token paths
- Reviewing token usage after a codemod (`/sana-canvas-migration`)

For full inventories and old→new mapping tables, see [references.md](references.md). For deeper
token docs, call MCP `get-canvas-kit-tokens` and start with `docs://tokens/v4/v4.4-token-reference`.

## Core rules

1. **Default to `system.*`** — semantic, themeable tokens for almost everything.
2. **Match the CSS property to the spacing family** — wrong family is a semantic error even when the
   pixel value matches.
3. **Never use internal namespaces** in application code — see [Off-limits](#off-limits).
4. **Verify in installed `node_modules`** — `@deprecated` JSDoc on token paths always wins over
   static tables.
5. **Trust v4.4 naming** — `surface.*` and `fg.*` replaced most of `bg.*`, `text.*`, and `icon.*`.

## Namespaces

| Namespace   | Contains                         | Use for                                              |
| ----------- | -------------------------------- | ---------------------------------------------------- |
| `system`    | Semantic tokens                  | **Default for everything**                           |
| `base`      | Raw palette and size steps       | Escape hatch when no `system` token fits             |
| `brand`     | Tenant-themeable ramps           | Brand color outside `system.color.brand.*`           |
| `component` | Per-component hooks              | Overriding one component's internals (`systemIcon`)  |

```tsx
import {system} from '@workday/canvas-tokens-web';
import {createStyles} from '@workday/canvas-kit-styling';

const styles = createStyles({
  backgroundColor: system.color.surface.default,
  color: system.color.fg.default,
  padding: system.padding.md,
  gap: system.gap.sm,
});
```

Each token is a CSS variable **name**. `createStyles` wraps them in `var()` automatically.

### Off-limits

Do **not** use these in application code:

- `system.legacy.*`, `base.legacy`, `base.sana`, `brand.legacy`, `component.legacy`
- `system.sana.*`
- `@workday/canvas-kit-react/tokens` (`canvas`, `colors`, `space`, `type`, `depth`, `borderRadius`)

Canvas Kit uses `.legacy` internally for backward compatibility. Write plain `system.*` and let
theme CSS resolve the value.

## Color — pick by role

Five families, split by the **role** the color plays:

| Family      | Role                         | Examples                                              |
| ----------- | ---------------------------- | ----------------------------------------------------- |
| `surface.*` | Container/page backgrounds   | `surface.default`, `surface.alt.default`, `surface.modal` |
| `fg.*`      | Text, icons, foreground marks| `fg.default`, `fg.muted.default`, `fg.inverse`        |
| `border.*`  | Strokes, dividers, outlines  | `border.default`, `border.strong`, `border.input.default` |
| `accent.*`  | Solid non-brand emphasis     | `accent.info`, `accent.success`, `accent.ai`          |
| `brand.*`   | Tenant-brandable semantics   | `brand.accent.primary`, `brand.fg.primary.default`  |

### Modifier ladder

Within a family, intensity is short: `default`, `strong`, and `stronger` (on `fg` only). There is
**no** `soft`/`softer`/`softest` ladder on `surface.*` — that belonged to removed `bg.*`.

| Need                         | Token direction                                      |
| ---------------------------- | ---------------------------------------------------- |
| Page/card background         | `system.color.surface.default`                       |
| Subtle alternate surface     | `system.color.surface.alt.default`                   |
| Body text                    | `system.color.fg.default`                            |
| Secondary/helper text        | `system.color.fg.muted.default`                      |
| Emphasized text              | `system.color.fg.strong` / `fg.stronger`             |
| Text on dark surfaces        | `system.color.fg.inverse`                            |
| Divider between sections     | `system.color.border.default`                        |
| Strong container border      | `system.color.border.strong`                         |
| Input field border           | `system.color.border.input.default`                  |
| Status (neutral words)       | `fg.danger|warning|success|info` + matching `surface.*` |
| Tenant primary actions       | `system.color.brand.accent.primary`                  |
| Elevation                    | `boxShadow: system.depth[1]`–`[6]` (whole token)     |

### Translucent surfaces

Many `surface.*` tokens use alpha values. Do not stack alpha surfaces — nesting compounds the wash.
When migrating from `bg.*`, intensity names can invert (`bg.positive.softer` → `surface.success.strong`).

### Deprecated color families

| Don't write                      | Write                                      |
| -------------------------------- | ------------------------------------------ |
| `system.color.bg.*`              | `system.color.surface.*`                   |
| `system.color.text.*`            | `system.color.fg.*` (brand text → `brand.fg.*`) |
| `system.color.icon.*`            | `system.color.fg.*`                        |
| `system.color.border.divider`    | `system.color.border.default`              |
| `system.color.border.container`  | `system.color.border.strong`               |
| `system.color.fg.primary.*`      | `system.color.brand.fg.primary.*`          |
| `system.color.static.*`          | A `base` palette ramp                    |

Only `bg.default` and `bg.alt.default` survive; prefer `surface.default` / `surface.alt.default`.

> **Note:** Older color-role docs may still say `bg`/`text`/`icon` as property names. v4.4 uses
> `surface`/`fg`/`border` — treat this skill and installed JSDoc as source of truth.

## Spacing — three families

| CSS property                              | Family              |
| ----------------------------------------- | ------------------- |
| `gap`, `rowGap`, `columnGap`, `margin*`   | `system.gap.*`      |
| `padding*`                                | `system.padding.*`  |
| `width`, `height`, `min/max`, `inlineSize`, `blockSize` | `system.size.*` |

`system.space.x1`–`x20` are **deprecated**. There is no `system.space` in new code.

### Quick reference

| `system.gap`   | px  | `system.padding` | px  | `system.size` | px  |
| -------------- | --- | ---------------- | --- | ------------- | --- |
| `none`         | 0   | `none`           | 0   | `xxxs`        | 16  |
| `xs`           | 4   | `xxs`            | 4   | `xxs`         | 20  |
| `sm`           | 8   | `xs`             | 8   | `xs`          | 24  |
| `md`           | 16  | `sm`             | 12  | `sm`          | 32  |
| `lg`           | 24  | `md`             | 16  | `md`          | 40  |
| `xl`           | 32  | `lg`             | 20  | `lg`          | 48  |
| `xxl`          | 64  | `xl`             | 24  | `xl`          | 56  |
|                |     | `xxl`            | 32  | `xxl`         | 64  |

No 12px `gap` token — use `base.size150`. No 40px `padding` token — use `base.size500`.

Intent: `system.gap.*` is exterior space; `system.padding.*` is interior.

## Shape — t-shirt sizes only

Pick by component type, not by matching a pixel value.

| Token        | Default | Sana | Typical use                          |
| ------------ | ------- | ---- | ------------------------------------ |
| `shape.none` | 0       | same | Full-width containers, side panels   |
| `shape.sm`   | 4px     | 6px  | Pills, status indicators, checkboxes |
| `shape.md`   | 8px     | same | Inputs, toasts, tooltips             |
| `shape.lg`   | 12px    | same | Rich text editors                    |
| `shape.xl`   | 16px    | same | Compact cards                        |
| `shape.xxl`  | 24px    | 20px | Cards, list items                    |
| `shape.xxxl` | 32px    | 28px | Modals, dialogs                      |
| `shape.full` | 999px   | same | Buttons, badges, avatars             |

Deprecated: `shape.zero`, `shape.half`, `shape.round`, `shape.x1`, `x1Half`, `x2`, etc. Use `none`
(not `zero`) and `full` (not `round`).

## Typography

Prefer Canvas text components (`Title`, `Heading`, `BodyText`, `Subtext`) with `size` props. In CSS:

```tsx
const labelStyles = createStyles({
  ...system.type.subtext.md,
  color: system.color.fg.muted.default,
});
```

- Levels: `system.type.{subtext|body|heading|title}.{sm|md|lg}`
- **`.small` / `.medium` / `.large` are deprecated** — use `.sm` / `.md` / `.lg`
- There is **no `system.font.*` namespace**

## Sana Canvas theme

Canvas Kit v16 targets Sana. Enable on the root element:

```html
<html data-theme="sana-canvas">
```

Consumers write plain `system.*` paths — the Sana CSS reassigns values under
`[data-theme="sana-canvas"]`. Do not import `system.sana.*` in application code.

Load Sana Sans via `@workday/canvas-kit-react/fonts`. Import Sana CSS variables **last** in your root
stylesheet so equal-specificity rules win.

## Escape hatches

When no `system.size.*` token fits:

```tsx
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const compactStyles = createStyles({height: base.size150}); // 12px
const fixedStyles = createStyles({width: px2rem(236)});     // arbitrary dimension
```

Do not compose `system.size` with `base.size` via `calc.add`.

## Workflow

```
- [ ] Check installed @workday/canvas-tokens-web version
- [ ] Identify CSS property → pick spacing/color/shape family
- [ ] Prefer system.* over base.*
- [ ] Confirm path is NOT @deprecated in node_modules
- [ ] Apply via createStyles/createStencil (/sana-canvas-styling)
- [ ] Run verification rg commands below on changed files
```

### Verify deprecated paths

```bash
node -p "require('@workday/canvas-tokens-web/package.json').version"
rg "system\.(space|shape\.(x\d|x1Half|half|zero|round))" src/
rg "system\.color\.(text|icon|bg)\." src/
rg "system\.legacy\." src/
rg "canvas-kit-react/tokens" src/
rg "@deprecated" node_modules/@workday/canvas-tokens-web/dist/es6 -B3
```

## Anti-patterns

- ❌ `system.legacy.*` or `system.sana.*` in app code
- ❌ `@workday/canvas-kit-react/tokens`
- ❌ `system.space.*` or `system.color.bg/text/icon.*`
- ❌ `base.neutral0` when `system.color.surface.default` fits
- ❌ `gap` token for `padding`, or `padding` token for `margin`
- ❌ Matching shape tokens to pixel values instead of component type
- ❌ Mixing individual `fontSize`/`fontWeight` when `system.type.body.md` spread works
- ❌ Stacking alpha `surface.*` backgrounds

## Decision guide

```
Background / container fill?     → system.color.surface.*
Text or icon color?              → system.color.fg.*
Border or divider?               → system.color.border.*
Brand/tenant primary?            → system.color.brand.*
Shadow / elevation?              → boxShadow: system.depth[n]
Space between siblings?          → gap on parent: system.gap.*
Space inside container?          → system.padding.*
Element width/height?            → system.size.*
Border radius?                   → system.shape.* (by component type)
Type preset?                     → ...system.type.{level}.{size}
No system token fits?            → base.size* or px2rem
How to apply in components?      → /sana-canvas-styling
Upgrading old token imports?     → /sana-canvas-migration (run v14-tokens codemod first)
```

## Additional resources

- Full color inventory and mapping tables: [references.md](references.md)
- How to apply styles: `/sana-canvas-styling`
- Codemod for token migration: `/sana-canvas-migration`
- MCP: `get-canvas-kit-tokens` → `docs://tokens/v4/v4.4-token-reference`
