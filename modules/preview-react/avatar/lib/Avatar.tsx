import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';

import {createStencil, cssVar, calc, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';
import {BaseAvatarProps, BaseAvatar, baseAvatarStencil} from './BaseAvatar';

export interface AvatarProps extends BaseAvatarProps {
  url?: string;
  name: string;
}

export const avatarStencil = createStencil({
  extends: baseAvatarStencil,
  parts: {
    avatarImage: 'avatar-image',
    avatarName: 'avatar-name',
  },
  base: ({size, backgroundColor, color}) => ({}),
  modifiers: {},
});

/**
 * JSDoc for Avatar. Will be part of the Component API docs
 */
export const Avatar = createComponent('div')({
  displayName: 'Avatar',

  Component: ({url, name, ...elemProps}: AvatarProps, ref, Element) => {
    return (
      <BaseAvatar
        as={Element}
        role="img"
        ref={ref}
        {...handleCsProp(elemProps, baseAvatarStencil())}
      >
        {url && (
          <BaseAvatar.Image {...avatarStencil.parts.avatarImage} role="presentation" src={url} />
        )}
        {name && (
          <BaseAvatar.Name name={name} {...avatarStencil.parts.avatarName}>
            {name}
          </BaseAvatar.Name>
        )}
      </BaseAvatar>
    );
  },
});
