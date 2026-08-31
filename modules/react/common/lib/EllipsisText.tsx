import {CSProps, createStyles, handleCsProp} from '@workday/canvas-kit-styling';

import {createComponent} from './utils';

const ellipsisStyles = createStyles({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export interface EllipsisTextProps extends CSProps {
  children: React.ReactNode;
}

export const EllipsisText = createComponent('span')({
  displayName: 'EllipsisText',
  Component({children, ...elemProps}: EllipsisTextProps, ref, Element) {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, ellipsisStyles)}>
        {children}
      </Element>
    );
  },
});
