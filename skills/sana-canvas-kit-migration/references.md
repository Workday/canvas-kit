# Canvas Kit Codemod Reference

> Commands from `@workday/canvas-kit-codemod`. Run with `npx @workday/canvas-kit-codemod <transform> [path]`.

## General options

| Flag               | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `--ignore-pattern` | Glob to skip (default `**/node_modules/**`)          |
| `--ignore-config`  | Ignore file from config (e.g. `.gitignore`)          |
| `--verbose=2`      | Show all files being parsed                          |

Codemods only transform `.js`, `.jsx`, `.ts`, `.tsx`. Run your linter after — output formatting may
not match project conventions.

## Version chain (sequential)

Run in order. Do not skip majors. There is no `v10` transform.

| Transform | From → To   | Notes                                      |
| --------- | ----------- | ------------------------------------------ |
| `v5`      | v4 → v5     | Core import renames, compound components   |
| `v6`      | v5 → v6     | SearchBar move, cookie banner, depth       |
| `v7`      | v6 → v7     | Model signatures, tabs, segmented control  |
| `v8`      | v7 → v8     | Breadcrumbs promote, layout soft-deprecate |
| `v9`      | v8 → v9     | Toast promote, useThemedRing               |
| `v11`     | v10 → v11   | Styles icon prop replacement               |
| `v12`     | v11 → v12   | FormField promote                          |
| `v13`     | v12 → v13   | Expandable promote, dub logos              |
| `v13.2`   | —           | React tokens → canvas-tokens-web v2        |
| `v14`     | v13 → v14   | StatusIndicator preview, pill/expandable   |
| `v14.1`   | v14.1       | Deprecated style props → `cs`              |
| `v15`     | v14 → v15   | SidePanel promote, Switch preview, pill    |
| `v16`     | v15 → v16   | Hyperlink props, card variant, side panel  |

## Sub-codemods (run when crossing their boundary)

| Transform        | Scope                                                        | Prerequisite                               |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------ |
| `v14-tokens`     | `@workday/canvas-kit-react/tokens` → `@workday/canvas-tokens-web` v3 | `@workday/canvas-kit-styling`, `@workday/canvas-tokens-web` |
| `v15-icons`      | Accent, applet, expressive icon APIs                         | v15 upgrade                                |
| `icon-migration` | `@workday/canvas-system-icons-web` deprecated exports        | Icons package v5 installed first           |

## v16 transforms (detail)

The `v16` command runs these in order:

- `updateHyperlinkProps` — `variant="standalone"` → `linkType="standalone"`, etc.
- `updateCardVariant` — `variant="borderless"` → `variant="alt"`
- `updateSidePanelVariant` — `variant="alternate"` → `variant="overlay"`

## v15 transforms (detail)

The `v15` command runs: promoteSegmentedControl, promoteInformationHighlight, promotePill,
promoteAvatar, promoteSidePanel, replaceFormFieldContainer, updateCardVariant, updateSwitchToPreview,
removeStatusIndicatorAIVariant.

## icon-migration (detail)

Reads `system.deprecated.metadata.json` from the installed icon package. Updates named imports,
aliases, namespace member access, and chained fallbacks. Does **not** touch dynamic icon selection or
other icon packages. For accent/applet/expressive, use `v15-icons` instead.

## Example: v14 → v16

```sh
# After bumping package.json to each target and yarn install:

npx @workday/canvas-kit-codemod v15 src/
# → review v15 upgrade guide, manual steps, commit

npx @workday/canvas-kit-codemod v16 src/
yarn add @workday/canvas-system-icons-web@^5
npx @workday/canvas-kit-codemod icon-migration src/
# → review v16 upgrade guide, commit
```

## What codemods never do

- Modify `package.json` or lockfiles
- Edit `.json`, `.mdx`, `.md`, CSS, or config files
- Handle runtime/dynamic token or icon selection
- Replace manual upgrade-guide steps not covered by transforms

## Related skills

- Leftover deprecations: `/sana-canvas-component-selection`
- Leftover tokens: `/sana-canvas-tokens`
- Style props after v14.1: `/sana-canvas-styling`
