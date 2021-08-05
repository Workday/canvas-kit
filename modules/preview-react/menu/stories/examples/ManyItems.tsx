import React from 'react';

import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleClick = (event: React.MouseEvent) => {
    setValue(event.target.value);
  };

  return (
    <Menu title="Menu Titles">
      <MenuItem onClick={handleClick}>First menu item</MenuItem>
      <MenuItem onClick={handleClick}>Second menu item</MenuItem>
    </Menu>
  );
};
