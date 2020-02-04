import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import React from 'react';

import GoTo from './GoTo';
import Pages from './Pages';
import useIsMobile from './useIsMobile';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showGoTo?: boolean;
  showLabel?: boolean;
  customLabel?: (from: number, to: number, items: number, itemLabel: string) => string;
  goToLabel?: string;
  paginationContainerAriaLabel?: string;
  previousPageAriaLabel?: string;
  nextPageAriaLabel?: string;
  navigationEllipseAriaLabel?: string;
  pageButtonAriaLabel?: (page: number, selected: boolean) => string;
}

const Label = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...type.small,
  color: canvas.typeColors.hint,
  width: '100%',
  paddingTop: '12px',
});

const Container = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'row wrap',
  justifyContent: 'center',
});

const ButtonsContainer = styled('div')({
  '& > * ': {
    margin: `${0} ${canvas.spacing.xxxs}`,
  },
});

const Pagination: React.FC<PaginationProps> = props => {
  const {
    total,
    pageSize,
    currentPage,
    onPageChange,
    customLabel,
    showLabel,
    showGoTo,
    goToLabel,
    paginationContainerAriaLabel,
    previousPageAriaLabel,
    nextPageAriaLabel,
    navigationEllipseAriaLabel,
    pageButtonAriaLabel,
    ...elemProps
  } = props;

  const numPages = Math.ceil(total / pageSize);

  const labelFrom = (currentPage - 1) * pageSize + 1;
  const labelTo = currentPage * pageSize >= total ? total : currentPage * pageSize;
  const labelItems = total;
  const item = `item${total > 1 ? 's' : ''}`;

  const itemLabel = customLabel
    ? customLabel(labelFrom, labelTo, labelItems, 'item')
    : `${labelFrom.toLocaleString()}\u2013${labelTo.toLocaleString()} of ${labelItems.toLocaleString()} ${item}`;

  const mobile = useIsMobile(500);

  return (
    <>
      <Container aria-label={paginationContainerAriaLabel || 'Pagination'} {...elemProps}>
        <ButtonsContainer>
          <IconButton
            disabled={currentPage - 1 <= 0}
            aria-label={previousPageAriaLabel || 'Previous Page'}
            variant={IconButton.Variant.Square}
            size={IconButton.Size.Small}
            icon={chevronLeftSmallIcon}
            onClick={e => onPageChange(currentPage - 1)}
          />
          <Pages
            mobile={mobile}
            numPages={numPages}
            currentPage={currentPage}
            onPageClick={onPageChange}
            navigationEllipseAriaLabel={navigationEllipseAriaLabel || 'Navigation Ellipse'}
            pageButtonAriaLabel={
              pageButtonAriaLabel && typeof pageButtonAriaLabel === 'function'
                ? pageButtonAriaLabel
                : (page: number, selected: boolean) => `${selected ? 'Selected, ' : ''}Page ${page}`
            }
          />
          <IconButton
            disabled={currentPage + 1 > numPages}
            aria-disabled={currentPage + 1 > numPages}
            aria-label={nextPageAriaLabel || 'Next Page'}
            variant={IconButton.Variant.Square}
            size={IconButton.Size.Small}
            icon={chevronRightSmallIcon}
            onClick={e => onPageChange(currentPage + 1)}
          />
        </ButtonsContainer>
        {showGoTo && <GoTo onSubmit={onPageChange} max={numPages} goToLabel={goToLabel} />}
        {showLabel && <Label>{itemLabel}</Label>}
      </Container>
    </>
  );
};

export default Pagination;
