import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

import type {
  CatalogMeta,
  ComponentCatalog,
  ComponentCatalogEntry,
  IconCatalog,
  IconCatalogEntry,
  TokenCatalog,
  TokenCatalogEntry,
} from '../lib/catalog-types';
import {CANVAS_KIT_PACKAGE_MAP} from './vite-plugins';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_ROOT = path.resolve(__dirname, '../../..');
const MCP_ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.resolve(MCP_ROOT, 'lib');
const RELEASE_CHANNEL = process.env.CANVAS_KIT_RELEASE_CHANNEL ?? 'prerelease/major';
const STORYBOOK_URL =
  process.env.CANVAS_KIT_STORYBOOK_URL ??
  'https://5d854c26ba934e0020f5e98a-edwwbsoyhb.chromatic.com/';

const COMPONENT_PACKAGES: Array<{
  packageName: string;
  modulePath: string;
  status: 'production' | 'preview' | 'labs';
}> = [
  {
    packageName: '@workday/canvas-kit-react',
    modulePath: 'modules/react',
    status: 'production',
  },
  {
    packageName: '@workday/canvas-kit-preview-react',
    modulePath: 'modules/preview-react',
    status: 'preview',
  },
  {
    packageName: '@workday/canvas-kit-labs-react',
    modulePath: 'modules/labs-react',
    status: 'labs',
  },
];

const COMPONENT_SKIP_DIRS = new Set([
  'common',
  'testing',
  'tokens',
  'version',
  'node_modules',
  'dist',
  'spec',
  'stories',
  'lib',
  'fonts',
]);

const TOKEN_PACKAGE_VERSION = '4.4.0-beta.6';
const PRODUCTION_ICON_PACKAGE_VERSION = '4.0.4';
const VISION_ICON_PACKAGE_VERSION = '5.0.0';

const TOKEN_CSS_FILES = [
  {path: 'css/base/_variables.css', channel: 'production' as const, theme: 'canvas' as const},
  {path: 'css/brand/_variables.css', channel: 'production' as const, theme: 'canvas' as const},
  {path: 'css/system/_variables.css', channel: 'production' as const, theme: 'canvas' as const},
  {path: 'css/component/_variables.css', channel: 'production' as const, theme: 'canvas' as const},
  {path: 'css/sana/_variables.css', channel: 'vision' as const, theme: 'sana' as const},
];

const ICON_METADATA_FILES = [
  'dist/metadata/system.metadata.json',
  'dist/metadata/system.deprecated.metadata.json',
];

const MANUAL_COMPONENT_ALIASES: Record<string, string[]> = {
  button: ['buttons', 'hyperlink', 'link'],
  'status-indicator': ['statusindicator'],
  'text-input': ['textinput', 'input'],
  'text-area': ['textarea'],
};

const PREVIEW_ONLY_ALIASES: Record<string, string[]> = {
  'side-panel': ['side-panel-(new)', 'sidepanel'],
  switch: ['switch-(new)'],
  avatar: ['avatar-(promoted)'],
  'loading-sparkles': ['loading-sparkles-(ai)', 'ai-loading'],
  'ai-ingress-button': ['ai-ingress-button-(ai)', 'ingress-button'],
};

function readJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function readPackageVersion(packageJsonPath: string, fallback = 'unknown'): string {
  if (!fs.existsSync(packageJsonPath)) {
    return fallback;
  }

  const packageJson = readJsonFile<{version?: string}>(packageJsonPath);
  return packageJson.version ?? fallback;
}

