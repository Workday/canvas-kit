---
source_file: preview-react/status-indicator/stories/StatusIndicator.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/status-indicator/stories/StatusIndicator
---

<Meta of={StatusIndicatorStories} />

# Canvas Kit Status Indicator

Status Indicators help the user quickly identify the status of a task, action, or page element.

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

`StatusIndicator` includes a container `StatusIndicator` component and the following subcomponents
which can be composed in a variety of ways: `StatusIndicator.Label` and `StatusIndicator.Icon`.

A basic `StatusIndicator` with a `StatusIndicator.Label` will render text with a gray background and
low emphasis.

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';

export const Basic = () => {
  return (
    <StatusIndicator>
      <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
    </StatusIndicator>
  );
};

```

### Emphasis

Set the `emphasis` prop of `StatusIndicator` to adjust the contrast between the text and background
color. Emphasis is typically used to convey more visual urgency.

`emphasis` accepts `high` or `low`.

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
});

export const Emphasis = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator emphasis="high">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>High Emphasis</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator emphasis="low">
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>Low Emphasis</StatusIndicator.Label>
      </StatusIndicator>
    </Flex>
  );
};

```

### Icon

Use `StatusIndicator.Icon` to add an icon to the `StatusIndicator` as a visual decorator. The
position of the icon may be adjusted depending on where you place it in the markup.

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
});

export const Icon = () => {
  return (
    <Flex cs={parentContainerStyles}>
      <StatusIndicator>
        <StatusIndicator.Icon aria-label="unpublished" icon={uploadCloudIcon} />
        <StatusIndicator.Label>Unpublished</StatusIndicator.Label>
      </StatusIndicator>
      <StatusIndicator variant="positive">
        <StatusIndicator.Label>published</StatusIndicator.Label>
        <StatusIndicator.Icon aria-label="published" icon={uploadCloudIcon} />
      </StatusIndicator>
    </Flex>
  );
};

```

### Overflow

We **strongly** discourage using text in a `StatusIndicator` which will cause it to exceed its
maximum width of `200px`. In situations where this cannot be avoided and text must be overflowed, we
suggest wrapping `StatusIndicator` in an `OverflowTooltip` and applying `tabIndex={0}` to it so the
overflowed text is accessible via keyboard and mouse. You may also override the default `maxWidth`
of `StatusIndicator` via [style props](/getting-started/for-developers/resources/style-props/).

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {calc, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const statusIndicatorStyles = createStyles({
  maxWidth: calc.add(system.space.x20, system.space.x4),
});

export const Overflow = () => {
  return (
    <OverflowTooltip>
      <StatusIndicator tabIndex={0} cs={statusIndicatorStyles}>
        <StatusIndicator.Icon icon={uploadCloudIcon} />
        <StatusIndicator.Label>
          Your workbook is currently in process of saving
        </StatusIndicator.Label>
      </StatusIndicator>
    </OverflowTooltip>
  );
};

```

### Variants

Set the `variant` prop of `StatusIndicator` to adjust its background color. `variant` accepts the
following values:

- `gray`
- `orange`
- `blue`
- `green`
- `red`
- `transparent`

The background color dictated by the `variant` will be dark or light based on the `emphasis`.

```tsx
import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  parentContainerStyles: createStyles({
    gap: system.space.x4,
    flexDirection: 'column',
  }),
  innerContainerStyles: createStyles({
    gap: system.space.x4,
  }),
};

export const Variants = () => {
  return (
    <Flex cs={styleOverrides.parentContainerStyles}>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator>
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
      </Flex>
      <Flex cs={styleOverrides.innerContainerStyles}>
        <StatusIndicator emphasis="high">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="caution">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="info">
          <StatusIndicator.Label>Lorem ipsum dolor </StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="positive">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="critical">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
        <StatusIndicator emphasis="high" variant="transparent">
          <StatusIndicator.Label>Lorem ipsum dolor</StatusIndicator.Label>
          <StatusIndicator.Icon icon={uploadCloudIcon} />
        </StatusIndicator>
      </Flex>
    </Flex>
  );
};

```

### Custom Styles

Status Indicator and its subcomponents support custom styling via the `cs` prop. For more
information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for StatusIndicator not found -->
