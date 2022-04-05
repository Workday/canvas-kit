import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
// import {Box, BoxProps} from '@workday/canvas-kit-react/layout';
// import {colors, space} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';

export interface PillIconProps extends SystemIconProps {
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'start'
   */
  iconPosition?: 'start' | 'end';
}

export const PillIcon = createComponent('span')({
  displayName: 'Pill.Icon',
  Component: ({size, ...elemProps}: PillIconProps, ref, Element) => {
    return <SystemIcon ref={ref} as={Element} size={20} {...elemProps} />;
  },
});
