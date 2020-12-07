/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {mouseFocusBehavior} from '@workday/canvas-kit-react-common';
import React from 'react';
import {useTab} from './Tabs';
import {getLast} from './list';

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
  const {state, events} = useTab();
  const panelRef = React.useRef<HTMLDivElement>(null);
  const [tabName, setTabName] = React.useState(name);

  // useLayoutEffect so we don't an incorrect frame if a name isn't provided
  React.useLayoutEffect(() => {
    const panelElement = panelRef.current as HTMLElement;
    const nextState = events.registerPanel({element: panelElement});
    const tabName = getLast(nextState.context.panels).id;
    setTabName(tabName);

    return () => {
      events.unregisterPanel(tabName);
    };
  }, [name, events]);

  return (
    <div
      ref={panelRef}
      role="tabpanel"
      css={styles}
      aria-labelledby={`tab-${state.context.id}-${tabName}`}
      hidden={!!tabName && tabName !== state.context.activeTab}
      id={`tabpanel-${state.context.id}-${tabName}`}
      tabIndex={0}
      {...elemProps}
    >
      {children}
    </div>
  );
};

export default TabPanel;
