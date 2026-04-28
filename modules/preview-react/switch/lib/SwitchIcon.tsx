import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {checkSmallIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {brand, component, system} from '@workday/canvas-tokens-web';

import {SwitchProps} from './Switch';

export const switchIconStencil = createStencil({
  base: {
    [systemIconStencil.vars.color]: cssVar(system.color.fg.inverse, brand.primary.accent),
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.sm,
    position: 'absolute',
    transition: 'transform 0ms',
    pointerEvents: 'none',
    transform: `translateX(${px2rem(12)})`,
    ':dir(rtl)': {
      transform: `translateX(${px2rem(-12)})`,
    },
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${px2rem(-2)})`,
        ':dir(rtl)': {
          transform: `translateX(${px2rem(2)})`,
        },
      },
    },
  },
});

export const SwitchIcon = createComponent('div')<SwitchProps>({
  displayName: 'SwitchIcon',
  Component: ({checked, ...elemProps}, ref) => {
    return (
      <SystemIcon
        icon={checked ? checkSmallIcon : xSmallIcon}
        ref={ref}
        {...handleCsProp(elemProps, switchIconStencil({checked}))}
      />
    );
  },
});
