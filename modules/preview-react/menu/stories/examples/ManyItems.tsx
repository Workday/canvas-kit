import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const ManyItems = () => {
  return (
    <Menu>
      {'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen'
        .split(' ')
        .map(item => {
          return <MenuItem key={item}>Item {item}</MenuItem>;
        })}
    </Menu>
  );
};
