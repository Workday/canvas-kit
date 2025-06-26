import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {caretDownIcon} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {buttonStencil, PrimaryButton} from '@workday/canvas-kit-react/button';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const varStyles = createStyles({
  [buttonStencil.vars.background]: system.color.static.gray.soft,
  [buttonStencil.vars.label]: system.color.static.blue.strong,
  // Because PrimaryButton uses SystemIcon under the hood,
  // we also can change system icon variable for color
  [systemIconStencil.vars.color]: system.color.static.blue.strong,
  '&:hover': {
    [buttonStencil.vars.background]: system.color.static.amber.default,
    [buttonStencil.vars.label]: system.color.static.white,
    [systemIconStencil.vars.color]: system.color.static.white,
  },
  '&:focus-visible': {
    [buttonStencil.vars.background]: system.color.static.green.default,
    [buttonStencil.vars.boxShadowOuter]: system.color.static.green.strong,
    [buttonStencil.vars.boxShadowInner]: system.color.static.white,
  },
});

export const StyledButton = () => (
  <PrimaryButton cs={varStyles} icon={caretDownIcon} iconPosition="end">
    Overwrite styles by setting variables
  </PrimaryButton>
);
