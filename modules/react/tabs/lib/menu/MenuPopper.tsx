import * as React from 'react';

import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';

import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

export interface MenuPopperProps<T = unknown> extends ExtractProps<typeof Popper> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<T>;
}

export const MenuPopper = createComponent('div')({
  displayName: 'Menu.Popper',
  Component: ({children, model, ...elemProps}: MenuPopperProps, ref) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuPopper(localModel, elemProps, ref);
    return (
      <Popper placement="bottom-start" {...props}>
        {children}
      </Popper>
    );
  },
});

export const useMenuPopper = usePopupPopper;
