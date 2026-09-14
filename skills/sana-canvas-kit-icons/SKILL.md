---
name: sana-canvas-kit-icons
description: >-
  Use Canvas Kit icons correctly. Covers SystemIcon, ExpressiveIcon, accent/applet icon migrations,
  sizing via the size prop, importing from @workday/canvas-system-icons-web, and running the
  icon-migration codemod. Use when adding icons, replacing deprecated AccentIcon/AppletIcon, or
  migrating @workday/canvas-system-icons-web to v5. For package tiers and deprecated exports see
  /sana-canvas-kit-component-selection; for codemod sequencing see /sana-canvas-kit-migration.
---

# Canvas Kit Icons

**REQUIRED SUB-SKILL:** `/sana-canvas-kit-version`. Icon package versions and deprecation metadata are
release-specific.

Deprecated exports (`AccentIcon`, `AppletIcon`, old system icon names) →
`/sana-canvas-kit-component-selection`. Running `icon-migration` or crossing major icon API boundaries →
`/sana-canvas-kit-migration`.

## When to apply

- Adding an icon to a Button, IconButton, Menu, Pill, or other Canvas component
- Replacing `AccentIcon`, `AppletIcon`, or deprecated `@workday/canvas-system-icons-web` exports
- Migrating to `@workday/canvas-system-icons-web` v5 (Sana Canvas Assets)
- Choosing between `SystemIcon`, `ExpressiveIcon`, and component `icon` props

## Packages and components

| Need | Import from | Render with |
| ---- | ----------- | ----------- |
| Standard UI icons | `@workday/canvas-system-icons-web` | `SystemIcon` from `@workday/canvas-kit-react/icon` |
| Expressive / marketing icons | `@workday/canvas-expressive-icons-web` | `ExpressiveIcon` from `@workday/canvas-kit-react/icon` |
| Deprecated accent/applet APIs | — | `ExpressiveIcon` (not `AccentIcon` / `AppletIcon`) |

Always import icon **assets** from the icon package and pass them to the Canvas Kit icon component.
Do not import icons from `@workday/canvas-kit-react` itself.

## Core rules

1. **Use `size`, not `width`/`height`.** `Svg` and icon components accept a `size` prop tied to
   design tokens — legacy `width`/`height` on `Svg` are deprecated.
2. **Pair icon-only controls with an accessible name.** Icon-only buttons need `aria-label`
   or `aria-labelledby`. Add a `Tooltip` only as supplementary help — see
   `/sana-canvas-kit-accessibility`.
3. **Verify deprecations in `node_modules`.** `@deprecated` JSDoc on the installed export wins over
   static tables.
4. **Run codemods before hand-editing icon imports.** `icon-migration` reads
   `system.deprecated.metadata.json` from the installed icons package.
5. **Upgrade the icons package first.** Install `@workday/canvas-system-icons-web@^5` before running
   `icon-migration`.

## Sizing

```tsx
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {plusIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={plusIcon} size="m" />
```

Prefer token-backed `size` values (`xs`, `s`, `m`, `l`, etc.) over raw pixel dimensions.

## Migration

### System icons (v5)

```sh
yarn add @workday/canvas-system-icons-web@^5
npx @workday/canvas-kit-codemod@16.0.6 icon-migration src/
```

`icon-migration` only touches `@workday/canvas-system-icons-web`. It does not handle dynamic icon
selection built from runtime strings.

### Accent, applet, expressive (v15)

```sh
npx @workday/canvas-kit-codemod@16.0.6 v15-icons src/
```

Use this for `AccentIcon` / `AppletIcon` → `ExpressiveIcon` and related v15 icon API changes.

## Workflow

```text
- [ ] /sana-canvas-kit-version — confirm icons package generation
- [ ] Pick SystemIcon vs ExpressiveIcon
- [ ] Import the asset from the icon package; pass via icon={...}
- [ ] Use size prop; avoid width/height on Svg
- [ ] Verify export is not @deprecated (/sana-canvas-kit-component-selection)
- [ ] Icon-only control has an accessible name (/sana-canvas-kit-accessibility)
- [ ] For bulk renames, run icon-migration or v15-icons before manual edits
```

## Anti-patterns

- ❌ `AccentIcon` / `AppletIcon` in new code
- ❌ `width` / `height` on `Svg` instead of `size`
- ❌ Icon-only button with no accessible name
- ❌ Hand-renaming dozens of icon imports before running `icon-migration`
- ❌ `icon-migration` before upgrading `@workday/canvas-system-icons-web` to v5
- ❌ Expecting codemods to fix dynamic/runtime icon selection

## Additional resources

- Icon migration codemod: `modules/docs/mdx/icon-migration-codemod.mdx`
- Component examples: `modules/react/icon/stories/Assets.mdx`
- v15 icon transforms: `modules/docs/mdx/15.0-UPGRADE-GUIDE.mdx`
- v16 icon package bump: `/sana-canvas-kit-migration`
