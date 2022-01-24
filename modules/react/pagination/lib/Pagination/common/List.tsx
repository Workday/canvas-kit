import * as React from 'react';

import {Flex, FlexProps} from '@workday/canvas-kit-labs-react/layout';
import {StyledType, styled, createComponent} from '@workday/canvas-kit-react/common';

export interface ListProps extends FlexProps {}

const StyledList = styled(Flex.as('ul'))<StyledType & FlexProps>({
  listStyle: 'none',
});

export const List = createComponent('ul')({
  displayName: 'List',
  Component: ({children, ...elemProps}: ListProps, ref, Element) => {
    return (
      <StyledList
        as={Element}
        marginY="zero"
        marginX="zero"
        padding="zero"
        ref={ref}
        {...elemProps}
      >
        {children}
      </StyledList>
    );
  },
});

export interface ListItemProps extends FlexProps {}

export const ListItem = createComponent('li')({
  displayName: 'ListItem',
  Component: ({children, ...elemProps}: ListItemProps, ref, Element) => {
    return (
      <Flex as={Element} ref={ref} {...elemProps}>
        {children}
      </Flex>
    );
  },
});
