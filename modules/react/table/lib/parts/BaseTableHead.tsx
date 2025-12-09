import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableHeadStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.alt.softer,
    minHeight: forwardFitTokens.system.size.xxl,
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
