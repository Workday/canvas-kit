import * as React from 'react';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';

import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Pagination aria-label="Pagination" lastPage={lastPage}>
        <Pagination.Controls>
          <Pagination.JumpToFirstButton aria-label="First" />
          <Pagination.StepToPreviousButton aria-label="Previous" />
          <Pagination.PageList>
            {({state}) =>
              state.range.map(pageNumber => (
                <Pagination.PageListItem key={pageNumber}>
                  <Pagination.PageButton
                    aria-label={`Page ${pageNumber}`}
                    pageNumber={pageNumber}
                  />
                </Pagination.PageListItem>
              ))
            }
          </Pagination.PageList>
          <Pagination.StepToNextButton aria-label="Next" />
          <Pagination.JumpToLastButton aria-label="Last" />
          <Pagination.GoToForm>
            <Pagination.GoToTextInput aria-label="Go to page number" />
            <Pagination.GoToLabel>{() => `من 100 صفحات`}</Pagination.GoToLabel>
          </Pagination.GoToForm>
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )}-${getVisibleResultsMin(state.currentPage, resultCount)} من 100 صفحات`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
    </CanvasProvider>
  );
};
