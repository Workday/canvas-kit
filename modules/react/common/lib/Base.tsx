import {createComponent} from './utils/components';
import {CSProps, createStencil, handleCsProp} from '@workday/canvas-kit-styling';

export interface BaseProps extends CSProps {}

export const baseStencil = createStencil({
  base: {},
});

export const Base = createComponent('div')({
  displayName: 'Base',
  Component: ({...elemProps}: BaseProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, baseStencil())} />;
  },
});
