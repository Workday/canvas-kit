import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const publishScript = path.resolve(__dirname, '../publish.js');

/**
 * Runs `utils/publish.js` the way Lerna runs the `prepack`/`postpack` lifecycle scripts: as a child
 * process with the package directory as the working directory.
 */
function runPublish(command: 'pre' | 'post', cwd: string) {
  execFileSync(process.execPath, [publishScript, command, 'react'], {
    cwd,
    env: {...process.env, NODE_NO_WARNINGS: '1'},
    stdio: 'pipe',
  });
}

describe('publish.js', () => {
  let packageDir: string;
  const components = ['tabs', 'switch'];

  const packageJsonPath = (component: string) => path.join(packageDir, component, 'package.json');

  beforeEach(() => {
    packageDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ck-publish-'));
    components.forEach(component => {
      fs.mkdirSync(path.join(packageDir, component));
      fs.writeFileSync(path.join(packageDir, component, 'index.ts'), 'export {};\n');
    });
  });

  afterEach(() => {
    fs.rmSync(packageDir, {recursive: true, force: true});
  });

  describe('given the "pre" command', () => {
    it('should create a package.json in each folder that has an index.ts', () => {
      runPublish('pre', packageDir);

      components.forEach(component => {
        expect(JSON.parse(fs.readFileSync(packageJsonPath(component), 'utf8'))).toEqual({
          main: `../dist/commonjs/${component}`,
          module: `../dist/es6/${component}`,
          sideEffects: false,
          types: `../dist/es6/${component}`,
        });
      });
    });
  });

  describe('given the "post" command after "pre"', () => {
    // Regression test: `post` used a repo-root-relative glob, so it matched nothing when run from
    // the package directory and left nameless package.json files behind. Nx treats those as
    // duplicate projects, which breaks any later `lerna` command in the same CI job.
    it('should remove every package.json that "pre" created', () => {
      runPublish('pre', packageDir);
      components.forEach(component => {
        expect(fs.existsSync(packageJsonPath(component))).toBe(true);
      });

      runPublish('post', packageDir);

      components.forEach(component => {
        expect(fs.existsSync(packageJsonPath(component))).toBe(false);
      });
    });

    it('should leave the index.ts files in place', () => {
      runPublish('pre', packageDir);
      runPublish('post', packageDir);

      components.forEach(component => {
        expect(fs.existsSync(path.join(packageDir, component, 'index.ts'))).toBe(true);
      });
    });

    it('should not fail if a package.json is already gone', () => {
      runPublish('pre', packageDir);
      fs.rmSync(packageJsonPath('tabs'));

      expect(() => runPublish('post', packageDir)).not.toThrow();
      expect(fs.existsSync(packageJsonPath('switch'))).toBe(false);
    });
  });
});
