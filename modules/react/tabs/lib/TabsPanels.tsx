import * as React from 'react';

import {space, commonColors} from '@workday/canvas-kit-react/tokens';
import {
  composeHooks,
  createComponent,
  createHook,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

export interface TabsPanelsProps<T> {
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

export const TabsList = createComponent()({
  displayName: 'Tabs.Panels',
  Component: ({children, model}: TabsPanelsProps<unknown>) => {
    const localModel = useModelContext(TabsModelContext, model);

    return (
      <>
        {typeof children === 'function'
          ? localModel.state.items.map(item => children(item))
          : children}
      </>
    );
  },
});
