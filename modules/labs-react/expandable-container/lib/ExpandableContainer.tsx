import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  useExpandableContainerModel,
  ExpandableContainerModel,
  ExpandableContainerModelConfig,
} from './useExpandableContainerModel';
import {ExpandableContainerTarget} from './ExpandableContainer.Target';
import {ExpandableContainerContent} from './ExpandableContainer.Content';

export const ExpandableContainerModelContext = React.createContext<ExpandableContainerModel>(
  {} as any
);

export interface ExpandableContainerProps extends ExpandableContainerModelConfig {
  model?: ExpandableContainerModel;
  children: React.ReactNode;
}

export const ExpandableContainer = createComponent()({
  displayName: 'ExpandableContainer',
  Component: ({children, model, ...config}: ExpandableContainerProps) => {
    const value = useDefaultModel(model, config, useExpandableContainerModel);

    return (
      <ExpandableContainerModelContext.Provider value={value}>
        {children}
      </ExpandableContainerModelContext.Provider>
    );
  },
  subComponents: {
    Target: ExpandableContainerTarget,
    Content: ExpandableContainerContent,
  },
});
