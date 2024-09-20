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
 * @deprecated `AvatarVariant` is deprecated and will be removed in a future major version. Update your types and values to use the string literal of either `light` or `dark`.
 */
export enum AvatarVariant {
  Light,
  Dark,
}

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
    ['& > [data-part="avatar-icon"]']: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [systemIconStencil.vars.size]: calc.multiply(size, 0.625),
    },
    ['& > [data-part="avatar-image"]']: {
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
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
    size: {
      extraSmall: {
        width: system.space.x4,
        height: system.space.x4,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      },
      small: {
        width: system.space.x6,
        height: system.space.x6,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      },
      medium: {
        width: system.space.x8,
        height: system.space.x8,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      },
      large: {
        width: system.space.x10,
        height: system.space.x10,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      },
      extraLarge: {
        width: system.space.x16,
        height: system.space.x16,
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        ['& [data-part="avatar-icon"]']: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      },
    },
    objectFit: {
      contain: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'contain',
        },
      },
      fill: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'fill',
        },
      },
      cover: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'cover',
        },
      },
      ['scale-down']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'scale-down',
        },
      },
      none: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'none',
        },
      },
      ['-moz-initial']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: '-moz-initial',
        },
      },
      ['initial']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'initial',
        },
      },
      ['inherit']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'inherit',
        },
      },
      ['revert']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'revert',
        },
      },
      ['unset']: {
        ['& [data-part="avatar-image"]']: {
          objectFit: 'unset',
        },
      },
    },
    isImageLoaded: {
      true: {
        ['& [data-part="avatar-icon"]']: {
          opacity: 0,
        },
        ['& [data-part="avatar-image"]']: {
          opacity: 1,
        },
      },
      false: {
        ['& [data-part="avatar-icon"]']: {
          opacity: 1,
        },
        ['& [data-part="avatar-image"]']: {
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
        aria-label={altText}
        role={Element === 'button' ? 'button' : 'img'}
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
        <SystemIcon icon={userIcon} data-part="avatar-icon" />
        {url && <img data-part="avatar-image" src={url} alt={altText} onLoad={loadImage} />}
      </Element>
    );
  },
  subComponents: {
    /**
     * @deprecated `Avatar.Variant` is deprecated and will be removed in a future major version. Use the string literal of `light` or `dark`.
     */
    Variant: AvatarVariant,
    /**
     * @deprecated `Avatar.Size` is deprecated and will be removed in a future major version. Use the string literal values for size: 'extraSmall' | 'small | 'medium' | 'large' | 'extraLarge | 'extraExtraLarge' | (string & {})
     */
    Size: SystemIconCircleSize,
  },
});
