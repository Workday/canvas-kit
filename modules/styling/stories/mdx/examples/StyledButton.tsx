import {PrimaryButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const varStyles = createStyles({
  [buttonStencil.vars.background]: base.slate200,
  [buttonStencil.vars.label]: base.blue700,
  // Because PrimaryButton uses SystemIcon under the hood,
  // we also can change system icon variable for color
  [systemIconStencil.vars.color]: base.blue700,
  '&:hover': {
    [buttonStencil.vars.background]: base.amber400,
    [buttonStencil.vars.label]: system.color.fg.inverse,
    [systemIconStencil.vars.color]: system.color.fg.inverse,
  },
  '&:focus-visible': {
    [buttonStencil.vars.background]: base.green600,
    [buttonStencil.vars.boxShadowOuter]: base.green700,
    [buttonStencil.vars.boxShadowInner]: base.green100,
  },
});

export const StyledButton = () => (
  <PrimaryButton cs={varStyles} icon={caretDownIcon} iconPosition="end">
    Overwrite styles by setting variables
  </PrimaryButton>
);
