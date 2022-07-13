# Canvas Kit React Segmented Control

A linear set of two or more segments, each of which functions as a mutually exclusive button. This
is a [_controlled_](https://reactjs.org/docs/forms.html#controlled-components) component.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

```tsx
import * as React from 'react';
import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
import {listViewIcon, worksheetsIcon} from '@workday/canvas-system-icons-web';

<SegmentedControl>
  <SegmentedControl.Button icon={listViewIcon} aria-label="List View" value="list-view" />
  <SegmentedControl.Button icon={worksheetsIcon} aria-label="Table view" value="table-view" />
</SegmentedControl>;
```

**Note:** while managing state using a unique `value` for each `Button` child is encouraged, you can
also use indexes and omit the `value` field. It is strongly recommended to not mix these two
methods.

## Static Properties

> None

## Component Props

### Required

#### `children:React.ReactElement<SegmentedControlButtonProps>[]`

> Buttons to toggle between.

---

### Optional

#### `value: string | number`

> Identify which item is selected (toggled=true). If a string is passed, the Button with the
> corresponding value will be selected. If a number is passed, the Button with the corresponding
> index will be selected.

---

#### `onChange: (value:string | number)=> void`

> Callback function when a toggle button is selected. The value (if defined) or the index of the
> button will be returned.
