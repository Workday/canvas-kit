import React from 'react';

import {createModifiers} from '@workday/canvas-kit-styling';
import {px2rem} from '../../lib/px2rem';

const myModifiers = createModifiers({
  size: {
    large: {
      backgroundColor: 'lightgray',
      width: px2rem(100),
      height: px2rem(100),
    },
    small: {
      backgroundColor: 'lightgray',
      width: px2rem(50),
      height: px2rem(50),
    },
  },
});

export const CreateModifiers = () => {
  return (
    <>
      <div className={myModifiers({size: 'large'})}>Large</div>
      <div className={myModifiers({size: 'small'})}>Small</div>
    </>
  );
};
