import React from 'react';

import {Pill, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    backgroundColor: base.berrySmoothie300,
    borderColor: base.berrySmoothie500,
    color: base.frenchVanilla100,
    [systemIconStencil.vars.color]: base.frenchVanilla100,
    '& [data-part="pill-count"]': {
      backgroundColor: base.berrySmoothie400,
    },
    '&:hover, &.hover': {
      backgroundColor: base.berrySmoothie400,
      color: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
    '&:active, &.active': {
      backgroundColor: base.berrySmoothie400,
      color: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,

      '& [data-part="pill-count"]': {
        backgroundColor: base.berrySmoothie400,
      },
    },
    '&:disabled, &.disabled': {
      backgroundColor: base.berrySmoothie400,
      color: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
  },
});

export const CustomStyles = () => {
  return (
    <div>
      <Pill cs={customPillStencil()}>
        <Pill.Icon aria-label="Add user" />
        <Pill.Label>Custom Pill Color</Pill.Label>
        <Pill.Count>10</Pill.Count>
      </Pill>
    </div>
  );
};
