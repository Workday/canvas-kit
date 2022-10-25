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
} from '@workday/canvas-kit-react/collection';
import {useSegmentedControlModel} from './useSegmentedControlModel';

export const useSegmentedControlItem = composeHooks(
  useListItemSelect,
  createElemPropsHook(useSegmentedControlModel)(
    (
      model,
      ref?: React.Ref<HTMLElement>,
      elemProps: {'data-id'?: string; children?: React.ReactNode} = {}
    ) => {
      const {elementRef, localRef} = useLocalRef(ref);
      const name = elemProps['data-id'] || '';
      const id = `${model.state.id}-${name}`;

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

      const selected = !!name && isSelected(name, model.state);
      const [longest] = Object.keys(model.state.itemWidthCache)
        .map(e => model.state.itemWidthCache[e])
        .sort((a, b) => (a < b ? 1 : -1));

      return {
        ref: elementRef,
        id,
        'aria-pressed': selected,
        disabled: model.state.disabled || undefined,
        width: elemProps.children && `${longest}px`,
      };
    }
  ),
  useListItemRegister,
  createElemPropsHook(useSegmentedControlModel)(
    (
      {state},
      _ref,
      elemProps: {
        disabled?: boolean;
      } = {}
    ) => {
      return {
        // override the default disabled functionality of `useListItemRegister`
        disabled: elemProps.disabled || state.disabled ? true : undefined,
      };
    }
  )
);
