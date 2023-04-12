import React from 'react';

import {commonColors} from '@workday/canvas-kit-react/tokens';
import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';
import {ListBox, ListProps} from '@workday/canvas-kit-react/collection';

import {useComboboxModel} from './useComboboxModel';

export interface ComboboxMenuListProps<T = any>
  extends Omit<ExtractProps<typeof ListBox>, 'children'> {
  /**
   * Children of the Combobox. Should contain a `<Combobox.Target>`, a `<Combobox.Content>`
   */
  children: ListProps<T>['children'];
}

export const useComboboxMenuList = createElemPropsHook(useMenuModel)(model => {
  return {
    role: 'listbox',
    'aria-labelledby': model.state.id,
    id: `${model.state.id}-list`,
    flexDirection: model.state.orientation === 'vertical' ? 'column' : 'row',
  } as const;
});

export const ComboboxMenuList = createSubcomponent('ul')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxMenuList,
})<ComboboxMenuListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <ListBox
      as={Element}
      model={model}
      background={commonColors.background}
      borderRadius="zero"
      padding="zero"
      marginY="xxs"
      gap="zero"
      overflowY="auto"
      {...elemProps}
    >
      {children}
    </ListBox>
  );
});
