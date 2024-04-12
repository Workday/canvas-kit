import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const tableCellStencil = createStencil({
  base: {
    display: 'grid',
    alignItems: 'center',
    backgroundColor: base.frenchVanilla100,
    borderBottom: `${px2rem(1)} solid ${base.soap400}`,
    gridTemplateColumns: '1fr',
    justifyContent: 'start',
    minHeight: '3.5rem',
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
  },
});

export const TableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableCellStencil())}>
        {children}
      </Element>
    );
  },
});
