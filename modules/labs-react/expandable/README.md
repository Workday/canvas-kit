# Canvas Kit Expandable Container

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in prerelease.

Container that expands content

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

### Basic Example

```tsx
import * as React from 'react';
import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

<Expandable>
  <Expandable.Target headingLevel="h1">
    <Expandable.StartChevron />
    Additional Information
  </Expandable.Target>
  <Expandable.Content>Content</Expandable.Content>
</Expandable>;
```

## Components

### Expandable

#### Component Props

##### Required

> children

##### Optional

> model

### Expandable.Target

#### Component Props

##### Required

> headingLevel children

##### Optional

> model

### Expandable.Title

#### Component Props

##### Required

> children

### Expandable.StartChevron

#### Component Props

##### Optional

> model

### Expandable.EndChevron

#### Component Props

##### Optional

> model

### Expandable.Avatar

#### Component Props

##### Optional

> AvatarProps

### Expandable.Content

#### Component Props

##### Required

> children

##### Optional

> model
