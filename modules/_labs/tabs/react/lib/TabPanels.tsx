import * as React from 'react';
import {TabPanelProps} from './TabPanel';

type TabPanel = React.ReactElement<TabPanelProps>;

export interface TabPanelsProps {
  /**
   * A list of TabPanel components.
   */
  children: TabPanel | TabPanel[];
}

const TabPanels = ({children}: TabPanelsProps) => {
  const clonedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    return React.cloneElement(child, {index});
  });

  return <div>{clonedChildren}</div>;
};

export default TabPanels;
