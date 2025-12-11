---
source_file: docs/mdx/style-props/stylePropsMigrationCodemod.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/style-props/stylePropsMigrationCodemod
---

<Meta title="Guides/Style Props Migration/Codemod" />

# Canvas Kit Style Props Migration Codemod

This codemod helps migrate style props to `cs` prop. It also automatically transforms token usage in
your codebase to use the new token system.

## Important Notes

- **Run on Small Batches**: We recommend running the codemod on a small number of files in batches
  instead of your entire repository all at once. This makes the changes easier to review and allows
  you to catch issues more quickly with less frustration.
- **Codemod Limitations**: The codemod does not cover every possible token usage or migration
  scenario. Please review the codemod's changes and be prepared to update style props as needed.
  Some manual changes will be required, especially for:
  - Custom or dynamic style usage
  - Updating documentation, comments, or non-code files

## Required Dependencies

The codemod requires the following packages to be installed:

- `@workday/canvas-kit-styling`
- `@workday/canvas-tokens-web`

## Installation

You can run the codemod using npx:

```sh
npx @workday/canvas-kit-codemod v14.1 [path]
```

Or install the package and run it directly. But remember to uninstall the package after you have
completed the upgrade.

```sh
yarn add @workday/canvas-kit-codemod
canvas-kit-codemod v14.1 [path]
```

> Note: These codemods only work on .js, .jsx, .ts, and .tsx extensions. You may need to make some
> manual changes in other file types (.json, .mdx, .md, etc.).

> Note: You may need to run your linter after executing the codemod, as its resulting formatting
> (spacing, quotes, etc.) may not match your project's styling.

## What This Codemod Does

The Canvas Kit codemod automates the migration from **deprecated style props** and **Emotion-based
styling** to the new **Canvas Kit Styling** system. It is designed to handle the majority of
migration cases safely and efficiently, minimizing manual refactoring.

### Goals

- Accelerate migration to `@workday/canvas-kit-styling`
- Maintain visual parity between old and new implementations
- Reduce developer effort and manual code changes
- Ensure consistent use of `cs` prop

## What to Expect

After running the codemod, your code will:

1. Use the new `cs` props in CK components instead of style props
2. Transform token names used as style prop value to a new v3 token
3. Have correct token

<Flex depth={1} marginX={10} background="frenchVanilla100" />;
```

### After

```typescript

<Flex
  cs={{
    boxShadow: system.depth[1],
    marginInline: 10,
    background: system.color.bg.default,
  }}
/>;
```

## What the Codemod Does Not Do

The codemod will not hoist your styles to the top of the file. While we don't expect you to do this
immediately, we strongly encourage you to do this in the future and at a gradual pace.
