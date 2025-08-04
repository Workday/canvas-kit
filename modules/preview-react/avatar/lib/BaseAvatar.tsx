import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {AvatarImage} from './AvatarImage';
import {AvatarName} from './AvatarName';
import {
  createStencil,
  cssVar,
  calc,
  handleCsProp,
  CSProps,
  px2rem,
} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';

export interface BaseAvatarProps extends CSProps {
  /**
   * Children of the Avatar. Should contain a `<Avatar.Image>`, a `<Avatar.Content>`
   */
  children?: React.ReactNode;
  /**
   * The variant of the Avatar.
   * @default "blue"
   */
  variant?:
    | 'blue'
    | 'amber'
    | 'te al'
    | 'purple'
    | 'azure'
    | 'coral'
    | 'green'
    | 'indigo'
    | 'red'
    | 'orange'
    | 'slate'
    | 'neutral'
    | 'magenta';
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
      azure: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.azure300, backgroundColor),
        color: cssVar(base.azure800, color),
      }),
      coral: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.coral300, backgroundColor),
        color: cssVar(base.coral800, color),
      }),
      green: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.green300, backgroundColor),
        color: cssVar(base.green800, color),
      }),
      orange: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.orange300, backgroundColor),
        color: cssVar(base.orange800, color),
      }),
      indigo: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.indigo300, backgroundColor),
        color: cssVar(base.indigo800, color),
      }),
      magenta: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.magenta300, backgroundColor),
        color: cssVar(base.magenta800, color),
      }),
      teal: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.teal300, backgroundColor),
        color: cssVar(base.teal800, color),
      }),
      purple: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.purple300, backgroundColor),
        color: cssVar(base.purple800, color),
      }),
      red: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.red300, backgroundColor),
        color: cssVar(base.red800, color),
      }),
      slate: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.slate300, backgroundColor),
        color: cssVar(base.slate800, color),
      }),
      neutral: ({backgroundColor, color}) => ({
        backgroundColor: cssVar(base.neutral300, backgroundColor),
        color: cssVar(base.neutral800, color),
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
