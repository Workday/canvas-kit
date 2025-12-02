# OIDC Trusted Publisher Setup

## Problem

npm's OIDC trusted publishers require configuring each workflow file that publishes packages. Previously, canvas-kit used multiple workflows for different release types:
- `canary.yml` - for prerelease branches (automatic)
- `release.yml` - for master/support branches (automatic)
- `release-minor.yml` - for manual minor releases (workflow_dispatch)
- `release-major.yml` - for manual major releases (workflow_dispatch)

This required configuring 3-4 trusted publishers per package, which was tedious and error-prone.

## Solution

We've consolidated **all releases into a single workflow** (`publish.yml`):

### New Workflow Structure

```
publish.yml (single entry point for ALL releases)
├── Automatic: canary.yml (reusable - handles prerelease/* branches)
├── Automatic: release.yml (reusable - handles master/support branches)
├── Manual: minor release (inline job)
└── Manual: major release (inline job)
```

### Why 1 Workflow?

By consolidating everything into `publish.yml`, you only need to configure **1 trusted publisher** per package on npm. The workflow uses:
- Reusable workflows for canary and patch releases
- Inline jobs for minor and major releases
- `workflow_dispatch` with a dropdown to select release type

### How It Works

**publish.yml** handles ALL release types:

| Trigger | Release Type | What Happens |
|---------|--------------|--------------|
| Push to `prerelease/*` | Canary | Calls `canary.yml` reusable workflow |
| Push to `master`/`support` | Patch | Calls `release.yml` reusable workflow |
| Manual → select "minor" | Minor | Runs inline minor-release job |
| Manual → select "major" | Major | Runs inline major-release job |

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
  - Calls canary.yml (reusable workflow)
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
  - Calls canary.yml (reusable workflow)
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
  - Calls release.yml (reusable workflow) with version="patch"
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
Developer: Actions → "Publish to npm" → Run workflow → select "minor"
  ↓
publish.yml triggers (workflow_dispatch with release_type=minor)
  ↓
determine-publish-type job:
  - Sets: publish_type = "minor"
  ↓
minor-release job:
  - Checks out master branch
  - Pulls changes from prerelease/minor
  - Calls canvas-kit-actions/release@v1 with version="minor":
    - Bumps version: 14.1.19 → 14.2.0
    - Updates CHANGELOG.md
    - Creates commit: "chore: Release v14.2.0 [skip release]"
    - Publishes to npm with tag "latest"
    - Creates GitHub release
  ↓
OIDC token = "publish.yml"
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
Developer: Actions → "Publish to npm" → Run workflow → select "major"
  ↓
publish.yml triggers (workflow_dispatch with release_type=major)
  ↓
determine-publish-type job:
  - Sets: publish_type = "major"
  ↓
major-release job:
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
OIDC token = "publish.yml"
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
| **Manual minor** | publish.yml | minor | latest | 14.1.19 → 14.2.0 |
| **Manual major** | publish.yml | major | latest | 14.2.0 → 15.0.0 |

### Key Points

- **All releases use `publish.yml`** (canary, patch, minor, major)
- **Only 1 trusted publisher needed per package** on npm
- **Forward-merge still works** - triggered by `[skip release]` commits
- **No configuration changes needed** - set up once, works forever

## npm Configuration Steps

### For Package Maintainers

You need to configure **1 OIDC trusted publisher** for **each package** in the canvas-kit monorepo.

For each package, go to https://www.npmjs.com/package/@workday/PACKAGE-NAME/access and add the trusted publisher:

#### Trusted Publisher: publish.yml (All releases)
- **Provider**: GitHub Actions
- **Repository**: `Workday/canvas-kit`
- **Workflow**: `publish.yml`
- **Environment**: (leave blank)

### Packages to Configure

All packages in the `modules/` directory need this configuration:

