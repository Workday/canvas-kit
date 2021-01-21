
import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react-common';

import {
  useTestComponentModel,
  TestComponentModel,
  TestComponentModelConfig,
} from './useTestComponentModel';
import {TestComponentTarget} from './TestComponent.Target';
import {TestComponentContent} from './TestComponent.Content';

export const TestComponentModelContext = React.createContext<TestComponentModel>({} as any);

export interface TestComponentProps extends TestComponentModelConfig {
  model?: TestComponentModel;
  children: React.ReactNode;
}

export const TestComponent = createComponent('div')({
  displayName: 'TestComponent',
  Component: ({children, model, ...config}: TestComponentProps) => {
    const value = useDefaultModel(model, config, useTestComponentModel);

    return (
      <TestComponentModelContext.Provider value={value}>
        {children}
      </TestComponentModelContext.Provider>
    );
  },
  subComponents: {
    Target: TestComponentTarget,
    Content: TestComponentContent,
  },
});
