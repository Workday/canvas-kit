---
name: sana-canvas-tokens
description: >-
  Choose Canvas design tokens from @workday/canvas-tokens-web. Use when picking system.color,
  system.gap, system.padding, system.size, system.shape, or system.type paths; choosing accessible
  color pairings; migrating deprecated token names (bg.*, text.*, space.*); or deciding base vs
  system vs brand. For how to apply tokens in CSS see /sana-canvas-styling; for deprecated
  components/props see /sana-canvas-component-selection.
---

# Canvas Kit Tokens

**Which** token to use, by role — not a single version's path list. For **how** to apply tokens
(`createStyles`, `createStencil`, `cs`), see `/sana-canvas-styling`.

**REQUIRED SUB-SKILL:** `/sana-canvas-version`. Run it first. This skill's path tables and family
names assume **current generation** (`@workday/canvas-kit-react` 16.x + `@workday/canvas-tokens-web`
4.4+, Sana Canvas). If the version skill reports an older install, do **not** apply the tables
below as current truth — use MCP `get-canvas-kit-tokens` plus the matching upgrade guide instead.

## When to apply

- Choosing a color, spacing, shape, size, or typography value
- Pairing a background/foreground/border combination and needing it to stay accessible
- Migrating `@workday/canvas-kit-react/tokens` or deprecated `system.*` paths
- Translating Figma variables into token paths
- Reviewing token usage after a codemod (`/sana-canvas-migration`)

For full inventories and old→new mapping tables (current-generation only), see
[references.md](references.md). For deeper token docs, call MCP `get-canvas-kit-tokens` and start
with `docs://tokens/v4/v4.4-token-reference`.

## Core rules

1. **Run `/sana-canvas-version` first** — these tables are current-generation only.
2. **Default to `system.*`** — semantic, themeable tokens for almost everything.
3. **Match the CSS property to the spacing family** — wrong family is a semantic error even when
   the pixel value matches.
4. **Pick color by role, then pair by role** — don't pick a foreground/background combination by
   eyeballing contrast; use the pairing rules below so contrast is guaranteed.
