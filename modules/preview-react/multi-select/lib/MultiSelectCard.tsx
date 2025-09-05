import {
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useMultiSelectModel} from './useMultiSelectModel';
import {calc, px2rem} from '@workday/canvas-kit-styling';

export interface MultiSelectCardProps extends ExtractProps<typeof Menu.Card> {}

/**
 * This hook sets the `minWidth` style attribute to match the width of the
 * {@link MultiSelectInput MultiSelect.Input} component.
 */
export const useMultiSelectCard = createElemPropsHook(useMultiSelectModel)(model => {
  return {
    minWidth: calc.add(px2rem(model.state.width), px2rem(2)),
  };
});

export const MultiSelectCard = createSubcomponent('div')({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectCard,
})<MultiSelectCardProps>(({children, ...elemProps}, Element) => {
  return (
    <Menu.Card as={Element} {...elemProps}>
      {children}
    </Menu.Card>
  );
});
