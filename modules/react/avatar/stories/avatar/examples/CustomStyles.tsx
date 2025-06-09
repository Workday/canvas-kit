import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStencil, createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../../../icon';

const customBlueAvatarStencil = createStencil({
  base: {
    backgroundColor: base.purple400,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.purple100,
    },
  },
});

const customGreenAvatarStencil = createStencil({
  base: {
    backgroundColor: base.green400,
    ['[data-part="avatar-icon"]']: {
      [systemIconStencil.vars.color]: base.green100,
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
