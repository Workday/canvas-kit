import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {usePopupModel, usePopupPopper} from './hooks';
import {Placement, PopperOptions, Popper} from './Popper';

import {PopperProps} from './Poppper';

export interface PopupPopperProps extends PopperProps {
  /**
   * The placement of the `Popper` contents relative to the `anchorElement`. Accepts `auto`, `top`,
   * `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
   * variations: `-start` or `-end`.
   * @default bottom
   */
  placement?: Placement;
  /**
   * The additional options passed to the Popper's `popper.js` instance.
   */
  popperOptions?: Partial<PopperOptions>;
}

export const PopupPopper = createSubcomponent('div')({
  displayName: 'Popup.Popper',
  modelHook: usePopupModel,
  elemPropsHook: usePopupPopper,
})<PopupPopperProps>(({children, ...elemProps}) => {
  return <Popper {...elemProps}>{children}</Popper>;
});
