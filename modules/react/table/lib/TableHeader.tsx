import React from 'react';
import {GridProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tableHeaderStencil = createStencil({
  base: {
    display: 'grid',
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    justifyContent: 'start',
    minHeight: calc.subtract(system.space.x16, system.space.x2),
    padding: `${system.space.x2} ${system.space.x4}`,
    wordBreak: 'break-word',
    fontWeight: system.fontWeight.medium,
  },
});

export const TableHeader = createComponent('th')({
  displayName: 'Table.Header',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, tableHeaderStencil())}>
        {children}
      </Element>
    );
  },
});
