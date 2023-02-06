import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {ListBox} from '@workday/canvas-kit-react/collection';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useMenuModel} from './useMenuModel';

export interface MenuListProps<T = any> extends Omit<ExtractProps<typeof Flex, never>, 'children'> {
  /**
   * The label text of the MenuList.
   */
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export const useMenuList = createElemPropsHook(useMenuModel)(model => {
  return {
    role: 'menu',
    'aria-labelledby': model.state.id,
  };
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
