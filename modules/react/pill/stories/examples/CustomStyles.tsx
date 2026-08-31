import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-react/pill';
import {createStencil} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: base.green600,
    [pillStencil.vars.border]: base.green800,
    [pillStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
    [pillCountStencil.vars.backgroundColor]: base.green600,
    [pillCountStencil.vars.borderColor]: base.green600,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.borderColor]: base.green800,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
    },
    '&:focus, &.focus, &:focus-visible': {
      [pillStencil.vars.background]: base.green800,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
      [pillCountStencil.vars.backgroundColor]: base.green800,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: base.green600,
      [pillStencil.vars.label]: system.color.fg.inverse,
      [systemIconStencil.vars.color]: system.color.fg.inverse,
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
