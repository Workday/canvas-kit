---
source_file: react/tooltip/stories/Tooltip.mdx
live_url: https://workday.github.io/canvas-kit/react/tooltip/stories/Tooltip
---

<Meta of={TooltipStories} />

# Canvas Kit React Tooltips

A Tooltip component that renders information/text when the user hovers over an element. A tooltip is
used to label or describe an element. By default, a tooltip will label an element. This is useful
for buttons with icons. A tooltip can also be used to describe additional information about an
element

[> Workday Design Reference](https://design.workday.com/components/popups/tooltips)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

This component follows the
[W3 Tooltip specification](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/). Tooltips are used to
label buttons with icons and provide additional context to elements.

### When to use tooltips

Use a tooltip when you want to display additional information for users to better understand the
purpose, context, or interaction.

### When not to use tooltips

When the visual text will be the exact same as what is visually displayed to the user without the
tooltip being visible

- Does this element need additional context or information?
  - No: Don't use a tooltip
  - Yes:
    - Is the tooltip text useful to screen reader users?
      - No: Use `type="muted"` which will not make the tooltip visible to screen reader users
      - Yes:
        - Is the tooltip text different from the visual text displayed to users?
          - No text: Use `type="label"` which will add `aria-label` like the icon example
          - Yes: Use `type="describe"` which will add `aria-describedby`
          - No: Don't use a tooltip

### Basic Example

Here is a basic example of a `TertiaryButton` that renders an icon using a tooltip to label the
icon. This labels the button for both sighted users and screen readers. A tooltip provides an
`aria-label` to child elements for the accessibility tree and a visual tooltip during mouse hover
and focus events.

```tsx
import {xIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Default = () => {
  return (
    <Tooltip title="Close">
      <TertiaryButton icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};

```

### Describing an Element

<InformationHighlight variant={'caution'} className='sb-unstyled'>
  <InformationHighlight.Icon />
  <InformationHighlight.Heading> Caution: Describe type has been deprecated </InformationHighlight.Heading>
  <InformationHighlight.Body>
     Assistive technology may ignore <StatusIndicator variant='gray'><StatusIndicator.Label cs={{textTransform: 'lowercase'}}>type="describe"</StatusIndicator.Label></StatusIndicator> techniques based on verbosity settings. Please use <StatusIndicator cs={{textTransform: 'lowercase'}} variant='gray'><StatusIndicator.Label cs={{textTransform: 'lowercase'}}>type="description"</StatusIndicator.Label></StatusIndicator> on Tooltips.
  </InformationHighlight.Body>
</InformationHighlight>

The default mode for a tooltip is to label content via `aria-label`. If a tooltip is meant to
provide ancillary information, the `type` can be set to `describe`. This will add `aria-describedby`
to the target element. This will allow screen reader users to hear the name of the control that is
being focused and the ancillary tooltip information.

```tsx
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DescribeType = () => {
  return (
    <Tooltip type="describe" title="The service will restart after this action">
      <DeleteButton>Delete</DeleteButton>
    </Tooltip>
  );
};

```

### Description of an Element

The default mode for a tooltip is to assign a name to the target element with an `aria-label`
string. If a tooltip is meant to provide ancillary information, the `type` can be set to `description`.
This will add `aria-description` strings to the target element instead. This variant is useful on
text buttons and other components that already have a label or name. Use this type instead of `describe` to ensure proper aria attributes are added to the dom regardless if the tooltip is visible.

> **Note:** If you use `description` type and want to pass `jsx`, it **must* be inline and **not** a component to ensure the inner text is properly read by voiceover.
>
> ```jsx
> // The text will be understood as: You must accept terms and conditions
> <Tooltip type="description" title={<span>You<i>must</i> accept terms and conditions</span>}/>
>
> // This will render a string including the html and will not be properly understood by voice over.
> const MyComponent = () => <span>You<i>must</i> accept terms and conditions</span>
> <Tool

```tsx
import {DeleteButton, SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Flex} from '@workday/canvas-kit-react/layout';
import {chartConfigIcon} from '@workday/canvas-system-icons-web';

export const DescriptionType = () => {
  return (
    <Flex gap="s">
      <Tooltip type="description" title="Search using additional criteria">
        <TertiaryButton icon={chartConfigIcon}>Advanced Search</TertiaryButton>
      </Tooltip>
      <Tooltip type="description" title="Create saved search">
        <SecondaryButton>Save</SecondaryButton>
      </Tooltip>
      <Tooltip type="description" title="The service will restart after this action">
        <DeleteButton>Delete</DeleteButton>
      </Tooltip>
    </Flex>
  );
};

```

### Muted Tooltips

If a tooltip does not need to be visible to screen reader users, or you handle accessibility of the
tooltip yourself, you can set the `type` to `muted`. This will not add any special ARIA attributes
to the target element.

```tsx
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const Muted = () => {
  return (
    <Tooltip title="Visual-only Tooltip" type="muted">
      <span>Some text. The contents of the tooltip are invisible to screen reader users.</span>
    </Tooltip>
  );
};

```

### Custom Content

A tooltip can contain HTML, but should not contain any focusable elements or semantically meaningful
formatting. The content will lose all semantic meaning when read by a screen reader. If complex
content or a focusable element is needed by your UI, a tooltip is not a good choice. Consider using
a dialog instead.

```tsx
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const CustomContent = () => {
  return (
    <React.Fragment>
      <Tooltip
        type="describe"
        title={
          <div>
            This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
          </div>
        }
      >
        <SecondaryButton>Hover Me</SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};

```

### Delayed Tooltip

The default delay for showing and hiding a tooltip are 300ms and 100ms, respectively. You can
control the length of the delay by providing custom `showDelay` and `hideDelay` in ms.

```tsx
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const DelayedTooltip = () => {
  return (
    <React.Fragment>
      <Tooltip type="describe" title="Tooltip Text" showDelay={2000} hideDelay={1000}>
        <SecondaryButton>
          Tooltip appears after 2 seconds and disappears after 1 second
        </SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};

```

### Placements

The tooltip allows for a `placement` configuration. The tooltip uses
[PopperJS](https://popper.js.org/) to position tooltips, so any valid PopperJS placement is valid
for tooltips.

```tsx
import React from 'react';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Card} from '@workday/canvas-kit-react/card';
import {Placement} from '@workday/canvas-kit-react/popup';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const placementCardStyles = createStyles({
  boxShadow: system.depth[2],
  display: 'flex',
  width: 100,
  height: 100,
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: system.space.x1,
});

export const Placements = () => {
  const placementStyles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const createPlacement = (placement: string, index) => {
    return (
      <Tooltip title="Add" placement={placement as Placement} key={index}>
        <Card cs={placementCardStyles}>
          <Card.Body>{placement}</Card.Body>
        </Card>
      </Tooltip>
    );
  };

  return (
    <div
      style={{
        padding: 100, // give enough room for the tooltips to fit around their targets
        display: 'grid',
        gridTemplateColumns: '100px 320px 100px',
        gridTemplateRows: '100px 320px 100px',
      }}
    >
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['top-start', 'top', 'top-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['left-start', 'left', 'left-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['right-start', 'right', 'right-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['bottom-start', 'bottom', 'bottom-end'].map(createPlacement)}
      </div>
      <div />
    </div>
  );
};

```

### Tooltips on overflowing content

The `OverflowTooltip` component can be applied to any element that has some type of overflow
applied, or has a child element that has overflow applied. The most common and widely supported type
of truncation is the ellipsis.

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

**Note**: Text truncation should be avoided if possible. A user should not have to activate a
tooltip to access important content. If user-generated content is being truncated, the following
situation might occur which is a bad user experience. Consider the following list:

- Home Site A
- Home Site B
- Home Site C

If the list items get truncated via an ellipsis, this is what the user could see:

- Home Sit...
- Home Sit...
- Home Sit...

Here are suggestions to try to avoid truncation:

- Allow content to wrap instead
- Limit character count in admin interfaces if possible to avoid need for truncation
- Avoid fixed container sizes if possible to allow content to flow naturally

If truncation is required, here are a few guidelines to insure minimal impact on users:

- Only truncate text of elements that naturally receive focus.
  - Keyboard users can only activate tooltips with focus. Adding `tabindex=0` can give focus to
    non-focusable elements, but increase the amount of tab stops for keyboard users.
- Provide the full content elsewhere in the UI

Canvas Kit Buttons have this style applied to the text inside them. `OverflowTooltip` in combination
with a max-width can show a tooltip only when overflow is detected:

```tsx
import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {space} from '@workday/canvas-kit-react/tokens';
import {resetIcon} from '@workday/canvas-system-icons-web';

const CustomContent = ({...elemProps}) => (
  <button
    style={{
      marginTop: space.xs,
      maxWidth: 200,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
    {...elemProps}
  >
    Super Mega Ultra Long Content With Max Width Custom
  </button>
);

export const Ellipsis = () => {
  return (
    <React.Fragment>
      <OverflowTooltip>
        <SecondaryButton>Short Content</SecondaryButton>
      </OverflowTooltip>{' '}
      <OverflowTooltip>
        <SecondaryButton style={{maxWidth: 200}}>
          Super Mega Ultra Long Content With Max Width On The Button
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <SecondaryButton icon={resetIcon} style={{maxWidth: 200}}>
          Super Mega Ultra Long Content With Max Width On The Button with Icon
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <button
          style={{
            marginTop: space.xs,
            maxWidth: 200,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Super Mega Ultra Long Content With Max Width
        </button>
      </OverflowTooltip>
      <OverflowTooltip>
        <CustomContent />
      </OverflowTooltip>
    </React.Fragment>
  );
};

```

### Line Clamp

The `OverflowTooltip` can support various types of overflow. The component will first look for
`text-overflow: ellipsis` and `-webkit-line-clamp`, but will fall back to
`overflow: auto | scroll | clip | hidden`. These properties will be used to determine which
`element` is experiencing an overflow. Overflow detection is as follows where `element` is
determined by the above style properties:

```js
element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
```

Here's an example using the `-webkit-line-clamp` property (multi-line ellipsis which works in all
browsers):

```tsx
import React from 'react';

import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export const LineClamp = () => {
  return (
    <OverflowTooltip>
      <button>
        <span
          style={{
            display: '-webkit-box',
            overflow: 'hidden',
            maxWidth: 200,
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          Super Mega Ultra Long Content With Max Width. Super Mega Ultra Long Content With Max
          Width.
        </span>
      </button>
    </OverflowTooltip>
  );
};

```

Other truncation techniques should be supported as well, even JavaScript ones as long as overflow is
triggered somehow and detectable differences in scroll size and client size.

### The UseTooltip Hook

The `Tooltip` component is a combination of the `TooltipContainer` (a styled element), `Popper`
(which uses PopperJS and the popup stack), the `useTooltip` hook and some behavior. If custom
behavior is required, these sub-components can be composed in a custom container element. This
example uses those parts directly while being functionally equivalent to the original basic example.

```tsx
import React from 'react';

import {Popper} from '@workday/canvas-kit-react/popup';
import {xIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {TooltipContainer, useTooltip} from '@workday/canvas-kit-react/tooltip';

export const UseTooltip = () => {
  const {targetProps, popperProps, tooltipProps} = useTooltip();

  return (
    <>
      <TertiaryButton icon={xIcon} {...targetProps} aria-label="Close" />
      <Popper placement="top" {...popperProps}>
        <TooltipContainer {...tooltipProps}>Close</TooltipContainer>
      </Popper>
    </>
  );
};

```

## Component API

<!-- API Reference for Tooltip not found -->

## Specifications

### Specifications for Tooltip

<!-- Component specifications from Tooltip.spec.ts -->
