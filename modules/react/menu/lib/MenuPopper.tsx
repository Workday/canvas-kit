import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';

export interface MenuPopperProps extends ExtractProps<typeof Popper> {}

export const useMenuPopper = usePopupPopper;

// We moved this out of the component function to prevent rebuilding this object on re-renders.
const popperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: () => [0, 4],
      },
    },
  ],
};

export const MenuPopper = createSubcomponent('div')({
  displayName: 'Menu.Popper',
  modelHook: useMenuModel,
  elemPropsHook: useMenuPopper,
})<MenuPopperProps>(({children, ...elemProps}) => {
  return (
    <Popper placement="bottom-start" popperOptions={popperOptions} {...elemProps}>
      {children}
    </Popper>
  );
});
