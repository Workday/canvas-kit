---
source_file: preview-react/segmented-control/stories/SegmentedControl.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/segmented-control/stories/SegmentedControl
---

<Meta of={SegmentedControlStories} />

# Canvas Kit Segmented Control

Segmented Control is a
[compound component](/getting-started/for-developers/resources/compound-components/) that represents
a linear group of multiple buttons allowing the selection of a specific value.

[> Workday Design Reference](https://design.workday.com/components/buttons/segmented-control)

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

`SegmentedControl` includes a container `SegmentedControl` component and the following
subcomponents: `SegmentedControl.List` and `SegmentedControl.Item`.

The example below contains a `SegmentedControl` with four icon-only buttons. Each button is rendered
using a `SegmentedControl.Item` and is paired with a tooltip describing the button's function. Only
one button can be active at a time.

```tsx
import React from 'react';

import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  const [viewType, setViewType] = React.useState('table');

  return (
    <>
      <SegmentedControl initialValue={viewType} onSelect={data => setViewType(data.id)}>
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
          <SegmentedControl.Item
            data-id="list-view"
            icon={listViewIcon}
            tooltipProps={{title: 'List'}}
          />
          <SegmentedControl.Item
            data-id="list-detail"
            icon={listDetailIcon}
            tooltipProps={{title: 'Detail'}}
          />
          <SegmentedControl.Item
            data-id="diagrams"
            icon={pieChartIcon}
            tooltipProps={{title: 'Diagram'}}
          />
        </SegmentedControl.List>
      </SegmentedControl>
      <BodyText size="small" marginTop="s">
        Selected: {viewType}
      </BodyText>
    </>
  );
};

```

We **strongly** discourage including more than four buttons in a single `SegmentedControl`.

### Accessibility

Our `SegmentedControl` component renders semantic HTML `<button>` elements to the browser DOM,
wrapped inside of a `<div>` with an explicit ARIA `role="group"`. This is equivalent to an HTML
`<fieldset>` element, and useful for screen readers to describe the relationship between the
buttons.

- Each button is a 2-state toggle button with `aria-pressed={true | false}` to indicate the current
  state to screen readers.
- Providing your own `aria-label`string to `SegmentedControl.List` is recommended for describing the
  purpose of the component.

#### Screen Reader Experience

When users interact with a `SegmentedControl` using screen readers:

- The group context is announced (e.g., "View options, group" when using
  `aria-label="View options"`)
- Each button announces its text/label, "toggle button" role, and pressed/unpressed state (e.g.,
  "List view, toggle button, pressed" or "Grid view, toggle button, not pressed")
- For icon-only buttons with tooltips, the tooltip text is announced along with the button role and
  state
- When a button is activated, screen readers should announce the new state

Refer to [Button](?path=/docs/components-buttons--docs#accessibility) for more information about
accessibility of these components.

### Variations

`SegmentedControl` supports three variations based on whether or not its `SegmentedControl.Item`
components have an `icon` prop and/or text content: icon-only, text-only, and text-and-icon.

All `SegmentedControl.Item` components within a given `SegmentedControl` must be of the same
variation.

#### Icon-Only

To render an icon-only `SegmentedControl`, apply the `icon` prop to `SegmentedControl.Item` and do
not provide it with text content. Refer to the [basic example](#basic-example) above for an instance
of an icon-only `SegmentedControl`.

The icon-only variation is the only variation which supports a vertical orientation in addition to
the default horizontal orientation. Set the `orientation` prop of `SegmentedControl` to `vertical`
to configure the component to render vertically.

```tsx
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Vertical = () => (
  <SegmentedControl orientation="vertical">
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
      <SegmentedControl.Item
        data-id="list-view"
        icon={listViewIcon}
        tooltipProps={{title: 'List'}}
      />
      <SegmentedControl.Item
        data-id="list-detail"
        icon={listDetailIcon}
        tooltipProps={{title: 'Detail'}}
      />
      <SegmentedControl.Item
        data-id="diagram"
        icon={pieChartIcon}
        tooltipProps={{title: 'Diagram'}}
      />
    </SegmentedControl.List>
  </SegmentedControl>
);

```

#### Text-Only

To render a text-only `SegmentedControl`, omit the `icon` prop from `SegmentedControl.Item` and
provide it with text content.

```tsx
import React from 'react';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const TextOnly = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table">Table</SegmentedControl.Item>
      <SegmentedControl.Item data-id="list">List</SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram">Diagram</SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);

```

#### Text-and-Icon

To render a text-and-icon `SegmentedControl`, apply the `icon` prop to `SegmentedControl.Item` and
provide it with text content.

```tsx
import React from 'react';
import {gridIcon, listViewIcon, pieChartIcon} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const TextAndIcon = () => (
  <SegmentedControl>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon}>
        Table
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="list" icon={listViewIcon}>
        List
      </SegmentedControl.Item>
      <SegmentedControl.Item data-id="diagram" icon={pieChartIcon}>
        Diagram
      </SegmentedControl.Item>
    </SegmentedControl.List>
  </SegmentedControl>
);

```

### Sizes

`SegmentedControl` accepts a `size` prop which supports the following values:

- `small`
- `medium` (Default)
- `large`

```tsx
import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Sizes = () => (
  <>
    <Box>
      <BodyText size="medium" fontWeight="bold" marginTop={0}>
        Small
      </BodyText>
      <SegmentedControl size="small">
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Medium
      </BodyText>
      <SegmentedControl size="medium">
        <SegmentedControl.List aria-label="View type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
    <Box>
      <BodyText size="medium" fontWeight="bold">
        Large
      </BodyText>
      <SegmentedControl size="large">
        <SegmentedControl.List aria-label="Content view type">
          <SegmentedControl.Item data-id="table" icon={gridIcon}>
            Table
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
            List
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
            Detail
          </SegmentedControl.Item>
          <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
            Diagram
          </SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </Box>
  </>
);

```

### Disabled

Set the `disabled` prop of `SegmentedControl` to disable the entire component including its buttons.

```tsx
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Disabled = () => (
  <SegmentedControl disabled>
    <SegmentedControl.List aria-label="View type">
      <SegmentedControl.Item data-id="table" icon={gridIcon} tooltipProps={{title: 'Table'}} />
      <SegmentedControl.Item
        data-id="list-view"
        icon={listViewIcon}
        tooltipProps={{title: 'List'}}
      />
      <SegmentedControl.Item
        data-id="list-detail"
        icon={listDetailIcon}
        tooltipProps={{title: 'Detail'}}
      />
      <SegmentedControl.Item
        data-id="diagrams"
        icon={pieChartIcon}
        tooltipProps={{title: 'Diagram'}}
      />
    </SegmentedControl.List>
  </SegmentedControl>
);

```

### Right-to-Left (RTL)

`SegmentedControl` supports right-to-left languages when specified in the `CanvasProvider` `theme`.

```tsx
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';

export const RTL = () => (
  <CanvasProvider dir="rtl">
    <SegmentedControl initialValue="list-detail">
      <SegmentedControl.List aria-label="View type">
        <SegmentedControl.Item data-id="table" icon={gridIcon}>
          שולחן
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-view" icon={listViewIcon}>
          רשימה
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="list-detail" icon={listDetailIcon}>
          פרטים
        </SegmentedControl.Item>
        <SegmentedControl.Item data-id="diagrams" icon={pieChartIcon}>
          תרשים
        </SegmentedControl.Item>
      </SegmentedControl.List>
    </SegmentedControl>
  </CanvasProvider>
);

```

### Dynamic Items

`SegmentedControl` supports a
[dynamic API](/getting-started/for-developers/resources/collection-api/#dynamic-items) where instead
of statically providing the JSX for each `SegmentedControl.Item`, you pass an array of `items` in
the `model` state and provide a render function to display the items.

```tsx
import React from 'react';
import {
  SegmentedControl,
  useSegmentedControlModel,
} from '@workday/canvas-kit-preview-react/segmented-control';
import {
  gridIcon,
  listViewIcon,
  listDetailIcon,
  pieChartIcon,
} from '@workday/canvas-system-icons-web';

export const Dynamic = () => {
  const [viewType, setViewType] = React.useState('table');

  const model = useSegmentedControlModel({
    items: [
      {id: 'table', icon: gridIcon, label: 'Table'},
      {id: 'list', icon: listViewIcon, label: 'List'},
      {id: 'detail', icon: listDetailIcon, label: 'Detail'},
      {id: 'diagram', icon: pieChartIcon, label: 'Diagram'},
    ],
    size: 'small',
    initialValue: viewType,
    onSelect: data => {
      console.log(`${data.id} is selected`);
      setViewType(data.id);
    },
  });

  return (
    <SegmentedControl model={model}>
      <SegmentedControl.List aria-label="View type">
        {item => (
          <SegmentedControl.Item data-id={item.id} icon={item.icon}>
            {item.label}
          </SegmentedControl.Item>
        )}
      </SegmentedControl.List>
    </SegmentedControl>
  );
};

```

## Component API

<!-- API Reference for SegmentedControl not found -->

## Specifications

### Specifications for SegmentedControl

<!-- Component specifications from SegmentedControl.spec.ts -->
