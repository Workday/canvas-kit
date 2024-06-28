import React, {useState} from 'react';
import {Property} from 'csstype';
import {createComponent, focusRing} from '@workday/canvas-kit-react/common';
import {cssVar, createStencil, calc} from '@workday/canvas-kit-styling';
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
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'extraExtraLarge';
  /**
   * The alt text of the Avatar image. This prop is also used for the aria-label
   * @default Avatar
   */
  altText?: string;
  background?: string;
  url?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  objectFit?: Property.ObjectFit;
}

const avatarContainerStencil = createStencil({
  base: {
    background: base.soap200,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    borderRadius: system.shape.round,
    '&:not([disabled])': {
      '&:focus': {
        outline: 'none',
        ...focusRing({separation: 2}),
      },
    },
    // NOTE: Why does this break the build?
    // ...hideMouseFocus,
  },
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
      },
    },
    size: {
      extraSmall: {
        width: system.space.x4,
        height: system.space.x4,
      },
      small: {
        width: system.space.x6,
        height: system.space.x6,
      },
      medium: {
        width: system.space.x8,
        height: system.space.x8,
      },
      large: {
        width: system.space.x10,
        height: system.space.x10,
      },
      extraLarge: {
        width: system.space.x16,
        height: system.space.x16,
      },
      extraExtraLarge: {
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
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
  },
});

const avatarIconStencil = createStencil({
  vars: {size: ''},
  base: ({size}) => ({
    transition: 'opacity 150ms linear',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: cssVar(size, system.space.x8),
    height: cssVar(size, system.space.x8),
  }),
  modifiers: {
    variant: {
      light: {
        backgroundColor: system.color.bg.alt.default,
      },
      dark: {
        backgroundColor: system.color.bg.primary.default,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
      },
    },
    size: {
      extraSmall: {
        [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
      },
      small: {
        [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
      },
      medium: {
        [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
      },
      large: {
        [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
      },
      extraLarge: {
        [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
      },
      extraExtraLarge: {
        [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
      },
    },
    isImageLoaded: {
      true: {
        opacity: 0,
      },
      false: {
        opacity: 1,
      },
    },
  },
  defaultModifiers: {
    isImageLoaded: 'false',
  },
});

// NOTE: Objectfit not working
const avatarImageStencil = createStencil({
  vars: {objectFit: ''},
  base: ({objectFit}) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.circle,
    transition: 'opacity 150ms linear',
    objectFit: cssVar(objectFit, 'container'),
  }),
  modifiers: {
    isImageLoaded: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
  defaultModifiers: {
    isImageLoaded: 'false',
  },
});

export const Avatar: AvatarOverload = createComponent('button')({
  displayName: 'Avatar',
  Component: (
    {variant, size, altText, url, onClick, objectFit, background, ...elemProps}: AvatarProps,
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

    // NOTE: Background color isn't dynamic - only default is variant light or dark

    return (
      <Element
        ref={ref}
        aria-label={altText}
        onClick={onClick}
        {...mergeStyles(elemProps, [
          avatarContainerStencil({
            variant,
            size,
            hasOnClick: onClick !== undefined,
          }),
        ])}
      >
        <SystemIcon
          icon={userIcon}
          {...mergeStyles(elemProps, [
            avatarIconStencil({
              variant,
              isImageLoaded: imageLoaded,
              size,
            }),
          ])}
        />
        {url && (
          <img
            {...mergeStyles(elemProps, [
              avatarImageStencil({
                isImageLoaded: imageLoaded,
                objectFit,
              }),
            ])}
            src={url}
            alt={altText}
            onLoad={loadImage}
          />
        )}
      </Element>
    );
  },
});
