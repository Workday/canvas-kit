import * as React from 'react';
import styled from '@emotion/styled';
import {colors, borderRadius} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '@workday/canvas-kit-react-common';

import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

const whiteColor = colors.frenchVanilla100;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  style?: React.CSSProperties;
}

export const Container = styled('div')<ContainerProps>(
  {
    width: 20,
    height: 20,

    borderRadius: borderRadius.s,
  },
  ({color}) => ({
    backgroundColor: color || colors.blueberry400,
  }),
  ({color}) =>
    color === whiteColor
      ? {
          boxShadow: `inset 0px 0px 0px 1px ${colors.licorice200}`,
        }
      : {}
);

export interface SwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  showCheck: boolean;
  style?: React.CSSProperties;
}

export const Swatch: React.FunctionComponent<SwatchProps> = ({color, showCheck, style}) => (
  <Container color={color} style={style}>
    {showCheck && (
      <SystemIcon
        fill={pickForegroundColor(color)}
        fillHover={pickForegroundColor(color)}
        icon={checkSmallIcon}
        size={20}
        color={color}
      />
    )}
  </Container>
);
