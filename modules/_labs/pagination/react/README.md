# Canvas Kit React Pagination

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/_labs/README.md">
  <img src="https://img.shields.io/badge/LABS-beta-orange" alt="LABS: Beta" />
</a>  This component is work in progress and currently in pre-release.

Contains a component for a pagination bar and dispatches for page changes

## Installation

```sh
yarn add @workday/canvas-kit-labs-react-pagination
```

## Usage

```tsx
import * as React from 'react';
import Pagination from '@workday/canvas-kit-labs-react-pagination';

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

> The total number of items.

#### pageSize: number

> The number of items to display per page.

#### currentPage: number

> The current page being displayed.

#### onPageChange: (page: number) => void

> Dispatch which is invoked when the page is changed.

### Optional

#### showLabel?: boolean

> Shows a label below the pagination bar describing the items currently being viewed.

#### showGoTo?: boolean

> Shows a box adjacent to the pagination bar where a page can be entered and is submitted when
> 'Enter' key is pressed.

#### goToLabel?: string

> Determines the label next to the Go To box. Defaults to 'Go To'. Only usable while showGoTo is set
> to true.

#### customLabel?: (from: number, to: number, items: number, itemLabel: string) => string

> A function to build a custom label below the pagination bar.

#### paginationContainerAriaLabel?: string;

> Customizes the aria label for the Pagination container div. Default is 'Pagination'.

#### previousPageAriaLabel?: string;

> Customizes the aria label for the Previous Page Arrow. Default is 'Previous Page'.

#### nextPageAriaLabel?: string;

> Customizes the aria label for the Next Page Arrow. Default is 'Next Page'.

#### pageButtonAriaLabel?: (page: number, selected: boolean) => string;

> Customizes each page button. Default is (page: number, selected: boolean) =>
> `${selected ? 'Selected, ' : ''}Page ${page}`
