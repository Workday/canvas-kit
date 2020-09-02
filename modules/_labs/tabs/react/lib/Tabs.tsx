import * as React from 'react';
import {TabListProps} from './TabList';
import {TabPanelsProps} from './TabPanels';

interface TabsStateContextTypes {
  /**
   * The index of the active tab.
   */
  tabIndex: number;
  /**
   * A useState function to set the index of the active tab.
   */
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  /**
   * The ClientRect of the currently selected tab.
   */
  selectedTabRect: ClientRect | null;
  /**
   * A useState function to set the ClientRect of the currently selected tab.
   */
  setSelectedTabRect: React.Dispatch<React.SetStateAction<ClientRect>>;
}

const TabsStateContext = React.createContext<TabsStateContextTypes>({
  tabIndex: 0,
  setTabIndex: () => ({}),
  selectedTabRect: null,
  setSelectedTabRect: () => ({}),
});

export const TabStateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [selectedTabRect, setSelectedTabRect] = React.useState<ClientRect | null>(null);

  const value = {tabIndex, setTabIndex, selectedTabRect, setSelectedTabRect};

  return <TabsStateContext.Provider value={value}>{children}</TabsStateContext.Provider>;
};

export const useTab = () => React.useContext(TabsStateContext);

export type TabsChild = React.ReactElement<TabListProps> | React.ReactElement<TabPanelsProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The tabs contents (tabs & tab panels).
   */
  children: TabsChild[];
}

const Tabs = ({children, ...elemProps}: TabsProps) => {
  return (
    <TabStateProvider>
      <div {...elemProps}>{children}</div>
    </TabStateProvider>
  );
};

export default Tabs;
