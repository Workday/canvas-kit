import React from 'react';
import {BoxProps} from '@workday/canvas-kit-react/layout';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {ButtonSizes, IconPositions} from '../types';
import {styled, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export interface ButtonLabelIconProps extends BoxProps {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size: ButtonSizes | undefined;
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

const StyledButtonLabelIcon = styled(SystemIcon)({
  display: 'inline-block',
});

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

    const iconSize = size ? iconSizes[size] : undefined;

    return (
      <StyledButtonLabelIcon
        size={iconSize}
        icon={icon}
        shouldMirror={shouldMirrorIcon}
        width={size ? iconSizes[size] : iconSizes.medium}
        height={size ? iconSizes[size] : iconSizes.medium}
        {...elemProps}
      />
    );
  },
});
