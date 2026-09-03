---
name: sana-canvas-a11y
description: >-
  Build accessible UI with Canvas Kit. Use when adding ARIA, labels, keyboard support, focus
  management, popups/portals, live regions, forms accessibility, or reviewing a11y. Prefer semantic
  HTML over hand-added ARIA. For custom component factories see /sana-canvas-builder; for deprecated
  props like disabled vs aria-disabled see /sana-canvas-component-selection.
---

# Canvas Kit Accessibility

Accessibility is not a follow-up pass — implement it while you build, not only when writing tests.

**Guiding principle:** [No ARIA is better than Bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).
Prefer semantic HTML and native keyboard behavior. Only add ARIA that a pattern actually requires.

Building custom components → `/sana-canvas-builder`. Deprecated a11y-related props (`disabled` on
`MenuItem`, etc.) → `/sana-canvas-component-selection`.

## When to apply

- Adding or reviewing interactive UI (buttons, links, inputs, menus, dialogs, tabs)
- Choosing Modal vs Popup vs Menu vs Dialog
- Wiring labels, errors, hints, or live announcements
- Focus on open/close, keyboard traps, Escape dismissal
- User asks for accessible, screen-reader-friendly, or keyboard-navigable UI

For deeper docs, call MCP `get-accessibility-guidelines` (see [MCP lookup](#mcp-lookup)). Scenario
and component slug tables: [references.md](references.md).

## Core rules

1. **Semantic HTML first** — `<button>`, `<a href>`, `<input>`, `<label>` before `role` on a `<div>`.
2. **Every interactive element needs an accessible name** — see [Naming](#accessible-names).
3. **Keyboard before mouse-only** — Tab/Shift+Tab at minimum; APG patterns often need arrow keys,
   Escape, Enter/Space.
4. **Visible focus by default** — use `:focus-visible` so keyboard users get a focus ring while
   pointer clicks rely on browser heuristics. Never remove focus outlines unconditionally (see
   [Focus](#focus-indicators)).
5. **Follow APG exactly** — if you add ARIA, match the
   [WAI-ARIA APG pattern](https://www.w3.org/WAI/ARIA/apg/patterns/) for that widget. Don't invent
   role/state combinations.
6. **When in doubt, ask** — bad ARIA is worse than none.

Automated checks (`cy.checkA11y()`, axe) catch a fraction of real issues. They don't verify that
labels make sense, keyboard flow is logical, or focus lands somewhere sensible after an action.

## Accessible names

Priority order (highest first):

1. `aria-labelledby` — reference to an existing visible element's `id`
2. `aria-label` — string when no visible label exists
3. Visible text / native `<label htmlFor={id}>` on the control

**Do not** use `title` or `placeholder` as the only label — screen readers treat them inconsistently.

```tsx
// ✅ Native label
<FormField>
  <FormField.Label>Email</FormField.Label>
  <TextInput />
</FormField>

// ✅ aria-labelledby when label is separate
<Heading id={headingId}>Notifications</Heading>
<Switch aria-labelledby={headingId} />

// ❌ placeholder as sole label
<TextInput placeholder="Email" />
```

Descriptions (helper text, errors) use `aria-describedby`. Errors often also need `aria-invalid`.

Use `useUniqueId()` from `@workday/canvas-kit-react/common` when wiring `id` / `aria-labelledby` /
`aria-controls` across compound subcomponents.

## Roles and native elements

| Need              | Prefer                         | Not                          |
| ----------------- | ------------------------------ | ---------------------------- |
| Click action      | `<button type="button">`       | `<div onClick>`              |
| Navigation        | `<a href="...">`               | `<span onClick>`             |
| Text input        | `<input>` / Canvas `TextInput` | `contentEditable` div        |
| Toggle            | `Checkbox` / `Switch`          | custom div + `role="checkbox"` |
| Expand/collapse   | `Expandable`, `Disclosure`     | hand-rolled `aria-expanded` on div |

Reach for Canvas Kit components that already implement APG behavior (`Menu`, `Modal`, `Tabs`,
`Select`, `FormField`) before rebuilding patterns.

## Keyboard navigation

| Pattern        | Keys (typical)                                      | Canvas Kit starting point      |
| -------------- | --------------------------------------------------- | ------------------------------ |
| Button/link    | Enter, Space (button)                               | `PrimaryButton`, `Hyperlink`   |
| Menu / listbox | Arrows, Enter, Escape, typeahead                    | `Menu`, `Select`, `MultiSelect`|
| Tabs           | Arrow keys between tabs, Tab into panel             | `Tabs` (Preview)               |
| Dialog/modal   | Tab cycle, Escape to close                          | `Modal`, `Dialog`              |
| Tooltip        | Escape (if open), focus/hover on target             | `Tooltip`                      |
| Radio group    | Arrows within group                                 | `Radio` / `RadioGroup` (Preview)|

Tab/Shift+Tab alone is **not** enough for composite widgets — check the APG for the pattern you're
implementing.

Deprecated: `disabled` on `MenuItem` — use `aria-disabled` (`/sana-canvas-component-selection`).

## Focus indicators

Required by default. Canvas Kit uses **`:focus-visible`** — browser heuristics decide when focus
styles apply (keyboard navigation shows the ring; most pointer clicks do not). Do **not** use
`data-whatinput` or `InputProvider`; those were removed in v14.

When extending stencils or adding custom focus styles:

```tsx
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customButtonStyles = createStyles({
  '&:focus-visible, &.focus': {
    outline: `2px solid ${system.legacy.color.brand.focus.primary}`,
    outlineOffset: '2px',
  },
});
```

- **`:focus-visible`** — real keyboard/focus navigation
- **`&.focus`** — static state twin for visual testing (Chromatic `StaticStates`); pair with
  `:focus-visible` the way Canvas Kit components do

Do not remove focus outlines globally (`outline: none` on `:focus` without a `:focus-visible`
replacement). Canvas Kit components already follow this pattern — preserve it when extending
stencils. `hideMouseFocus` / `mouseFocusBehavior` are deprecated — use `:focus-visible` instead.

## Popups, portals, and focus

Popups add reading-order and focus problems. Pick the right primitive:

| Need                                      | Component        | Notes                                      |
| ----------------------------------------- | ---------------- | ------------------------------------------ |
| Modal overlay + focus trap                | `Modal`          | Blocking dialog; use for true modals       |
| Dialog with `aria-owns` reading order     | `Dialog`         | Non-blocking or custom dialog patterns     |
| Lightweight popover, no trap              | `Popup`          | See inline portal / `aria-owns` patterns    |
| Action list                               | `Menu`           | `Menu.Item` vs `Menu.Option` for selection |
| Hover/focus supplementary text            | `Tooltip`        | Target must be focusable                   |

**Reading order ≠ focus order.** Moving focus into a popup helps announcements but does not fix DOM
order when content is portaled to `document.body`.

Patterns (detail in `modules/docs/mdx/accessibility/Popups.mdx`):

- **Inline / no portal** — `portal={false}` on `Popup.Popper`; DOM order matches reading order
- **Portaled + `aria-owns`** — `Dialog` pattern; support varies; tab order still follows real DOM
- **Initial focus** — `useInitialFocus` so screen readers announce new content on open
- **Return focus** — `useReturnFocus` to the trigger on close

Theme: portaled popups inherit CSS variables from `<html>`. Set `data-theme="sana-canvas"` on
`<html>` or use `CanvasProvider` theme forwarding — see v16 upgrade guide.

Before custom dismissal logic, read `Popups.mdx`, `InlinePortals.mdx`.

## Forms

Use `FormField` compound API for labels, hints, and errors:

```tsx
<FormField>
  <FormField.Label>Password</FormField.Label>
  <FormField.Input as={TextInput} type="password" />
  <FormField.Hint>At least 12 characters</FormField.Hint>
  <FormField.Error>Password is required</FormField.Error>
</FormField>
```

- Associate errors with `aria-invalid` and visible error text
- Group related radios/checkboxes with `FormField` + `role="group"` where appropriate
- Don't rely on color alone for error/caution — use text and icons
- Checked-state contrast: custom `brand.success` themes must maintain 3:1 against white checkmarks
  (v16 Checkbox/Radio/Switch)
- **Which color pair to use** for error/warning/success text and surfaces → `/sana-canvas-tokens`
  (accessible color pairings section). This skill covers *that* color can't be the only signal;
  `/sana-canvas-tokens` covers *which* token pair guarantees contrast.

MCP: `get-accessibility-guidelines` with `{"scenario": "forms"}` or `{"component": "form-field"}`.

## Live regions

Use `AriaLiveRegion` from `@workday/canvas-kit-react/common` for dynamic status text — not for
interactive content.

```tsx
import {AriaLiveRegion} from '@workday/canvas-kit-react/common';

<AriaLiveRegion>3 results found</AriaLiveRegion>
```

Rules:

- **Plain text only** — no links, buttons, or images inside live regions
- **Polite** by default — `assertive` only when interruption is truly required
- **Announce once** — users cannot replay; debounce noisy updates (e.g. character counts)
- **Don't overuse** — frequent announcements are disruptive

Hide visual-only live text with `AccessibleHide` or `as={AccessibleHide}`.

Read `modules/docs/mdx/accessibility/AriaLiveRegions.mdx` before inventing announcement logic.

## Tables

- Use `Table` / `BaseTable` with proper header cells (`scope` where needed)
- For filterable/sortable tables, see `TablesAdvanced.mdx` and `TestingTableWithFormFields.mdx`
- Name tables via `<caption>`, `aria-label`, or `aria-labelledby` (e.g. heading + `useUniqueId`)

MCP: `{"scenario": "tables"}` or `{"component": "table"}`.

## Page structure

- One logical `<main>` per view; use `Heading` levels in order (don't skip levels for styling)
- Landmarks: `header`, `nav`, `main`, complementary regions — see `PageStructure.mdx`
- Reflow: avoid `min-width` > 320px at small breakpoints; test at 1280×1024 @ 400% zoom

## Windows High Contrast

Canvas Kit components include `forced-colors` / high-contrast fallbacks where gradients or shadows
would disappear. Don't remove borders that exist for WHCM visibility (e.g. `Skeleton` placeholders).

See `WindowsHighContrastThemes.mdx`.

## Workflow

```
- [ ] Can this be native HTML or an existing Canvas Kit component?
- [ ] Every interactive control has an accessible name (not placeholder/title alone)
- [ ] Keyboard: Tab + pattern-specific keys (arrows, Escape, Enter/Space)
- [ ] Focus visible via `:focus-visible` (not `data-whatinput` or unconditional `outline: none`)
- [ ] Popup: right primitive (Modal vs Menu vs Popup); initial + return focus
- [ ] Dynamic status: AriaLiveRegion (plain text, debounced) — not alert() or title
- [ ] No speculative ARIA — matches APG or remove it
- [ ] MCP get-accessibility-guidelines for component/scenario
- [ ] cy.checkA11y() on Cypress examples (does not replace manual keyboard testing)
```

## MCP lookup

`get-accessibility-guidelines` returns guidance links — it does **not** scan code or certify WCAG.

At least one of `component` or `scenario` is required:

```json
{"scenario": "forms"}
{"component": "menu"}
{"component": "checkbox", "scenario": "forms"}
```

Also returns `docs://examples/{component}` and `docs://examples/{component}/accessibility` when
available. Prefer component accessibility sections for implementation-specific rules.

Common scenarios: `overview`, `forms`, `popups`, `tables`, `aria-live`, `page-structure`,
`headers`, `side-panel`, `windows-high-contrast`, `color-contrast`.

Full slug lists: [references.md](references.md).

## Anti-patterns

- ❌ `role="button"` on `<div>` when `<button>` works
- ❌ `aria-label` duplicating visible text (redundant noise)
- ❌ `placeholder` as the only input label
- ❌ `title` as accessible name
- ❌ `tabIndex={0}` on non-interactive elements to "make it focusable"
- ❌ `outline: none` on `:focus` without a `:focus-visible` replacement
- ❌ `data-whatinput` / `hideMouseFocus` for focus suppression (deprecated — use `:focus-visible`)
- ❌ Nested interactive controls (`<button>` wrapping `TertiaryButton`)
- ❌ `alert()` or unbounded `assertive` live regions for routine updates
- ❌ Hand-rolled menu/dialog when `Menu`/`Modal`/`Dialog` fits
- ❌ `disabled` on `MenuItem` (use `aria-disabled`)
- ❌ Inventing ARIA roles/states not in APG

## Decision guide

```
Need a label?                    → visible <label> / FormField.Label > aria-labelledby > aria-label
Building a popup?                → Modal (trap) vs Dialog vs Popup vs Menu — see table above
Selectable menu items?           → Menu.Option + aria-selected (not Menu.Item alone)
Status after filter/search?      → AriaLiveRegion (polite, debounced)
Custom expand/collapse?          → Expandable / Disclosure patterns (/sana-canvas-builder)
Extending focus styles?          → `:focus-visible` (+ `&.focus` for static states)
Which component a11y rules?      → MCP get-accessibility-guidelines + docs://examples/{slug}/accessibility
Deprecated a11y props?           → /sana-canvas-component-selection
Which color pairing is accessible? → /sana-canvas-tokens (color-contrast section)
Choosing between two components? → /sana-canvas-design-principles
```

## Additional resources

- Overview: `modules/docs/mdx/accessibility/AccessibilityOverview.mdx`
- Scenario index: [references.md](references.md)
- MCP install: `modules/mcp/stories/mdx/MCPDocs.mdx`
- Cypress: mount Storybook examples + `cy.checkA11y()` per repo testing guidelines
