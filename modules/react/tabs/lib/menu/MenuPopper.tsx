import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {useMenuModel2} from './useMenuModel';

export interface MenuPopperProps extends ExtractProps<typeof Popper> {}

export const useMenuPopper = usePopupPopper;

export const MenuPopper = createSubcomponent('div')({
  displayName: 'Menu.Popper',
  modelHook: useMenuModel2,
  elemPropsHook: useMenuPopper,
})<MenuPopperProps>(({children, ...elemProps}) => {
  return (
    <Popper placement="bottom-start" {...elemProps}>
      {children}
    </Popper>
  );
});

// TODO: Before, all popup stuff was using the Popup context, now is using specialized context from
// the model. This means every use of a subcomponent forwarding to a Popup one will not get the
// right context
