import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';

const footerStyles = createStyles({
  display: 'grid',
  boxSizing: 'border-box',
});

export const TableFooter = createComponent('tfoot')({
  displayName: 'Table.Footer',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, footerStyles)}>
        {children}
      </Element>
    );
  },
});
