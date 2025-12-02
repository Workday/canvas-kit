# OIDC Trusted Publisher Setup

## Problem

npm's OIDC trusted publishers only allow configuring **one workflow file** per package. Previously, canvas-kit used multiple workflows for different release types:
- `canary.yml` - for prerelease branches (automatic)
- `release.yml` - for master/support branches (automatic)
- `release-minor.yml` - for manual minor releases (workflow_dispatch)
- `release-major.yml` - for manual major releases (workflow_dispatch)

This caused publishing failures with `E404 Not found` errors because npm didn't recognize all workflows as authorized publishers.

## Solution

We've consolidated to **3 workflows** using a reusable workflow pattern:

### New Workflow Structure

```
Automatic Releases:
  publish.yml (for canary + automatic patch releases)
  ├── _reusable-canary-publish.yml (handles prerelease/* branches)
  └── _reusable-release-publish.yml (handles master/support branches)

Manual Releases:
  release-minor.yml (unchanged - for manual minor releases)
  release-major.yml (unchanged - for manual major releases)
```

### Why 3 Workflows?

The `canvas-kit-actions/release` action performs BOTH version bumping and npm publishing in a single step. Because major and minor releases require special branch management logic before/after publishing, we can't easily route them through a single entry point without significant refactoring.

**The compromise**: Configure 3 workflows as trusted publishers instead of 1. This still solves the immediate problem (down from 4+ workflows to 3) and eliminates the E404 errors.

### How It Works

1. **publish.yml** - Handles automatic canary and patch releases
   - Triggered by pushes to `master`, `support`, and `prerelease/*` branches
   - Routes to `_reusable-canary-publish.yml` for prerelease branches
   - Routes to `_reusable-release-publish.yml` for master/support branches
   - Only runs on commits without `[skip release]`

2. **release-minor.yml** - Manual minor releases (unchanged)
   - Triggered by `workflow_dispatch` only
   - Merges prerelease/minor → master
   - Calls `canvas-kit-actions/release` with version='minor'
   - Publishes to npm

