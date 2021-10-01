import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
  usePaginationModel,
} from '@workday/canvas-kit-react/pagination';

export const HoistedModel = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  const model = usePaginationModel({
    lastPage,
    onPageChange: number => console.log(number),
  });

  return (
    <>
      <Pagination aria-label="Pagination" model={model}>
        <Pagination.Controls>
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
        </Pagination.Controls>
        <Pagination.AdditionalDetails shouldHideDetails>
          {({state}) =>
            `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
              state.currentPage,
              resultCount,
              totalCount
            )} of ${totalCount} results`
          }
        </Pagination.AdditionalDetails>
      </Pagination>
      <SecondaryButton
        onClick={() => {
          model.events.goTo(7);
        }}
      >
        Go to Page 7
      </SecondaryButton>
    </>
  );
};
