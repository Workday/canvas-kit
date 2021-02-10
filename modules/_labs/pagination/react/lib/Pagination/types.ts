import * as React from 'react';

export interface PaginationState {
  currentPage: number; // current page
  firstPage: number; // first page
  lastPage: number; // last page
  range: number[]; // array of page numbers
  rangeSize: number; // size of the range
}

export interface PaginationEvents {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  first: () => void;
  last: () => void;
  next: () => void;
  previous: () => void;
  goTo: (page: number) => void;
}

export interface PaginationModel {
  state: PaginationState;
  events: PaginationEvents;
}
