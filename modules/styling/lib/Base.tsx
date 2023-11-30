import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStyles, CSProps} from './cs';

export interface BaseProps extends CSProps {
  children: React.ReactNode;
}

const baseStyles = createStyles({
  boxSizing: 'border-box',
});

/**
 * Base is meant to be a low level API that extends the `cs` prop so that you can quickly style an element without creating a component.
 *
 * ```tsx
 * import {Base} from '@workday/canvas-kit-styling'
 *
 * const MyComponent = ({}) => {
 *  return (
 *    <Base cs={{padding: '10px'}} as='ul'>
 *      <Base as='li' cs={{color: 'blue'}}>Pizza</Base>
 *      <Base as='li' cs={{color: 'red'}}>Cheese Burger</Base>
 *    </Base>
 *  )
 * }
 * ```
 */
export const Base = createComponent('div')({
  displayName: 'MyComponent',
  Component: ({children, ...elemProps}: BaseProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, [baseStyles])}>
        {children}
      </Element>
    );
  },
});
