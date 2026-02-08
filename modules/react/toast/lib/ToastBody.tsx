import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

export const toastBodyStencil = createStencil({
  base: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingTop: cssVar(system.padding.md, system.space.x4),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    paddingBottom: cssVar(system.padding.md, system.space.x4),
    flexGrow: 1,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),
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
