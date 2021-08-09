import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const Basic = () => {
  return (
    <Menu title="Menu Title">
      <MenuItem>First Item</MenuItem>
      <MenuItem>Second Item (with a really really really long label)</MenuItem>
      <MenuItem isDisabled>Third Item (disabled)</MenuItem>
      <MenuItem>
        Fourth Item (<b>with markup</b>)
      </MenuItem>
      <MenuItem hasDivider>Fifth Item (with divider)</MenuItem>
    </Menu>
  );
};
