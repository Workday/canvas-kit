import React from 'react';

import {createStyles} from '@workday/canvas-kit-styling';

const styles = createStyles({
  width: 100,
  height: 100,
  backgroundColor: 'gray',
});

export const CreateStyles = () => {
  return <div className={styles} />;
};
