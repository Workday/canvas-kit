import {ListBox, ListBoxProps} from '@workday/canvas-kit-react/collection';
import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';
import {menuListStencil, useMenuModel} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

import {useComboboxModel} from './hooks/useComboboxModel';

export interface ComboboxMenuListProps<T = any> extends ListBoxProps<T> {}

/**
 * The `listbox` uses `aria-labelledby` pointing to the {@link ComboboxInput Combobox.Input}. This
 * input should be labelled by a form field label for proper accessibility. Use {@link FormField} to
 * ensure proper accessibility.
 */
export const useComboboxMenuList = createElemPropsHook(useMenuModel)(model => {
  return {
    role: 'listbox',
    'aria-labelledby': model.state.id,
    id: `${model.state.id}-list`,
  } as const;
});

const comboboxMenuListStencil = createStencil({
  base: {},
  extends: menuListStencil,
});

export const ComboboxMenuList = createSubcomponent('ul')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxMenuList,
})<ComboboxMenuListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <ListBox
      as={Element}
      model={model}
      {...handleCsProp(elemProps, comboboxMenuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
