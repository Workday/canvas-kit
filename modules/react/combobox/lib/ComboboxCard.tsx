import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './hooks/useComboboxModel';

export interface ComboboxCardProps extends ExtractProps<typeof Menu.Card> {}

/**
 * This hook sets the `minWidth` style attribute to match the width of the
 * {@link ComboboxInput Combobox.Input} component.
 */
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
