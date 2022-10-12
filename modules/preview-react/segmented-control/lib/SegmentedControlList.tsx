import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';

export interface SegmentedControlListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Stack, never>>, 'children'> {
  'aria-label': string;
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

const useSegmentedControlList = createElemPropsHook(useSegmentedControlModel)(
  ({state: {orientation, disabled}}) => {
    return {
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      opacity: disabled ? 0.4 : 1,
    };
  }
);

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlList,
})<SegmentedControlListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Stack
      as={Element}
      display="inline-flex"
      role="group"
      backgroundColor="soap200"
      border="1px solid transparent"
      borderColor="licorice200"
      borderRadius="l"
      spacing="xxs"
      padding="3px"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </Stack>
  );
});
