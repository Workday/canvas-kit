import React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

const menuId = 'control-button-menu';

export const ControlButton = () => {
  const model = usePopupModel();

  useAlwaysCloseOnOutsideClick(model);
  useReturnFocus(model);

  const isOpen = model.state.visibility !== 'hidden';

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    let isShortcut = false;
    if (event.key === `Spacebar` || event.key === ` ` || event.key === `Enter`) {
      isShortcut = true;
      if (isOpen) {
        model.events.hide();
      }
      model.events.show();
    } else if (event.key === `ArrowDown`) {
      isShortcut = true;
      model.events.show();
    } else if (event.key === `ArrowUp`) {
      isShortcut = true;
      model.events.show();
    }

    if (isShortcut) {
      // Prevent ArrowDown and ArrowUp keys from scrolling the entire page
      event.preventDefault();
    }
  };

  const handleMenuClose = () => {
    model.events.hide();
  };

  return (
    <Popup model={model}>
      <Popup.Target
        as={SecondaryButton}
        onKeyDown={handleButtonKeyDown}
        aria-expanded={isOpen}
        aria-haspopup={true}
        aria-controls={isOpen ? menuId : undefined}
      >
        Open Menu
      </Popup.Target>
      <Popup.Popper>
        <Menu id={menuId} isOpen={isOpen} onClose={handleMenuClose}>
          <MenuItem>First Item</MenuItem>
          <MenuItem>Second Item</MenuItem>
          <MenuItem>Third Item</MenuItem>
        </Menu>
      </Popup.Popper>
    </Popup>
  );
};
