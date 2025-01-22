import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  focusRing,
  hideMouseFocus,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {colors} from '@workday/canvas-kit-react/tokens';
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
  base: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderRadius: system.shape.x1,
    flexDirection: 'row',
    padding: system.space.x2,
    width: '100%',
    '&:focus': {
      ...focusRing(),
    },
    '&:hover': {
      background: base.soap300,
    },
    // TODO: this isn't working, can't figure out why
    // ...hideMouseFocus,
  },
});

// QQ: can I merge this stencil into the one up above somehow...?
export const expandableHeadingStencil = createStencil({
  base: {
    margin: 0,
  },
});

export const ExpandableTarget = createSubcomponent('button')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableTarget,
})<ExpandableTargetProps>(({children, headingLevel, ...elementProps}, Element) => {
  const button = (
    <Flex as={Element} {...mergeStyles(elementProps, expandableTargetStencil())}>
      {children}
    </Flex>
  );

  // should I be using the CK Heading component...?
  // I think it messing up font-size from 14 to 24 ...?
  // maybe this doesn't matter - button styles override the heading!
  return !!headingLevel ? (
    <Heading size="small" as={headingLevel} cs={expandableHeadingStencil()}>
      {button}
    </Heading>
  ) : (
    button
  );
});
