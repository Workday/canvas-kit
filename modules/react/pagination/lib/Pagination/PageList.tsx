import * as React from 'react';

import {PaginationModel} from './types';
import {ListItem, ListItemProps} from './common/List';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export interface PageListProps extends Omit<FlexProps, 'as' | 'children'> {
  model: PaginationModel;
  children?: (model: PaginationModel) => React.ReactNode[] | React.ReactNode;
}

export const PageList = ({model, children, ...elemProps}: PageListProps) => {
  return (
    <Flex
      margin="zero"
      as="ol"
      role="list"
      paddingLeft="zero"
      paddingRight="zero"
      gap="xxxs"
      {...elemProps}
    >
      {typeof children === 'function' ? children(model) : children}
    </Flex>
  );
};

export type PageListItemProps = ListItemProps;

export const PageListItem = ({children, ...elemProps}: PageListItemProps) => {
  return <ListItem {...elemProps}>{children}</ListItem>;
};
