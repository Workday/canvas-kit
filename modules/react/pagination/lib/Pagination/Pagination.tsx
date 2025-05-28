import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

import {PaginationModel} from './types';
import {
  usePaginationModel,
  UsePaginationModelConfig,
  PaginationContext,
} from './usePaginationModel';

import {
  JumpToFirstButton,
  StepToPreviousButton,
  StepToNextButton,
  JumpToLastButton,
  PaginationControls,
} from './Controls';

import {PageList, PageListItem} from './PageList';
import {PageButton} from './PageButton';
import {AdditionalDetails} from './AdditionalDetails';
import {GoToForm} from './GoTo/Form';
import {GoToTextInput} from './GoTo/TextInput';
import {GoToLabel} from './GoTo/Label';

export {PaginationContext};

export type PaginationProps = PaginationNavProps & {
  lastPage?: number;
  firstPage?: number;
  initialCurrentPage?: number;
  rangeSize?: number;
  model?: PaginationModel;
  onPageChange?: (pageNumber: number) => void;
};

function useDefaultModel<T, C>(model: T | undefined, config: C, fn: (config: C) => T) {
  return model || fn(config);
}

export interface PaginationNavProps extends FlexProps {
  'aria-label': string;
}

export const paginationStencil = createStencil({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

/**
 * `Pagination` is a container component rendered as a `<nav>` element that is responsible for creating
 * a `PaginationModel` and sharing it with its subcomponents using React context.
 *
 * ```tsx
 * <Pagination
 *   aria-label="Pagination"
 *   lastPage={100}
 *   initialCurrentPage={6}
 *   rangeSize={3}
 *   onPageChange={pageNumber => console.log(pageNumber)}
 * >
 *   {Child components}
 * </Pagination>
 * ```
 *
 * Alternatively, you may pass in a model using the hoisted model pattern.
 *
 * ```tsx
 * const model = usePaginationModel({
 *   lastPage: 100,
 *   initialCurrentPage: 6,
 *   rangeSize: 3,
 *   onPageChange: pageNumber => console.log(pageNumber),
 * });
 *
 * return (
 *   <Pagination aria-label="Pagination" model={model}>
 *     {Child components}
 *   </Pagination>
 * );
 * ```
 */
export const Pagination = createComponent('nav')({
  displayName: 'Pagination',
  Component(props: PaginationProps, ref, Element) {
    const model = useDefaultModel(
      props.model,
      props as UsePaginationModelConfig,
      usePaginationModel
    );

    const {lastPage, firstPage, initialCurrentPage, rangeSize, onPageChange, ...elemProps} = props;

    return (
      <PaginationContext.Provider value={model}>
        <Element ref={ref} {...mergeStyles(elemProps, paginationStencil())} />
      </PaginationContext.Provider>
    );
  },
  subComponents: {
    /**
     * `Pagination.Controls` provides proper alignment and spacing between elements inside
     * `Pagination`. It does not handle any internal business logic or state.
     *
     * ```tsx
     * <Pagination.Controls>{Child components}</Pagination.Controls>
     * ```
     */
    Controls: PaginationControls,
    /**
     * `Pagination.JumpToFirstButton` is a {@link TertiaryButton} that subscribes to the
     * `Pagination` context. This allows it to know when to disable and set `currentPage` to the
     * first page.
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `First` or the translated equivalent.
     *
     * ```tsx
     * <Pagination.JumpToFirstButton aria-label="First" />
     * ```
     */
    JumpToFirstButton,
    /**
     * `Pagination.StepToPreviousButton` is a {@link TertiaryButton} that renders an icon that
     * subscribes to the `Pagination` context. This allows it to know when to disable and decrement
     * the `currentPage`.
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `Previous` or the translated equivalent.
     *
     * ```tsx
     * <Pagination.StepToPreviousButton aria-label="Previous" />
     * ```
     */
    StepToPreviousButton,
    /**
     * `Pagination.StepToNextButton` is a {@link TertiaryButton} that subscribes to the `Pagination`
     * context. This allows it to know when to disable and increment the `currentPage`.
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `Next` or the translated equivalent.
     *
     * ```tsx
     * <Pagination.StepToNextButton aria-label="Next" />
     * ```
     */
    StepToNextButton,
    /**
     * `Pagination.JumpToLastButton` is a {@link TertiaryButton} that renders an icon that
     * subscribes to the `Pagination` context. This allows it to know when to disable and set
     * `currentPage` to the last page.
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `Last` or the translated equivalent.
     *
     * ```tsx
     * <Pagination.JumpToLastButton aria-label="Last" />
     * ```
     */
    JumpToLastButton,
    /**
     * `Pagination.PageList` subscribes to the `Pagination` context. This allows it generate the
     * `range` of page numbers. It also handles spacing between the child elements.
     *
     * This component will accept either child elements or a render prop. In most cases, you'll want
     * to use the render prop so you can access the `Pagination` model in order to generate the
     * proper list items.
     *
     * ```tsx
     * <Pagination.PageList>
     *   {({state}) =>
     *     state.range.map(pageNumber => (
     *       <Pagination.PageListItem key={pageNumber}>
     *         <Pagination.PageButton aria-label={`Page ${pageNumber}`} pageNumber={pageNumber} />
     *       </Pagination.PageListItem>
     *     ))
     *   }
     * </Pagination.PageList>
     * ```
     */
    PageList,
    /**
     * `Pagination.PageListItem` provides a semantic child element for the `PageList` component and
     * is important for accessibility. It does not handle any internal business logic or state.
     *
     * ```tsx
     * <Pagination.PageListItem>{Child element}</Pagination.PageListItem>
     * ```
     */
    PageListItem,
    /**
     * `Pagination.PageButton` subscribes to the `Pagination` context. This allows it to update the
     * `currentPage` and set the `toggled` styling when it is the current item.
     *
     * `Pagination.PageButton` will render `pageNumber` as its children.
     *
     * ```tsx
     * <Pagination.PageButton aria-label="Page 2" pageNumber={2} />
     * ```
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `Page ${pageNumber}` or the translated equivalent.
     */
    PageButton,
    /**
     * `Pagination.GoToForm` is a wrapper for a React context provider rendered as a `<form>`
     * element. Child components such as {@link GoToTextInput Pagination.GoToTextInput} and
     * {@link GoToLabel Pagination.GoToLabel} subscribe to that context to manage the form state and
     * behavior as well as update the `currentPage` in the `Pagination` component.
     *
     * ```tsx
     * <Pagination.GoToForm>{Child elements}</Pagination.GoToForm>
     * ```
     */
    GoToForm,
    /**
     * `Pagination.GoToTextInput` is a {@link TextInput}.
     *
     * ```tsx
     * <Pagination.GoToTextInput aria-label="Go to page number" />
     * ```
     *
     * Note that you must set `aria-label` to meet accessibility standards. We recommend setting it
     * to `Go to page number` or the translated equivalent.
     */
    GoToTextInput,
    /**
     * `Pagination.GoToLabel` subscribes to the `Pagination` context. This allows it to pass the
     * `Pagination` context to child elements.
     *
     * This component will accept either child elements or a render prop. In most cases, you'll want
     * to use the render prop so you can access the `Pagination` model when generating the label
     * text.
     *
     * ```tsx
     * <Pagination.GoToLabel>{({state}) => `of ${state.lastPage} pages`}</Pagination.GoToLabel>
     * ```
     */
    GoToLabel,
    /**
     * `Pagination.AdditionalDetails` subscribes to the `Pagination` context. This allows it to pass
     * the `Pagination` context to child elements. It is also an `aria-live` region that announces
     * the current page update to screen readers.
     *
     * `Pagination.AdditionalDetails` must be included in your `Pagination` component to meet
     * accessibility standards (with one exception, see below). If you wish to prevent it from
     * displaying, you may set its `shouldHideDetails` prop to `true`. The visually hidden region
     * will still be accessible to screen readers.
     *
     * If you have multiple `Pagination` components sharing the same state and rendered on the same
     * page, you may do either of the following to prevent screen readers from announcing the same
     * update multiple times:
     *
     * - Exclude `Pagination.AdditionalDetails` from all but one of the `Pagination` components.
     *   This is the one case where you may exclude `Pagination.AdditionalDetails` from a
     *   `Pagination` component.
     * - Include `Pagination.AdditionalDetails` in every `Pagination` component (i.e., you want it
     *   to be visible for every component), but set the `shouldAnnounceToScreenReader` prop to
     *   `false` on all but one of them.
     *
     * This component will accept either child elements or a render prop. In most cases, you'll want
     * to use the render prop so you can access the `Pagination` model in order to generate the
     * appropriate text.
     *
     * ```tsx
     * <Pagination.AdditionalDetails>
     *   {({state}) =>
     *     `${getVisibleResultsMin(state.currentPage, resultCount)}-${getVisibleResultsMax(
     *       state.currentPage,
     *       resultCount,
     *       totalCount
     *     )} of ${totalCount} results`
     *   }
     * </Pagination.AdditionalDetails>
     * ```
     */
    AdditionalDetails,
  },
});