function resolveExternalRoot(envName: string, ...defaultRelativePaths: string[]): string | null {
  const configured = process.env[envName];
  if (configured) {
    const candidate = path.resolve(configured);
    return fs.existsSync(candidate) ? candidate : null;
  }

  for (const relativePath of defaultRelativePaths) {
    const candidate = path.resolve(REPO_ROOT, relativePath);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

function createMeta(canvasKitVersion: string, sources: CatalogMeta['sources']): CatalogMeta {
  return {
    generatedAt: new Date().toISOString(),
    canvasKitVersion,
    releaseChannel: RELEASE_CHANNEL,
    storybookUrl: STORYBOOK_URL,
    sources,
  };
}

function parseNamedExports(filePath: string, visited = new Set<string>()): string[] {
  if (!fs.existsSync(filePath) || visited.has(filePath)) {
    return [];
  }

  const fileStats = fs.statSync(filePath);
  if (!fileStats.isFile()) {
    return [];
  }

  visited.add(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  const exports = new Set<string>();

  for (const match of content.matchAll(/export\s*\{([^}]+)\}/g)) {
    match[1]
      .split(',')
      .map(part => part.trim())
      .filter(Boolean)
      .forEach(part => {
        const exportName = part.split(/\s+as\s+/)[0].trim();
        if (exportName && exportName !== 'type') {
          exports.add(exportName);
        }
      });
  }

  for (const match of content.matchAll(
    /export\s+(?:default\s+)?(?:declare\s+)?(?:async\s+)?(?:function|class|const|let|var|type|interface|enum)\s+([A-Za-z0-9_]+)/g
  )) {
    exports.add(match[1]);
  }

  for (const match of content.matchAll(/export\s+\*\s+from\s+['"](.+?)['"]/g)) {
    const target = match[1];
    const resolved = path.resolve(path.dirname(filePath), target);
    const candidates = [
      resolved,
      `${resolved}.ts`,
      `${resolved}.tsx`,
      path.join(resolved, 'index.ts'),
      path.join(resolved, 'index.tsx'),
    ];

    for (const candidate of candidates) {
      if (!fs.existsSync(candidate)) {
        continue;
      }

      if (fs.statSync(candidate).isDirectory()) {
        continue;
      }

      parseNamedExports(candidate, visited).forEach(exportName => exports.add(exportName));
    }
  }

  return [...exports].sort();
}

function listTypeScriptFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files: string[] = [];
  for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listTypeScriptFiles(entryPath));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      files.push(entryPath);
    }
  }
  return files;
}

function cleanJSDoc(jsdoc: string): string {
  return jsdoc
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join(' ')
    .replace(/^@deprecated\s*/i, '')
    .trim();
}

function replacementPackageFromMessage(message: string): string | undefined {
  if (/\bLabs\b/i.test(message)) {
    return '@workday/canvas-kit-labs-react';
  }
  if (/\bPreview\b/i.test(message)) {
    return '@workday/canvas-kit-preview-react';
  }
  return undefined;
}

function collectDeprecations(componentDirectory: string): {
  exports: ComponentCatalogEntry['deprecatedExports'];
  props: ComponentCatalogEntry['deprecatedProps'];
} {
  const deprecatedExports = new Map<string, ComponentCatalogEntry['deprecatedExports'][number]>();
  const deprecatedProps = new Map<string, ComponentCatalogEntry['deprecatedProps'][number]>();

  for (const filePath of listTypeScriptFiles(componentDirectory)) {
    const source = fs.readFileSync(filePath, 'utf8');
    const relativeSource = path.relative(REPO_ROOT, filePath);
    const deprecatedExportPattern =
      /\/\*\*([\s\S]*?@deprecated[\s\S]*?)\*\/\s*export\s+(?:default\s+)?(?:declare\s+)?(?:async\s+)?(?:function|class|const|let|var|type|interface|enum)\s+([A-Za-z0-9_]+)/g;
    const deprecatedPropPattern =
      /\/\*\*([\s\S]*?@deprecated[\s\S]*?)\*\/\s*(?:readonly\s+)?([A-Za-z_$][A-Za-z0-9_$]*)\??\s*:/g;

    for (const match of source.matchAll(deprecatedExportPattern)) {
      const message = cleanJSDoc(match[1]);
      deprecatedExports.set(match[2], {
        name: match[2],
        message,
        replacementPackage: replacementPackageFromMessage(message),
      });
    }

    for (const match of source.matchAll(deprecatedPropPattern)) {
      const message = cleanJSDoc(match[1]);
      deprecatedProps.set(`${relativeSource}:${match[2]}`, {
        name: match[2],
        message,
        source: relativeSource,
      });
    }
  }

  return {
    exports: [...deprecatedExports.values()].sort((left, right) =>
      left.name.localeCompare(right.name)
    ),
    props: [...deprecatedProps.values()].sort((left, right) => left.name.localeCompare(right.name)),
  };
}

function titleCaseName(value: string): string {
  return value
    .split('-')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function loadStorySlugMap(): Record<string, string> {
  const storiesConfigPath = path.resolve(MCP_ROOT, 'lib/stories-config.json');

  if (!fs.existsSync(storiesConfigPath)) {
    return {};
  }

  const storiesConfig = readJsonFile<{stories?: Record<string, {title?: string}>}>(
    storiesConfigPath
  );

  const slugMap: Record<string, string> = {};

  for (const [slug, story] of Object.entries(storiesConfig.stories ?? {})) {
    const title = story.title ?? '';
    const leaf = title.split('/').pop() ?? slug;
    slugMap[normalizeKey(leaf)] = slug;
    slugMap[normalizeKey(slug)] = slug;
  }

  return slugMap;
}

function normalizeKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
}

