import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const ManyItems = () => {
  return (
    <Menu title="Menu Titles">
      {'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen'
        .split(' ')
        .map(item => {
          return <MenuItem>Item {item}</MenuItem>;
        })}
    </Menu>
  );
};
