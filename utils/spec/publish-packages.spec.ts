import {execFile, execFileSync} from 'node:child_process';
import fs from 'node:fs';
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

  /**
   * Runs the whole script in a temp checkout with fake `yarn` (lerna) and `npm` commands, replaying
   * what happened in real release runs.
   *
   * What the registry actually does, measured on 29 Oct 2026: a publish is accepted immediately (a
   * second publish gets "already published"), but reads (`npm view`, the packument, tarballs) lag by
   * 1–13 minutes. So after a publish the registry can still report the version as missing, and the
   * only reliable evidence that a package is published is lerna's own response to the publish call.
   */
  describe('publishing', () => {
    const packages = ['@workday/a', '@workday/b', '@workday/c'];
    let root: string;
    let state: string;

    const lernaCalls = () => Number(fs.readFileSync(path.join(state, 'calls'), 'utf8'));

    /**
     * `publish` is the body of a fake `lerna publish from-package`. It gets the attempt number as
     * `$1` and helpers: `ok <pkg>`, `already <pkg>`, `fail <pkg>`, `dirty` and `refuse_if_dirty`.
     * `visible` lists the `name@version` strings that `npm view` can see.
     */
    function setup({publish, visible = []}: {publish: string; visible?: string[]}) {
      root = fs.mkdtempSync(path.join(os.tmpdir(), 'ck-publishing-'));
      state = fs.mkdtempSync(path.join(os.tmpdir(), 'ck-publishing-state-'));
      const bin = path.join(state, 'bin');
      fs.mkdirSync(bin);

      // The script resolves its repo root from its own location, so run a copy inside the temp repo.
      fs.mkdirSync(path.join(root, 'utils'));
      fs.copyFileSync(publishPackagesScript, path.join(root, 'utils/publish-packages.mjs'));
      fs.mkdirSync(path.join(root, 'modules/react/dist/es6'), {recursive: true});
      fs.writeFileSync(path.join(root, 'modules/react/dist/es6/index.js'), '');
      fs.writeFileSync(path.join(root, '.gitignore'), 'dist\n');
      packages.forEach(name => {
        const dir = path.join(root, 'modules', name.split('/')[1]);
        fs.mkdirSync(dir, {recursive: true});
        fs.writeFileSync(
          path.join(dir, 'package.json'),
          `{"name": "${name}", "version": "1.0.0"}\n`
        );
      });
      git(root, 'init', '--quiet');
      git(root, 'config', 'user.email', 'test@example.com');
      git(root, 'config', 'user.name', 'Test');
      git(root, 'add', '.');
      git(root, 'commit', '--quiet', '-m', 'chore: Release v1.0.0 [skip release]');

      fs.writeFileSync(
        path.join(state, 'packages.json'),
        JSON.stringify(packages.map(name => ({name, version: '1.0.0'})))
      );
      fs.writeFileSync(path.join(state, 'visible'), visible.join('\n') + '\n');
      fs.writeFileSync(path.join(state, 'publish.sh'), publish);
      fs.writeFileSync(
        path.join(state, 'helpers.sh'),
        `ok() { echo "lerna success published $1 1.0.0"; }
already() { echo "lerna WARN publish Package is already published: $1@1.0.0"; }
fail() {
  echo "lerna WARN notice Package failed to publish: $1"
  echo "lerna ERR! TLOG_CREATE_ENTRY_ERROR error creating tlog entry - (409) an equivalent entry already exists"
}
dirty() { for f in modules/*/package.json; do echo '{"gitHead": "abc123"}' > "$f"; done; }
refuse_if_dirty() {
  if [ -n "$(git status --porcelain)" ]; then
    echo "lerna ERR! EUNCOMMIT Working tree has uncommitted changes"
    exit 1
  fi
}
`
      );

      fs.writeFileSync(
        path.join(bin, 'yarn'),
        `#!/bin/bash
S="${state}"
if [ "$*" = "-s lerna ls --json" ]; then cat "$S/packages.json"; exit 0; fi
n=$(( $(cat "$S/calls" 2>/dev/null || echo 0) + 1 )); echo $n > "$S/calls"
. "$S/helpers.sh"
. "$S/publish.sh" $n
`,
        {mode: 0o755}
      );
      // \`npm view name@version version\`: only versions in the visible list exist.
      fs.writeFileSync(
        path.join(bin, 'npm'),
        `#!/bin/bash
if grep -qx "$2" "${state}/visible"; then echo "\${2##*@}"; exit 0; fi
echo "npm error code E404" >&2; echo "npm error 404 No match found for version" >&2; exit 1
`,
        {mode: 0o755}
      );

      return bin;
    }

    async function run(bin: string, args: string[] = []) {
      try {
        const {stdout, stderr} = await execFileAsync(
          process.execPath,
          [path.join(root, 'utils/publish-packages.mjs'), '--dist-tag', 'latest', ...args],
          {
            cwd: root,
            env: {
              ...process.env,
              PATH: `${bin}:${process.env.PATH}`,
              PUBLISH_RETRY_BASE_MS: '0',
              NODE_NO_WARNINGS: '1',
            },
          }
        );
        return {code: 0, output: stdout + stderr};
      } catch (err) {
        const e = err as {code: number; stdout: string; stderr: string};
        return {code: e.code, output: e.stdout + e.stderr};
      }
    }

    afterEach(() => {
      fs.rmSync(root, {recursive: true, force: true});
      fs.rmSync(state, {recursive: true, force: true});
    });

    // Run 40912333768: attempt 1 published all 6 packages and exited 0, but the registry still
    // reported them as missing, so the script retried, re-published, hit a Rekor 409 and failed.
    it('should succeed when lerna publishes everything, even if the registry still says missing', async () => {
      const bin = setup({publish: 'for p in @workday/a @workday/b @workday/c; do ok $p; done'});

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(lernaCalls()).toBe(1);
    });

    // Run 40899439848: a 409 mid-publish leaves every manifest modified and lerna then refuses to
    // run again with EUNCOMMIT.
    it('should retry only after a failure, restoring the manifests lerna left modified', async () => {
      const bin = setup({
        publish: `refuse_if_dirty
if [ "$1" = "1" ]; then ok @workday/a; ok @workday/b; fail @workday/c; dirty; exit 1; fi
already @workday/a; already @workday/b; ok @workday/c`,
      });

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(lernaCalls()).toBe(2);
      expect(git(root, 'status', '--porcelain')).toBe('');
    });

    // Run 40912333768, attempt 3: re-publishing a package that is already on npm failed with a
    // Rekor 409. That is not a missing package.
    it('should not count a failed re-publish of a package lerna already published', async () => {
      const bin = setup({
        publish: `refuse_if_dirty
if [ "$1" = "1" ]; then ok @workday/a; ok @workday/b; fail @workday/c; dirty; exit 1; fi
fail @workday/a; fail @workday/b; ok @workday/c; dirty; exit 1`,
      });

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(lernaCalls()).toBe(2);
    });

    it('should not retry when every package was confirmed but lerna still exited non-zero', async () => {
      const bin = setup({
        publish: 'ok @workday/a; already @workday/b; ok @workday/c; fail @workday/a; exit 1',
      });

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(lernaCalls()).toBe(1);
    });

    it('should fail, naming the packages that were never confirmed, after the last attempt', async () => {
      const bin = setup({
        publish: 'refuse_if_dirty; ok @workday/a; ok @workday/b; fail @workday/c; dirty; exit 1',
      });

      const result = await run(bin, ['--retries', '3']);

      expect(result.code).not.toBe(0);
      expect(lernaCalls()).toBe(3);
      expect(result.output).toMatch(
        /Exhausted 3 publish attempts\. Still missing:\n@workday\/c@1\.0\.0/
      );
      expect(result.output).not.toMatch(/Still missing:[^]*@workday\/a@1\.0\.0/);
    });

    // Run 40349815957: GitHub's OIDC token endpoint returned 504 and npm surfaced it as E404.
    it("should retry when GitHub's OIDC token endpoint fails", async () => {
      const bin = setup({
        publish: `refuse_if_dirty
if [ "$1" = "1" ]; then
  ok @workday/a; ok @workday/b
  echo "lerna http fetch GET https://run-actions-1-azure-eastus.actions.githubusercontent.com/235//idtoken/f821b02e/3bf0a923?api-version=2.0&audience=npm%3Aregistry.npmjs.org 504"
  echo "lerna WARN notice Package failed to publish: @workday/c"
  echo "lerna ERR! E404 Not found"
  dirty; exit 1
fi
ok @workday/c`,
      });

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(lernaCalls()).toBe(2);
    });

    it('should fail fast on an error that is not transient', async () => {
      const bin = setup({
        publish: 'echo "lerna ERR! E403 You do not have permission to publish"; exit 1',
      });

      const result = await run(bin);

      expect(result.code).not.toBe(0);
      expect(lernaCalls()).toBe(1);
      expect(result.output).toMatch(/non-retryable/);
    });

    it('should not publish when every version is already visible on npm', async () => {
      const bin = setup({
        publish: 'ok @workday/a',
        visible: packages.map(name => `${name}@1.0.0`),
      });

      const result = await run(bin);

      expect(result.code).toBe(0);
      expect(fs.existsSync(path.join(state, 'calls'))).toBe(false);
    });
  });
});
