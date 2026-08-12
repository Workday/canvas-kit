# Canvas Deprecation Reference

> **Verify in `node_modules` first.** Tables are hints. JSDoc `@deprecated` on the installed
> packages always wins.

## Installed package check

```bash
node -p "require('./node_modules/@workday/canvas-kit-react/package.json').version"
node -p "require('./node_modules/@workday/canvas-kit-preview-react/package.json').version"
```

Validation script (prints versions at start):

```bash
node .claude/skills/sana-canvas-component-selection/scripts/check-deprecated-usage.mjs src/
```

## Component tier migrations (hints)

| Deprecated export          | From    | Replacement       | To                                                |
| -------------------------- | ------- | ----------------- | ------------------------------------------------- |
| `Switch`                   | Main    | `Switch`          | Preview                                           |
| `Radio`, `RadioGroup`      | Main    | `Radio`           | Preview                                           |
| `StatusIndicator`          | Main    | `StatusIndicator` | Preview                                           |
| `LabelText`                | Main    | `FormField.Label` | Main                                              |
| `AccentIcon`, `AppletIcon` | Main    | `ExpressiveIcon`  | Main                                              |
| `SidePanel`                | Preview | `SidePanel`       | **Main** (`@workday/canvas-kit-react/side-panel`) |

> Labs is not installed in this template. If JSDoc still points at Labs, check Main first.

## Component prop deprecations (examples)

| Component        | Deprecated prop            | Replacement                       |
| ---------------- | -------------------------- | --------------------------------- |
| `MenuItem`       | `disabled` / `isDisabled`  | `aria-disabled`                   |
| `Svg`            | `width`, `height` (legacy) | `size`                            |
| `CanvasProvider` | `theme`                    | CSS variables / `defaultBranding` |

Always read the component’s `*Props` interface.

## Style props & styling APIs

The entire Box style-prop system is deprecated. Do not migrate it here — use `/sana-canvas-styling`
(`cs` + `createStyles` / `createStencil`, `handleCsProp` instead of `mergeStyles` / `styled` /
`boxStyleFn`).

## Tokens

Never `@workday/canvas-kit-react/tokens`. Individual deprecated paths (`system.space.*`, etc.) →
`/sana-canvas-tokens`.

## How to verify in source

```bash
# Export deprecation
rg -B8 "export.*Switch" node_modules/@workday/canvas-kit-react/switch -n

# Prop deprecation
rg -B5 "@deprecated" node_modules/@workday/canvas-kit-react/menu

# Deprecated style props (confirm, then style via /sana-canvas-styling)
rg "@deprecated" node_modules/@workday/canvas-kit-react/layout/lib/utils/ -B1

# Deprecated token paths
rg "@deprecated" node_modules/@workday/canvas-tokens-web/dist/es6 -B3
```
