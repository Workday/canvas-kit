---
name: sana-canvas-styling
description: >-
  Style React components with Canvas Kit. Use when writing createStyles or createStencil, applying
  the cs prop, building reusable components with handleCsProp, migrating away from deprecated style
  props (padding="s", gap="m"), avoiding Box/Flex/Grid layout primitives in new code, handling
  dynamic/variant styles, RTL logical properties, or deciding between gap, margin, and padding.
---

# Canvas Kit Styling

**How** to apply styles. For **which token** to use (color, spacing, size, shape, type), see
`/sana-canvas-tokens` — this skill deliberately does not duplicate the token tables.

**REQUIRED SUB-SKILL:** `/sana-canvas-version`. Run it first — `createStyles`/`createStencil` and
the `cs` prop assume current-generation Canvas Kit (16.x). On an older install, style props or
early `createStyles` patterns may still be load-bearing; see `/sana-canvas-migration` before
applying this skill's rules wholesale.

## When to apply

- Creating or editing any component that uses Canvas Kit
- Writing `createStyles`, `createStencil`, or the `cs` prop
- Migrating deprecated style props (`padding="s"`, `gap="m"`, `backgroundColor="..."`)
- Replacing `Box`/`Flex`/`Grid` layout wrappers in new or touched code
- Building a reusable component that accepts styles from consumers

Per-component styling examples: canvas-kit-mcp `docs://examples/{slug}`.

## Core rules

1. **Never use style props.** `padding`, `margin`, `gap`, `background`, `backgroundColor`, `width`,
   `height`, `depth`, `display`, `flexDirection`, `alignItems`, `justifyContent` and friends are
   deprecated on `Flex`, `Box`, `Grid`, `Text`, and everything extending `BoxProps`. They bypass
   static compilation. Use `createStyles`/`createStencil` instead.
2. **Don't use `Box`, `Flex`, `Grid`, `Stack`, `HStack`, or `VStack` in new code.** `Stack`/`HStack`/
   `VStack` were removed in v9. `Box`/`Flex`/`Grid` are not formally deprecated, but don't reach for
   them as layout primitives — use a plain semantic element (`form`, `section`, `div`) with
   `className={createStyles(...)}`, or a Canvas Kit component with `cs`. When building a reusable
   wrapper, use `createComponent` + a stencil (see `/sana-canvas-builder`).
3. **Define styles at module level.** Never call `createStyles`/`createStencil` inside a render
   function.
4. **Apply styles on the right surface:**
   - **Canvas Kit components** (`Card`, `PrimaryButton`, `FormField`, …) → `cs={styles}`
   - **Native HTML elements** (`form`, `div`, `section`, …) → `className={styles}`
5. **Use `createStencil` for anything dynamic** — props, variants, compound states, sub-element
   parts, CSS variables. Not conditional `createStyles` or inline objects.
6. **Merge with `handleCsProp`** in reusable components. Never `mergeStyles` (deprecated).
7. **Use logical properties** so layouts flip correctly in RTL.
8. **Never deprecated tokens** in greenfield UI — see `/sana-canvas-tokens`. When building from
   Figma, bound variables win (including `bg.default` / `bg.alt.default`); mark true deprecated
   bindings with `// figma-bound`.

## `createStyles` — static styles

```tsx
import {createStyles} from '@workday/canvas-kit-styling'
import {system} from '@workday/canvas-tokens-web'

const cardStyles = createStyles({
  padding: system.padding.md,
  gap: system.gap.sm,
  backgroundColor: system.color.surface.default,
  borderRadius: system.shape.md,
})

<Card cs={cardStyles}>...</Card>
```

Module level, always.

- **Canvas Kit components** — `cs={cardStyles}`
- **Native elements** — `className={formStyles}` (`cs` is for Canvas Kit components only)

For one-off overrides, define a named module-level style near the top of the file.

### Layout primitives — what to use instead of `Flex`/`Box`

| Need | Greenfield approach | Avoid in new code |
| ---- | ------------------- | ----------------- |
| Column/row layout | `createStyles({display: 'flex', flexDirection: 'column', gap: ...})` on `form`/`div`/`section` | `<Flex cs={...}>` |
| Page section wrapper | `createComponent('section')` + stencil, or `div` + `className` | `<Box cs={...}>` |
| Custom reusable layout | `createComponent('div')` + `handleCsProp` | `Flex`/`Box` as a styling shortcut |
| Migrating legacy file | `Flex cs={styles}` is an interim step only — prefer replacing with plain elements when you touch the file | Leaving `Flex` in new features |

