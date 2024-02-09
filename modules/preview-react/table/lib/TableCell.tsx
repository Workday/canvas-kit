import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const cellStyles = createStyles({
  display: 'grid',
  alignItems: 'center',
  backgroundColor: base.frenchVanilla100,
  borderBottom: `${px2rem(1)} solid ${base.soap400}`,
  gridTemplateColumns: '1fr',
  justifyContent: 'start',
  minHeight: '3.5rem',
  padding: `${system.space.x2} ${system.space.x4}`,
  wordBreak: 'break-word',
  boxSizing: 'border-box',
});

export const TableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, cellStyles)}>
        {children}
      </Element>
    );
  },
});