5. **Never use internal namespaces** in application code — see [Off-limits](#off-limits).
6. **Verify in installed `node_modules`** — `@deprecated` JSDoc on token paths always wins over
   static tables.

## Namespaces

| Namespace   | Contains                         | Use for                                              |
| ----------- | --------------------------------- | ----------------------------------------------------- |
| `system`    | Semantic tokens                   | **Default for everything**                             |
| `base`      | Raw palette and size steps         | Escape hatch when no `system` token fits                |
| `brand`     | Tenant-themeable ramps             | Brand color outside `system.color.brand.*`              |
| `component` | Per-component hooks                | Overriding one component's internals (`systemIcon`)     |

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

Each token is a CSS variable **name**, not a raw value. `createStyles` wraps whole property values
in `var()` automatically. In template literals, wrap manually: `` `1px solid var(${token})` ``.

### Off-limits

Do **not** use these in application code:

- `system.legacy.*`, `base.legacy`, `base.sana`, `brand.legacy`, `component.legacy` — internal
  backward-compat namespace for Canvas Kit's own library source, not for app code
- `system.sana.*` — internal Sana theme implementation detail
- `@workday/canvas-kit-react/tokens` (`canvas`, `colors`, `space`, `type`, `depth`, `borderRadius`)

Canvas Kit uses `.legacy` internally so published components keep working for consumers on older
token packages. Write plain `system.*` and let theme CSS resolve the value.

## Color — pick by role

Five families, split by the **role** the color plays:

| Family      | Role                          | Examples                                                    |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| `surface.*` | Container/page backgrounds     | `surface.default`, `surface.alt.default`, `surface.modal`     |
| `fg.*`      | Text, icons, foreground marks  | `fg.default`, `fg.muted.default`, `fg.inverse`                |
| `border.*`  | Strokes, dividers, outlines     | `border.default`, `border.strong`, `border.input.default`     |
| `accent.*`  | Solid non-brand emphasis        | `accent.info`, `accent.success`, `accent.ai`                   |
| `brand.*`   | Tenant-brandable semantics       | `brand.accent.primary`, `brand.fg.primary.default`             |

### Modifier ladder

Within a family, intensity is short: `default`, `strong`, and `stronger` (on `fg` only). There is
**no** `soft`/`softer`/`softest` ladder on `surface.*` — that belonged to removed `bg.*`.

| Need                       | Token direction                                          |
| --------------------------- | ---------------------------------------------------------- |
| Page/card background        | `system.color.surface.default`                              |
| Subtle alternate surface     | `system.color.surface.alt.default`                          |
| Body text                    | `system.color.fg.default`                                   |
| Secondary/helper text        | `system.color.fg.muted.default`                              |
| Emphasized text              | `system.color.fg.strong` / `fg.stronger`                     |
| Text on dark surfaces        | `system.color.fg.inverse`                                    |
| Divider between sections     | `system.color.border.default`                                |
| Strong container border      | `system.color.border.strong`                                 |
| Input field border           | `system.color.border.input.default`                          |
| Status (neutral words)       | `fg.danger\|warning\|success\|info` + matching `surface.*`     |
| Tenant primary actions       | `system.color.brand.accent.primary`                          |
| Elevation                    | `boxShadow: system.depth[1]`–`[6]` (whole token)               |

### Deprecated color families

| Don't write                      | Write                                       |
| ---------------------------------- | --------------------------------------------- |
| `system.color.bg.*`                 | `system.color.surface.*`                      |
| `system.color.text.*`               | `system.color.fg.*` (brand text → `brand.fg.*`) |
| `system.color.icon.*`                | `system.color.fg.*`                            |
| `system.color.border.divider`         | `system.color.border.default`                  |
| `system.color.border.container`       | `system.color.border.strong`                   |
| `system.color.fg.primary.*`           | `system.color.brand.fg.primary.*`               |
| `system.color.static.*`               | A `base` palette ramp                          |

Only `bg.default` and `bg.alt.default` survive; prefer `surface.default` / `surface.alt.default`.

## Accessible color pairings

Contrast is baked into the semantic token pairs below — **pick a pairing, don't compose colors
freely.** WCAG 2.1 AA requires 4.5:1 for text ≤ 18pt (3:1 for larger/bold text), 3:1 for non-text
UI (icons, control borders, focus rings).

### Semantic pairs (default — always guaranteed)

| Background / surface                   | Foreground                          | Notes                                            |
| ---------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| `surface.default`, `surface.alt.default`   | `fg.default`, `fg.muted.default`, `fg.strong`/`stronger` | The default pairing for body content            |
| `surface.info\|danger\|warning\|success.default` | matching `fg.info\|danger\|warning\|success.default` | Status surfaces pair with status foregrounds     |
| `brand.accent.primary` (and other solid accents) | `fg.inverse`                          | Default on solid brand/accent fills               |
| `accent.warning`, `accent.caution`          | `fg.contrast` — **not** `fg.inverse`   | Warning/caution accents are light; inverse fails contrast |
| `surface.contrast.default`                  | `fg.inverse`                           | Dark/contrast surfaces                            |

### Rules

- **Match `fg` intensity to its surface/background modifier.** `bg.default`/`surface.default` use
  `fg.default`; `surface.primary` uses `fg.primary`; `surface.primary.strong` uses
  `fg.primary.strong`. Don't mix a `default` surface with a `strong` foreground meant for a
  different surface.
- **`fg.inverse` is for solid accent/brand fills** — except `accent.warning` and `accent.caution`,
  which use `fg.contrast` instead (those accents are light, not dark).
- **Don't put accent fills on alt surfaces** — never `accent.*` on `surface.alt`/`bg.alt`, even if
  a contrast calculator says it passes. This is a design-system rule, not just a math check.
- **Don't mix overlay families** — `surface.overlay.*` is for neutral surfaces; `accent.overlay.*`
  is for accent surfaces. Don't cross them.
- **Don't stack translucent `surface.*` fills** — many `surface.*` tokens use alpha values; nesting
  them compounds the wash and can silently drop contrast below the guaranteed ratio.
- **Never use color alone** to convey state (error, required, success). Pair with an icon and text,
  not color alone — see `/sana-canvas-a11y` for the full accessible-names guidance.

### Escape hatch: composing from `base` when no semantic pair fits

If you're forced off `system.*` colors entirely (rare — usually only for data-visualization
palettes), use the step-difference framework instead of eyeballing hex values:

| Content type | WCAG level | Target ratio | Required step difference |
| ------------- | ----------- | -------------- | --------------------------- |
| Text          | AA          | 4.5:1           | 500+                         |
| Text          | AAA         | 7:1             | 700+                         |
| Non-text      | AA          | 3:1             | 400+ (when both steps > 200) |
| Non-text      | AAA         | 4.5:1           | 500+                         |

The `base` palette is a 0 (lightest) → 1000 (darkest) tonal scale per color family. Compare step
numbers between foreground and background; the difference must meet the table above. Do not invent
or estimate a contrast ratio from a hex value — use the step framework or a calculator, and prefer
a `system.*` semantic pair whenever one exists.

MCP: `get-canvas-kit-tokens` → `docs://tokens/color-contrast`. Full WCAG scenario guidance (forms,
focus indicators, status messaging) lives in `/sana-canvas-a11y` — this skill only covers *which
tokens* to pair.

## Spacing — three families

| CSS property                                       | Family              |
| ---------------------------------------------------- | -------------------- |
| `gap`, `rowGap`, `columnGap`, `margin*`                | `system.gap.*`         |
| `padding*`                                            | `system.padding.*`     |
| `width`, `height`, `min/max`, `inlineSize`, `blockSize` | `system.size.*`        |

`system.space.x1`–`x20` are **deprecated**. There is no `system.space` in new code.

### Quick reference

