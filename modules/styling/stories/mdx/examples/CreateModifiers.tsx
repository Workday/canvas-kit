import React from 'react';

import {createModifiers, createStyles} from '@workday/canvas-kit-styling';

const myModifiers = createModifiers({
  size: {
    large: createStyles({
      backgroundColor: 'lightgray',
      width: 100,
      height: 100,
    }),
    small: createStyles({
      backgroundColor: 'lightgray',
      width: 50,
      height: 50,
    }),
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
