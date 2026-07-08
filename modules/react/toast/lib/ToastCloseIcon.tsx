import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

export const toastCloseIconStencil = createStencil({
  base: {
    position: 'absolute',
    insetBlockStart: px2rem(2),
    insetInlineEnd: px2rem(2),
  },
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: (elemProps: ToastCloseIconProps, ref, Element) => {
    return (
      <Popup.CloseIcon
        as={Element}
        ref={ref}
        size="extraSmall"
        {...mergeStyles(elemProps, toastCloseIconStencil())}
      />
    );
  },
});
