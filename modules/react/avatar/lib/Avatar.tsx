import React, {useState} from 'react';
import {Property} from 'csstype';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStencil, calc} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';

import {userIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export interface AvatarProps {
  /**
   * The variant of the avatar. Use `light` on dark backgrounds and `dark` on light backgrounds.
   * @default "light"
   */
  variant?: 'light' | 'dark';
  /**
   * The size of the Avatar.
   * - `extraExtraLarge`: 7.5rem x 7.5rem (120px  x 120px)
   * - `extraLarge`: 4.5rem x 4.5rem (64px x 64px)
   * - `large`: 2.5rem x 2.5rem (40px x 40px)
   * - `medium`: 2rem x 2rem (32px x 32px)
   * - `small`: 1.5rem x 1.5rem (24px x 24px)
   * - `small`: 1rem x 1rem (16px x 16px)
   * @default "medium"
   */
  size?: /** size of small */
  'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge' | (string & {});
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label.
   * @default Avatar
   */
  altText?: string;
  /**
   * The URL of the user's photo. For best fit, use square images.
   */
  url?: string;
  /**
   * An objectFit property that can customize how to resize your image to fit its container.
   * @default "contain"
   */
  objectFit?: Property.ObjectFit;
}

export const avatarStencil = createStencil({
  vars: {
    size: '',
  },
  base: ({size}) => ({
    background: system.color.bg.caution.default,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    borderRadius: system.shape.round,
    width: size,
    height: size,
    '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    ':is(button)': {
      cursor: 'pointer',
    },
    ['& > [data-slot="avatar-icon"]']: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [systemIconStencil.vars.size]: calc.multiply(size, 0.625),
    },
    ['& > [data-slot="avatar-image"]']: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      transition: 'opacity 150ms linear',
    },
  }),
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
    size: {
      extraSmall: {
        width: system.space.x4,
        height: system.space.x4,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      },
      small: {
        width: system.space.x6,
        height: system.space.x6,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      },
      medium: {
        width: system.space.x8,
        height: system.space.x8,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      },
      large: {
        width: system.space.x10,
        height: system.space.x10,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      },
      extraLarge: {
        width: system.space.x16,
        height: system.space.x16,
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        ['& [data-slot="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      },
    },
    objectFit: {
      contain: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'contain',
        },
      },
      fill: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'fill',
        },
      },
      cover: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'cover',
        },
      },
      ['scale-down']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'scale-down',
        },
      },
      none: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'none',
        },
      },
      ['-moz-initial']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: '-moz-initial',
        },
      },
      ['initial']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'initial',
        },
      },
      ['inherit']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'inherit',
        },
      },
      ['revert']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'revert',
        },
      },
      ['unset']: {
        ['& [data-slot="avatar-image"]']: {
          objectFit: 'unset',
        },
      },
    },
    isImageLoaded: {
      true: {
        ['& [data-slot="avatar-icon"]']: {
          opacity: 0,
        },
        ['& [data-slot="avatar-image"]']: {
          opacity: 1,
        },
      },
      false: {
        ['& [data-slot="avatar-icon"]']: {
          opacity: 1,
        },
        ['& [data-slot="avatar-image"]']: {
          opacity: 0,
        },
      },
    },
  },
  defaultModifiers: {
    variant: 'light',
    size: 'medium',
    isImageLoaded: 'false',
    objectFit: 'contain',
  },
});

export const Avatar = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {variant, size, altText = 'Avatar', url, objectFit, ...elemProps}: AvatarProps,
    ref,
    Element
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const loadImage = () => {
      if (!imageLoaded) {
        setImageLoaded(true);
      }
    };

    React.useLayoutEffect(() => {
      setImageLoaded(false);
    }, [url]);

    return (
      <Element
        ref={ref}
        aria-label={altText}
        {...mergeStyles(elemProps, [
          avatarStencil({
            variant,
            size,
            objectFit,
            isImageLoaded: imageLoaded,
          }),
        ])}
      >
        <SystemIcon icon={userIcon} data-slot="avatar-icon" />
        {url && <img data-slot="avatar-image" src={url} alt={altText} onLoad={loadImage} />}
      </Element>
    );
  },
});
