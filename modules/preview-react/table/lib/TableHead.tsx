import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const headStyles = createStyles({
  display: 'grid',
  backgroundColor: base.soap100,
  minHeight: '3rem',
  boxSizing: 'border-box',
  'th ': {
    '&:first-of-type': {
      borderInlineStart: 'none',
    },
    '&:last-of-type': {
      borderInlineEnd: 'none',
    },
  },
});

export const TableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, headStyles)}>
        {children}
      </Element>
    );
  },
});
