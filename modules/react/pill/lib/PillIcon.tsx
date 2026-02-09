import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {usePillModel} from './usePillModel';

export interface PillIconProps extends Partial<SystemIconProps> {}

export const pillIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginInlineStart: calc.negate(cssVar(system.padding.xxs, system.space.x1)),
    [systemIconStencil.vars.size]: px2rem(20),
    flex: '0 0 auto',
  },
});

export const PillIcon = createSubcomponent('span')({
  modelHook: usePillModel,
})<PillIconProps>(({icon, ...elemProps}, Element) => {
  return (
    <SystemIcon
      as={Element}
      role="img"
      icon={icon || plusIcon}
      {...handleCsProp(elemProps, pillIconStencil())}
    />
  );
});
