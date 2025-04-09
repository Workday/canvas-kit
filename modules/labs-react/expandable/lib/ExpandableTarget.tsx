import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  focusRing,
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
    ...focusRing(),
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
