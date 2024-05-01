import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';

const tableBodyStencil = createStencil({
  base: {
    display: 'grid',
    'tr ': {
      '&:last-of-type': {
        'td, th': {
          borderBottom: 'none',
        },
      },
      '&:first-of-type': {
        'td, th': {
          borderTop: 'none',
        },
      },
    },
    'td ': {
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
    },
  },
});

export const TableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableBodyStencil())}>
        {children}
      </Element>
    );
  },
});
