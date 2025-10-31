# Canvas Kit MCP

Our MCP server provides resources to help you upgrade Canvas Kit.

## Cursor Quick Install

<a href="https://cursor.com/en-US/install-mcp?name=canvas-kit-mcp&config=eyJjb21tYW5kIjoibnB4IC15IEB3b3JrZGF5L2NhbnZhcy1raXQtbWNwIn0%3D">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cursor.com/deeplink/mcp-install-light.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://cursor.com/deeplink/mcp-install-dark.svg">
    <img src="https://cursor.com/deeplink/mcp-install-dark.svg" alt="Install MCP server in Cursor">
  </picture>
</a>

---

## Not running cursor?

You will need to check how to install MCP servers, but the config will look something like:

```json
{
  "mcpServers": {
    {
      "canvas-kit-mcp": {
        "command": "npx",
        "args": [
          "-y",
          "@workday/canvas-kit-mcp"
        ]
      }
    }
  }
}
```

## Contributing

Canvas Kit MCP is has two exports.

`src/cli.js` is a node server that can be invoked via npx for local stdio.

`src/index.js` provides low level module exports. You can use these extend the sever or host it
using other transports.

### To test locally

#### MCP Inspector

The inspector requires node > 22 so you will need to temporary switch:

```bash
nvm use 22
yarn build
npx @modelcontextprotocol/inspector node dist/cli.js"
```

#### Local IDE

Add an entry to your MCP servers list:

```json
{
  "mcpServers": {
    {
      "canvas-kit-mcp": {
        "command": "node",
        "args": [
          "~/path/to/canvas/kit/modules/mcp/dist/cli.js"
        ]
      }
    }
  }
}
```
