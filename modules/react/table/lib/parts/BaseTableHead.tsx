import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeadStencil = createStencil({
  base: {
    backgroundColor: system.legacy.color.surface.raised,
    minHeight: calc.subtract(system.legacy.size.xxl, system.legacy.size.xxxs),
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
