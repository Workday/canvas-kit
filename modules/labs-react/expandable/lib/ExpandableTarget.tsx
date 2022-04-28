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

export interface ExpandableTargetProps extends DisclosureModelConfig {
  model?: DisclosureModel;
  /**
   * Children of the Expandable Target. Should contain Target.Title, an options Target.Avatar
   * and either Target.StartIcon or Target.EndIcon. Target.StartIcon is meant to be placed
   * before the Target.Title and Target.EndIcon should be placed after.
   */
  children: React.ReactNode;
  /**
   * Semantic heading level that will wrap the Expandable Target's button. Only use 'div' if
   * you absolutely understand the accessibility implications of not using a heading!!!
   */
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

const useDiscloseTarget = (
  {state, events}: DisclosureModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.visibility === 'visible') {
        events.hide({event});
      } else {
        events.show({event});
      }
    },
  };
};

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
    const {state, events} = useModelContext(ExpandableModelContext, model);
    const target = useDiscloseTarget({state, events}, elemProps);
    const isVisible = state.visibility === 'visible';

    return (
      <Heading as={headingLevel}>
        <StyledButton
          as={Element}
          aria-controls={isVisible ? state.id : undefined}
          aria-expanded={isVisible}
          ref={ref}
          {...target}
          {...elemProps}
        >
          {React.Children.map(children, (child, index) => {
            if (typeof child === 'string') {
              return <Title key={index}>{child}</Title>;
            }
            return child;
          })}
        </StyledButton>
      </Heading>
    );
  },
});
