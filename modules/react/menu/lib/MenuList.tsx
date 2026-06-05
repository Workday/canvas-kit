import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {useFocusRedirect, useReturnFocus} from '@workday/canvas-kit-react/popup';
import {createStencil, handleCsProp, withCornerShape} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useMenuModel} from './useMenuModel';

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
      'aria-orientation': model.state.orientation,
    };
  }),
  useReturnFocus,
  useFocusRedirect
);

export const menuListStencil = createStencil({
  base: {
    background: system.legacy.color.surface.popover,
    ...withCornerShape(system.legacy.shape.xxl),
    padding: 0,
    gap: system.legacy.gap.xs,
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
      marginY={system.legacy.gap.none}
      {...handleCsProp(elemProps, menuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
