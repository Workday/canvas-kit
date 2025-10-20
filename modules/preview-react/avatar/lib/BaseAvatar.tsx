import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {AvatarImage} from './AvatarImage';
import {AvatarName} from './AvatarName';
import {createStencil, cssVar, calc, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';

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
    borderRadius: system.shape.round,
    width: cssVar(size, calc.add(system.space.x10, system.space.x2)),
    height: cssVar(size, calc.add(system.space.x10, system.space.x2)),
    backgroundColor: cssVar(backgroundColor, base.blue300),
    color: cssVar(color, base.blue800),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: 'none',
    ...system.type.body.medium,
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
        [size]: system.space.x6,
        ...system.type.subtext.small,
      }),
      extraSmall: ({size}) => ({
        [size]: system.space.x8,
        ...system.type.subtext.medium,
      }),
      small: ({size}) => ({
        [size]: system.space.x10,
        ...system.type.body.small,
      }),
      medium: ({size}) => ({
        [size]: calc.add(system.space.x10, system.space.x2),
        ...system.type.body.medium,
      }),
      large: ({size}) => ({
        [size]: calc.add(system.space.x16, system.space.x2),
        ...system.type.heading.medium,
      }),
      extraLarge: ({size}) => ({
        [size]: calc.add(system.space.x20, system.space.x4),
        ...system.type.title.small,
      }),
      extraExtraLarge: ({size}) => ({
        [size]: calc.multiply(system.space.x10, 3),
        ...system.type.title.medium,
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
