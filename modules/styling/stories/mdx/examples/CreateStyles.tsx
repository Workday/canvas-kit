import React from 'react';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.primary.default,
  color: system.color.text.inverse,
});

export const CreateStyles = () => {
  return <button className={styles}>Click Me</button>;
};
