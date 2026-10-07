import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import test from 'node:test';

import type {ComponentCatalog, IconCatalog, TokenCatalog} from '../lib/catalog-types';
import {buildProjectContext} from '../lib/project-context';
import {validateCanvasCode} from '../lib/validate-code';

const emptyCatalogs = {
  componentCatalog: {
    meta: {generatedAt: '', canvasKitVersion: '16.0.8', releaseChannel: '', sources: []},
    components: [],
  } as ComponentCatalog,
  tokenCatalog: {
    meta: {generatedAt: '', canvasKitVersion: '16.0.8', releaseChannel: '', sources: []},
    tokens: [],
  } as TokenCatalog,
  iconCatalog: {
    meta: {generatedAt: '', canvasKitVersion: '16.0.8', releaseChannel: '', sources: []},
    icons: [],
  } as IconCatalog,
};

test('validateCanvasCode reports unresolvable preview imports', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'canvas-mcp-validate-'));
  const nodeModules = path.join(tempDir, 'node_modules', '@workday', 'canvas-kit-react');
  fs.mkdirSync(nodeModules, {recursive: true});
  fs.writeFileSync(
    path.join(tempDir, 'package.json'),
    JSON.stringify({
      dependencies: {
        '@workday/canvas-kit-react': '^16.0.2',
      },
    })
  );
  fs.writeFileSync(
    path.join(nodeModules, 'package.json'),
    JSON.stringify({name: '@workday/canvas-kit-react', version: '16.0.2'})
  );

  const projectContext = buildProjectContext(tempDir, 'parameter', '16.0.8');
  const result = validateCanvasCode({
    code: "import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';",
    projectContext,
    ...emptyCatalogs,
  });

  assert.equal(result.summary.unresolvableImports, 1);
  assert.equal(result.issues[0]?.type, 'unresolvable-import');

  fs.rmSync(tempDir, {recursive: true, force: true});
});
