import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const CustomMenuItem = () => {
  return (
    <Menu title="Menu Title">
      <MenuItem>First menu item</MenuItem>
      <MenuItem>Second menu item</MenuItem>
      <li>Third menu item</li>
    </Menu>
  );
};
