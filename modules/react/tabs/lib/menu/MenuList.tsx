import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  createElemPropsHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {ListBox} from '@workday/canvas-kit-react/list';
import {Stack} from '@workday/canvas-kit-react/layout';

import {useMenuModel2} from './useMenuModel';

export interface MenuListProps extends Partial<ExtractProps<typeof Stack, never>> {
  /**
   * The label text of the MenuList.
   */
  children: React.ReactNode;
}

export const useMenuList = createElemPropsHook(useMenuModel2)(model => {
  return {
    role: 'menu',
    'aria-labelledby': model.state.id,
  };
});

export const MenuList = createSubcomponent('div')({
  displayName: 'Menu.List',
  modelHook: useMenuModel2,
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
      spacing="zero"
      overflowY="auto"
      flexDirection={model.state.orientation === 'vertical' ? 'column' : 'row'}
      {...elemProps}
    >
      {children}
    </ListBox>
  );
});
