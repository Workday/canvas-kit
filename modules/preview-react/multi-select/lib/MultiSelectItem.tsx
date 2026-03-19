import {Combobox, useComboboxMenuItem} from '@workday/canvas-kit-react/combobox';
import {
  ExtractProps,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {handleCsProp} from '@workday/canvas-kit-styling';

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
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element, _model) => {
  return (
    <StyledMenuItem as={Element} {...handleCsProp(elemProps)}>
      {children}
    </StyledMenuItem>
  );
});
