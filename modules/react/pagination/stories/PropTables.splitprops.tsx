import {
  PaginationModel,
  PaginationState,
  PaginationEvents,
  UsePaginationModelConfig,
} from '@workday/canvas-kit-react/pagination';

// <ArgsTable of={Pagination} /> generates a very large props table given that
// PaginationProps includes FlexProps. Use this dummy component instead to
// limit the props shown.
export const PaginationHoistedComponent = (_: {model: PaginationModel}) => <div />;

// <ArgsTable of={Pagination.PageButton} /> generates a props table with
// IconButton props. Use this dummy component instead to limit the props shown.
export const PageButtonComponent = (_: {pageNumber: number}) => <div />;

// <ArgsTable of={Pagination.PageListComponent} /> generates a very large props
// table given that PageListProps includes FlexProps. Use this dummy component
// instead to limit the props shown.
export const PageListComponent = (_: {
  /**
   * Accepts child elements or a render prop.
   */
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}) => <div />;

// <ArgsTable of={Pagination.AdditionalDetails} /> generates a very large props
// table given that AdditionalDetailsProps includes FlexProps. Use this dummy
// component instead to limit the props shown.
export const AdditionalDetailsComponent = (_: {
  /**
   * Accepts child elements or a render prop.
   */
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  /**
   * @default true
   */
  shouldAnnounceToScreenReader?: boolean;
  /**
   * @default false
   */
  shouldHideDetails?: boolean;
}) => <div />;

export const PaginationModelConfigComponent = (_: UsePaginationModelConfig) => <div />;
export const PaginationStateComponent = (_: PaginationState) => <div />;
export const PaginationEventsComponent = (_: PaginationEvents) => <div />;
