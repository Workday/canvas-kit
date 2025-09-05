import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from '@workday/canvas-kit-react/pagination';

export const CustomRange = () => {
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  return (
    <Pagination
      aria-label="Pagination"
      lastPage={lastPage}
      onPageChange={pageNumber => console.log(pageNumber)}
      rangeSize={3}
    >
      <Pagination.Controls>
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
  );
};
