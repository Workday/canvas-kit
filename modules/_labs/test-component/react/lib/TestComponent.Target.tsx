import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react-common';

import {TestComponent, TestComponentModelContext} from './TestComponent';
import {TestComponentModel} from './useTestComponentModel';

export interface TestComponentTargetProps {
  model?: TestComponentModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: TestComponentModel,
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

export const TestComponentTarget = createComponent('button')({
  displayName: 'TestComponent.Target',
  Component: ({children, model, ...elemProps}: TestComponentTargetProps, ref, Element) => {
    const testComponentModel = useModelContext(model, TestComponentModelContext);

    const target = useDiscloseTarget(testComponentModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
