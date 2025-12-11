---
source_file: react/segmented-control/stories/SegmentedControl.mdx
live_url: https://workday.github.io/canvas-kit/react/segmented-control/stories/SegmentedControl
---

<Meta of={SegmentedControlStories} />

# Canvas Kit Segmented Control <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `SegmentedControl` in Main has been deprecated and will be removed in a future major version.
    Please use `Segmented Control` in Preview instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/docs/preview-segmented-control--docs">
    Segmented Control Docs
  </InformationHighlight.Link>
</InformationHighlight>

A linear set of two or more segments, each of which functions as a mutually exclusive button. This
is a [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Here is a basic example of a Segmented Control with multiple nested `Button`s. **Note:** while
managing state using a unique `value` for each `Button` child is encouraged, you can also use
indexes and omit the `value` field. It is strongly recommended to not mix these two methods.

```tsx
import * as React from 'react';

import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>();
  const handleToggle = (selectedValue: string | number) => {
    setValue(selectedValue);
  };

  return (
    <SegmentedControl value={value} onChange={handleToggle}>
      <SegmentedControl.Button
        icon={listViewIcon}
        value="list-view"
        onClick={e => console.log('Existing TertiaryButton onClick callback')}
        id="test"
      />
      <SegmentedControl.Button icon={worksheetsIcon} value="table-view" disabled={true} />
      <SegmentedControl.Button
        icon={deviceTabletIcon}
        value="device-view"
        aria-label="Device View"
      />
      <SegmentedControl.Button
        icon={percentageIcon}
        value="percent-view"
        aria-label="Percent View"
      />
    </SegmentedControl>
  );
};

```

## Component API

<!-- API Reference for SegmentedControl not found -->
