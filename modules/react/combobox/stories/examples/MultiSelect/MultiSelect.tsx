import React from 'react';

import {createContainer, createSubcomponent} from '@workday/canvas-kit-react/common';
import {handleCsProp} from '@workday/canvas-kit-styling';
import {Combobox} from '@workday/canvas-kit-react/combobox';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectInput} from './MultiSelectInput';
import {MultiSelectItem} from './MultiSelectItem';

export interface MultiSelectProps {}

export const MultiSelect = createContainer()({
  modelHook: useMultiSelectModel,
  subComponents: {
    Input: MultiSelectInput,
    Popper: Combobox.Menu.Popper,
    Card: Combobox.Menu.Card,
    List: Combobox.Menu.List,
    Item: MultiSelectItem,
  },
})<MultiSelectProps>(({children, ...elemProps}, _, model) => {
  return (
    <Combobox.Menu model={model} {...elemProps}>
      {children}
    </Combobox.Menu>
  );
});
