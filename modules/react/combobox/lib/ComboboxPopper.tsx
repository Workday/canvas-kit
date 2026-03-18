import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';
import {Popper, usePopupPopper} from '@workday/canvas-kit-react/popup';

export const useMenuPopper = usePopupPopper;

export const ComboboxMenuPopper = createSubcomponent('div')({
  displayName: 'Combobox.Menu.Popper',
  modelHook: useMenuModel,
  elemPropsHook: useMenuPopper,
})<ExtractProps<typeof Popper>>(({children, ...elemProps}) => {
  return (
    <Menu.Popper fallbackPlacements={['top', 'bottom']} {...elemProps}>
      {children}
    </Menu.Popper>
  );
});
