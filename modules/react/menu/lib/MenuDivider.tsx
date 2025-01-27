import * as React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, cssVar, px2rem, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface DividerProps extends CSProps {}

export const dividerStencil = createStencil({
  base: {
    display: 'block',
    height: px2rem(1),
    border: 0,
    borderTop: `${px2rem(1)} solid ${cssVar(system.color.border.divider)}`,
    margin: `${cssVar(system.space.x2)} 0`,
  },
});

export const MenuDivider = createComponent('hr')({
  displayName: 'Menu.Divider',
  Component({...elemProps}: DividerProps, ref, Element) {
    return <Element ref={ref} {...handleCsProp(elemProps, dividerStencil())} />;
  },
});
