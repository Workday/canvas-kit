import React from 'react';

import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const styles = createStyles({
  width: px2rem(100),
  height: px2rem(100),
  backgroundColor: 'gray',
});

export const CreateStyles = () => {
  return <div className={styles} />;
};
