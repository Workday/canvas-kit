import React from 'react';

import {createStyles, createVars, cssVar, px2rem} from '@workday/canvas-kit-styling';

const myVars = createVars('background');

const styles = createStyles({
  width: px2rem(100),
  height: px2rem(100),
  backgroundColor: cssVar(myVars.background),
});

export const CreateVars = () => {
  return (
    <>
      <div className={styles} style={myVars({background: 'gray'})} />
      <div className={styles} style={myVars({background: 'blue'})} />
    </>
  );
};
