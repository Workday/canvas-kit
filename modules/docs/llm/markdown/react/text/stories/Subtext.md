---
source_file: react/text/stories/Subtext.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/Subtext
---

<Meta of={SubtextStories} />

# Canvas Kit Subtext

`Subtext` provides a simple way to render subtext-level text with built-in support for Canvas type
tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Subtext` is a Type Level component (along with [`Title`](/components/text/title/),
[`Heading`](/components/text/heading/), and [`BodyText`](/components/text/body-text/)) built on top
of [`Text`](/components/text/text/) which provides a simple way to render subtext-level text
according to the [Canvas type hierarchy](/tokens/type/#type-styles).

`Subtext` renders a `<p>` element by default with styles equivalent to `type.levels.subtext[size]`.
You may override the rendered element using the `as` prop.

```tsx
import React from 'react';
import {Subtext} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <>
    <Subtext size="large">Large Subtext</Subtext>
    <Subtext size="medium">Medium Subtext</Subtext>
    <Subtext size="small">Small Subtext</Subtext>
  </>
);

```

### Custom Styles

Subtext supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Subtext not found -->
