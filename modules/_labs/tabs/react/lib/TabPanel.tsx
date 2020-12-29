/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {mouseFocusBehavior, useMountLayout} from '@workday/canvas-kit-react-common';
import React from 'react';
import {useTab2} from './Tabs';

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
  const {state, events} = useTab2();
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [tabName, setTabName] = React.useState(name);

  // useLayoutEffect so we don't an incorrect frame if a name isn't provided
  useMountLayout(() => {
    const index = state.panelIndexRef.current;
    const tabName = name || String(index);
    events.registerPanel({item: {id: tabName, ref: panelRef}});
    setTabName(tabName);

    return () => {
      events.unregisterItem({id: tabName});
    };
  });

  return (
    <div
      ref={panelRef}
      role="tabpanel"
      css={styles}
      aria-labelledby={`tab-${state.id}-${tabName}`}
      hidden={!!tabName && tabName !== state.activeTab}
      id={`tabpanel-${state.id}-${tabName}`}
      tabIndex={0}
      {...elemProps}
    >
      {children}
    </div>
  );
};

export default TabPanel;
