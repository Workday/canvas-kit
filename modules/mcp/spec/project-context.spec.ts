import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import test from 'node:test';

import {
  buildProjectContext,
  compareDriftSeverity,
  resolveProjectContext,
} from '../lib/project-context';

test('compareDriftSeverity reports patch drift for 16.0.2 vs 16.0.8', () => {
  assert.equal(compareDriftSeverity('16.0.8', '16.0.2'), 'patch');
});

test('compareDriftSeverity reports none for matching versions', () => {
  assert.equal(compareDriftSeverity('16.0.8', '16.0.8'), 'none');
});

test('compareDriftSeverity reports major drift across majors', () => {
  assert.equal(compareDriftSeverity('16.0.8', '15.1.1'), 'major');
});

test('buildProjectContext marks undeclared transitive styling as installed-only', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'canvas-mcp-context-'));
  const nodeModules = path.join(tempDir, 'node_modules', '@workday');

  fs.mkdirSync(path.join(nodeModules, 'canvas-kit-react'), {recursive: true});
  fs.mkdirSync(path.join(nodeModules, 'canvas-kit-styling'), {recursive: true});
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
    path.join(nodeModules, 'canvas-kit-styling', 'package.json'),
    JSON.stringify({name: '@workday/canvas-kit-styling', version: '16.0.2'})
  );

  const context = buildProjectContext(tempDir, 'parameter', '16.0.8');

  assert.equal(context.packages['@workday/canvas-kit-react'].installedVersion, '16.0.2');
  assert.equal(context.packages['@workday/canvas-kit-styling'].installed, true);
  assert.equal(context.packages['@workday/canvas-kit-styling'].declared, false);
  assert.equal(context.drift.severity, 'patch');

  fs.rmSync(tempDir, {recursive: true, force: true});
});

test('resolveProjectContext honors projectPath parameter', async () => {
  const evalRoot = '/Users/michael.onikosi/Documents/development/canvas-mcp-evals/upgraded-mcp';
  if (!fs.existsSync(evalRoot)) {
    return;
  }

  const context = await resolveProjectContext({
    projectPath: evalRoot,
    indexVersion: '16.0.8',
  });

  assert.equal(context.source, 'parameter');
  assert.equal(context.packages['@workday/canvas-kit-react'].installedVersion, '16.0.2');
  assert.equal(context.packages['@workday/canvas-kit-preview-react'].installed, false);
  assert.equal(context.drift.severity, 'patch');
});
