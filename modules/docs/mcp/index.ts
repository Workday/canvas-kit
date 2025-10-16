import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {bestPracticesResourcesFiles, type BestPracticesResourceFile} from './config.js';

// MDX content will be injected at build time
declare const MDX_CONTENT: Record<string, string>;

function getFilesContents(fileName: BestPracticesResourceFile): string {
  if (typeof MDX_CONTENT !== 'undefined' && MDX_CONTENT[fileName]) {
    return MDX_CONTENT[fileName];
  }

  throw new Error(`MDX content for ${fileName} not found. Make sure to run the build process.`);
}

function getServer() {
  const mcpVersion = '13';
  const mcpName = `@workday/canvas-kit-docs-mcp`;

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

  function getBestPracticesResource(fileName: BestPracticesResourceFile) {
    switch (fileName) {
      case 'COMPOUND_COMPONENTS.mdx':
        return {
          title: 'What is a compound component?',
          description:
            'Compound components is a pattern where higher level components are composed using smaller components, and you retain access to all the semantic elements of the higher level component. This document will go through the basics of compound components.',
          mimeType: 'text/markdown',
          uri: 'docs://what-is-a-compound-component',
          contents: getFilesContents(fileName),
        };
      case 'CREATING_COMPOUND_COMPONENTS.mdx':
        return {
          title: 'Creating Compound Components',
          description:
            'This document will go through building a simplified Disclosure component to help solidify the concepts of compound components. We will cover Non Coordinated Components, Models, Container Components, Sub-components, and Model Composition.',
          mimeType: 'text/markdown',
          uri: 'docs://creating-compound-components',
          contents: getFilesContents(fileName),
        };
      default:
        fileName satisfies never;
        throw new Error(`${fileName} is not a valid best practices resource`);
    }
  }

  bestPracticesResourcesFiles.forEach(fileName => {
    const resource = getBestPracticesResource(fileName);
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
    'get-canvas-kit-best-practices',
    {
      title: 'Get Canvas Kit Best Practices',
      description: 'Retrieve the Canvas Kit Best Practice documentation.',
      annotations: {
        readOnlyHint: true,
      },
    },
    async () => {
      const output = {
        count: bestPracticesResourcesFiles.length,
        files: bestPracticesResourcesFiles.map(fileName => {
          const resource = getBestPracticesResource(fileName);
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
          ...bestPracticesResourcesFiles.map(fileName => {
            const resource = getBestPracticesResource(fileName);
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

// Export a singleton server instance for easy import
export const server = getServer();
