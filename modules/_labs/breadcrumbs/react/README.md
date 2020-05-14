# Canvas Kit React Breadcrumbs

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Breadcrumbs component for navigation through different levels of some structure. Adjustable to container width.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-breadcrumbs
```

## Usage

```tsx
import * as React from 'react';
import Breadcrumbs from '@workday/canvas-kit-labs-react-breadcrumbs';

<Breadcrumbs />;
```

## Static Properties

> None

## Component Props

### Required

#### `breadcrumbs: Breadcrumb[]`

> This is an array of objects that contain a `name` and an `onAction` function for
that respective name. They will be listed from index 0 - n as breadcrumbs, starting
at root and ending at the current location.

#### `containerWidth: number`

> This is a number that represents the maximum width you want the breadcrumbs to
take up. If there are too many breadcrumbs passed in for this width, the component
will hide exactly enough breadcrumbs under the expander until the component's total width is less than this prop.

### Optional

#### `variation: BreadcrumbVariation`

> Possible options are `medium` and `large` and change the styling of the breadcrumbs as such.
