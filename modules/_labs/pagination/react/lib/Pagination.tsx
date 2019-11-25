import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas from '@workday/canvas-kit-react-core';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import * as React from 'react';

import GoTo from './GoTo';
import Pages from './Pages';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showGoTo?: boolean;
  showLabel?: boolean;
  customLabel?: (from: number, to: number, items: number, itemLabel: string) => string;
}

const Label = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...type.small,
  color: canvas.typeColors.hint,
});

const Container = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: canvas.spacing.xs,
  '& > * ': {
    margin: `${0} ${canvas.spacing.xxxs}`,
  },
  '&:first-child': {
    marginLeft: 0,
  },
  '&:last-child': {
    marginRight: 0,
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

  return (
    <>
      <Container aria-label={`Pagination Navigation`} {...elemProps}>
        <IconButton
          data-testid="leftPaginationArrow"
          disabled={currentPage - 1 <= 0}
          aria-disabled={currentPage - 1 <= 0}
          aria-label={'Previous Page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronLeftSmallIcon}
          onClick={e => onPageChange(currentPage - 1)}
        />
        <Pages numPages={numPages} currentPage={currentPage} clickHandler={onPageChange} />
        <IconButton
          data-testid="rightPaginationArrow"
          disabled={currentPage + 1 > numPages}
          aria-disabled={currentPage + 1 > numPages}
          aria-label={'Next Page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronRightSmallIcon}
          onClick={e => onPageChange(currentPage + 1)}
        />
        {showGoTo && <GoTo onSubmit={onPageChange} max={numPages} />}
      </Container>
      {showLabel && <Label data-testid="paginationLabel">{itemLabel}</Label>}
    </>
  );
};

export default Pagination;
