# AGENTS.md — Canvas Kit

This file tells AI coding agents (Claude, Cursor, Copilot, etc.) how to work in this repository.
It is the entry point — read it before making changes. Deeper styling/token rules live in
[STYLE.md](./STYLE.md); link out to it rather than duplicating it.

## What this repo is

Canvas Kit is Workday's design-system component library, consumed by many downstream
applications across the company. It ships as versioned npm packages
(`@workday/canvas-kit-react`, `-labs-react`, `-preview-react`, `-styling`, `-css`, ...).

This changes how you should behave compared to an application repo:

- **Every public API change affects downstream consumers.** Prop renames, removed exports,
  changed defaults, and behavior changes ripple into consumer apps that may be several major
  versions behind. Breaking API changes belong on `prerelease/major`; additive, non-breaking
  features belong on `prerelease/minor`.
- **Nothing is "just internal cleanup."** Build config, `tsconfig*.json`, lint rules, and package
  entry points affect what downstream bundlers and type-checkers see. Treat these as public
  surface area, not implementation detail.
- **Design tokens are the styling contract.** Visual changes should come from
  `@workday/canvas-tokens-web`, not ad hoc values. See [STYLE.md](./STYLE.md).

When in doubt about impact, say so explicitly and ask rather than guessing.

## Branching strategy

Canvas Kit maintains three major versions at once, across four long-lived branches (full detail:
[MAINTAINING.mdx § Branches](modules/docs/mdx/MAINTAINING.mdx)):

| Branch | Version | What's allowed there |
|---|---|---|
| `support` | previous major | Patches only — no new features, no breaking changes |
| `master` | current major | Patches and small updates. Visual/styling changes that align components to a new design direction (e.g. the v16 Sana visual update) can land here **without** an API break. Breaking API changes do not. |
| `prerelease/minor` | current major | New features (non-breaking) for the current major |
| `prerelease/major` | next major | New features, patches, **and** breaking API changes |

Changes forward-merge one direction only: `support` → `master` → `prerelease/minor` →
`prerelease/major`. A fix made in `support` eventually reaches every later branch; a feature or
breaking change made in `prerelease/major` never automatically flows backward.

What this means when you're deciding where a change belongs:

- **Visual-only changes** (colors, spacing, shape that follow updated tokens, with no prop/API
  change) can target `master`.
- **New, additive, non-breaking features** target `prerelease/minor`, not `master`.
- **Breaking changes** — removed/renamed exports, changed prop defaults, altered behavior — belong
  on `prerelease/major` only. If you're not on that branch and a change looks breaking, say so and
  ask before proceeding; don't assume `master` can absorb it because "it's just this once."
