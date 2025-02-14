import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';

const tableFooterStencil = createStencil({
  base: {
    // display: 'grid',
  },
});

export const TableFooter = createComponent('tfoot')({
  displayName: 'Table.Footer',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableFooterStencil())}>
        {children}
      </Element>
    );
  },
});
