import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';
import {Popper, usePopupPopper} from '@workday/canvas-kit-react/popup';

export interface TabsMenuPopperProps extends ExtractProps<typeof Popper> {}

export const useTabsMenuPopper = usePopupPopper;

export const TabsMenuPopper = createSubcomponent('div')({
  displayName: 'Tabs.MenuPopper',
  modelHook: useMenuModel,
  elemPropsHook: useTabsMenuPopper,
})<TabsMenuPopperProps>(({children, ...elemProps}) => {
  return <Popper {...elemProps}>{children}</Popper>;
});
