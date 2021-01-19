import * as React from 'react';

export interface PaginationState {
  currentPage: number; // current page
  firstPage: number; // first page
  lastPage: number; // last page
  range: number[]; // array of page numbers
  rangeSize: number; // size of the range
  rangeMin: number; // maximum value in the range
  rangeMax: number; // minimum value in the range
}

export interface PaginationEvents {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  jumpToFirst: () => void;
  jumpToLast: () => void;
  stepToNext: () => void;
  stepToPrevious: () => void;
  goToPage: (page: number) => void;
}

export interface PaginationModel {
  state: PaginationState;
  events: PaginationEvents;
}
