import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxTarget} from './ComboboxTarget';
import {ComboboxMenuList} from './ComboboxMenuList';
import {ComboboxMenuItem} from './ComboboxMenuItem';
import {ComboboxCard} from './ComboboxCard';

export interface ComboboxProps {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Target>`, a `<Combobox.Content>`
   */
  children: React.ReactNode;
}

export const Combobox = createContainer()({
  displayName: 'Combobox',
  modelHook: useComboboxModel,
  subComponents: {
    Target: ComboboxTarget,
    Menu: {
      ...Menu,
      List: ComboboxMenuList,
      Item: ComboboxMenuItem,
      Card: ComboboxCard,
    },
  },
})<ComboboxProps>(({children}, _, model) => {
  return <Menu model={model}>{children}</Menu>;
});
