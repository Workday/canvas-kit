# Canvas Kit React Pagination

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Contains a component for a pagination bar and dispatches for page changes

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-pagination
```

## Usage

```tsx
import * as React from 'react';
import Pagination from '@workday/canvas-kit-react-pagination';

const [currentPage, setCurrentPage] = React.useState(1);

return (
  <Pagination
    total={100}
    pageSize={10}
    currentPage={currentPage}
    onPageChange={p => setCurrentPage(p)}
    showLabel
    showGoTo
    dataLabel="candidate"
  />
);
```

## Static Properties

> None

## Component Props

### Required

#### total: number

> The total number of items

#### pageSize: number

> The number of items to display per page

#### currentPage: number

> The current page being displayed

#### onPageChange: (page: number) => void

> Dispatch which is invoked when the page is changed

### Optional

#### showLabel?: boolean

> Shows a label below the pagination bar describing the items currently being viewed

#### showGoTo?: boolean

> Shows a box adjacent to the pagination bar where a page can be entered and is submitted when
> 'Enter' key is pressed

#### dataLabel?: string

> Replaces the default 'item' label with a data type, ex 'candidate'
