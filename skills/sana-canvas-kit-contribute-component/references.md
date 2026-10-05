# Contribute a Component — References

Detail for [SKILL.md](SKILL.md). Worked example throughout: `SelectionGroup` (issue #1969).

## File layout

```text
modules/react/<name>/
├── index.ts                       # export * from each lib file (no default exports)
├── README.md                      # 3–5 lines + Storybook link (copy a sibling's shape)
├── LICENSE                        # copy from a sibling package
├── lib/
│   ├── <Name>.tsx                 # createContainer; subcomponent JSDoc inside subComponents
│   ├── <Name>List.tsx             # createSubcomponent('div')
│   ├── <Name>Item.tsx             # createSubcomponent('button') + stencil
│   └── hooks/
│       ├── use<Name>Model.tsx     # createModelHook extending useListModel
│       └── use<Name>Item.tsx      # composeHooks(...)
├── spec/
│   ├── tsconfig.json              # {"extends": "../../../../tsconfig.spec.json"}
│   ├── SSR.spec.tsx               # @jest-environment node + renderToString
│   └── <Name>.spec.tsx            # verifyComponent + behavior
└── stories/
    ├── tsconfig.json              # {"extends": "../../../../tsconfig.stories.json"}
    ├── <Name>.stories.ts          # CSF; every story is {render: ImportedExample}
    ├── <Name>.mdx                 # doc page (structure below)
    ├── testing.stories.tsx        # Chromatic states, chromatic: {disable: false}
    └── examples/<Example>.tsx     # one self-contained example per file

cypress/component/<Name>.spec.tsx  # mounts imported examples only
modules/react/index.ts             # add: export * from './<name>';
```

No per-component `package.json` or tsconfig path entries were needed for `modules/react`.

## Model and hook rules

```tsx
export const useThingModel = createModelHook({
  defaultConfig: {
    ...useListModel.defaultConfig,
    /** JSDoc every option, @default on enums/booleans */
    mode: 'single' as 'single' | 'multiple',
    orientation: 'horizontal' as typeof useListModel.defaultConfig.orientation,
  },
  requiredConfig: useListModel.requiredConfig,
})(config => {
  const selection =
    config.selection ||
    (config.mode === 'multiple' ? multiSelectionManager : singleSelectionManager);
  const list = useListModel(useListModel.mergeConfig(config, {selection, shouldVirtualize: false}));
  return {...list, state: {...list.state, mode: config.mode}, events: list.events};
});
```

```tsx
export const useThingItem = composeHooks(
  useListItemSelect,
  createElemPropsHook(useThingModel)((model, _, elemProps: {'data-id'?: string} = {}) => ({
    role: model.state.mode === 'single' ? 'radio' : 'checkbox',
    'aria-checked': isSelected(elemProps['data-id'] || '', model.state),
  })),
  useListItemRovingFocus,
  useListItemRegister // always last
);
```

- Controlled usage: accept `selectedIds` and sync with `events.setSelectedIds` in an effect;
  uncontrolled uses `initialSelectedIds`.
- `onSelect` can fire on mount when single-select auto-selects the first item — account for it in
  tests (`mock.mockClear()` after render) or avoid the auto-select.

## Sana styling checklist

Apply in `lib/` stencils:

- [ ] Radius `shape.md`–`shape.xxxl` → `extends: cornerShapeStencil` +
      `[cornerShapeStencil.vars.shape]: system.legacy.shape.lg` (not a raw `borderRadius`).
      Exception: stencils extending `buttonStencil` set `buttonStencil.vars.borderRadius`.
- [ ] Typography: explicit `fontFamily: system.fontFamily.default`,
      `fontWeight: system.fontWeight.normal`, and `system.legacy.fontSize/lineHeight/letterSpacing`
      for the level (see `MenuItem`). Render the label as a plain `<span>` that inherits color;
      wrapping in `Subtext` fights the selected color.
- [ ] Selected: `system.legacy.color.brand.surface.selected` +
      `system.legacy.color.brand.fg.selected`. `system.color.surface.selected` /
      `system.color.fg.selected` don't exist in tokens-web 4.4 even though Figma shows
      `--cnvs-sys-color-surface-selected`.
- [ ] Selected chips drop the visible border (`borderColor: 'transparent'`) and don't shift on
      hover/active — the border would compete with the focus indicator.
- [ ] Hover / pressed: `system.legacy.color.surface.overlay.hover.default` / `.pressed.default`,
      scoped to unselected items.
- [ ] Focus: `outline: 2px solid system.legacy.color.brand.border.primary` with
      `outlineOffset: -2px` (MenuItem pattern), suppressed only under
      `[data-whatinput='mouse'|'touch'|'pointer']`.
- [ ] Disabled: `opacity: system.opacity.disabled`, `cursor: 'default'`, match
      `:disabled, .disabled, [aria-disabled="true"]`.
- [ ] Every pseudo-state has a class twin: `'&:is(:hover, .hover)'`, `.active`, `.focus`,
      `.disabled`.
- [ ] Icons: set `[systemIconStencil.vars.color]: 'currentColor'` on the item; don't color icons
      separately.
- [ ] Spacing: `system.legacy.padding.*` / `gap.*`. There's no `system.legacy.gap.xxs`; 6px is
      `base.legacy.size75`.
- [ ] Error / caution group ring: copy preview `RadioGroup` (inset `box-shadow` using
      `system.legacy.color.brand.border.critical` / `.caution` + `focus.caution.inner`).

## Known gotchas

| Symptom                                                                                      | Cause                                                   | Fix                                                                                                              |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Module '@workday/canvas-kit-react/common' has no exported member 'CSProps'`                 | Wrong package                                           | Import `CSProps` from `@workday/canvas-kit-styling`                                                              |
| `Type ... has no properties in common with CSProps & {className, style}` from `handleCsProp` | Props interface doesn't extend `CSProps`                | `interface XProps extends CSProps`                                                                               |
| jsdom: `Cannot create property 'border-width' on string`                                     | `border` shorthand plus a nested `borderColor` override | Use `borderWidth` / `borderStyle` / `borderColor` longhands                                                      |
| `useLayoutEffect does nothing on the server` from your file                                  | Measurement effect in render path                       | No shared helper exists; use a local `typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect` |
| Same warning still appears in SSR spec                                                       | `useListItemRegister` → `useMountLayout` in collection  | Pre-existing; not caused by the new component                                                                    |
| `'React' is declared but never read`                                                         | Only types used                                         | Drop the import                                                                                                  |
| Figma `get_design_context` returns "nothing selected"                                        | Called on a page/canvas node                            | Use `get_metadata` first, then call on an instance id                                                            |

## Stories and tests

Required stories (add RTL if siblings have one): Basic, each mode/variant, each width/size variant,
Disabled, Error, Caution, RTL.

MDX order: imports → `<Meta of={...} />` → `# Canvas Kit <Name>` → description → `## Installation` →
`## Usage` (first example titled **"Basic Example"**, `<ExampleCodeBlock code={Basic} />`) →
variants → `### Accessibility` → `## Component API`
(`<SymbolDoc name="<Name>" fileName="/react/" />`) → `## Specifications`
(`<Specifications file="./cypress/component/<Name>.spec.tsx" name="<Name>" />`).

Tests:

- Unit spec starts with `verifyComponent(<Name>.Item, {modelFn: use<Name>Model})`, then role/ARIA
  and callback assertions. No snapshots, no class-name assertions.
- `SSR.spec.tsx` renders the full compound tree with `renderToString`.
- Cypress: mount imported examples; every example gets
  `it('should not have any axe errors', () => cy.checkA11y())`; cover click, arrow keys, Space,
  disabled, RTL. Use Given/When/Then `describe`/`context`/`it` nesting.
- `testing.stories.tsx`: `StaticStates` + `ComponentStatesTable` with columns for Default, Hover,
  Focus, Active, Disabled (via class twins) and rows per mode/selection; separate table for Error /
  Caution.

## PR summary template

```markdown
## Summary

Adds `<Name>` (<package>), a compound component for <purpose>.

Resolves: #<issue>

## Release Category

Components

## What's included

- `<Name>`, `<Name>.List`, `<Name>.Item`, `use<Name>Model`
- Variants: <list>
- States: <list>
- Stories, MDX, Chromatic visual tests, unit + SSR + Cypress specs

## Where Should the Reviewer Start?

`modules/react/<name>/lib/hooks/use<Name>Model.tsx`, then `<Name>Item.tsx` stencil.

## Areas for Feedback?

### needs-design (TODO)

- [ ] <each visual decision made without explicit spec>

### needs-a11y (TODO)

- [ ] <each role/keyboard/announcement decision, with the APG pattern used>

## Assumptions

- <branch target, package tier, controlled/uncontrolled behavior, anything not in the issue>

## Validation

- [ ] yarn typecheck
- [ ] yarn test modules/react/<name>
- [ ] yarn cypress:run --spec cypress/component/<Name>.spec.tsx
- [ ] Storybook compared to Figma per state (Sana theme)
```
