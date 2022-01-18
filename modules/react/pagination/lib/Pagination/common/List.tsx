import * as React from 'react';

import {Flex, FlexProps} from './Flex';
import {StyledType, styled} from '../../../../common';

export interface ListProps extends FlexProps, React.OlHTMLAttributes<HTMLElement> {
  as: 'ol' | 'ul';
}

const StyledList = styled(Flex)<StyledType & FlexProps>({
  listStyle: 'none',
});

export const List = React.forwardRef<HTMLOListElement | HTMLUListElement, ListProps>(
  ({as, children, ...elemProps}, ref) => {
    return (
      <StyledList as={as} m="zero" p="zero" ref={ref} {...elemProps}>
        {children}
      </StyledList>
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
