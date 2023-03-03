/**
 * This function takes the number of results per page and the total count of results and returns the
 * last page number. Here's an example:
 *
 * Given there are 10 results per page, and there are 128 total results, the function will return 13.
 *
 * ```ts
 * const lastPage = getLastPage(10, 128); //=> 13
 * ```
 *
 * @param resultCount number of results per page
 * @param totalCount total number of results
 */
export function getLastPage(resultCount: number, totalCount: number): number {
  return Math.ceil(totalCount / resultCount);
}

/**
 * This function takes the pagination range and returns its minimum value. Here's an example:
 *
 * Given the pagination range is 1-5, the function will return 1.
 *
 * ```ts
 * const range = [1, 2, 3, 4, 5];
 * const rangeMin = getRangeMin(range); //=> 1
 * ```
 * @param range the range of numbers for the pagination component
 */
export function getRangeMin(range: number[]): number {
  return range[0];
}

/**
 * This function takes the pagination range and returns its maximum value. Here's an example:
 *
 * Given the pagination range is 1-5, the function will return 5.
 *
 * ```ts
 * const range = [1, 2, 3, 4, 5];
 * const rangeMin = getRangeMax(range); //=> 5
 * ```
 * @param range the range of numbers for the pagination component
 */
export function getRangeMax(range: number[]): number {
  return range[range.length - 1];
}

/**
 * This function takes the current page, and number of results per page, and returns the minimum value
 * for that page. Here's an example:
 *
 * Given there are 10 results per page, and the current page is 5, the function will return 41.
 *
 * ```ts
 * const pageMin = getVisibleResultsMin(5, 10); //=> 41
 * ```
 * @param currentPage current page for the range
 * @param resultCount number of results per page
 */
export function getVisibleResultsMin(currentPage: number, resultCount: number): number {
  return currentPage * resultCount - resultCount + 1;
}

/**
 * This function takes the current page, number of results per page, and the total number of results,
 * and returns the maximum value for that page. Here's an example:
 *
 * Given there are 10 results per page, the current page is 5, and there are 42 results total, the
 * function will return 42.
 *
 * ```ts
 * const currentPage = 5;
 * const resultCount = 10;
 * const totalCount = 42;
 * const pageMax = getVisibleResultsMax(currentPage, resultCount, totalCount); //=> 42
 * ```
 * @param currentPage current page for the range
 * @param resultCount number of results per page
 * @param totalCount total number of results
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