- @workday/canvas-kit-codemod
- @workday/canvas-kit-css
- @workday/canvas-kit-docs
- @workday/canvas-kit-labs-css
- @workday/canvas-kit-labs-react
- @workday/canvas-kit-mcp
- @workday/canvas-kit-popup-stack
- @workday/canvas-kit-preview-css
- @workday/canvas-kit-preview-react
- @workday/canvas-kit-react
- @workday/canvas-kit-react-fonts
- @workday/canvas-kit-styling
- @workday/canvas-kit-styling-transform
- @workday/canvas-tokens-web

You can get the full list by running:
```bash
.github/scripts/list-packages-for-oidc.sh
```

## How to Trigger Releases

### Automatic Releases (No Action Required)

Just push to the appropriate branch:
- **Canary**: Push to `prerelease/minor` or `prerelease/major`
- **Patch**: Push to `master` or `support`

### Manual Releases

1. Go to **Actions** tab in GitHub
2. Select **"Publish to npm"** workflow
3. Click **"Run workflow"**
4. Select release type from dropdown: `minor` or `major`
5. Click **"Run workflow"**

## Migration Steps

### Step 1: Update Workflows (Already Done)

The following changes have been made:
- `publish.yml` - Updated to handle all release types via `workflow_dispatch`
- `release-minor.yml` - Deleted (functionality moved to publish.yml)
- `release-major.yml` - Deleted (functionality moved to publish.yml)

### Step 2: Configure npm Trusted Publishers

Follow the steps in the "npm Configuration Steps" section above for each package. You only need to add `publish.yml` as a trusted publisher.

If you previously had `release-minor.yml` and `release-major.yml` configured, you can remove them (optional - they won't cause issues if left).

### Step 3: Test the Setup

1. **Test automatic canary publishing:**
   - Make a small commit to the `prerelease/major` or `prerelease/minor` branch
   - The `publish.yml` workflow should trigger automatically
   - Check that packages are published to npm with canary versions

2. **Test automatic patch release:**
   - Make a small commit to the `master` branch (without `[skip release]`)
   - The `publish.yml` workflow should trigger automatically
   - Check that packages are published to npm

3. **Test manual minor release:**
   - Go to Actions → "Publish to npm" → Run workflow → select "minor"
   - Verify the workflow runs successfully
   - Check that packages are published to npm

4. **Test manual major release:**
   - Go to Actions → "Publish to npm" → Run workflow → select "major"
   - Verify the workflow runs successfully
   - Check that packages are published to npm
   - Verify support dist-tag is updated

## Rollback Plan

If you need to rollback to the old multi-workflow setup:

1. Restore the deleted workflow files from git history:
   ```bash
   git checkout HEAD~1 -- .github/workflows/release-minor.yml .github/workflows/release-major.yml
   ```

2. Restore the original `publish.yml` (before workflow_dispatch was added)

3. Configure npm trusted publishers:
   - Add `release-minor.yml` as a trusted publisher
   - Add `release-major.yml` as a trusted publisher
   - Keep `publish.yml` configured

## Troubleshooting

### E404 Not found errors

If you see `E404 Not found` errors during publish, the package doesn't have `publish.yml` configured as a trusted publisher:

Go to https://www.npmjs.com/package/@workday/PACKAGE-NAME/access and verify `publish.yml` is configured.

### Workflow not triggering

- Verify the branch name matches the triggers in publish.yml
- Check the commit message doesn't contain `[skip release]` (for release branches)
- For manual releases, make sure you're using "Run workflow" on the publish.yml workflow

### Wrong release type

- For manual releases, double-check you selected the correct option (minor/major) in the dropdown
- Check the output of the `determine-publish-type` job in the workflow run

## References

- [GitHub Discussion: Multiple workflows with trusted publishing](https://github.com/orgs/community/discussions/161015)
- [Article: Multiple npm publishing scripts with OIDC](https://www.paigeniedringhaus.com/blog/run-multiple-npm-publishing-scripts-with-trusted-publishing-oidc-via-git-hub-reusable-workflows)
- [GitHub Discussion: Workaround for multiple workflows](https://github.com/orgs/community/discussions/174507#discussioncomment-14716618)
