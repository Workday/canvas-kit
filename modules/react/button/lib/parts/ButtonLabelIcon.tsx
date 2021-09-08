import * as React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {space} from '@workday/canvas-kit-react/tokens';
import isPropValid from '@emotion/is-prop-valid';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {styled} from '@workday/canvas-kit-react/common';

export interface ButtonLabelIconProps {
  /**
   * The size of the Button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
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

const ICON_SIZE = 24;
const SMALL_ICON_SIZE = 20;

const ButtonLabelIconStyled = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelIconProps>(
  {
    display: 'inline-block',
  },
  ({size}) => ({
    width: size === 'small' ? SMALL_ICON_SIZE : ICON_SIZE,
    height: size === 'small' ? SMALL_ICON_SIZE : ICON_SIZE,
  }),
  ({iconPosition}) => ({
    marginLeft: iconPosition === 'right' ? undefined : `-${space.xxxs} !important`,
    marginRight: iconPosition === 'right' ? `-${space.xxxs} !important` : undefined,
  })
);

export const ButtonLabelIcon = ({
  icon,
  size,
  iconPosition,
  shouldMirrorIcon = false,
  ...elemProps
}: ButtonLabelIconProps) => {
  /* istanbul ignore next line for coverage */
  if (icon === undefined) {
    return null;
  }

  const iconSize = size === 'small' ? SMALL_ICON_SIZE : undefined;

  return (
    <ButtonLabelIconStyled iconPosition={iconPosition} size={size} {...elemProps}>
      <SystemIcon size={iconSize} icon={icon} shouldMirror={shouldMirrorIcon} />
    </ButtonLabelIconStyled>
  );
};
