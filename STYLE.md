# STYLE.md — Canvas Kit Styling Reference

Detailed styling and design-token rules for Canvas Kit. [AGENTS.md](./AGENTS.md) has the
short version and links here; this file is the reference to check when writing or reviewing
actual style code.

Canvas Kit is moving away from Emotion's runtime `styled()`/style-prop API toward a static
compilation model (`@workday/canvas-kit-styling`). New code should use that model. Existing
`styled()`/style-prop code you encounter is legacy — don't imitate it, and don't "fix" it as a
drive-by unless the task asks you to migrate it.

## The tools

All exported from `@workday/canvas-kit-styling` (source: [modules/styling](modules/styling)):

- `createStyles(styleObj)` — static styles, returns a class-name string. Use for styles that
  don't vary by prop.
- `createStencil({...})` — prop-driven styling for a component. Use whenever styles change based
  on variants/state.
- `handleCsProp(elemProps, localCs?)` — merges the `cs` prop with local stencil/class output into
  `className`/`style`. Use this to apply styles in a component's render.
- `cssVar(token, fallback?)` — wraps a CSS variable reference in `var(...)`, with an optional
  fallback.
- `calc.add / subtract / multiply / divide / negate` — CSS `calc()` builder; auto-wraps bare
  `--` custom properties in `var()`.
- `px2rem(px, base = 16)` — converts a pixel value to a rem string.
- `createVars`, `keyframes`, `injectGlobal` — supporting utilities; use these instead of
  `@emotion/css`'s equivalents.

## `createStyles` — rules

- Define at **module scope**, not inside a render function:

  ```tsx
  // Good — outside the component (prefer system tokens; reach for base only when none fit)
  const styles = createStyles({color: system.color.fg.strong});
  const MyComponent = () => <PrimaryButton cs={styles}>Text</PrimaryButton>;

  // Bad — recreated every render, loses static-compilation benefits
  function MyComponent() {
    const styles = createStyles({color: system.color.fg.strong});
    return <PrimaryButton cs={styles}>Text</PrimaryButton>;
  }
  ```
- The `cs` prop must receive the output of `createStyles`/`createStencil` (a class string), not a
  raw style object — a raw object skips static compilation entirely.
- Each `createStyles` call becomes one CSS class selector. If two selectors end up with equal
  specificity, source order wins — put the properties you want to win later in the file.
- Use `const`, not `let`, for style values, and `as const` on spread style objects — the static
  compiler needs these to be statically analyzable.

## `createStencil` — shape and rules

Config keys, in the order they're conventionally declared: `extends`, `parts`, `vars`, `base`
(required), `modifiers`, `compound`, `defaultModifiers`.

### Basic shape: `base` + `modifiers` + `compound`

```tsx
const countBadgeStencil = createStencil({
  base: {
    animation: `${grow} 0.2s ease`,
    borderRadius: system.legacy.shape.full,
    ...system.legacy.type.subtext.md,
    height: px2rem(20),
    background: system.legacy.color.brand.accent.primary,
    color: system.color.fg.inverse,
  },
  modifiers: {
    variant: {
      inverse: {background: system.legacy.color.surface.inverse, color: system.color.fg.strong},
    },
    emphasis: {
      high: {},
      low: {background: system.color.bg.alt.default, color: system.color.fg.default},
    },
  },
  compound: [
    {modifiers: {variant: 'inverse', emphasis: 'low'}, styles: {background: '...', color: '...'}},
  ],
});

// Applied in render:
<Element ref={ref} {...handleCsProp(elemProps, [countBadgeStencil({variant, emphasis})])}>
```

(Full source: [CountBadge.tsx](modules/react/badge/lib/CountBadge.tsx))

### With `vars` — parameterized styles

