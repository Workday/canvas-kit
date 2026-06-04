import * as React from 'react';

import {
  isSelected,
  useListItemRegister,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useSegmentedControlModel} from './useSegmentedControlModel';

export const useSegmentedControlItem = composeHooks(
  useListItemSelect,
  createElemPropsHook(useSegmentedControlModel)(
    (model, _, elemProps: {'data-id'?: string; children?: React.ReactNode} = {}) => {
      const name = elemProps['data-id'] || '';
      const selected = !!name && isSelected(name, model.state);

      return {
        id: `${model.state.id}-${name}`,
        'aria-pressed': selected,
      };
    }
  ),
  useListItemRegister,
  createElemPropsHook(useSegmentedControlModel)(({state}) => {
    return {
      // override the default disabled functionality of `useListItemRegister`
      // it shouldn't allow to set disabled state only for one button
      // state prop will disable the whole container
      disabled: state.disabled ? true : undefined,
    };
  })
);
