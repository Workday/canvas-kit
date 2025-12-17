# Migration Guide

## Deprecated API

Below is a table of props in < v4.5 and notes about how they relate to the current API.

| Name                           | Required in < v4.5? | New Name       | Notes                                                                                         |
| ------------------------------ | ------------------- | -------------- | --------------------------------------------------------------------------------------------- |
| `pageSize`                     | ✅ `true`           | n/a            | This is not needed in the new Pagination API                                                  |
| `total`                        | ✅ `true`           | n/a            | This is not needed in the new Pagination API                                                  |
| `currentPage`                  | ✅ `true`           | n/a            | This is not needed in the new Pagination API (though you can provide an `initialCurrentPage`) |
| `onPageChange`                 | ✅ `true`           | `onPageChange` | This is now an optional prop in the new Pagination API                                        |
| `showLabel`                    | 🚫 `false`          | n/a            | You can now access the label directly with the `AdditionalDetails` component                  |
| `customLabel`                  | 🚫 `false`          | n/a            | You can now access the label directly with the `AdditionalDetails` component                  |
| `showGoTo`                     | 🚫 `false`          | n/a            | You can now access the `GoToForm` component directly                                          |
| `goToLabel`                    | 🚫 `false`          | n/a            | You can now access the label directly with the `GoToLabel` component                          |
| `paginationContainerAriaLabel` | 🚫 `false`          | n/a            | You can now access the Pagination container directly                                          |
| `previousPageAriaLabel`        | 🚫 `false`          | n/a            | You can now access the `StepToPrevious` button directly                                       |
| `nextPageAriaLabel`            | 🚫 `false`          | n/a            | You can now access the `StepToNext` button directly                                           |
| `pageButtonAriaLabel`          | 🚫 `false`          | n/a            | You can now access the `PageButton`s directly                                                 |

## Example

If you were previously writing your `Pagination component like this:

```tsx
import * as React from 'react';
import Pagination from '@workday/canvas-kit-react/pagination';

const [currentPage, setCurrentPage] = React.useState(1);

const MyPaginationComponent = () => {
  return (
    <Pagination
      total={100}
      pageSize={10}
      currentPage={currentPage}
      onPageChange={pageNumber => setCurrentPage(pageNumber)}
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
import {
  Pagination,
  getLastPage,
  getVisibleResultsMin,
  getVisibleResultsMax,
} from '@workday/canvas-kit-labs-react/pagination';

const MyPaginationComponent = () => {
  //  In this example, Pagination state is handled internally,
  // but this is added here to simplify the example
  const [currentPage, setCurrentPage] = React.useState(1);
  const resultsPerPage = 10;
  const totalCount = 108;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      initialCurrentPage={currentPage}
      lastPage={lastPage}
      onPageChange={pageNumber => setCurrentPage(pageNumber)}
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
          <Pagination.GoToTextInput aria-label="Go to page number" />
          <Pagination.GoToLabel>{`of ${totalCount} candidates`}</Pagination.GoToLabel>
        </Pagination.GoToForm>
      </Pagination.Controls>
      <Pagination.AdditionalDetails>
        {({state}) =>
          `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} candidates`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};
```

For more detailed information on this component, please refer to the
[storybook documentation](https://workday.github.io/canvas-kit/?path=/docs/components-navigation-pagination--docs#jump-controls)
