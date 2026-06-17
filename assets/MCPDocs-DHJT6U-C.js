import{j as e}from"./jsx-runtime-Bu6AqWCO.js";import{useMDXComponents as i}from"./index-3YbjYt95.js";import{ae as o}from"./index-PFj4iSNn.js";import"./index-IfJi-UCQ.js";import"./iframe-D2NFHvK2.js";import"../sb-preview/runtime.js";import"./index-BDZ5T_cP.js";import"./index-CDT9hUPM.js";import"./index-BfFTulA3.js";import"./index-Rq9y6XjC.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"AI For LLMs/MCP Docs"}),`
`,e.jsx(n.h1,{id:"canvas-kit-mcp",children:"Canvas Kit MCP"}),`
`,e.jsxs(n.p,{children:["This Model Context Protocol (MCP) server exposes Canvas Kit ",e.jsx(n.strong,{children:"upgrade guides"}),", ",e.jsx(n.strong,{children:"design token"})," documentation, and ",e.jsx(n.strong,{children:"per-component docs with sample code"})," (plus optional interactive previews) to AI assistants."]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#installation",children:"Installation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#cursor-quick-install",children:"Cursor Quick Install"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#other-ides-windsurf-vs-code-etc",children:"Other IDEs (Windsurf, VS Code, etc.)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#explicit-node-path-nvm--gui-editors",children:"Explicit Node path (nvm / GUI editors)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#troubleshooting-stale-npx-installs",children:"Troubleshooting: stale npx installs"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#tools",children:"Tools"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#get-canvas-kit-upgrade-guides",children:e.jsx(n.code,{children:"get-canvas-kit-upgrade-guides"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#get-canvas-kit-tokens",children:e.jsx(n.code,{children:"get-canvas-kit-tokens"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fetch-component-documentation-example",children:e.jsx(n.code,{children:"fetch-component-documentation-example"})})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#upgrade-guides",children:"Upgrade Guides"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#token-documentation",children:"Token Documentation"})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#component-examples-docsexamplesslug",children:["Component examples (",e.jsx(n.code,{children:"docs://examples/{slug}"}),")"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"#interactive-story-previews-uistoryslug",children:["Interactive story previews (",e.jsx(n.code,{children:"ui://story/{slug}"}),")"]})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#how-assistants-should-use-tools-vs-resources",children:"How assistants should use tools vs resources"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#source-documentation",children:"Source Documentation"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#contributing",children:"Contributing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#testing-locally",children:"Testing Locally"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#mcp-inspector",children:"MCP Inspector"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"You can add this MCP server to Cursor, or other IDEs by following the instructions below."}),`
`,e.jsx(n.h3,{id:"cursor-quick-install",children:"Cursor Quick Install"}),`
`,e.jsx("a",{href:"https://cursor.com/en-US/install-mcp?name=canvas-kit-mcp&config=eyJjb21tYW5kIjoibnB4IC15IEB3b3JrZGF5L2NhbnZhcy1raXQtbWNwIn0%3D",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(prefers-color-scheme: dark)",srcset:"https://cursor.com/deeplink/mcp-install-light.svg"}),e.jsx("source",{media:"(prefers-color-scheme: light)",srcset:"https://cursor.com/deeplink/mcp-install-dark.svg"}),e.jsx("img",{src:"https://cursor.com/deeplink/mcp-install-dark.svg",alt:"Install MCP server in Cursor"})]})}),`
`,e.jsx(n.h3,{id:"other-ides-windsurf-vs-code-etc",children:"Other IDEs (Windsurf, VS Code, etc.)"}),`
`,e.jsx(n.p,{children:"Add to your MCP servers configuration file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "canvas-kit-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@workday/canvas-kit-mcp"
      ]
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:"Configuration file locations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cursor"}),": ",e.jsx(n.code,{children:"~/.cursor/mcp.json"})," (all projects) or ",e.jsx(n.code,{children:".cursor/mcp.json"})," at a repository root (project only); restart Cursor or reload MCP after changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Windsurf"}),": Settings → MCP Servers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"VS Code"}),": Cline/Continue extension settings"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The examples above use ",e.jsx(n.code,{children:'"command": "npx"'})," on purpose: they are short, copy-pasteable, and work when your editor inherits the same ",e.jsx(n.code,{children:"PATH"})," as your terminal (system Node, Homebrew, etc.)."]}),`
`,e.jsx(n.h3,{id:"explicit-node-path-nvm--gui-editors",children:"Explicit Node path (nvm / GUI editors)"}),`
`,e.jsxs(n.p,{children:["Cursor and other desktop apps are often ",e.jsx(n.strong,{children:"not"})," started from a login shell, so they do not load ",e.jsx(n.code,{children:"~/.zshrc"})," / ",e.jsx(n.code,{children:"~/.bashrc"}),". Tools installed with ",e.jsx(n.strong,{children:"nvm"}),", ",e.jsx(n.strong,{children:"fnm"}),", or similar then disappear from ",e.jsx(n.code,{children:"PATH"}),", and ",e.jsx(n.code,{children:'"command": "npx"'})," fails even though ",e.jsx(n.code,{children:"npx"})," works in Terminal."]}),`
`,e.jsxs(n.p,{children:["When Cursor’s MCP installer (or support) expands the config, you may see a resolved form like this — same package, but ",e.jsx(n.strong,{children:"absolute"})," paths to Node, npm’s ",e.jsx(n.code,{children:"npx-cli.js"}),", and a minimal ",e.jsx(n.code,{children:"PATH"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "canvas-kit-mcp": {
      "command": "/Users/you/.nvm/versions/node/v22.12.0/bin/node",
      "args": [
        "/Users/you/.nvm/versions/node/v22.12.0/lib/node_modules/npm/bin/npx-cli.js",
        "-y",
        "@workday/canvas-kit-mcp"
      ],
      "env": {
        "PATH": "/Users/you/.nvm/versions/node/v22.12.0/bin:/usr/bin:/bin:/usr/sbin:/sbin"
      }
    }
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Replace ",e.jsx(n.code,{children:"/Users/you/.nvm/versions/node/v22.12.0"})," with the ",e.jsx(n.strong,{children:"version root"})," for the Node you want MCP to use, for example ",e.jsx(n.code,{children:'dirname "$(dirname "$(command -v node)")"'}),". If you use ",e.jsx(n.code,{children:"nvm which current"}),", it returns the full path to the ",e.jsx(n.code,{children:"node"})," binary, so use its parent’s parent directory as the replacement value. JSON configs typically need ",e.jsx(n.strong,{children:"real absolute paths"}),", not ",e.jsx(n.code,{children:"~"}),"."]}),`
`,e.jsxs(n.p,{children:["The npm package scope is ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"@workday"})})," (all lowercase on npm)."]}),`
`,e.jsx(n.h3,{id:"troubleshooting-stale-npx-installs",children:"Troubleshooting: stale npx installs"}),`
`,e.jsxs(n.p,{children:["If MCP starts but behaves oddly, fails after an upgrade, or errors in ways that suggest an old cached copy of the package, clear ",e.jsx(n.strong,{children:"npx’s install cache"})," and restart the editor:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`rm -rf ~/.npm/_npx
`})}),`
`,e.jsxs(n.p,{children:["Then reload MCP or restart Cursor. As a broader step (optional), you can also run ",e.jsx(n.code,{children:"npm cache clean --force"}),"; that clears more of npm’s cache, not only npx."]}),`
`,e.jsx(n.h3,{id:"claude-code-cli",children:"Claude Code CLI"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`claude mcp add --scope project --transport stdio canvas-kit -- npx -y @workday/canvas-kit-mcp
`})}),`
`,e.jsx(n.h3,{id:"claude-desktop",children:"Claude Desktop"}),`
`,e.jsxs(n.p,{children:["Add to ",e.jsx(n.code,{children:"~/Library/Application Support/Claude/claude_desktop_config.json"})," (macOS):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "canvas-kit-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@workday/canvas-kit-mcp"
      ]
    }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"tools",children:"Tools"}),`
