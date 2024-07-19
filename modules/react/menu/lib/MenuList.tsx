import * as React from 'react';

import {
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
  composeHooks,
} from '@workday/canvas-kit-react/common';
import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';
import {useReturnFocus, useFocusRedirect} from '@workday/canvas-kit-react/popup';

import {useMenuModel} from './useMenuModel';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface MenuListProps<T = any>
  extends Omit<ExtractProps<typeof ListBox, never>, 'children'> {
  /**
   * The label text of the MenuList.
   */
  children: ListProps<T>['children'];
}

export const useMenuList = composeHooks(
  createElemPropsHook(useMenuModel)(model => {
    return {
      role: 'menu',
      'aria-labelledby': model.state.id,
    };
  }),
  useReturnFocus,
  useFocusRedirect
);

export const menuListStencil = createStencil({
  base: {
    background: base.frenchVanilla100,
    borderRadius: system.shape.zero,
    padding: system.space.zero,
    gap: system.space.zero,
  },
  modifiers: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
});

export const MenuList = createSubcomponent('div')({
  displayName: 'Menu.List',
  modelHook: useMenuModel,
  elemPropsHook: useMenuList,
})<MenuListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <ListBox
      as={Element}
      model={model}
      marginY={cssVar(system.space.x2)}
      overflowY="auto"
      {...mergeStyles(elemProps, menuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
