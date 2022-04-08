import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {ExpandableContainerModelContext} from './ExpandableContainer';
import {ExpandableContainerModel} from './useExpandableContainerModel';

export interface ExpandableContainerTargetProps {
  model?: ExpandableContainerModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: ExpandableContainerModel,
  elemProps: Partial<React.HTMLAttributes<HTMLElement>> = {}
) => {
  return {
    onClick(event: React.MouseEvent<HTMLElement>) {
      elemProps.onClick?.(event);

      if (state.open) {
        events.close({});
      } else {
        events.open({});
      }
    },
  };
};

export const ExpandableContainerTarget = createComponent('button')({
  displayName: 'ExpandableContainer.Target',
  Component: ({children, model, ...elemProps}: ExpandableContainerTargetProps, ref, Element) => {
    const expandableContainerModel = useModelContext(ExpandableContainerModelContext, model);

    const target = useDiscloseTarget(expandableContainerModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
