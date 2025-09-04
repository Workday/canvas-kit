import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {useExpandableTarget} from './hooks/useExpandableTarget';
import {useExpandableModel} from './hooks/useExpandableModel';

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
    background: system.color.bg.transparent.default,
    borderColor: system.color.bg.transparent.default,
    borderRadius: system.shape.x1,
    borderWidth: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: system.space.x2,
    justifyContent: 'start',
    padding: system.space.x2,
    cursor: 'pointer',
    width: '100%',
    '&:hover, &.hover': {
      backgroundColor: system.color.bg.alt.soft,
    },
    '&:focus-visible, &.focus': {
      outline: `${brand.common.focusOutline} solid ${px2rem(2)}`,
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