```tsx
export const buttonStencil = createStencil({
  vars: {
    background: '',
    border: '',
    label: '',
    // ...
  },
  base: ({background, border, label}) => ({
    backgroundColor: cssVar(buttonColorPropVars.default.background, cssVar(background, 'transparent')),
    // ...
  }),
  modifiers: {
    // Placeholder bodies — real styles omitted for brevity
    size: {large: {}, medium: {}, small: {}, extraSmall: {}},
    grow: {true: {}},
    iconPosition: {only: {padding: 0}, start: {}, end: {}},
  },
  compound: [
    {modifiers: {size: 'large', iconPosition: 'only'}, styles: {minWidth: system.legacy.size.lg}},
  ],
});
```

(Full source: [BaseButton.tsx](modules/react/button/lib/BaseButton.tsx))

### With `extends` + `parts` — nested elements / subcomponents

```tsx
export const avatarStencil = createStencil({
  extends: baseAvatarStencil,
  parts: {avatarImage: 'avatar-image', avatarName: 'avatar-name'},
  base: {},
  modifiers: {
    imageLoaded: {
      false: ({avatarImagePart}) => ({[avatarImagePart]: {display: 'none'}}),
      true: {backgroundColor: system.color.bg.default},
    },
  },
});

// Consumed in render:
<img {...avatarStencil.parts.avatarImage} />  // emits data-part="avatar-image"
```

(Full source: [Avatar.tsx](modules/react/avatar/lib/Avatar.tsx))

### With `extends` — writing into a parent stencil's vars

```tsx
export const segmentedControlItemStencil = createStencil({
  extends: buttonStencil,
  base: {
    [buttonStencil.vars.borderRadius]: system.legacy.shape.full,
    [buttonStencil.vars.label]: system.color.fg.muted.default,
    '&:hover, &.hover': {[buttonStencil.vars.background]: system.color.surface.overlay.hover.default},
  },
});
```

(Full source: [SegmentedControlItem.tsx](modules/react/segmented-control/lib/SegmentedControlItem.tsx))

### Corner radius and `cornerShapeStencil`

We apply a subtle
[corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape)
to components that use border-radius under certain conditions (see below), using a
`cornerShapeStencil`. This applies to any stencil with a border radius
(inputs, cards, menu items, buttons, etc). The one exception is a stencil that already extends
`buttonStencil` for button-like behavior: since a stencil can only have one `extends` target, that
stencil writes the radius into `buttonStencil.vars.borderRadius` instead. Don't set a raw
`borderRadius: px2rem(n)` prop in either case.

- **Extends `buttonStencil`:** write the radius into `buttonStencil.vars.borderRadius` (shown above)
  — `buttonStencil` already wires that var into the real `border-radius` with its own fallback
  chain. See `toolbarIconButtonStencil` in
  [ToolbarIconButton.tsx](modules/react/toolbar/lib/ToolbarIconButton.tsx).
- **Doesn't extend `buttonStencil`** (the common case — most stencils don't): use
  `cornerShapeStencil` ([cornerShape.ts](modules/react/common/lib/styles/cornerShape.ts)) instead of
  a plain `borderRadius` prop.

  This is a progressive-enhancement (`corner-shape: superellipse(1.1)` + `borderRadius`), falling
  back to a plain radius in browsers without `corner-shape` support:

  ```tsx
  const myStencil = createStencil({
    extends: cornerShapeStencil,
    base: {
      [cornerShapeStencil.vars.shape]: system.legacy.shape.md,
    },
  });
  ```

  See `checkboxInputStencil` ([CheckboxInput.tsx](modules/react/checkbox/lib/CheckboxInput.tsx)),
  `cardStencil` ([Card.tsx](modules/react/card/lib/Card.tsx)), and `menuItemStencil`
  ([MenuItem.tsx](modules/react/menu/lib/MenuItem.tsx)) for non-button examples.

  This applies **only to Canvas Kit library source** (`modules/**/lib/**`) — not consumer code,
  Storybook examples, or docs. Use it when the stencil's border radius is one of:
  - `system.legacy.shape.md`
  - `system.legacy.shape.lg`
  - `system.legacy.shape.xl`
  - `system.legacy.shape.xxl`
  - `system.legacy.shape.xxxl`

  Don't apply it when the radius is:
  - `system.legacy.shape.sm`
  - `system.legacy.shape.full`
  - `system.legacy.shape.none`

