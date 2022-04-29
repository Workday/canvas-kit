import React from 'react';

import {
  createComponent,
  focusRing,
  hideMouseFocus,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel, DisclosureModelConfig} from '@workday/canvas-kit-react/disclosure';
import {Title} from './ExpandableTitle';
import {colors, space} from '@workday/canvas-kit-react';
import {useExpandableTarget} from './hooks/useExpandableTarget';

export interface ExpandableTargetProps
  extends DisclosureModelConfig,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  model?: DisclosureModel;
  /**
   * Children of the Expandable Target. Should contain Target.Title, an options Target.Avatar
   * and either Target.StartIcon or Target.EndIcon. Target.StartIcon is meant to be placed
   * before the Target.Title and Target.EndIcon should be placed after.
   */
  children: React.ReactNode;
  /**
   * Semantic heading level that will wrap the Expandable Target's button. Only use 'none' if
   * you absolutely understand the accessibility implications of not using a heading!!!
   */
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'none';
}

const StyledButton = styled('button')<StyledType>({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  border: 'none',
  background: 'none',
  padding: space.xxs,
  width: '100%',
  borderRadius: space.xxxs,
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
    const props = useExpandableTarget(localModel, elemProps);

    const button = (
      <StyledButton as={Element} ref={ref} {...props}>
        {React.Children.map(children, (child, index) => {
          if (typeof child === 'string') {
            return <Title key={index}>{child}</Title>;
          }
          return child;
        })}
      </StyledButton>
    );

    return headingLevel === 'none' ? button : <Heading as={headingLevel}>{button}</Heading>;
  },
});
