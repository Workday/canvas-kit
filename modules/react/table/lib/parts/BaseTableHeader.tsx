import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

export const baseTableHeaderStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.default,
    borderBlockEnd: `${px2rem(1)} solid ${system.legacy.color.border.default}`,
    justifyContent: 'start',
    minHeight: calc.subtract(system.legacy.size.xxl, base.legacy.size100),
    padding: `${system.legacy.padding.xs} ${system.legacy.padding.md}`,
    wordBreak: 'break-word',
    fontWeight: system.fontWeight.medium,
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
