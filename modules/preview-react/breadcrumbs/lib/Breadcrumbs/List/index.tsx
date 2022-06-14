import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export const BreadcrumbsList = createComponent('ul')({
  displayName: 'BreadcrumbsList',
  Component: (elemProps: FlexProps, ref, Element) => {
    return (
      <Flex
        as={Element}
        padding="zero"
        margin="zero"
        display="inline-flex"
        alignItems="center"
        minHeight={40}
        listStyle="none"
        style={{boxSizing: 'border-box'}}
        role="list"
        ref={ref}
        {...elemProps}
      />
    );
  },
});
