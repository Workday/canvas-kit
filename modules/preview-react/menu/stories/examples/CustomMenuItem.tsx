import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const CustomMenuItem = () => {
  return (
    <Menu title="Menu Title">
      <MenuItem>First Item</MenuItem>
      <MenuItem>Second Item</MenuItem>
      <li role="menuItem" id="customMenu-3" tabIndex={-1} style={{listStyle: 'none'}}>
        Third Item (custom)
      </li>
    </Menu>
  );
};
