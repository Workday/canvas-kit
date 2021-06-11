# Canvas Kit React Side Panel

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/preview-react/README.md">
  <img src="https://img.shields.io/badge/PREVIEW-beta-blueviolet" alt="PREVIEW: Beta" />
</a> This component is in Preview because it has not been converted to a [Compound Component](../../docs/mdx/COMPOUND_COMPONENTS.mdx) yet.

A collapsable side panel

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

```tsx
import SidePanel, {useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';

/**
 * A SidePanel is made up of three components
 * - The panel itself <SidePanel>
 * - An accessible name (either an existing element or you can use <span hidden>)
 * - A control that expands/collapses the SidePanel, usually <SidePanel.ToggleButton> as a child of <SidePanel>
 * A convenience hook is available for setting the state of the SidePanel along with the proper aria- attributes
 *
 */
const {panelProps, labelProps, controlProps} = useSidePanel();

<SidePanel {...panelProps}>
  <SidePanel.ToggleButton {...controlProps} />
  <h3 {...labelProps}>Tasks Panel</h3>
  {/* Your panel contents */}
</SidePanel>;
```

## Hooks

### `useSidePanel`

This hook manages the state and `aria-` attributes for the SidePanel. It takes in a `config` object:

- `intialExpanded: boolean`: Specifies the initial expanded/collapsed state of the side panel.
- `panelId: string`: specifies the id of the panel, if `undefined` then this hook will generate one
- `labelId: string` specifies the id of the label, if `undefined` then this hook will generate one

and returns:

- `expanded: boolean`: The state for the `SidePanel`'s `expanded` prop.
- `setExpanded: (expanded?: boolean) => void`: A function that sets the `expanded` state.
- `panelProps: object`: Contains the `expanded`, `id`, and `aria-labelledby` props for the
  `SidePanel` (or equivalent) component.
- `labelProps: object`: Contains the `id` prop for the label.
- `controlProps: object`: Contains the `aria-controls`, `aria-expanded`, `aria-labelledby`, and
  click handler for the side panel's control element.

#### Usage

```tsx
const [expanded, setExpanded, panelProps, labelProps, controlProps] = useSidePanel({
  initialExpanded: true,
  panelId: 'side-panel-1',
  labelId: 'side-panel-label-1'
});

<SidePanel {...panelProps}>
  {/* Make sure the control is first focusable */}
  <SidePanel.ToggleButton {...controlProps} />
  <span hidden {...labelProps}>Example Panel</span>
  {/* Rest of the children here */}
</SidePanel>

or

<SidePanel {...panelProps}>
  {/* If you want to use your own button */}
  <CustomControl {...controlProps} />
  {/* If you already have an element that can be an accessible name for the panel */}
  <h3 {...labelProps}>Example Panel</h3>
</SidePanel>
```

## Static Properties

#### `ToggleButton`

> `<SidePanel.ToggleButton>` is a control that is meant to toggle between `expanded = true` and
> `expanded = false` states. It must be used within the `SidePanel` component as a child. Use in
> conjunction with `useSidePanel`'s `controlProps`, otherwise it does not come with explicit
> `onClick` handlers.

> This is a standard Canvas Kit
> [`IconButton`](https://github.com/Workday/canvas-kit/tree/master/modules/button/react#iconbutton)
> and will accept those props.

> **Important**: For accessibility purposes, it must be the first focusable element. We recommend
> that you keep it as the first child of `SidePanel`.

## Component Props

### Required

> None

### Optional

#### `as: React.ElementType`

> The element the side panel will render as.

Default: `'section'`

#### `collapsedWidth: number | string`

> The width of the component (in `px` if it's a `number`) when it is collapsed.

Default: `64`

#### `expanded: boolean`

> If true, sets the expanded state of the side panel

Default: `false`

#### `expandedWidth: number | string`

> The width of the component (in `px` if it's a `number`) when it is expanded.

Default: `320`

#### `origin: 'left' | 'right'`

> Which side the side panel is meant to originate from.

Default: `'left'`

#### `onExpandedChange: (expanded?: boolean) => void`

> The function called when the side panel's `expanded` state changes. States like `'collapsing'` and
> `'expanding'` are tracked in another callback: `onStateChange`

#### `onStateTransition: (state?: SidePanelTransitionStates) => void`

> The function called when the side panel is transitioning between states. Use this to track when
> the side panel is animating between 'collapsed', 'collapsing', 'expanded', and 'expanding' states.
> This can be particularly helpful if child components need to react specifically to these states.

#### `variant: SidePanelVariant`

> The style variant of the side panel. 'standard' is with a `soap100` background, no depth.
> 'alternate' is a `frenchVanilla100` background with a level 3 depth.

Default: `'standard'`
