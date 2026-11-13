import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const baseTableHeaderStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.default,
    borderBlockEnd: `${px2rem(1)} solid ${system.color.border.default}`,
    justifyContent: 'start',
    minHeight: calc.subtract(system.size.xxl, base.size100),
    padding: system.padding.md,
    wordBreak: 'break-word',
    fontWeight: system.fontWeight.medium,
    color: system.color.fg.strong,
  },
});

export const BaseTableHeader = createComponent('th')({
  displayName: 'Table.Header',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableHeaderStencil())}>
        {children}
      </Element>
    );
  },
});
