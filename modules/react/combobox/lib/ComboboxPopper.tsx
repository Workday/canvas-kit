import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {usePopupPopper, Popper} from '@workday/canvas-kit-react/popup';

import {Menu, useMenuModel} from '@workday/canvas-kit-react/menu';

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
