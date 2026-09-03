import assert from 'node:assert/strict';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import test from 'node:test';

import {
  buildProjectContext,
  compareDriftSeverity,
  getRecommendedPackageVersion,
  resolveProjectContext,
} from '../lib/project-context';

function createTempCanvasProject(options: {
  reactVersion?: string;
  previewInstalled?: boolean;
  mainSwitchInstalled?: boolean;
}): string {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'canvas-mcp-context-'));
  const nodeModules = path.join(tempDir, 'node_modules', '@workday');

  fs.mkdirSync(path.join(nodeModules, 'canvas-kit-react'), {recursive: true});
  fs.writeFileSync(
    path.join(tempDir, 'package.json'),
    JSON.stringify({
      dependencies: {
        '@workday/canvas-kit-react': `^${options.reactVersion ?? '16.0.2'}`,
      },
    })
  );
  fs.writeFileSync(
    path.join(nodeModules, 'canvas-kit-react', 'package.json'),
    JSON.stringify({
      name: '@workday/canvas-kit-react',
      version: options.reactVersion ?? '16.0.2',
    })
  );

  if (options.mainSwitchInstalled) {
    const switchDir = path.join(nodeModules, 'canvas-kit-react', 'switch');
    fs.mkdirSync(switchDir, {recursive: true});
    fs.writeFileSync(path.join(switchDir, 'index.ts'), 'export const Switch = () => null;');
  }

  if (options.previewInstalled) {
    const previewDir = path.join(nodeModules, 'canvas-kit-preview-react', 'switch');
    fs.mkdirSync(previewDir, {recursive: true});
    fs.writeFileSync(
      path.join(nodeModules, 'canvas-kit-preview-react', 'package.json'),
      JSON.stringify({
        name: '@workday/canvas-kit-preview-react',
        version: options.reactVersion ?? '16.0.2',
      })
    );
    fs.writeFileSync(path.join(previewDir, 'index.ts'), 'export const Switch = () => null;');
  }

  return tempDir;
}

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
  const tempDir = createTempCanvasProject({reactVersion: '16.0.2'});

  const context = await resolveProjectContext({
    projectPath: tempDir,
    indexVersion: '16.0.8',
  });

  assert.equal(context.source, 'parameter');
  assert.equal(context.packages['@workday/canvas-kit-react'].installedVersion, '16.0.2');
  assert.equal(context.packages['@workday/canvas-kit-preview-react'].installed, false);
  assert.equal(context.drift.severity, 'patch');

  fs.rmSync(tempDir, {recursive: true, force: true});
});

test('getRecommendedPackageVersion uses independent lines for tokens and icons', () => {
  assert.equal(getRecommendedPackageVersion('@workday/canvas-kit-react', '16.0.8'), '16.0.8');
  assert.equal(
    getRecommendedPackageVersion('@workday/canvas-tokens-web', '16.0.8', {
      tokens: '4.4.0-beta.6',
    }),
    '4.4.0-beta.6'
  );
  assert.equal(
    getRecommendedPackageVersion('@workday/canvas-system-icons-web', '16.0.8', {
      icons: '5.0.3',
    }),
    '5.0.3'
  );
});

test('resolveProjectContext invalidates cache when installed package versions change', async () => {
  const tempDir = createTempCanvasProject({reactVersion: '16.0.2'});

  const first = await resolveProjectContext({
    projectPath: tempDir,
    indexVersion: '16.0.8',
  });
  assert.equal(first.packages['@workday/canvas-kit-react'].installedVersion, '16.0.2');

  fs.writeFileSync(
    path.join(tempDir, 'node_modules/@workday/canvas-kit-react/package.json'),
    JSON.stringify({name: '@workday/canvas-kit-react', version: '16.0.5'})
  );

  const second = await resolveProjectContext({
    projectPath: tempDir,
    indexVersion: '16.0.8',
  });
  assert.equal(second.packages['@workday/canvas-kit-react'].installedVersion, '16.0.5');

  fs.rmSync(tempDir, {recursive: true, force: true});
});
