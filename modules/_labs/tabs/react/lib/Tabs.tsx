import * as React from 'react';

import Tab from './Tab';
import TabList, {TabListProps} from './TabList';
import TabPanel, {TabPanelProps} from './TabPanel';
import {useTabModel} from './useTabModel';
import {useTabModel2, TabModel} from './useTabModel2';

type TabsStateContextTypes = ReturnType<typeof useTabModel>;

const TabsStateContext = React.createContext<TabsStateContextTypes>({} as any);
const TabsStateContext2 = React.createContext<TabModel>({} as any);

export const useTab = () => React.useContext(TabsStateContext);
export const useTab2 = () => React.useContext(TabsStateContext2);

export type TabsChild = React.ReactElement<TabListProps> | React.ReactElement<TabPanelProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The `name` of the tab that should be active first. If not provided, the first tab will be active.
   */
  initialTab?: string;
  /**
   * Callback when a tab changes. The `name` will be the `name` prop passed into the `Tabs.Item` and
   * `Tabs.Panel` component. If a `name` isn't provided, the value will be a string of the index of
   * the tab.
   */
  onTabChange?: (name: string) => void;
}

const Tabs = ({children, initialTab = '', onTabChange, ...elemProps}: TabsProps) => {
  const model = useTabModel({
    context: {
      initialTab: '1',
    },
    shouldActivateTab: (context, event) => {
      console.log('shouldActivateTab', {context, event});
      return true;
    },
    onActivateTab: (context, event) => {
      console.log('onActivateTab', {context, event});
    },
  });
  const model2 = useTabModel2({
    onRegisterItem({data, state}) {
      console.log('onRegisterItem', data, state);
    },
    onUnregisterItem({data, state}) {
      console.log('onUnregisterItem', data, state);
    },
    shouldActivateTab({data, state}) {
      console.log('shouldActivateTab');
      return true;
    },
    onActivateTab({data, state}) {
      console.log('onActivateTab 2', data.tab, model.state.context.activeTab);
    },
  });

  const value: TabsStateContextTypes = model;

  return (
    <TabsStateContext.Provider value={value}>
      <TabsStateContext2.Provider value={model2}>
        <div {...elemProps}>{children}</div>
      </TabsStateContext2.Provider>
    </TabsStateContext.Provider>
  );
};

Tabs.List = TabList;
Tabs.Item = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
