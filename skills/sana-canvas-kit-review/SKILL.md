---
name: sana-canvas-kit-review
description: >-
  Review a consumer app's changed files for Canvas Kit design-system consistency: deprecated style
  props, Box/Flex/Grid in new code, legacy token paths, missing accessible names, color-only status,
  and component misuse. Use when the user asks to review a diff/PR/branch for Canvas Kit
  compliance, "does this follow our design system", or before opening a PR that touches Canvas Kit
  components. Report-only unless the user explicitly asks to fix.
---

# Canvas Kit Consumer Review

Report-only design-system review for **consumer apps** that depend on `@workday/canvas-kit-react`.
This is not a checklist for reviewing the Canvas Kit repo's own source (that's a maintainer-only
process, not part of this consumer skill pack) — this skill reviews app code that *uses* Canvas
Kit, not the library's own source.

**Do not fix anything unless the user explicitly asks.** Report findings with file:line references
and which sub-skill covers the fix.

## When to apply

- User asks to review a diff/branch/PR for Canvas Kit or design-system compliance
- Before opening a PR that touches Canvas Kit components, styling, or tokens
- User asks "does this follow our design system" or "check this for deprecated patterns"

## Workflow

```
- [ ] Run /sana-canvas-kit-version once — note current vs older generation for context in the report
- [ ] Determine the diff scope (changed files only, not the whole repo)
- [ ] Run the grep checklist below against changed files
- [ ] For each hit, classify: blocking (deprecated/incorrect) vs advisory (style preference)
- [ ] Spot-check accessible names, keyboard support, and color-only signals by reading the JSX
      (grep can't verify these — see /sana-canvas-kit-accessibility)
- [ ] Spot-check component choice against /sana-canvas-kit-design-principles for anything non-obvious
- [ ] Produce a report grouped by sub-skill; do not apply fixes unless asked
```

### Determine scope

```bash
git branch --show-current
git fetch origin 2>/dev/null || true
BASE_BRANCH=$(git symbolic-ref --quiet --short refs/remotes/origin/HEAD 2>/dev/null | sed 's|^origin/||')
if [ -z "$BASE_BRANCH" ]; then
  for candidate in main master develop; do
    if git show-ref --verify --quiet "refs/remotes/origin/$candidate"; then
      BASE_BRANCH=$candidate
      break
    fi
  done
fi
MERGE_BASE=""
if [ -n "$BASE_BRANCH" ]; then
  MERGE_BASE=$(git merge-base "origin/$BASE_BRANCH" HEAD 2>/dev/null || git merge-base "$BASE_BRANCH" HEAD 2>/dev/null)
fi
if [ -z "$MERGE_BASE" ]; then
  echo "Could not resolve merge base — fall back to uncommitted diff scope" >&2
fi
if [ -n "$MERGE_BASE" ]; then
  git diff "$MERGE_BASE"...HEAD --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js'
else
  git diff --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js'
  git diff --cached --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js'
fi
```

Fall back to `git diff --name-only` / `git diff --cached --name-only` for uncommitted work when no
merge base is available. Scope every grep below to this file list, not the whole repo — a repo-wide
sweep surfaces pre-existing debt that isn't this change's responsibility (mention it separately if
asked).

### Grep checklist

Run each against the changed-file list (`rg -n '<pattern>' -- <files>`):

| Pattern | Flags | What it means | Sub-skill |
| ------- | ----- | -------------- | --------- |
| `<(Flex\|Box\|Grid\|Stack\|HStack\|VStack)\b` | JSX usage | Layout primitive discouraged in new code | `/sana-canvas-kit-styling` |
| `\b(padding\|margin\|gap\|depth\|backgroundColor)=["{]` | on Canvas components | Deprecated style props | `/sana-canvas-kit-styling` |
| `canvas-kit-react/tokens` | import | Legacy token package | `/sana-canvas-kit-tokens` |
| `system\.space\.` | usage | Deprecated spacing namespace | `/sana-canvas-kit-tokens` |
| `system\.color\.(text\|icon)\.` | usage | Deprecated color families | `/sana-canvas-kit-tokens` |
| `system\.color\.bg\.(?!default\|alt\.default)` | usage | Deprecated `bg.*` paths (`bg.default` and `bg.alt.default` are OK) | `/sana-canvas-kit-tokens` |
| `system\.legacy\.` | usage | Internal namespace, not for app code | `/sana-canvas-kit-tokens` |
| `system\.sana\.` | usage | Internal Sana theme namespace | `/sana-canvas-kit-tokens` |
| `createStyles\(` or `createStencil\(` | inside a function body (not module scope) | Style/stencil defined at render time | `/sana-canvas-kit-styling` |
| `cs=\{\[` | JSX prop | `cs` array — ambiguous merge order | `/sana-canvas-kit-styling` |
| `mergeStyles\(` | usage | Deprecated merge helper | `/sana-canvas-kit-styling` |
| `data-whatinput` or `hideMouseFocus` or `mouseFocusBehavior` | usage | Removed focus-suppression pattern | `/sana-canvas-kit-accessibility` |
| `placeholder=["{].*(?!aria-label)` on an input with no adjacent label | manual read | Placeholder as sole label | `/sana-canvas-kit-accessibility` |
| `disabled\b` | on `MenuItem`/similar | Should be `aria-disabled` | `/sana-canvas-kit-component-selection` |
| `@workday/canvas-kit-(preview\|labs)-react` | import | Confirm the export is actually `@deprecated` in Main first | `/sana-canvas-kit-component-selection` |

