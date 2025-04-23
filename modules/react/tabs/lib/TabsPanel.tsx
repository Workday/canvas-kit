import React from 'react';
import styled from '@emotion/styled';

import {
  createSubcomponent,
  useMountLayout,
  createElemPropsHook,
  ExtractProps,
  StyledType,
  slugify,
} from '@workday/canvas-kit-react/common';
import {ListRenderItemContext} from '@workday/canvas-kit-react/collection';
import {Box} from '@workday/canvas-kit-react/layout';

import {useTabsModel} from './useTabsModel';

export interface TabPanelProps extends ExtractProps<typeof Box, never> {
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

const StyledTabsPanel = styled(Box)<StyledType>();

export const useTabsPanel = createElemPropsHook(useTabsModel)(
  ({state, events}, _, elemProps: {'data-id'?: string} = {}) => {
    const {item} = React.useContext(ListRenderItemContext);
    const [localId, setLocalId] = React.useState(elemProps['data-id'] || item?.id || '');

    useMountLayout(() => {
      if (item) {
        return;
      }
      const defaultId = state.panelIndexRef.current;
      const itemId = localId || String(defaultId);
      events.registerPanel({id: itemId, textValue: ''});
      setLocalId(itemId);

      return () => {
        events.unregisterPanel({id: itemId});
      };
    });

    return {
      role: 'tabpanel' as const,
      'aria-labelledby': slugify(`${state.id}-${localId}`),
      hidden: !!localId && localId !== state.selectedIds[0],
      id: slugify(`tabpanel-${state.id}-${localId}`),
      tabIndex: 0 as const,
    };
  }
);

export const TabsPanel = createSubcomponent('div')({
  displayName: 'Tabs.Panel',
  modelHook: useTabsModel,
  elemPropsHook: useTabsPanel,
})<TabPanelProps>(({children, ...elemProps}, Element) => {
  return (
    <StyledTabsPanel as={Element} {...elemProps}>
      {children}
    </StyledTabsPanel>
  );
});
