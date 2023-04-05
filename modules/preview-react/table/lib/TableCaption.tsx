import React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {FlexProps, Flex} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';

export const TableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Flex
        as={Element}
        ref={ref}
        borderBottom={`1px solid ${colors.soap500}`}
        paddingY="xxs"
        paddingX="s"
        textAlign="left"
        {...elemProps}
      >
        {children}
      </Flex>
    );
  },
});
