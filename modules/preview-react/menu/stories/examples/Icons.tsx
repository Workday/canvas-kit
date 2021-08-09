import React from 'react';
import {setupIcon, uploadCloudIcon, userIcon, extLinkIcon} from '@workday/canvas-system-icons-web';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const Icons = () => {
  return (
    <Menu title="Menu Title">
      <MenuItem icon={setupIcon}>First menu item</MenuItem>
      <MenuItem icon={uploadCloudIcon} secondaryIcon={extLinkIcon}>
        Second menu item
      </MenuItem>
      <MenuItem isDisabled icon={userIcon}>
        Third menu item
      </MenuItem>
      <MenuItem icon={extLinkIcon}>Fourth menu item</MenuItem>
    </Menu>
  );
};
