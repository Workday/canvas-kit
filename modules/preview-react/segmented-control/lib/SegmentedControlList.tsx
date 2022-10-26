import * as React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  createElemPropsHook,
} from '@workday/canvas-kit-react/common';
import {Grid} from '@workday/canvas-kit-react/layout';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';

export interface SegmentedControlListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Grid, never>>, 'children'> {
  'aria-label': string;
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

const useSegmentedControlList = createElemPropsHook(useSegmentedControlModel)(
  ({state: {orientation, disabled, items}}) => {
    const directionName = orientation === 'vertical' ? 'Row' : 'Column';
    return {
      [`gridTemplate${directionName}s`]: `repeat(${items.length}, 1fr)`,
      opacity: disabled ? 0.4 : undefined,
    };
  }
);

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
  elemPropsHook: useSegmentedControlList,
})<SegmentedControlListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Grid
      as={Element}
      display="inline-grid"
      role="group"
      backgroundColor="soap200"
      border="1px solid transparent"
      borderColor="licorice200"
      borderRadius="l"
      padding="3px"
      gridGap="xxs"
      {...elemProps}
    >
      {useListRenderItems(model, children)}
    </Grid>
  );
});
