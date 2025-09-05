import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';

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

const StyledButton = styled(Flex.as('button'))<StyledType>({
  cursor: 'pointer',
  '&:focus-visible, &.focus': {
    // using `focusRing` in support doesn't work for components that use `styled` function because we changed the type to be `CSSObjectWithVars`. Changing this to use `boxShadow` works in support for non stencil components.
    boxShadow:
      '0 0 0 0px var(--cnvs-base-palette-french-vanilla-100, rgba(255,255,255,1)),0 0 0 2px var(--cnvs-brand-common-focus-outline, rgba(8,117,225,1))',
  },
  '&:hover': {
    background: colors.soap300,
  },
});

const Heading = styled('h1')<StyledType>({
  margin: 0,
});

export const ExpandableTarget = createSubcomponent('button')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableTarget,
})<ExpandableTargetProps>(({children, headingLevel, ...elementProps}, Element) => {
  const button = (
    <StyledButton
      as={Element}
      background="none"
      border="none"
      borderRadius="m"
      flexDirection="row"
      padding="xxs"
      width="100%"
      {...elementProps}
    >
      {children}
    </StyledButton>
  );

  return !!headingLevel ? <Heading as={headingLevel}>{button}</Heading> : button;
});
