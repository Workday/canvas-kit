---
source_file: preview-react/side-panel/stories/SidePanel.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/side-panel/stories/SidePanel
---

<Meta of={SidePanelStories} />

# Canvas Kit Side Panel

`SidePanel` is a collaspible container that anchors to the left or right side of the screen.

[> Workday Design Reference](https://design.workday.com/components/containers/side-panel)

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

`SidePanel` is composed of three parts:

- The panel container
- An accessible name (either on a visible element or hidden)
- A toggle button to control the expand / collapse states

Bidirectional support is built into `SidePanel`. As seen in the example below, CSS Flexbox flips the
page layout and the panel's contents. `SidePanel` also has logic to flip the position and direction
of the `ToggleButton` as well as the direction of the expand / collapse animation. If you're using
CSS Flexbox for layouts and using the provided components, you shouldn't have to provide any custom
logic or styling for bidirecitonal support.

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {useDirection} from './useDirection';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewPortContainer: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  accentIcon: createStyles({
    marginInlineEnd: system.space.x4,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const Basic = () => {
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewPortContainer}>
        <SidePanel {...panelProps}>
          <SidePanel.ToggleButton {...controlProps} />
          <Flex cs={stylesOverride.panel}>
            {expanded && (
              <Flex cs={stylesOverride.accentIcon}>
                <AccentIcon icon={rocketIcon} />
              </Flex>
            )}
            <Heading size="small" {...labelProps} hidden={!expanded ? true : undefined}>
              Tasks Panel
            </Heading>
          </Flex>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.mainContent}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>
      </Flex>
    </CanvasProvider>
  );
};

```

### Hidden Name

`SidePanel` must always have an accessible label for both the HTML `<section>` container and the
`ToggleButton`. The `labelProps` component must always be present in the DOM in order for the
`panelProps` and `controlProps` component labels to be assigned properly. A `hidden` attribute can
be applied to the `labelProps` component. In the example below, we are demonstrating the
`AccessibleHide` component that relies on CSS properties to visually hide text for screen readers
only.

```tsx
import * as React from 'react';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const HiddenName = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={state => {
          console.log(`Side Panel is ${state}`);
        }}
      >
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side Panel with a hidden title text.
        </Text>
      </Flex>
    </Flex>
  );
};

```

### Alternate Variant

`SidePanel` has one variant, `alternate`, which you can supply as a top-level prop. Default depth of
`alternate` variant is 5, if `alternate` SidePanel has an overlay behavior the depth 6 should be
used (this case is covered in the Examples section).

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
    backgroundColor: system.color.bg.alt.default,
  }),
  panel: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const AlternatePanel = () => {
  const {direction, toggleDirection} = useDirection();
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <SidePanel {...panelProps} variant="alternate">
          <SidePanel.ToggleButton {...controlProps} />
          <Flex cs={stylesOverride.panel}>
            <Heading size="small" hidden={!expanded ? true : undefined} {...labelProps}>
              Alternate Panel
            </Heading>
          </Flex>
        </SidePanel>
        <Flex as="main" cs={stylesOverride.main}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>
      </Flex>
    </CanvasProvider>
  );
};

```

### External Control

Sometimes you'll want to control `SidePanel`'s' expand / collapse behavior from outside the
component. In that case, you can use the `controlProps` supplied by the `useSidePanel` hook.

#### Notes about accessibility

The `controlProps` object delivers ARIA attributes to a component under the following assumptions:

1. The control is an icon button that does not already have an accessible name
2. The control appears at (or near) the top of the expandable content in the `SidePanel`

Spreading the `controlProps` onto an external control can introduce serious accessibility issues:

- `aria-labelledby` HTML `id` reference may become invalid when the SidePanel is collapsed, or when
  the `labelProps` component isn't present in the DOM.
