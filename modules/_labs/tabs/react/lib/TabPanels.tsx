import * as React from 'react';
import {TabPanelProps} from './TabPanel';

export type TabPanelsChild = React.ReactElement<TabPanelProps>;

export interface TabPanelsProps {
  children: TabPanelsChild | TabPanelsChild[];
}

const TabPanels: React.FC<TabPanelsProps> = ({children}: TabPanelsProps) => {
  return <div>{children}</div>;
};

export default TabPanels;
