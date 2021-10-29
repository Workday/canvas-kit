import * as React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  useModelContext,
  createHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';

import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';
import {Box} from '@workday/canvas-kit-labs-react/common';

export interface MenuListProps extends ExtractProps<typeof Box, never> {
  /**
   * The label text of the MenuList.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<unknown>;
}

const useMenuList = createHook(() => {
  return {role: 'menu'};
});

export const MenuList = createComponent('ul')({
  displayName: 'Menu.List',
  Component: ({model, children, ...elemProps}: MenuListProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuList(localModel, elemProps, ref);

    return (
      <Box
        as={Element}
        background={commonColors.background}
        borderRadius="m"
        padding="zero"
        marginY="zero"
        marginX="xxs"
        {...props}
      >
        {typeof children === 'function'
          ? localModel.state.items.map(item => children(item))
          : children}
      </Box>
    );
  },
});