### Stencil rules

- A stencil applies to a **single element**. Nested elements → use `parts`. Compound components →
  one stencil per subcomponent.
- Don't give a modifier the same name as a var — they share a namespace (there's a documented
  intentional exception for using both at once; only do this if you've read
  [Stencils.mdx](modules/styling/stories/mdx/Stencils.mdx) and understand the tradeoff).
- Use `vars` sparingly — most style overriding can be done without them. A var with default `''`
  is uninitialized and cascades; a non-empty default creates a "cascade barrier." If you read an
  uninitialized var, always give it a fallback: `color: cssVar(color, 'red')`.
- Nested vars are supported to exactly one level.
- `parts` increase CSS specificity — use sparingly, and never put a part on a nested component
  that already has its own stencil. Part values must be prefixed/unique across components
  (`card-separator`, not `separator`) to avoid cross-component selector collisions.
- Part keys are camelCase (`avatarImage`); the string value is the kebab-case `data-part` id
  (`avatar-image`). A stencil's `parts` object commonly holds multiple entries for a single
  compound component (e.g. `avatarStencil` → `avatarImage`, `avatarName`; `MenuItem`'s stencil →
  `text`, `icon`, `selected`). When a compound component splits its subcomponents into separate
  files instead, each file's stencil owns just its own single part — see
  [Heading.tsx](modules/react/information-highlight/lib/parts/Heading.tsx).
- Spread `{...stencil.parts.x}` **before** `handleCsProp(elemProps, ...)` so a consumer-supplied
  prop doesn't accidentally override `data-part` unless you intend that. A fixed prop that must win
  (e.g. `variant="secondary"`) goes *after* `handleCsProp` instead.
- Pair every pseudo-selector with a class twin so visual/static-state testing can capture it:
  `'&:hover, &.hover'`, `'&:focus-visible, &.focus'`, `'&:disabled, &.disabled'`.
- Apply with `handleCsProp(elemProps, [stencil({...})])`. **Don't use `mergeStyles`** — it's
  `@deprecated` (kept only for legacy call sites) because it doesn't guarantee correct merge order
  with style props.
- Don't use `parentModifier` — it's deprecated; it produces unstable hashes when consumers pass
  style props.
- Don't mix Emotion's `styled()`/`css` prop with `createStyles`/`createStencil` in the same
  component.

## Design tokens

Always import from `@workday/canvas-tokens-web`:

```ts
import {system, base, brand} from '@workday/canvas-tokens-web';
```

Hierarchy — use in this order of preference:

- **`system`** — semantic, themeable values. Use this in most cases:
  `backgroundColor: system.color.surface.default`.
- **`base`** — fundamental raw values (colors, measurements). Use sparingly, only when there's no
  suitable semantic token.
