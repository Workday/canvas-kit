import * as React from 'react';

import {buildPageRange} from './buildPageRange';
import {getRangeMax, getRangeMin} from './common/utils/helpers';
import {PaginationModel} from './types';

export const PaginationContext = React.createContext({} as PaginationModel);

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
   * A guard function called before the page changes. It receives the page number the model is
   * about to change to. Return `false` to prevent the change: `currentPage` stays as is and
   * `onPageChange` is not called. The guard is not called when the requested page is already the
   * current page.
   */
  shouldPageChange?: (pageNumber: number) => boolean;
  /**
   * The size of the pagination range
   * @default 5
   */
  rangeSize?: number;
};

export const usePaginationModel = (config: UsePaginationModelConfig): PaginationModel => {
  const {
    firstPage = 1,
    initialCurrentPage = 1,
    lastPage,
    rangeSize = 5,
    onPageChange,
    shouldPageChange,
  } = config;
  const [currentPage, setCurrentPage] = React.useState(initialCurrentPage);

  const changePage = (page: number) => {
    if (currentPage === page) {
      // Nothing changes, so there is nothing to guard and no `onPageChange` event to fire.
      return;
    }
    if (shouldPageChange?.(page) === false) {
      return;
    }
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
