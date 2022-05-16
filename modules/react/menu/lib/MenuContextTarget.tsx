import * as React from 'react';

import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {usePopupTarget, usePopupTargetContext} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';

export interface MenuTargetProps {
  children?: React.ReactNode;
}

const useMenuTargetBase = createElemPropsHook(useMenuModel)(model => {
  return {
    id: model.state.id,
    'aria-haspopup': 'true',
    'aria-expanded': model.state.visibility === 'visible',
    onKeyDown(event: React.KeyboardEvent) {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'Down':
        case 'ArrowDown': // IE11
        case 'Up':
        case 'ArrowUp': // IE11
          model.events.show(event);
      }
    },
  };
});

export const useMenuTarget = composeHooks(useMenuTargetBase, usePopupTarget);
export const useMenuTargetContext = composeHooks(useMenuTargetBase, usePopupTargetContext);

export const MenuTarget = createSubcomponent(SecondaryButton)({
  displayName: 'Menu.Target',
  modelHook: useMenuModel,
  elemPropsHook: useMenuTarget,
})<MenuTargetProps>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
