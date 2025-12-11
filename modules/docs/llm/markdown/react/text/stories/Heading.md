---
source_file: react/text/stories/Heading.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/Heading
---

<Meta of={HeadingStories} />

# Canvas Kit Heading

`Heading` provides a simple way to render heading-level text with built-in support for Canvas type
tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Heading` is a Type Level component (along with [`Title`](/components/text/title/),
[`BodyText`](/components/text/body-text/), and [`Subtext`](/components/text/subtext/)) built on top
of [`Text`](/components/text/text/) which provides a simple way to render heading-level text
according to the [Canvas type hierarchy](/tokens/type/#type-styles).

`Heading` renders an `<h2>` element by default with styles equivalent to
`type.levels.heading[size]`. You may override the rendered element using the `as` prop.

```tsx
import React from 'react';
import {Heading} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <>
    <Heading as="h4" size="large">
      Large Heading Text
    </Heading>
    <Heading as="h5" size="medium">
      Medium Heading Text
    </Heading>
    <Heading as="h6" size="small">
      Small Heading Text
    </Heading>
  </>
);

```

### Custom Styles

Heading supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Heading not found -->