function iconNameToExport(iconName: string): string {
  const camelCase = iconName.replace(/-([a-z0-9])/g, (_, character: string) =>
    character.toUpperCase()
  );
  return `${camelCase}Icon`;
}

interface IconMigrationFile {
  source: string;
  channel: 'vision';
  mappings: Array<{previousName: string; sanaName: string}>;
}

function loadIconMigrations(): IconMigrationFile {
  const configuredPath = process.env.CANVAS_ICON_MIGRATIONS_PATH;
  const migrationPath = configuredPath
    ? path.resolve(configuredPath)
    : path.resolve(MCP_ROOT, 'lib/icon-migrations.json');

  return readJsonFile<IconMigrationFile>(migrationPath);
}

function readIconExports(packageRoot: string): Set<string> {
  const declarationsPath = path.join(packageRoot, 'dist/es6/index.d.ts');
  const declarations = fs.readFileSync(declarationsPath, 'utf8');
  const exports = new Set<string>();

  for (const match of declarations.matchAll(/export\s*\{([^}]+)\}/g)) {
    for (const exportName of match[1].split(',').map(value => value.trim())) {
      if (exportName.endsWith('Icon')) {
        exports.add(exportName);
      }
    }
  }

  return exports;
}

function cssVariableToTokenKey(cssVariable: string): string {
  const parts = cssVariable.replace(/^--cnvs-/, '').split('-');
  if (parts[0] === 'sys') {
    parts[0] = 'system';
  }
  return parts.join('.');
}

function inferTokenType(key: string, value: string): string {
  if (key.includes('.color.') || key.includes('.palette.')) {
    return 'color';
  }
  if (key.includes('.space.') || key.includes('.gap.') || key.includes('.padding.')) {
    return 'spacing';
  }
  if (key.includes('.shape.')) {
    return 'borderRadius';
  }
  if (key.includes('.depth.')) {
    return 'boxShadow';
  }
  if (key.includes('.opacity.')) {
    return 'number';
  }
  if (/^-?\d*\.?\d+(px|rem|em)$/.test(value)) {
    return 'dimension';
  }
  return 'unknown';
}

function parseCssTokenFile(
  filePath: string,
  channel: 'production' | 'vision',
  theme: 'canvas' | 'sana'
): TokenCatalogEntry[] {
  const css = fs.readFileSync(filePath, 'utf8');
  const entries: TokenCatalogEntry[] = [];
  const declarationPattern = /(--cnvs-[a-z0-9-]+)\s*:\s*([^;]+);/gi;

  for (const match of css.matchAll(declarationPattern)) {
    const cssVariable = match[1];
    const value = match[2].trim();
    const key = cssVariableToTokenKey(cssVariable);
    const namespace = key.split('.')[0];

    entries.push({
      key,
      namespace,
      value,
      type: inferTokenType(key, value),
      channel,
      theme,
      cssVariable,
      aliases: namespace === 'system' ? [`sys.${key.split('.').slice(1).join('.')}`] : [],
    });
  }

  return entries;
}

