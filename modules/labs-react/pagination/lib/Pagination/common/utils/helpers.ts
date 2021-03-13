/**
 * Returns the last page for the total results
 * @param resultCount number of results per page
 * @param totalCount total number of results
 * @example
 * const lastPage = getLastPage(10, 120); //=> 12
 */
export function getLastPage(resultCount: number, totalCount: number): number {
  return Math.ceil(totalCount / resultCount);
}

/**
 * Returns the first number in the pagination range
 * @param range the range of numbers for the pagination component
 * @example
 * const rangeMin = getRangeMin([1,2,3,4,5]) //=> 1
 */
export function getRangeMin(range: number[]): number {
  return range[0];
}

/**
 * Returns the last number in the pagination range
 * @param range the range of numbers for the pagination component
 * @example
 * const rangeMax = getRangeMax([1,2,3,4,5]) //=> 5
 */
export function getRangeMax(range: number[]): number {
  return range[range.length - 1];
}

/**
 * Returns the first page number for the visible results
 * @param currentPage current page for the range
 * @param resultCount number of results per page
 * @example
 * const pageMin = getVisibleResultsMin(5, 10); //=> 41
 */
export function getVisibleResultsMin(currentPage: number, resultCount: number): number {
  return currentPage * resultCount - resultCount + 1;
}

/**
 * Returns the last page number for the visible results
 * @param currentPage current page for the range
 * @param resultCount number of results per page
 * @param totalCount total number of results
 * @example
 * const pageMax = getVisiblePageMax(5,10,100); //=> 50
 */
export function getVisibleResultsMax(
  currentPage: number,
  resultCount: number,
  totalCount: number
): number {
  if (totalCount < currentPage * resultCount) {
    return totalCount;
  }
  return currentPage * resultCount;
}
