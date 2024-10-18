import React from 'react';

import {createStyles, createVars, cssVar} from '@workday/canvas-kit-styling';

const myVars = createVars('background');

const styles = createStyles({
  width: 100,
  height: 100,
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
