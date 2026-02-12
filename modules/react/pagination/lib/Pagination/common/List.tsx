import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

export interface ListProps extends FlexProps {}

export const paginationListStencil = createStencil({
  base: {
    display: 'flex',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
});

export const List = createComponent('ul')({
  displayName: 'List',
  Component: ({children, ...elemProps}: ListProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, paginationListStencil())}>
        {children}
      </Element>
    );
  },
});

export interface ListItemProps extends FlexProps {}

export const paginationListItemStencil = createStencil({
  base: {
    display: 'flex',
  },
});

export const ListItem = createComponent('li')({
  displayName: 'ListItem',
  Component: ({children, ...elemProps}: ListItemProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, paginationListItemStencil())}>
        {children}
      </Element>
    );
  },
});
