# Canvas Kit React Expandable

Canvas-styled React container that can be expanded and collapsed

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-expandable
```

## Usage

```tsx
import * as React from 'react';
import Expandable from '@workday/canvas-kit-react-expandable';

<Expandable heading="Container Title">
  Container Contents
</Expandable>

<Expandable heading={<a href="www.workday.com">Workday</a>} expanded>
  Container Contents
</Expandable>
```

## Static Properties

> None

## Component Props

### Required

#### `header: React.ReactNode`

> The content of the Expandable header.

#### `children: React.ReactNode`

> The content of the expandable/collapsible section.

### Optional

#### `expanded: boolean`

> If the expandable container should start out expanded (true) or collapsed (false)

Default: `false`
