import React from 'react';

import {handleCsProp} from '@workday/canvas-kit-styling';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Combobox, useComboboxMenuItem} from '@workday/canvas-kit-react/combobox';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';

import {useMultiSelectModel} from './useMultiSelectModel';

export const useMultiSelectItem = composeHooks(
  createElemPropsHook(useMultiSelectModel)(({state}) => {
    return {
      role: 'option',
    };
  }),
  useComboboxMenuItem
);

export const MultiSelectItem = createSubcomponent('li')({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectItem,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(
  ({children, type = 'selectable', ...elemProps}, Element, _model) => {
    console.log('aria-selected', elemProps);
    return (
      <StyledMenuItem as={Element} type={type} {...handleCsProp(elemProps)}>
        {children}
      </StyledMenuItem>
    );
  }
);
