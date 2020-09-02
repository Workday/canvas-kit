import * as React from 'react';
import {useTab} from './Tabs';

export interface TabPanelProps {
  /**
   * The contents of the TabPanel.
   */
  children: React.ReactNode;
  /**
   * The index of the TabPanel in the list of tabs. This is passed in from TabPanels.
   */
  index?: number;
}

const TabPanel = ({children, index = 0}: TabPanelProps) => {
  const {tabIndex} = useTab();

  const isHidden = tabIndex !== index;

  return (
    <div role="tabpanel" hidden={isHidden}>
      {children}
    </div>
  );
};

export default TabPanel;
