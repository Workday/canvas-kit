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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.surface.transparent, system.color.bg.transparent.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.md, system.space.x4)} ${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.xs, system.space.x2)}`,
  },
});

export const ExpandableContent = createSubcomponent('div')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableContent,
})<ExpandableContentProps>(({children, ...elementProps}, Element) => {
  return <Element {...mergeStyles(elementProps, expandableContentStencil())}>{children}</Element>;
});
