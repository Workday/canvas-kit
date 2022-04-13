import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContainerContent} from './ExpandableContainerContent';
import {ExpandableContainerHeader} from './ExpandableContainerHeader';
import {ExpandableContainerButton} from './ExpandableContainerButton';

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
    Header: ExpandableContainerHeader,
    Button: ExpandableContainerButton,
    Content: ExpandableContainerContent,
  },
});
