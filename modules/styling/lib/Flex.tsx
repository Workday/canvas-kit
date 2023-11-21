import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, CSProps, csToProps, handleCsProp} from './cs';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface MyProps extends CSProps {
  children: React.ReactNode;
}

const flexStyles = createStyles({
  display: 'flex',
});
export const Flex = createComponent('div')({
  displayName: 'Box',
  Component: ({children, ...elemProps}: MyProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, flexStyles)}>
        {children}
      </Element>
    );
  },
});