```tsx
// ✅ Greenfield — semantic element + createStyles
const formStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
});

<form className={formStyles}>...</form>

// ✅ Canvas Kit component — cs prop
<Card cs={cardStyles}>...</Card>

// ⚠️ Legacy migration only — replace with plain elements when editing
<Flex cs={formStyles}>...</Flex>

// ❌ Never — deprecated style props
<Flex gap="m" padding="lg" flexDirection="column">
```

## `createStencil` — dynamic styles

Use when styles depend on props, variants, component parts, or CSS variables.

```tsx
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling'
import {system} from '@workday/canvas-tokens-web'

const cardStencil = createStencil({
  vars: {
    headerColor: '',        // empty string = uninitialized, allows cascade from parent
  },
  parts: {
    header: 'card-header',
    body: 'card-body',
  },
  base: ({headerPart, headerColor}) => ({
    padding: system.padding.md,
    gap: system.gap.sm,
    backgroundColor: system.color.surface.default,
    [headerPart]: {
      color: cssVar(headerColor, system.color.fg.default),
    },
  }),
  modifiers: {
    isDarkTheme: {
      true: ({headerPart, bodyPart}) => ({
        backgroundColor: system.color.surface.contrast.default,
        color: system.color.fg.inverse,
        [`${headerPart}, ${bodyPart}`]: {color: system.color.fg.inverse},
      }),
    },
  },
  defaultModifiers: {
    isDarkTheme: false,
  },
})

<Card cs={cardStencil({isDarkTheme, headerColor})}>
  <Card.Heading {...cardStencil.parts.header}>Title</Card.Heading>
  <Card.Body {...cardStencil.parts.body}>Body</Card.Body>
</Card>
```

| Feature     | Purpose                                                                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vars`      | CSS variables for dynamic values. `cssVar(name, fallback)` in `base`/`modifiers`. `''` = uninitialized (allows cascade); a default value = cascade barrier. |
| `modifiers` | Variant branches (`size`, `variant`, `isActive`). Prefer over conditionals in render.                                                                       |
| `compound`  | Styles when several modifiers combine.                                                                                                                      |
| `parts`     | Target sub-elements via `data-part`. Spread `stencil.parts.name` onto children.                                                                             |
| `extends`   | Inherit from an existing stencil (e.g. `systemIconStencil`).                                                                                                |

### Variables — when

Use **sparingly**; most overrides don't need them. They earn their place when a property must change
across pseudo-states (`:hover`, `:focus`, `:disabled`) without deep selector overrides. Variables
and modifiers share a namespace — never give a modifier the same name as a variable.

Nested variables (one level) work well for per-state colors:

```tsx
vars: {
  default: {color: system.color.fg.default},
  hover: {color: system.color.brand.fg.primary.default},
},
base: ({default: d, hover: h}) => ({
  color: d.color,
  '&:hover': {color: h.color},
}),
```

### Extending a Canvas Kit stencil

When customizing a Canvas Kit component, extend its stencil rather than starting over:

```tsx
const customIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    marginInlineEnd: system.gap.sm,
    [systemIconStencil.vars.color]: system.color.brand.fg.primary.default,
  },
});
```

## The `cs` prop

Pass a **single value**:

```tsx
<PrimaryButton cs={buttonStyles} />
<Card cs={cardStencil({isDarkTheme: true})} />
```

**Do not use `cs` arrays** (`cs={[baseStyles, activeStyles]}`). Arrays make you reason about
specificity and merge order. Combine into one `createStyles`, or express the variance as stencil
`modifiers`/`compound`.

### `createStyles` vs inline `cs={{ }}`

Default to `createStyles` + `cs={styles}` for anything that ships.

| Use `createStyles` (module level)         | Use inline `cs={{ }}`                          |
| ----------------------------------------- | ---------------------------------------------- |
| 2+ style properties                       | Single-property tweak (`margin: 0`, one `gap`) |
| Reused across elements or files           | One-off override on a Canvas Kit component     |
| Layout on `form`/`div` or CK components   | Setting a stencil CSS variable                 |
| Anything that might grow                  | Truly throwaway local adjustment               |

```tsx
// ✅ Preferred — plain element for layout
const columnStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
  padding: system.padding.lg,
})
<div className={columnStyles}>...</div>

// ✅ Canvas Kit component
<Card cs={columnStyles}>...</Card>

// ✅ OK — single-property override on a CK component, or setting a stencil var
<Heading cs={{margin: 0}}>Title</Heading>
<TertiaryButton cs={{[buttonStencil.vars.background]: system.color.brand.accent.primary}} />

// ❌ cs arrays — merge order is non-obvious
<PrimaryButton cs={[baseStyles, activeStyles]} />

// ❌ inline object with several properties — works, but skips static compilation
<Card cs={{gap: system.gap.md, padding: system.padding.lg}}>

