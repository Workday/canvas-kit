import * as React from 'react';

import {
  composeHooks,
  createComponent,
  createHook,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

import {usePopupTarget} from '@workday/canvas-kit-react/popup';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

export interface MenuTargetProps<T = unknown> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<T>;
  children?: React.ReactNode;
}

export const MenuTarget = createComponent(SecondaryButton)({
  displayName: 'Menu.Target',
  Component: ({children, model, ...elemProps}: MenuTargetProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuTarget(localModel, elemProps, ref);

    return <Element {...props}>{children}</Element>;
  },
});

export const useMenuTarget = composeHooks(
  createHook((model: MenuModel) => {
    return {
      id: model.state.id,
      onKeyDown(event: React.KeyboardEvent) {
        // eslint-disable-next-line default-case
        switch (event.key) {
          case 'Down':
          case 'ArrowDown': // IE11
          case 'Up':
          case 'ArrowUp': // IE11
            model.events.show({event});
        }
      },
    };
  }),
  usePopupTarget
);
