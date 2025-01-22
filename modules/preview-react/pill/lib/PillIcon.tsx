import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';
import {calc, createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface PillIconProps extends Omit<SystemIconProps, 'icon'> {
  /**
   * The system icon rendered by the component
   * @default `plusIcon`
   */
  icon?: CanvasSystemIcon;
}

export const pillIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    display: 'flex',
    marginInlineStart: calc.multiply(system.space.x1, '-1'),
  },
});

export const PillIcon = createSubcomponent('span')({
  modelHook: usePillModel,
})<PillIconProps>(({size, icon, ...elemProps}, Element) => {
  return (
    <SystemIcon
      display="flex"
      as={Element}
      size={20}
      role="img"
      icon={icon || plusIcon}
      {...elemProps}
    />
  );
});