- If you're unsure which branch a PR should target, ask — don't guess based on branch name alone,
  and don't assume `master` is the conservative, breaking-change-free branch in every dimension
  (it isn't, for visual changes) or that it's safe for API changes (it isn't).

## Before you touch config

Do **not** modify `tsconfig.json`, `tsconfig.*.json`, `styling.config.ts`, `vite.config.ts`,
`vitest.config.ts`, `babel.config.js`, `eslint.config.js`, or anything under `.github/workflows/`
unless the task explicitly calls for it. These files are shared across every package in the
monorepo and shape what gets published.

If a task seems to require a config change:

1. State which file and which setting, and explain *why* the change is needed and what it
   affects (build output, type-checking behavior, downstream consumers, CI).
2. Prefer the smallest, most targeted change (a single compiler option, a single override block)
   over a broad rewrite.
3. Call out the blast radius (e.g., "this changes `target` for every published package") before
   making the edit, even if you're confident it's correct.

Never make a speculative or "might as well" config change alongside an unrelated fix.

## AI tooling artifacts — do not commit

Cursor and Claude (and similar agents) write local working files that are **not** part of this
repo's source. Never add, stage, or commit them:

- **Cursor** — plan files (e.g. `.cursor/plans/`), debug sessions, and other session state under
  `.cursor/`
- **Claude** — plan files, debug sessions, and other local session artifacts (e.g. under
  `.claude/`)

These are personal/editor-local scratch work. If you create them while working on a task, leave
them out of the PR entirely — don't check them in "for reference" or tuck them into an unrelated
commit. If one appears in `git status`, do not stage it.

## Tooling & environment

- **Package manager:** Yarn (classic), workspaces under `modules/**`. Do not use `npm install`.
- **Node:** Use Node 24 — [.nvmrc](./.nvmrc) pins `24.16.0`, and CI installs Node `24.x`
  (`.github/workflows/pull-request.yml`).
- **Monorepo tool:** Lerna, driving `build`, `clean`, `depcheck`, `watch` across `modules/**`.
- **TypeScript:** 5.0, `strict: true`. Don't relax strictness to make an error disappear.

Key scripts (see [package.json](./package.json)):

| Script | Purpose |
|---|---|
| `yarn start` | Run Storybook locally on port 9001 |
| `yarn build` | Build all packages via Lerna |
| `yarn lint` | ESLint + lockfile/dependency-mismatch checks |
| `yarn typecheck` | Runs all `typecheck:*` targets in parallel (src, cypress, specs, stories, expect-type) |
| `yarn test` | Unit tests via Vitest |
| `yarn cypress:open` / `yarn cypress:run` | Cypress component tests |
| `yarn create-component` | Scaffold a new component from `utils/create-component/templates` |
| `yarn depcheck` | Verify package dependency declarations |

Run the relevant checks before considering a change done — typically `yarn lint`,
`yarn typecheck`, and `yarn test` for the packages you touched. Add `yarn cypress:run` when
you changed interactive/component behavior. CI runs the full set
(`.github/workflows/pull-request.yml`); don't rely on CI to catch what you could catch locally.

## Component architecture

Use the factories from `@workday/canvas-kit-react/common` — don't hand-roll `forwardRef` +
Context wiring:

| Situation | Use |
|---|---|
| Styled element, no behavior, no shared state | `createComponent(as)` |
| Compound-component root that owns/provides a model | `createContainer(as)` |
| Compound-component child that consumes the model | `createSubcomponent(as)` |
| State + events (config, guards, callbacks) | `createModelHook` |
| Reusable prop/behavior logic applied to an element | `createElemPropsHook` (+ `composeHooks`) |

Rules that come up often:

- `createModelHook` gives you `should<Event>` guards and `on<Event>` callbacks for free — don't
  reimplement them by hand.
- Subcomponent JSDoc belongs **inside the `subComponents` object literal** on the container, not
  on the subcomponent's own file.
- Never call `createElemPropsHook` / `composeHooks` inside a render function — hoist it to module
  scope.
- Merge props correctly: primitive props override, callbacks/`style`/`className` merge (use
  `mergeProps`, not manual spreading, when you define props by hand).
- Don't declare `children`, `model`, `ref`, or `as` on your Props interface — the factories add
  them automatically.
- No default exports in library or component modules (Storybook CSF files use their required
  `export default` metadata). No TS `enum` (use disjoint string unions); prop names never repeat
  the component name (`type`, not `buttonType`) and avoid direction/color-coupled names
  (`leftIcon` breaks under RTL).

Full reference: [CREATING_COMPOUND_COMPONENTS.mdx](modules/docs/mdx/CREATING_COMPOUND_COMPONENTS.mdx),
[API_PATTERN_GUIDELINES.mdx](modules/docs/mdx/API_PATTERN_GUIDELINES.mdx).

## Accessibility

Accessibility is not a follow-up pass — consider it while you implement, not just when you write
the Cypress spec at the end. Canvas Kit's guiding principle is
**["No ARIA is better than Bad ARIA"](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)**:
prefer semantic HTML and native behavior over hand-added ARIA, and only add ARIA attributes that
are actually required for the pattern.

When implementing or changing a component:

- **Accessible names** — every interactive element needs one. Priority order (highest first):
  1. `aria-labelledby` (reference to an existing, visible element's id)
  2. `aria-label`
  3. Visible text content / native `<label>`

  Avoid the `title` attribute or `placeholder` as a substitute for a label — screen readers treat
  them inconsistently.
- **Roles and states** — reach for the correct native element (`<button>`, not a styled `<div>`
  with `onClick`) before adding a `role`. If you must use ARIA, follow the
  [WAI-ARIA 1.2 spec](https://www.w3.org/TR/wai-aria-1.2/) and the matching
  [APG pattern](https://www.w3.org/WAI/ARIA/apg/patterns/) exactly — don't invent a role/state
  combination.
- **Keyboard navigation** — every interactive element must be reachable and operable by keyboard.
  Check whether Tab/Shift+Tab is sufficient or whether the APG pattern calls for additional keys
  (arrow keys for a listbox/menu/tablist, Escape to dismiss, Enter/Space to activate). Don't ship
  mouse-only interaction.
- **Focus management** — visible focus indicators are required by default. Only suppress the
  focus ring for mouse/touch/pointer input specifically, using the existing `data-whatinput`
  pattern, never by removing `outline` unconditionally:

  ```tsx
  [`[data-whatinput='mouse'] &:focus,
    [data-whatinput='touch'] &:focus,
    [data-whatinput='pointer'] &:focus`]: {
    outline: 'none',
    border: 'none',
  },
  ```
- **Popups, portals, and live regions** have their own established patterns — check
  [Popups.mdx](modules/docs/mdx/accessibility/Popups.mdx),
  [InlinePortals.mdx](modules/docs/mdx/accessibility/InlinePortals.mdx), and
  [AriaLiveRegions.mdx](modules/docs/mdx/accessibility/AriaLiveRegions.mdx) before building your
  own dismissal/announcement logic.
- **When in doubt, say so and ask** rather than guessing at an ARIA attribute or pattern — bad
  ARIA is worse than none.

Verify manually and with tooling: every new Cypress example should include
`cy.checkA11y()` (see [Testing](#testing)), but automated checks (axe) only catch a fraction of
real accessibility issues — they don't verify labels make sense, keyboard flow is logical, or
focus lands somewhere sensible after an action. Reason about that yourself.

Full reference: [AccessibilityOverview.mdx](modules/docs/mdx/accessibility/AccessibilityOverview.mdx)
and the rest of [modules/docs/mdx/accessibility](modules/docs/mdx/accessibility).

## Styling — the short version

See [STYLE.md](./STYLE.md) for the full reference. The headline rules:

- **Use `createStyles` / `createStencil` from `@workday/canvas-kit-styling`.** Define them at
  module scope, never inside a render function.
- **Don't use `Box`, `Flex`, `Grid`, `Stack`, `HStack`, or `VStack` in new code**, and don't use
  style props (`padding="s"`, `depth={1}`, `backgroundColor="frenchVanilla100"`, etc.) or
  Emotion's `styled()`. `Stack`/`HStack`/`VStack` were removed in v9; style props and `styled()`
  have been deprecated since v14.1 in favor of `cs` + `createStyles`/`createStencil`. New
  components should render a plain element (or one wrapped with `createComponent`) styled with a
  stencil, applied via `handleCsProp` — not the deprecated `mergeStyles`.
- **Tokens dictate styling, not hardcoded values.** No literal hex colors, no raw pixel/`rem`
  spacing. Pull from `@workday/canvas-tokens-web` (`system` tokens first, `base` sparingly,
  `brand` for theme-able keys only). In `modules/**/lib/**` implementation code, prefer
  `system.legacy.*` when a legacy counterpart exists — see [STYLE.md](./STYLE.md).
- **Import from public subpaths only:** `@workday/canvas-kit-react/<component>`. Never the bare
  package barrel or anything under `/lib/` — both are ESLint errors
  (`workday-custom-rules/use-ck-slash-imports`, `workday-custom-rules/restricted-imports`).

## Documentation

### JSDoc

Every prop gets a JSDoc comment. Follow the established pattern:

- Plain value: `The value of the Checkbox.`
- Function: `The function called when <something happens>.`
- Boolean (2-state): `If true, <behavior>.` plus `@default false`.
- Boolean (3-state, `undefined` is meaningful): describe all three states explicitly.
- Enum props: always include `@default` — the docs pipeline parses it to render the props table.

Deprecating an export:

Always include **which version the deprecation landed in**. Read the package's `package.json`
`version` field for the current release (e.g. [`modules/react/package.json`](modules/react/package.json)
for `@workday/canvas-kit-react`) — do not guess or hardcode a stale major.

```tsx
/**
 * ...existing JSDoc, if present...
 *
 * @deprecated ⚠️ ${Name} has been deprecated in v${major} and will be removed in a future major version. ${Migration strategy}
 */
```

Example (current `@workday/canvas-kit-react` is `16.x` → deprecate as `v16`):

```tsx
/**
 * @deprecated ⚠️ `Foo` has been deprecated in v16 and will be removed in a future major version. Please use `Bar` instead.
 */
```

Apply the same note to every affected declaration (interface, component, enum), **and** add a
`## Deprecations` entry to the current [upgrade guide](modules/docs/mdx) MDX. A deprecation
without an upgrade-guide entry is incomplete — see "Upgrade guides & breaking changes" below.

Full pattern list: [API_PATTERN_GUIDELINES.mdx](modules/docs/mdx/API_PATTERN_GUIDELINES.mdx).

### Storybook

Per-component convention under `modules/react/<component>/stories/`:

- `<Component>.stories.ts` — CSF file. `export default {...} as Meta<typeof X>`, a local
  `type Story = StoryObj<typeof X>`, and every story is `{render: ImportedExample}` — never
  inline JSX in the CSF file.
- `examples/<Name>.tsx` — one standalone, self-contained example per file, named to match the
  file, importing the component from its public subpath. Don't add shared helper functions or
  wrappers across example files — each example should be copy-pasteable on its own; consumers use
  these as reference code.
- `<Component>.mdx` — the doc page. Fixed structure: imports → `<Meta of={...} />` →
  `# Canvas Kit [Component]` → short description → `## Installation` → `## Usage` (first example
  titled exactly **"Basic Example"**, rendered with `<ExampleCodeBlock code={Example} />`) →
  `## Component API` (`<SymbolDoc name="[Component]" fileName="/react/" />`, which auto-generates
  the props table from JSDoc) → optional `## Specifications` (only if a Cypress spec exists).
- `testing.stories.tsx` / `visual-testing/*.stories.tsx` — Chromatic visual states. Chromatic is
  **off by default**; opt in with `parameters: {chromatic: {disable: false}}`.

Full guidelines: [DOCUMENTATION_GUIDELINES.mdx](modules/docs/mdx/DOCUMENTATION_GUIDELINES.mdx).

### Upgrade guides & breaking changes

Any breaking change, removal, or deprecation must be documented in the current version's upgrade
guide under [modules/docs/mdx](modules/docs/mdx) (e.g. `16.0-UPGRADE-GUIDE.mdx`), not just in the
PR description or changelog. This includes:

- New `@deprecated` exports (include the version in the JSDoc message, and add a
  `## Deprecations` entry with the migration path).
- Removed exports/props.
- Changed default values or behavior.
- Anything that requires a consumer to update their code to avoid breakage.

If you're not sure whether a change is breaking, treat it as breaking and flag it for review
rather than deciding it's minor. Breaking changes outside a `prerelease/major` branch are rare —
call it out explicitly if a change looks like it needs one.

## Testing

- **Unit:** Vitest + React Testing Library, in `modules/<pkg>/<component>/spec/*.spec.tsx`. Start
  element-component specs with `verifyComponent(Component, {})` (from `test-utils`) — it checks
  ref forwarding, `as`, prop/style/className merging, and event pass-through. Add
  `spec/SSR.spec.tsx` (`@jest-environment node`, `renderToString`) for anything rendered server-side.
- **Functional/a11y:** Cypress component tests in `cypress/component/<Component>.spec.tsx`. Mount
  an **imported Storybook example**, never ad hoc markup. Use Given/When/Then (`describe`/
  `context`/`it`) nesting in plain English. Every mounted example gets
  `it('should not have any axe errors', () => cy.checkA11y())`.
- **Visual:** Chromatic via `testing.stories.tsx` / `visual-testing/*.stories.tsx`. When adding a
  hover/focus/active/disabled pseudo-selector to a stencil, always pair it with a class twin
  (`'&:hover, &.hover'`) so `StaticStates` can capture it.
- **No DOM snapshot tests.** Prefer semantic assertions (`toContainElement`, role/ARIA queries)
  over class names or DOM-structure/index assertions.

Run `yarn test`, `yarn cypress:run`, and relevant `yarn typecheck:*` targets before calling
testing complete.

## Pull requests

- Fill out the [PR template](.github/PULL_REQUEST_TEMPLATE.md) — Summary (with `Fixes:`/
  `Resolves:` issue link), Release Category, and Release Note/Breaking Changes sections when
  applicable. Don't leave a placeholder or empty summary.
- PR titles are linted (`lint-pull-request.yml`, conventional-commit style: `type(scope): Subject`
  with `feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert`).
- Add the `ready for review` label once the PR is actually ready for human review. CodeRabbit
  auto-review is currently configured in [`.coderabbit.yaml`](./.coderabbit.yaml) for pushes to
  `support` and `prerelease/*` base branches; it is **not** wired to the `ready for review` label
  or to `pull_request_target` labeling events. Don't assume labeling alone triggers a bot review.
- Call out the areas you want reviewer focus on ("Where Should the Reviewer Start?", "Areas for
  Feedback?" in the template) instead of leaving them blank.

## Skills

This repo does not yet have a `.claude/skills` (or equivalent) folder with task-specific skills.
That's planned but not built — don't assume skills exist or fabricate references to one. When
skills are added, this section will point to them.

## Quick reference

**Do:**
- Use `createComponent`/`createContainer`/`createSubcomponent`/`createModelHook`.
- Use `createStyles`/`createStencil` + tokens from `@workday/canvas-tokens-web`.
- Import from `@workday/canvas-kit-react/<component>`.
- Document every prop with JSDoc; add `@deprecated` (with the version it landed in, from that
  package's `package.json`) + upgrade-guide entry for breaking changes.
- Write Storybook examples as standalone files; follow the fixed MDX structure.
- Reach for semantic HTML and native keyboard behavior before adding ARIA; add accessible names,
  full keyboard support, and visible focus indicators as part of implementing, not after.
- Add unit + Cypress (with `cy.checkA11y()`) tests for new/changed components.
- Explain the blast radius before touching shared config.

**Don't:**
- Use `Box`, `Flex`, `Grid`, `Stack`, `HStack`, `VStack`, style props, or `styled()` in new code.
- Hardcode colors, spacing, or other values that a token already covers.
- Use non-legacy `system.*` tokens in `modules/**/lib/**` when a `system.legacy.*` equivalent
  exists — library code must stay compatible across token package versions.
- Import the package barrel or anything under `/lib/`.
- Commit Cursor or Claude plan files, debug sessions, or other local AI session artifacts
  (`.cursor/`, `.claude/`, etc.).
- Add ARIA attributes speculatively, or suppress focus outlines unconditionally instead of
  scoping to `[data-whatinput='mouse'|'touch'|'pointer']`.
- Modify `tsconfig*.json`, build config, or CI workflows without explaining why first.
- Add DOM snapshot tests.
- Ship a breaking change without an upgrade-guide entry.
