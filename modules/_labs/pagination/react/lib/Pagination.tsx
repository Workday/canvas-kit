import styled from '@emotion/styled';
import {type} from '@workday/canvas-kit-labs-react-core';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import _ from 'lodash';
import * as React from 'react';

export interface PaginationLabelProps {
  from?: number;
  to?: number;
  total?: number;
  itemLabel: string;
}
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: PaginationLabelProps;
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

const PAGES_TO_SHOW = 5;

const Pages: React.FC<{
  numPages: number;
  currentPage: number;
  clickHandler: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => {
  // Create an array [1,..., numPages]
  const {numPages, currentPage, clickHandler} = props;

  const MAX_PAGES = numPages === PAGES_TO_SHOW + 1 ? PAGES_TO_SHOW + 1 : PAGES_TO_SHOW;
  const pageToStart = Math.max(currentPage - 1, 0);
  const start = Math.floor(pageToStart / MAX_PAGES) * MAX_PAGES + 1;
  const end = Math.min(start + MAX_PAGES, numPages + 1);
  const pages = _.range(start, end);

  return (
    <React.Fragment>
      {pages.map(page => {
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
  const {total, pageSize, currentPage = 1, onPageChange, label, ...elemProps} = props;

  const numPages = Math.ceil(total / pageSize);

  const labelFrom = (label && label.from) || (currentPage - 1) * pageSize + 1;
  const labelTo =
    (label && label.to) || currentPage * pageSize >= total ? total : currentPage * pageSize;
  const labelItems = (label && label.total) || total;
  const item = `${(label && label.itemLabel) || 'item'}${total > 1 ? 's' : ''}`;

  const itemLabel = `${labelFrom.toLocaleString()}\u2013${labelTo.toLocaleString()} of ${labelItems.toLocaleString()} ${item}`;

  return (
    <>
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
      <Label>{itemLabel}</Label>
    </>
  );
};

export default Pagination;
