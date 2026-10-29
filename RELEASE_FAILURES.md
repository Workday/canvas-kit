# Release failures — investigation log

Running log of why the **Publish to npm** workflow (`.github/workflows/publish.yml` →
`release.yml`) fails on `master`/`support`, what has been tried, and what is still unknown. Read this
before "fixing" the release job again, and **append to it** when a new failure shows up.

Entries are marked **Verified** (seen in logs or source) or **Unverified** (hypothesis). Keep that
distinction.

## How a patch release works

1. `release.yml` calls `Workday/canvas-kit-actions/release@v2` (a separate repo). It runs
   `lerna version`, updates the changelog, commits `chore: Release vX.Y.Z [skip release]`, tags,
   pushes, builds, then runs `yarn lerna publish from-package --yes --dist-tag <tag>`.
2. That step is `continue-on-error`. If it fails, `release.yml` runs the safety net
   `yarn publish:from-package` ([`utils/publish-packages.mjs`](utils/publish-packages.mjs)), which
   re-publishes whatever is still missing from npm, serially, with retries.
3. If the safety net also fails, the job fails, `report-failure` posts to Slack, and the release is
   **half published**: the bump commit and tag exist on the branch, but some packages are not on npm.

The follow-up `Release vX.Y.Z [skip release]` runs that appear green afterwards are only the skip
runs for the release commit. They do not publish anything. A green run after a red one does **not**
mean the release was recovered.

## Three layers

A red run is several independent problems stacked on each other: a transient publish error
(layer 1), a registry that lags behind publishes (layer 2), and a safety net that mishandled both
(layer 3).

### Layer 1 — the trigger: transient publish errors (not fixed, only worked around)

During `lerna publish from-package` inside the release action, some packages fail and lerna carries
on with the rest, then exits non-zero.

- **Verified:** `lerna ERR! TLOG_CREATE_ENTRY_ERROR error creating tlog entry - (409) an equivalent
  entry already exists in the transparency log` (Sigstore/Rekor, npm provenance via OIDC trusted
  publishing). Seen in 15 Oct, 21 Oct, 26 Oct (x2), 29 Oct runs. Typically 1–7 of the 13 packages
  fail; the rest publish.
- **Verified:** a different transient error on 26 Oct (run 40349815957): GitHub's OIDC token
  endpoint returned `504`, which npm surfaced as `E404 Not found`.
