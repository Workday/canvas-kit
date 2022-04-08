import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContainerTarget} from './ExpandableContainer.Target';
import {ExpandableContainerContent} from './ExpandableContainer.Content';

export const ExpandableContainerModelContext = React.createContext<DisclosureModel>({} as any);

export interface ExpandableContainerProps extends DisclosureModelConfig {
  model?: DisclosureModel;
  children: React.ReactNode;
}

export const ExpandableContainer = createComponent()({
  displayName: 'ExpandableContainer',
  Component: ({children, model, ...config}: ExpandableContainerProps) => {
    const value = useDefaultModel(model, config, useDisclosureModel);

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
