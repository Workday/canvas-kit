import * as React from 'react';

import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Grid} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.alt.strong, system.color.bg.alt.soft),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    border: `${cssVar(base.size0, px2rem(1))} solid ${cssVar(system.color.border.transparent, system.color.border.input.default)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.lg, system.shape.x2),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xxs, px2rem(3)),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gridGap: cssVar(system.gap.sm, system.space.x2),
  },
  modifiers: {
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
        })
      )}
    >
      {useListRenderItems(model, children)}
    </Element>
  );
});
