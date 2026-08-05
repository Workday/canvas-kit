import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {useFocusRedirect, useReturnFocus} from '@workday/canvas-kit-react/popup';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
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
    borderRadius: system.legacy.shape.xxl,
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
})<MenuListProps>(({children, maxHeight = '60vh', ...elemProps}, Element, model) => {
  // #region agent log
  fetch('http://127.0.0.1:7685/ingest/d4b27670-faf7-4b29-bdd1-5bd77f857154', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'X-Debug-Session-Id': 'dea6ae'},
    body: JSON.stringify({
      sessionId: 'dea6ae',
      location: 'MenuList.tsx:render',
      message: 'Menu list maxHeight',
      data: {maxHeight},
      timestamp: Date.now(),
      hypothesisId: 'B4',
    }),
  }).catch(() => undefined);
  // #endregion
  return (
    <ListBox
      as={Element}
      model={model}
      marginY={system.legacy.gap.none}
      maxHeight={maxHeight}
      {...handleCsProp(elemProps, menuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
