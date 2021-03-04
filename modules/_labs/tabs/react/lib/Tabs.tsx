import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react-common';

import {Tab} from './Tab';
import {TabList} from './TabList';
import {TabPanel} from './TabPanel';
import {useTabsModel, TabsModel, TabsModelConfig} from './useTabsModel';

export const TabsModelContext = React.createContext<TabsModel>({} as any);

export interface TabsProps extends TabsModelConfig {
  /**
   * The contents of the Tabs. Can be `Tabs` children or any valid elements.
   */
  children: React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to create a model out of model
   * config passed to this component.
   * @default useTabsModel(config)
   */
  model?: TabsModel;
}

export const Tabs = createComponent()({
  displayName: 'Tabs',
  Component: ({children, model, ...config}: TabsProps) => {
    const value = useDefaultModel(model, config, useTabsModel);

    return <TabsModelContext.Provider value={value}>{children}</TabsModelContext.Provider>;
  },
  subComponents: {
    List: TabList,
    Item: Tab,
    Panel: TabPanel,
  },
});
