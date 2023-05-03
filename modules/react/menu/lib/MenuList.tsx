import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
  composeHooks,
} from '@workday/canvas-kit-react/common';
import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';
import {useReturnFocus, useFocusRedirect} from '@workday/canvas-kit-react/popup';

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
    React.useLayoutEffect(() => {
      if (!model.state.cursorId && model.state.items.length) {
        // Select the first item
        model.events.goTo({id: model.state.items[0].id});
      }
    }, [model.state, model.events]);
    return {
      role: 'menu',
      'aria-labelledby': model.state.id,
    };
  }),
  useReturnFocus,
  useFocusRedirect
);

export const MenuList = createSubcomponent('div')({
  displayName: 'Menu.List',
  modelHook: useMenuModel,
  elemPropsHook: useMenuList,
})<MenuListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <ListBox
      as={Element}
      model={model}
      background={commonColors.background}
      borderRadius="zero"
      padding="zero"
      marginY="xxs"
      gap="zero"
      overflowY="auto"
      flexDirection={model.state.orientation === 'vertical' ? 'column' : 'row'}
      {...elemProps}
    >
      {children}
    </ListBox>
  );
});
