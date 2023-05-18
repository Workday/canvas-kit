import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {chevronUpIcon, chevronDownIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {IconPositions} from '@workday/canvas-kit-react/button';
import {colors, space} from '@workday/canvas-kit-react/tokens';

import {useExpandableModel} from './hooks/useExpandableModel';

export interface ExpandableIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   * @default 'start'
   */
  iconPosition?: IconPositions;
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

const StyledStartIcon = styled(SystemIcon)<{visible: boolean} & StyledType>(
  {
    margin: `0 ${space.xxs} 0 0`,
    padding: space.xxxs,
  },
  ({visible}) => ({
    transform: !visible ? 'rotate(-90deg)' : undefined,
  })
);

export const ExpandableIcon = createSubcomponent('span')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableIcon,
})<ExpandableIconProps>(({icon, visible, iconPosition = 'start', ...elementProps}, Element) =>
  iconPosition === 'end' ? (
    <StyledEndIcon
      as={Element}
      fill={colors.licorice200}
      icon={icon || chevronUpIcon}
      visible={visible}
      {...elementProps}
    />
  ) : (
    <StyledStartIcon
      as={Element}
      fill={colors.licorice200}
      icon={icon || chevronDownIcon}
      visible={visible}
      {...elementProps}
    />
  )
);
