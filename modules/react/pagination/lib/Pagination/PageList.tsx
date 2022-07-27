import * as React from 'react';

import {PaginationModel} from './types';
import {ListItem, ListItemProps} from './common/List';
import {HStack, HStackProps} from '@workday/canvas-kit-react/layout';

export interface PageListProps extends Omit<HStackProps, 'as' | 'spacing'> {
  model: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const PageList = ({model, children, ...elemProps}: PageListProps) => {
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
};

export type PageListItemProps = ListItemProps;

export const PageListItem = ({children, ...elemProps}: PageListItemProps) => {
  return <ListItem {...elemProps}>{children}</ListItem>;
};
