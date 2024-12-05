import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Image} from '@workday/canvas-kit-react/icon';

import {createStyles} from '@workday/canvas-kit-styling';

const styleOverrides = {
  parentContainer: createStyles({
    maxHeight: 300,
  }),
};

export const Basic = () => {
  return (
    <Flex cs={styleOverrides.parentContainer}>
      <Image height={200} src="https://i.imgur.com/f3FZv3H.jpeg" style={{objectFit: 'cover'}} />
    </Flex>
  );
};
