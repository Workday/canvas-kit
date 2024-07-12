import React, {useState} from 'react';
import {Property} from 'csstype';
import {createComponent, focusRing, pickForegroundColor} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, calc, createVars, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {SystemIconCircleSize, SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {userIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

/**
 * Used to get the props of the div version of an avatar
 */
type AvatarDivProps = Omit<AvatarProps, keyof React.ButtonHTMLAttributes<HTMLButtonElement>> &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * Returns an overloaded functional component that uses button props by default.
 */
type AvatarOverload = {
  (props: {as: 'div'} & AvatarDivProps & {ref?: React.Ref<HTMLElement>}): React.ReactElement;
  (props: Omit<AvatarProps, 'as'> & {ref?: React.Ref<HTMLButtonElement>}): React.ReactElement;
  Variant: 'light' | 'dark';
  Size: typeof SystemIconCircleSize;
};

export interface AvatarProps {
  /**
   * The variant of the Avatar default state. Accepts `Light` or `Dark`.
   * @default 'light'
   */
  variant?: 'light' | 'dark';
  /**
   * The size of the Avatar.
   * @default `medium`
   */
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge' | number;
  // size: SystemIconCircleSize | number;
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label
   * @default Avatar
   */
  altText?: string;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  objectFit?: Property.ObjectFit;
}
export const avatarVars = createVars('background');

export const avatarStencil = createStencil({
  extends: systemIconStencil,
  vars: {
    size: '',
    objectFit: 'contain',
  },
  base: ({objectFit, size}) => ({
    background: cssVar(avatarVars.background, system.color.bg.caution.default),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    borderRadius: system.shape.round,
    width: cssVar(size),
    height: cssVar(size),
    '&:focus-visible:not([disabled]), &.focus:not([disabled])': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    ['& > [data-element-avatar-icon="true"]']: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // width: system.space.x8,
      // height: system.space.x8,
    },
    ['& > [data-element-avatar-image="true"]']: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      transition: 'opacity 150ms linear',
      objectFir: cssVar(objectFit),
    },
  }),
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
        // NOTE: how to use iconColor for this color? needed for color contrast
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        // NOTE: how to use iconColor for this color? needed for color contrast
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
    size: {
      extraSmall: {
        width: system.space.x4,
        height: system.space.x4,
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      },
      small: {
        width: system.space.x6,
        height: system.space.x6,
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      },
      medium: {
        width: system.space.x8,
        height: system.space.x8,
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      },
      large: {
        width: system.space.x10,
        height: system.space.x10,
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      },
      extraLarge: {
        width: system.space.x16,
        height: system.space.x16,
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        ['& [data-element-avatar-icon="true"]']: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      },
    },
    hasOnClick: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      },
    },
    isImageLoaded: {
      true: {
        ['& [data-element-avatar-icon="true"]']: {
          opacity: 0,
        },
        ['& [data-element-avatar-image="true"]']: {
          opacity: 1,
        },
      },
      false: {
        ['& [data-element-avatar-icon="true"]']: {
          opacity: 1,
        },
        ['& [data-element-avatar-image="true"]']: {
          opacity: 0,
        },
      },
    },
    // objectFit: {
    //   contain: {
    //     objectFit: 'contain',
    //   },
    //   fill: {
    //     objectFit: 'fill',
    //   },
    //   cover: {
    //     objectFit: 'cover',
    //   },
    //   ['scale-down']: {
    //     objectFit: 'scale-down',
    //   },
    //   none: {
    //     objectFit: 'none',
    //   },
    // },
  },
  defaultModifiers: {
    variant: 'light',
    size: 'medium',
    isImageLoaded: 'false',
    objectFit: 'contain',
  },
});

export const Avatar: AvatarOverload = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {
      variant,
      size = 'medium',
      altText,
      url,
      onClick,
      objectFit = 'contain',
      ...elemProps
    }: AvatarProps,
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

    // const getVariantBackgroundColor = (variant: 'light' | 'dark' | undefined) => {
    //   switch (variant) {
    //     case 'light':
    //       return system.color.bg.alt.default;
    //     case 'dark':
    //       return system.color.bg.primary.default;
    //     default:
    //       return base.soap200;
    //   }
    // };

    // const getBackgroundColor = (
    //   background?: Property.BackgroundColor,
    //   variant?: 'light' | 'dark'
    // ) => {
    //   if (background) {
    //     return background;
    //   }
    //   return getVariantBackgroundColor(variant);
    // };

    // const backgroundColor = getBackgroundColor(background, variant);
    // const iconColor = pickForegroundColor(
    //   backgroundColor,
    //   system.color.fg.inverse,
    //   system.color.fg.default
    // );

    return (
      <Element
        ref={ref}
        aria-label={altText}
        onClick={onClick}
        {...mergeStyles(elemProps, [
          avatarStencil({
            variant,
            size: typeof size === 'number' ? px2rem(size) : size,
            objectFit,
            isImageLoaded: imageLoaded,
            hasOnClick: onClick !== undefined,
          }),
        ])}
      >
        <SystemIcon icon={userIcon} data-element-avatar-icon />
        {url && <img data-element-avatar-image src={url} alt={altText} onLoad={loadImage} />}
      </Element>
    );
  },
});
