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

export const useMenuTargetBase = createElemPropsHook(useMenuModel)(model => {
  return {
    id: model.state.id,
    'aria-haspopup': 'true',
    'aria-expanded': model.state.visibility === 'visible',
    onKeyDown(event: React.KeyboardEvent) {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp': // this follow the keys for modern browsers https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values#navigation_keys
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

export const MenuTargetContext = createSubcomponent(SecondaryButton)({
  displayName: 'Menu.Target',
  modelHook: useMenuModel,
  elemPropsHook: useMenuTargetContext,
})<MenuTargetProps>(({children, ...elemProps}, Element) => {
  return <Element {...elemProps}>{children}</Element>;
});
