import * as React from 'react';
import {Flex, FlexProps} from './common/Flex';

export interface PaginationNavProps extends Omit<FlexProps, 'as'> {
  'aria-label': string;
}

export const PaginationNav = ({'aria-label': ariaLabel, ...elemProps}: PaginationNavProps) => {
  return (
    <Flex
      as="nav"
      aria-label={ariaLabel}
      display="inline-flex"
      direction="column"
      alignItems="center"
      {...elemProps}
    />
  );
};
