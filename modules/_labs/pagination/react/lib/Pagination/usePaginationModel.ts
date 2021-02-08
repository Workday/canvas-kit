import * as React from 'react';

import {buildPageRange} from './buildPageRange';
import {PaginationModel} from './types';

export type UsePaginationModelConfig = {
  lastPage: number;
  firstPage?: number;
  initialCurrentPage?: number;
  onPageChange?: (pageNumber: number) => void;
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

  const jumpToFirst = () => {
    changePage(firstPage);
  };

  const jumpToLast = () => {
    changePage(lastPage);
  };

  const stepToNext = () => {
    changePage(currentPage + 1);
  };

  const stepToPrevious = () => {
    changePage(currentPage - 1);
  };

  const goToPage = (pageNumber: number) => {
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
  const rangeMin = range[0];
  const rangeMax = range[range.length - 1];

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
    jumpToFirst,
    jumpToLast,
    stepToNext,
    stepToPrevious,
    goToPage,
  };

  return {
    state,
    events,
  };
};
