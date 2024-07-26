import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../../../../icon';

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

export const DynamicBackgroundColorDiv = () => (
  <div className="story">
    <h3>Blue</h3>
    <Avatar as="div" size="extraExtraLarge" {...customBlueAvatarStencil()} />
    <h3>Green</h3>
    <Avatar as="div" size="extraLarge" {...customGreenAvatarStencil()} />
  </div>
);
