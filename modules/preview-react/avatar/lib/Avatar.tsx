import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {Property} from 'csstype';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';

import {BaseAvatarProps, BaseAvatar, baseAvatarStencil} from './BaseAvatar';
import {AvatarNameProps} from './AvatarName';

export interface AvatarProps extends BaseAvatarProps, AvatarNameProps {
  /**
   * The URL of the user's photo. For best fit, use square images.
   */
  url?: string;
  /**
   * An objectFit property that can customize how to resize your image to fit its container.
   * @default "contain"
   */
  objectFit?: Property.ObjectFit;
  /**
   * If true, the Avatar won't forward the `name` prop to the `alt` attribute of the image. This is useful when the Avatar is purely decorative and is rendered next to a name or text.
   */
  isDecorative?: boolean;
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
    {
      url,
      name,
      variant,
      objectFit = 'cover',
      preferredInitials,
      isDecorative,
      size,
      ...elemProps
    }: AvatarProps,
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
        ref={ref}
        {...handleCsProp(elemProps, avatarStencil({variant, size, imageLoaded, objectFit}))}
      >
        {url && (
          <>
            <BaseAvatar.Image
              onLoad={handleImageLoad}
              src={url}
              alt={isDecorative ? undefined : name}
              aria-hidden={isDecorative}
              {...avatarStencil.parts.avatarImage}
            />
          </>
        )}
        {name && (!url || !imageLoaded) && (
          <BaseAvatar.Name
            name={name}
            preferredInitials={preferredInitials}
            {...avatarStencil.parts.avatarName}
          />
        )}
      </BaseAvatar>
    );
  },
});
