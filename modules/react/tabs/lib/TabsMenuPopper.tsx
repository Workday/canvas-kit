import * as React from 'react';

import {createComponent, ExtractProps, useModelContext} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {TabsModelContext} from './Tabs';
import {TabsModel} from './useTabsModel';

export interface MenuPopperProps<T = unknown> extends ExtractProps<typeof Popper> {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: TabsModel<T>;
}

export const TabsMenuPopper = createComponent('div')({
  displayName: 'Tabs.MenuPopper',
  Component: ({children, model, ...elemProps}: MenuPopperProps, ref) => {
    const localModel = useModelContext(TabsModelContext, model);

    const props = useTabsMenuPopper(localModel.menu, elemProps, ref);
    return <Popper {...props}>{children}</Popper>;
  },
});

export const useTabsMenuPopper = usePopupPopper;
