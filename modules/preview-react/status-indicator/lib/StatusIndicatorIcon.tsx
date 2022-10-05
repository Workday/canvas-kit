import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface StatusIndicatorIconProps extends Omit<SystemIconProps, 'icon'> {
  /**
   * The system icon rendered by the component
   * @default `plusIcon`
   */
  icon?: CanvasSystemIcon;
}

export const StatusIndicatorIcon = createComponent('span')({
  displayName: 'StatusIndicator.Icon',
  Component: ({icon, ...elemProps}: StatusIndicatorIconProps, ref, Element) => {
    return (
      <SystemIcon
        as={Element}
        size={14}
        role="img"
        aria-label="add"
        ref={ref}
        icon={icon || plusIcon}
        {...elemProps}
      />
    );
  },
});
