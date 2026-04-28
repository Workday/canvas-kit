import {
  ExtractProps,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

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

export const comboboxCardStencil = createStencil({
  base: {
    '& :where([data-part="list-box-container"])': {
      borderRadius: system.legacy.shape.xxl,
    },
  },
});

export const ComboboxCard = createSubcomponent('div')({
  modelHook: useComboboxModel,
  elemPropsHook: useComboboxCard,
})<ComboboxCardProps>(({children, ...elemProps}, Element) => {
  return (
    <Menu.Card as={Element} {...handleCsProp(elemProps, comboboxCardStencil())}>
      {children}
    </Menu.Card>
  );
});
