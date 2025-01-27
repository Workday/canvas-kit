import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface PillIconProps extends Partial<SystemIconProps> {}

export const pillIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    display: 'flex',
    marginInlineStart: calc.multiply(system.space.x1, '-1'),
    [systemIconStencil.vars.size]: px2rem(20),
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
