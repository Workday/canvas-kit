import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {AvatarImage} from './AvatarImage';
import {AvatarName} from './AvatarName';
import {createStencil, cssVar, calc, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';

export interface BaseAvatarProps extends CSProps {
  /**
   * Children of the Avatar. Should contain a `<Avatar.Image>`, a `<Avatar.Content>`
   */
  children: React.ReactNode;
  /**
   * The variant of the Avatar.
   * @default "blue"
   */
  variant?: 'blue' | 'amber' | 'teal' | 'purple';
  /**
   * The size of the Avatar.
   * @default "medium"
   */
  size?: /** size of small */
  'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge';
}

export const baseAvatarStencil = createStencil({
  vars: {
    size: '',
    backgroundColor: '',
    color: '',
  },

  base: ({size, backgroundColor, color}) => ({
    borderRadius: system.shape.round,
    width: cssVar(size, calc.add(system.space.x10, system.space.x2)),
    height: cssVar(size, calc.add(system.space.x10, system.space.x2)),
    backgroundColor: cssVar(base.blue300, backgroundColor),
    color: cssVar(color, base.blue800),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...system.type.body.medium,
  }),
  modifiers: {},
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
  Component: ({...elemProps}: BaseAvatarProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, baseAvatarStencil())} />;
  },
});