- `aria-labelledby` will change the name of `controlProps` component to the title of the
  `SidePanel`. (This may be undesirable. For example, the "Show Side Panel" button will be
  overwritten with the "Tasks Panel" heading.)
- `aria-expanded` won't make sense to screen reader users when the expanded `SidePanel` content
  isn't logically following the control.
- `aria-controls` is unsupported by screen readers and will not allow users to navigate to the
  controlled content.

In the following example, the `controlProps` click handler function is passed down to the
`SecondaryButton` and a toggle state was added to the button using the `aria-pressed` property.

```tsx
import * as React from 'react';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panel: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  panelHeading: createStyles({
    color: system.color.fg.muted.stronger,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

/*
 * NOTE TO DEV:
 * Spreading the `controlProps` onto an external control creates serious accessibility issues.
 * - `aria-labelledby` id reference is invalid when the SidePanel is collapsed
 * - `aria-labelledby` will change the name of "Toggle Side Panel" button to "Tasks Panel"
 * - `aria-expanded` won't make sense to screen reader users when the expanded SidePanel content isn't following the control
 * - `aria-controls` is unsupported by screen readers and will not allow users to navigate to the controlled content
 *
 * SOLUTION:
 * - Pass the `controlProps` click handler function down to the external control component.
 * - Add a toggle state to Button components with `aria-pressed` for screen readers,
 * - OR use a similar toggle input like Checkbox or Switch.
 */
export const ExternalControl = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel({initialExpanded: false});
  const [panelState, setPanelState] = React.useState<SidePanelTransitionStates>(
    expanded ? 'expanded' : 'collapsed'
  );

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel
        {...panelProps}
        onExpandedChange={expanded => {
          console.log(`expanded prop is: ${expanded ? 'true' : 'false'}`);
        }}
        onStateTransition={setPanelState}
      >
        {panelState === 'expanded' && (
          <Flex cs={stylesOverride.panel}>
            <Heading size="small" cs={stylesOverride.panelHeading} {...labelProps}>
              Tasks Panel
            </Heading>
          </Flex>
        )}
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Control the panel externally
        </Text>
        <SecondaryButton onClick={controlProps.onClick} aria-pressed={expanded}>
          Show Side Panel
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};

```

### Right Origin

By default, `SidePanel` uses a `left` origin. This sets the `ToggleButton`'s position and direction
as well as the direction of the animation. But you can set `SidePanel`'s origin to `"right"` to flip
these. As with the left-origin panel, all right-origin styles have bidirecitonal support.

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

// local helper hook for setting content direction;
import {useDirection} from './useDirection';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    marginLeft: 'auto',
  }),
  panel: createStyles({
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

const RightPanel = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  return (
    <SidePanel {...panelProps} origin="right" className={stylesOverride.panelContainer}>
      <SidePanel.ToggleButton {...controlProps} />
      <Flex cs={stylesOverride.panel}>
        <Heading size="small" hidden={!expanded ? true : undefined} {...labelProps}>
          Tasks Panel
        </Heading>
      </Flex>
    </SidePanel>
  );
};

export const RightOrigin = () => {
  const {direction, toggleDirection} = useDirection();

  return (
    <CanvasProvider dir={direction}>
      <Flex cs={stylesOverride.viewport}>
        <Flex as="main" cs={stylesOverride.main}>
          <Text as="p" typeLevel="body.large">
            Toggle the content direction
          </Text>
          <SecondaryButton onClick={toggleDirection}>
            Set to {direction === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'}
          </SecondaryButton>
        </Flex>

        <RightPanel />
      </Flex>
    </CanvasProvider>
  );
};

```

### Always Open

If you do not need `SidePanel`'s' expand / collapse behavior, you can simply omit the `controlProps`
and `ToggleButton`.

```tsx
import * as React from 'react';
import {AccentIcon} from '@workday/canvas-kit-react/icon';
import {rocketIcon} from '@workday/canvas-accent-icons-web';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  accentIcon: createStyles({
    marginRight: system.space.x4,
  }),
  pageContainer: createStyles({
    gap: system.space.x4,
    height: px2rem(320),
  }),
  panelContainer: createStyles({
    alignItems: 'center',
    paddingY: system.space.x4,
    paddingX: system.space.x4,
  }),
  panelHeading: createStyles({
    color: system.color.fg.default,
  }),
  mainContent: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    flex: 1,
  }),
};

