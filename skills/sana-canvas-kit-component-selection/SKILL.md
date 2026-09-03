---
name: sana-canvas-component-selection
description: >-
  Avoid deprecated Canvas Kit exports and props. Prefers Preview when Main is @deprecated, and Labs
  when Preview is @deprecated. Use when checking Main vs Preview vs Labs, verifying JSDoc
  @deprecated tags, or when the user mentions deprecated, preview, or labs. For which token to use
  see /sana-canvas-tokens; for createStyles/cs see /sana-canvas-styling; for building new components
  see /sana-canvas-builder.
---

# Canvas Kit deprecation & package tiers

**Never introduce or recommend anything carrying `@deprecated`.** Verify in installed `node_modules`
before choosing an export or prop.

**REQUIRED SUB-SKILL:** `/sana-canvas-version`. Deprecation status is version-specific — run it
first so you know which generation's rules apply before checking JSDoc.

Which token → `/sana-canvas-tokens`. How to style (`cs`, stencils) → `/sana-canvas-styling`.
Building a new component → `/sana-canvas-builder`. Choosing between components for a use case →
`/sana-canvas-design-principles`.

## Package tiers

| Tier        | Package                             | When to use                                           |
| ----------- | ----------------------------------- | ----------------------------------------------------- |
| **Main**    | `@workday/canvas-kit-react`         | Default for stable, non-deprecated components         |
| **Preview** | `@workday/canvas-kit-preview-react` | When Main is `@deprecated` and JSDoc says use Preview |
| **Labs**    | `@workday/canvas-kit-labs-react`    | When Preview is `@deprecated` and JSDoc says use Labs |

Preview and Labs are not “always better.” Use them only when the export you need is `@deprecated`
and the JSDoc points there.

**Figma pills / badges:** Preview `StatusIndicator` (`emphasis="low"`) is the usual Canvas Kit
stand-in, but many Figma frames use a **custom** pill treatment. Confirm the node is a library
`StatusIndicator` (or Code Connect) before reaching for it — otherwise rebuild the custom chrome
with tokens/`Flex`.

> **`@workday/canvas-kit-labs-react` is not installed here.** If JSDoc points to Labs, first check
> whether the component has since landed in Main (as `SidePanel` did). If it only exists in Labs,
> say so rather than adding the package.

## Core rules

1. **Check installed versions** — deprecations vary by release; always read the installed source,
   not static tables alone.
2. **JSDoc is the source of truth** — `@deprecated` tag + replacement message on the export or prop.
3. **Follow the chain** — Main → Preview → Labs → removal.
4. **Match nearby imports** — prefer the tier the file already uses when both are valid.
5. **Style props on `Box`/`Flex` are deprecated** — use `cs` + `createStyles`/`createStencil`
   (`/sana-canvas-styling`). Do not teach the migration here.
6. **Legacy kit tokens are deprecated** — never `@workday/canvas-kit-react/tokens`; use
   `@workday/canvas-tokens-web` (`/sana-canvas-tokens`).

## What can be deprecated

| Category            | Where to check                   | Example                                  |
| ------------------- | -------------------------------- | ---------------------------------------- |
| **Exports**         | JSDoc above `export`             | Main `Switch` → Preview                  |
| **Component props** | JSDoc on `*Props`                | `disabled` → `aria-disabled`             |
| **Style props**     | `*StyleProps` / Box style system | `padding="s"` → `cs` (see styling skill) |
| **Tokens**          | JSDoc on token paths             | `system.space.*` (see tokens skill)      |

## Workflow

```
- [ ] Inventory imports in the target file(s)
- [ ] Candidate export/prop
- [ ] Confirm export is NOT @deprecated in node_modules
- [ ] Confirm each prop is NOT @deprecated
- [ ] If deprecated, follow JSDoc replacement (tier or prop)
- [ ] Run the validation script on changed files
```

### Verify exports

```bash
rg -n "export (const|function|class|interface|type) SymbolName" \
  node_modules/@workday/canvas-kit-react \
  node_modules/@workday/canvas-kit-preview-react \
  node_modules/@workday/canvas-kit-labs-react
```

Read the JSDoc above the export. If `@deprecated`, do not use it.

### Verify props

```bash
rg -n "interface \w+Props" node_modules/@workday/canvas-kit-react/<component> -A30
rg -B5 "@deprecated" node_modules/@workday/canvas-kit-react/<component>
```

### Follow the replacement

| Pattern in JSDoc                                 | Action                                           |
| ------------------------------------------------ | ------------------------------------------------ |
| `Please use [X] in Preview`                      | Import from `@workday/canvas-kit-preview-react`  |
| `Please use [X] in Labs`                         | Check Main first; else Labs (not installed here) |
| `Use cs prop with createStencil or createStyles` | `/sana-canvas-styling`                           |
| `Use @workday/canvas-tokens-web`                 | `/sana-canvas-tokens`                            |
| `Use aria-disabled`                              | Replace `disabled` prop; see `/sana-canvas-a11y` |
| `Use handleCsProp`                               | Replace `mergeStyles` when merging `cs`          |

### Validate

From the project root:

```bash
node .claude/skills/sana-canvas-component-selection/scripts/check-deprecated-usage.mjs <file-or-dir>
```

(Cursor copy: `.cursor/skills/sana-canvas-component-selection/scripts/…`.)

## Red flags

Confirm each against installed JSDoc before acting:

- Main `Switch`, `Radio`, `RadioGroup`, `StatusIndicator` in new UI
- `AccentIcon`, `AppletIcon`, `LabelText`
- Style props on `Box`/`Flex` (`margin`, `padding`, `display`, …)
- `boxStyleFn`, `styled`, `mergeStyles`, `theme` / `useTheme`
- `@workday/canvas-kit-react/tokens` or `canvas.*`
- Ignoring `@deprecated` because “it still works”

## Additional resources

- Hint tables: [reference.md](reference.md) (verify in `node_modules` first)
- How to style after leaving style props: `/sana-canvas-styling`
- Which token path to use: `/sana-canvas-tokens`
- Accessibility (labels, keyboard, ARIA): `/sana-canvas-a11y`
