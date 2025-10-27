import * as React from 'react';

import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Grid} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';
import {useListRenderItems} from '@workday/canvas-kit-react/collection';

export interface SegmentedControlListProps<T = any>
  extends Omit<Partial<ExtractProps<typeof Grid, never>>, 'children'> {
  'aria-label': string;
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

export const segmentedControlListStencil = createStencil({
  vars: {
    items: '',
  },
  base: {
    display: 'inline-grid',
    backgroundColor: system.color.bg.alt.soft,
    border: `${px2rem(1)} solid ${system.color.border.input.default}`,
    borderRadius: system.shape.x2,
    padding: px2rem(3),
    gridGap: system.space.x2,
  },
  modifiers: {
    disabled: {
      true: {
        opacity: system.opacity.disabled,
      },
    },
    orientation: {
      vertical: ({items}) => ({
        gridTemplateRows: `repeat(${items}, 1fr)`,
      }),
      horizontal: ({items}) => ({
        gridTemplateColumns: `repeat(${items}, 1fr)`,
      }),
    },
  },
});

export const SegmentedControlList = createSubcomponent('div')({
  displayName: 'SegmentedControl.List',
  modelHook: useSegmentedControlModel,
})<SegmentedControlListProps>(({children, ...elemProps}, Element, model) => {
  return (
    <Element
      role="group"
      {...handleCsProp(
        elemProps,
        segmentedControlListStencil({
          disabled: model.state.disabled,
          items: `${model.state.items.length}`,
          orientation: model.state.orientation,
        })
      )}
    >
      {useListRenderItems(model, children)}
    </Element>
  );
});
