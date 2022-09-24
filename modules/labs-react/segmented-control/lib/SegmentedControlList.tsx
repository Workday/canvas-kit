import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  composeHooks,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useListRenderItems, useListResetCursorOnBlur} from '@workday/canvas-kit-react/collection';

import {useSegmentedControlModel} from './useSegmentedControlModel';

export interface TabListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Flex, never>>, 'children'> {
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  overflowButton?: React.ReactNode;
}

export const useTabsList = composeHooks(
  createElemPropsHook(useSegmentedControlModel)(({state: {orientation, items, disabled}}) => {
    const isVertical =
      items.length && items.every(item => !item.textValue) && orientation === 'vertical';
    return {
      style: {
        flexDirection: isVertical ? 'column' : 'row',
        opacity: disabled ? 0.4 : 1,
      },
    };
  }),
  useListResetCursorOnBlur
);

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useTabsList,
})<TabListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <Flex
      as={Element}
      backgroundColor="soap200"
      border="1px solid transparent"
      borderColor="licorice200"
      borderRadius="l"
      padding="xxxs"
      maxWidth="min-content"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </Flex>
  );
});
