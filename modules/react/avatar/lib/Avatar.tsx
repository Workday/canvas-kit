import React, {useState} from 'react';
import {Property} from 'csstype';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {createStencil, calc, CSProps, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {SystemIcon, SystemIconCircleSize, systemIconStencil} from '@workday/canvas-kit-react/icon';

import {userIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

/**
 * @deprecated ⚠️ `AvatarVariant` is deprecated and will be removed in a future major version. Update your types and values to use the string literal of either `light` or `dark`.
 */
export enum AvatarVariant {
  Light,
  Dark,
}

/**
 * @deprecated ⚠️ `AvatarProps` is deprecated and will be removed in a future major version. Please use the `Avatar` component from the Preview package instead (@workday/canvas-kit-preview-react/avatar).
 */
export interface AvatarProps extends CSProps {
  /**
   * The variant of the avatar. Use `light` on dark backgrounds and `dark` on light backgrounds.
   * @default "light"
   */
  variant?: 'light' | 'dark' | AvatarVariant;
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
  | 'extraSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'extraLarge'
    | 'extraExtraLarge'
    | (string & {})
    | SystemIconCircleSize
    | number;
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label.
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

/**
 * @deprecated `avatarStencil` is deprecated and will be removed in a future major version. Please use `Avatar` from the Preview package instead (@workday/canvas-kit-preview-react/avatar).
 */
export const avatarStencil = createStencil({
  vars: {
    size: '',
  },
  parts: {
    icon: 'avatar-icon',
    image: 'avatar-image',
  },
  base: ({size, iconPart, imagePart}) => ({
    background: system.color.bg.caution.default,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    pointerEvents: 'none',
    borderRadius: system.shape.round,
    width: size,
    height: size,
    '&:focus-visible, &.focus': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    ':is(button)': {
      cursor: 'pointer',
      pointerEvents: 'auto',
    },
    '&:disabled, &.disabled': {
      opacity: system.opacity.disabled,
    },
    [iconPart]: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [systemIconStencil.vars.size]: calc.multiply(size, 0.625),
      opacity: 1,
    },
    [imagePart]: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      transition: 'opacity 150ms linear',
      opacity: 0,
    },
  }),
  modifiers: {
    variant: {
      light: ({iconPart}) => ({
        backgroundColor: system.color.bg.alt.default,
        [iconPart]: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      }),
      dark: ({iconPart}) => ({
        backgroundColor: system.color.bg.primary.default,
        [iconPart]: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      }),
    },
    size: {
      extraSmall: ({iconPart}) => ({
        width: system.space.x4,
        height: system.space.x4,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      }),
      small: ({iconPart}) => ({
        width: system.space.x6,
        height: system.space.x6,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      }),
      medium: ({iconPart}) => ({
        width: system.space.x8,
        height: system.space.x8,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      }),
      large: ({iconPart}) => ({
        width: system.space.x10,
        height: system.space.x10,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      }),
      extraLarge: ({iconPart}) => ({
        width: system.space.x16,
        height: system.space.x16,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      }),
      extraExtraLarge: ({iconPart}) => ({
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      }),
    },
    objectFit: {
      contain: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'contain',
        },
      }),
      fill: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'fill',
        },
      }),
      cover: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'cover',
        },
      }),
      ['scale-down']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'scale-down',
        },
      }),
      none: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'none',
        },
      }),
      ['-moz-initial']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: '-moz-initial',
        },
      }),
      ['initial']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'initial',
        },
      }),
      ['inherit']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'inherit',
        },
      }),
      ['revert']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'revert',
        },
      }),
      ['unset']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'unset',
        },
      }),
    },
    isImageLoaded: {
      true: ({iconPart, imagePart}) => ({
        [iconPart]: {
          opacity: 0,
        },
        [imagePart]: {
          opacity: 1,
        },
      }),
    },
  },
  defaultModifiers: {
    variant: 'light',
    objectFit: 'contain',
  },
});

/**
 * @deprecated ⚠️ `Avatar` is deprecated and will be removed in a future major version. Please use `Avatar` from the Preview package instead (@workday/canvas-kit-preview-react/avatar).
 */
export const Avatar = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {variant, size = 'medium', altText, url, objectFit, ...elemProps}: AvatarProps,
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

    // TODO: Remove this warning for a hard breaking change in v13
    if (process.env.NODE_ENV === 'development') {
      if (typeof variant === 'number') {
        console.warn(
          'Avatar: Avatar.Variant is deprecated and will be removed in v13. Please use a string literal of "light"  or "dark"'
        );
      }
      if (typeof size === 'number') {
        console.warn(
          "Avatar: Avatar.Size is deprecated and will be removed in v13. Use the string literal values for size: 'extraSmall' | 'small | 'medium' | 'large' | 'extraLarge | 'extraExtraLarge' | (string & {})"
        );
      }
    }

    return (
      <Element
        ref={ref}
        aria-label={Element === 'button' ? altText : undefined}
        {...mergeStyles(elemProps, [
          avatarStencil({
            variant:
              variant === AvatarVariant.Light
                ? 'light'
                : variant === AvatarVariant.Dark
                ? 'dark'
                : variant,
            size: typeof size === 'number' ? px2rem(size) : size,
            objectFit,
            isImageLoaded: imageLoaded,
          }),
        ])}
      >
        <SystemIcon {...avatarStencil.parts.icon} icon={userIcon} />
        {url && <img {...avatarStencil.parts.image} src={url} alt={altText} onLoad={loadImage} />}
      </Element>
    );
  },
  subComponents: {
    /**
     * @deprecated ⚠️ `Avatar.Variant` is deprecated and will be removed in a future major version. Use the string literal of `light` or `dark`.
     */
    Variant: AvatarVariant,
    /**
     * @deprecated ⚠️ `Avatar.Size` is deprecated and will be removed in a future major version. Use the string literal values for size: 'extraSmall' | 'small | 'medium' | 'large' | 'extraLarge | 'extraExtraLarge' | (string & {})
     */
    Size: SystemIconCircleSize,
  },
});
