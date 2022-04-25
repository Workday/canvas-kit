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
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {Title} from './Expandable.Title';
import {colors, space} from '@workday/canvas-kit-react';

export interface ExpandableTargetProps {
  model?: DisclosureModel;
  children: React.ReactNode;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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

export const ExpandableTarget = createComponent('button')({
  displayName: 'Expandable.Target',
  Component: (
    {children, model, headingLevel, ...elemProps}: ExpandableTargetProps,
    ref,
    Element
  ) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const target = useDiscloseTarget(expandableModel, elemProps);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';
    const Heading = headingLevel;

    return (
      <Heading style={{margin: 0, paddingBottom: isVisible ? space.s : space.xxs}}>
        <StyledButton
          as={Element}
          aria-controls={isVisible ? state.id : undefined}
          aria-expanded={isVisible}
          ref={ref}
          {...target}
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
