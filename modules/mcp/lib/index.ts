// @ts-nocheck
import {
  RESOURCE_MIME_TYPE,
  registerAppResource,
  registerAppTool,
} from '@modelcontextprotocol/ext-apps/server';
import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {z} from 'zod';

import packageJson from '../package.json';
import {
  ACCESSIBILITY_COMPONENTS,
  ACCESSIBILITY_SCENARIOS,
  resolveAccessibilityScenarioSlugs,
} from './accessibility-enums';
import fileNames from './config.json';
import storiesConfig from './stories-config.json';

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

  const accessibilityResourceMetadata: Record<
    string,
    {title: string; description: string; slug: string}
  > = {
    'accessibility/AccessibilityOverview.mdx': {
      title: 'Canvas Kit Accessibility Overview',
      description:
        'Core Canvas Kit accessibility principles and component usage guidance. Guidance only; no automated validation or compliance certification.',
      slug: 'overview',
    },
    'accessibility/PageStructure.mdx': {
      title: 'Canvas Kit Page Structure Accessibility',
      description:
        'Guidance for landmarks, headings, navigation, and logical focus order in Canvas Kit applications.',
      slug: 'page-structure',
    },
    'accessibility/TablesAdvanced.mdx': {
      title: 'Canvas Kit Table Accessibility',
      description:
        'Guidance for semantic data tables, interactive tables, sorting, filtering, row selection, and table focus behavior.',
      slug: 'tables',
    },
    'accessibility/Popups.mdx': {
      title: 'Canvas Kit Popup and Overlay Accessibility',
      description:
        'Guidance for dialogs, modals, popups, menus, tooltips, focus management, dismissal, and reading order.',
      slug: 'popups',
    },
    'accessibility/AriaLiveRegions.mdx': {
      title: 'Canvas Kit ARIA Live Region Accessibility',
      description:
        'Guidance for announcing asynchronous status updates with polite and assertive live regions.',
      slug: 'aria-live',
    },
    'accessibility/Headers.mdx': {
      title: 'Canvas Kit Header Accessibility',
      description:
        'Guidance for accessible application headers, page headers, heading text, navigation, and header controls.',
      slug: 'headers',
    },
    'accessibility/SidePanel.mdx': {
      title: 'Canvas Kit Side Panel Accessibility',
      description:
        'Guidance for side panel semantics, focus behavior, naming, and overlay versus persistent panel patterns.',
      slug: 'side-panel',
    },
    'accessibility/WindowsHighContrastThemes.mdx': {
      title: 'Canvas Kit Windows High Contrast Accessibility',
      description:
        'Guidance for forced colors and Windows High Contrast themes, including focus, state, border, and icon visibility.',
      slug: 'windows-high-contrast',
    },
    'accessibility/TestingTableWithFormFields.mdx': {
      title: 'Canvas Kit Form Accessibility',
      description:
        'Guidance from existing Canvas Kit accessibility documentation for form fields in table contexts.',
      slug: 'forms',
    },
    'accessibility/WindowsHighContrastThemes.mdx#color-contrast': {
      title: 'Canvas Kit Color Contrast Accessibility',
      description:
        'Guidance from existing Canvas Kit accessibility documentation for contrast-sensitive UI behavior in high contrast themes.',
      slug: 'color-contrast',
    },
  };

  function getAccessibilityFileEntry(fileEntry: string | {source: string; slug: string}) {
    return typeof fileEntry === 'string'
      ? {
          source: fileEntry,
          slug: accessibilityResourceMetadata[fileEntry]?.slug,
        }
      : fileEntry;
  }

  function getAccessibilityResource(fileEntry: string | {source: string; slug: string}) {
    const entry = getAccessibilityFileEntry(fileEntry);
    const metadataKey =
      entry.slug === 'color-contrast' ? `${entry.source}#color-contrast` : entry.source;
    const metadata = accessibilityResourceMetadata[metadataKey];
    if (!metadata) {
      throw new Error(`${entry.source} is not a valid accessibility resource`);
    }

    return {
      ...metadata,
      mimeType: 'text/markdown',
      uri: `docs://accessibility/${entry.slug}`,
      contents: fs.readFileSync(path.resolve(__dirname, 'lib', entry.source), 'utf8'),
    };
  }

  /**
   * Metadata for agents about the resource files.
   */
  function getUpgradeGuideResource(fileName: string) {
    switch (fileName) {
      case 'upgrade-guides/9.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 9.0 Upgrade Guide',
          description: `# Canvas Kit 9.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v9.

In this release, we:
- introduced new Table component
- removed Drawer, Layout, Column, Stack, HStack, and VStack components
- removed focusRing and composeModelHooks utilities
- updated Button, Toast, and Collection components
- added depth token updates`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/9.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'upgrade-guides/10.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 10.0 Upgrade Guide',
          description: `# Canvas Kit 10.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v10.

In this release, we:
- introduced new styling package @workday/canvas-kit-styling
- removed CSS packages and useBanner
- deprecated Input Icon Container, Select Preview, Space Numbers, and Table
- updated space and depth tokens
- updated Button, Popups, and Select components`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/10.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'upgrade-guides/11.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 11.0 Upgrade Guide',
          description: `# Canvas Kit 11.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v11.

In this release, we:
- transitioned to new CSS variable-based styling approach
- introduced Canvas Tokens Web package for semantic tokens
- introduced new styling API for component styling
- deprecated Form Field Main, Label Text, Text Area Preview, Text Input Preview
- updated components to use CSS tokens`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/11.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
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
      case 'llm-style-props-migration.txt':
        return {
          title: 'Canvas Kit Style Props Migration Guide',
          description: `# Canvas Kit Style Props Migration Guide
Guide for migrating from Emotion's style props to @workday/canvas-kit-styling.
This migration improves performance, consistency, and maintainability by moving away from runtime styling to static CSS compilation.`,
          mimeType: 'text/plain',
          uri: 'docs://llm-style-props-migration',
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
      case 'upgrade-guides/15.0-UPGRADE-GUIDE.md':
        return {
          title: 'Canvas Kit 15.0 Upgrade Guide',
          description: `# Canvas Kit 15.0 Upgrade Guide
This guide contains an overview of the changes in Canvas Kit v15.

In this release, we:
- introduced new shape, size, gap, and padding tokens to our components
- deprecated old shape and space tokens
- introduced new tokens to our components`,
          mimeType: 'text/markdown',
          uri: 'docs://upgrade-guides/15.0-UPGRADE-GUIDE',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'theming.md':
        return {
          title: 'Canvas Kit Theming Guide',
          description: `# Canvas Kit Theming Guide
Comprehensive guide for theming Canvas Kit applications in v14.

Covers:
- Global theming with CSS variables at :root level (recommended approach)
- Scoped theming with CanvasProvider for specific sections
- CSS token structure: base tokens, brand tokens, and system tokens
- Dark mode implementation
- RTL support with CSS logical properties
- Migration from JavaScript theme objects to CSS variables
- Theming modals, dialogs, and popups
- Best practices for semantic token usage and accessibility`,
          mimeType: 'text/markdown',
          uri: 'docs://theming',
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
                audience: ['user', 'assistant'] as ('user' | 'assistant')[],
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
      case 'llm-token-migration-14.txt':
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
          uri: 'docs://llm-token-migration-14',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/v4/v4-token-migration.md':
        return {
          title: 'Canvas Kit v4 Token Migration Guide',
          description: `# Canvas Kit v4 Token Migration Guide
Complete migration guide from @workday/canvas-tokens-web v3 to v4. Includes:
- Extended alpha scales across base color palettes (A25, A50, A100, A200) and extended alpha range (A0-A975) for slate, neutral, and white palettes
- New magenta palette added to the color system
- Brand token updates with numerical naming (25, 50, 100, 200...900, 950, 975) replacing descriptive names (darkest, darker, dark, base, light, lighter, lightest)
- Brand common token updates: focus-outline → focus, error-inner → critical, alert-inner → caution.inner, alert-outer → caution.outer
- Comprehensive surface token system (system.color.surface.*) replacing color.bg.surface.* tokens for better UI component support
- New semantic tokens for size, space, shape, and breakpoints
- Focus, accent, and semantic token additions
- Complete deprecation mapping tables showing old tokens → new token replacements
- Migration examples and best practices for updating code from v3 to v4`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/v4/v4-token-migration',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/v4/opacity.md':
        return {
          title: 'Canvas Kit v4 Opacity Token Migration Guide',
          description: `# Canvas Kit v4 Opacity Token Migration Guide
Opacity tokens control transparency values for UI elements. Use them to create visual hierarchy, indicate states, and guide user focus.`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/v4/opacity',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/v4/shape.md':
        return {
          title: 'Canvas Kit v4 Shape Token Migration Guide',
          description: `# Canvas Kit v4 Shape Token Migration Guide
Shape tokens control border radius values for UI elements. Use them to create consistent rounded corners across components.`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/v4/shape',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/v4/size.md':
        return {
          title: 'Canvas Kit v4 Size Token Migration Guide',
          description: `# Canvas Kit v4 Size Token Migration Guide
Size tokens control the size of UI elements. Use them to create consistent sizes across components.`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/v4/size',
          contents: fs.readFileSync(path.resolve(__dirname, 'lib', fileName), 'utf8'),
        };
      case 'tokens/v4/space.md':
        return {
          title: 'Canvas Kit v4 Space Token Migration Guide',
          description: `# Canvas Kit v4 Space Token Migration Guide
Space tokens control the spacing of UI elements. Use them to create consistent spacing across components.`,
          mimeType: 'text/markdown',
          uri: 'docs://tokens/v4/space',
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

  fileNames.accessibilityFiles.forEach(fileName => {
    const resource = getAccessibilityResource(fileName);
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

  interface StoryConfig {
    title: string;
    storybookUrl: string;
    mdxPath: string;
    mdxProse: string;
    accessibilityProse?: string;
  }

  const stories = storiesConfig.stories as Record<string, StoryConfig>;
  const storySlugs: string[] = [];

  for (const [slug, story] of Object.entries(stories)) {
    const appPath = path.resolve(__dirname, 'apps', `${slug}.html`);
    const appExists = fs.existsSync(appPath);

    if (appExists) {
      storySlugs.push(slug);
      registerAppResource(
        server,
        story.title,
        `ui://story/${slug}`,
        {
          description: `Interactive preview of the ${story.title} Canvas Kit component`,
        },
        async (uri: URL) => ({
          contents: [
            {
              uri: uri.href,
              text: fs.readFileSync(appPath, 'utf8'),
              mimeType: RESOURCE_MIME_TYPE,
              _meta: {
                ui: {
                  csp: {
                    resourceDomains: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
                  },
                },
              },
            },
          ],
        })
      );
    }

    if (story.mdxProse) {
      server.registerResource(
        `${story.title} Documentation & Sample Code`,
        `docs://examples/${slug}`,
        {
          title: `${story.title} Documentation & Sample Code`,
          description: `Documentation and source code for all ${story.title} component examples.`,
          mimeType: 'text/markdown',
        },
        async (uri: URL) => ({
          contents: [
            {
              uri: uri.href,
              text: story.mdxProse,
            },
          ],
        })
      );
    }

    if (story.accessibilityProse?.trim()) {
      server.registerResource(
        `${story.title} Accessibility Guidance`,
        `docs://examples/${slug}/accessibility`,
        {
          title: `${story.title} Accessibility Guidance`,
          description: `Accessibility section extracted from the ${story.title} component documentation. Guidance only; this is not automated accessibility validation.`,
          mimeType: 'text/markdown',
        },
        async (uri: URL) => ({
          contents: [
            {
              uri: uri.href,
              text: story.accessibilityProse,
            },
          ],
        })
      );
    }
  }

  const getAccessibilityResourceBySlug = (slug: string) => {
    const fileName = fileNames.accessibilityFiles.find(file => {
      const resource = getAccessibilityResource(file);
      return resource.slug === slug;
    });

    if (!fileName) {
      throw new Error(`Accessibility resource not found for slug "${slug}"`);
    }

    return getAccessibilityResource(fileName);
  };

  server.registerTool(
    'get-accessibility-guidelines',
    {
      title: 'Get Canvas Kit Accessibility Guidelines',
      description:
        'Retrieve Canvas Kit accessibility guidance resources for a scenario, component, or both. This tool returns documentation links only; it does not scan code, test pages, certify WCAG conformance, or guarantee accessibility compliance.',
      inputSchema: z
        .object({
          component: z
            .enum(ACCESSIBILITY_COMPONENTS)
            .optional()
            .describe('Canvas Kit component or story slug to retrieve accessibility guidance for'),
          scenario: z
            .enum(ACCESSIBILITY_SCENARIOS)
            .optional()
            .describe('Accessibility scenario slug to retrieve guidance for'),
        })
        .refine(data => !!data.component || !!data.scenario, {
          message: 'At least one of "component" or "scenario" is required.',
        }),
      annotations: {
        readOnlyHint: true,
      },
    },
    async ({component, scenario}: {component?: string; scenario?: string}) => {
      const scenarioSlugs = resolveAccessibilityScenarioSlugs({component, scenario});
      const accessibilityResources = scenarioSlugs.map(slug => {
        const resource = getAccessibilityResourceBySlug(slug);
        return {
          uri: resource.uri,
          title: resource.title,
          description: resource.description,
        };
      });

      const componentStory = component ? stories[component] : null;
      const exampleDocumentation =
        component && componentStory?.mdxProse
          ? {
              uri: `docs://examples/${component}`,
              title: `${componentStory.title} Documentation & Sample Code`,
              description: `Documentation and code examples for ${componentStory.title}.`,
            }
          : null;
      const componentAccessibilityDocumentation =
        component && componentStory?.accessibilityProse?.trim()
          ? {
              uri: `docs://examples/${component}/accessibility`,
              title: `${componentStory.title} Accessibility Guidance`,
              description: `Accessibility section extracted from the ${componentStory.title} component documentation. Guidance only; this is not automated accessibility validation.`,
            }
          : null;

      const output = {
        component: component || null,
        scenario: scenario || null,
        scenarioSlugs,
        accessibilityResources,
        componentAccessibilityDocumentation,
        exampleDocumentation,
      };

      return {
        content: [
          {type: 'text' as const, text: JSON.stringify(output)},
          ...accessibilityResources.map(resource => ({
            type: 'resource_link' as const,
            uri: resource.uri,
            name: resource.title,
            mimeType: 'text/markdown',
            description: resource.description,
            annotations: {
              audience: ['user', 'assistant'] as ('user' | 'assistant')[],
            },
          })),
          ...(exampleDocumentation
            ? [
                {
                  type: 'resource_link' as const,
                  uri: exampleDocumentation.uri,
                  name: exampleDocumentation.title,
                  mimeType: 'text/markdown',
                  description: exampleDocumentation.description,
                  annotations: {
                    audience: ['user', 'assistant'] as ('user' | 'assistant')[],
                  },
                },
              ]
            : []),
          ...(componentAccessibilityDocumentation
            ? [
                {
                  type: 'resource_link' as const,
                  uri: componentAccessibilityDocumentation.uri,
                  name: componentAccessibilityDocumentation.title,
                  mimeType: 'text/markdown',
                  description: componentAccessibilityDocumentation.description,
                  annotations: {
                    audience: ['user', 'assistant'] as ('user' | 'assistant')[],
                  },
                },
              ]
            : []),
        ],
        structuredContent: output,
      };
    }
  );

  const storyViewerPath = path.resolve(__dirname, 'apps', 'story-viewer.html');
  if (storySlugs.length > 0 && fs.existsSync(storyViewerPath)) {
    const slugEnum = storySlugs as [string, ...string[]];

    registerAppResource(
      server,
      'Canvas Kit Story Viewer',
      'ui://story-viewer',
      {
        description: 'Wrapper app that renders Canvas Kit component story previews.',
      },
      async (uri: URL) => ({
        contents: [
          {
            uri: uri.href,
            text: fs.readFileSync(storyViewerPath, 'utf8'),
            mimeType: RESOURCE_MIME_TYPE,
            _meta: {
              ui: {
                csp: {
                  resourceDomains: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
                },
              },
            },
          },
        ],
      })
    );

    const fetchStoryHandler = async ({story}: {story: string}) => {
      const config = stories[story];
      if (!config) {
        throw new Error(`Unknown story "${story}". Valid stories: ${storySlugs.join(', ')}`);
      }
      const appPath = path.resolve(__dirname, 'apps', `${story}.html`);
      const storyHtml = fs.readFileSync(appPath, 'utf8');
      const hasDocs = !!config.mdxProse;
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              displayGuide:
                'Present the Storybook URL as a markdown link. If you need code examples, read the resource_link.',
              title: config.title,
              storybookUrl: config.storybookUrl,
            }),
          },
          ...(hasDocs
            ? [
                {
                  type: 'resource_link' as const,
                  uri: `docs://examples/${story}`,
                  name: `${config.title} Documentation & Sample Code`,
                  mimeType: 'text/markdown',
                  description: `Documentation and code examples for ${config.title}. Read this if you need to write code.`,
                },
              ]
            : []),
        ],
        structuredContent: {
          storyHtml,
        },
      };
    };

    registerAppTool(
      server,
      'fetch-component-documentation-example',
      {
        title: 'Fetch Canvas Kit Component Documentation and Storybook example',
        description:
          'Renders an interactive Canvas Kit component story inline for the user to see.\n\n' +
          'Before Calling:\n' +
          '1. Read the docs://examples/{story} resource for documentation and code examples\n' +
          '2. Only call this tool if the user needs to see the documentation or code examples\n' +
          '3. Do not call this tool just to learn about a component — read the resource instead',
        inputSchema: {
          story: z.enum(slugEnum).describe('The component story slug to preview'),
        },
        annotations: {
          readOnlyHint: true,
        },
        _meta: {
          ui: {resourceUri: 'ui://story-viewer'},
        },
      },
      fetchStoryHandler
    );
  }

  return server;
}
