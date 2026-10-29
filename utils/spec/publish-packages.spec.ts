import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const publishPackagesScript = path.resolve(__dirname, '../publish-packages.mjs');

/**
 * Calls an exported function of `utils/publish-packages.mjs` in a child process with `repo` as the
 * working directory. A child process keeps the ESM script out of the TypeScript program (`allowJs`
 * is off) and mirrors how CI runs it.
 */
function callPublishPackages(fn: string, cwd: string) {
  execFileSync(
    process.execPath,
    [
      '--input-type=module',
      '-e',
      `import * as m from ${JSON.stringify(publishPackagesScript)}; await m.${fn}(process.cwd());`,
    ],
    {cwd, env: {...process.env, NODE_NO_WARNINGS: '1'}, stdio: 'pipe'}
  );
}

function git(cwd: string, ...args: string[]) {
  return execFileSync('git', args, {cwd, encoding: 'utf8'}).trim();
}

describe('publish-packages.mjs', () => {
  describe('restoreLernaManifests', () => {
    let repo: string;
    const manifests = [
      'package.json',
      'modules/react/package.json',
      'modules/styling/package.json',
    ];

    const read = (file: string) => fs.readFileSync(path.join(repo, file), 'utf8');

    beforeEach(() => {
      repo = fs.mkdtempSync(path.join(os.tmpdir(), 'ck-publish-packages-'));
      git(repo, 'init', '--quiet');
      git(repo, 'config', 'user.email', 'test@example.com');
      git(repo, 'config', 'user.name', 'Test');

      manifests.forEach(file => {
        fs.mkdirSync(path.dirname(path.join(repo, file)), {recursive: true});
        fs.writeFileSync(path.join(repo, file), '{"version": "1.0.0"}\n');
      });
      fs.writeFileSync(path.join(repo, 'README.md'), 'readme\n');
      git(repo, 'add', '.');
      git(repo, 'commit', '--quiet', '-m', 'initial');
    });

    afterEach(() => {
      fs.rmSync(repo, {recursive: true, force: true});
    });

    // Regression test: a failed `lerna publish` leaves `gitHead` (and resolved dependency
    // specifiers) in every manifest because it only resets them after a fully successful publish.
    // `lerna publish from-package` then refuses to run with EUNCOMMIT.
    it('should restore manifests that a failed lerna publish left modified', () => {
      manifests.forEach(file => {
        fs.writeFileSync(path.join(repo, file), '{"version": "1.0.0", "gitHead": "abc123"}\n');
      });
      expect(git(repo, 'status', '--porcelain')).not.toBe('');

      callPublishPackages('restoreLernaManifests', repo);

      expect(git(repo, 'status', '--porcelain')).toBe('');
      manifests.forEach(file => {
        expect(read(file)).toBe('{"version": "1.0.0"}\n');
      });
    });

    it('should not touch changes to files that are not package.json manifests', () => {
      fs.writeFileSync(path.join(repo, 'README.md'), 'changed\n');
      fs.writeFileSync(path.join(repo, 'modules/react/package.json'), '{"gitHead": "abc123"}\n');

      callPublishPackages('restoreLernaManifests', repo);

      // Unexpected changes must still surface through lerna's own working tree check.
      expect(read('README.md')).toBe('changed\n');
      expect(git(repo, 'status', '--porcelain')).toBe('M README.md');
    });

    it('should do nothing when the working tree is clean', () => {
      expect(() => callPublishPackages('restoreLernaManifests', repo)).not.toThrow();
      expect(git(repo, 'status', '--porcelain')).toBe('');
    });
  });
});
