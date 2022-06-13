import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {chevronDownIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {useExpandableModel} from './useExpandableModel';

export interface ExpandableStartIconProps
  extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronDownIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledStartIcon = styled(SystemIcon)<{visible: boolean} & StyledType>(
  {
    margin: `0 ${space.xxs} 0 0`,
    padding: space.xxxs,
  },
  ({visible}) => ({
    transform: !visible ? 'rotate(-90deg)' : undefined,
  })
);

export const ExpandableStartIcon = createSubcomponent('span')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableIcon,
})<ExpandableStartIconProps>(({icon, ...elementProps}, Element) => {
  return (
    <StyledStartIcon
      as={Element}
      fill={colors.licorice200}
      icon={icon || chevronDownIcon}
      {...elementProps}
    />
  );
});
