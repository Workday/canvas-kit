import React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonSizes, IconPositions} from '../types';
import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {BoxProps} from '@workday/canvas-kit-react/layout';

export interface ButtonLabelIconProps extends BoxProps {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `left` or `right`.
   * If no value is provided, it defaults to `left`.
   * @default 'start'
   */
  iconPosition?: IconPositions;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic
   * @default false
   */
  shouldMirrorIcon?: boolean;
}

const iconSizes: Record<ButtonSizes, number> = {
  extraSmall: 18,
  small: 20,
  medium: 20,
  large: 24,
};

export const ButtonLabelIcon = createComponent('span')({
  displayName: 'ButtonLabelIconNew',
  Component: (
    {icon, size = 'medium', shouldMirrorIcon = false, ...elemProps}: ButtonLabelIconProps,
    ref,
    Element
  ) => {
    if (icon === undefined) {
      return null;
    }

    const iconSize = iconSizes[size];

    return (
      <SystemIcon
        size={iconSize}
        icon={icon}
        shouldMirror={shouldMirrorIcon}
        width={size ? iconSizes[size] : iconSizes.large}
        height={size ? iconSizes[size] : iconSizes.large}
        display="inline-block"
        {...elemProps}
      />
    );
  },
});
