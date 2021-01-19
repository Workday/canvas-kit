export function getLastPage(resultCount: number, totalCount: number): number {
  return Math.ceil(totalCount / resultCount);
}

export function getRangeMin(range: number[]): number {
  return range[0];
}

export function getRangeMax(range: number[]): number {
  return range[range.length - 1];
}

export function getVisibleResultsMin(currentPage: number, resultCount: number): number {
  return currentPage * resultCount - resultCount + 1;
}

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
