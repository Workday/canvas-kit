import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {checkSmallIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';

import {SwitchProps} from './Switch';

export const switchIconStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.color]: cssVar(system.color.fg.inverse, brand.primary.accent),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.size]: cssVar(system.size.xxs, system.space.x5),
    position: 'absolute',
    transition: 'transform 0ms',
    pointerEvents: 'none',
    transform: `translateX(${px2rem(11)})`,
    ':dir(rtl)': {
      transform: `translateX(${px2rem(-11)})`,
    },
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${px2rem(-3)})`,
        ':dir(rtl)': {
          transform: `translateX(${px2rem(3)})`,
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
