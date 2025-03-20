import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';

export const baseTableBodyStencil = createStencil({
  base: {
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

export const BaseTableBody = createComponent('tbody')({
  displayName: 'Table.Body',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableBodyStencil())}>
        {children}
      </Element>
    );
  },
});
