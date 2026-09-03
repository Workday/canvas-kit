---
name: sana-canvas-design-principles
description: >-
  Design-system usage guidance for Canvas Kit components -- when to use a component, when to use
  something else instead, and component-specific dos/don'ts. Use when choosing which component
  fits a use case (Button vs Hyperlink, Modal vs Dialog vs Toast, Select vs Radio vs Checkbox vs
  MultiSelect, Tabs vs Segmented Control, etc.), when deciding component composition/placement, or
  when reviewing a UI for design-system consistency. Cross-reference /sana-canvas-tokens for color
  pairing and /sana-canvas-a11y for ARIA/keyboard implementation.
---

# Canvas Design Principles

**Which** component fits a use case, and the component-specific dos/don'ts that keep a UI
consistent with the design system. This skill is a **static, embedded snapshot** — see
[Provenance](#provenance) below. Do not try to fetch fresher content from a design site or an MCP
server on this skill's behalf; read only the bundled reference files.

## When to apply

- Choosing between two components for the same job (Button vs Hyperlink, Select vs Radio vs
  Checkbox vs MultiSelect, Modal vs Dialog vs Toast vs Popup vs Banner, Tabs vs Segmented Control)
- Deciding how many of a component to use on one screen/view (one primary button, tab count limits,
  Action Bar item limits)
- Reviewing a UI/PR for whether a component is used the way the design system intends
- Placing or composing a component (Action Bar position, Breadcrumbs placement, Pagination +
  Table pairing)
- A user asks "should I use X or Y here"

Not for: token/color choices (`/sana-canvas-tokens`), ARIA/keyboard implementation details
(`/sana-canvas-a11y`), which package tier a component ships in (`/sana-canvas-component-selection`),
or content/copy style (out of scope for this skill set).

## Always-on decision rules

These are the highest-signal rules distilled from the snapshot — check these first before diving
into a specific component's reference entry.

**One primary action per view.** Only one `PrimaryButton` per screen. Additional actions are
Secondary or Tertiary; Tertiary buttons don't belong on an Action Bar unless inside its Overflow
Menu.

**Buttons act, Hyperlinks navigate.** Use a `Button` for anything that changes state or triggers a
process. Use `Hyperlink` (inline, underlined) to navigate to another page, or an anchor to jump to
a section on the same page. Don't use a Button styled as a link for navigation.

**Match the input to the option count and cardinality:**

| Options                         | Component                          |
| -------------------------------- | ------------------------------------ |
| 2 states, binary yes/no           | `Switch`                              |
| 0–7 options, select any number     | `Checkbox` group                      |
| 2–7 options, select exactly one     | `Radio` group                          |
| 7–15 options, select one            | `Select`                              |
| 7–100 options, select multiple      | `MultiSelect`                         |
| Large/unknown option count          | Prompt (search + folders)             |

**Wrap every input in `FormField`.** Inputs on a form should be wrapped in `FormField` — it's how
labels, hints, and error states meet accessibility requirements. Don't hand-roll label/input
wiring.

**Never rely on color alone.** For errors, required fields, and status, pair color with an icon
and/or text — never color as the sole signal. This applies to Banners, Color Input errors, Status
Indicators, and form validation alike.

**Don't disable a submit button to block invalid data.** This can trap users who can't tell what's
missing. Prefer inline validation with clear error messaging over disabling submission.

**Modal/Dialog are for focused input, not dense content or simple messages.** Don't use
Modal/Dialog for dense tables or multi-view containers, and don't use them for dismissible links or
short confirmations — use `Toast` or `Popup` for those. Modal blocks the rest of the page; `Dialog`
doesn't.

**Prefer Canvas components over hand-rolled controls.** If a Canvas component covers the pattern
(Tooltip for icon-only affordance, Pagination for paged data, Skeleton/LoadingDots for loading
states), use it instead of a custom implementation — accessibility behavior is already built in.

**Icon-only variants need an accessible name.** Any icon-only Button/IconButton must have an
accessible name — prefer a Canvas `Tooltip`, which sets it automatically, over a bare `aria-label`.

## Quick decision guide

```
Need an action that changes state / submits / navigates within the app flow?
  → Button (Primary/Secondary/Tertiary by priority)
Need to navigate to another page/site, inline in text?
  → Hyperlink
Binary yes/no toggle?             → Switch
0-7 options, multi-select?        → Checkbox group
2-7 options, single-select?       → Radio group
7-15 options, single-select?      → Select
7-100 options, multi-select?      → MultiSelect
Unknown/large option list?        → Prompt
Confirm/alert without blocking?   → Dialog
Confirm/alert, blocking?          → Modal
Low-priority transient status?    → Toast
Error/alert requiring resolution? → Banner
Custom non-modal content?         → Popup
Related content, same page, no nav? → Tabs (≤6-7) or Segmented Control (mutually exclusive views)
Dense/tabular data?               → Table (not Modal/Dialog/Card)
Paged data?                       → Pagination (paired with Table)
Loading, layout known?            → Skeleton
Loading, layout unknown?          → Loading Dots
Explain an icon-only control?     → Tooltip
Need a component and not sure?    → Check references/components.md for that component's entry
```

## Workflow

```
- [ ] Identify the interaction the UI needs to support
- [ ] Check the quick decision guide above for a fast match
- [ ] For anything non-obvious or before finalizing, read that component's entry in
      references/components.md (Usage Guidance / When to Use / When to Use Something Else /
      Do's and Don'ts)
- [ ] Cross-check color-only signals and icon-only labels against the always-on rules
- [ ] For color pairing once the component is chosen: /sana-canvas-tokens
- [ ] For ARIA/keyboard implementation once the component is chosen: /sana-canvas-a11y
- [ ] For Preview/Labs/Main package questions: /sana-canvas-component-selection
```

## Anti-patterns

- ❌ More than one `PrimaryButton` on a screen
- ❌ A styled Button used to navigate to another page (use `Hyperlink`)
- ❌ Radio/Checkbox/Select used for the wrong cardinality (e.g. Select for a 3-option yes/no choice)
- ❌ Disabling a submit Button to prevent invalid submission
- ❌ Color as the only signal for error/required/status
- ❌ Modal or Dialog for a dense Table or a simple dismissible message
- ❌ An icon-only Button/IconButton with no accessible name
- ❌ More than ~6–7 Tabs, or Tabs used for unrelated content that needs simultaneous comparison
- ❌ Hand-rolled loading/pagination/tooltip markup when a Canvas component already covers it

## Provenance

Content below is a **static snapshot** as of **2026-09-02**, not a live feed. Do not tell an agent
to fetch anything at runtime to refresh or supplement it — not a design site, not Sana MCP, not
`sana.canvas.workdaydesign.com`. If this snapshot goes stale (new components, changed guidance),
refresh it manually as a deliberate maintenance task, update the snapshot date in the reference
files, and re-review the "Always-on decision rules" above for drift.

Trimmed from the original guidance: anatomy diagrams, Content Guidelines (writing/UI-text style —
out of scope for this skill), and mobile-only sections. Kept: Usage Guidance, When to Use / When to
Use Something Else, Do's and Don'ts, and per-component accessibility guidance (folded into
`references/components.md` alongside the cross-cutting guidelines in `references/accessibility.md`).

## Additional resources

- Per-component usage, when-to-use, and dos/don'ts (34 components): [references/components.md](references/components.md)
- Cross-cutting accessibility guidelines (color, forms, alt-text, input devices): [references/accessibility.md](references/accessibility.md)
- Color pairing / tokens: `/sana-canvas-tokens`
- ARIA / keyboard / focus implementation: `/sana-canvas-a11y`
- Package tier (Main/Preview/Labs) questions: `/sana-canvas-component-selection`