- **`brand`** — tenant/brand-specific customization keys, mainly used to *set* theme values (e.g.
  in a custom theme's `createStyles`), not to consume styling directly.

```tsx
// Good — semantic and themeable
backgroundColor: system.color.surface.default;

// Avoid — hard-coded base value where a system token exists
backgroundColor: base.neutral0;
```

Rules:

- **Never hardcode colors or spacing** that a token already covers (`'#333'`, `'8px'`, etc.). If
  you truly need a one-off value with no matching token, say so explicitly rather than silently
  hardcoding it.
- Consume whole type levels, not individual typography properties:
  ```ts
  // Good
  ...system.type.body.md
  // Avoid
  fontSize: system.fontSize.body.md, fontWeight: system.fontWeight.medium, lineHeight: '1.5'
  ```
- Tokens are CSS variable names, not raw values — let the styling utilities wrap them:
  ```ts
  // Good
  const styles = createStyles({padding: system.padding.md});
  // Avoid — manual var() handling
  const styles = {padding: `var(${system.padding.md})`};
  ```
- Use `px2rem` for literal pixel values (borders, etc.): `` border: `solid ${px2rem(1)}` ``.
- Use CSS **logical properties**: `marginInline`, `paddingInlineStart`, not `marginX`/`paddingLeft`.
- **`system.legacy.*` — maintainer vs consumer rule.** The `legacy` namespace carries `var()`
  fallbacks to deprecated CSS variables so components keep working when consumers are on older
  `@workday/canvas-tokens-web` versions. That backward-compat behavior is why it exists — not as a
  shortcut for app authors.
  - **In Canvas Kit library source (`modules/**/lib/**`)** — use `system.legacy.*` (and
    `base.legacy`, `brand.legacy` when applicable) for any token that has a legacy equivalent.
    Published components must not assume consumers have migrated to the latest token names.
  - **Outside `lib/`** (stories, examples, docs, consumer apps) — prefer non-legacy `system.*`
    tokens. Don't spread `system.legacy.*` into new example or app code just because it's common
    in existing component implementations.
  - When adding or updating styles in a `lib/` file, check whether the non-legacy token you're
    tempted to use has a `system.legacy.*` counterpart — if it does, use the legacy path in
    `lib/` code.

Full reference: [TokenMigrationOverview.mdx](modules/docs/mdx/tokens/TokenMigrationOverview.mdx),
[stylePropsMigrationOverview.mdx](modules/docs/mdx/style-props/stylePropsMigrationOverview.mdx).

## Layout primitives — Box, Flex, Grid, Stack

| Symbol | Status | What to do instead |
|---|---|---|
| `Stack`, `HStack`, `VStack` | **Removed in v9** | `Flex` with `gap`, or `createStencil`/`createStyles` |
| Style props (`padding="s"`, `depth={1}`, `backgroundColor="frenchVanilla100"`, ...) | Deprecated since v14.1 | `cs` prop with `createStyles`/`createStencil` and tokens |
| `styled()` (Emotion) | Deprecated direction | `createStyles` / `createStencil` |
| `mergeStyles`, `boxStyleFn`, `parentModifier` | `@deprecated` in JSDoc | `handleCsProp` |
| `Box`, `Flex`, `Grid` (the components themselves) | Not formally deprecated, but doc pages carry an "may be outdated" banner | Prefer building new styled elements with `createComponent` + a stencil rather than reaching for `Box`/`Flex` as a styling shortcut |

Migration example (old → new), from the docs:

```tsx
// Before
<Flex depth={1} marginX={10} background="frenchVanilla100" />

// After
const flexStyles = createStyles({
  boxShadow: system.depth[1],
  marginInline: px2rem(10),
  background: system.color.bg.default,
});
<Flex cs={flexStyles} />
```

For **new** components, don't reach for `Box`/`Flex` as your styling primitive at all — render a
plain semantic element (or wrap it with `createComponent`) and style it with a stencil.

## Imports

- Always import from the public subpath: `@workday/canvas-kit-react/<component>`.
- Never import the bare package barrel (`@workday/canvas-kit-react`) or anything under `/lib/`
  (e.g. `@workday/canvas-kit-react/button/lib/BaseButton`) — both are enforced ESLint errors
  (`workday-custom-rules/use-ck-slash-imports`, `workday-custom-rules/restricted-imports`) because
  `/lib` isn't part of the published output.

## Static-compilation constraints

Because `createStyles`/`createStencil` are statically extracted at build time
([styling.config.ts](styling.config.ts)), keep style definitions analyzable:

- Use `const`, not `let`.
- String literals should be inferable — avoid building style-relevant strings dynamically at
  module scope.
- Spread objects need `as const`.
- Class-name prefix is `cnvs` (`cnvs-preview`/`cnvs-labs` for those packages); don't hand-author
  class names that collide with this scheme.
