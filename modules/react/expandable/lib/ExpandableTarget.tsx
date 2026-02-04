import React from 'react';

import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

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
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    background: cssVar(system.color.surface.transparent, system.color.bg.transparent.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderColor: cssVar(system.color.border.transparent, system.color.bg.transparent.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.xxl, system.shape.x6),
    borderWidth: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.none, system.space.zero),
    justifyContent: 'start',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xs, system.space.x2),
    cursor: 'pointer',
    width: '100%',
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(system.color.surface.overlay.hover.default, system.color.bg.alt.soft),
    },
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      outline: `${cssVar(system.color.brand.border.primary, brand.common.focusOutline)} solid ${px2rem(2)}`,
    },
  },
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
