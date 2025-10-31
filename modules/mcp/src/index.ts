import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

import packageJson from '../package.json';
import fileNames from '../lib/config.json';
import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getServer() {
  const mcpVersion = packageJson.version;
  const mcpName = packageJson.name;

  const server = new McpServer(
    {
      name: mcpName,
      version: mcpVersion,
    },
    {
      capabilities: {
        tools: {},
        resources: {},
      },
    }
  );

  /**
   * Metadata for agents about the resource files.
   */
  function getUpgradeGuideResource(fileName: string) {
    switch (fileName) {
      case 'upgrade-guides/12.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 12.0 Upgrade Guide',
          description: `# Canvas Kit 12.0 Upgrade Guide
Canvas Kit is transitioning into a new way of styling.
Theming and building an in sync Canvas Kit CSS has been at the top of our minds.
We've started using our new Canvas Tokens Web package to take advantage of CSS variables and provide semantic tokens that can translate to theming components.`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/12.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'upgrade-guides/13.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 13.0 Upgrade Guide',
          description: `# Canvas Kit 13.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v13.

In this release, we:
- refactored components to use our Canvas tokens and styling API
- made several accessibility improvements
- updated our brand logos
- improved our infrastructure`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/13.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      default:
        throw new Error(`${fileName} is not a valid resource`);
    }
  }

  fileNames.upgradeGuideFiles.forEach(fileName => {
    const resource = getUpgradeGuideResource(fileName);
    if (!resource || !resource.contents) {
      throw new Error(`Resource ${fileName} not found`);
    }
    server.registerResource(
      resource.title,
      resource.uri,
      {
        title: resource.title,
        description: resource.description,
        mimeType: resource.mimeType,
      },
      async (uri: URL) => ({
        contents: [
          {
            uri: uri.href,
            text: resource.contents,
          },
        ],
      })
    );
  });

  server.registerTool(
    'get-canvas-kit-upgrade-guides',
    {
      title: 'Get Canvas Kit Upgrade Guides',
      description: 'Retrieve the Canvas Kit Upgrade Guide documentation.',
      annotations: {
        readOnlyHint: true,
      },
    },
    async () => {
      const output = {
        count: fileNames.upgradeGuideFiles.length,
        files: fileNames.upgradeGuideFiles.map(fileName => {
          const resource = getUpgradeGuideResource(fileName);
          if (!resource) {
            throw new Error(`Resource ${fileName} not found`);
          }
          return {
            name: resource.title,
            uri: resource.uri,
          };
        }),
      };
      return {
        content: [
          {type: 'text', text: JSON.stringify(output)},
          ...fileNames.upgradeGuideFiles.map(fileName => {
            const resource = getUpgradeGuideResource(fileName);
            if (!resource) {
              throw new Error(`Resource ${fileName} not found`);
            }
            return {
              type: 'resource_link' as const,
              uri: resource.uri,
              name: resource.title,
              mimeType: resource.mimeType,
              description: resource.description,
              annotations: {
                audience: ['user', 'assistant'],
              },
            };
          }),
        ],
        structuredContent: output,
      };
    }
  );
  return server;
}
