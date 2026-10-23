# Canvas Component, Prop, Style, and Token Selection

Use this guidance when writing or reviewing Canvas Kit UI code. Generated catalog facts from the
installed Canvas Kit source remain authoritative for versions, imports, exports, deprecations, and
availability.

## Core rules

1. Check installed versions of Canvas Kit, Styling, and Canvas Tokens before selecting APIs.
2. Treat source JSDoc `@deprecated` tags and their replacement messages as authoritative.
3. Never introduce deprecated exports, props, style props, tokens, or styling APIs in new code.
4. Follow replacement chains only when JSDoc directs them: Main → Preview → Labs → removal.
5. Preview and Labs are not automatically preferable. Use the lowest stable non-deprecated tier.
6. Match surrounding project usage when it remains non-deprecated.
7. Use `@workday/canvas-tokens-web`; never add `@workday/canvas-kit-react/tokens`.
8. Use `cs` with `createStencil` or `createStyles`; do not add deprecated Box style props.

## Selection workflow

- Inventory imports, props, and styling patterns in the target files.
- Query the component catalog and select the entry marked `recommended`.
- Confirm the export is not deprecated.
- Review `deprecatedProps` before passing component props.
- If deprecated, follow the source-provided replacement package or message.
- Validate tokens against the correct channel.
- Run the project's deprecated-usage validation before completion.

## Package tiers

- **Main** — `@workday/canvas-kit-react`: default for stable, non-deprecated components.
- **Preview** — `@workday/canvas-kit-preview-react`: use when Main JSDoc points to Preview.
- **Labs** — `@workday/canvas-kit-labs-react`: use when Preview JSDoc points to Labs.

## Deprecated styling patterns

Do not add:

- Box layout, spacing, color, text, border, depth, flex, grid, or position props
- `boxStyleFn`
- `styled` from `@workday/canvas-kit-react/common`
- `mergeStyles` when only combining `cs` styles
- `CommonStyleProps`, `AllStyleProps`, or token shorthand style props

Use:

- `cs`
- `createStencil` or `createStyles`
- `handleCsProp` when combining only `cs` styles
- Canvas token values inside stencil or style definitions

## Token example

Deprecated:

```ts
import {canvas} from '@workday/canvas-kit-react/tokens';
```

Current:

```ts
import {base, brand, system} from '@workday/canvas-tokens-web';
```

## Red flags

Re-check source JSDoc before using:

- Main Switch, Radio, RadioGroup, or StatusIndicator
- style props directly on Box
- `canvas.*` tokens
- AccentIcon, AppletIcon, or LabelText
- component props such as `disabled` when JSDoc directs `aria-disabled`

Source: `design/sana-canvas-ai-tooling`, skill `canvas-component-selection`.
