import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react-common';

import {Tab} from './Tab';
import {TabList} from './TabList';
import {TabPanel} from './TabPanel';
import {useTabModel, TabModel, TabModelConfig} from './useTabModel';

const TabsStateContext = React.createContext<TabModel>({} as any);

export const useTabsModelContext = () => React.useContext(TabsStateContext);

export interface TabsProps extends TabModelConfig {
  model?: TabModel;
  children: React.ReactNode;
}

export const Tabs = createComponent()({
  displayName: 'Tabs',
  Component: ({children, initialTab = '', ...elemProps}: TabsProps, ref, Element) => {
    const model = useTabModel();

    return (
      <TabsStateContext.Provider value={model}>
        {children}
      </TabsStateContext.Provider>
    );
  },
  subComponents: {
    List: TabList,
    Item: Tab,
    Panel: TabPanel,
  },
});
