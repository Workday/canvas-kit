/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {
  createComponent,
  mouseFocusBehavior,
  useMountLayout,
} from '@workday/canvas-kit-react-common';
import React from 'react';
import {useTabsModelContext} from './Tabs';

export interface TabPanelProps {
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

export const TabPanel = createComponent('div')({
  displayName: 'Tabs.Panel',
  Component: ({children, name = '', ...elemProps}: TabPanelProps, ref, Element) => {
    const {state, events} = useTabsModelContext();
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
      <Element
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
      </Element>
    );
  },
});
