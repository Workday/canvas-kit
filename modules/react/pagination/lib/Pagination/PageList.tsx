import * as React from 'react';

import {PaginationModel} from './types';
import {ListItem, ListItemProps} from './common/List';
import {HStack, HStackProps} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export interface PageListProps extends Omit<HStackProps, 'as' | 'spacing' | 'children'> {
  model: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const PageList = createComponent('div')({
  displayName: 'Pagination.PageList',
  Component({model, children, ...elemProps}: PageListProps) {
    return (
      <HStack
        margin="zero"
        as="ol"
        role="list"
        paddingLeft="zero"
        paddingRight="zero"
        spacing="xxxs"
        {...elemProps}
      >
        {typeof children === 'function' ? children(model) : children}
      </HStack>
    );
  },
});

export type PageListItemProps = ListItemProps;

export const PageListItem = createComponent('li')({
  displayName: 'Pagination.PageListItem',
  Component({children, ...elemProps}: PageListItemProps) {
    return <ListItem {...elemProps}>{children}</ListItem>;
  },
});
