---
name: sana-canvas-kit-contribute-component
description: >-
  Maintainer workflow for adding a new component to the canvas-kit repo itself (modules/react,
  modules/preview-react, modules/labs-react) from a GitHub issue and Figma spec: research sibling
  components, propose a plan, scaffold the package, build with collection models and Sana-aligned
  stencils, add stories/tests/SSR/Cypress, validate, and write the PR summary. Use when the user
  asks to implement a Canvas Kit GitHub issue, create a new Canvas Kit component, or contribute a
  component to the library. Not for consumer apps — use /sana-canvas-kit-builder there.
---

# Contribute a Component to Canvas Kit

Maintainer-only. This covers building a component **inside the canvas-kit repo**, where
[AGENTS.md](../../AGENTS.md) and [STYLE.md](../../STYLE.md) apply (`system.legacy.*` in `lib/`,
`cornerShapeStencil`, Chromatic class twins, public API impact). For components in a consumer app,
use `/sana-canvas-kit-builder` instead.

Factory patterns → `/sana-canvas-kit-builder`. Token roles → `/sana-canvas-kit-tokens`. A11y
patterns → `/sana-canvas-kit-accessibility`. This skill adds the repo-specific workflow on top.

## When to apply

- "Implement GitHub issue #NNNN" for a new Canvas Kit component
- "Create a `<Name>` component in Canvas Kit" / "add `<Name>` to modules/react"
- Iterating on a new component's visuals to match the current Sana design

## Workflow

Copy this checklist and track progress:

```text
- [ ] 1. Gather the spec: GitHub issue + Figma (metadata → design context per state)
- [ ] 2. Pick the target branch and package tier (Main / Preview / Labs)
- [ ] 3. Study the closest sibling components; grep for existing helpers before inventing
- [ ] 4. Propose a plan to the user (API, a11y roles, styling, open design/a11y questions) — wait
- [ ] 5. Scaffold the package (see file layout in references.md)
- [ ] 6. Model: if list/grid/selection/roving focus — extend collection models; else createModelHook
- [ ] 7. Subcomponents: for collection items, compose collection elemProps hooks in the right order
- [ ] 8. Style with Sana-aligned stencils (system.legacy.*, cornerShapeStencil, class twins)
- [ ] 9. Stories, examples, MDX, visual-testing stories
- [ ] 10. Tests: unit (verifyComponent), SSR, Cypress with checkA11y
- [ ] 11. Validate: typecheck, test, lint, cypress, Storybook visual check against Figma
- [ ] 12. PR summary: changed files, assumptions, TODOs for needs-design / needs-a11y
```

### 1. Gather the spec

```bash
gh issue view <number> --json title,body,labels,comments
```

Figma (via the Figma MCP):

1. Call `get_metadata` on the spec page node from the issue link. Page/canvas-level nodes often fail
   with `get_design_context`; metadata gives you the child instance IDs and usually a
   **Documentation** text node with anatomy, states, and a11y guidance — read it in full.
2. Call `get_design_context` (with `disableCodeConnect: true`) on one instance **per state**
   (unselected, selected, disabled, error…). The output is Tailwind reference code: translate the
   `var(--cnvs-sys-…)` names to tokens; never copy Tailwind or raw px.

Labels like `needs-design` / `needs-a11y` don't block work, but every decision you make in those
areas becomes a TODO in the PR summary, not a silent guess in code.

### 2. Branch and tier

- New additive component → `prerelease/minor`. Breaking changes → `prerelease/major` only. Check
  `git branch --show-current` and flag a mismatch rather than assuming.
- Main (`modules/react`) vs Preview (`modules/preview-react`) vs Labs: if the API is likely to
  change after design/a11y review, ask whether Preview or Labs is the better home.

### 3. Study siblings

Read the closest existing components end to end (lib, hooks, stories, specs, Cypress) before writing
anything. Pick siblings by behavior, not by name:

