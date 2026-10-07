import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {useTabsListRenderItems} from './TabsList';
import {useTabsModel} from './useTabsModel';

export interface TabsPanelsProps<T = any> {
  /**
   *
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

export const TabsPanels = createSubcomponent()({
  displayName: 'Tabs.Panels',
  modelHook: useTabsModel,
})<TabsPanelsProps>(({children}, _, model) => {
  return <>{useTabsListRenderItems(model, children)}</>;
});
