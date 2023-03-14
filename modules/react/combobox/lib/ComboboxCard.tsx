import React from 'react';

import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';

export interface ComboboxCardProps<T = any> extends ExtractProps<typeof Menu.Card> {}

export const useComboboxCard = createElemPropsHook(useComboboxModel)(model => {
  return {
    minWidth: model.state.width,
  } as const;
});

export const ComboboxCard = createSubcomponent('div')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxCard,
})<ComboboxCardProps>(({children, ...elemProps}, Element) => {
  return (
    <Menu.Card as={Element} {...elemProps}>
      {children}
    </Menu.Card>
  );
});
