# Canvas Kit React Expandable

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Canvas-styled React container that can be expanded and collapsed

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-expandable
```

## Usage

```tsx
import * as React from 'react';
import Expandable from '@workday/canvas-kit-labs-react-expandable';

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