export const AlwaysOpen = () => {
  const {panelProps, labelProps} = useSidePanel();

  return (
    <Flex cs={stylesOverride.pageContainer}>
      <SidePanel {...panelProps}>
        <Flex cs={stylesOverride.panelContainer}>
          <AccentIcon icon={rocketIcon} cs={stylesOverride.accentIcon} />
          <Heading size="small" cs={stylesOverride.panelHeading} {...labelProps}>
            Tasks Panel
          </Heading>
        </Flex>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.mainContent}>
        <Text as="p" typeLevel="body.large">
          This is the main content section.
        </Text>
      </Flex>
    </Flex>
  );
};

```

The majority of `SidePanel`'s logic and funcitonality lives in this container component. Most of
this functionality has been described in the examples above, but there a couple specific callbacks
worth mentioning here.

### onExpandedChange

The `onExpandedChange` callback is called when the boolean `expanded` state is updated. This is a
handy way to hook into these updates to trigger side-effects. Below is an example:

```tsx
import * as React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SidePanel, useSidePanel} from '@workday/canvas-kit-preview-react/side-panel';
import {Text} from '@workday/canvas-kit-react/text';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const OnExpandedChange = () => {
  const {expanded, panelProps, labelProps, controlProps} = useSidePanel();

  const handleExpandedChange = (expanded: boolean) => {
    console.log(`Side panel is ${expanded ? 'expanded' : 'collapsed'}`);
  };

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel {...panelProps} onExpandedChange={handleExpandedChange}>
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {expanded ? 'expanded' : 'collapsed'}.
        </Text>
      </Flex>
    </Flex>
  );
};

```

### onStateTransition

While `onExpandedChange` works well for discrete boolean state changes, there may be occasions where
you also need transition states. In these situations, `onStateTransition` is a better fit. This
callback it called on all state transitions and returns the current transtion state. This can be one
of four `SidePanelTransitionStates`, `expanding`, `expanded`, `collapsing`, and `collapsed`. Below
is an example:

```tsx
import * as React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  SidePanel,
  useSidePanel,
  SidePanelTransitionStates,
} from '@workday/canvas-kit-preview-react/side-panel';
import {AccessibleHide} from '@workday/canvas-kit-react/common';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const stylesOverride = {
  viewport: createStyles({
    height: px2rem(320),
  }),
  main: createStyles({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    flexBasis: 'auto',
  }),
};

export const OnStateTransition = () => {
  const {panelProps, labelProps, controlProps} = useSidePanel();
  const [transitionState, setTransitionState] =
    React.useState<SidePanelTransitionStates>('expanded');

  const handleStateTransition = (transition: SidePanelTransitionStates) => {
    setTransitionState(transition);
  };

  return (
    <Flex cs={stylesOverride.viewport}>
      <SidePanel {...panelProps} onStateTransition={handleStateTransition}>
        <SidePanel.ToggleButton {...controlProps} />
        <AccessibleHide {...labelProps}>Hidden Title</AccessibleHide>
      </SidePanel>
      <Flex as="main" cs={stylesOverride.main}>
        <Text as="p" typeLevel="body.large">
          Side panel is {transitionState}.
        </Text>
      </Flex>
    </Flex>
  );
};

```

## Component API

<!-- API Reference for SidePanel not found -->

## Hooks

### useSidePanel

<!-- API Reference for useSidePanel not found -->

## Specifications

### Specifications for Side Panel

<!-- Component specifications from SidePanelPreview.spec.ts -->