3. **release-major.yml** - Manual major releases (unchanged)
   - Triggered by `workflow_dispatch` only
   - Performs branch management (support, master, prerelease/*)
   - Calls `canvas-kit-actions/release` with version='major'
   - Publishes to npm
   - Updates support dist-tag

## Branch Workflow Guide

This section explains exactly what happens when you push to each branch or trigger a release.

### 1. Push to `prerelease/minor` Branch

**Flow:**
```
Developer pushes commit to prerelease/minor
  ↓
publish.yml triggers (matches: push to prerelease/*)
  ↓
determine-publish-type job:
  - Branch = "prerelease/minor"
  - Sets: publish_type = "canary"
  ↓
canary-publish job:
  - Calls _reusable-canary-publish.yml
  - Builds storybook & packages
  - Runs: node utils/publish-canary.mjs
    - Detects branch is prerelease/minor
    - Sets dist-tag = "next"
    - Bumps version: 14.1.18 → 14.2.0-next.0
    - Publishes to npm with tag "next"
  - Updates Chromatic baseline
  ↓
OIDC token = "publish.yml"
  ↓
npm checks: Is "publish.yml" trusted? YES ✅
  ↓
Packages published: @workday/canvas-kit-*@14.2.0-next.0
```

**Result:** Canary version published with `next` tag

### 2. Push to `prerelease/major` Branch

**Flow:**
```
Developer pushes commit to prerelease/major
  ↓
publish.yml triggers
  ↓
determine-publish-type job:
  - Branch = "prerelease/major"
  - Sets: publish_type = "canary"
  ↓
canary-publish job:
  - Calls _reusable-canary-publish.yml
  - Runs: node utils/publish-canary.mjs
    - Detects branch is prerelease/major
    - Sets dist-tag = "prerelease-next"
    - Bumps version: 14.1.18 → 15.0.0-alpha.1337-next.0
    - Publishes to npm with tag "prerelease-next"
  ↓
OIDC token = "publish.yml"
  ↓
Packages published: @workday/canvas-kit-*@15.0.0-alpha.1337-next.0
```

**Result:** Pre-major canary version published with `prerelease-next` tag

### 3. Push to `master` Branch

**Flow:**
```
Developer pushes commit to master (no [skip release])
  ↓
publish.yml triggers
  ↓
determine-publish-type job:
  - Branch = "master"
  - Commit message does NOT contain "[skip release]"
  - Sets: publish_type = "release"
  ↓
release-publish job:
  - Calls _reusable-release-publish.yml with version="patch"
  - Calls canvas-kit-actions/release@v1:
    - Bumps version: 14.1.18 → 14.1.19
    - Updates CHANGELOG.md
    - Creates commit: "chore: Release v14.1.19 [skip release]"
    - Creates tag: v14.1.19
    - Publishes to npm with tag "latest"
    - Pushes commit and tag to GitHub
    - Creates GitHub release
    - Publishes storybook to gh-pages
  ↓
OIDC token = "publish.yml"
  ↓
Packages published: @workday/canvas-kit-*@14.1.19
```

**What triggers next:**
```
The release commit "[skip release]" is pushed to master
  ↓
forward-merge.yml triggers (matches: contains [skip release])
  ↓
Merges master → prerelease/minor → prerelease/major
```

**Result:** Patch version published to `latest` tag, then forward-merged

### 4. Push to `support` Branch

**Flow:**
```
Developer pushes commit to support (no [skip release])
  ↓
publish.yml triggers
  ↓
release-publish job:
  - Calls canvas-kit-actions/release@v1:
    - Bumps version: 13.2.45 → 13.2.46
    - Publishes to npm with tag "support"
    - Creates GitHub release
  ↓
OIDC token = "publish.yml"
  ↓
Packages published: @workday/canvas-kit-*@13.2.46
```

**Result:** Patch version published to `support` tag (older major version)

### 5. Manual Minor Release

**Flow:**
```
Developer: Actions → "Minor Release" → Run workflow
  ↓
release-minor.yml triggers (workflow_dispatch)
  ↓
release-minor job:
  - Checks out master branch
  - Pulls changes from prerelease/minor
  - Calls canvas-kit-actions/release@v1 with version="minor":
    - Bumps version: 14.1.19 → 14.2.0
    - Updates CHANGELOG.md
    - Creates commit: "chore: Release v14.2.0 [skip release]"
    - Publishes to npm with tag "latest"
    - Creates GitHub release
  ↓
OIDC token = "release-minor.yml"
  ↓
Packages published: @workday/canvas-kit-*@14.2.0
  ↓
forward-merge.yml triggers
  ↓
Merges master → prerelease/minor → prerelease/major
```

**Result:** Minor version published to `latest` tag, then forward-merged

### 6. Manual Major Release

**Flow:**
```
Developer: Actions → "Major Release" → Run workflow
  ↓
release-major.yml triggers (workflow_dispatch)
  ↓
release-major job:
  - Pushes current master to support branch
  - Gets current version (e.g., v14.2.0) - saves for later
  - Pulls changes from prerelease/major into master
  - Calls canvas-kit-actions/release@v1 with version="major":
    - Bumps version: 14.2.0 → 15.0.0
    - Publishes to npm with tag "latest"
    - Creates GitHub release
  - Pushes master to prerelease/minor
  - Pushes master to prerelease/major
  - Updates npm dist-tag "support" to point to v14.2.0
  ↓
OIDC token = "release-major.yml"
  ↓
Packages published: @workday/canvas-kit-*@15.0.0
```

**Result:** Major version published to `latest` tag, old version moved to `support` tag, prerelease branches updated

### Summary Table

| Branch/Action | Workflow | Version Bump | npm Tag | Example |
|---------------|----------|--------------|---------|---------|
| **prerelease/minor** push | publish.yml | preminor | next | 14.1.18 → 14.2.0-next.0 |
| **prerelease/major** push | publish.yml | premajor | prerelease-next | 14.1.18 → 15.0.0-alpha.1337-next.0 |
| **master** push | publish.yml | patch | latest | 14.1.18 → 14.1.19 |
| **support** push | publish.yml | patch | support | 13.2.45 → 13.2.46 |
| **Manual minor** | release-minor.yml | minor | latest | 14.1.19 → 14.2.0 |
| **Manual major** | release-major.yml | major | latest | 14.2.0 → 15.0.0 |

### Key Points

- **All automatic releases use `publish.yml`** (canary + patch)
- **Manual releases use their own workflows** (release-minor.yml, release-major.yml)
- **Each workflow has its OIDC token configured on npm** (3 workflows total)
- **Forward-merge still works** - triggered by `[skip release]` commits
- **No configuration changes needed** - set up once, works forever

## npm Configuration Steps

### For Package Maintainers

You need to configure **3 OIDC trusted publishers** for **each package** in the canvas-kit monorepo.

For each package, go to https://www.npmjs.com/package/@workday/PACKAGE-NAME/access and add 3 trusted publishers:

#### Trusted Publisher #1: publish.yml (Automatic releases)
- **Provider**: GitHub Actions
- **Repository**: `Workday/canvas-kit`
- **Workflow**: `publish.yml`
- **Environment**: (leave blank)

#### Trusted Publisher #2: release-minor.yml (Manual minor releases)
- **Provider**: GitHub Actions
- **Repository**: `Workday/canvas-kit`
- **Workflow**: `release-minor.yml`
- **Environment**: (leave blank)

#### Trusted Publisher #3: release-major.yml (Manual major releases)
- **Provider**: GitHub Actions
- **Repository**: `Workday/canvas-kit`
- **Workflow**: `release-major.yml`
- **Environment**: (leave blank)

### Packages to Configure

All packages in the `modules/` directory need this configuration:

- @workday/canvas-kit-codemod
- @workday/canvas-kit-css
- @workday/canvas-kit-docs
- @workday/canvas-kit-labs-css
- @workday/canvas-kit-labs-react
- @workday/canvas-kit-mcp ⚠️ **This was the initial failing package**
- @workday/canvas-kit-popup-stack
- @workday/canvas-kit-preview-css
- @workday/canvas-kit-preview-react
- @workday/canvas-kit-react
- @workday/canvas-kit-react-fonts
- @workday/canvas-kit-styling
- @workday/canvas-kit-styling-transform

You can get the full list by running:
```bash
ls modules/*/package.json | xargs -I {} node -p "require('{}').name"
```

## Migration Steps

### Step 1: Disable Old Automatic Release Workflows

The new `publish.yml` workflow replaces `canary.yml` and `release.yml` (automatic releases). You need to disable these:

**Option A: Rename old workflows (recommended for safety)**
```bash
mv .github/workflows/canary.yml .github/workflows/canary.yml.old
mv .github/workflows/release.yml .github/workflows/release.yml.old
```

**Option B: Delete old workflows** (after verifying the new setup works)
```bash
rm .github/workflows/canary.yml
rm .github/workflows/release.yml
```

**⚠️ IMPORTANT**: Do NOT delete or disable `release-minor.yml` or `release-major.yml`. These are still used for manual releases.

### Step 2: Configure npm Trusted Publishers

Follow the steps in the "npm Configuration Steps" section above for each package.

### Step 3: Test the Setup

1. **Test automatic canary publishing:**
   - Make a small commit to the `prerelease/major` or `prerelease/minor` branch
   - The `publish.yml` workflow should trigger automatically
   - Verify it calls `_reusable-canary-publish.yml`
   - Check that packages are published to npm with canary versions

2. **Test automatic patch release:**
   - Make a small commit to the `master` branch (without `[skip release]`)
   - The `publish.yml` workflow should trigger automatically
   - Verify it calls `_reusable-release-publish.yml`
   - Check that packages are published to npm

3. **Test manual minor release:**
   - Go to Actions → Minor Release → Run workflow
   - Verify `release-minor.yml` runs successfully
   - Check that packages are published to npm

4. **Test manual major release:**
   - Go to Actions → Major Release → Run workflow
   - Verify `release-major.yml` runs successfully
   - Check that packages are published to npm
   - Verify support dist-tag is updated

### Step 4: Monitor for Issues

After the first successful publish with the new workflow:
- Check npm for published versions
- Verify all packages were published successfully
- Check the workflow logs for any warnings or errors

## Rollback Plan

If you need to rollback to the old workflows:

1. Rename the old workflows back:
   ```bash
   mv .github/workflows/canary.yml.old .github/workflows/canary.yml
   mv .github/workflows/release.yml.old .github/workflows/release.yml
   ```

2. Disable publish.yml:
   ```bash
   mv .github/workflows/publish.yml .github/workflows/publish.yml.disabled
   ```

3. Update npm trusted publishers:
   - Remove `publish.yml` as a trusted publisher
   - Add `canary.yml` and `release.yml` back as trusted publishers
   - Keep `release-minor.yml` and `release-major.yml` configured

## Troubleshooting

### E404 Not found errors

If you see `E404 Not found` errors during publish, the package doesn't have the correct workflow configured as a trusted publisher:

- **For canary/automatic releases**: Check if `publish.yml` is configured
- **For manual minor releases**: Check if `release-minor.yml` is configured
- **For manual major releases**: Check if `release-major.yml` is configured

Go to https://www.npmjs.com/package/@workday/PACKAGE-NAME/access and verify all 3 trusted publishers are configured.

### Workflow not triggering

- Check that old workflows are disabled/renamed
- Verify the branch name matches the triggers in publish.yml
- Check the commit message doesn't contain `[skip release]` (for release branches)

### Wrong workflow being called

- Check the output of the `determine-publish-type` job
- Verify the branch name is correct
- Review the logic in publish.yml's determine step

## References

- [GitHub Discussion: Multiple workflows with trusted publishing](https://github.com/orgs/community/discussions/161015)
- [Article: Multiple npm publishing scripts with OIDC](https://www.paigeniedringhaus.com/blog/run-multiple-npm-publishing-scripts-with-trusted-publishing-oidc-via-git-hub-reusable-workflows)
- [GitHub Discussion: Workaround for multiple workflows](https://github.com/orgs/community/discussions/174507#discussioncomment-14716618)
