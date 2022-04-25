import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {Title} from './Expandable.Title';
import {space} from '@workday/canvas-kit-react';

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

const StyledButton = styled('button')<{isVisible: boolean} & StyledType>(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    padding: space.xxs,
    width: '100%',
  },
  ({isVisible}) => ({
    paddingBottom: isVisible ? space.s : space.xxs,
  })
);

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
      <Heading style={{margin: 0}}>
        <StyledButton
          as={Element}
          aria-controls={isVisible ? state.id : undefined}
          aria-expanded={isVisible}
          isVisible={isVisible}
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
