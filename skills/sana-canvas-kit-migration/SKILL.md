---
name: sana-canvas-migration
description: >-
  Upgrade Canvas Kit across major versions. Always run codemods before manual edits. Use when
  migrating v9+, running @workday/canvas-kit-codemod, following upgrade guides, or bumping
  canvas-tokens-web / canvas-system-icons-web. Hands off leftover deprecations to
  /sana-canvas-component-selection and leftover tokens to /sana-canvas-tokens.
---

# Canvas Kit Migration

**Always run the codemod(s) before touching code by hand.** Codemods traverse the AST and apply
prescribed transforms — manual edits first waste time and miss patterns.

**REQUIRED SUB-SKILL:** `/sana-canvas-version`. Run it first to confirm the installed version and
which upgrade guide(s) apply — don't re-derive version detection or upgrade-guide lookup here.

How to apply styles after migration → `/sana-canvas-styling`. Leftover deprecated exports/props →
`/sana-canvas-component-selection`. Leftover token paths → `/sana-canvas-tokens`.

## When to apply

- Upgrading `@workday/canvas-kit-react` (or preview/labs packages) across major versions
- Migrating `@workday/canvas-tokens-web` or `@workday/canvas-system-icons-web`
- Following a version upgrade guide (v9 through v16)
- User asks "how do I migrate to Canvas Kit vN"

For the full codemod command list, see [references.md](references.md). For upgrade-guide prose, call
MCP `get-canvas-kit-upgrade-guides` or read `modules/docs/mdx/<version>-UPGRADE-GUIDE.mdx`.

## Hard rules

1. **Codemods run sequentially** — if you're on v14, run v15 before v16. Never skip a major.
2. **One version per isolated commit** — easier to review, revert, and bisect.
3. **Upgrade dependencies before running the codemod** — the codemod updates source, not
   `package.json`.
4. **Codemods only touch `.js`, `.jsx`, `.ts`, `.tsx`** — edit `.json`, `.mdx`, `.md`, and config
   manually.
5. **Codemods are not bulletproof** — always review the diff and run tests.

## Workflow

```
- [ ] Record installed versions (canvas-kit-react, canvas-tokens-web, canvas-system-icons-web)
- [ ] Bump package.json dependencies to the target version (one major at a time)
- [ ] yarn install
- [ ] Run npx @workday/canvas-kit-codemod v<N> [path] for each major in the chain
- [ ] Run sub-codemods where applicable (see below)
- [ ] Commit codemod output alone; run linter/formatter
- [ ] Open that version's upgrade guide — manual checklist for items NOT marked 🤖
- [ ] /sana-canvas-component-selection for leftover @deprecated exports/props
- [ ] /sana-canvas-tokens for leftover token paths
- [ ] yarn typecheck && yarn test
- [ ] Repeat for next major until target reached
```

### Check installed versions

See `/sana-canvas-version` for the full detection workflow and version matrix. Quick check:

```bash
node -p "require('@workday/canvas-kit-react/package.json').version"
node -p "require('@workday/canvas-tokens-web/package.json').version"
node -p "require('@workday/canvas-system-icons-web/package.json').version"
```

### Run a version codemod

```sh
npx @workday/canvas-kit-codemod v16 src/
```

Scope `[path]` to directories that need updating (`src/`, specific monorepo packages). Smaller scope
= faster runs and smaller diffs.

Alternative (temporary install):

```sh
yarn add @workday/canvas-kit-codemod --dev
yarn canvas-kit-codemod v16 src/
yarn remove @workday/canvas-kit-codemod
```

### Version chain

Run each transform in order from your **installed** major to **target** major. There is no v10
codemod — the sequence jumps v9 → v11.

`v5` → `v6` → `v7` → `v8` → `v9` → `v11` → `v12` → `v13` → `v13.2` → `v14` → `v14.1` → `v15` → `v16`

Also available mid-chain: `v13.2` (React tokens → canvas-tokens-web v2).

### Sub-codemods (run outside the main chain)

Run these when crossing the boundary they cover, **after** upgrading the dependency they expect:

