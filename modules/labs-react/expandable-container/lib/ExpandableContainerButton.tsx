import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {ExpandableContainerModelContext} from './ExpandableContainer';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface ExpandableContainerTargetProps {
  model?: DisclosureModel;
  children: React.ReactNode;
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

export const ExpandableContainerButton = createComponent('button')({
  displayName: 'ExpandableContainer.Header.Button',
  Component: ({children, model, ...elemProps}: ExpandableContainerTargetProps, ref, Element) => {
    const expandableContainerModel = useModelContext(ExpandableContainerModelContext, model);
    const target = useDiscloseTarget(expandableContainerModel, elemProps);

    const state = expandableContainerModel.state;
    const isVisible = state.visibility === 'visible';

    return (
      <Element
        aria-controls={isVisible ? state.id : undefined}
        aria-expanded={isVisible}
        ref={ref}
        {...target}
      >
        {children}
      </Element>
    );
  },
});
