import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

export interface PaginationNavProps extends Omit<FlexProps, 'as'> {
  'aria-label': string;
}

export const paginationNavStencil = createStencil({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export const PaginationNav = createComponent('nav')({
  displayName: 'Pagination.Nav',
  Component: ({children, ...elemProps}: PaginationNavProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, paginationNavStencil())}>
        {children}
      </Element>
    );
  },
});
