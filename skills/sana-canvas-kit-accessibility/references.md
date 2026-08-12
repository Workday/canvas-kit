# Canvas Kit Accessibility Reference

> Guidance only — not automated validation or WCAG certification. Verify with keyboard + screen
> reader testing.

## MCP: `get-accessibility-guidelines`

Returns JSON summary + `docs://accessibility/{slug}` resource links. When available, also includes
`docs://examples/{component}` and `docs://examples/{component}/accessibility`.

### Scenarios

| Slug                   | Topic                                      |
| ---------------------- | ------------------------------------------ |
| `overview`             | Core concepts, naming, utilities           |
| `page-structure`       | Landmarks, headings, main content          |
| `forms`                | Labels, errors, input association          |
| `tables`               | Headers, filterable/sortable patterns      |
| `popups`               | Focus, reading order, portals              |
| `aria-live`            | Live region usage                          |
| `headers`              | Page/app headers                           |
| `side-panel`           | Side panel navigation                      |
| `windows-high-contrast`| WHCM / forced-colors                       |
| `color-contrast`       | Contrast and color roles                   |

### Components (MCP slug → typical scenarios)

| Component slug              | Auto-included scenarios        |
| --------------------------- | ------------------------------ |
| `form-field`, `text-input`, `text-area`, `checkbox`, `select`, `multi-select`, `radio`, `switch-(new)` | `forms`, `overview` |
| `menu`, `modal`, `dialog`, `popup`, `popper`, `tooltip` | `popups`, `overview`           |
| `table`                     | `tables`, `overview`           |
| `tabs`, `card`, `breadcrumbs`, `side-panel`, `expandable` | `page-structure`, `overview` |
| `banner`, `toast`, `pill`, `status-indicator`, `skeleton` | `aria-live`, `color-contrast`, `overview` |

Use the exact slug from the MCP tool enum (e.g. `buttons`, not `button`).

### Example calls

```json
{"scenario": "popups"}
{"component": "modal"}
{"component": "select", "scenario": "forms"}
```

## Repo documentation map

| File | Use when |
| ---- | -------- |
| `accessibility/AccessibilityOverview.mdx` | Naming, accessibility tree, `useUniqueId`, `AccessibleHide` |
| `accessibility/PageStructure.mdx` | Landmarks, heading hierarchy, reflow |
| `accessibility/Popups.mdx` | Inline popups, `aria-owns`, initial/return focus |
| `accessibility/InlinePortals.mdx` | Portal + reading order testing |
| `accessibility/AriaLiveRegions.mdx` | `AriaLiveRegion` patterns, debouncing |
| `accessibility/TablesAdvanced.mdx` | Complex table interactions |
| `accessibility/TestingTableWithFormFields.mdx` | Tables containing form controls |
| `accessibility/Headers.mdx` | Application header patterns |
| `accessibility/SidePanel.mdx` | Side panel a11y |
| `accessibility/WindowsHighContrastThemes.mdx` | WHCM testing |

## Popup component selection

| Component | Focus trap | Overlay | Typical use |
| --------- | ---------- | ------- | ----------- |
| `Modal`   | Yes        | Yes     | Blocking confirmation, forms in overlay |
| `Dialog`  | Configurable | Optional | Dialog pattern with `aria-owns` option |
| `Popup`   | No         | Optional | Popovers, lightweight panels |
| `Menu`    | No         | No      | Action lists, dropdowns |
| `Tooltip` | No         | No      | Supplementary description on focus/hover |

## Keyboard quick reference (APG)

| Widget        | Required keys beyond Tab                          |
| ------------- | ------------------------------------------------- |
| Menu          | ↑↓ navigate, Enter/Space activate, Escape close   |
| Listbox       | ↑↓, Home/End, typeahead, Enter select             |
| Tabs          | ←→ or ↑↓ between tabs, Tab into panel             |
| Dialog        | Tab cycle, Escape close                           |
| Combobox      | ↓ open, typeahead, Enter select, Escape close     |
| Radio group   | ↑↓ or ←→ within group                             |
| Disclosure    | Enter/Space toggle                                |

## FormField checklist

- [ ] Visible label via `FormField.Label` (not placeholder alone)
- [ ] Hint wired when helper text exists
- [ ] Error visible + associated (`FormField.Error`)
- [ ] `aria-invalid` when in error state
- [ ] Required state communicated (not color alone)

## Testing checklist

- [ ] Tab through entire flow; no keyboard traps except intentional modals
- [ ] Escape closes dismissible overlays
- [ ] Screen reader announces control names and states
- [ ] Focus returns to trigger after popup close
- [ ] `cy.checkA11y()` on Cypress component specs (axe baseline)
- [ ] Manual test at 1280×1024 @ 400% zoom for reflow (no critical clipping)

## Related skills

- Custom components / elemProps hooks: `/sana-canvas-builder`
- `aria-disabled` vs `disabled`, Preview tiers: `/sana-canvas-component-selection`
- Focus ring styling in stencils: `/sana-canvas-styling`