| Transform        | When                                                         | Prerequisite                          |
| ---------------- | ------------------------------------------------------------ | ------------------------------------- |
| `v14-tokens`     | Migrating `@workday/canvas-kit-react/tokens` or tokens v2→v3 | `@workday/canvas-tokens-web` v3+ installed |
| `v14.1`          | Migrating deprecated style props (`padding="s"`, etc.)       | Part of v14.1+ upgrade                |
| `v15-icons`      | Accent, applet, expressive icon APIs                         | v15 icon package changes              |
| `icon-migration` | Deprecated `@workday/canvas-system-icons-web` exports        | Bump icons to v5 **before** running   |

```sh
# Token migration (v13 → v14 token system)
npx @workday/canvas-kit-codemod v14-tokens src/

# System icons (v5 Sana + v4 naming cleanup in one pass)
yarn add @workday/canvas-system-icons-web@^5
npx @workday/canvas-kit-codemod icon-migration src/

# Accent/applet/expressive icons (v15)
npx @workday/canvas-kit-codemod v15-icons src/
```

For v16 specifically, the `v16` codemod handles hyperlink props, card variant, and side panel variant.
Run `icon-migration` separately after upgrading system icons to v5.

### After each codemod

1. Review the full diff — codemods can miss dynamic patterns, string templates, and non-code files.
2. Open the matching upgrade guide. Items marked 🤖 were automated; everything else is your checklist.
3. Run leftover deprecation cleanup → `/sana-canvas-component-selection`.
4. Run leftover token cleanup → `/sana-canvas-tokens`.
5. `yarn lint` (formatting from codemods may not match project style).
6. `yarn typecheck` and `yarn test`.

## What codemods never do

- Upgrade or remove `package.json` dependencies
- Transform non-`.js`/`.jsx`/`.ts`/`.tsx` files
- Handle dynamic icon selection (variables built from strings, config without static imports)
- Migrate icons from packages other than `@workday/canvas-system-icons-web` (`icon-migration`)
- Cover every breaking change — upgrade guides list manual steps
- Guarantee zero regressions — QA review is required

## v16 quick reference

Canvas Kit v16 also requires separate packages:

```sh
yarn add @workday/canvas-tokens-web@4.4.0 @workday/canvas-system-icons-web@5.0.0
yarn add @workday/canvas-kit-react@^16
npx @workday/canvas-kit-codemod v16 src/
npx @workday/canvas-kit-codemod icon-migration src/
```

For Sana theme setup, fonts, and component visual changes, see the v16 upgrade guide. MCP:
`get-canvas-kit-upgrade-guides`, `get-canvas-kit-icon-migration`.

## Anti-patterns

- ❌ Manual search-and-replace before running the codemod
- ❌ Skipping intermediate majors (v14 → v16 without v15)
- ❌ Mixing codemod output with unrelated feature work in one commit
- ❌ Running `icon-migration` before upgrading `@workday/canvas-system-icons-web`
- ❌ Assuming the codemod updated `package.json`
- ❌ Ignoring non-🤖 items in the upgrade guide

## Decision guide

```
Which major am I on?              → node -p require('.../package.json').version
Upgrading one major?              → bump deps → codemod v<N> → upgrade guide checklist
Crossing token system boundary?   → v14-tokens (then /sana-canvas-tokens for leftovers)
Crossing style-props boundary?    → v14.1 (then /sana-canvas-styling)
System icons deprecated?          → upgrade icons v5 → icon-migration
Accent/applet/expressive icons?   → v15-icons
Leftover @deprecated in code?     → /sana-canvas-component-selection
Leftover old token paths?         → /sana-canvas-tokens
```

## Additional resources

- Full codemod command table: [references.md](references.md)
- General codemod guidance: `modules/docs/mdx/CODEMODS.mdx`
- Icon migration: `modules/docs/mdx/icon-migration-codemod.mdx`
- Token migration codemod: `modules/docs/mdx/tokens/TokenMigrationCodemod.mdx`
- MCP upgrade guides: `get-canvas-kit-upgrade-guides`
