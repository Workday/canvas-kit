import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {calc, createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeadStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    minHeight: calc.subtract(system.space.x16, system.space.x4),
    'th ': {
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
    },
  },
});

export const BaseTableHead = createComponent('thead')({
  displayName: 'Table.Head',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableHeadStencil())}>
        {children}
      </Element>
    );
  },
});
