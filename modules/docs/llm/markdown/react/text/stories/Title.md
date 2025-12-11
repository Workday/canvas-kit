---
source_file: react/text/stories/Title.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/Title
---

<Meta of={TitleStories} />

# Canvas Kit Title

`Title` provides a simple way to render title-level text with built-in support for Canvas type
tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Title` is a Type Level component (along with [`Heading`](/components/text/heading/),
[`BodyText`](/components/text/body-text/), and [`Subtext`](/components/text/subtext/)) built on top
of [`Text`](/components/text/text/) which provides a simple way to render title-level text according
to the [Canvas type hierarchy](/tokens/type/#type-styles).

`Title` renders an `<h1>` element by default with styles equivalent to `type.levels.title[size]`.
You may override the rendered element using the `as` prop.

```tsx
import React from 'react';
import {Title} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <>
    <Title as="h1" size="large">
      Large Title Text
    </Title>
    <Title as="h2" size="medium">
      Medium Title Text
    </Title>
    <Title as="h3" size="small">
      Small Title Text
    </Title>
  </>
);

```

### Custom Styles

Title supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Title not found -->
