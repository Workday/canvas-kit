import * as React from 'react';

import {buildPageRange} from './buildPageRange';
import {getRangeMax, getRangeMin} from './common/utils/helpers';
import {PaginationModel} from './types';

export type UsePaginationModelConfig = {
  /**
   * The page number for the last page (it can also be used as a total page
   * count)
   */
  lastPage: number;
  /**
   * The page number for the first page
   * @default 1
   */
  firstPage?: number;
  /**
   * The initial current page
   * @default 1
   */
  initialCurrentPage?: number;
  /**
   * The function called when the page changes
   */
  onPageChange?: (pageNumber: number) => void;
  /**
   * The size of the pagination range
   * @default 5
   */
  rangeSize?: number;
};

export const usePaginationModel = ({
  firstPage = 1,
  initialCurrentPage = 1,
  lastPage,
  rangeSize = 5,
  onPageChange,
}: UsePaginationModelConfig): PaginationModel => {
  const [currentPage, setCurrentPage] = React.useState(initialCurrentPage);

  const changePage = (page: number) => {
    onPageChange?.(page);

    setCurrentPage(page);
  };

  const first = () => {
    changePage(firstPage);
  };

  const last = () => {
    changePage(lastPage);
  };

  const next = () => {
    changePage(currentPage + 1);
  };

  const previous = () => {
    changePage(currentPage - 1);
  };

  const goTo = (pageNumber: number) => {
    if (pageNumber < firstPage) {
      // a safeguard to prevent for going to a page below the range
      changePage(firstPage);
    } else if (pageNumber > lastPage) {
      // a safeguard to prevent going to a page above the range
      changePage(lastPage);
    } else {
      changePage(pageNumber);
    }
  };

  const range = buildPageRange({currentPage, lastPage, rangeSize});
  const rangeMin = getRangeMin(range);
  const rangeMax = getRangeMax(range);

  const state = {
    firstPage,
    currentPage,
    lastPage,
    range,
    rangeSize,
    rangeMin,
    rangeMax,
  };

  const events = {
    setCurrentPage: changePage,
    first,
    last,
    next,
    previous,
    goTo,
  };

  return {
    state,
    events,
  };
};
