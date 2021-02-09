# MIGRATION GUIDE

## Deprecated API

```
pageSize: number => this isn't represented in the new API, but it also isn't needed by the component
total: number => this isn't represented in the new API, but it also isn't needed by the component
currentPage: number => currentPage (no change needed)
onPageChange: (page: number) => void => onPageChange (no change needed)
showLabel?: boolean => // use AdditionalDetails component
customLabel?: (from: number, to: number, items: number, itemLabel: string) => string // use AdditionalDetails component

showGoTo?: boolean => use GoTo component
goToLabel?: string => use GoTo label component

paginationContainerAriaLabel?: string; ==> use top-level aria-label
previousPageAriaLabel?: string; => use step-to-previous-page button aria-label
nextPageAriaLabel?: string; => use step-to-next-page button aria-label
pageButtonAriaLabel?: (page: number, selected: boolean) => string; => use page button aria-label
```

## Example

If you were previously writing your `Pagination component like this:

```tsx
import * as React from 'react';
import Pagination from '@workday/canvas-kit-labs-react-pagination';

const [currentPage, setCurrentPage] = React.useState(1);

const MyPaginationComponent = () => {
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
};
```

You would now write something like this:

```tsx
import * as React from 'react';
import {Pagination} from '@workday/canvas-kit-labs-react-pagination';

const MyPaginationComponent = () => {
  // Pagination state is handled internally in this example,
  // but this is added here to simplify the example
  const [currentPage, setCurrentPage] = React.useState(1); // by default, Pagination's initial current page is 1.
  const resultsPerPage = 10;
  const totalPageCount = 100;

  const resultsMin = currentPage * resultCount - resultCount + 1;
  const resultsMax =
    totalPageCount < currentPage * resultCount ? totalPageCount : currentPage * resultCount;

  return (
    <Pagination
      onPageChange={pageNumber => setCurrentPage(pageNumber)}
      aria-label="Pagination"
      lastPage={Math.ceil(totalPageCount / resultsPerPage)}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton aria-label="Previous" />
        <Pagination.PageList>
          {({state}) =>
            state.range.map(pageNumber => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton aria-label="Next" />
        <Pagination.JumpToLastButton aria-label="Last" />
        <Pagination.GoToForm>
          <Pagination.GoToTextInput />
          <Pagination.GoToLabel>{`of ${totalPageCount} candidates`}</Pagination.GoToLabel>
        </Pagination.GoToForm>
      </Pagination.Controls>
      <Pagination.AdditionalDetails>
        `${resultsMin}-${resultsMax} of ${totalPageCount} candidates`}
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
```

For more details on usage, please refer to the Pagination README.
