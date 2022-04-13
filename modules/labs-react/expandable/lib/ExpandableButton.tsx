import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface ExpandableButtonProps {
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

export const ExpandableButton = createComponent('button')({
  displayName: 'Expandable.Button',
  Component: ({children, model, ...elemProps}: ExpandableButtonProps, ref, Element) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const target = useDiscloseTarget(expandableModel, elemProps);

    const state = expandableModel.state;
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
