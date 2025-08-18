import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastIconProps extends Omit<SystemIconProps, 'colorHover'> {}

export const toastIconStencil = createStencil({
  base: {
    alignSelf: 'start',
    margin: `${system.space.x4} ${system.space.x3}`,
  },
});

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: (elemProps: ToastIconProps, ref, Element) => {
    return <SystemIcon ref={ref} as={Element} {...handleCsProp(elemProps, toastIconStencil())} />;
  },
});