function generateComponentCatalog(canvasKitVersion: string): ComponentCatalog {
  const storySlugMap = loadStorySlugMap();
  const components: ComponentCatalogEntry[] = [];

  for (const componentPackage of COMPONENT_PACKAGES) {
    const moduleRoot = path.join(REPO_ROOT, componentPackage.modulePath);

    for (const entry of fs.readdirSync(moduleRoot, {withFileTypes: true})) {
      if (!entry.isDirectory() || COMPONENT_SKIP_DIRS.has(entry.name)) {
        continue;
      }

      const indexPath = path.join(moduleRoot, entry.name, 'index.ts');
      if (!fs.existsSync(indexPath)) {
        continue;
      }

      const subpath = entry.name;
      const canonicalImport = `${componentPackage.packageName}/${subpath}`;
      const exports = parseNamedExports(indexPath);
      const deprecations = collectDeprecations(path.join(moduleRoot, entry.name));
      const componentName = titleCaseName(subpath);
      const primaryExportDeprecated = deprecations.exports.some(
        deprecatedExport => deprecatedExport.name.toLowerCase() === componentName.toLowerCase()
      );
      const storySlug =
        storySlugMap[normalizeKey(subpath)] ?? storySlugMap[normalizeKey(componentName)];

      components.push({
        name: componentName,
        slug: storySlug,
        packageName: componentPackage.packageName,
        subpath,
        canonicalImport,
        status: componentPackage.status,
        exports,
        deprecated: primaryExportDeprecated,
        recommended: false,
        deprecatedExports: deprecations.exports,
        deprecatedProps: deprecations.props,
        aliases: [
          subpath,
          normalizeKey(subpath),
          ...(MANUAL_COMPONENT_ALIASES[subpath] ?? []),
          ...(componentPackage.status !== 'production'
            ? (PREVIEW_ONLY_ALIASES[subpath] ?? [])
            : []),
          ...(storySlug ? [storySlug] : []),
        ],
        storySlug,
      });
    }
  }

  const tierRank = {production: 0, preview: 1, labs: 2};
  for (const subpath of new Set(components.map(component => component.subpath))) {
    const candidates = components
      .filter(component => component.subpath === subpath && !component.deprecated)
      .sort((left, right) => tierRank[left.status] - tierRank[right.status]);
    if (candidates[0]) {
      candidates[0].recommended = true;
    }
  }

  components.sort((left, right) => left.subpath.localeCompare(right.subpath));

  return {
    meta: createMeta(canvasKitVersion, [
      {
        package: '@workday/canvas-kit-react',
        version: canvasKitVersion,
        channel: 'production',
        path: 'modules/react',
      },
      {
        package: '@workday/canvas-kit-preview-react',
        version: canvasKitVersion,
        channel: 'production',
        path: 'modules/preview-react',
      },
      {
        package: '@workday/canvas-kit-labs-react',
        version: canvasKitVersion,
        channel: 'vision',
        path: 'modules/labs-react',
      },
    ]),
    components,
  };
}

