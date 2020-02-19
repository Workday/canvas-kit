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
    display: size === ButtonSize.Small ? 'none' : 'inline-block',
    height: size === ButtonSize.Small ? 20 : 24,
  }),
  ({iconPosition, dropdown}) => ({
    marginLeft: iconPosition === ButtonIconPosition.Right ? undefined : `-${dropdown ? 8 : 4}px`,
    marginRight: iconPosition === ButtonIconPosition.Right ? `-${dropdown ? 8 : 4}px` : undefined,
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