- **Unverified:** why the 409 happens. One unrelated repo
  ([BitGo/BitGoJS#9348](https://github.com/BitGo/BitGoJS/pull/9348)) attributes it to a failed registry
  write leaving a Rekor entry behind, so npm's internal retry produces an identical entry. Failed
  packages here took 8–20 s, which is consistent with an internal retry, but nothing in our logs
  proves it. Nothing authoritative from npm or Sigstore was found.
- **Verified:** the 409 also happens when a package that is **already on npm** is published again
  (run 40912333768, attempt 3: `styling` had been published in attempt 1). So a 409 does not mean the
  package is missing.
- We cannot fix this from this repo. Provenance stays on (decision 29 Oct 2026); the retry loop in
  layer 2 is the workaround.

### Layer 2 — the registry lags publishes, and the safety net trusted it (fixed here)

**Verified, measured 29 Oct 2026 (run 40912333768):** a publish is accepted immediately, but reads
lag behind it. Lerna logged `success published`, and the package became visible on npm (tarball
`Last-Modified`) this much later:

| Package | Lerna said published | Visible on npm | Lag |
| --- | --- | --- | --- |
| `styling` | 16:36:32 | 16:37:54 | 1.4 min |
| `react` | 16:36:41 | 16:42:59 | 6.3 min |
| `preview-react` | 16:37:01 | 16:46:21 | 9.3 min |
| `mcp` (run 40899439848) | 15:21:31 | 15:34:06 | 12.6 min |

During the lag **every read path says the version is missing**: `npm view` (package document, also
CDN-cached for 5 min: `cache-control: max-age=300`), the per-version endpoint
(`registry.npmjs.org/<pkg>/<version>` returned 404 for `preview-react` 9 min after its publish) and
lerna's own lookup. The write path is authoritative: at 16:37:48 the registry already answered
"already published" for `preview-react`, 8.5 minutes before it was readable. The lag looked longer for
larger packages (`mcp`, `react`, `preview-react`); that is a correlation, not a measured cause.

**Consequence (run 40912333768):** attempt 1 published all 6 remaining packages and exited 0. The
script then asked the registry, was told all 12 were still missing, and retried. Lerna's own lookup
was equally stale, so attempt 3 re-published `styling`, which was already on npm, and hit a Rekor 409
(see layer 1). That left the manifests dirty and attempt 4 died with `EUNCOMMIT`. The release was
actually complete after attempt 1.

**Rule: never decide that a package is "still missing" from a registry read made less than ~15
minutes after a publish. Decide from the registry's response to the publish call itself.**

### Layer 3 — bugs in the safety net itself (fixed here)

The safety net (`utils/publish-packages.mjs`) had not recovered a release on `master` since it was
added. Three independent bugs, in the order they surfaced:

| Seen | Symptom | Cause | Fix |
| --- | --- | --- | --- |
| 15 Oct – 26 Oct 15:29 | `MultipleProjectsWithSameNameError` from `lerna ls` (Nx) | `postpack` (`utils/publish.js post`) used a repo-root-relative glob, so the generated nameless `package.json` files were never deleted. Nx saw duplicate projects. | #4224 (`5cdbb558a`) |
| 26 Oct 18:30 – 29 Oct | `EUNCOMMIT Working tree has uncommitted changes` listing every `modules/*/package.json` | lerna leaves manifests modified after a failed publish (below) | `restoreLernaManifests()` |
| 29 Oct 16:30 | Retried and failed after a publish that had fully succeeded | The loop used registry reads (layer 2) to decide what was missing | `parseConfirmedPackages()` |

**EUNCOMMIT root cause (Verified in `node_modules/lerna/dist/commands/publish/index.js`, lerna 9.0.1):**

- `lerna publish from-package` always calls `verifyWorkingTreeClean()` first (`detectFromPackage`)
  and throws `EUNCOMMIT` on any dirty tree.
- `execute()` writes `gitHead` and resolved dependency specifiers into **every** manifest it will
  publish (`annotateGitHead` + `serializeChanges`) and restores them with `resetChanges()` only
  **after** `publishPacked()` returns. If a package fails, the manifests are left dirty.
- So the next run starts on the tree the failed publish left behind and can never pass lerna's own
  check. It was masked until #4224 because the Nx error fired first.
- Not directly observed: the CI log lists the modified files but not the diff, so "the diff is
  `gitHead` plus resolved specifiers" is read from the lerna source, not from a log.

**What the script does now** (`utils/publish-packages.mjs`, covered by `utils/spec/publish-packages.spec.ts`):

1. Decides what to publish once, at the start, from registry reads (state is old by then).
2. Before every lerna attempt, resets modified `package.json` files to `HEAD` (`git checkout --`).
   The bump commit is already in `HEAD`; other dirty files are left alone so lerna still reports them.
3. Records which packages the registry **confirmed** in lerna's output (`lerna success published ...`
   or `Package is already published: ...`) and never un-confirms them.
4. Succeeds when lerna exits 0 **or** every package is confirmed (a non-zero exit with everything
   confirmed is a failed re-publish of a package that is already there). Otherwise retries
   (`--retries`, default 5) only for transient errors and fails fast on anything else.
5. Treats a 5xx from GitHub's OIDC token endpoint (`/idtoken/... 504`, surfaced as `E404`) as
   transient.
6. Compares real paths in its `main` guard. It used to compare `process.argv[1]` with the resolved
   `import.meta.url`, so running it through a symlinked path silently did nothing and exited 0.

**Known gap, not fixed here:** the release action (`canvas-kit-actions/release@v2`) publishes once.
If that fails, the safety net publishes the rest and the job goes green, but the action's later steps
(**Publish Storybook** to `gh-pages` and **Update Chromatic Baseline**) are skipped and never re-run,
so a recovered release has no updated Storybook or Chromatic baseline. Verified skipped in run
40899439848. A branch in `canvas-kit-actions` that made the action retry itself was written and
dropped in favour of keeping the logic in this repo.

**Not verified end-to-end:** all of this is covered by tests that replay the real failure sequences
with a fake `yarn`/`npm`, but it has not yet run in CI against a real 409. Next time a release hits
one, check that `Publish remaining packages` goes green and that all 13 packages appear on npm
(allow ~15 minutes for reads to catch up). Record the result below.

## Run history (`publish.yml`, master/support, non-skip runs)

| Date (UTC) | Branch | Run | Trigger (layer 1) | Safety net |
| --- | --- | --- | --- | --- |
| 15 Oct | master | 38781099215 | tlog 409 (2 pkgs) | Nx duplicate projects |
| 21 Oct | master | 39669576846 | tlog 409 (5 pkgs) | Nx duplicate projects |
| 22 Oct | support | 39850244173 | git exit 128 (not investigated) | none yet (#4218 added it) |
| 26 Oct 15:10 | master | 40346670180 | tlog 409 (1 pkg) | Nx duplicate projects |
| 26 Oct 15:29 | master | 40349815957 | OIDC 504 → E404 (1 pkg) | Nx duplicate projects |
| 26 Oct 18:30 | support | 40378385152 | tlog 409 (1 pkg) | EUNCOMMIT |
| 29 Oct 15:13 | master | 40899439848 | tlog 409 (7 pkgs) | EUNCOMMIT |
| 29 Oct 16:15 | master | 40909685326 | manual `complete-unpublished`: published 6, then tlog 409 (1 pkg) | EUNCOMMIT on attempt 2 |
| 29 Oct 16:30 | master | 40912333768 | manual `complete-unpublished`: published the last 6, then stale reads | retried a finished publish; 409 on re-publish; EUNCOMMIT |

v16.2.12 took three runs and ~1.5 hours to complete (1 package, then 6, then 6), although the
publishes themselves worked.

Earlier attempts: #4150 (retry script + safety net), #4162 (commit message parsing in
`publish.yml`), #4218 (safety net for `support`), #4224 (remove generated `package.json` after packing).

## Recovering a half-published release

1. **Wait ~15 minutes after the last publish**, then check what is on npm. Reads lag (layer 2), so
   an earlier check gives false "missing" answers:

   ```bash
   v=$(node -p 'require("./lerna.json").version')
   for p in codemod css docs labs-css labs-react mcp popup-stack preview-css preview-react react react-fonts styling styling-transform; do
     echo "$p: $(npm view @workday/canvas-kit-$p@$v version 2>/dev/null || echo MISSING)"
   done
   ```

2. Run **Publish to npm** manually (Actions → Run workflow) on `master` (or `support`) with release
   type `complete-unpublished`. It does not bump versions and publishes only what is missing. Packages
   it re-publishes by mistake get "already published", which counts as done.
3. If the job fails, read the log before re-running: the packages that lerna logged
   `success published` are done even if the job is red.

## Open questions

- Why does Rekor return 409 for these publishes, including for re-publishes? Worth an issue against
  `npm/cli` with a failing run link if it keeps happening.
- Provenance: **kept on** (decision 29 Oct 2026). Turning it off (`NPM_CONFIG_PROVENANCE=false`) would
  take Rekor out of the publish path, but gives up the attestation (see `scorecard.yml`).
- Whether the release action should retry its own publish so the Storybook and Chromatic steps still
  run after a transient failure (the known gap above).