// ❌ never — deprecated style props (different API, Emotion runtime)
<Flex gap="m" padding="lg" flexDirection="column">

// ❌ never in new code — Flex/Box as layout primitive
<Flex cs={columnStyles}>
```

Inline `cs` objects are **not** the same thing as deprecated style props. For prop-driven variance
use stencil modifiers, not arrays or ternaries.

## `handleCsProp` — reusable components

When your component accepts `cs`, `className`, or `style` from consumers:

```tsx
import {createStencil, handleCsProp, CSProps} from '@workday/canvas-kit-styling'

const myStencil = createStencil({
  base: {padding: system.padding.md, gap: system.gap.sm},
  modifiers: {
    isActive: {true: {backgroundColor: system.color.brand.surface.primary.default}},
  },
})

const MyComponent = ({isActive, ...elemProps}: {isActive?: boolean} & CSProps) => (
  <div {...handleCsProp(elemProps, myStencil({isActive}))} />
)

<MyComponent cs={consumerStyles} className="extra" />
```

### Merge order

`handleCsProp(elemProps, localCs)` — later wins at equal specificity:

1. `localCs` (your stencil/styles)
2. `className` from `elemProps`
3. `cs` from `elemProps` (consumer override, applied last)

Inside a stencil, injection order is `base` → `modifiers` (definition order) → `compound`
(definition order).

Encoding variants in `modifiers`/`compound` rather than passing multiple `cs` values keeps merge
order predictable and static.

## Layout

Use **CSS flex/grid in `createStyles`**, not `Flex`/`Box` components. Pick the semantic element that
matches the content (`form` for forms, `section` for regions, `div` when nothing fits).

```tsx
const columnStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: system.gap.md,
  padding: system.padding.xl,
})

const rowStyles = createStyles({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: system.gap.sm,
})

const sidebarStyles = createStyles({
  width: px2rem(236),
  flexShrink: 0,
  paddingInline: system.padding.md,
})

<div className={columnStyles}>
  <aside className={sidebarStyles}>Sidebar</aside>
  <main className={contentStyles}>Content</main>
</div>
```

### What goes in props vs styles

| Component props                                     | `createStyles` / `createStencil`                                           |
| --------------------------------------------------- | -------------------------------------------------------------------------- |
| Semantic structure, `as`, `ref`, event handlers     | All visual styling: spacing, color, size, flex, position                    |
| Canvas behavior props (`size` on Button, `variant`) | CSS logical properties                                                     |
| Compound subcomponent composition                   | Layout on `Text`/`Heading`/`BodyText` (wrap in a styled `div`/`section`)   |
|                                                     | Layout on compound subcomponents (`Tabs.List`, `Card.Body`, `Menu.Card`)   |

When in doubt: module-level `createStyles` on a semantic element (`className`) or Canvas Kit
component (`cs`).

### CSS logical properties (RTL)

| Physical (avoid)                    | Logical (use)                                                               |
| ----------------------------------- | --------------------------------------------------------------------------- |
| `marginLeft` / `marginRight`        | `marginInlineStart` / `marginInlineEnd`                                     |
| `paddingLeft` / `paddingRight`      | `paddingInlineStart` / `paddingInlineEnd`                                   |
| `marginTop` / `marginBottom`        | `marginBlockStart` / `marginBlockEnd`                                       |
| `paddingTop` / `paddingBottom`      | `paddingBlockStart` / `paddingBlockEnd`                                     |
| `left` / `right` / `top` / `bottom` | `insetInlineStart` / `insetInlineEnd` / `insetBlockStart` / `insetBlockEnd` |
| `borderLeft` / `borderRight`        | `borderInlineStart` / `borderInlineEnd`                                     |

Logical properties are **not** deprecated style props — they belong in `createStyles`, not as JSX
props on layout components.

### `gap` vs `margin` vs `padding`

Token intent matters: `system.gap.*` is exterior space, `system.padding.*` is interior.

| Situation                               | Use                 | Token              |
| --------------------------------------- | ------------------- | ------------------ |
| Space **between siblings** in flex/grid | `gap` on the parent | `system.gap.*`     |
| Space **inside** a container's edges    | `padding`           | `system.padding.*` |
| Offset from outer layout                | `margin`            | `system.gap.*`     |

If you're adding the same margin to several children to separate them, use `gap` on the parent
instead. Reserve `margin` for pushing an element away from its container or one specific neighbor.

### Shadow + overflow clipping

**Never put `boxShadow` and `overflow: 'hidden'` on the same element.** Soft depth blur gets clipped
into a hard dark stripe — especially on elevated cards at panel seams. Put shadow on an outer
wrapper and clip/overflow on an inner node. Elevated surfaces near column seams may also need
stacking (`zIndex`) and/or parent `overflow: 'visible'` so the blur isn’t sliced into a hard edge.

### Flex fill / shrink gotchas

`flex: 1` only fills remaining space when ancestors are flex with a bounded size and the shrinking
child has `minHeight: 0` (or `minWidth: 0` in a row). If a panel blows out or collapses, fix that
chain before tweaking the leaf.

MCP codegen often uses absolute positioning and negative offsets. Prefer flex / grid when it matches
the Figma visual — keep tokens and content from Figma, not the absolute layout mechanics.

### After adapting MCP / design-context reference

Strip layout hacks before calling the build done (fidelity pass, not a recipe):

- [ ] No `position: 'absolute'` for siblings that should share one flex/grid row
- [ ] No nested interactive controls (`<button>` wrapping `TertiaryButton`, etc.) — use a non-button
      container + inner control
- [ ] `boxShadow` and `overflow: 'hidden'` on separate nodes
- [ ] No leftover negative `top` / `inset` offsets that only exist to fake alignment

## Utilities

```tsx
import {calc, cssVar, px2rem} from '@workday/canvas-kit-styling';

