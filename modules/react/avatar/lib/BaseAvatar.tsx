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
    borderRadius: system.legacy.shape.full,
    // These are the fallbacks if "size" is not defined
    width: cssVar(size, system.legacy.size.lg),
    height: cssVar(size, system.legacy.size.lg),
    minWidth: cssVar(size, system.legacy.size.lg),
    minHeight: cssVar(size, system.legacy.size.lg),
    backgroundColor: cssVar(backgroundColor, base.legacy.blue600),
    color: cssVar(color, system.color.fg.inverse),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: 'none',
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    lineHeight: system.legacy.lineHeight.body.md,
    fontSize: system.legacy.fontSize.body.md,
  }),
  modifiers: {
    variant: {
      blue: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.legacy.blue600),
        color: cssVar(color, system.color.fg.inverse),
      }),
      amber: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.legacy.amber300),
        color: cssVar(color, base.legacy.amber800),
      }),

      teal: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.legacy.teal300),
        color: cssVar(color, base.legacy.teal800),
      }),
      purple: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(backgroundColor, base.legacy.purple600),
        color: cssVar(color, system.color.fg.inverse),
      }),
    },
    size: {
      extraExtraSmall: ({size}) => ({
        [size]: system.legacy.size.xs,
        lineHeight: system.legacy.lineHeight.subtext.sm,
        fontSize: system.legacy.fontSize.subtext.sm,
        letterSpacing: system.legacy.letterSpacing.subtext.sm,
      }),
      extraSmall: ({size}) => ({
        [size]: system.legacy.size.sm,
        lineHeight: system.legacy.lineHeight.subtext.md,
        fontSize: system.legacy.fontSize.subtext.md,
        letterSpacing: system.legacy.letterSpacing.subtext.md,
      }),
      small: ({size}) => ({
        [size]: system.legacy.size.md,
        lineHeight: system.legacy.lineHeight.body.sm,
        fontSize: system.legacy.fontSize.body.sm,
        letterSpacing: system.legacy.letterSpacing.body.sm,
      }),
      medium: ({size}) => ({
        [size]: base.legacy.size600,
        lineHeight: system.legacy.lineHeight.body.md,
        fontSize: system.legacy.fontSize.body.md,
      }),
      large: ({size}) => ({
        [size]: base.legacy.size900,
        fontWeight: system.fontWeight.bold,
        lineHeight: system.legacy.lineHeight.heading.md,
        fontSize: system.legacy.fontSize.heading.md,
      }),
      extraLarge: ({size}) => ({
        [size]: base.legacy.size1200,
        fontWeight: system.fontWeight.bold,
        lineHeight: system.legacy.lineHeight.title.sm,
        fontSize: system.legacy.fontSize.title.sm,
      }),
      extraExtraLarge: ({size}) => ({
        [size]: px2rem(120),
        fontWeight: system.fontWeight.bold,
        lineHeight: system.legacy.lineHeight.title.md,
        fontSize: system.legacy.fontSize.title.md,
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
