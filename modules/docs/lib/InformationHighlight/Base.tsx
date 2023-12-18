import * as React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, handleCsProp} from '@workday/canvas-kit-styling';

export interface BaseProps extends CSProps {}

export const Base = createComponent('div')({
  displayName: 'Base',
  Component: (props: BaseProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(props)} />;
  },
});
