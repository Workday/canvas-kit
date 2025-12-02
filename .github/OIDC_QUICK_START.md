# OIDC Trusted Publisher Quick Start

## TL;DR

You need to configure **1 workflow** (`publish.yml`) as an npm trusted publisher for **each of the 14 Canvas Kit packages**.

## Quick Steps

### 1. Run the helper script (1 minute)

```bash
.github/scripts/list-packages-for-oidc.sh
```

This will list all 14 packages with direct links to their npm access pages.

### 2. Configure npm trusted publishers (10-15 minutes)

For **each of the 14 packages**, add **1 trusted publisher**:

- Go to: https://www.npmjs.com/package/@workday/PACKAGE-NAME/access
- Click "Add trusted publisher"
- Provider: **GitHub Actions**
- Repository: **Workday/canvas-kit**
- Workflow: **publish.yml**
- Environment: (leave blank)

### 3. Test it (5 minutes)

Make a small commit to `prerelease/major`:

```bash
git checkout prerelease/major
echo "# Test OIDC" >> README.md
git add README.md
git commit -m "test: Verify OIDC setup"
git push
```

Watch the "Publish to npm" workflow run and verify packages publish successfully.

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

### Old Setup

```
canary.yml → npm
release.yml → npm
release-minor.yml → npm
release-major.yml → npm
```

Required 3 trusted publishers per package (publish.yml, release-minor.yml, release-major.yml).

### New Setup

```
publish.yml → canary.yml (reusable) → npm ✅
publish.yml → release.yml (reusable) → npm ✅
publish.yml → minor release (inline) → npm ✅
publish.yml → major release (inline) → npm ✅
```

Requires only **1 trusted publisher** per package (publish.yml).

## Workflow Responsibilities

| Trigger                                     | Release Type | Purpose                 |
| ------------------------------------------- | ------------ | ----------------------- |
| Auto (push to prerelease/\*)                | Canary       | Prerelease testing      |
| Auto (push to master/support)               | Patch        | Bug fixes               |
| Manual (workflow_dispatch → select "minor") | Minor        | New features            |
| Manual (workflow_dispatch → select "major") | Major        | Breaking changes        |

## How to Release

### Automatic Releases (Canary & Patch)

Just push to the appropriate branch:
- `prerelease/*` → Canary release
- `master` or `support` → Patch release

### Manual Releases (Minor & Major)

1. Go to **Actions** → **Publish to npm**
2. Click **Run workflow**
3. Select release type: `minor` or `major`
4. Click **Run workflow**

## Branch Workflows

| Branch               | Release Type | Version Example                    | npm Tag           |
| -------------------- | ------------ | ---------------------------------- | ----------------- |
| **prerelease/minor** | Canary       | 14.1.18 → 14.2.0-next.0            | `next`            |
| **prerelease/major** | Canary       | 14.1.18 → 15.0.0-alpha.1337-next.0 | `prerelease-next` |
| **master**           | Patch        | 14.1.18 → 14.1.19                  | `latest`          |
| **support**          | Patch        | 13.2.45 → 13.2.46                  | `support`         |
| **Manual minor**     | Minor        | 14.1.19 → 14.2.0                   | `latest`          |
| **Manual major**     | Major        | 14.2.0 → 15.0.0                    | `latest`          |

## Files

### Main Workflow

- `.github/workflows/publish.yml` - Handles ALL release types (canary, patch, minor, major)

### Reusable Workflows (called by publish.yml)

- `.github/workflows/canary.yml` - Canary release logic
- `.github/workflows/release.yml` - Patch release logic

### Documentation

- `.github/OIDC_QUICK_START.md` - This file
- `.github/OIDC_TRUSTED_PUBLISHER_SETUP.md` - Full documentation

### Helper Scripts

- `.github/scripts/list-packages-for-oidc.sh` - Lists packages for OIDC setup

## Need Help?

See `.github/OIDC_TRUSTED_PUBLISHER_SETUP.md` for:

- Detailed explanation
- Troubleshooting guide
- Rollback plan
- Full migration steps
