import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {PillModel} from './usePillModel';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';

export interface PillIconProps extends Omit<SystemIconProps, 'icon'> {
  model?: PillModel;
  icon?: CanvasSystemIcon;
}

export const PillIcon = createComponent('span')({
  displayName: 'Pill.Icon',
  Component: ({size, model, icon, ...elemProps}: PillIconProps, ref, Element) => {
    return (
      <SystemIcon
        marginInlineStart={`-${space.xxxs}`}
        display="flex"
        ref={ref}
        as={Element}
        size={20}
        icon={icon || plusIcon}
        {...elemProps}
      />
    );
  },
});
