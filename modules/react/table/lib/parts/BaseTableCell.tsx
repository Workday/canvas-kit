import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createComponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCellStencil = createStencil({
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderBottom: `${px2rem(1)} solid ${system.color.border.divider}`,
    gridTemplateColumns: '1fr',
    justifyContent: 'start',
    minHeight: forwardFitTokens.system.size.xxl,
    padding: `${forwardFitTokens.system.padding.xs} ${forwardFitTokens.system.padding.md}`,
    wordBreak: 'break-word',
  },
});

export const BaseTableCell = createComponent('td')({
  displayName: 'Table.Cell',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, baseTableCellStencil())}>
        {children}
      </Element>
    );
  },
});
