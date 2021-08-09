import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const ManyItems = () => {
  const [value, setValue] = React.useState('');

  const handleClick = (event: React.MouseEvent) => {
    setValue(event.target.value);
  };

  return (
    <Menu title="Menu Titles">
      {'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen'
        .split(' ')
        .map(item => {
          return <MenuItem onClick={handleClick}>{item} menu item</MenuItem>;
        })}
    </Menu>
  );
};
