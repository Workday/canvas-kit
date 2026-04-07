import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {ButtonSizes} from '../types';

export interface ButtonLabelIconProps extends Partial<SystemIconProps> {
  /**
   * There are four button sizes: `extraSmall`, `small`, `medium`, and `large`.
   *
   * @default 'medium'
   */
  size?: ButtonSizes;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic. Use this if you want to
   * always mirror the icon regardless of the content direction. If the icon should mirror only when
   * in an right-to-left language, use `shouldMirrorIconInRTL` instead.
   * @default false
   */
  shouldMirrorIcon?: boolean;
  /**
   * If set to `true`, transform the icon's x-axis to mirror the graphic when the content direction
   * is `rtl`. Icons don't have enough context to know if they should be mirrored in all cases.
   * Setting this to `true` indicates the icon should be mirrored in right-to-left languages.
   * @default false
   */
  shouldMirrorIconInRTL?: boolean;
}

const buttonIconStencil = createStencil({
  base: {
    display: 'inline-block',
  },
  modifiers: {
    size: {
      extraSmall: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        // TODO (icon token): Revisit size variable to icon size token
        [systemIconStencil.vars.size]: cssVar(base.size225, px2rem(18)),
      },
      small: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        // TODO (icon token): Revisit size variable to icon size token
        [systemIconStencil.vars.size]: cssVar(base.size250, system.space.x5),
      },
      medium: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        // TODO (icon token): Revisit size variable to icon size token
        [systemIconStencil.vars.size]: cssVar(base.size250, system.space.x5),
      },
      large: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        // TODO (icon token): Revisit size variable to icon size token
        [systemIconStencil.vars.size]: cssVar(base.size300, system.space.x6),
      },
    },
  },
});

export const ButtonLabelIcon = createComponent('span')({
  Component: (
    {
      icon,
      size = 'medium',
      shouldMirrorIcon = false,
      shouldMirrorIconInRTL = false,
      ...elemProps
    }: ButtonLabelIconProps,
    ref,
    Element
  ) => {
    if (icon === undefined) {
      return null;
    }

    return (
      <SystemIcon
        ref={ref}
        as={Element}
        icon={icon}
        shouldMirror={shouldMirrorIcon}
        shouldMirrorInRTL={shouldMirrorIconInRTL}
        {...handleCsProp(elemProps, buttonIconStencil({size}))}
      />
    );
  },
});
