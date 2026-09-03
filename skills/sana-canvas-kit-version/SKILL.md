---
name: sana-canvas-version
description: >-
  Detect installed Canvas Kit / canvas-tokens-web versions and which generation of guidance
  applies. Use before /sana-canvas-tokens, /sana-canvas-styling, /sana-canvas-component-selection,
  /sana-canvas-migration, or /sana-canvas-design-principles when their tables assume a specific
  release; when the user mentions upgrading, a version number, or "what version am I on"; or when
  token/prop guidance doesn't match what's actually installed.
---

# Canvas Kit Version Detection

**Which** release is installed and whether the "current generation" tables in other skills apply.
Detection + lookup only — migration steps live in `/sana-canvas-migration`.

## When to apply

- **REQUIRED SUB-SKILL for:** `/sana-canvas-tokens`, `/sana-canvas-styling`,
  `/sana-canvas-component-selection`, `/sana-canvas-migration`, `/sana-canvas-design-principles`
  before applying any version-specific table.
- User asks "what Canvas Kit version am I on", mentions upgrading, or references a version number.
- Token/prop/component guidance from another skill doesn't match installed behavior.

## Current generation

**Current** = `@workday/canvas-kit-react` `16.x` **and** `@workday/canvas-tokens-web` `4.4+`. All
other consumer skills write their primary tables against this generation (Sana Canvas theme,
`surface`/`fg` color families, t-shirt shape/size scale).

**Older** = anything else (CK ≤ 15, or tokens-web < 4.4). Do not apply this generation's path
tables as current truth — they will be wrong. Hand off to `/sana-canvas-migration` plus the
matching upgrade guide instead.

## Workflow

```
- [ ] Read installed versions from node_modules (not just package.json/lockfile ranges)
- [ ] Classify: current generation vs older
- [ ] If older: do not trust this skill set's default tables; note the target upgrade path
- [ ] Load the matching upgrade guide (MCP first, GitHub fallback)
- [ ] Report a short session context other skills can reuse
```

### 1. Read installed versions

```bash
node -p "require('@workday/canvas-kit-react/package.json').version"
node -p "require('@workday/canvas-kit-preview-react/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-kit-labs-react/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-tokens-web/package.json').version"
node -p "require('@workday/canvas-kit-styling/package.json').version" 2>/dev/null
node -p "require('@workday/canvas-system-icons-web/package.json').version" 2>/dev/null
```

If a package isn't installed, the command errors — that's a signal too (e.g. no Preview/Labs
installed means don't suggest importing from them).

### 2. Classify

| Installed                                                | Generation  | What other skills should do                                  |
| --------------------------------------------------------- | ----------- | -------------------------------------------------------------- |
| CK `16.x` + tokens-web `4.4+`                              | **Current** | Use this skill set's tables as-is                              |
| CK `9.x`–`15.x`, or tokens-web `< 4.4`                     | **Older**   | Don't trust current-gen tables; use MCP + upgrade guide instead |
| CK `< 9`                                                   | **Legacy**  | Flag explicitly — pre-`createStyles` era, most guidance here doesn't apply; recommend upgrading before adding new patterns |

### 3. Load the matching upgrade guide

1. **MCP first** (if `canvas-kit-mcp` is configured): call `get-canvas-kit-upgrade-guides`. It
   returns resource links for v9 through v16 — despite older docs saying "v9 through v14," the
   tool covers the full range. Read `docs://upgrade-guides/{N}.0-UPGRADE-GUIDE`.
2. **If MCP is unavailable or fails**, fetch the public GitHub source directly:
   - Already in the `Workday/canvas-kit` repo: read `modules/docs/mdx/{N}.0-UPGRADE-GUIDE.mdx`
     (source) or `modules/docs/llm/upgrade-guides/{N}.0-UPGRADE-GUIDE.md` (LLM-flattened copy).
   - Otherwise fetch the raw file from GitHub:
     `https://raw.githubusercontent.com/Workday/canvas-kit/master/modules/docs/mdx/{N}.0-UPGRADE-GUIDE.mdx`
3. Pick `{N}` = the next major above the installed version, and repeat for each major in the chain
   if the user is jumping multiple majors (see `/sana-canvas-migration` for the full chain order).

### 4. Report session context

Summarize once per session so other skills don't re-detect:

```
Canvas Kit: <version> (<current | older | legacy>)
canvas-tokens-web: <version>
Preview/Labs installed: <yes/no, which>
Sana theme expected: <yes if current, no/optional if older>
Upgrade guide consulted: <docs://upgrade-guides/N.0-UPGRADE-GUIDE | raw GitHub URL | none needed>
```

## Anti-patterns

- ❌ Assuming `package.json` version ranges reflect what's actually resolved in `node_modules`
- ❌ Applying `/sana-canvas-tokens` v4.4 color-family tables (`surface.*`/`fg.*`) to an install on
  tokens-web `< 4.4`
- ❌ Recommending Labs imports when Labs isn't installed
- ❌ Re-deriving the upgrade-guide URL pattern from memory instead of checking `modules/docs/mdx/`
  or calling the MCP tool

## Decision guide

```
Need a version-gated table (tokens, styling, deprecations)?  → run this skill first
Installed matches current generation?                         → proceed with default tables
Installed is older?                                            → /sana-canvas-migration + upgrade guide
Don't know which major to target?                              → ask the user, don't guess
```

## Additional resources

- Version/upgrade-guide matrix: [references.md](references.md)
- Migration workflow: `/sana-canvas-migration`
- MCP: `get-canvas-kit-upgrade-guides`
