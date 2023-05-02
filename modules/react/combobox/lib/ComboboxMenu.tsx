import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxMenuList} from './ComboboxMenuList';
import {ComboboxMenuItem} from './ComboboxMenuItem';
import {ComboboxCard} from './ComboboxCard';

export interface ComboboxMenuProps {
  /**
   * Children of the ComboboxMenu.
   */
  children: React.ReactNode;
}

export const ComboboxMenu = createSubcomponent()({
  modelHook: useComboboxModel,
  subComponents: {
    Popper: Menu.Popper,
    List: ComboboxMenuList,
    Item: ComboboxMenuItem,
    Card: ComboboxCard,
    Divider: Menu.Divider,
  },
})<ComboboxMenuProps>(({children}, _, model) => {
  return <Menu model={model}>{children}</Menu>;
});
