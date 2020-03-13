import * as React from 'react';
import styled from '@emotion/styled';

import {borderRadius, colors, spacing, type} from '@workday/canvas-kit-react-core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react-common';

import {Swatch} from './Swatch';

export interface ResetButtonProps {
  label: string;
  resetColor: string;
  onClick: (color: string) => void;
}

const Label = styled('div')({
  marginLeft: spacing.xxs,
});

const Container = styled('button')({
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
    backgroundColor: colors.soap400,
  },

  '&:focus': {
    ...focusRing(),
  },
  ...hideMouseFocus,
});

export const ResetButton = ({onClick, resetColor, label}: ResetButtonProps) => {
  const handleResetColor = () => onClick(resetColor);

  return (
    <Container data-testid="color-picker-reset" onClick={handleResetColor}>
      <Swatch color={resetColor} isSelected={false} />
      <Label>{label}</Label>
    </Container>
  );
};
