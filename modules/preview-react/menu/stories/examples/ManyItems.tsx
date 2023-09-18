import React from 'react';

import {DeprecatedMenu, DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';

export const ManyItems = () => {
  return (
    <DeprecatedMenu>
      {'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen'
        .split(' ')
        .map(item => {
          return <DeprecatedMenuItem key={item}>Item {item}</DeprecatedMenuItem>;
        })}
    </DeprecatedMenu>
  );
};
