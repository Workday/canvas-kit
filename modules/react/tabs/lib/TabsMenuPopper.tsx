import * as React from 'react';

import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';
import {useMenuModel2} from './menu';
export interface MenuPopperProps extends ExtractProps<typeof Popper> {}

export const useTabsMenuPopper = usePopupPopper;

export const TabsMenuPopper = createSubcomponent('div')({
  displayName: 'Tabs.MenuPopper',
  modelHook: useMenuModel2,
  elemPropsHook: useTabsMenuPopper,
})<MenuPopperProps>(({children, ...elemProps}) => {
  return <Popper {...elemProps}>{children}</Popper>;
});
