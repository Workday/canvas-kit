import * as fs from 'node:fs';
import * as path from 'node:path';

import type {ComponentCatalog, IconCatalog, TokenCatalog} from './catalog-types';
import {verifyTokenInProject} from './catalog-verify';
import type {ProjectContext} from './project-context';

const CANVAS_IMPORT_PATTERN =
  /(?:import|export)\s+(?:type\s+)?(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)\s+from\s+['"](@workday\/canvas-[^'"]+)['"]/g;
const RAW_HEX_PATTERN = /#[0-9a-fA-F]{3,8}\b/g;
const TOKEN_PATTERN = /\b(?:system|brand|base)\.[a-z0-9]+(?:\.[a-z0-9-]+)+\b/g;

export interface CodeValidationIssue {
  type:
    | 'unresolvable-import'
    | 'deprecated-export'
    | 'deprecated-prop'
    | 'deprecated-token'
    | 'unverified-token'
    | 'raw-hex'
    | 'invented-identifier';
  message: string;
  line?: number;
  value?: string;
  suggestion?: string;
}

export interface CodeValidationResult {
  issues: CodeValidationIssue[];
  summary: {
    issueCount: number;
    unresolvableImports: number;
    deprecatedTokens: number;
    rawHexColors: number;
  };
}

function resolveImportTarget(projectRoot: string, importPath: string): boolean {
  if (!importPath.startsWith('@workday/canvas-')) {
    return true;
  }

  const segments = importPath.split('/');
  const packageOnly = segments.slice(0, 2).join('/');
  const subpathParts = segments.slice(2);

  const base = path.join(projectRoot, 'node_modules', packageOnly);
  if (!fs.existsSync(base)) {
    return false;
  }

  if (subpathParts.length === 0) {
    return true;
  }

  const subpath = subpathParts.join('/');
  const candidates = [
    path.join(base, subpath),
    `${path.join(base, subpath)}.js`,
    `${path.join(base, subpath)}.ts`,
    path.join(base, subpath, 'index.js'),
    path.join(base, subpath, 'index.ts'),
  ];

  return candidates.some(candidate => fs.existsSync(candidate));
}

function readSource(input: {code?: string; filePath?: string}, projectRoot: string | null): string {
  if (input.code?.trim()) {
    return input.code;
  }

  if (input.filePath && projectRoot) {
    const resolved = path.isAbsolute(input.filePath)
      ? input.filePath
      : path.join(projectRoot, input.filePath);

    if (fs.existsSync(resolved)) {
      return fs.readFileSync(resolved, 'utf8');
    }
  }

  return '';
}

export function validateCanvasCode(options: {
  code?: string;
  filePath?: string;
  projectContext: ProjectContext;
  componentCatalog: ComponentCatalog;
  tokenCatalog: TokenCatalog;
  iconCatalog: IconCatalog;
}): CodeValidationResult {
  const {projectContext, componentCatalog, tokenCatalog} = options;
  const source = readSource(
    {code: options.code, filePath: options.filePath},
    projectContext.projectRoot
  );
  const issues: CodeValidationIssue[] = [];

  if (!source.trim()) {
    return {
      issues: [
        {
          type: 'invented-identifier',
          message: 'No code snippet or readable file path was provided.',
        },
      ],
      summary: {
        issueCount: 1,
        unresolvableImports: 0,
        deprecatedTokens: 0,
        rawHexColors: 0,
      },
    };
  }

  const lines = source.split('\n');
  const projectRoot = projectContext.projectRoot;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const lineNumber = lineIndex + 1;

    for (const match of line.matchAll(CANVAS_IMPORT_PATTERN)) {
      const importPath = match[1];
      if (projectRoot && !resolveImportTarget(projectRoot, importPath)) {
        issues.push({
          type: 'unresolvable-import',
          message: `Import "${importPath}" does not resolve in the consumer project's node_modules.`,
          line: lineNumber,
          value: importPath,
        });
      }

      const component = componentCatalog.components.find(
        entry => entry.canonicalImport === importPath
      );
      if (component?.deprecated) {
        issues.push({
          type: 'deprecated-export',
          message: `Component import "${importPath}" is deprecated in the MCP catalog.`,
          line: lineNumber,
          value: importPath,
        });
      }
    }

    for (const match of line.matchAll(RAW_HEX_PATTERN)) {
      issues.push({
        type: 'raw-hex',
        message: `Raw hex color "${match[0]}" detected. Prefer Canvas design tokens.`,
        line: lineNumber,
        value: match[0],
      });
    }

    for (const match of line.matchAll(TOKEN_PATTERN)) {
      const token = match[0];
      const entry = tokenCatalog.tokens.find(
        candidate => candidate.key === token && candidate.channel === 'production'
      );

      if (!entry) {
        issues.push({
          type: 'invented-identifier',
          message: `Token "${token}" was not found in the indexed token catalog.`,
          line: lineNumber,
          value: token,
        });
        continue;
      }

      if (entry.deprecated) {
        issues.push({
          type: 'deprecated-token',
          message: `Token "${token}" is deprecated.`,
          line: lineNumber,
          value: token,
          suggestion:
            token === 'system.space.x4'
              ? 'system.gap.md'
              : token.startsWith('system.space.')
                ? 'system.gap.*'
                : undefined,
        });
      } else if (projectRoot && !verifyTokenInProject(entry, projectContext)) {
        issues.push({
          type: 'unverified-token',
          message: `Token "${token}" is indexed but could not be verified in the installed @workday/canvas-tokens-web package.`,
          line: lineNumber,
          value: token,
        });
      }
    }
  }

  return {
    issues,
    summary: {
      issueCount: issues.length,
      unresolvableImports: issues.filter(issue => issue.type === 'unresolvable-import').length,
      deprecatedTokens: issues.filter(issue => issue.type === 'deprecated-token').length,
      rawHexColors: issues.filter(issue => issue.type === 'raw-hex').length,
    },
  };
}
