import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface DividerProps extends CSProps {}

export const menuDividerStencil = createStencil({
  base: {
    display: 'block',
    height: px2rem(1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    border: cssVar(system.shape.none, system.space.zero),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderTop: `${px2rem(1)} solid ${cssVar(system.color.border.default, system.color.border.divider)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    margin: `${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.md, system.space.zero)}`,
  },
});

export const MenuDivider = createComponent('hr')({
  displayName: 'Menu.Divider',
  Component({...elemProps}: DividerProps, ref, Element) {
    return <Element ref={ref} {...handleCsProp(elemProps, menuDividerStencil())} />;
  },
});