`,e.jsx(n.p,{children:"This MCP server provides the following tools:"}),`
`,e.jsx(n.h3,{id:"get-canvas-kit-upgrade-guides",children:e.jsx(n.code,{children:"get-canvas-kit-upgrade-guides"})}),`
`,e.jsx(n.p,{children:"Retrieves Canvas Kit version upgrade documentation covering major version migrations. This tool can help you upgrade to Canvas Kit v9 and up."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Upgrading Canvas Kit to a new major version"}),`
`,e.jsx(n.li,{children:"Understanding breaking changes between versions"}),`
`,e.jsx(n.li,{children:"Finding migration paths for deprecated components"}),`
`,e.jsx(n.li,{children:"Learning about new features and components"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," Links to upgrade guide resources including version-specific migration steps, deprecation notices, theming guides, and styling migration documentation."]}),`
`,e.jsx(n.h3,{id:"get-canvas-kit-tokens",children:e.jsx(n.code,{children:"get-canvas-kit-tokens"})}),`
`,e.jsxs(n.p,{children:["Retrieves Canvas Kit design token migration documentation for transitioning to the modern ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"})," package."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Migrating from old token systems to ",e.jsx(n.code,{children:"@workday/canvas-tokens-web"})]}),`
`,e.jsx(n.li,{children:"Converting deprecated color tokens to the new token system"}),`
`,e.jsx(n.li,{children:"Understanding token hierarchy: base tokens, system tokens, and brand tokens"}),`
`,e.jsx(n.li,{children:"Finding correct system token replacements"}),`
`,e.jsx(n.li,{children:"Learning token naming patterns and semantic color roles"}),`
`,e.jsx(n.li,{children:"Migrating spacing, shape, typography, opacity, and depth tokens"}),`
`,e.jsx(n.li,{children:"Ensuring WCAG accessibility compliance with color contrast requirements"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," Links to token documentation including migration guides, color palettes, color roles, contrast guidelines, and token system references."]}),`
`,e.jsx(n.h3,{id:"fetch-component-documentation-example",children:e.jsx(n.code,{children:"fetch-component-documentation-example"})}),`
`,e.jsxs(n.p,{children:["Opens a ",e.jsx(n.strong,{children:"Canvas Kit component"})," in Storybook (URL returned to the user) and returns metadata for assistants, including a link to the full markdown doc for that component."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"story"})," (required) — Component slug from the tool’s enum (e.g. ",e.jsx(n.code,{children:"buttons"}),", ",e.jsx(n.code,{children:"menu"}),", ",e.jsx(n.code,{children:"pill"}),", ",e.jsx(n.code,{children:"modal"}),", ",e.jsx(n.code,{children:"tabs"}),")."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Returns:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook URL"})," for the component’s docs page (shareable with humans)"]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"resource_link"})})," to ",e.jsx(n.code,{children:"docs://examples/{story}"})," — prose plus code examples (built from MDX + example sources)"]}),`
`,e.jsxs(n.li,{children:["Inline preview metadata for clients that support MCP App rendering (",e.jsx(n.code,{children:"text/html;profile=mcp-app"}),")"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use cases:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“Show me the Menu / Button / Modal docs” with a live doc link"}),`
`,e.jsxs(n.li,{children:["Driving the assistant toward the correct ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"docs://examples/{slug}"})})," resource for copy-pasteable samples"]}),`
`]}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources"}),`
`,e.jsx(n.p,{children:"The server exposes documentation resources in these categories:"}),`
`,e.jsx(n.h3,{id:"upgrade-guides",children:"Upgrade Guides"}),`
`,e.jsxs(n.p,{children:["URI prefix: ",e.jsx(n.code,{children:"docs://upgrade-guides/*"})]}),`
`,e.jsx(n.p,{children:"Version-specific migration documentation covering:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Breaking changes and deprecations"}),`
`,e.jsx(n.li,{children:"New components and features"}),`
`,e.jsxs(n.li,{children:["Styling system migrations (Emotion, CSS variables, ",e.jsx(n.code,{children:"@workday/canvas-kit-styling"}),")"]}),`
`,e.jsx(n.li,{children:"Theming and component refactoring"}),`
`,e.jsx(n.li,{children:"Accessibility improvements"}),`
`]}),`
`,e.jsx(n.h3,{id:"token-documentation",children:"Token Documentation"}),`
`,e.jsxs(n.p,{children:["URI prefix: ",e.jsx(n.code,{children:"docs://tokens/*"})]}),`
`,e.jsx(n.p,{children:"Design token migration and usage guides covering:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Token system migrations (v2 → v3 → v4)"}),`
`,e.jsx(n.li,{children:"Color palette and semantic color roles"}),`
`,e.jsx(n.li,{children:"Token naming conventions and hierarchy"}),`
`,e.jsx(n.li,{children:"Accessibility and contrast guidelines"}),`
`,e.jsx(n.li,{children:"Spacing, shape, size, opacity, and depth tokens"}),`
`,e.jsx(n.li,{children:"OKLCH color space implementation"}),`
`]}),`
`,e.jsxs(n.h3,{id:"component-examples-docsexamplesslug",children:["Component examples (",e.jsx(n.code,{children:"docs://examples/{slug}"}),")"]}),`
`,e.jsxs(n.p,{children:["Markdown documentation and ",e.jsx(n.strong,{children:"inline code"})," for each discovered component story. Content is produced at build time from MDX story files (with ",e.jsx(n.code,{children:"ExampleCodeBlock"})," replaced by real example source). Use these when implementing or explaining APIs."]}),`
`,e.jsxs(n.h3,{id:"interactive-story-previews-uistoryslug",children:["Interactive story previews (",e.jsx(n.code,{children:"ui://story/{slug}"}),")"]}),`
`,e.jsxs(n.p,{children:["Self-contained HTML apps for inline preview where the client supports MCP App resources (",e.jsx(n.code,{children:"text/html;profile=mcp-app"}),")."]}),`
`,e.jsx(n.p,{children:"All resources are available to AI assistants through MCP resource URIs."}),`
`,e.jsx(n.h2,{id:"how-assistants-should-use-tools-vs-resources",children:"How assistants should use tools vs resources"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Prefer reading ",e.jsx(n.code,{children:"docs://examples/{slug}"})]})," for prose and sample code when answering implementation questions."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Call ",e.jsx(n.code,{children:"fetch-component-documentation-example"})]})," when the user should see the Storybook page and/or an interactive preview — not as a substitute for reading the markdown resource when only code is needed."]}),`
`]}),`
`,e.jsx(n.h2,{id:"source-documentation",children:"Source Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Upgrade guides and token LLM docs"})," live under ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/mcp/docs/llm",rel:"nofollow",children:e.jsx(n.code,{children:"modules/docs/llm"})})," (upgrade guides, token guides, and other LLM-oriented files). Update those files and rebuild the MCP package to refresh bundled resources."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component example markdown"})," is generated from Canvas Kit story MDX and example files under ",e.jsx(n.code,{children:"modules/react"})," and ",e.jsx(n.code,{children:"modules/preview-react"})," via the MCP build (",e.jsx(n.code,{children:"build:discover"}),", ",e.jsx(n.code,{children:"build:apps"}),"). See ",e.jsx(n.a,{href:"https://github.com/Workday/canvas-kit/blob/master/modules/mcp/README.md",rel:"nofollow",children:e.jsx(n.code,{children:"modules/mcp/README.md"})})," for the pipeline."]}),`
`]}),`
`,e.jsx(n.h2,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.p,{children:"Canvas Kit MCP has two exports:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/cli.js"})," — Node server invoked via ",e.jsx(n.code,{children:"npx"})," for local stdio"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dist/index.js"})," — Module exports for extending the server or hosting with other transports"]}),`
`]}),`
`,e.jsx(n.h3,{id:"testing-locally",children:"Testing Locally"}),`
`,e.jsx(n.h4,{id:"mcp-inspector",children:"MCP Inspector"}),`
`,e.jsx(n.p,{children:"The inspector requires Node.js v22+:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`nvm use 22
yarn build
npx @modelcontextprotocol/inspector node dist/cli.js
`})}),`
`,e.jsxs(n.p,{children:["Run these commands from the ",e.jsx(n.code,{children:"modules/mcp"})," package after ",e.jsx(n.code,{children:"yarn build"}),"."]}),`
`,e.jsx(n.h4,{id:"local-ide-testing",children:"Local IDE Testing"}),`
`,e.jsx(n.p,{children:"Add an entry to your MCP servers configuration pointing to your local build:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "mcpServers": {
    "canvas-kit-mcp-local": {
      "command": "node",
      "args": [
        "/absolute/path/to/canvas-kit/modules/mcp/dist/cli.js"
      ]
    }
  }
}
`})}),`
`,e.jsx(n.p,{children:"Rebuild the server after changes:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run build
`})})]})}function m(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{m as default};
