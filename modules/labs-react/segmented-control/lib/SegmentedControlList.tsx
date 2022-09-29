import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';

import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface TabListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Stack, never>>, 'children'> {
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

export const useSegmentedControlList = createElemPropsHook(useSegmentedControlModel)(
  ({state: {orientation, disabled, variant}}) => {
    const isVertical = variant === 'icon' && orientation === 'vertical';

    return {
      flexDirection: isVertical ? 'column' : 'row',
      style: {
        opacity: disabled ? 0.4 : 1,
      },
    };
  }
);

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <Stack
      as={Element}
      spacing="xxxs"
      role="group"
      backgroundColor="soap200"
      border="1px solid transparent"
      borderColor="licorice200"
      borderRadius="l"
      padding="xxxs"
      maxWidth="max-content"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </Stack>
  );
});
