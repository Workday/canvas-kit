---
source_file: react/layout/stories/Box.mdx
live_url: https://workday.github.io/canvas-kit/react/layout/stories/Box
---

<Meta of={BoxStories} />

# Box

`Box` is a primitive component that provides a common, ergonomic API around Canvas design tokens. It
is highly flexible, and its primary purpose is to build other components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

```tsx
import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-react/layout';

interface CustomCardProps extends BoxProps {
  // custom Card props go here
}

const CustomCard = createComponent('div')({
  displayName: 'CustomCard',
  Component: (props: CustomCardProps, ref, Element) => {
    return <Box as={Element} ref={ref} borderRadius="m" depth={1} padding="m" {...props} />;
  },
});

export const Basic = () => {
  return <CustomCard>Hello, Box!</CustomCard>;
};

```

## Props

### The `As` Prop

The `as` prop allows you to override the underlying element of a component or combine it with
another component. By default, `Box` will render a `div` element, but sometimes that's not what you
want. Below, we have a `Box` that we want to render as a semantic anchor element. The most
noticeable transformation is that `Box` renders as a link. But also notice that while it still
supports all `BoxProps` such as `padding`, it also supports semantic anchor element props such as
`href`.

### Style Props

`Box` exposes [style props](/getting-started/for-developers/resources/style-props/) that allow you
to modify styles in an ergonomic way across components. To learn more about individual sets of `Box`
style props, consult the lists below.

- [Background Style Props](/getting-started/for-developers/resources/style-props/#background)
- [Border Style Props](/getting-started/for-developers/resources/style-props/#border)
- [Color Style Props](/getting-started/for-developers/resources/style-props/#color)
- [Depth Style Props](/getting-started/for-developers/resources/style-props/#depth)
- [Flex Item Style Props](/getting-started/for-developers/resources/style-props/#flex-item)
- [Grid Item Style Props](/getting-started/for-developers/resources/style-props/#grid-item)
- [Layout Style Props](/getting-started/for-developers/resources/style-props/#layout)
- [Other Style Props](/getting-started/for-developers/resources/style-props/#other)
- [Position Style Props](/getting-started/for-developers/resources/style-props/#position)
- [Space Style Props](/getting-started/for-developers/resources/style-props/#space)
- [Text Style Props](/getting-started/for-developers/resources/style-props/#text)
