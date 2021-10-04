export interface PaginationState {
  /**
   * The page number for the current page
   */
  currentPage: number;
  /**
   * The page number for the first page
   */
  firstPage: number;
  /**
   * The page number for the last page (it can also be used as a total page
   * count)
   */
  lastPage: number;
  /**
   * An array of page numbers included in the pagination range
   */
  range: number[];
  /**
   * The size of the pagination range
   */
  rangeSize: number;
}

export interface PaginationEvents {
  /**
   * Sets the current page to a given page number (no safeguards)
   */
  setCurrentPage: (page: number) => void;
  /**
   * Sets the current page to the first page
   */
  first: () => void;
  /**
   * Sets the current page to the last page
   */
  last: () => void;
  /**
   * Increments the current page by 1
   */
  next: () => void;
  /**
   * Decrements the current page by 1
   */
  previous: () => void;
  /**
   * Sets the current page to a given page number (with safeguards). `goTo`
   * is very similar to `setCurrentPage`, but it has some built-in safeguards.
   * If the page number provided is below the first page (e.g: `0`),
   * `currentPage` will be set to the `firstPage`. Similarly, if the number
   * provided is larger than the `lastPage`, it will set `currentPage` to the
   * `lastPage`.
   */
  goTo: (page: number) => void;
}

export interface PaginationModel {
  state: PaginationState;
  events: PaginationEvents;
}
