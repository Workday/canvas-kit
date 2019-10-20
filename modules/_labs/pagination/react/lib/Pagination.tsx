import * as React from 'react';
import styled from 'react-emotion';

import {IconButton} from '@workday/canvas-kit-react-button';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import {type} from '@workday/canvas-kit-labs-react-core';

export interface PaginationLabelProps {
  from: number;
  to: number;
  items: number;
  itemLabel: string;
}
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: (parts: PaginationLabelProps) => string;
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

const ActivePage = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 13,
  fontWeight: 700,
  height: 32,
  width: 32,
  backgroundColor: canvas.colors.blueberry400,
  color: canvas.colors.frenchVanilla100,
  borderRadius: borderRadius.m,
});

const Pages: React.FC<{
  numPages: number;
  currentPage: number;
  clickHandler: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => {
  // Create an array [1,..., numPages]
  const {numPages, currentPage, clickHandler} = props;
  const pages = Array.from(Array(numPages).keys());

  return (
    <React.Fragment>
      {pages.map(p => {
        const page = p + 1;
        const active = page === currentPage;

        return active ? (
          <ActivePage key={page} aria-current={true} aria-label={`Current page, page ${page}`}>
            {page}
          </ActivePage>
        ) : (
          <IconButton
            key={page}
            aria-label={`Goto page ${page}`}
            variant={IconButton.Variant.Square}
            size={IconButton.Size.Small}
            onClick={e => clickHandler(page, e)}
          >
            {page}
          </IconButton>
        );
      })}
    </React.Fragment>
  );
};

const Pagination: React.FC<PaginationProps> = props => {
  const {items, pageSize, currentPage = 1, onPageChange, label, ...elemProps} = props;

  const numPages = Math.ceil(items / pageSize);

  const labelParts = {
    from: (currentPage - 1) * pageSize + 1,
    to: currentPage * pageSize >= items ? items : currentPage * pageSize,
    items: items,
    itemLabel: 'items',
  };

  const defaultLabelFormatter: (p: PaginationLabelProps) => string = ({
    from,
    to,
    items,
    itemLabel,
  }) =>
    `${from.toLocaleString()}\u2013${to.toLocaleString()} of ${items.toLocaleString()} ${itemLabel}`;

  return (
    <React.Fragment>
      <Container aria-label={`Pagination Navigation`} {...elemProps}>
        <IconButton
          disabled={currentPage - 1 <= 0}
          aria-disabled={currentPage - 1 <= 0}
          aria-label={'Goto previous page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronLeftSmallIcon}
          onClick={e => onPageChange(currentPage - 1, e)}
        />
        <Pages numPages={numPages} currentPage={currentPage} clickHandler={onPageChange} />
        <IconButton
          disabled={currentPage + 1 > numPages}
          aria-disabled={currentPage + 1 > numPages}
          aria-label={'Goto next page'}
          variant={IconButton.Variant.Square}
          size={IconButton.Size.Small}
          icon={chevronRightSmallIcon}
          onClick={e => onPageChange(currentPage + 1, e)}
        />
      </Container>
      <Label>{defaultLabelFormatter(labelParts)}</Label>
    </React.Fragment>
  );
};

export default Pagination;
