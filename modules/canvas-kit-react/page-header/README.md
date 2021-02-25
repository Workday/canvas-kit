# Canvas Kit Page Header

A Canvas component that displays the header of a specific page within a website or application. It
is generally used as a sub-header to the main application header
(`@workday/canvas-kit-labs-react-header`).

[> Workday Design Reference](https://design.workday.com/components/navigation/headers)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-page-header
```

## Usage

```tsx
import * as React from 'react';
import {PageHeader} from '@workday/canvas-kit-react-page-header';
import {IconButton} from '@workday/canvas-kit-react-button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

<PageHeader title="Product">
  <IconButton icon={exportIcon} />
  <IconButton icon={fullscreenIcon} />
</PageHeader>

<PageHeader title="With Cap Width" capWidth={true}>
  <IconButton icon={exportIcon} />
  <IconButton icon={fullscreenIcon} />
</PageHeader>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `title: string`

> The title of the page header.

Default: `''`

---

#### `capWidth: boolean`

> Use the page header in the non-product page. In this context, content is centered and the page
> header is responsive in all three breakpoints.

Defalut: `false`

---

#### `breakpoint: number`

> The breakpoint at which the header's container spacing increases from 's' size to 'xl' size.

Default: `768`
