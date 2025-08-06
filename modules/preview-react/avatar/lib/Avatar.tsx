import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Property} from 'csstype';
import {createStencil, cssVar, calc, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
import {system, base} from '@workday/canvas-tokens-web';
import {BaseAvatarProps, BaseAvatar, baseAvatarStencil} from './BaseAvatar';

export interface AvatarProps extends BaseAvatarProps {
  url?: string;
  name: string;
  /**
   * An objectFit property that can customize how to resize your image to fit its container.
   * @default "contain"
   */
  objectFit?: Property.ObjectFit;
}

export const avatarStencil = createStencil({
  extends: baseAvatarStencil,
  parts: {
    avatarImage: 'avatar-image',
    avatarName: 'avatar-name',
  },
  base: {},
  modifiers: {
    imageLoaded: {
      false: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          display: 'none',
        },
      }),
    },
    objectFit: {
      contain: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'contain',
        },
      }),
      cover: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'cover',
        },
      }),
      fill: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'fill',
        },
      }),
      none: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'none',
        },
      }),
      ['scale-down']: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'scale-down',
        },
      }),
      initial: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'initial',
        },
      }),

      inherit: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'inherit',
        },
      }),
      unset: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'unset',
        },
      }),
      ['-moz-initial']: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: '-moz-initial',
        },
      }),
      ['revert']: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          objectFit: 'revert',
        },
      }),
    },
  },
});

/**
 * JSDoc for Avatar. Will be part of the Component API docs
 */
export const Avatar = createComponent('div')({
  displayName: 'Avatar',

  Component: (
    {url, name, variant, objectFit = 'cover', size, ...elemProps}: AvatarProps,
    ref,
    Element
  ) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const handleImageLoad = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };

    return (
      <BaseAvatar
        as={Element}
        role="img"
        ref={ref}
        {...handleCsProp(elemProps, avatarStencil({variant, size, imageLoaded, objectFit}))}
      >
        {url && (
          <>
            <BaseAvatar.Image
              onLoad={handleImageLoad}
              src={url}
              alt={name}
              {...avatarStencil.parts.avatarImage}
              role="presentation"
            />
            {!imageLoaded && name && (
              <BaseAvatar.Name name={name} {...avatarStencil.parts.avatarName} />
            )}
          </>
        )}
        {!url && name && <BaseAvatar.Name name={name} {...avatarStencil.parts.avatarName} />}
      </BaseAvatar>
    );
  },
});
