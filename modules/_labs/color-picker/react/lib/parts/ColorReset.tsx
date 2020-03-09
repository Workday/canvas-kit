import * as React from 'react';
import styled from '@emotion/styled';

import {borderRadius, colors, spacing, type, inputColors} from '@workday/canvas-kit-react-core';

import {Swatch} from './Swatch';

export interface ResetButtonProps {
  id?: string;
  label: string;
  resetColor: string;
  onClick: Function;
}

export const ResetButton = ({id, onClick, resetColor, label}: ResetButtonProps) => {
  const handleResetColor = () => onClick(resetColor);

  return (
    <Container id={id} onClick={handleResetColor}>
      <Swatch color={resetColor} isSelected={false} />
      <Label>{label}</Label>
    </Container>
  );
};

export const Label = styled('div')({
  marginLeft: spacing.xxs,
});

export const Container = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: borderRadius.m,
  width: `calc(100% + ${spacing.xxs})`,
  height: spacing.l,
  margin: `-${spacing.xxs} 0px ${spacing.xxs} 0px`,
  padding: `0px ${spacing.xxs}`,
  ...type.body2,
  whiteSpace: 'nowrap',
  border: 'none',
  outline: 'none',
  background: 'none',
  cursor: 'pointer',
  transition: 'color 120ms ease, background-color 120ms ease',

  '&:hover': {
    backgroundColor: colors.soap300,
  },

  '&:active': {
    color: inputColors.focusBorder,

    path: {
      fill: inputColors.focusBorder,
    },
  },

  '&:focus': {
    boxShadow: `inset 0px 0px 0px 2px ${colors.blueberry400}`,
  },
});
