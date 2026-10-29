import {execFile, execFileSync} from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import type {AddressInfo} from 'node:net';
import os from 'node:os';
import path from 'node:path';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);

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

/**
 * Calls `isPackageVersionOnNpm(name, version, registry)` in a child process. Async so the fake
 * registry in this process can answer while the child waits.
 */
async function isOnNpm(name: string, version: string, registry: string) {
  const {stdout} = await execFileAsync(
    process.execPath,
    [
      '--input-type=module',
      '-e',
      `import * as m from ${JSON.stringify(publishPackagesScript)};
       console.log(JSON.stringify(await m.isPackageVersionOnNpm(${JSON.stringify(
         name
       )}, ${JSON.stringify(version)}, ${JSON.stringify(registry)})));`,
    ],
    {env: {...process.env, NODE_NO_WARNINGS: '1'}}
  );
  return JSON.parse(stdout);
}

describe('publish-packages.mjs', () => {
  // Regression test: `npm view` reads the package-level document, which the registry CDN caches for
  // 5 minutes (`cache-control: max-age=300`), so it kept reporting just-published versions as
  // missing. The per-version endpoint is served uncached and is the source of truth.
  describe('isPackageVersionOnNpm', () => {
    let server: http.Server;
    let registry: string;
    const requested: string[] = [];

    beforeEach(async () => {
      requested.length = 0;
      server = http.createServer((req, res) => {
        requested.push(req.url ?? '');
        if (req.url === '/@workday%2fpublished/1.0.0') {
          res.writeHead(200, {'content-type': 'application/json'}).end('{"version":"1.0.0"}');
        } else if (req.url === '/@workday%2fbroken/1.0.0') {
          res.writeHead(503).end('unavailable');
        } else {
          res.writeHead(404).end('{"error":"version not found"}');
        }
      });
      await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
      registry = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    });

    afterEach(async () => {
      await new Promise(resolve => server.close(resolve));
    });

    it('should be true when the registry has the exact version', async () => {
      expect(await isOnNpm('@workday/published', '1.0.0', registry)).toBe(true);
    });

    it('should query the per-version endpoint, not the cached package document', async () => {
      await isOnNpm('@workday/published', '1.0.0', registry);

      expect(requested).toEqual(['/@workday%2fpublished/1.0.0']);
    });

    it('should be false when the registry does not have the version', async () => {
      expect(await isOnNpm('@workday/published', '2.0.0', registry)).toBe(false);
    });

    it('should fail, not report "missing", when the registry is unavailable', async () => {
      await expect(isOnNpm('@workday/broken', '1.0.0', registry)).rejects.toThrow();
    });
  });

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
