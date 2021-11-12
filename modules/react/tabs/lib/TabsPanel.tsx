import React from 'react';
import styled from '@emotion/styled';

import {
  createComponent,
  useModelContext,
  useMountLayout,
  createHook,
  ExtractProps,
  hideMouseFocus,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

export interface TabPanelProps<T = unknown> extends ExtractProps<typeof Box, never> {
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
  model?: TabsModel<T>;
}

const StyledTabsPanel = styled(Box)<StyledType>(hideMouseFocus);

export const useTabsPanel = createHook(
  ({state, events}: TabsModel, _?: React.Ref<HTMLElement>, elemProps: {name?: string} = {}) => {
    const name = elemProps.name;
    const [tabName, setTabName] = React.useState(elemProps.name || '');

    useMountLayout(() => {
      const index = state.panelIndexRef.current;
      const tabName = name || String(index);
      events.registerPanel({item: {id: tabName, data: {}}});
      setTabName(tabName);

      return () => {
        events.unregisterPanel({id: tabName});
      };
    });

    return {
      role: 'tabpanel',
      'aria-labelledby': `${state.id}-${tabName}`,
      hidden: !!tabName && tabName !== state.selectedKeys[0],
      id: `tabpanel-${state.id}-${tabName}`,
      tabIndex: 0,
    };
  }
);

export const TabsPanel = createComponent('div')({
  displayName: 'Tabs.Panel',
  Component: ({children, model, ...elemProps}: TabPanelProps, ref, Element) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useTabsPanel(localModel, elemProps, ref);

    return (
      <StyledTabsPanel as={Element} {...props}>
        {children}
      </StyledTabsPanel>
    );
  },
});
