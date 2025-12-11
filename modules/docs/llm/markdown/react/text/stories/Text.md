---
source_file: react/text/stories/Text.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/Text
---

<Meta of={TextStories} />

# Canvas Kit Text

`Text` provides an ergonomic API for rendering text. It includes built-in support for Canvas type
tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Text` is built on top of [`Box`](/components/layout/box/) and supports a multitude of
[style props](/getting-started/for-developers/resources/style-props/) including spacing props such
as `margin` and `padding`, as well as text styling props such as `fontSize` and `fontWeight`.

`Text` renders a `<span>` element by default. You may override the rendered element using the `as`
prop.

```tsx
import React from 'react';

import {type, typeColors} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {Text} from '@workday/canvas-kit-react/text';

export const Basic = () => (
  <Box>
    <Text as="h4">Text as h4</Text>
    <Text as="p" fontSize={14} fontWeight="regular" fontFamily="monospace">
      Text styled using style props
    </Text>
    <Text as="p" {...type.levels.subtext.large}>
      Text styled using type token level
    </Text>
    <Box {...type.levels.subtext.large} color={typeColors.hint}>
      <Text>Text with inherited styles</Text>
    </Box>
  </Box>
);

```

### Type Level and Variant

`Text` includes built-in support for [Canvas type tokens](/tokens/type/) via the `typeLevel` and
`variant` props.

`typeLevel` hooks into the [Canvas type hierarchy](/tokens/type/#type-styles).

```tsx
import React from 'react';

import {Text} from '@workday/canvas-kit-react/text';

export const TypeLevel = () => (
  <Text as="p" typeLevel="body.small">
    Small Body level text
  </Text>
);

```

`variant` allows you to layer [additional styling](/tokens/type/#variants) to aid users'
understanding of the text being rendered.

```tsx
import React from 'react';

import {Text} from '@workday/canvas-kit-react/text';

export const Variant = () => (
  <Text as="p" variant="error">
    Error text
  </Text>
);

```

### Custom Styles

Text supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Text not found -->
