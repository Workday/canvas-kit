# OIDC Trusted Publisher Quick Start

## TL;DR

You need to configure **3 workflows** as npm trusted publishers for **each of the 13 Canvas Kit
packages**.

## Quick Steps

### 1. Disable old workflows (2 minutes)

```bash
cd /Users/manuel.carrera/code/canvas-kit
mv .github/workflows/canary.yml .github/workflows/canary.yml.old
mv .github/workflows/release.yml .github/workflows/release.yml.old
```

### 2. Run the helper script (1 minute)

```bash
.github/scripts/list-packages-for-oidc.sh
```

This will list all 13 packages with direct links to their npm access pages.

### 3. Configure npm trusted publishers (20-30 minutes)

For **each of the 13 packages**, add **3 trusted publishers**:

#### Trusted Publisher #1: publish.yml

- Go to: https://www.npmjs.com/package/@workday/PACKAGE-NAME/access
- Click "Add trusted publisher"
- Provider: **GitHub Actions**
- Repository: **Workday/canvas-kit**
- Workflow: **publish.yml**
- Environment: (leave blank)

#### Trusted Publisher #2: release-minor.yml

- Click "Add trusted publisher" again
- Provider: **GitHub Actions**
- Repository: **Workday/canvas-kit**
- Workflow: **release-minor.yml**
- Environment: (leave blank)

#### Trusted Publisher #3: release-major.yml

- Click "Add trusted publisher" again
- Provider: **GitHub Actions**
- Repository: **Workday/canvas-kit**
- Workflow: **release-major.yml**
- Environment: (leave blank)

### 4. Test it (5 minutes)

Make a small commit to `prerelease/major`:

```bash
git checkout prerelease/major
echo "# Test OIDC" >> README.md
git add README.md
git commit -m "test: Verify OIDC setup"
git push
```

Watch the "Publish to npm (Automatic Releases)" workflow run and verify packages publish
successfully.

## Packages to Configure (14 total)

1. @workday/canvas-kit-codemod
2. @workday/canvas-kit-css
3. @workday/canvas-kit-docs
4. @workday/canvas-kit-labs-css
5. @workday/canvas-kit-labs-react
6. @workday/canvas-kit-mcp
7. @workday/canvas-kit-popup-stack
8. @workday/canvas-kit-preview-css
9. @workday/canvas-kit-preview-react
10. @workday/canvas-kit-react
11. @workday/canvas-kit-react-fonts
12. @workday/canvas-kit-styling
13. @workday/canvas-kit-styling-transform
14. @workday/canvas-tokens-web

## What Changed?

### Old Setup (Broken)

```
canary.yml → npm (E404 error on canvas-kit-mcp)
release.yml → npm
release-minor.yml → npm
release-major.yml → npm
```

### New Setup (Working)

```
publish.yml → _reusable-canary-publish.yml → npm ✅
publish.yml → _reusable-release-publish.yml → npm ✅
release-minor.yml → npm ✅
release-major.yml → npm ✅
```

## Workflow Responsibilities

| Workflow              | Trigger                                     | Purpose                 |
| --------------------- | ------------------------------------------- | ----------------------- |
| **publish.yml**       | Auto (push to master/support/prerelease/\*) | Canary + patch releases |
| **release-minor.yml** | Manual (workflow_dispatch)                  | Minor releases          |
| **release-major.yml** | Manual (workflow_dispatch)                  | Major releases          |

## Branch Workflows

### What Happens on Each Branch?

| Branch               | Workflow              | Version Example                    | npm Tag           |
| -------------------- | --------------------- | ---------------------------------- | ----------------- |
| **prerelease/minor** | publish.yml → canary  | 14.1.18 → 14.2.0-next.0            | `next`            |
| **prerelease/major** | publish.yml → canary  | 14.1.18 → 15.0.0-alpha.1337-next.0 | `prerelease-next` |
| **master**           | publish.yml → release | 14.1.18 → 14.1.19                  | `latest`          |
| **support**          | publish.yml → release | 13.2.45 → 13.2.46                  | `support`         |
| **Manual minor**     | release-minor.yml     | 14.1.19 → 14.2.0                   | `latest`          |
| **Manual major**     | release-major.yml     | 14.2.0 → 15.0.0                    | `latest`          |

### Detailed Flows

For complete step-by-step flows of what happens on each branch, see the **"Branch Workflow Guide"**
section in `.github/OIDC_TRUSTED_PUBLISHER_SETUP.md`.

## Files Created/Modified

### New Files

- `.github/workflows/publish.yml` - Main automatic release workflow
- `.github/workflows/_reusable-canary-publish.yml` - Canary publishing logic
- `.github/workflows/_reusable-release-publish.yml` - Release publishing logic
- `.github/OIDC_TRUSTED_PUBLISHER_SETUP.md` - Full documentation
- `.github/OIDC_QUICK_START.md` - This file
- `.github/scripts/list-packages-for-oidc.sh` - Helper script

### Unchanged (Still Used)

- `.github/workflows/release-minor.yml` - Keep as-is
- `.github/workflows/release-major.yml` - Keep as-is
- `.github/workflows/forward-merge.yml` - No changes needed

### To Disable

- `.github/workflows/canary.yml` - Replaced by publish.yml
- `.github/workflows/release.yml` - Replaced by publish.yml

## Need Help?

See `.github/OIDC_TRUSTED_PUBLISHER_SETUP.md` for:

- Detailed explanation
- Troubleshooting guide
- Rollback plan
- Full migration steps
