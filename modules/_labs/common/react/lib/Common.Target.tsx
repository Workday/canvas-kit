import React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react-common';

import {CommonModelContext} from './Common';
import {CommonModel} from './useCommonModel';

export interface CommonTargetProps {
  model?: CommonModel;
  children: React.ReactNode;
}

const useDiscloseTarget = (
  {state, events}: CommonModel,
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

export const CommonTarget = createComponent('button')({
  displayName: 'Common.Target',
  Component: ({children, model, ...elemProps}: CommonTargetProps, ref, Element) => {
    const commonModel = useModelContext(CommonModelContext, model);

    const target = useDiscloseTarget(commonModel, elemProps);

    return (
      <Element ref={ref} {...target}>
        {children}
      </Element>
    );
  },
});
