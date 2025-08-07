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
    | 'extraExtraLarge';
}

export const baseAvatarStencil = createStencil({
  vars: {
    backgroundColor: '',
    color: '',
  },

  base: ({backgroundColor, color}) => ({
    borderRadius: system.shape.round,
    width: calc.add(system.space.x10, system.space.x2),
    height: calc.add(system.space.x10, system.space.x2),
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
      // 24px
      extraExtraSmall: {
        width: system.space.x6,
        height: system.space.x6,
        ...system.type.subtext.small,
      },
      extraSmall: {
        width: system.space.x8,
        height: system.space.x8,
        ...system.type.subtext.medium,
      },
      small: {
        width: system.space.x10,
        height: system.space.x10,
        ...system.type.body.small,
      },
      medium: {
        width: calc.add(system.space.x10, system.space.x2),
        height: calc.add(system.space.x10, system.space.x2),
        ...system.type.body.medium,
      },
      large: {
        width: calc.add(system.space.x16, system.space.x2),
        height: calc.add(system.space.x16, system.space.x2),
        ...system.type.heading.medium,
      },
      extraLarge: {
        width: calc.add(system.space.x20, system.space.x4),
        height: calc.add(system.space.x20, system.space.x4),
        ...system.type.title.small,
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        ...system.type.title.medium,
      },
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
