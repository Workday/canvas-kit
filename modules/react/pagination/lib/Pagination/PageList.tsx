import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {CSProps, createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {ListItem, ListItemProps} from './common/List';
import {PaginationModel} from './types';
import {PaginationContext} from './usePaginationModel';

export interface PageListProps extends Omit<FlexProps, 'as' | 'children'> {
  model?: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const paginationPageListStencil = createStencil({
  base: {
    display: 'flex',
    margin: 0,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),
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

export interface PageListItemProps extends ListItemProps, CSProps {}

export const PageListItem = createComponent('li')({
  displayName: 'Pagination.PageListItem',
  Component({children, ...elemProps}: PageListItemProps, ref, Element) {
    return (
      <ListItem ref={ref} as={Element} {...handleCsProp(elemProps)}>
        {children}
      </ListItem>
    );
  },
});
