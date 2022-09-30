import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Stack} from '@workday/canvas-kit-react/layout';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface SegmentedControlListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Stack, never>>, 'children'> {
  'aria-label': string;
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

const useSegmentedControlList = createElemPropsHook(useSegmentedControlModel)(
  ({state: {orientation, disabled, items}}) => {
    return {
      // sets verrtical direction only for icon only variant
      flexDirection:
        items.every(item => !item.textValue) && orientation === 'vertical' ? 'column' : 'row',
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
})<SegmentedControlListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Stack
      as={Element}
      role="group"
      backgroundColor="soap200"
      border="1px solid transparent"
      borderColor="licorice200"
      borderRadius="l"
      spacing="5px"
      padding="3px"
      maxWidth="max-content"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </Stack>
  );
});
