import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../../../icon';

const customBlueAvatarStencil = createStencil({
  base: {
    backgroundColor: base.berrySmoothie400,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.berrySmoothie100,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: base.watermelon400,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.watermelon100,
    },
  },
});

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const CustomStyles = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" as="div" {...customBlueAvatarStencil()} />
    <Avatar altText="Avatar" as="div" {...customGreenAvatarStencil()} />
  </div>
);
