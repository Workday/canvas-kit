import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: system.color.static.green.default,
    [pillStencil.vars.border]: system.color.static.green.stronger,
    [pillStencil.vars.label]: system.color.static.white,
    [systemIconStencil.vars.color]: system.color.static.white,
    [pillCountStencil.vars.backgroundColor]: system.color.static.green.default,
    [pillCountStencil.vars.borderColor]: system.color.static.green.default,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.borderColor]: system.color.static.green.stronger,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
    },
    '&:focus, &.focus, &:focus-visible': {
      [pillStencil.vars.background]: system.color.static.green.stronger,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
      [pillCountStencil.vars.backgroundColor]: system.color.static.green.stronger,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: system.color.static.green.default,
      [pillStencil.vars.label]: system.color.static.white,
      [systemIconStencil.vars.color]: system.color.static.white,
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
