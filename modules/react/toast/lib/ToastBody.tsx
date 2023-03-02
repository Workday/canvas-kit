import React from 'react';

import {createComponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Popup} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

export const ToastBody = createComponent('div')({
  displayName: 'Toast.Body',
  Component: ({children, ...elemProps}: ToastBodyProps, ref, Element) => {
    return (
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        justifyContent="center"
        paddingY="s"
        ref={ref}
        as={Element}
        flexGrow={1}
        {...elemProps}
      >
        {children}
      </Flex>
    );
  },
});
