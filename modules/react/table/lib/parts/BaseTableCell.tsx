import {createComponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCellStencil = createStencil({
  base: {
    alignItems: 'center',
    backgroundColor: system.color.bg.default,
    borderBlockEnd: `${px2rem(1)} solid ${system.legacy.color.border.default}`,
    gridTemplateColumns: '1fr',
    justifyContent: 'start',
    minHeight: '3.5rem',
    padding: `${system.legacy.padding.xs} ${system.legacy.padding.md}`,
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
