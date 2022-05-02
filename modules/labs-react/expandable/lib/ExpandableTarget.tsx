import React from 'react';

import {
  createComponent,
  ExtractProps,
  focusRing,
  hideMouseFocus,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel, DisclosureModelConfig} from '@workday/canvas-kit-react/disclosure';
import {ExpandableTitle} from './ExpandableTitle';
import {colors} from '@workday/canvas-kit-react';
import {useExpandableTarget} from './hooks/useExpandableTarget';
import {Flex} from '@workday/canvas-kit-react/layout';

export interface ExpandableTargetProps
  extends DisclosureModelConfig,
    ExtractProps<typeof Flex, never> {
  model?: DisclosureModel;
  /**
   * Children of the `Expandable.Target`. Should contain `Target.Title`, an optional `Target.Avatar`
   * and either `Target.StartIcon` or `Target.EndIcon`. `Target.StartIcon` is meant to be placed before
   * the `Target.Title` and `Target.EndIcon` should be placed after.
   */
  children: React.ReactNode;
  /**
   * Specifies the semantic heading level that will wrap the `Expandable.Target`'s button. If 'none' is
   * selected the no semantic heading will wrap the button.
   */
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'none';
}

const StyledButton = styled(Flex.as('button'))<StyledType>({
  cursor: 'pointer',
  '&:focus': {
    ...focusRing(),
  },
  '&:hover': {
    background: colors.soap300,
  },
  ...hideMouseFocus,
});

const Heading = styled('h1')<StyledType>({
  margin: 0,
});

export const ExpandableTarget = createComponent('button')({
  displayName: 'Expandable.Target',
  Component: (
    {children, model, headingLevel, ...elemProps}: ExpandableTargetProps,
    ref,
    Element
  ) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableTarget(localModel, elemProps, ref);

    const button = (
      <StyledButton
        as={Element}
        alignItems="center"
        background="none"
        border="none"
        borderRadius="m"
        flexDirection="row"
        padding="xxs"
        width="100%"
        {...props}
      >
        {React.Children.map(children, (child, index) => {
          if (typeof child === 'string') {
            return <ExpandableTitle key={index}>{child}</ExpandableTitle>;
          }
          return child;
        })}
      </StyledButton>
    );

    return headingLevel === 'none' ? button : <Heading as={headingLevel}>{button}</Heading>;
  },
});
