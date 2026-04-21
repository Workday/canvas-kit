import React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useExpandableContent} from './hooks/useExpandableContent';
import {useExpandableModel} from './hooks/useExpandableModel';

export interface ExpandableContentProps extends ExtractProps<typeof Box, never> {
  /**
   * The children of the `Expandable.Content` whose visibility is controlled by the associated
   * `Expandable.Target`
   */
  children?: React.ReactNode;
}

export const expandableContentStencil = createStencil({
  base: {
    background: cssVar(system.color.surface.transparent, system.color.bg.transparent.default),
    padding: `${system.padding.md} ${system.padding.xs} ${system.padding.xs}`,
  },
});

export const ExpandableContent = createSubcomponent('div')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableContent,
})<ExpandableContentProps>(({children, ...elementProps}, Element) => {
  return <Element {...mergeStyles(elementProps, expandableContentStencil())}>{children}</Element>;
});
