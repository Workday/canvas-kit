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
    backgroundColor: cssVar(base.blue300, backgroundColor),
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
        backgroundColor: cssVar(base.blue300, backgroundColor),
        color: cssVar(base.blue800, color),
      }),
      amber: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.amber200, backgroundColor),
        color: cssVar(base.amber700, color),
      }),

      teal: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.teal300, backgroundColor),
        color: cssVar(base.teal800, color),
      }),
      purple: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.purple300, backgroundColor),
        color: cssVar(base.purple800, color),
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
  defaultModifiers: {
    size: 'medium',
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
