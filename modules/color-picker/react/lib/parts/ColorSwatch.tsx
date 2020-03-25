import {borderRadius, colors} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '@workday/canvas-kit-react-common';
import * as React from 'react';
import styled from '@emotion/styled';

import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  showCheck?: boolean;
}

const Container = styled('div')<ColorSwatchProps>(
  {
    width: 20,
    height: 20,
    borderRadius: borderRadius.s,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      // Account for 24px icon
      margin: -2,
    },
  },
  ({color, showCheck}) => ({
    backgroundColor: color,
    boxShadow:
      showCheck || color === colors.frenchVanilla100
        ? 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25)'
        : undefined,
  })
);

export const ColorSwatch = ({color, showCheck = false, ...elemProps}: ColorSwatchProps) => (
  <Container color={color} showCheck={showCheck} {...elemProps}>
    {showCheck && (
      <SystemIcon
        fill={pickForegroundColor(color)}
        fillHover={pickForegroundColor(color)}
        icon={checkSmallIcon}
        color={color}
      />
    )}
  </Container>
);
