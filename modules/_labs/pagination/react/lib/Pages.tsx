import styled from '@emotion/styled-base';
import {IconButton} from '@workday/canvas-kit-react-button';
import canvas, {borderRadius} from '@workday/canvas-kit-react-core';
import _ from 'lodash';
import React from 'react';

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

const NoPointerEvents = styled('div')({
  pointerEvents: 'none',
});

const Ellipse = () => (
  <NoPointerEvents tabIndex={-1}>
    <IconButton
      key={'ellipse'}
      aria-label={`Navigation Ellipse`}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
    >
      ...
    </IconButton>
  </NoPointerEvents>
);

const Pages: React.FC<{
  numPages: number;
  currentPage: number;
  clickHandler: (page: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}> = props => {
  const {numPages, currentPage, clickHandler} = props;
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);
  const mobile = width < 500;

  let pagesToDisplay = 5;
  let start = 1;

  if (mobile) {
    start = currentPage;
    if (currentPage >= numPages - 1) {
      start = Math.max(numPages - 2, 1);
      pagesToDisplay = 3;
    } else {
      pagesToDisplay = 1;
    }
  } else {
    const midwayAndMorePages = currentPage > 2 && numPages > pagesToDisplay;
    if (midwayAndMorePages) {
      const oneOfLastThreePages = currentPage >= numPages - 3;
      if (oneOfLastThreePages) {
        start = numPages - 4;
      } else {
        start = currentPage - 2;
      }
    }
  }

  const end = Math.min(start + pagesToDisplay, numPages + 1);
  const pages = _.range(start, end);

  const PaginationButton: React.FC<{
    page: number;
  }> = props => (
    <IconButton
      data-testid={`paginationButton${props.page}`}
      key={props.page}
      aria-label={`Go to page ${props.page}`}
      variant={IconButton.Variant.Square}
      size={IconButton.Size.Small}
      onClick={e => clickHandler(props.page, e)}
    >
      {props.page}
    </IconButton>
  );

  return (
    <>
      {pages.map(page => {
        const active = page === currentPage;
        const more = page === end - 1 && page < numPages;
        const lastPage = page === start && end === numPages + 1 && numPages > pagesToDisplay;

        return (
          <>
            {lastPage && !mobile && (
              <>
                <PaginationButton page={1} />
                <Ellipse />
              </>
            )}

            {active ? (
              <ActivePage
                data-testid="paginationIconButtonActive"
                key={page}
                aria-current={true}
                aria-label={`Current page, page ${page}`}
              >
                {page}
              </ActivePage>
            ) : (
              <PaginationButton page={page} />
            )}

            {more && (
              <>
                <Ellipse />
                <PaginationButton page={numPages} />
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default Pages;
