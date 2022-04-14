import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';

import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';

export interface PillTargetProps {
  model?: PillModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: PillModel,
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

export const PillTarget = createComponent('button')({
  displayName: 'Pill.Target',
  Component: ({children, model, ...elemProps}: PillTargetProps, ref, Element) => {
    const pillModel = useModelContext(PillModelContext, model);

    const target = useDiscloseTarget(pillModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
