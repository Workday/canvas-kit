import React from 'react';
import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';
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
          isOpen must be set for focus to be properly assigned to the DeprecatedMenu;
          onClose must be set in order to the DeprecatedMenu to close properly after
          selecting a DeprecatedMenuItem
        */}
        <DeprecatedMenu id={menuId} isOpen={isOpen} onClose={model.events.hide}>
          <DeprecatedMenuItem>First Item</DeprecatedMenuItem>
          <DeprecatedMenuItem>
            Second Item (with a really really really long label)
          </DeprecatedMenuItem>
          <DeprecatedMenuItem isDisabled>Third Item (disabled)</DeprecatedMenuItem>
          <DeprecatedMenuItem>
            Fourth Item (<b>with markup</b>)
          </DeprecatedMenuItem>
          <DeprecatedMenuItem hasDivider>Fifth Item (with divider)</DeprecatedMenuItem>
        </DeprecatedMenu>
      </Popup.Popper>
    </Popup>
  );
};
