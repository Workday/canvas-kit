import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';
import {useMenuModel, menuListStencil} from '@workday/canvas-kit-react/menu';
import {ListBox, ListBoxProps} from '@workday/canvas-kit-react/collection';
import {system} from '@workday/canvas-tokens-web';

import {useComboboxModel} from './hooks/useComboboxModel';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';

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
      marginY={cssVar(system.space.x2)}
      {...handleCsProp(elemProps, comboboxMenuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
