import * as React from 'react';

import {PaginationModel} from './types';
import {ListItem, ListItemProps} from './common/List';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {PaginationContext} from './usePaginationModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface PageListProps extends Omit<FlexProps, 'as' | 'children'> {
  model?: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const paginationPageListStencil = createStencil({
  base: {
    display: 'flex',
    margin: system.space.zero,
    paddingInlineStart: system.space.zero,
    paddingInlineEnd: system.space.zero,
    gap: system.space.x1,
  },
});

export const PageList = createComponent('ol')({
  displayName: 'Pagination.PageList',
  Component({children, ...elemProps}: PageListProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    return (
      <Element ref={ref} role="list" {...mergeStyles(elemProps, paginationPageListStencil())}>
        {typeof children === 'function' ? children(model) : children}
      </Element>
    );
  },
});

export interface PageListItemProps extends ListItemProps {}

export const PageListItem = createComponent('li')({
  displayName: 'Pagination.PageListItem',
  Component({children, ...elemProps}: PageListItemProps, ref, Element) {
    return (
      <ListItem ref={ref} as={Element} {...elemProps}>
        {children}
      </ListItem>
    );
  },
});
