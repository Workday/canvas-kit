import * as React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {usePopupTarget} from '@workday/canvas-kit-react/popup';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

export interface MenuTargetProps<T> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<T>;
  children?: React.ReactNode;
}

export const MenuTarget = createComponent(SecondaryButton)({
  displayName: 'Menu.Target',
  Component: ({children, model, ...elemProps}: MenuTargetProps<unknown>, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = usePopupTarget(localModel, elemProps, ref);

    return <Element {...props}>{children}</Element>;
  },
});
