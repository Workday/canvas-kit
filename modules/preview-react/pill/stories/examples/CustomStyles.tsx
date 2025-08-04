import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: base.berrySmoothie300,
    [pillStencil.vars.border]: base.berrySmoothie500,
    [pillStencil.vars.label]: base.frenchVanilla100,
    [systemIconStencil.vars.color]: base.frenchVanilla100,
    [pillCountStencil.vars.backgroundColor]: base.berrySmoothie400,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: base.berrySmoothie400,
      [pillStencil.vars.label]: base.frenchVanilla100,
      [pillCountStencil.vars.backgroundColor]: base.berrySmoothie500,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: base.berrySmoothie400,
      [pillStencil.vars.label]: base.frenchVanilla100,
      [systemIconStencil.vars.color]: base.frenchVanilla100,
      [pillCountStencil.vars.backgroundColor]: base.berrySmoothie500,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: base.berrySmoothie400,
      [pillStencil.vars.label]: base.frenchVanilla100,
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