| `system.gap`   | px  | `system.padding` | px  | `system.size` | px  |
| -------------- | --- | ----------------- | --- | -------------- | --- |
| `none`          | 0   | `none`             | 0   | `xxxs`          | 16  |
| `xs`            | 4   | `xxs`              | 4   | `xxs`           | 20  |
| `sm`            | 8   | `xs`               | 8   | `xs`            | 24  |
| `md`            | 16  | `sm`               | 12  | `sm`            | 32  |
| `lg`            | 24  | `md`               | 16  | `md`            | 40  |
| `xl`            | 32  | `lg`               | 20  | `lg`            | 48  |
| `xxl`           | 64  | `xl`               | 24  | `xl`            | 56  |
|                 |     | `xxl`              | 32  | `xxl`           | 64  |

No 12px `gap` token — use `base.size150`. No 40px `padding` token — use `base.size500`.

Intent: `system.gap.*` is exterior space; `system.padding.*` is interior.

## Shape — t-shirt sizes only

Pick by component type, not by matching a pixel value.

| Token          | px    | Typical use                           |
| -------------- | ----- | --------------------------------------- |
| `shape.none`    | 0     | Full-width containers, side panels        |
| `shape.sm`      | 4     | Pills, status indicators, checkboxes      |
| `shape.md`      | 8     | Inputs, toasts, tooltips                  |
| `shape.lg`      | 12    | Rich text editors                          |
| `shape.xl`      | 16    | Compact cards                              |
| `shape.xxl`     | 24    | Cards, list items                          |
| `shape.xxxl`    | 32    | Modals, dialogs                            |
| `shape.full`    | 999   | Buttons, badges, avatars                   |

Deprecated: `shape.zero`, `shape.half`, `shape.round`, `shape.x1`, `x1Half`, `x2`, etc. Use `none`
(not `zero`) and `full` (not `round`).

## Typography

Prefer Canvas text components (`Title`, `Heading`, `BodyText`, `Subtext`) with `size` props. In CSS,
consume whole type levels rather than mixing individual properties:

```tsx
const labelStyles = createStyles({
  ...system.type.subtext.md,
  color: system.color.fg.muted.default,
});
```

- Levels: `system.type.{subtext|body|heading|title}.{sm|md|lg}`
- **`.small` / `.medium` / `.large` are deprecated** — use `.sm` / `.md` / `.lg`
- There is **no `system.font.*` namespace**

## CSS variable imports (troubleshooting)

Tokens resolve to CSS variable **names**, not raw values. If styles render as `undefined`, missing
colors, or invalid values, check that CSS variables are imported at the app root:

```tsx
// App entry — import once, in this order
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/component/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
// If using the Sana Canvas theme, import Sana's overrides last so equal-specificity rules win:
import '@workday/canvas-tokens-web/css/sana/_variables.css';
```

Checklist when tokens look broken:

1. Are all four base `_variables.css` files imported at the app root (and Sana's, last, if used)?
2. Is the JS import from `@workday/canvas-tokens-web` (not `@workday/canvas-kit-react/tokens`)?
3. In template literals, did you wrap with `` `var(${token})` `` manually?
4. In Storybook/isolated demos, are the variable imports present in story setup or `preview` config?

## Sana Canvas theme

Canvas Kit v16 targets Sana. Enable on the root element:

```html
<html data-theme="sana-canvas"></html>
```

Consumers write plain `system.*` paths — the Sana CSS reassigns values under
`[data-theme="sana-canvas"]`. Do not import `system.sana.*` in application code.

Load Sana Sans via `@workday/canvas-kit-react/fonts`.

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
- [ ] Run /sana-canvas-version — confirm current generation before trusting these tables
- [ ] Identify CSS property → pick spacing/color/shape family
- [ ] Prefer system.* over base.*
- [ ] Picking a color pair? Use a semantic pair from the table above, not a free combination
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
- ❌ Putting accent fills on `surface.alt`/`bg.alt` because a calculator says it passes
- ❌ Using `fg.inverse` on `accent.warning`/`accent.caution` (use `fg.contrast`)
- ❌ Color alone to convey error/required/status
- ❌ Applying this skill's tables to an older (non-current-generation) install

## Decision guide

```
Background / container fill?     → system.color.surface.*
Text or icon color?               → system.color.fg.*
Border or divider?                → system.color.border.*
Brand/tenant primary?             → system.color.brand.*
Shadow / elevation?               → boxShadow: system.depth[n]
Space between siblings?           → gap on parent: system.gap.*
Space inside container?           → system.padding.*
Element width/height?             → system.size.*
Border radius?                    → system.shape.* (by component type)
Type preset?                      → ...system.type.{level}.{size}
Choosing a color pairing?         → semantic pair table above, not free composition
No system token fits?             → base.size* or px2rem
No semantic color pair fits?      → base step-difference framework, not a guess
How to apply in components?       → /sana-canvas-styling
Not on current generation?        → /sana-canvas-migration (run version skill first)
```

## Additional resources

- Full color inventory and mapping tables (current generation): [references.md](references.md)
- How to apply styles: `/sana-canvas-styling`
- Version detection: `/sana-canvas-version`
- Codemod for token migration: `/sana-canvas-migration`
- Component usage/dos-donts (choosing *which* component before styling it): `/sana-canvas-design-principles`
- MCP: `get-canvas-kit-tokens` → `docs://tokens/v4/v4.4-token-reference`, `docs://tokens/color-contrast`
