import React from 'react';
import {
  setupIcon,
  uploadCloudIcon,
  userIcon,
  extLinkIcon,
  taskContactIcon,
} from '@workday/canvas-system-icons-web';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const Icons = () => {
  return (
    <Menu>
      <MenuItem icon={uploadCloudIcon}>First Item</MenuItem>
      <MenuItem icon={setupIcon}>Second Item (with a really really really long label)</MenuItem>
      <MenuItem isDisabled icon={uploadCloudIcon} secondaryIcon={taskContactIcon}>
        Third Item
      </MenuItem>
      <MenuItem icon={userIcon}></MenuItem>
      <MenuItem hasDivider icon={taskContactIcon}>
        Fifth Item (with divider)
      </MenuItem>
    </Menu>
  );
};
