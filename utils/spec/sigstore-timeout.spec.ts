import {execFile, execFileSync} from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import {AddressInfo} from 'node:net';
import os from 'node:os';
import path from 'node:path';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);

const repoRoot = path.resolve(__dirname, '../..');
const lernaCli = path.join(repoRoot, 'node_modules/lerna/dist/cli.js');

// npm's own default `fetch-timeout`, which the npm CLI passes to Sigstore but lerna does not.
const minimumTimeout = 60000;

/**
 * Every published package must set a numeric `publishConfig.timeout`.
 *
 * With provenance, each publish uploads an attestation to Sigstore's transparency log (Rekor).
 * lerna does not pass npm's `fetch-timeout` to Sigstore, so Sigstore uses its 5 second default.
 * When Rekor takes longer than that, the client gives up and resends an entry Rekor already wrote,
 * Rekor answers `409 an equivalent entry already exists`, and the publish fails with
 * `TLOG_CREATE_ENTRY_ERROR`. lerna copies `publishConfig` keys into the options it passes to
 * `libnpmpublish` (and from there to `sigstore.attest`) with their JSON types, which is the only
 * way to give Sigstore a numeric timeout without patching lerna. `npm_config_timeout` arrives as a
 * string, which Sigstore's HTTP client rejects outright.
 */
describe('Sigstore timeout for provenance publishing', () => {
  const manifests = execFileSync('git', ['ls-files', 'modules/*/package.json'], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .map(file => ({file, json: JSON.parse(fs.readFileSync(path.join(repoRoot, file), 'utf8'))}))
    .filter(({json}) => !json.private);

  it('should find the published packages', () => {
    expect(manifests.length).toBeGreaterThan(0);
  });

  it.each(manifests.map(({file, json}) => [file, json]))(
    'should set a numeric publishConfig.timeout in %s',
    (_file, json) => {
      expect(typeof json.publishConfig?.timeout).toBe('number');
      expect(json.publishConfig.timeout).toBeGreaterThanOrEqual(minimumTimeout);
    }
  );

  // Regression test for the lerna behavior the fix relies on. Runs the real
  // `lerna publish from-package` in a throwaway repo against a fake registry that reports the
  // package as unpublished. `libnpmpublish` is replaced by a recorder, so nothing is published.
  describe('given lerna publish from-package', () => {
    let dir: string;
    let server: http.Server;

    beforeEach(async () => {
      dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ck-sigstore-timeout-'));
      server = http.createServer((_req, res) => {
        res.writeHead(404, {'content-type': 'application/json'});
        res.end('{"error":"not found"}');
      });
      await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    });

    afterEach(async () => {
      await new Promise(resolve => server.close(resolve));
      fs.rmSync(dir, {recursive: true, force: true});
    });

    async function publishOptions(publishConfig: object) {
      const write = (file: string, contents: string) => {
        fs.mkdirSync(path.dirname(path.join(dir, file)), {recursive: true});
        fs.writeFileSync(path.join(dir, file), contents);
      };
      write(
        'package.json',
        JSON.stringify({name: 'root', private: true, workspaces: ['packages/*']})
      );
      write('lerna.json', JSON.stringify({packages: ['packages/*'], version: '1.0.0'}));
      write(
        'packages/a/package.json',
        JSON.stringify({name: '@ck-spec/a', version: '1.0.0', publishConfig})
      );
      write(
        'stub.cjs',
        `const fs = require('fs');
const Module = require('module');
const load = Module._load;
Module._load = function (request, ...rest) {
  const mod = load.call(this, request, ...rest);
  if (request !== 'libnpmpublish') return mod;
  return {...mod, publish: async (manifest, tarball, opts) => {
    fs.writeFileSync(process.env.CAPTURE_FILE, JSON.stringify({timeout: opts.timeout}));
    return {};
  }};
};
`
      );
      const git = (...args: string[]) =>
        execFileSync(
          'git',
          ['-c', 'user.email=spec@example.com', '-c', 'user.name=spec', ...args],
          {
            cwd: dir,
            stdio: 'pipe',
          }
        );
      git('init', '-q');
      git('add', '.');
      git('commit', '-qm', 'init');

      const captureFile = path.join(dir, 'captured.json');
      const {port} = server.address() as AddressInfo;
      await execFileAsync(
        process.execPath,
        [lernaCli, 'publish', 'from-package', '--yes', `--registry=http://127.0.0.1:${port}/`],
        {
          cwd: dir,
          env: {
            ...process.env,
            NODE_OPTIONS: `--require ${path.join(dir, 'stub.cjs')}`,
            CAPTURE_FILE: captureFile,
            CI: 'true',
            NX_DAEMON: 'false',
          },
        }
      );
      return JSON.parse(fs.readFileSync(captureFile, 'utf8'));
    }

    it('should pass publishConfig.timeout to libnpmpublish as a number', async () => {
      const opts = await publishOptions({access: 'public', timeout: 300000});

      expect(opts.timeout).toBe(300000);
    }, 60000);
  });
});