cssVar(system.color.fg.default, '#000'); // CSS var with fallback
px2rem(48); // off-scale sizes
calc.add(system.padding.xxs, '0.125rem'); // math with tokens
calc.negate(system.gap.md); // negative margins
```

## Troubleshooting: styles not applying

If `createStyles`/`createStencil` output renders with missing colors, `undefined` values, or no
visible effect, the usual cause is missing CSS variable imports at the app root, not a styling API
mistake. Full checklist (four `_variables.css` imports, Sana theme order, template-literal `var()`
wrapping) lives in `/sana-canvas-tokens` — check that before re-writing the style definition.

## External documentation

- [Styling overview](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs)
- [createStyles](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-create-styles--docs)
  ·
  [createStencil](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-create-stencil--docs)
- [Merging styles / handleCsProp](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-merging-styles--docs)
- [Customizing styles](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs)
- MCP resource `docs://llm-style-props-migration` — style props → `cs`

## Anti-patterns

- ❌ `Box`, `Flex`, `Grid`, `Stack`, `HStack`, `VStack` in **new** code — use plain elements +
  `createStyles`/`createComponent`
- ❌ Style props: `<Flex gap="m" padding="xl" backgroundColor="...">`
- ❌ `cs` on native HTML elements — use `className` (`cs` is for Canvas Kit components)
- ❌ `createStyles` / `createStencil` inside render
- ❌ Inline `cs={{...}}` with 2+ properties in component code — extract to `createStyles`
- ❌ `cs` arrays — use one `createStyles`/`createStencil`, or stencil modifiers
- ❌ `mergeStyles` — use `handleCsProp`
- ❌ Manual `className` concatenation — use `handleCsProp`
- ❌ Conditional class names in render — use stencil `modifiers`/`compound`
- ❌ Emotion `styled()` / `css` prop, Tailwind, or CSS modules on Canvas components
- ❌ Physical directional properties — use logical ones
- ❌ Margin on children to fake `gap` between siblings
- ❌ Deprecated tokens in greenfield (see `/sana-canvas-tokens`); don’t remap Figma-bound `bg.*`
  survivors
- ❌ `boxShadow` + `overflow: 'hidden'` on the same node
- ❌ `flex: 1` without `minHeight: 0` / `minWidth: 0` on the shrink path
- ❌ Copying Figma absolute offsets when flex/grid matches the visual

## Decision guide

```
Layout wrapper in new code?                → form/div/section + className={createStyles(...)}
Canvas Kit component styling?              → cs={createStyles(...)} or cs={stencil()}
Static styles, 2+ properties or reused?      → createStyles at module scope
Single-property quick override on CK comp? → cs={{ oneProperty: token }}
Setting a stencil CSS variable?            → cs={{ [stencil.vars.x]: value }}
Props / variants / state?                  → createStencil modifiers (not cs arrays)
Multiple modifier combos?                  → compound modifiers
Sub-element targeting?                     → stencil parts
Customizing a Canvas Kit component?        → extend its stencil
Building a reusable component?             → createComponent + handleCsProp (/sana-canvas-builder)
Spacing between flex/grid children?        → gap on the parent (in createStyles)
RTL-safe directional spacing?              → logical properties in createStyles
Need shadow + clip?                        → separate wrapper vs overflow layer
Which token?                               → /sana-canvas-tokens
Migrating legacy Flex/Box + style props?   → createStyles first; replace Flex/Box when you touch the file
```
