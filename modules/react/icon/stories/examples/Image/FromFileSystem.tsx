import React from 'react';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Image} from '@workday/canvas-kit-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';

// @ts-ignore: Cannot find module error
import catImage from '../images/cat.jpg';

const styleOverrides = {
  parentContainer: createStyles({
    maxHeight: 300,
  }),
};

export const FromFileSystem = () => {
  return (
    <Flex cs={styleOverrides.parentContainer}>
      <Image src={catImage} cs={{objectFit: 'cover', height: 200}} alt="Image of a cat mid yawn" />
    </Flex>
  );
};
