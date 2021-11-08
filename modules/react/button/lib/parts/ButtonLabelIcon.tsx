import * as React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';
import isPropValid from '@emotion/is-prop-valid';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {styled} from '@workday/canvas-kit-react/common';

type ButtonSizes = 'extraSmall' | 'small' | 'medium' | 'large';

export interface ButtonLabelIconProps {
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
   * The position of the TertiaryButton icon.
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
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

const getIconPositionStyles = ({iconPosition, size}: ButtonLabelIconProps) => {
  // Adjust margin values for visual balance, large buttons require 8px
  const balancingMargin = size === 'large' ? space.xxs : space.xxxs;
  // iconPosition can only be "right", "left", or undefined (defaults to "left")
  if (iconPosition === 'right') {
    return {
      marginLeft: undefined,
      marginRight: `-${balancingMargin} !important`,
    };
  } else {
    return {
      marginLeft: `-${balancingMargin} !important`,
      marginRight: undefined,
    };
  }
};

const ButtonLabelIconStyled = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelIconProps>(
  {
    display: 'inline-block',
  },
  ({size}) => ({
    width: size ? iconSizes[size] : iconSizes.medium,
    height: size ? iconSizes[size] : iconSizes.medium,
  }),
  getIconPositionStyles
);

export const ButtonLabelIcon = ({
  icon,
  size,
  iconPosition,
  shouldMirrorIcon = false,
  ...elemProps
}: ButtonLabelIconProps) => {
  if (icon === undefined) {
    return null;
  }

  const iconSize = size ? iconSizes[size] : undefined;

  return (
    <ButtonLabelIconStyled iconPosition={iconPosition} size={size} {...elemProps}>
      <SystemIcon size={iconSize} icon={icon} shouldMirror={shouldMirrorIcon} />
    </ButtonLabelIconStyled>
  );
};
