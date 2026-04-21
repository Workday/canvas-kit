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
    borderRadius: system.shape.full,
    // These are the fallbacks if "size" is not defined
    width: cssVar(size, system.size.lg),
    height: cssVar(size, system.size.lg),
    minWidth: cssVar(size, system.size.lg),
    minHeight: cssVar(size, system.size.lg),
    backgroundColor: cssVar(backgroundColor, base.blue300),
    color: cssVar(color, base.blue800),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: 'none',
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    lineHeight: system.lineHeight.body.md,
    fontSize: system.fontSize.body.md,
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
        [size]: system.size.xs,
        lineHeight: system.lineHeight.subtext.sm,
        fontSize: system.fontSize.subtext.sm,
        letterSpacing: system.letterSpacing.subtext.sm,
      }),
      extraSmall: ({size}) => ({
        [size]: system.size.sm,
        lineHeight: system.lineHeight.subtext.md,
        fontSize: system.fontSize.subtext.md,
        letterSpacing: system.letterSpacing.subtext.md,
      }),
      small: ({size}) => ({
        [size]: system.size.md,
        lineHeight: system.lineHeight.body.sm,
        fontSize: system.fontSize.body.sm,
        letterSpacing: system.letterSpacing.body.sm,
      }),
      medium: ({size}) => ({
        [size]: cssVar(base.size600, px2rem(48)),
        lineHeight: system.lineHeight.body.md,
        fontSize: system.fontSize.body.md,
      }),
      large: ({size}) => ({
        [size]: cssVar(base.size900, px2rem(72)),
        fontWeight: system.fontWeight.bold,
        lineHeight: system.lineHeight.heading.md,
        fontSize: system.fontSize.heading.md,
      }),
      extraLarge: ({size}) => ({
        [size]: cssVar(base.size1200, px2rem(96)),
        fontWeight: system.fontWeight.bold,
        lineHeight: system.lineHeight.title.sm,
        fontSize: system.fontSize.title.sm,
      }),
      extraExtraLarge: ({size}) => ({
        [size]: px2rem(120),
        fontWeight: system.fontWeight.bold,
        lineHeight: system.lineHeight.title.md,
        fontSize: system.fontSize.title.md,
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
