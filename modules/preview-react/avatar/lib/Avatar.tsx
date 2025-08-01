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
  base: ({avatarImagePart}) => ({
    [avatarImagePart]: {
      width: '100%',
      height: '100%',
    },
  }),
  modifiers: {
    imageLoaded: {
      false: ({avatarImagePart}) => ({
        [avatarImagePart]: {
          display: 'none',
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

  Component: ({url, name, variant, objectFit, size, ...elemProps}: AvatarProps, ref, Element) => {
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
        {...handleCsProp(elemProps, avatarStencil({variant, size, imageLoaded}))}
      >
        {url && (
          <>
            <BaseAvatar.Image
              onLoad={handleImageLoad}
              src={url}
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
