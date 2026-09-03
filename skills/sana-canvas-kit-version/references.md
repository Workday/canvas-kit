# Canvas Kit Version / Upgrade Guide Matrix

Reference for `/sana-canvas-version`. Verify against installed `node_modules`, not this table
alone — releases can ship out of band with this list.

## Package version pairing (approximate)

| `@workday/canvas-kit-react` | `@workday/canvas-tokens-web` | Styling model                          | Theme                     |
| ---------------------------- | ------------------------------ | --------------------------------------- | -------------------------- |
| `16.x`                        | `4.4.x`                         | `createStyles`/`createStencil` + `cs`   | Sana Canvas (opt-in)        |
| `15.x`                        | `3.x`–`4.x`                     | `createStyles`/`createStencil` + `cs`   | Classic Canvas              |
| `14.x`                        | `3.x`                           | `cs` (style props deprecated in 14.1)   | Classic Canvas              |
| `13.x`                        | `2.x`–`3.x`                     | Style props + early `createStyles`      | Classic Canvas              |
| `9.x`–`12.x`                  | `@workday/canvas-kit-react/tokens` (pre-canvas-tokens-web) | Style props / Emotion `styled()` | Classic Canvas |
| `< 9`                         | —                               | Emotion `styled()`, style props         | Classic Canvas              |

## Upgrade guide files (in this repo)

| Version | Source MDX                                   | LLM copy                                                 |
| ------- | --------------------------------------------- | --------------------------------------------------------- |
| v16     | `modules/docs/mdx/16.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/16.0-UPGRADE-GUIDE.md`   |
| v15     | `modules/docs/mdx/15.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/15.0-UPGRADE-GUIDE.md`   |
| v14     | `modules/docs/mdx/14.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/14.0-UPGRADE-GUIDE.md`   |
| v13     | `modules/docs/mdx/13.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/13.0-UPGRADE-GUIDE.md`   |
| v12     | `modules/docs/mdx/12.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/12.0-UPGRADE-GUIDE.md`   |
| v11     | `modules/docs/mdx/11.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/11.0-UPGRADE-GUIDE.md`   |
| v10     | `modules/docs/mdx/10.0-UPGRADE-GUIDE.mdx`     | `modules/docs/llm/upgrade-guides/10.0-UPGRADE-GUIDE.md`   |
| v9      | `modules/docs/mdx/9.0-UPGRADE-GUIDE.mdx`      | `modules/docs/llm/upgrade-guides/9.0-UPGRADE-GUIDE.md`    |
| v8      | `modules/docs/mdx/8.0-UPGRADE-GUIDE.mdx`      | —                                                          |
| v7      | `modules/docs/mdx/7.0-UPGRADE-GUIDE.mdx`      | —                                                          |
| v6      | `modules/docs/mdx/6.0-UPGRADE-GUIDE.mdx`      | —                                                          |
| v5      | `modules/docs/mdx/5.0-UPGRADE-GUIDE.mdx`      | —                                                          |
| v4      | `modules/docs/mdx/4.0-UPGRADE-GUIDE.mdx`      | —                                                          |

## Outside this repo (consumer projects)

Raw GitHub fallback when MCP is unavailable and the agent isn't operating inside the `canvas-kit`
repo itself:

```
https://raw.githubusercontent.com/Workday/canvas-kit/master/modules/docs/mdx/{N}.0-UPGRADE-GUIDE.mdx
```

## Verify installed versions

```bash
node -p "require('@workday/canvas-kit-react/package.json').version"
node -p "require('@workday/canvas-tokens-web/package.json').version"
node -p "require('@workday/canvas-kit-preview-react/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-kit-labs-react/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-kit-styling/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-system-icons-web/package.json').version" 2>/dev/null
```

## MCP tool

`get-canvas-kit-upgrade-guides` returns resource links (`docs://upgrade-guides/{N}.0-UPGRADE-GUIDE`)
for v9 through v16. Prefer this over guessing file paths when the MCP server is connected.
