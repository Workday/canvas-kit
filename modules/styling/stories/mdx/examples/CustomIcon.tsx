import React from 'react';

import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const myIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    [systemIconStencil.vars.color]: system.color.icon.primary.default,
    [systemIconStencil.vars.accentColor]: system.color.icon.critical.default,
    [systemIconStencil.vars.size]: system.space.x4,
  },
});

export const CustomIcon = elemProps => (
  <span {...handleCsProp(elemProps, myIconStencil())}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 20">
      <circle className="wd-icon-fill" cx="10" cy="10" r="10" />
      <circle className="wd-icon-accent" cx="40" cy="10" r="10" />
      <circle className="wd-icon-fill" cx="70" cy="10" r="10" />
    </svg>
  </span>
);
