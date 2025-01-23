import React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {BaseButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
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
  extends: buttonStencil,
  base: {
    [buttonStencil.vars.background]: system.color.bg.transparent,
    [buttonStencil.vars.border]: system.color.bg.transparent,
    [buttonStencil.vars.borderRadius]: system.shape.x1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'start',
    padding: system.space.x2,
    width: '100%',
    '&:hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
    },
  },
});

export const ExpandableTarget = createSubcomponent('button')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableTarget,
})<ExpandableTargetProps>(({children, headingLevel, ...elementProps}, Element) => {
  const button = (
    <BaseButton as={Element} {...mergeStyles(elementProps, expandableTargetStencil())}>
      {children}
    </BaseButton>
  );

  return headingLevel ? (
    <Heading size="small" as={headingLevel} margin="0">
      {button}
    </Heading>
  ) : (
    button
  );
});
