# Canvas Kit Tooltip

A Tooltip component that renders information/text when the user hovers over an element. A tooltip is
used to label or describe an element. By default, a tooltip will label an element. This is useful
for IconButtons. A tooltip can also be used to describe additional information about an element

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-tooltip
```

## Usage

```tsx
import * as React from 'react';

import {Tooltip} from '@workday/canvas-kit-react-tooltip';
import {IconButton} from '@workday/canvas-kit-react-button';

const TooltipExample = () => {
  return (
    <Tooltip title="Close">
      <IconButton variant={IconButton.Variant.Circle} icon={xIcon} aria-label="Close" />
    </Tooltip>
  );
};
```

## Static Properties

> None

## Component Props

### Required

#### title: string | React.ReactNode

> If present, this will switch the Tooltip into a simpler to use mode where the Tooltip component
> can wrap a target and `title` is the contents of the tooltip. This should be a string in most
> cases. HTML is supported, but only text is understood by assistive technology. This is true for
> both `label` and `describe` modes.

#### children: React.ReactNode

> The contents of the target for the Tooltip.
>
> **Note:** This **must** be an Element, StyledComponent or any other component that forwards extra
> props to an Element. Tooltip works running `React.cloneElement` on the children and adds extra
> properties like aria attributes and event handlers. This is currently a limitation of the Tooltip
> component. Functionality will not work if this condition isn't met

---

### Optional

#### type: 'label' | 'describe'

> If present, this will switch the Tooltip into a simpler to use mode where the Tooltip component
> can wrap a target and `title` is the contents of the tooltip. This should be a string in most
> cases. HTML is supported, but only text is understood by assistive technology. This is true for
> both `label` and `describe` modes.

Default: `'label'`

#### placement: PopperJS.Placement

> Sets the placement preference used by PopperJS.

Default: `'top'`
