import * as React from 'react';
import {space} from '@workday/canvas-kit-react/core';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonProps} from '../Button';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {styled} from '@workday/canvas-kit-react/common';

export interface ButtonLabelIconProps extends Pick<ButtonProps, 'size' | 'icon'> {
  dropdown?: boolean;
  iconPosition?: 'left' | 'right';
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
  ({iconPosition, dropdown}) => ({
    marginLeft:
      iconPosition === 'right' ? undefined : `-${dropdown ? space.xxs : space.xxxs} !important`,
    marginRight:
      iconPosition === 'right' ? `-${dropdown ? space.xxs : space.xxxs} !important` : undefined,
  })
);

export const ButtonLabelIcon = ({
  icon,
  size,
  dropdown,
  iconPosition,
  ...elemProps
}: ButtonLabelIconProps) => {
  /* istanbul ignore next line for coverage */
  if (icon === undefined) {
    return null;
  }

  const iconSize = size === 'small' ? SMALL_ICON_SIZE : undefined;

  return (
    <ButtonLabelIconStyled
      iconPosition={iconPosition}
      dropdown={dropdown}
      size={size}
      {...elemProps}
    >
      <SystemIcon size={iconSize} icon={icon} />
    </ButtonLabelIconStyled>
  );
};
