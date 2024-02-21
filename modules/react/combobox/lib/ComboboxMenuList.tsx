import React from 'react';

import {createElemPropsHook, createSubcomponent} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';
import {ListBox, ListBoxProps} from '@workday/canvas-kit-react/collection';
import {system, base} from '@workday/canvas-tokens-web';

import {useComboboxModel} from './hooks/useComboboxModel';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

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

const comoboxMenuListStencil = createStencil({
  base: {
    borderRadius: system.shape.zero,
    gap: system.space.zero,
    // overflowY: 'auto',
    background: base.frenchVanilla100,
    padding: system.space.zero,
  },
  modifiers: {
    orientation: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
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
      {...mergeStyles(elemProps, comoboxMenuListStencil({orientation: model.state.orientation}))}
    >
      {children}
    </ListBox>
  );
});
