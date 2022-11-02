import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

export type BreadcrumbsListProps = React.HTMLAttributes<HTMLUListElement>;

export const BreadcrumbsList = createComponent('ul')({
  displayName: 'BreadcrumbsList',
  Component: ({children, ...elemProps}: BreadcrumbsListProps, ref) => {
    return (
      <Flex
        padding="zero"
        margin="zero"
        display="inline-flex"
        alignItems="center"
        minHeight={40}
        listStyle="none"
        style={{boxSizing: 'border-box'}}
        as="ul"
        role="list"
        ref={ref}
        {...elemProps}
      >
        {children}
      </Flex>
    );
  },
});
