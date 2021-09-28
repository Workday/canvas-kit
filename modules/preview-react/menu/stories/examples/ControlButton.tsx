import React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  // TODO: Remove if not needed
  // useCloseOnEscape,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

const menuId = 'control-button-menu';

export const ControlButton = () => {
  const model = usePopupModel();

  useAlwaysCloseOnOutsideClick(model);
  // TODO: Don't need useCloseOnEscape because Menu already handles this
  // useCloseOnEscape(model);
  useReturnFocus(model);

  // TODO: Add note about useInitialFocus not being necessary since Menu already
  // is given focus when it appears

  const isOpen = model.state.visibility !== 'hidden';

  const handleKeyDown = (event: React.KeyboardEvent): void => {
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
      // event.stopPropagation();
      // TODO: Add comment explaining preventDefault
      event.preventDefault();
    }
  };

  const handleClose = () => {
    model.events.hide();
  };

  return (
    <Popup model={model}>
      <Popup.Target
        as={SecondaryButton}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup={true}
        aria-controls={isOpen ? menuId : undefined}
      >
        Open Menu
      </Popup.Target>
      <Popup.Popper>
        <Menu id={menuId} isOpen={isOpen} onClose={handleClose}>
          <MenuItem>First Item</MenuItem>
          <MenuItem>Second Item</MenuItem>
          <MenuItem>Third Item</MenuItem>
        </Menu>
      </Popup.Popper>
    </Popup>
  );
};
