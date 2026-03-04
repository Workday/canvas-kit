import {Avatar, AvatarProps, avatarStencil} from '@workday/canvas-kit-react/avatar';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {usePillModel} from './usePillModel';

export interface PillAvatarProps extends AvatarProps {}

export const pillAvatarStencil = createStencil({
  extends: avatarStencil,
  base: {
    flex: '0 0 auto',
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    lineHeight: cssVar(system.lineHeight.subtext.sm, system.lineHeight.subtext.small),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.sm, system.fontSize.subtext.small),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.sm, base.letterSpacing50),
    '&:disabled, &.disabled': {
      opacity: system.opacity.disabled,
    },
  },
});

export const PillAvatar = createSubcomponent('div')({
  modelHook: usePillModel,
})<PillAvatarProps>(({size, ...elemProps}: PillAvatarProps, Element, _model) => {
  return (
    <Avatar
      isDecorative
      as={Element}
      size={px2rem(18)}
      {...mergeStyles(elemProps, [
        pillAvatarStencil(),
        _model.state.disabled ? 'disabled' : undefined,
      ])}
    />
  );
});
