import * as React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {useListRenderItems} from '@workday/canvas-kit-react/list';

import {useTabsModel2} from './useTabsModel';

export interface TabsPanelsProps<T = unknown> {
  /**
   *
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
}

export const TabsPanels = createSubcomponent()({
  displayName: 'Tabs.Panels',
  modelHook: useTabsModel2,
})<TabsPanelsProps>(({children}, _, model) => {
  return <>{useListRenderItems(model, children)}</>;
});
