import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxInput} from './ComboboxInput';
import {ComboboxMenuList} from './ComboboxMenuList';
import {ComboboxMenuItem} from './ComboboxMenuItem';
import {ComboboxCard} from './ComboboxCard';

export interface ComboboxProps {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Input>`, a `<Combobox.Content>`
   */
  children: React.ReactNode;
}

export const Combobox = createContainer()({
  displayName: 'Combobox',
  modelHook: useComboboxModel,
  subComponents: {
    Input: ComboboxInput,
    Menu: {
      ...Menu,
      List: ComboboxMenuList,
      Item: ComboboxMenuItem,
      Card: ComboboxCard,
    },
  },
})<ComboboxProps>(({children}, _, model) => {
  console.log('model', model);
  return <Menu model={model}>{children}</Menu>;
});
