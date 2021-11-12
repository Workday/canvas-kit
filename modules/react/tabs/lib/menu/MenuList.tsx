import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  useModelContext,
  createHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-labs-react/layout';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

export interface MenuListProps<T = unknown> extends Partial<ExtractProps<typeof Stack, never>> {
  /**
   * The label text of the MenuList.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<T>;
}

export const MenuList = createComponent('div')({
  displayName: 'Menu.List',
  Component: ({model, children, ...elemProps}: MenuListProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuList(localModel, elemProps, ref);

    return (
      <Stack
        as={Element}
        background={commonColors.background}
        borderRadius="m"
        padding="zero"
        marginY="zero"
        marginX="xxs"
        spacing="zero"
        overflowY="auto"
        flexDirection={localModel.state.orientation === 'vertical' ? 'column' : 'row'}
        {...props}
      >
        {typeof children === 'function'
          ? localModel.state.items.map(item => children(item))
          : children}
      </Stack>
    );
  },
});

export const useMenuList = createHook((model: MenuModel) => {
  return {
    role: 'menu',
    'aria-labelledby': model.state.id,
  };
});
