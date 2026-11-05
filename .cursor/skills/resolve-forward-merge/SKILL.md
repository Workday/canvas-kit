---
name: resolve-forward-merge
description: Resolves a failed Canvas Kit forward-merge pull request (titled "chore: Merge <source> into <dest>", head branch `merge/<source>-into-<dest>`). Runs the PR's instructions, decides which side wins for conflicts, and pushes the fixed merge. Use when the user mentions a forward merge PR, forward-merge conflicts, or merging support into master / master into prerelease/minor / prerelease/minor into prerelease/major.
---

# Resolve a forward-merge PR

Background: `modules/docs/mdx/MAINTAINING.mdx` (Forward Merge Workflow). Chain: `support` → `master` → `prerelease/minor` → `prerelease/major`. The script is `utils/forward-merge.js`.

Throughout, `<src>` and `<dest>` are the two branches in the PR title, and `<mb>` is `merge/<src>-into-<dest>`. Branch names can contain slashes (`merge/prerelease/minor-into-prerelease/major`).

```
Progress:
- [ ] 1. Node version
- [ ] 2. PR link and preflight
- [ ] 3. Run the PR instructions
- [ ] 4. Resolve conflicts
- [ ] 5. Verify and push
```

## 1. Node version

The script is ESM and fails on old Node (`Cannot use import statement outside a module`).

1. Read `.nvmrc` and compare with `node -v`.
2. If they differ, switch. Agent shells don't load nvm, so prefix `PATH` instead (repeat in every command that runs node/yarn):
   `export PATH="$HOME/.nvm/versions/node/v$(cat .nvmrc)/bin:$PATH"`
3. If that version isn't installed, tell the user to run `nvm install` rather than guessing.

## 2. PR link and preflight

1. If the user hasn't given a PR link or number, ask for it.
2. `gh pr view <n> --repo Workday/canvas-kit --json title,headRefName,baseRefName,body,state,mergeable`
3. Confirm the title is `chore: Merge <src> into <dest>` and the head is `<mb>`. If not, stop and tell the user.
4. Check `git remote -v`: `upstream` must be `Workday/canvas-kit` (the script merges `upstream/<dest>`). Check `git status --porcelain` is clean; if not, ask before stashing.
5. `git fetch upstream`, then see the conflicts before touching anything (read-only):
   `git merge-tree --write-tree --name-only upstream/<dest> upstream/<mb>`

## 3. Run the PR instructions

The PR body has the exact commands for this PR. Follow them in order; they are essentially:

```
git branch -D <mb> || true
git fetch upstream
git checkout --track upstream/<mb>
git pull upstream <mb> -f
git pull upstream <src>
node utils/forward-merge.js
```

- Before `git branch -D <mb>`, check a stale local copy has nothing unique: `git branch -r --contains <local sha>` should list upstream branches.
- The script auto-resolves `lerna.json`, `package.json` files, and `CHANGELOG.md`; `yarn.lock` is left to yarn.
- It exits at `yarn install` before committing. If that fails with `unable to get local issuer certificate`, this is an agent-shell network issue, not a merge problem. Never disable SSL checks. Skip it if `git diff upstream/<dest> -- yarn.lock 'modules/*/package.json'` is empty; otherwise ask the user to run `yarn` in their own terminal.
- **Never re-run the script mid-merge** (it starts a second merge). To start over: `git merge --abort`, then redo from `git branch -D`.

## 4. Resolve conflicts

List what's left: `git diff --name-only --diff-filter=U`. In this merge `<dest>` is "theirs" and the PR branch (`<src>` content) is "ours".

| Conflicted file | Resolution |
|---|---|
| `CHANGELOG.md`, `lerna.json`, `modules/*/package.json` | Script handles it. Check the result: versions must equal `<dest>`'s, and changelog entries are in date order. |
| Anything else | Go through the decision below. |

For each other file:

1. **Find the fix on `<dest>`.** Look at the commit(s) from `<src>` that touched the file (`git log upstream/<dest>..upstream/<src> -- <file>`), then search `<dest>` for the same fix (PR/issue number, similar subject, `git diff upstream/<dest> upstream/<src> -- <file>`).
2. **Fix already on `<dest>`, or `<dest>` restructured the code** (different implementation, same intent): `<dest>` wins. `git checkout --theirs -- <file> && git add <file>`.
3. **Fix is missing on `<dest>`:** stop. Abort the merge (`git merge --abort`), tell the user the `<dest>` equivalent must land first, and why. Otherwise tests added on `<src>` will fail on `<dest>`.
4. **Truly independent changes to the same lines:** show the user both sides and the intent of each commit (use AskQuestion for the choice), then edit by hand.

Also check files that merged *cleanly* but belong with a conflicted one, especially new tests: tests added on `<src>` must still pass against `<dest>`'s implementation.

## 5. Verify and push

1. Sanity check: `git diff --name-only --diff-filter=U` is empty, and no conflict markers (`git grep -n -E '^(<<<<<<<|>>>>>>>)'`).
2. Re-fetch and make sure `<dest>` hasn't moved: `git fetch upstream && git log --oneline HEAD..upstream/<dest>`. A fix landing on `<dest>` triggers a release commit that changes `CHANGELOG.md`. If there are new commits, merge them in (re-run the script on the current branch; it merges `upstream/<dest>`) and repeat.
3. Commit: `git add . && git commit -m "chore: Merge <src> into <dest>"` (the pre-commit hook takes ~30s on a merge; don't use `--no-verify`).
4. Confirm `git diff --stat upstream/<dest> HEAD` shows only what you expect (often just a `CHANGELOG.md` entry).
5. Push: `git push upstream <mb>`. Amending the merge commit needs `git commit --amend --no-edit` and a force push.
6. Wait ~10s (don't run in parallel with the push), then `gh pr view <n> --repo Workday/canvas-kit --json mergeable,mergeStateStatus,headRefOid`. `CONFLICTING` means `<dest>` moved again: go back to step 5.2. `BLOCKED` just means waiting on checks/approval.

This PR must be merged with the merge strategy, never squash. The `automerge` label picks the right strategy.
