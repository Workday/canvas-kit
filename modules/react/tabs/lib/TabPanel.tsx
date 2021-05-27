/** @jsx jsx */
import React from 'react';
import {jsx, css} from '@emotion/core';

import {
  createComponent,
  mouseFocusBehavior,
  useLocalRef,
  useModelContext,
  useMountLayout,
} from '@workday/canvas-kit-react/common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

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
  /**
   * Part of the ARIA specification for tabs. By default, all `tabpanel` elements have a `tabIndex`
   * of `0` which makes the whole content area receive focus. If you have a focusable item near the
   * top of the tab panel content area, you may set `tabIndex` to `undefined` to prevent the tab
   * panel element from receiving focus. Only do this is a child of the tab panel can receive focus.
   */
  tabIndex?: number;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel;
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
  Component: ({children, name = '', model, ...elemProps}: TabPanelProps, ref, Element) => {
    const {state, events} = useModelContext(TabsModelContext, model);
    const [tabName, setTabName] = React.useState(name);
    const {localRef, elementRef} = useLocalRef(ref);

    useMountLayout(() => {
      const index = state.panelIndexRef.current;
      const tabName = name || String(index);
      events.registerPanel({item: {id: tabName, ref: localRef}});
      setTabName(tabName);

      return () => {
        events.unregisterPanel({id: tabName});
      };
    });

    return (
      <Element
        ref={elementRef}
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