```bash
if [ -n "$MERGE_BASE" ]; then
  FILES=$(git diff "$MERGE_BASE"...HEAD --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js')
else
  FILES=$( { git diff --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js'; git diff --cached --name-only -- '*.tsx' '*.ts' '*.jsx' '*.js'; } | sort -u)
fi
rg -n "canvas-kit-react/tokens|system\.legacy\.|system\.sana\.|system\.space\.|mergeStyles\(" -- $FILES
rg -n "system\.color\.(text|icon)\." -- $FILES
# `rg`'s default (non-PCRE2) engine doesn't support negative lookahead — filter in two steps instead
rg -n "system\.color\.bg\." -- $FILES | rg -v "bg\.(default|alt\.default)"
rg -n "<(Flex|Box|Grid|Stack|HStack|VStack)\b" -- $FILES
rg -n '\b(padding|margin|gap|depth|backgroundColor)=["{]' -- $FILES
rg -n "createStyles\(|createStencil\(" -- $FILES
rg -n "cs=\{\[" -- $FILES
rg -n "data-whatinput|hideMouseFocus|mouseFocusBehavior" -- $FILES
rg -n "\bdisabled\b" -- $FILES
rg -n "@workday/canvas-kit-(preview|labs)-react" -- $FILES
```

Review `createStyles`/`createStencil` hits manually — only flag definitions inside a function body
(render-time), not module-scope stencils. Review `disabled` hits manually — flag `MenuItem` and
similar controls that should use `aria-disabled`.

### Manual checks (grep can't catch these)

Read the actual JSX/TSX for changed files, not just grep matches:

- **Color-only signals** — does an error/required/status indicator rely on color alone, with no
  icon or text? (`/sana-canvas-kit-accessibility`, `/sana-canvas-kit-tokens`)
- **Icon-only controls** — does every icon-only button/control have an accessible name (Tooltip,
  `aria-label`, or `aria-labelledby`)? (`/sana-canvas-kit-accessibility`)
- **Keyboard support** — can every new interactive element be reached and operated without a
  mouse? (`/sana-canvas-kit-accessibility`)
- **Component fit** — is the chosen component right for the cardinality/use case (e.g. `Select`
  for a 3-option yes/no choice, `Modal` for a dense table)? (`/sana-canvas-kit-design-principles`)
- **One primary action** — more than one `PrimaryButton` in the same view?
  (`/sana-canvas-kit-design-principles`)

## Report format

Group findings by sub-skill, not by file. For each finding: `file:line`, the pattern/issue, and one
line on the fix (don't apply it). End with a version-context line from `/sana-canvas-kit-version` so the
reader knows which generation's rules were applied.

```
## Canvas Kit Review — <branch/PR>

Version context: Canvas Kit <X> (current/older), tokens-web <Y>

### /sana-canvas-kit-styling
- src/Foo.tsx:42 — `<Flex gap="m">` (deprecated style prop) → createStyles + cs
- src/Bar.tsx:10 — createStencil called inside render → hoist to module scope

### /sana-canvas-kit-tokens
- src/Foo.tsx:18 — `system.color.bg.default` → `system.color.surface.default`

### /sana-canvas-kit-accessibility
- src/Baz.tsx:55 — icon-only IconButton with no aria-label/Tooltip

### /sana-canvas-kit-design-principles
- src/Form.tsx:70 — two PrimaryButtons in the same view

(none) if a category has no findings — don't list empty categories with no context.
```

## Anti-patterns

- ❌ Applying fixes without being asked — this skill reports, it doesn't edit
- ❌ Grepping the whole repo instead of the diff scope (surfaces unrelated pre-existing debt)
- ❌ Treating every grep hit as blocking without reading context (e.g. `cs={{ margin: 0 }}` single
  property override is fine; `cs={[a, b]}` array is the actual anti-pattern)
- ❌ Skipping the manual accessibility/component-fit checks because grep found nothing
- ❌ Running this skill without first getting version context from `/sana-canvas-kit-version`

## Decision guide

```
Reviewing a diff/branch/PR for Canvas Kit compliance?  → this skill
Reviewing the canvas-kit repo's own source for a PR?    → out of scope (maintainer-only process, not part of this skill pack)
Found a styling issue?                                   → /sana-canvas-kit-styling
Found a token issue?                                     → /sana-canvas-kit-tokens
Found an a11y issue?                                     → /sana-canvas-kit-accessibility
Found a deprecated export/prop?                          → /sana-canvas-kit-component-selection
Found a component-choice issue?                          → /sana-canvas-kit-design-principles
User asks to fix what was found?                         → apply the linked sub-skill's guidance
```

## Additional resources

- Styling rules: `/sana-canvas-kit-styling`
- Token rules: `/sana-canvas-kit-tokens`
- Accessibility rules: `/sana-canvas-kit-accessibility`
- Deprecation/package tiers: `/sana-canvas-kit-component-selection`
- Component usage/dos-donts: `/sana-canvas-kit-design-principles`
- Version detection: `/sana-canvas-kit-version`
