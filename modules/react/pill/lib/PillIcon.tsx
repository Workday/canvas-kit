import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {calc, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {usePillModel} from './usePillModel';

export interface PillIconProps extends Partial<SystemIconProps> {}

export const pillIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    marginInlineStart: calc.negate(system.gap.xs),
    [systemIconStencil.vars.size]: cssVar(component.systemIcon.size.sm, px2rem(18)),
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
