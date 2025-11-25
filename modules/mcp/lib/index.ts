// @ts-nocheck
import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

import packageJson from '../package.json';
import fileNames from './config.json';
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
      case 'llm-txt/llm-token-migration-14.txt':
        return {
          title: 'Canvas Kit Token Migration Guide',
          description: `# Canvas Kit Token Migration Guide
Guide for migrating from @workday/canvas-kit-react/tokens to @workday/canvas-tokens-web.
This migration enables better theming capabilities, improved performance, and a more standardized approach to styling.`,
          mimeType: 'text/plain',
          uri: 'docs://llm-txt/llm-token-migration-14',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'llm-txt/llm-style-props-migration.txt':
        return {
          title: 'Canvas Kit Style Props Migration Guide',
          description: `# Canvas Kit Style Props Migration Guide
Guide for migrating from Emotion's style props to @workday/canvas-kit-styling.
This migration improves performance, consistency, and maintainability by moving away from runtime styling to static CSS compilation.`,
          mimeType: 'text/plain',
          uri: 'docs://llm-txt/llm-style-props-migration',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'upgrade-guides/14.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 14.0 Upgrade Guide',
          description: `# Canvas Kit 14.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v14.

In this release, we:
- introduced Workday's new brand direction with a new color palette
- made styling updates to our components
- improved token system and theming capabilities`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/14.0-UPGRADE-GUIDE',
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
  /**
   * Metadata for agents about the token documentation files.
   */
  function getTokenResource(fileName: string) {
    switch (fileName) {
      case 'tokens/token-migration.md':
        return {
          title: 'Canvas Kit Token Migration v2 to v3',
          description: `# Design Token Migration: v2 to v3
Comprehensive mapping of deprecated tokens to new values. Includes:
- Old fruit-named palette tokens (cinnamon, cantaloupe, blueberry, etc.) mapped to new color family names (red, amber, blue, etc.)
- System token replacements for semantic color usage (sys.color.bg.*, sys.color.fg.*, sys.color.border.*)
- Migration phases: Assessment, Replacement, Testing, Documentation
- Accessibility considerations for OKLCH color space changes`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/token-migration',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/color-palette.md':
        return {
          title: 'Canvas Kit Color Palette',
          description: `# Canvas Kit Color Palette
Overview of Workday's shared color palette. Includes:
- Global palette with 11 colors and 2 neutrals (Slate, Neutral), each with 13 shades
- OKLCH color space for perceptual balance
- Accent colors, neutral colors, and alpha colors guidance
- Token hierarchy: Base tokens (raw values), Brand tokens (tenant theming), System tokens (semantic roles)
- Color roles mapping (primary, positive, caution, critical, etc.)`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/color-palette',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/color-tokens.md':
        return {
          title: 'Canvas Kit Color Tokens',
          description: `# Canvas Kit Color Tokens
Design tokens naming system and usage guide. Includes:
- Token naming pattern: [property].[role].[modifier]
- Properties: bg, fg, text, border, icon, shadow, static
- Roles: default, primary, positive, critical, caution, info, alt, muted, contrast, ai, focus, disabled, inverse, hint, input, container, divider, transparent, translucent, overlay
- Modifiers: softest, softer, soft, default, strong, stronger, strongest
- Theming and platform adaptation guidance`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/color-tokens',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/color-contrast.md':
        return {
          title: 'Canvas Kit Color Contrast',
          description: `# Canvas Kit Color Contrast
Accessibility contrast guidelines for color pairings. Includes:
- WCAG 2.1 compliance requirements (4.5:1 for text, 3:1 for non-text, 7:1 for AAA)
- Step difference framework: 500+ for AA text, 400+ for AA non-text, 700+ for AAA
- Practical contrast tables for background/foreground combinations
- High contrast (7:1+) guidelines for low vision support`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/color-contrast',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/color-roles.md':
        return {
          title: 'Canvas Kit Color Roles',
          description: `# Canvas Kit Color Roles
Semantic color role system for consistent UI styling. Includes:
- Role categories: Interactive (primary, focus), Status (positive, caution, critical), Hierarchy (alt, muted, contrast), Functional (disabled, translucent, overlay)
- Property types: bg, fg, text, icon, border, shadow, static, brand
- Usage guidance with Do's and Don'ts for each role
- Modifier scale: softest → softer → soft → default → strong → stronger → strongest`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/color-roles',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/color-scale.md':
        return {
          title: 'Canvas Kit Color Scale',
          description: `# Canvas Kit Color Scale
Tonal scale system from 0 (lightest) to 1000 (darkest). Includes:
- Step guidelines: 0 (page bg), 50-100 (subtle bg), 200-300 (borders), 400-500 (interactive), 600-700 (accents), 800-950 (text), 975-1000 (dark mode)
- Perceptual uniformity across color families using OKLCH
- Amber exception: chroma peaks at 300-400 instead of 500
- Practical examples for each step range`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/color-scale',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'llm-txt/llm-token-migration-14.txt':
        return {
          title: 'Canvas Kit v14 Token Migration Guide',
          description: `# Canvas Kit v14 Token Migration Guide
Complete migration guide from @workday/canvas-kit-react/tokens to @workday/canvas-tokens-web. Includes:
- Installation and CSS variable imports setup
- Color token mapping tables (old fruit names → new base tokens → system tokens)
- Brand color migration from Emotion theme to CSS variables
- Spacing tokens (space.s → system.space.x4), shape tokens (borderRadius → system.shape)
- Typography tokens (type.levels → system.type), depth tokens (depth → system.depth)
- Complete before/after code examples for cards, forms, and buttons
- Best practices and common pitfalls`,
          mimeType: 'text/plain',
          uri: 'docs://llm-txt/llm-token-migration-14',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      default:
        throw new Error(`${fileName} is not a valid token resource`);
    }
  }

  fileNames.tokenFiles.forEach(fileName => {
    const resource = getTokenResource(fileName);
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
    'get-canvas-kit-tokens',
    {
      title: 'Get Canvas Kit Tokens',
      description: `Retrieve Canvas Kit design token documentation for migrating from old tokens to the new @workday/canvas-tokens-web system.

Use this tool when:
- Migrating from @workday/canvas-kit-react/tokens to @workday/canvas-tokens-web
- Converting old fruit-named colors (cinnamon, blueberry, cantaloupe) to new token system
- Understanding the token hierarchy: base tokens, system tokens, and brand tokens
- Finding the correct system token replacement (sys.color.bg.*, sys.color.fg.*, sys.color.border.*)
- Learning the token naming pattern: [property].[role].[modifier]
- Understanding color roles (primary, positive, caution, critical, muted, etc.)
- Migrating spacing (space.s → system.space.x4), shape, typography, or depth tokens
- Ensuring WCAG accessibility compliance with color contrast requirements

Returns links to token documentation resources including migration guides, color palettes, color roles, contrast guidelines, and complete v14 migration examples.`,
      annotations: {
        readOnlyHint: true,
      },
    },
    async () => {
      const output = {
        count: fileNames.tokenFiles.length,
        files: fileNames.tokenFiles.map(fileName => {
          const resource = getTokenResource(fileName);
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
          ...fileNames.tokenFiles.map(fileName => {
            const resource = getTokenResource(fileName);
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
