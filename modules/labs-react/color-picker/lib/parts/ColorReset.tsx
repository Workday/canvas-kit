import * as React from 'react';
import styled from '@emotion/styled';

import {colors, space, type} from '@workday/canvas-kit-react/core';
import {focusRing, hideMouseFocus} from '@workday/canvas-kit-react/common';

import {ColorSwatch} from '@workday/canvas-kit-react/color-picker';

export interface ResetButtonProps {
  label: string;
  resetColor: string;
  onClick: (color: string) => void;
}

const Label = styled('div')({
  marginLeft: space.xxs,
});

const Container = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: `calc(100% + ${space.l})`,
  height: space.l,
  margin: `-${space.xxs} -${space.s} ${space.xxs}`,
  padding: `0px ${space.s}`,
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
    <Container onClick={handleResetColor}>
      <ColorSwatch color={resetColor} />
      <Label>{label}</Label>
    </Container>
  );
};
