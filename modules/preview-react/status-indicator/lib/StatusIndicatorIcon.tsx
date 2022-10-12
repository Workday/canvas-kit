import React from 'react';

import {createComponent, createSubcomponent} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {plusIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useStatusIndicatorModel} from './hooks';

export interface StatusIndicatorIconProps extends Omit<SystemIconProps, 'icon'> {
  /**
   * The system icon rendered by the component
   * @default `plusIcon`
   */
  icon: CanvasSystemIcon;
}

// export const StatusIndicatorIcon = createComponent('span')({
//   displayName: 'StatusIndicator.Icon',
//   Component: ({icon, ...elemProps}: StatusIndicatorIconProps, ref, Element) => {
//     return (
//       <SystemIcon
//         as={Element}
//         size={20}
//         role="img"
//         ref={ref}
//         color="inherit"
//         colorHover="initial"
//         icon={icon || plusIcon}
//         {...elemProps}
//       />
//     );
//   },
// });

export const StatusIndicatorIcon = createSubcomponent('span')({
  modelHook: useStatusIndicatorModel,
})<StatusIndicatorIconProps>(({icon, ...elemProps}, Element, model) => {
  const {state} = model;
  return (
    <SystemIcon
      as={Element}
      size={20}
      role="img"
      color={}
      colorHover="initial"
      icon={icon || plusIcon}
      {...elemProps}
    />
  );
});
