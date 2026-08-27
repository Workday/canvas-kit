import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import test from 'node:test';

import {getComponent, searchComponents, searchIcons, validateTokens} from '../lib/catalog';
import type {ComponentCatalog, IconCatalog, TokenCatalog} from '../lib/catalog-types';
import {enrichTokenValidation, verifyComponentAvailability} from '../lib/catalog-verify';
import {buildProjectContext} from '../lib/project-context';

const componentCatalog: ComponentCatalog = {
  meta: {
    generatedAt: '2026-07-20T00:00:00.000Z',
    canvasKitVersion: '15.1.1',
    releaseChannel: 'prerelease/major',
    sources: [
      {
        package: '@workday/canvas-kit-react',
        version: '15.1.1',
        channel: 'production',
      },
    ],
  },
  components: [
    {
      name: 'Button',
      slug: 'buttons',
      packageName: '@workday/canvas-kit-react',
      subpath: 'button',
      canonicalImport: '@workday/canvas-kit-react/button',
      status: 'production',
      exports: ['PrimaryButton', 'Hyperlink'],
      deprecated: false,
      recommended: true,
      deprecatedExports: [],
      deprecatedProps: [],
      aliases: ['button', 'buttons', 'hyperlink'],
      storySlug: 'buttons',
    },
    {
      name: 'Switch',
      slug: 'switch-(new)',
      packageName: '@workday/canvas-kit-preview-react',
      subpath: 'switch',
      canonicalImport: '@workday/canvas-kit-preview-react/switch',
      status: 'preview',
      exports: ['Switch'],
      deprecated: false,
      recommended: true,
      deprecatedExports: [],
      deprecatedProps: [],
      aliases: ['switch', 'switch-(new)'],
      storySlug: 'switch-(new)',
    },
  ],
};

const tokenCatalog: TokenCatalog = {
  meta: {
    generatedAt: '2026-07-20T00:00:00.000Z',
    canvasKitVersion: '15.1.1',
    releaseChannel: 'prerelease/major',
    sources: [
      {
        package: '@workday/canvas-tokens-web',
        version: '4.4.0-beta.6',
        channel: 'production',
      },
      {
        package: '@workday/canvas-tokens-web',
        version: '4.4.0-beta.6',
        channel: 'vision',
      },
    ],
  },
  tokens: [
    {
      key: 'system.space.x4',
      namespace: 'system',
      value: '16px',
      type: 'dimension',
      channel: 'production',
      theme: 'canvas',
      aliases: ['sys.space.x4'],
    },
    {
      key: 'system.color.bg.default',
      namespace: 'system',
      value: '{brand.neutral.0}',
      type: 'color',
      channel: 'production',
      theme: 'canvas',
      aliases: ['sys.color.bg.default'],
    },
    {
      key: 'system.color.surface.navigation',
      namespace: 'system',
      value: 'oklch(0.9702 0 0 / 1)',
      type: 'color',
      channel: 'vision',
      theme: 'sana',
      aliases: ['sys.color.surface.navigation'],
    },
  ],
};

const iconCatalog: IconCatalog = {
  meta: {
    generatedAt: '2026-07-20T00:00:00.000Z',
    canvasKitVersion: '15.1.1',
    releaseChannel: 'prerelease/major',
    sources: [
      {
        package: '@workday/canvas-system-icons-web',
        version: '5.0.0',
        channel: 'production',
      },
    ],
  },
  icons: [
    {
      name: 'check',
      exportName: 'checkIcon',
      packageName: '@workday/canvas-system-icons-web',
      canonicalImport: "import {checkIcon} from '@workday/canvas-system-icons-web';",
      channel: 'production',
      availableInCanvasKit: true,
      figmaName: 'Check',
      category: 'Status',
      tags: ['success', 'done'],
      aliases: ['check', 'checkIcon', 'Check'],
    },
    {
      name: 'caret-down',
      exportName: 'caretDownIcon',
      packageName: '@workday/canvas-system-icons-web',
      canonicalImport: "import {caretDownIcon} from '@workday/canvas-system-icons-web';",
      channel: 'vision',
      availableInCanvasKit: false,
      figmaName: 'Caret Down',
      category: 'Arrows',
      tags: ['dropdown'],
      previousNames: ['Dropdown Button'],
      sanaName: 'Caret Down',
      migrationStatus: 'renamed',
      migrationSource: 'https://www.figma.com/design/example',
      aliases: ['caret-down', 'caretDownIcon', 'Caret Down', 'Dropdown Button'],
    },
  ],
};

