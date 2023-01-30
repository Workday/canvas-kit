import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {usePillModel} from './usePillModel';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';

export interface PillIconProps extends Omit<SystemIconProps, 'icon'> {
  /**
   * The system icon rendered by the component
   * @default `plusIcon`
   */
  icon?: CanvasSystemIcon;
}

export const PillIcon = createSubcomponent('span')({
  modelHook: usePillModel,
})<PillIconProps>(({size, icon, ...elemProps}, Element) => {
  return (
    <SystemIcon
      marginInlineStart={`-${space.xxxs}`} // remove padding on the left
      display="flex"
      as={Element}
      size={20}
      role="img"
      aria-label="add"
      icon={icon || plusIcon}
      {...elemProps}
    />
  );
});
