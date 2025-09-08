import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';
import {useMenuModel} from '@workday/canvas-kit-react/menu';
export interface TabsMenuPopperProps extends ExtractProps<typeof Popper> {}

export const useTabsMenuPopper = usePopupPopper;

export const TabsMenuPopper = createSubcomponent('div')({
  displayName: 'Tabs.MenuPopper',
  modelHook: useMenuModel,
  elemPropsHook: useTabsMenuPopper,
})<TabsMenuPopperProps>(({children, ...elemProps}) => {
  return <Popper {...elemProps}>{children}</Popper>;
});
