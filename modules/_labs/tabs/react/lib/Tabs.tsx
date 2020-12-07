import * as React from 'react';
import {useUniqueId} from '@workday/canvas-kit-react-common';

import Tab from './Tab';
import TabList, {TabListProps} from './TabList';
import TabPanel, {TabPanelProps} from './TabPanel';
import {useTabModel} from './useTabModel';

type TabsStateContextTypes = ReturnType<typeof useTabModel>;

const TabsStateContext = React.createContext<TabsStateContextTypes>({} as any);

export const useTab = () => React.useContext(TabsStateContext);

export type TabsChild = React.ReactElement<TabListProps> | React.ReactElement<TabPanelProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The tabs contents (tabs & tab panels).
   */
  children: TabsChild[];
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

  const value: TabsStateContextTypes = model;

  return (
    <TabsStateContext.Provider value={value}>
      <div {...elemProps}>{children}</div>
    </TabsStateContext.Provider>
  );
};

Tabs.List = TabList;
Tabs.Item = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
