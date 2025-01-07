import React from 'react';

import {createContainer} from '@workday/canvas-kit-react/common';
import {Combobox} from '@workday/canvas-kit-react/combobox';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectInput, MultiSelectSearchInput} from './MultiSelectInput';
import {MultiSelectCard} from './MultiSelectCard';

export interface MultiSelectProps extends React.PropsWithChildren {}

export const MultiSelect = createContainer()({
  modelHook: useMultiSelectModel,
  subComponents: {
    Input: MultiSelectInput,
    SearchInput: MultiSelectSearchInput,
    Popper: Combobox.Menu.Popper,
    Card: MultiSelectCard,
    List: Combobox.Menu.List,
    Item: Combobox.Menu.Item,
  },
})<MultiSelectProps>(({children, ...elemProps}, _, model) => {
  return (
    <Combobox.Menu model={model} {...elemProps}>
      {children}
    </Combobox.Menu>
  );
});
