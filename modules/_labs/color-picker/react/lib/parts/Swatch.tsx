import {borderRadius, colors} from '@workday/canvas-kit-react-core';
import {pickForegroundColor} from '@workday/canvas-kit-react-common';
import * as React from 'react';
import styled from '@emotion/styled';

import {checkSmallIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react-icon';

export interface SwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  isSelected?: boolean;
}

const Container = styled('div')<SwatchProps>(
  {
    width: 20,
    height: 20,
    borderRadius: borderRadius.s,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({color}) => ({
    backgroundColor: color,
  }),
  ({isSelected}) =>
    isSelected
      ? {
          boxShadow: `${colors.frenchVanilla100} 0px 0px 0px 2px, ${colors.licorice200} 0px 0px 0px 3px`,
        }
      : {},
  ({color}) =>
    color === colors.frenchVanilla100
      ? {
          boxShadow: `inset 0px 0px 0px 1px rgba(0, 0, 0, 0.25)`,
        }
      : {}
);

export const Swatch = ({color, isSelected = false, ...elemProps}: SwatchProps) => (
  <Container color={color} {...elemProps}>
    {isSelected && (
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
