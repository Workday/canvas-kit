import * as React from 'react';
import {styled} from '@workday/canvas-kit-labs-react-core';
import isPropValid from '@emotion/is-prop-valid';
import {ButtonSize, ButtonIconPosition} from '../types';
import {ButtonProps} from '../Button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

export interface ButtonLabelIconProps extends Pick<ButtonProps, 'size' | 'icon'> {
  dropdown?: boolean;
  iconPosition?: ButtonIconPosition;
}

const ButtonLabelIconStyled = styled('span', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<ButtonLabelIconProps>(
  {
    display: 'flex',
  },
  ({size}) => ({
    // TODO: Is this needed?
    paddingLeft: size === ButtonSize.Large ? 8 : size === ButtonSize.Medium ? 4 : 0,
    display: size === ButtonSize.Small ? 'none' : 'inline-block',
    height: size === ButtonSize.Small ? 20 : 24,
  }),
  // ({size, dropdown}) => {
  //   if (dropdown) {
  //     switch (size) {
  //       case ButtonSize.Large:
  //       default:
  //         return {padding: '0 8px 0 0'};
  //       case ButtonSize.Medium:
  //         return {padding: '0 4px 0 0'};
  //     }
  //   }
  // },
  ({iconPosition}) => ({
    padding: iconPosition === ButtonIconPosition.Right ? '0 0 0 8px' : '0 8px 0 0',
  })
);

export const ButtonLabelIcon = (props: ButtonLabelIconProps) => {
  const {icon, size, dropdown, iconPosition, ...elemProps} = props;
  /* istanbul ignore next line for coverage */
  if (icon === undefined) {
    return null;
  }

  const iconSize = size === ButtonSize.Small ? 20 : 24;

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
