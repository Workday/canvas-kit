import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastIconProps extends Omit<SystemIconProps, 'colorHover'> {}

export const toastIconStencil = createStencil({
  base: {
    alignSelf: 'start',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: `${cssVar(system.padding.md, system.space.x4)} ${cssVar(system.padding.sm, system.space.x3)}`,
  },
});

export const ToastIcon = createComponent('div')({
  displayName: 'Toast.Icon',
  Component: (elemProps: ToastIconProps, ref, Element) => {
    return <SystemIcon ref={ref} as={Element} {...handleCsProp(elemProps, toastIconStencil())} />;
  },
});
