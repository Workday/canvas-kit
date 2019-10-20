import * as React from 'react';
import styled from 'react-emotion';
import {CSSObject} from 'create-emotion';

import {IconButton} from '@workday/canvas-kit-react-button';
import {chevronLeftSmallIcon, chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (e: React.MouseEvent<HTMLButtonElement>, page: number) => void;
}

const centeredStyle: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Container = styled('nav')(centeredStyle, {
  '& > * ': {
    margin: canvas.spacing.xxxs,
  },
  '&:first-child': {
    marginLeft: 0,
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const ActivePage = styled('div')(centeredStyle, {
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
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>, page: number) => void;
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
            onClick={e => clickHandler(e, page)}
          >
            {page}
          </IconButton>
        );
      })}
    </React.Fragment>
  );
};

const Pagination: React.FC<PaginationProps> = props => {
  const {items, pageSize, currentPage = 1, onPageChange, ...elemProps} = props;

  const numPages = Math.ceil(items / pageSize);

  return (
    <Container aria-label={`Pagination Navigation`} {...elemProps}>
      <IconButton
        disabled={currentPage - 1 <= 0}
        aria-disabled={currentPage - 1 <= 0}
        aria-label={'Goto previous page'}
        variant={IconButton.Variant.Square}
        size={IconButton.Size.Small}
        icon={chevronLeftSmallIcon}
        onClick={e => onPageChange(e, currentPage - 1)}
      />
      <Pages numPages={numPages} currentPage={currentPage} clickHandler={onPageChange} />
      <IconButton
        disabled={currentPage + 1 > numPages}
        aria-disabled={currentPage + 1 > numPages}
        aria-label={'Goto next page'}
        variant={IconButton.Variant.Square}
        size={IconButton.Size.Small}
        icon={chevronRightSmallIcon}
        onClick={e => onPageChange(e, currentPage + 1)}
      />
    </Container>
  );
};

export default Pagination;
