/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';

import {Flex, FlexProps} from './Flex';

export interface ListProps extends FlexProps, React.OlHTMLAttributes<HTMLElement> {
  as: 'ol' | 'ul';
}

const listStyles = css({
  listStyle: 'none',
});

export const List = React.forwardRef<HTMLOListElement | HTMLUListElement, ListProps>(
  ({as, children, ...elemProps}, ref) => {
    return (
      <Flex as={as} m="zero" p="zero" css={listStyles} ref={ref} {...elemProps}>
        {children}
      </Flex>
    );
  }
);

List.displayName = 'List';

export type ListItemProps = Omit<FlexProps, 'as'>;

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({children, ...elemProps}, ref) => {
    return (
      <Flex as="li" ref={ref} {...elemProps}>
        {children}
      </Flex>
    );
  }
);

ListItem.displayName = 'ListItem';
