/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import React from 'react';
import {useTab} from './Tabs';

export interface TabPanelProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The contents of the TabPanel.
   */
  children: React.ReactNode;
  /**
   * The name of the tab. This name will be used in change events and for `initialTab`. Must match
   * the `name` of the associated tab item. If this property is not provided, it will default to a
   * string representation of the the zero-based index of the Tab when it was initialized.
   */
  name?: string;
}

const styles = css(
  mouseFocusBehavior({
    '&:focus': {
      outline: 'none',
    },
  })
);

const TabPanel = ({children, name = '', ...elemProps}: TabPanelProps) => {
  const {id, activeTab, registerPanel, unregisterPanel} = useTab();
  const [tabName, setTabName] = React.useState(name);

  // useLayoutEffect so we don't an incorrect frame if a name isn't provided
  React.useLayoutEffect(() => {
    const tabName = registerPanel(name);
    setTabName(tabName);

    return () => {
      unregisterPanel(tabName);
    };
  }, [name, registerPanel, unregisterPanel]);

  return (
    <div
      role="tabpanel"
      css={styles}
      aria-labelledby={`tab-${id}-${tabName}`}
      hidden={!!tabName && tabName !== activeTab}
      id={`tabpanel-${id}-${tabName}`}
      tabIndex={0}
      {...elemProps}
    >
      {children}
    </div>
  );
};

export default TabPanel;
