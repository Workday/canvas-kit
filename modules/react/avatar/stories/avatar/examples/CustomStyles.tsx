import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const customOrangeAvatar = createStencil({
  base: {
    backgroundColor: system.color.static.amber.default,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: system.color.static.white,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: system.color.static.green.default,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: system.color.static.white,
    },
  },
});

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const CustomStyles = () => (
  <div className={containerStyles}>
    <Avatar altText="Avatar" as="div" {...customOrangeAvatar()} />
    <Avatar altText="Avatar" as="div" {...customGreenAvatarStencil()} />
  </div>
);
