import * as React from 'react';

import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {usePopupTarget} from '@workday/canvas-kit-react/popup';

import {useMenuModel2} from './useMenuModel';

export interface MenuTargetProps {
  children?: React.ReactNode;
}

export const useMenuTarget = composeHooks(
  createElemPropsHook(useMenuModel2)(model => {
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

export const MenuTarget = createSubcomponent(SecondaryButton)({
  displayName: 'Menu.Target',
  modelHook: useMenuModel2,
  elemPropsHook: useMenuTarget,
})<MenuTargetProps>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
