import React from 'react';

import {Combobox} from '@workday/canvas-kit-react/combobox';
import {createContainer} from '@workday/canvas-kit-react/common';

import {MultiSelectCard} from './MultiSelectCard';
import {MultiSelectInput, MultiSelectSearchInput} from './MultiSelectInput';
import {useMultiSelectModel} from './useMultiSelectModel';

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