test('searchComponents returns canonical import for hyperlink alias', () => {
  const result = searchComponents(componentCatalog, 'hyperlink', 5);

  assert.equal(result.results[0]?.canonicalImport, '@workday/canvas-kit-react/button');
  assert.ok(result.results[0]?.exports.includes('Hyperlink'));
});

test('getComponent resolves preview switch slug', () => {
  const result = getComponent(componentCatalog, 'switch-(new)');

  assert.equal(result.match?.status, 'preview');
  assert.equal(result.match?.canonicalImport, '@workday/canvas-kit-preview-react/switch');
});

test('validateTokens accepts valid keys and suggests alternatives for invalid keys', () => {
  const result = validateTokens(tokenCatalog, [
    'system.space.x4',
    'system.space.x12',
    'brand.accent.secondary',
  ]);

  assert.equal(result.valid.length, 1);
  assert.equal(result.valid[0]?.token, 'system.space.x4');
  assert.equal(result.invalid.length, 2);
  assert.ok(result.invalid[0]?.suggestions.length > 0);
});

test('validateTokens keeps Sana Vision tokens separate from production', () => {
  const production = validateTokens(tokenCatalog, ['system.color.surface.navigation']);
  const vision = validateTokens(tokenCatalog, ['system.color.surface.navigation'], 'vision');

  assert.equal(production.valid.length, 0);
  assert.equal(vision.valid[0]?.entry.theme, 'sana');
  assert.equal(vision.valid[0]?.entry.channel, 'vision');
});

test('searchIcons matches figma names and export names', () => {
  const byFigmaName = searchIcons(iconCatalog, 'Caret Down', 5);
  const byExport = searchIcons(iconCatalog, 'checkIcon', 5);
  const byPreviousName = searchIcons(iconCatalog, 'Dropdown Button', 5);

  assert.equal(byFigmaName.results[0]?.exportName, 'caretDownIcon');
  assert.equal(byExport.results[0]?.exportName, 'checkIcon');
  assert.equal(byPreviousName.results[0]?.migrationStatus, 'renamed');
});

test('search results are deterministically ordered', () => {
  const first = searchComponents(componentCatalog, 'switch', 5);
  const second = searchComponents(componentCatalog, 'switch', 5);

  assert.deepEqual(first.results, second.results);
});

test('enrichTokenValidation reports deprecated system.space.x4 with replacement', () => {
  const entry = tokenCatalog.tokens[0];
  assert.ok(entry);
  const projectContext = buildProjectContext(null, 'none', '16.0.8');
  const enriched = enrichTokenValidation(entry, projectContext);

  assert.equal(enriched.deprecated, true);
  assert.equal(enriched.replacedBy, 'system.gap.md');
});

test('verifyComponentAvailability flags missing preview package with fallback', () => {
  const previewStatusIndicator = {
    name: 'StatusIndicator',
    slug: 'status-indicator',
    packageName: '@workday/canvas-kit-preview-react',
    subpath: 'status-indicator',
    canonicalImport: '@workday/canvas-kit-preview-react/status-indicator',
    status: 'preview' as const,
    exports: ['StatusIndicator'],
    deprecated: false,
    recommended: true,
    deprecatedExports: [],
    deprecatedProps: [],
    aliases: ['status-indicator'],
  };

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'canvas-mcp-catalog-'));
  const nodeModules = path.join(tempDir, 'node_modules', '@workday');
  const mainStatusDir = path.join(nodeModules, 'canvas-kit-react', 'status-indicator');
  fs.mkdirSync(mainStatusDir, {recursive: true});
  fs.writeFileSync(
    path.join(tempDir, 'package.json'),
    JSON.stringify({
      dependencies: {
        '@workday/canvas-kit-react': '^16.0.2',
      },
    })
  );
  fs.writeFileSync(
    path.join(nodeModules, 'canvas-kit-react', 'package.json'),
    JSON.stringify({name: '@workday/canvas-kit-react', version: '16.0.2'})
  );
  fs.writeFileSync(
    path.join(mainStatusDir, 'index.ts'),
    'export const StatusIndicator = () => null;'
  );

  const projectContext = buildProjectContext(tempDir, 'parameter', '16.0.8');
  const availability = verifyComponentAvailability(previewStatusIndicator, projectContext);

  assert.equal(availability.installed, false);
  assert.ok(availability.installCommand?.includes('@workday/canvas-kit-preview-react'));
  assert.equal(availability.fallback?.import, '@workday/canvas-kit-react/status-indicator');

  fs.rmSync(tempDir, {recursive: true, force: true});
});
