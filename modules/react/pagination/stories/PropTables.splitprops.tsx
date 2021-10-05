import {
  PaginationModel,
  PaginationState,
  PaginationEvents,
  UsePaginationModelConfig,
} from '@workday/canvas-kit-react/pagination';

export const PaginationHoistedComponent = (_: {model: PaginationModel}) => <div />;

export const PageButtonComponent = (_: {pageNumber: number}) => <div />;

export const PageListComponent = (_: {
  /**
   * Accepts child elements or a render prop.
   */
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}) => <div />;

export const GoToLabelComponent = (_: {
  /**
   * Accepts child elements or a render prop.
   */
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
}) => <div />;

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
