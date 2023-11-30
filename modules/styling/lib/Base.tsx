import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, CSProps, handleCsProp} from './cs';

export function mergeClassNames(classNames: string[]) {
  return classNames
    .reduce((acc: string = '', className) => {
      if (className) {
        // eslint-disable-next-line no-param-reassign
        acc += ` ${className}`;
      }
      return acc;
    }, '')
    .trim();
}

export interface BaseProps extends CSProps {
  className?: string;
  stencil?: string;
  children?: React.ReactNode;
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
  Component: ({className = '', stencil = '', ...elemProps}: BaseProps, ref, Element) => {
    const classNames = mergeClassNames([baseStyles, stencil, className]);
    return <Element ref={ref} {...handleCsProp({className: classNames, ...elemProps})} />;
  },
});
