import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, createVars} from '@workday/canvas-kit-styling';

const childrenVars = createVars('cellNumber');

// Styles for rows including dynamic sizing for amount of cells within a row
const TableRowStencil = createStencil({
  base: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: `repeat(${childrenVars.cellNumber}, minmax(10rem, 1fr))`,
  },
});

export const TableRow = createComponent('tr')({
  displayName: 'Table.Row',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    // This calculates the amount of valid React children cells within the row and will update the gridTemplateColumns style property with that amount of cells within the row
    const validChildren = (children: React.ReactNode) => {
      return React.Children.toArray(children).filter(child =>
        React.isValidElement(child)
      ) as React.ReactElement[];
    };
    /**
     * This is the calculated amount of valid React children
     */
    const childrenArray = validChildren(children).length;

    return (
      <Element
        ref={ref}
        {...mergeStyles(elemProps, [TableRowStencil(), {[childrenVars.cellNumber]: childrenArray}])}
      >
        {children}
      </Element>
    );
  },
});
