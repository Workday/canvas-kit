---
source_file: react/text/stories/BodyText.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/BodyText
---

<Meta of={BodyTextStories} />

# Canvas Kit Body Text

`BodyText` provides a simple way to render body-level text with built-in support for Canvas type
tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`BodyText` is a Type Level component (along with [`Title`](/components/text/title/),
[`Heading`](/components/text/heading/), and [`Subtext`](/components/text/subtext/)) built on top of
[`Text`](/components/text/text/) which provides a simple way to render body-level text according to
the [Canvas type hierarchy](/tokens/type/#type-styles).

`BodyText` renders a `<p>` element by default with styles equivalent to `type.levels.body[size]`.
You may override the rendered element using the `as` prop.

```tsx
import React from 'react';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <>
    <BodyText size="large">Large Body Text</BodyText>
    <BodyText size="medium">Medium Body Text</BodyText>
    <BodyText size="small">Small Body Text</BodyText>
  </>
);

```

### Custom Styles

Body Text supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for BodyText not found -->
