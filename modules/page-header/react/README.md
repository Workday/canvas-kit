# Canvas Kit Page Header

A Canvas component that displays the header of a specific page within a website or application. It
is generally used as a sub-header to the main application header
(`@workday/canvas-kit-react-header`).

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

<PageHeader title="Marketing" marketing={true}>
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

#### `marketing: boolean`

> Use the page header in the marketing context (non-product). In this context, content is centered
> and the page header is responsive in all three breakpoints.

Defalut: `false`

---

#### `breakpoints: { sm: number, md: number, lg: number }`

> A set of breakpoints that specifies where each screen size's minimum window width begins. The page
> header sets spacing styles based on the size of the screen.
>
> For example, by default a mobile screen size would be from 0 to 767 pixels, a 'sm' screen is from
> 768 to 991, a 'md' screen is from 992 to 1199 pixels, and a 'lg' screen is 1200 pixels and beyond.
>
> For a non-marketing (default) context, the page header only adjusts its spacing styles up until
> the 'sm' size breakpoint. In the `marketing` context, a page header adjusts for spacing in all
> sizes.

Default: `{ sm: 768, md: 992, lg: 1200 }`
