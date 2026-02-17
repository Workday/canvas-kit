# Canvas Kit MCP

Our MCP server provides resources and tools to help you work with Canvas Kit components.

## Installation

### Cursor Quick Install

<a href="https://cursor.com/en-US/install-mcp?name=canvas-kit-mcp&config=eyJjb21tYW5kIjoibnB4IC15IEB3b3JrZGF5L2NhbnZhcy1raXQtbWNwIn0%3D">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cursor.com/deeplink/mcp-install-light.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://cursor.com/deeplink/mcp-install-dark.svg">
    <img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Install MCP server in Cursor">
  </picture>
</a>

### Other IDEs (Windsurf, VS Code, etc.)

Add to your MCP servers configuration file:

```json
{
  "mcpServers": {
    "canvas-kit-mcp": {
      "command": "npx",
      "args": ["-y", "@workday/canvas-kit-mcp"]
    }
  }
}
```

### Claude Code CLI

```sh
claude mcp add --scope project --transport stdio canvas-kit -- npx -y @workday/canvas-kit-mcp
```

## Tools

### `get-canvas-kit-upgrade-guides`

Returns Canvas Kit upgrade guide documentation (v9 through v14) as resource links.

### `get-canvas-kit-tokens`

Returns Canvas Kit design token documentation for migrating to `@workday/canvas-tokens-web`.

### `fetch-component-documentation-example`

Renders an interactive Canvas Kit component story inline for the user. Accepts a `story` parameter
with an enum of all available component slugs (e.g. `buttons`, `text-input`, `modal`, `tabs`, etc.).

The tool returns:

- The Storybook documentation URL
- A `resource_link` to `docs://examples/{story}` with documentation and code examples
- Story HTML via `_meta` for inline MCP App rendering

**LLMs should read the `docs://examples/{story}` resource first** for documentation and code
examples. Only call `fetch-component-documentation-example` to show the user a live interactive
preview.

## Resources

### `docs://upgrade-guides/*`

Markdown upgrade guides for Canvas Kit major versions (v9-v14).

### `docs://tokens/*`

Design token migration guides, color palette, roles, contrast, and scale documentation.

### `docs://examples/{slug}`

Markdown documentation and inline code examples for each component. These are extracted from the
MDX story files at build time, with `ExampleCodeBlock` references replaced by the actual source code
of each example.

### `ui://story/{slug}`

Interactive HTML previews of Canvas Kit components, served as MCP App resources
(`text/html;profile=mcp-app`). These are compiled from each component's Storybook MDX documentation
and include live, styled component examples.

## Contributing

Canvas Kit MCP has two exports:

- `dist/cli.js` -- a Node server that can be invoked via npx for local stdio
- `dist/index.js` -- module exports for extending the server or hosting with other transports

### Build Pipeline

The build runs in stages via `npm run build`:

1. **`build:discover`** -- scans `modules/react` and `modules/preview-react` for story files,
   extracts metadata (title, slug, Storybook URL, MDX path, prose with inlined code examples), and
   writes `lib/stories-config.json`
2. **`build:apps`** -- compiles each MDX story into a self-contained single-file HTML app using
   Vite, bundling React, Emotion, Canvas Tokens CSS, and lightweight Storybook stubs
3. **`build:copy`** -- copies static resources (upgrade guides, token docs) into `dist/lib`
4. **`build:types`** -- generates TypeScript declarations
5. **`build:mcp`** -- bundles `lib/index.ts` and `lib/cli.ts` with esbuild

### Key build files

- `build/vite-plugins.ts` -- shared Vite plugins (`canvasKitSourceResolver`) and
  `CANVAS_KIT_PACKAGE_MAP` for monorepo package resolution
- `build/discover-stories.ts` -- story discovery and `stories-config.json` generation
- `build/build-story-apps.ts` -- MDX-to-HTML compilation with Vite
- `build/harness.html` -- HTML template for MCP App stories (MCP bridge, base typography, font
  loading)
- `build/storybook-stubs/` -- lightweight replacements for Storybook components (`Meta`,
  `ExampleCodeBlock`, `SymbolDoc`, etc.) used in MDX files

### To test locally

#### MCP Inspector

The inspector requires Node >= 22 so you will need to temporarily switch:

```bash
nvm use 22
yarn build
npx @modelcontextprotocol/inspector node dist/cli.js
```

#### Local IDE Testing

Add an entry to your MCP servers configuration pointing to your local build:

```json
{
  "mcpServers": {
    "canvas-kit-mcp-local": {
      "command": "node",
      "args": ["/absolute/path/to/canvas-kit/modules/mcp/dist/cli.js"]
    }
  }
}
```

Rebuild the server after changes:

```bash
yarn build
```
