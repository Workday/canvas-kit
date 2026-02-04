import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {useFocusRedirect, useReturnFocus} from '@workday/canvas-kit-react/popup';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.surface.popover, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.xxl, system.shape.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.none, system.space.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.zero),
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
      marginY={cssVar(system.padding.none, system.space.x2)}
      {...handleCsProp(elemProps, menuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
