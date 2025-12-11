---
source_file: react/testing/stories/Testing.mdx
live_url: https://workday.github.io/canvas-kit/react/testing/stories/Testing
---

<Meta of={TestingStories} />

# Testing

A package that provides components and utilities for testing

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`StaticStates` in conjunction with `ComponentStatesTable` allows consumers to visually test their
components in different states. Below is an example of how we're using these to create a visual
table of a `DeleteButton` component with different prop values and visual states.

`StaticStates` serves similarly as a context provider where is wraps children in a `CanvasProvider`
exposing a `theme` prop.

`ComponentStatesTable` allows consumers to built up a visual table based on row and column props.

```tsx
import React from 'react';
import {
  ComponentStatesTable,
  StaticStates,
  permutateProps,
} from '@workday/canvas-kit-react/testing';
import {PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';

import {DeleteButton} from '@workday/canvas-kit-react/button';

export const stateTableColumnProps = [
  {label: 'Default ', props: {className: '', disabled: false}},
  {label: 'Default Disabled', props: {className: '', disabled: true}},
  {label: 'Hover ', props: {className: 'hover', disabled: false}},
  {label: 'Hover Disabled', props: {className: 'hover', disabled: true}},
  {label: 'Focus ', props: {className: 'focus', disabled: false}},
  {label: 'Focus Hover ', props: {className: 'focus hover', disabled: false}},
  {label: 'Active ', props: {className: 'active', disabled: false}},
  {label: 'Active Hover ', props: {className: 'active hover', disabled: false}},
];

export const Basic = (props: {theme?: PartialEmotionCanvasTheme}) => (
  <StaticStates theme={props.theme}>
    <ComponentStatesTable
      rowProps={permutateProps({
        size: [
          {value: 'small', label: 'Small'},
          {value: 'medium', label: 'Medium'},
          {value: 'large', label: 'Large'},
        ],
      })}
      columnProps={stateTableColumnProps}
    >
      {props => <DeleteButton {...props}>Test</DeleteButton>}
    </ComponentStatesTable>
  </StaticStates>
);

```
