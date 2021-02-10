import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react-common';

import {useCommonModel, CommonModel, CommonModelConfig} from './useCommonModel';
import {CommonTarget} from './Common.Target';
import {CommonContent} from './Common.Content';

export const CommonModelContext = React.createContext<CommonModel>({} as any);

export interface CommonProps extends CommonModelConfig {
  model?: CommonModel;
  children: React.ReactNode;
}

export const Common = createComponent()({
  displayName: 'Common',
  Component: ({children, model, ...config}: CommonProps) => {
    const value = useDefaultModel(model, config, useCommonModel);

    return <CommonModelContext.Provider value={value}>{children}</CommonModelContext.Provider>;
  },
  subComponents: {
    Target: CommonTarget,
    Content: CommonContent,
  },
});
