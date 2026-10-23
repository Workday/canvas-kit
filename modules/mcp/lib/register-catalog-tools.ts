import type {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {z} from 'zod';

import {getComponent, searchComponents, searchIcons, validateTokens} from './catalog';
import type {ComponentCatalog, IconCatalog, TokenCatalog} from './catalog-types';
import {enrichComponentEntry, enrichIconEntry, enrichTokenValidation} from './catalog-verify';
import {
  TRACKED_CANVAS_PACKAGES,
  getInstallCommand,
  getRecommendedPackageVersion,
  resolveProjectContext,
} from './project-context';
import {finalizeToolResponse} from './tool-response';
import {getCanvasUpgradePath} from './upgrade-path';
import {validateCanvasCode} from './validate-code';

export interface CatalogBundle {
  componentCatalog: ComponentCatalog;
  tokenCatalog: TokenCatalog;
  iconCatalog: IconCatalog;
}

function getCatalogPackageVersions(catalogs: CatalogBundle) {
  return {
    tokens:
      catalogs.tokenCatalog.meta.sources.find(source => source.channel === 'production')?.version ??
      undefined,
    icons:
      catalogs.iconCatalog.meta.sources.find(
        source =>
          source.package === '@workday/canvas-system-icons-web' && source.channel === 'vision'
      )?.version ?? undefined,
  };
}

export function registerCatalogTools(
  server: McpServer,
  indexVersion: string,
  catalogs: CatalogBundle
): void {
  const {componentCatalog, tokenCatalog, iconCatalog} = catalogs;
  const catalogPackageVersions = getCatalogPackageVersions(catalogs);

  server.registerTool(
    'search-canvas-components',
    {
      title: 'Search Canvas Components',
      description:
        'Search the Canvas Kit component catalog. Results are verified against the consumer project node_modules when a project root is detected.',
      inputSchema: z.object({
        query: z.string().describe('Component name, slug, or alias to search for'),
        limit: z.number().int().min(1).max(25).optional().describe('Maximum results (default 10)'),
        projectPath: z
          .string()
          .optional()
          .describe('Optional absolute path to the consumer project root'),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({query, limit, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const result = searchComponents(componentCatalog, query, limit);
      const output = {
        ...result,
        results: result.results.map(entry => enrichComponentEntry(entry, projectContext)),
      };

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'get-canvas-component',
    {
      title: 'Get Canvas Component',
      description:
        'Look up a Canvas Kit component by name or slug. Includes availability against the installed consumer project.',
      inputSchema: z.object({
        query: z.string().describe('Component name, slug, or alias'),
        projectPath: z.string().optional().describe('Optional consumer project root'),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({query, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const result = getComponent(componentCatalog, query);
      const output = {
        ...result,
        match: result.match ? enrichComponentEntry(result.match, projectContext) : undefined,
        suggestions: result.suggestions.map(entry => enrichComponentEntry(entry, projectContext)),
      };

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'validate-canvas-tokens',
    {
      title: 'Validate Canvas Tokens',
      description:
        'Validate design token keys against the indexed catalog and installed @workday/canvas-tokens-web package.',
      inputSchema: z.object({
        tokens: z.array(z.string()).min(1).describe('Token keys to validate'),
        channel: z
          .enum(['production', 'vision'])
          .optional()
          .describe('Token channel (default production)'),
        projectPath: z.string().optional().describe('Optional consumer project root'),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({tokens, channel, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const result = validateTokens(tokenCatalog, tokens, channel ?? 'production');
      const output = {
        ...result,
        valid: result.valid.map(item => ({
          ...enrichTokenValidation(item.entry, projectContext),
          token: item.token,
        })),
        invalid: result.invalid,
      };

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'search-canvas-icons',
    {
      title: 'Search Canvas Icons',
      description:
        'Search @workday/canvas-system-icons-web exports. Verifies icon exports against the installed package typings.',
      inputSchema: z.object({
        query: z.string().describe('Icon name, export, or migration alias'),
        limit: z.number().int().min(1).max(25).optional(),
        projectPath: z.string().optional(),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({query, limit, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const result = searchIcons(iconCatalog, query, limit);
      const output = {
        ...result,
        results: result.results.map(entry => enrichIconEntry(entry, projectContext)),
      };

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'get-canvas-project-context',
    {
      title: 'Get Canvas Project Context',
      description:
        'Report the detected consumer project root, installed Canvas packages, MCP index version, and version drift.',
      inputSchema: z.object({
        projectPath: z.string().optional().describe('Optional consumer project root'),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });

      const missingRecommended = TRACKED_CANVAS_PACKAGES.filter(packageName => {
        const info = projectContext.packages[packageName];
        return !info.installed && packageName !== '@workday/canvas-kit-styling';
      }).map(packageName => {
        const version = getRecommendedPackageVersion(
          packageName,
          indexVersion,
          catalogPackageVersions
        );
        return {
          packageName,
          installCommand: getInstallCommand(packageName, version),
        };
      });

      const output = {
        projectContext,
        missingRecommended,
      };

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'validate-canvas-code',
    {
      title: 'Validate Canvas Code',
      description:
        'Validate a code snippet or file path for unresolvable Canvas imports, deprecated tokens, and raw hex colors.',
      inputSchema: z.object({
        code: z.string().optional().describe('Source code snippet to validate'),
        filePath: z
          .string()
          .optional()
          .describe('Path to a source file relative to the project root or absolute'),
        projectPath: z.string().optional(),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({code, filePath, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const validation = validateCanvasCode({
        code,
        filePath,
        projectContext,
        componentCatalog,
        tokenCatalog,
        iconCatalog,
      });
      const output = {validation};

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );

  server.registerTool(
    'get-canvas-upgrade-path',
    {
      title: 'Get Canvas Upgrade Path',
      description:
        'Return upgrade guides, codemods, and notes scoped to the detected installed Canvas Kit version.',
      inputSchema: z.object({
        targetVersion: z
          .string()
          .optional()
          .describe('Target Canvas Kit version (defaults to MCP index version)'),
        projectPath: z.string().optional(),
      }),
      annotations: {readOnlyHint: true},
    },
    async ({targetVersion, projectPath}) => {
      const projectContext = await resolveProjectContext({
        server,
        indexVersion,
        projectPath,
      });
      const upgradePath = getCanvasUpgradePath({
        fromVersion: projectContext.drift.installedVersion,
        toVersion: targetVersion ?? indexVersion,
      });
      const output = {upgradePath};

      return finalizeToolResponse(server, indexVersion, output, [], projectPath, projectContext);
    }
  );
}
