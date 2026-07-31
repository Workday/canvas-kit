# Migration Codemod

The **`icon-migration`** codemod reads deprecation metadata shipped with
`@workday/canvas-system-icons-web` and updates imports and usage instances in your source files
automatically. For what changed in v5 and package installation, see the
[Sana Canvas Assets overview](/docs/guides-icon-migration-sana-canvas-assets-overview--docs).

For general advice on running Canvas Kit codemods (review process, formatting, file types), see
[Codemods](/docs/guides-codemods--docs).

## Table of Contents

- [Running the Codemod](#running-the-codemod)
- [What the Codemod Does](#what-the-codemod-does)
- [All Icon Transforms](#all-icon-transforms)
  - [v4 Naming Convention Migrations](#v4-naming-convention-migrations)
  - [v5 Sana Canvas Assets Changes](#v5-sana-canvas-assets-changes)
- [Example Transformations](#example-transformations)
  - [Named Import](#named-import)
  - [Import Alias Preserved](#import-alias-preserved)
  - [Fallback Already Imported](#fallback-already-imported)
- [Manual Migration and Lookup](#manual-migration-and-lookup)
- [What the Codemod Does Not Do](#what-the-codemod-does-not-do)
- [After Migration](#after-migration)

## Running the Codemod

Upgrade `@workday/canvas-system-icons-web` to v5 before you run the codemod so deprecation and
fallback mappings match what the transform expects.

Using `npx`:

```sh
npx @workday/canvas-kit-codemod icon-migration [path]
```

Or install temporarily as a dev dependency:

```sh
yarn add @workday/canvas-kit-codemod --dev
yarn canvas-kit-codemod icon-migration [path]
yarn remove @workday/canvas-kit-codemod
```

Provide `[path]` to the folders that contain your application source (for example `src/` or specific
packages in a monorepo). Limiting scope speeds up the run and reduces unrelated diffs.

> **Note:** The codemod only transforms `.js`, `.jsx`, `.ts`, and `.tsx` files. Update other file
> types (`.json`, `.mdx`, `.md`, Storybook stories in non-TS formats, etc.) manually. You may need
> to run your linter after the codemod. Output formatting may not match your project style.

**Tips before migrating:**

- **Run in batches.** Prefer a focused directory (for example `src/components`) instead of the
  entire monorepo. Smaller diffs are easier to review and revert.
- **Review every change.** Codemods are not bulletproof. Verify icons in the UI, especially where
  semantics matter (status, navigation, or custom branding).
- **Expressive, accent, and applet icons.** The `icon-migration` codemod only touches
  `@workday/canvas-system-icons-web`. Use the `v15-icons` transform for accent, applet, and
  expressive icons, covered in the
  [v15 upgrade guide](/docs/guides-upgrade-guides-v15-0-overview--docs#codemod-transformations-for-icons).

## What the Codemod Does

The transform runs only on files that import from `@workday/canvas-system-icons-web`. For each
deprecated icon export listed in `system.deprecated.metadata.json`, it replaces usages with the
icon's **fallback** from package metadata. That file includes every deprecated system icon in the
package, not only the v5 Sana Canvas Assets changes summarized in the overview guide.

- **Named imports.** The codemod updates the import specifier and renames references. For example,
  it changes `uploadIcon` to `arrowUpToLineIcon`.
- **Import aliases.** If you import a deprecated icon `as` a local name, the codemod keeps your
  alias and points it at the fallback export.
- **Namespace imports.** The codemod updates member access. For example, it changes
  `systemIcons.uploadIcon` to `systemIcons.arrowUpToLineIcon`.
- **Chained fallbacks.** If a fallback icon is also deprecated, the codemod resolves through the
  chain until it reaches a non-deprecated icon.
- **Duplicate imports.** If the fallback is already imported in the same declaration, the codemod
  removes the deprecated import and redirects usages to the existing local name. This applies even
  when that name is an alias.

Icons that are not deprecated are left unchanged. The codemod also leaves deprecated entries whose
fallback is the same export name unchanged.

## All Icon Transforms

The codemod covers two sets of changes in a single pass. Both are driven by
`system.deprecated.metadata.json`, so you do not need separate runs for them.

### v4 Naming Convention Migrations

`@workday/canvas-system-icons-web` **v4** aligned the library with a systematic naming convention.
Many legacy export names were deprecated and mapped to clearer replacements (for example,
`academicAppointmentTitleIcon` to `clipboardUserIcon`). Those deprecations remain in the metadata
file shipped with v5.

To review the changes introduced in v4, see the
[system icons upgrade guide for developers](https://canvas.workday.com/styles/assets/system-icons#tab=upgrade-guide-for-developers)
on Canvas.

If your codebase still imports icons from before that alignment, the **`icon-migration`** codemod
updates those usages in the same pass as the v5 changes. You do not need to run the older
`v15-icons` codemod for system icons if you migrate with `icon-migration` on a current v5 package.

### v5 Sana Canvas Assets Changes

The v5 release adds Sana-aligned artwork and the renames, deprecations, and layer simplifications
documented in
[What Changed in v5](/docs/guides-icon-migration-sana-canvas-assets-overview--docs#what-changed-in-v5).
The codemod picks up those mappings from the same metadata file when you install
`@workday/canvas-system-icons-web` v5.

## Example Transformations

### Named Import

**Before**

```tsx
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {uploadIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={uploadIcon} />;
```

**After**

```tsx
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {arrowUpToLineIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={arrowUpToLineIcon} />;
```

### Import Alias Preserved

**Before**

```tsx
import {uploadIcon as myIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={myIcon} />;
```

**After**

```tsx
import {arrowUpToLineIcon as myIcon} from '@workday/canvas-system-icons-web';

<SystemIcon icon={myIcon} />;
```

### Fallback Already Imported

**Before**

```tsx
import {arrowUpToLineIcon, uploadIcon} from '@workday/canvas-system-icons-web';

<>
  <SystemIcon icon={uploadIcon} />
  <SystemIcon icon={arrowUpToLineIcon} />
</>;
```

**After**

```tsx
import {arrowUpToLineIcon} from '@workday/canvas-system-icons-web';

<>
  <SystemIcon icon={arrowUpToLineIcon} />
  <SystemIcon icon={arrowUpToLineIcon} />
</>;
```

## What the Codemod Does Not Do

- **Other packages.** The codemod does not change icons imported from libraries other than
  `@workday/canvas-system-icons-web`, even if the symbol name matches a deprecated Canvas icon.
- **Dynamic icon selection.** The codemod does not update icons chosen at runtime. This includes
  variables built from strings and configuration files without static imports.
- **Non-code assets.** You must update SVG paths, Figma references, or documentation that mention
  old icon names manually.
- **Component API changes.** The codemod does not migrate `<AccentIcon>`, `<AppletIcon>`, or related
  v15 expressive icon APIs. Use the `v15-icons` codemod for that work.

## After Migration

1. Run your test suite and spot-check high-traffic screens.
2. Search the repo for remaining deprecated export names or old SVG filenames if you maintain custom
   icon lists.
3. Commit codemod changes in an isolated commit when possible. That makes it easier to revert or
   bisect if you need to.
