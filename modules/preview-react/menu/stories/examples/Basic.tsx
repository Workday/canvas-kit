import React from 'react';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useAlwaysCloseOnOutsideClick,
  useReturnFocus,
  useCloseOnEscape,
} from '@workday/canvas-kit-react/popup';

const menuId = 'basic-menu';

export const Basic = () => {
  const model = usePopupModel();

  useAlwaysCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useReturnFocus(model);

  const isOpen = model.state.visibility !== 'hidden';

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    let isShortcut = false;
    if (event.key === `Spacebar` || event.key === ` ` || event.key === `Enter`) {
      isShortcut = true;
      if (isOpen) {
        model.events.hide();
      } else {
        model.events.show();
      }
    } else if (event.key === `ArrowDown` || event.key === `ArrowUp`) {
      isShortcut = true;
      model.events.show();
    }

    if (isShortcut) {
      // Prevent ArrowDown and ArrowUp keys from scrolling the entire page
      event.preventDefault();
    }
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
      <Popup.Popper placement="bottom-start">
        {/*
          isOpen must be set for focus to be properly assigned to the Menu;
          onClose must be set in order to the Menu to close properly after
          selecting a MenuItem
        */}
        <Menu id={menuId} isOpen={isOpen} onClose={model.events.hide}>
          <MenuItem>First Item</MenuItem>
          <MenuItem>Second Item (with a really really really long label)</MenuItem>
          <MenuItem isDisabled>Third Item (disabled)</MenuItem>
          <MenuItem>
            Fourth Item (<b>with markup</b>)
          </MenuItem>
          <MenuItem hasDivider>Fifth Item (with divider)</MenuItem>
        </Menu>
      </Popup.Popper>
    </Popup>
  );
};
