import * as React from 'react';

import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useSegmentedControlModel} from './hooks/useSegmentedControlModel';

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
    backgroundColor: system.legacy.color.surface.alt.default,
    border: `0 solid ${system.color.border.transparent}`,
    borderRadius: system.legacy.shape.full,
    padding: system.legacy.padding.xxs,
    gridGap: system.legacy.gap.xs,
  },
  modifiers: {
    size: {
      large: {
        padding: system.legacy.padding.xxs,
      },
      medium: {
        padding: base.legacy.size25,
      },
      small: {
        padding: base.legacy.size25,
        gap: base.legacy.size25,
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
          items: `${model.state.items.length}`,
          orientation: model.state.orientation,
          size: model.state.size,
        })
      )}
    >
      {useListRenderItems(model, children)}
    </Element>
  );
});
