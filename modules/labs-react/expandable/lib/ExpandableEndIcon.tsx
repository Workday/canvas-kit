import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {useExpandableModel} from './useExpandableModel';

export interface ExpandableEndIconProps
  extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledEndIcon = styled(SystemIcon)<{visible: boolean} & StyledType>(
  {
    marginLeft: 'auto',
  },
  ({visible}) => ({
    transform: !visible ? 'rotate(-180deg)' : undefined,
    padding: !visible
      ? `${space.xxxs} ${space.xs} ${space.xxxs} ${space.xxxs}`
      : `${space.xxxs} ${space.xxxs} ${space.xxxs} ${space.xs}`,
  })
);

export const ExpandableEndIcon = createSubcomponent('span')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableIcon,
})<ExpandableEndIconProps>(({icon, ...elementProps}, Element) => {
  return (
    <StyledEndIcon
      as={Element}
      fill={colors.licorice200}
      icon={icon || chevronUpIcon}
      {...elementProps}
    />
  );
});
