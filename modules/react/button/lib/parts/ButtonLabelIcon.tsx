import React from 'react';
import {ButtonSizes} from '../types';
import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';

export interface ButtonLabelIconProps extends Partial<SystemIconProps> {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
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
