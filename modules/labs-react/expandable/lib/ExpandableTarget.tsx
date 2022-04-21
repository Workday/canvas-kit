import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

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
      <Heading>
        <Element
          aria-controls={isVisible ? state.id : undefined}
          aria-expanded={isVisible}
          ref={ref}
          {...target}
        >
          {children}
        </Element>
      </Heading>
    );
  },
});
