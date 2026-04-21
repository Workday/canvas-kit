import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface DividerProps extends CSProps {}

export const menuDividerStencil = createStencil({
  base: {
    display: 'block',
    height: px2rem(1),
    border: 'none',
    borderTop: `${px2rem(1)} solid ${cssVar(system.color.border.default, system.color.border.divider)}`,
    margin: `${system.gap.sm} ${system.gap.md}`,
  },
});

export const MenuDivider = createComponent('hr')({
  displayName: 'Menu.Divider',
  Component({...elemProps}: DividerProps, ref, Element) {
    return <Element ref={ref} {...handleCsProp(elemProps, menuDividerStencil())} />;
  },
});
