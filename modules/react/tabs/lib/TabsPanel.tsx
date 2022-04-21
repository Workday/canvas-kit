import React from 'react';
import styled from '@emotion/styled';

import {
  createSubcomponent,
  useMountLayout,
  createElemPropsHook,
  ExtractProps,
  hideMouseFocus,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

import {useTabsModel2} from './useTabsModel';

export interface TabPanelProps<T = unknown> extends ExtractProps<typeof Box, never> {
  /**
   * The contents of the TabPanel.
   */
  children: React.ReactNode;
  /**
   * The identifier of the tab. This identifier will be used in change events and for `initialTab`.
   * Must match the `data-id` of the associated tab item. If this property is not provided, it will
   * default to a string representation of the the zero-based index of the Tab when it was
   * initialized.
   */
  'data-id'?: string;
  /**
   * Part of the ARIA specification for tabs. By default, all `tabpanel` elements have a `tabIndex`
   * of `0` which makes the whole content area receive focus. If you have a focusable item near the
   * top of the tab panel content area, you may set `tabIndex` to `undefined` to prevent the tab
   * panel element from receiving focus. Only do this is a child of the tab panel can receive focus.
   */
  tabIndex?: number;
}

const StyledTabsPanel = styled(Box)<StyledType>(hideMouseFocus);

export const useTabsPanel = createElemPropsHook(useTabsModel2)(
  ({state, events}, _?: React.Ref<HTMLElement>, elemProps: {'data-id'?: string} = {}) => {
    const name = elemProps['data-id'];
    const [tabName, setTabName] = React.useState(elemProps['data-id'] || '');

    useMountLayout(() => {
      const index = state.panelIndexRef.current;
      const tabName = name || String(index);
      events.registerPanel({item: {id: tabName}, textValue: ''});
      setTabName(tabName);

      return () => {
        events.unregisterPanel({id: tabName});
      };
    });

    return {
      role: 'tabpanel',
      'aria-labelledby': `${state.id}-${tabName}`,
      hidden: !!tabName && tabName !== state.selectedIds[0],
      id: `tabpanel-${state.id}-${tabName}`,
      tabIndex: 0,
    };
  }
);

export const TabsPanel = createSubcomponent('div')({
  displayName: 'Tabs.Panel',
  modelHook: useTabsModel2,
  elemPropsHook: useTabsPanel,
})<TabPanelProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTabsPanel as={Element} {...elemProps}>
      {children}
    </StyledTabsPanel>
  );
});
