import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const headStyles = createStyles({
  display: 'grid',
  backgroundColor: base.soap100,
  minHeight: '48px',
  'th ': {
    '&:first-of-type': {
      borderLeft: 'none',
    },
    '&:last-of-type': {
      borderRight: 'none',
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
