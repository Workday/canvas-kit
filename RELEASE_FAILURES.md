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

## Two stacked failures

A red run is two independent problems, one after the other.

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
- We cannot fix this from this repo. The workaround is the retry loop in layer 2.

### Layer 2 — why the safety net never recovered anything (fixed here)

The safety net has not recovered a release on `master` since it was added. Two different bugs, in
order:

| Period | Safety-net error | Cause | Fix |
| --- | --- | --- | --- |
| 15 Oct – 26 Oct 15:29 | `MultipleProjectsWithSameNameError` from `lerna ls` (Nx) | `postpack` (`utils/publish.js post`) used a repo-root-relative glob, so the generated nameless `package.json` files were never deleted. Nx saw duplicate projects. | #4224 (`5cdbb558a`) |
| 26 Oct 18:30 – now | `lerna ERR! EUNCOMMIT Working tree has uncommitted changes` listing all 13 `modules/*/package.json` | See below | this change |

**EUNCOMMIT root cause (Verified in `node_modules/lerna/dist/commands/publish/index.js`, lerna 9.0.1):**

- `lerna publish from-package` always calls `verifyWorkingTreeClean()` first (`detectFromPackage`)
  and throws `EUNCOMMIT` on any dirty tree.
- `execute()` writes `gitHead` and resolved dependency specifiers into **every** manifest it will
  publish (`annotateGitHead` + `serializeChanges`) and restores them with `resetChanges()` only
  **after** `publishPacked()` returns. If a package fails, the manifests are left dirty.
- So the safety net starts on the tree the failed publish left behind and can never pass lerna's own
  check. `EUNCOMMIT` is not classed as retryable in `publish-packages.mjs`, so it gave up at once, and
  every retry would have re-dirtied the tree anyway.
- This was masked until #4224, because the Nx error fired first.
- Not directly observed: the CI log lists the modified files but not the diff, so "the diff is
  `gitHead` plus resolved specifiers" is read from the lerna source, not from a log.

**Fix:** `restoreLernaManifests()` in `utils/publish-packages.mjs` runs `git checkout --` on modified
`package.json` files before every lerna attempt. The bump commit is already in `HEAD`, so this only
discards lerna's temporary edits. Other dirty files are left alone so lerna still reports them.
Covered by `utils/spec/publish-packages.spec.ts` (real temp git repo).

**Not verified end-to-end:** the fix has unit coverage but has not yet run in CI against a real 409.
Next time a release hits one, check that the `Publish remaining packages` step goes green and that
all 13 packages show up on npm. Record the result below.

## Run history (`publish.yml`, master/support, non-skip runs)

| Date (UTC) | Branch | Run | Layer 1 | Layer 2 |
| --- | --- | --- | --- | --- |
| 15 Oct | master | 38781099215 | tlog 409 (2 pkgs) | Nx duplicate projects |
| 21 Oct | master | 39669576846 | tlog 409 (5 pkgs) | Nx duplicate projects |
| 22 Oct | support | 39850244173 | git exit 128 (not investigated) | none yet (#4218 added it) |
| 26 Oct 15:10 | master | 40346670180 | tlog 409 (1 pkg) | Nx duplicate projects |
| 26 Oct 15:29 | master | 40349815957 | OIDC 504 → E404 (1 pkg) | Nx duplicate projects |
| 26 Oct 18:30 | support | 40378385152 | tlog 409 (1 pkg) | EUNCOMMIT |
| 29 Oct 15:13 | master | 40899439848 | tlog 409 (7 pkgs) | EUNCOMMIT |

Earlier attempts: #4150 (retry script + safety net), #4162 (commit message parsing in
`publish.yml`), #4218 (safety net for `support`), #4224 (remove generated `package.json` after packing).

## Recovering a half-published release

Check what is on npm:

```bash
v=$(node -p 'require("./lerna.json").version')
for p in codemod css docs labs-css labs-react mcp popup-stack preview-css preview-react react react-fonts styling styling-transform; do
  echo "$p: $(npm view @workday/canvas-kit-$p@$v version 2>/dev/null || echo MISSING)"
done
```

Then run **Publish to npm** manually (Actions → Run workflow) on `master` (or `support`) with
release type `complete-unpublished`. It does not bump versions and publishes only what is missing.
npm's registry can lag a minute or so after a publish (on 29 Oct `canvas-kit-mcp@16.2.12` was
reported published and then listed as missing 50 s later), so re-check before concluding something
is still missing.

## Open questions

- Why does Rekor return 409 for these publishes? Worth an issue against `npm/cli` with a failing run
  link if it keeps happening.
- Whether to drop or decouple provenance for patch releases. That removes Rekor from the path but
  is a supply-chain decision (see `scorecard.yml`), so it needs a maintainer call.
- Whether the release action (`canvas-kit-actions/release@v2`) should itself retry per package, which
  would make the safety net a last resort instead of the normal path.
