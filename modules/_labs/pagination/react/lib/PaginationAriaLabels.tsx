export const defaultAriaLabels: PaginationAriaLabelsDefault = {
  paginationContainerAriaLabel: 'Pagination',
  previousPageAriaLabel: 'Previous Page',
  nextPageAriaLabel: 'Next Page',
  navigationEllipseAriaLabel: 'Navigation Ellipse',
  pageButtonAriaLabel: (page: number, selected: boolean) =>
    `${selected ? 'Selected, ' : ''}Page ${page}`,
};

export type PaginationAriaLabelsDefault = {
  [key in keyof Required<PaginationAriaLabels>]: NonNullable<PaginationAriaLabels[key]>;
};

export interface PaginationAriaLabels {
  paginationContainerAriaLabel?: string;
  previousPageAriaLabel?: string;
  nextPageAriaLabel?: string;
  navigationEllipseAriaLabel?: string;
  pageButtonAriaLabel?: (page: number, selected: boolean) => string;
}
