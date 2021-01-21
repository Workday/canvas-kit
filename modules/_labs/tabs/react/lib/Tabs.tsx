import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react-common';

import {Tab} from './Tab';
import {TabList} from './TabList';
import {TabPanel} from './TabPanel';
import {useTabsModel, TabsModel, TabsModelConfig} from './useTabsModel';

export const TabsModelContext = React.createContext<TabsModel>({} as any);

export interface TabsProps extends TabsModelConfig {
  model?: TabsModel;
  children: React.ReactNode;
}

export const Tabs = createComponent()({
  displayName: 'Tabs',
  Component: ({children, model, ...config}: TabsProps, ref, Element) => {
    const value = useDefaultModel(model, config, useTabsModel);

    return <TabsModelContext.Provider value={value}>{children}</TabsModelContext.Provider>;
  },
  subComponents: {
    List: TabList,
    Item: Tab,
    Panel: TabPanel,
  },
});
