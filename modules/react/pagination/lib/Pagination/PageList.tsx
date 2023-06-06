import * as React from 'react';

import {PaginationModel} from './types';
import {ListItem, ListItemProps} from './common/List';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {PaginationContext} from './usePaginationModel';

export interface PageListProps extends Omit<FlexProps, 'as' | 'children'> {
  model?: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const PageList = createComponent('ol')({
  displayName: 'Pagination.PageList',
  Component({children, ...elemProps}: PageListProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    return (
      <Flex
        ref={ref}
        as={Element}
        margin="zero"
        role="list"
        paddingLeft="zero"
        paddingRight="zero"
        gap="xxxs"
        {...elemProps}
      >
        {typeof children === 'function' ? children(model) : children}
      </Flex>
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
