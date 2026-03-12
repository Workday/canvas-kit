import * as React from 'react';

import {useListRenderItems} from '@workday/canvas-kit-react/collection';
import {createSubcomponent} from '@workday/canvas-kit-react/common';

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
  return <>{useListRenderItems(model, children)}</>;
});
