import React from 'react';

import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';

export const CustomMenuItem = () => {
  return (
    <DeprecatedMenu>
      <DeprecatedMenuItem>First Item</DeprecatedMenuItem>
      <DeprecatedMenuItem>Second Item</DeprecatedMenuItem>
      <li role="menuitem" tabIndex={-1} style={{listStyle: 'none'}}>
        Third Item (custom)
      </li>
    </DeprecatedMenu>
  );
};