function generateTokenCatalog(
  canvasKitVersion: string,
  tokenPackageRoot: string,
  tokenPackageVersion: string
): TokenCatalog {
  const entries: TokenCatalogEntry[] = [];

  for (const tokenFile of TOKEN_CSS_FILES) {
    const filePath = path.join(tokenPackageRoot, tokenFile.path);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required token artifact is missing: ${filePath}`);
    }
    entries.push(...parseCssTokenFile(filePath, tokenFile.channel, tokenFile.theme));
  }

  const unique = new Map<string, TokenCatalogEntry>();
  for (const entry of entries) {
    unique.set(`${entry.channel}:${entry.key}`, entry);
  }

  const tokens = [...unique.values()].sort((left, right) => {
    if (left.channel !== right.channel) {
      return left.channel.localeCompare(right.channel);
    }
    return left.key.localeCompare(right.key);
  });

  return {
    meta: createMeta(canvasKitVersion, [
      {
        package: '@workday/canvas-tokens-web',
        version: tokenPackageVersion,
        channel: 'production',
        path: 'css/{base,brand,system,component}/_variables.css',
      },
      {
        package: '@workday/canvas-tokens-web',
        version: tokenPackageVersion,
        channel: 'vision',
        path: 'css/sana/_variables.css',
      },
    ]),
    tokens,
  };
}

function generateIconCatalog(
  canvasKitVersion: string,
  productionIconPackageRoot: string,
  visionIconPackageRoot: string
): IconCatalog {
  const packageName = '@workday/canvas-system-icons-web';
  const icons: IconCatalogEntry[] = [];
  const migrationFile = loadIconMigrations();
  const productionExports = readIconExports(productionIconPackageRoot);

  for (const relativePath of ICON_METADATA_FILES) {
    const filePath = path.join(visionIconPackageRoot, relativePath);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const metadata = readJsonFile<
      Array<{
        name: string;
        figmaName?: string;
        category?: string;
        tags?: string[];
        deprecated?: boolean;
        fallback?: string;
      }>
    >(filePath);

    for (const icon of metadata) {
      const exportName = iconNameToExport(icon.name);
      const availableInCanvasKit = productionExports.has(exportName);
      const migrations = migrationFile.mappings.filter(mapping => {
        const sanaName = normalizeKey(mapping.sanaName);
        const exactNameExists = metadata.some(
          candidate => normalizeKey(candidate.name) === sanaName
        );
        return (
          sanaName === normalizeKey(icon.name) ||
          (!exactNameExists && sanaName === normalizeKey(icon.figmaName ?? ''))
        );
      });
      const previousNames = migrations.map(mapping => mapping.previousName);
      icons.push({
        name: icon.name,
        exportName,
        packageName,
        canonicalImport: `import {${exportName}} from '${packageName}';`,
        channel: availableInCanvasKit ? 'production' : 'vision',
        availableInCanvasKit,
        figmaName: icon.figmaName,
        category: icon.category,
        tags: icon.tags ?? [],
        deprecated: icon.deprecated,
        fallback: icon.fallback,
        previousNames,
        sanaName: migrations[0]?.sanaName,
        migrationStatus: migrations.length > 0 ? 'renamed' : 'unmapped',
        migrationSource: migrations.length > 0 ? migrationFile.source : undefined,
        aliases: [
          icon.name,
          exportName,
          icon.figmaName ?? '',
          ...(icon.tags ?? []),
          ...previousNames,
        ].filter(Boolean),
      });
    }
  }

  icons.sort((left, right) => left.name.localeCompare(right.name));

  return {
    meta: createMeta(canvasKitVersion, [
      {
        package: packageName,
        version: PRODUCTION_ICON_PACKAGE_VERSION,
        channel: 'production',
        path: 'dist/es6/index.d.ts',
      },
      {
        package: packageName,
        version: VISION_ICON_PACKAGE_VERSION,
        channel: 'vision',
        path: 'dist/metadata/system.metadata.json',
      },
      {
        package: 'Sana Canvas Icon Library Audit',
        version: '2026-07-20',
        channel: 'vision',
        path: migrationFile.source,
      },
    ]),
    icons,
  };
}

function writeCatalog(fileName: string, catalog: unknown): void {
  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), `${JSON.stringify(catalog, null, 2)}\n`);
}

function main(): void {
  const canvasKitVersion = readPackageVersion(path.join(MCP_ROOT, 'package.json'));
  const tokenPackageRoot = resolveExternalRoot(
    'CANVAS_TOKENS_PACKAGE_ROOT',
    'modules/mcp/node_modules/@workday/canvas-tokens-web',
    'node_modules/@workday/canvas-tokens-web'
  );
  const productionIconPackageRoot = resolveExternalRoot(
    'CANVAS_PRODUCTION_ICONS_PACKAGE_ROOT',
    'modules/mcp/node_modules/@workday/canvas-system-icons-web-v4',
    'node_modules/@workday/canvas-system-icons-web-v4'
  );
  const visionIconPackageRoot = resolveExternalRoot(
    'CANVAS_VISION_ICONS_PACKAGE_ROOT',
    'modules/mcp/node_modules/@workday/canvas-system-icons-web',
    'node_modules/@workday/canvas-system-icons-web'
  );

  const componentCatalog = generateComponentCatalog(canvasKitVersion);
  writeCatalog('component-index.json', componentCatalog);

  if (!tokenPackageRoot) {
    console.warn(
      `Skipping token catalog generation. Install @workday/canvas-tokens-web or set CANVAS_TOKENS_PACKAGE_ROOT.`
    );
  } else {
    const tokenPackageVersion = readPackageVersion(path.join(tokenPackageRoot, 'package.json'));
    if (tokenPackageVersion !== TOKEN_PACKAGE_VERSION) {
      console.warn(
        `Expected @workday/canvas-tokens-web@${TOKEN_PACKAGE_VERSION}, received ${tokenPackageVersion}. Using installed version.`
      );
    }
    writeCatalog(
      'token-index.json',
      generateTokenCatalog(canvasKitVersion, tokenPackageRoot, tokenPackageVersion)
    );
  }

  if (!productionIconPackageRoot || !visionIconPackageRoot) {
    console.warn(
      `Skipping icon catalog generation. Install production and vision icon packages, or configure their package roots.`
    );
  } else {
    const productionIconVersion = readPackageVersion(
      path.join(productionIconPackageRoot, 'package.json')
    );
    const visionIconVersion = readPackageVersion(path.join(visionIconPackageRoot, 'package.json'));
    if (productionIconVersion !== PRODUCTION_ICON_PACKAGE_VERSION) {
      console.warn(
        `Expected production icons ${PRODUCTION_ICON_PACKAGE_VERSION}, received ${productionIconVersion}. Using installed version.`
      );
    }
    if (visionIconVersion !== VISION_ICON_PACKAGE_VERSION) {
      console.warn(
        `Expected vision icons ${VISION_ICON_PACKAGE_VERSION}, received ${visionIconVersion}. Using installed version.`
      );
    }
    writeCatalog(
      'icon-index.json',
      generateIconCatalog(canvasKitVersion, productionIconPackageRoot, visionIconPackageRoot)
    );
  }

  console.log(
    `Generated catalogs for ${Object.keys(CANVAS_KIT_PACKAGE_MAP).length} Canvas Kit package mappings.`
  );
  console.log(`Components: ${componentCatalog.components.length}`);
}

main();
