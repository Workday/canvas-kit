import * as React from 'react';

import {createComponent, Element} from '@workday/canvas-kit-react-common';

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

export const Tabs = createComponent({
  as: 'div',
  displayName: 'Tabs',
  Component: ({children, initialTab = '', ...elemProps}: TabsProps, ref, as) => {
    const model = useTabModel(
      elemProps
      // {

      // onRegisterItem({data, state}) {
      //   console.log('onRegisterItem', data, state);
      // },
      // onUnregisterItem({data, state}) {
      //   console.log('onUnregisterItem', data, state);
      // },
      // shouldActivateTab({data, state}) {
      //   console.log('shouldActivateTab');
      //   return true;
      // },
      // onActivateTab({data, state}) {
      //   console.log('onActivateTab 2', data.tab, model.state.activeTab);
      // },
      // }
    );

    return (
      <TabsStateContext.Provider value={model}>
        <Element as={as} {...elemProps} ref={ref}>
          {children}
        </Element>
      </TabsStateContext.Provider>
    );
  },
  subComponents: {
    List: TabList,
    Item: Tab,
    Panel: TabPanel,
  },
});
