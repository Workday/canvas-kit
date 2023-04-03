import React from 'react';
import {FlexProps, Flex} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Flex as={Element} ref={ref} paddingY="xxs" paddingX="s" textAlign="left" {...elemProps}>
        {children}
      </Flex>
    );
  },
});
