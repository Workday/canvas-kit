import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../../../icon';

const customBlueAvatarStencil = createStencil({
  base: {
    backgroundColor: base.berrySmoothie400,
    ['[data-slot="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.berrySmoothie100,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: base.watermelon400,
    ['[data-slot="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.watermelon100,
    },
  },
});

export const DynamicBackground = () => (
  <div className="story">
    <Avatar as="div" size="extraLarge" {...customBlueAvatarStencil()} />
    <Avatar as="div" size="extraLarge" {...customGreenAvatarStencil()} />
  </div>
);
