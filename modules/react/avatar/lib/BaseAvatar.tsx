import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {AvatarImage} from './AvatarImage';
import {AvatarName} from './AvatarName';

export interface BaseAvatarProps extends CSProps {
  /**
   * Children of the BaseAvatar.
   */
  children?: React.ReactNode;
  /**
   * The variant of the Avatar.
   * @default "blue"
   */
  variant?: 'blue' | 'amber' | 'teal' | 'purple';

  /**
   * The size of the Avatar.
   * `extraExtraSmall` is 24px x 24px
   * `extraSmall` is 32px x 32px
   * `small` is 40px x 40px
   * `medium` is 48px x 48px
   * `large` is 72px x 72px
   * `extraLarge` is 96px x 96px
   * `extraExtraLarge` is 120px x 120px
   * @default "medium"
   */
  size?:
    | 'extraExtraSmall'
    | 'extraSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge'
    | (string & {});
}

export const baseAvatarStencil = createStencil({
  vars: {
    backgroundColor: '',
    color: '',
    size: '',
  },
  base: ({backgroundColor, color, size}) => ({
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    // These are the fallbacks if "size" is not defined
    width: cssVar(size, cssVar(system.size.lg, px2rem(48))),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(size, cssVar(system.size.lg, px2rem(48))),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minWidth: cssVar(size, cssVar(system.size.lg, px2rem(48))),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minHeight: cssVar(size, cssVar(system.size.lg, px2rem(48))),
    backgroundColor: cssVar(backgroundColor, base.blue300),
    color: cssVar(color, base.blue800),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: 'none',
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.body.md, system.lineHeight.body.medium),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.body.md, system.fontSize.body.medium),
  }),
  modifiers: {
    variant: {
      blue: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.blue300),
        color: cssVar(color, base.blue800),
      }),
      amber: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.amber200),
        color: cssVar(color, base.amber700),
      }),

      teal: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.teal300),
        color: cssVar(color, base.teal800),
      }),
      purple: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.purple300),
        color: cssVar(color, base.purple800),
      }),
    },
    size: {
      extraExtraSmall: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(system.size.xs, system.space.x6),
        lineHeight: cssVar(system.lineHeight.subtext.sm, system.lineHeight.subtext.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.sm, system.fontSize.subtext.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.sm, base.letterSpacing50),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      }),
      extraSmall: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(system.size.sm, system.space.x8),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.md, system.lineHeight.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.md, base.letterSpacing100),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      }),
      small: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(system.size.md, system.space.x10),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.sm, system.lineHeight.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.sm, system.fontSize.body.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.body.sm, base.letterSpacing200),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      }),
      medium: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(base.size600, px2rem(48)),
        ...system.type.body.medium,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.body.md, system.lineHeight.body.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.body.md, system.fontSize.body.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      }),
      large: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(base.size900, px2rem(72)),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.subtext.md, system.lineHeight.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.subtext.md, system.fontSize.subtext.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        letterSpacing: cssVar(system.letterSpacing.subtext.md, base.letterSpacing100),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      }),
      extraLarge: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: cssVar(base.size1200, px2rem(96)),
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.title.sm, system.lineHeight.title.small),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.title.sm, system.fontSize.title.small),
      }),
      extraExtraLarge: ({size}) => ({
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [size]: px2rem(120),
        fontWeight: system.fontWeight.bold,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        lineHeight: cssVar(system.lineHeight.title.md, system.lineHeight.title.medium),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        fontSize: cssVar(system.fontSize.title.md, system.fontSize.title.medium),
      }),
    },
  },
});

/**
 * JSDoc for Avatar. Will be part of the Component API docs
 */
export const BaseAvatar = createComponent('div')({
  displayName: 'BaseAvatar',
  subComponents: {
    Image: AvatarImage,
    Name: AvatarName,
  },
  Component: ({variant, size, ...elemProps}: BaseAvatarProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, baseAvatarStencil({variant, size}))} />;
  },
});
