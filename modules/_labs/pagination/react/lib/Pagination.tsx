import styled from '@emotion/styled';
import React from 'react';

import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';

import GoTo from './GoTo';
import Pages from './Pages';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** The total number of items. */
  total: number;
  /** The number of items to display per page. */
  pageSize: number;
  /** The current page being displayed. */
  currentPage: number;
  /** Dispatch which is invoked when the page is changed. */
  onPageChange: (page: number) => void;
  /** Shows a box adjacent to the pagination bar where a page can be entered and is submitted when 'Enter' key is pressed. */
  showGoTo?: boolean;
  /** Shows a label below the pagination bar describing the items currently being viewed. */
  showLabel?: boolean;
  /** A function to build a custom label below the pagination bar. */
  customLabel?: (from: number, to: number, total: number) => string;
  /** Determines the label next to the Go To box. Only usable while showGoTo is set to true. */
  goToLabel?: string;
  /** Customizes the aria label for the Pagination container div. */
  paginationContainerAriaLabel?: string;
  /** Customizes the aria label for the Previous Page Arrow. */
  previousPageAriaLabel?: string;
  /** Customizes the aria label for the Next Page Arrow. */
  nextPageAriaLabel?: string;
  /** Customizes the aria-label on each page button. */
  pageButtonAriaLabel?: (page: number, selected: boolean) => string;
  /** Optional width to pass to component. This is the width the container deems is available. You can use a measure component to get this. */
  width?: number;
  /**
   * Announces page changes to screen readers using aria-live
   * Note: Your application may already announce page changes to screen readers through
   * other means like focus changes or other aria-live regions. Set this to `false` to remove
   * redundant announcement to screen reader users.
   * @default true
   */
  announceLabelToScreenReaders?: boolean;
}

const StyledLabel = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...type.small,
  color: canvas.typeColors.hint,
  width: '100%',
  paddingTop: '12px',
});

const StyledContainer = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'row wrap',
  justifyContent: 'center',
});

const ButtonsContainer = styled('div')({
  '& > * ': {
    margin: `0 ${canvas.spacing.xxxs}`,
  },
});

const defaultCustomLabel: PaginationProps['customLabel'] = (from, to, total) => {
  const item = `item${total > 1 ? 's' : ''}`;

  return `${from.toLocaleString()}\u2013${to.toLocaleString()} of ${total.toLocaleString()} ${item}`;
};

const defaultPageButtonAriaLabel: PaginationProps['pageButtonAriaLabel'] = (page, selected) =>
  `${selected ? 'Selected, ' : ''}Page ${page}`;

const Pagination = (props: PaginationProps) => {
  const {
    showGoTo = false,
    showLabel = false,
    goToLabel = 'Go To',
    paginationContainerAriaLabel = 'Pagination',
    previousPageAriaLabel = 'Previous Page',
    nextPageAriaLabel = 'Next Page',
    pageButtonAriaLabel = defaultPageButtonAriaLabel,
    customLabel = defaultCustomLabel,
    announceLabelToScreenReaders = true,
    total,
    pageSize,
    currentPage,
    onPageChange,
    width,
    ...elemProps
  } = props;

  const numPages = Math.ceil(total / pageSize);
  const isMobile = width ? width < 500 : false;

  const labelFrom = (currentPage - 1) * pageSize + 1;
  const labelTo = currentPage * pageSize >= total ? total : currentPage * pageSize;

  return (
    <>
      <StyledContainer aria-label={paginationContainerAriaLabel} {...elemProps}>
        <ButtonsContainer>
          <IconButton
            disabled={currentPage - 1 <= 0}
            aria-label={previousPageAriaLabel}
            variant={IconButton.Variant.Square}
            size={IconButton.Size.Small}
            icon={chevronLeftSmallIcon}
            onClick={e => onPageChange(currentPage - 1)}
          />
          <Pages
            isMobile={isMobile}
            total={numPages}
            current={currentPage}
            onPageClick={onPageChange}
            pageButtonAriaLabel={pageButtonAriaLabel}
          />
          <IconButton
            disabled={currentPage + 1 > numPages}
            aria-label={nextPageAriaLabel}
            variant={IconButton.Variant.Square}
            size={IconButton.Size.Small}
            icon={chevronRightSmallIcon}
            onClick={e => onPageChange(currentPage + 1)}
          />
        </ButtonsContainer>
        {showGoTo && <GoTo onSubmit={onPageChange} max={numPages} label={goToLabel} />}
        {showLabel && (
          <StyledLabel
            aria-atomic={announceLabelToScreenReaders ? true : undefined}
            aria-live={announceLabelToScreenReaders ? 'polite' : undefined}
          >
            {customLabel(labelFrom, labelTo, total)}
          </StyledLabel>
        )}
      </StyledContainer>
    </>
  );
};

export default Pagination;