| Behavior                                      | Read                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------ |
| Compound component over a list with selection | `modules/react/segmented-control`, `modules/react/tabs`                              |
| Selection model, roving focus, keyboard       | `modules/react/collection` (`useListModel`, `useSelectionListModel`, `useListItem*`) |
| Error / caution group ring, form wiring       | `modules/preview-react/radio` (`RadioGroup`), `modules/react/checkbox`               |
| Sana selected / hover / focus item styling    | `modules/react/menu/lib/MenuItem.tsx`                                                |
| Multi-selection examples                      | `modules/react/collection/stories/mdx/examples/MultiSelection.tsx`                   |

Before adding any utility (SSR-safe layout effect, focus helper, id helper), grep the repo for an
existing one. If none exists, keep the local version private to the file that needs it.

### 4. Propose a plan — then stop

Present: public API (`<Name>`, `<Name>.List`, `<Name>.Item`, `use<Name>Model`), model config with
defaults, ARIA roles per mode, keyboard behavior, styling approach, file list, and the open
design/a11y questions. Wait for the user before editing.

### 5–7. Build

Use the file layout and model/hook rules in [references.md](references.md#file-layout). Key rules:

- **Collection decision:** if the component is a list, grid, or set of items with selection,
  roving focus, or arrow-key navigation (`SegmentedControl`, `Tabs`, `Menu`), extend collection
  models — see [references.md](references.md#model-and-hook-rules). Skip collection for a single
  control with no item set (button, banner, text field); use `createModelHook` alone.
- When using collection: extend `useListModel` (or `useGridModel` / `useOverflowListModel`); pick
  `singleSelectionManager` / `multiSelectionManager` via config. `createModelHook` already
  provides `should<Event>` / `on<Event>` — don't reimplement them.
- `composeHooks` runs right-to-left; `useListItemRegister` goes **last** (except when a later
  hook must override a prop register sets — see `useSegmentedControlItem`). Compose
  `useListItemRovingFocus` / `useListItemSelect` directly — never call them inside another
  `createElemPropsHook` body.
- Add `index.ts` exports and `export * from './<name>'` in `modules/react/index.ts`.

### 8. Style for Sana

v16 Sana parity is where first drafts most often miss. Follow the checklist in
[references.md](references.md#sana-styling-checklist) — it lists the token substitutions and
patterns that typecheck and design review caught on SelectionGroup.

### 9–10. Stories and tests

See [references.md](references.md#stories-and-tests) for the required story set, MDX structure, and
test conventions.

### 11. Validate

```bash
cd modules/react && yarn typecheck:src           # fast package-level typecheck
yarn typecheck                                   # full set before PR
yarn test modules/react/<name>
yarn eslint modules/react/<name> cypress/component/<Name>.spec.tsx --fix
yarn cypress:run --spec cypress/component/<Name>.spec.tsx
yarn start                                       # Storybook on :9001, compare to Figma per state
```

Compare every state in Storybook (with the Sana theme) side by side with the Figma instances from
step 1. Typecheck passing does not mean it looks right.

### 12. PR summary

Use the template in [references.md](references.md#pr-summary-template). Title format:
`feat(<scope>): Add <Name> component`. Don't stage `.cursor/` or `.claude/` artifacts.

## Anti-patterns

- ❌ Editing files before the user approves the plan
- ❌ Copying Tailwind / px values from Figma output instead of mapping to tokens
- ❌ Non-legacy `system.*` tokens in `lib/` when a `system.legacy.*` path exists
- ❌ Inventing ARIA when a sibling component or APG pattern already covers it
- ❌ Shared helpers across example files (each example must be copy-pasteable)
- ❌ Inline JSX in the CSF file, DOM snapshot tests, or ad hoc markup in Cypress
- ❌ Touching tsconfig / build / CI config or unrelated MCP/generated files
- ❌ Using `yarn create-component` output as-is — its templates use `Box`, which new code must not

## Additional resources

- [references.md](references.md) — file layout, Sana styling checklist, known gotchas, test
  conventions, PR template
- `modules/docs/mdx/CREATING_COMPOUND_COMPONENTS.mdx`, `API_PATTERN_GUIDELINES.mdx`,
  `DOCUMENTATION_GUIDELINES.mdx`
