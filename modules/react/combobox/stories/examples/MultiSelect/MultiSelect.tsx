import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {handleCsProp} from '@workday/canvas-kit-styling';
import {Combobox} from '@workday/canvas-kit-react/combobox';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectInput} from './MultiSelectInput';

export interface MultiSelectProps {}

export const MultiSelect = createContainer('div')({
  modelHook: useMultiSelectModel,
  subComponents: {
    Input: MultiSelectInput,
    Popper: Combobox.Menu.Popper,
    Card: Combobox.Menu.Card,
    List: Combobox.Menu.List,
    Item: Combobox.Menu.Item,
  },
})<MultiSelectProps>(({...elemProps}, Element, model) => {
  console.log('model', model);
  return <Element {...handleCsProp(elemProps)} />;
});
