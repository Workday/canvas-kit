import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {SwitchProps} from './Switch';

export const switchCircleStencil = createStencil({
  base: {
    width: system.legacy.size.xxxs,
    height: system.legacy.size.xxxs,
    borderRadius: system.legacy.shape.full,
    // This is used in "High Contrast Mode" to show a border on the Switch thumb.
    border: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
    backgroundColor: system.color.fg.inverse,
    transform: 'translateX(0)',
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${px2rem(14)})`,
        ':dir(rtl)': {
          transform: `translateX(${px2rem(-14)})`,
        },
      },
    },
  },
});

export const SwitchCircle = createComponent('div')<SwitchProps>({
  displayName: 'SwitchCircle',
  Component: ({checked, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, switchCircleStencil({checked}))} />;
  },
});
