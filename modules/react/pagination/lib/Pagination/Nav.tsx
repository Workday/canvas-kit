import * as React from 'react';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export interface PaginationNavProps extends Omit<FlexProps, 'as'> {
  'aria-label': string;
}

export const PaginationNav = (elemProps: PaginationNavProps) => {
  return (
    <Flex
      as="nav"
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      {...elemProps}
    />
  );
};
