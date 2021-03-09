import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {colors, borderRadius} from '@workday/canvas-kit-react/core';
import SystemIcon, {SystemIconProps} from './SystemIcon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {pickForegroundColor} from '@workday/canvas-kit-react/common';

export enum SystemIconCircleSize {
  xs = 16,
  s = 24,
  m = 32,
  l = 40,
  xl = 64,
  xxl = 120,
}

export interface SystemIconCircleProps extends Pick<SystemIconProps, 'iconRef'> {
  /**
   * The background color of the SystemIconCircle from `@workday/canvas-colors-web`.
   * @default colors.soap300
   */
  background?: string;
  /**
   * The icon to display from `@workday/canvas-accent-icons-web`.
   */
  icon: CanvasSystemIcon;
  /**
   * The size of the SystemIconCircle.
   * @default SystemIconCircleSize.l
   */
  size?: SystemIconCircleSize | number;
}

const Container = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'size',
})<Pick<SystemIconCircleProps, 'background' | 'size'>>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    borderRadius: borderRadius.circle,
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  ({background}) => ({
    background: background,
  }),
  ({size}) => ({
    width: size,
    height: size,
  })
);

export default class SystemIconCircle extends React.Component<SystemIconCircleProps> {
  static Size = SystemIconCircleSize;

  render() {
    const {
      background = colors.soap200,
      size = SystemIconCircleSize.l,
      icon,
      iconRef,
      ...elemProps
    } = this.props;

    const iconColor = pickForegroundColor(background, 'rgba(0,0,0,0.65)', colors.frenchVanilla100);
    const iconSize = size * 0.625;

    return (
      <Container background={background} size={size} {...elemProps}>
        <SystemIcon
          icon={icon}
          color={iconColor}
          colorHover={iconColor}
          size={iconSize}
          iconRef={iconRef}
        />
      </Container>
    );
  }
}
