import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp} from '@workday/canvas-kit-styling';

export interface ImageProps extends CSProps {}

export const Image = createComponent('img')({
  displayName: 'Image',
  Component: ({...elemProps}: ImageProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps)} />;
  },
});
