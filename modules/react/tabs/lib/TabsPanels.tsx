import * as React from 'react';

import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {useRenderItems} from '@workday/canvas-kit-react/list';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

export interface TabsPanelsProps<T = unknown> {
  /**
   *
   */
  children: ((item: T) => React.ReactNode) | React.ReactNode;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases.
   */
  model?: TabsModel<T>;
}

export const TabsPanels = createComponent()({
  displayName: 'Tabs.Panels',
  Component: ({children, model}: TabsPanelsProps) => {
    const localModel = useModelContext(TabsModelContext, model);

    return <>{useRenderItems(localModel, children)}</>;
  },
});
