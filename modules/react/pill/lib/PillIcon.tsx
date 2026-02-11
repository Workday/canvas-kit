import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {usePillModel} from './usePillModel';

export interface PillIconProps extends Partial<SystemIconProps> {}

export const pillIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    marginInlineStart: calc.negate(system.space.x1),
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
      {...mergeStyles(elemProps, pillIconStencil())}
    />
  );
});
