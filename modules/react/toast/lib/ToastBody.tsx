import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

export const toastBodyStencil = createStencil({
  base: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBlock: system.legacy.padding.md,
    flexGrow: 1,
    gap: system.legacy.gap.xs,
  },
});

export const ToastBody = createComponent('div')({
  displayName: 'Toast.Body',
  Component: ({children, ...elemProps}: ToastBodyProps, ref, Element) => {
    return (
      <Flex ref={ref} as={Element} {...mergeStyles(elemProps, toastBodyStencil())}>
        {children}
      </Flex>
    );
  },
});
