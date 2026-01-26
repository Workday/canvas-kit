import React from 'react';

import {ExtractProps, createSubcomponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useExpandableModel} from './hooks/useExpandableModel';
import {useExpandableTarget} from './hooks/useExpandableTarget';

export interface ExpandableTargetProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the `Expandable.Target`. Should contain `Target.Title`, an optional `Target.Avatar`
   * and `Target.Icon` with an `iconPosition` prop that takes a value of either `start` or `end`.
   * `Target.Icon` with `start` is meant to be placed before the `Target.Title` and `Target.Icon`
   * `end` should be placed after.
   */
  children: React.ReactNode;
  /**
   * This specifies the semantic heading level that will wrap the `Expandable.Target`'s button. If not
   * defined, then nothing will wrap the button.
   */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const expandableTargetStencil = createStencil({
  vars: {
    expandableTargetShape: cssVar(system.shape.xxl, system.shape.x6),
  },
  base: ({expandableTargetShape}) => ({
    background: forwardFitTokens.system.color.surface.transparent,
    borderColor: forwardFitTokens.system.color.border.transparent,
    borderRadius: expandableTargetShape,
    borderWidth: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: forwardFitTokens.system.gap.none,
    justifyContent: 'start',
    padding: forwardFitTokens.system.padding.xs,
    cursor: 'pointer',
    width: '100%',
    '&:hover, &.hover': {
      backgroundColor: forwardFitTokens.system.color.surface.overlay.hover.default,
    },
    '&:focus-visible, &.focus': {
      outline: `${forwardFitTokens.system.color.brand.border.primary} solid ${px2rem(2)}`,
    },
  }),
});

export const ExpandableTarget = createSubcomponent('button')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableTarget,
})<ExpandableTargetProps>(({children, headingLevel, ...elementProps}, Element) => {
  const button = (
    <Element {...mergeStyles(elementProps, expandableTargetStencil())}>{children}</Element>
  );

  return headingLevel ? (
    <Heading size="small" as={headingLevel} margin="0">
      {button}
    </Heading>
  ) : (
    button
  );
});
