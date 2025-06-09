import {Pill, pillCountStencil, pillStencil} from '@workday/canvas-kit-preview-react/pill';

import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customPillStencil = createStencil({
  base: {
    [pillStencil.vars.background]: base.pink300,
    [pillStencil.vars.border]: base.pink500,
    [pillStencil.vars.label]: base.neutral100,
    [systemIconStencil.vars.color]: base.neutral100,
    [pillCountStencil.vars.backgroundColor]: base.pink400,

    '&:hover, &.hover': {
      [pillStencil.vars.background]: base.pink400,
      [pillStencil.vars.label]: base.neutral100,
      [pillCountStencil.vars.backgroundColor]: base.pink500,
      [systemIconStencil.vars.color]: base.neutral100,
    },
    '&:active, &.active': {
      [pillStencil.vars.background]: base.pink400,
      [pillStencil.vars.label]: base.neutral100,
      [systemIconStencil.vars.color]: base.neutral100,
      [pillCountStencil.vars.backgroundColor]: base.pink500,
    },
    '&:disabled, &.disabled': {
      [pillStencil.vars.background]: base.pink400,
      [pillStencil.vars.label]: base.neutral100,
      [systemIconStencil.vars.color]: base.neutral100,
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
