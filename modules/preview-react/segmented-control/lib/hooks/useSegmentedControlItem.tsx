import * as React from 'react';

import {
  createElemPropsHook,
  composeHooks,
  useLocalRef,
  useMountLayout,
} from '@workday/canvas-kit-react/common';
import {
  useListItemRegister,
  isSelected,
  useListItemSelect,
  useOverflowListModel,
} from '@workday/canvas-kit-react/collection';
import {useSegmentedControlModel} from './useSegmentedControlModel';

export const useSegmentedControlItem = composeHooks(
  useListItemSelect,
  useListItemRegister,
  createElemPropsHook(useOverflowListModel)(
    (model, ref?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
      const {elementRef, localRef} = useLocalRef(ref);
      const name = elemProps['data-id'] || '';

      useMountLayout(() => {
        if (localRef.current) {
          const styles = getComputedStyle(localRef.current);
          model.events.addItemWidth({
            id: name,
            width:
              localRef.current.offsetWidth +
              parseFloat(styles.marginLeft) +
              parseFloat(styles.marginRight),
          });
        }

        return () => {
          model.events.removeItemWidth({id: name});
        };
      });

      return {ref: elementRef};
    }
  ),
  createElemPropsHook(useSegmentedControlModel)(
    ({state}, _?: React.Ref<HTMLButtonElement>, elemProps: {'data-id'?: string} = {}) => {
      const name = elemProps['data-id'] || '';
      const id = `${state.id}-${name}`;
      const selected = !!name && isSelected(name, state);

      return state.disabled ? {id, disabled: true} : {id, 'aria-pressed': selected};
    }
  ),
  createElemPropsHook(useSegmentedControlModel)(({state}) => {
    const allWidths = Object.keys(state.itemWidthCache).map(e => state.itemWidthCache[e]);
    const [longest] = allWidths.sort((a, b) => (a < b ? 1 : -1));
    return !state.isIconOnlyVariant ? {width: `${longest}px`} : {};
  })
);

console.log(useSegmentedControlItem);
