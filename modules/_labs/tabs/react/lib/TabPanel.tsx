import * as React from 'react';
import {useTab} from './Tabs';

export interface TabPanelProps {
  children: React.ReactNode;
  index?: number;
}

const TabPanel: React.FC<TabPanelProps> = ({children, index = 0}: TabPanelProps) => {
  const {tabIndex} = useTab();

  const isHidden = tabIndex !== index;

  return (
    <div role="tabpanel" hidden={isHidden}>
      {children}
    </div>
  );
};

export default TabPanel;
